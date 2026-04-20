"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface LightPillarProps {
  topColor?: string;
  bottomColor?: string;
  intensity?: number;
  rotationSpeed?: number;
  glowAmount?: number;
  pillarWidth?: number;
  pillarHeight?: number;
  noiseIntensity?: number;
  pillarRotation?: number;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
  className?: string;
}

const LightPillar: React.FC<LightPillarProps> = ({
  topColor = "#ffffff",
  bottomColor = "#ffffff",
  intensity = 1.0,
  rotationSpeed = 0.3,
  glowAmount = 0.005,
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  pillarRotation = 0,
  mixBlendMode = "screen",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const timeRef = useRef(0);
  const rotSpeedRef = useRef(rotationSpeed);

  useEffect(() => { rotSpeedRef.current = rotationSpeed; }, [rotationSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, precision: "highp", stencil: false, depth: false });
    } catch {
      return;
    }
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const parseColor = (hex: string) => { const c = new THREE.Color(hex); return new THREE.Vector3(c.r, c.g, c.b); };

    const waveAngle = 0.4;
    const waveSin = new Float32Array(4).fill(Math.sin(waveAngle));
    const waveCos = new Float32Array(4).fill(Math.cos(waveAngle));
    const pillarRotRad = (pillarRotation * Math.PI) / 180;

    const material = new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uIntensity;
        uniform float uGlowAmount;
        uniform float uPillarWidth;
        uniform float uPillarHeight;
        uniform float uNoiseIntensity;
        uniform float uRotCos;
        uniform float uRotSin;
        uniform float uPillarRotCos;
        uniform float uPillarRotSin;
        uniform float uWaveSin[4];
        uniform float uWaveCos[4];
        varying vec2 vUv;
        const float PI = 3.141592653589793;
        const float EPSILON = 0.001;
        const float E = 2.71828182845904523536;

        float noise(vec2 coord) {
          vec2 r = (E * sin(E * coord));
          return fract(r.x * r.y * (1.0 + coord.x));
        }

        void main() {
          vec2 fragCoord = vUv * uResolution;
          vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;
          uv = vec2(uv.x * uPillarRotCos - uv.y * uPillarRotSin, uv.x * uPillarRotSin + uv.y * uPillarRotCos);

          vec3 origin = vec3(0.0, 0.0, -10.0);
          vec3 direction = normalize(vec3(uv, 1.0));
          float depth = 0.1;
          vec3 color = vec3(0.0);

          for (int i = 0; i < 80; i++) {
            vec3 pos = origin + direction * depth;
            float newX = pos.x * uRotCos - pos.z * uRotSin;
            float newZ = pos.x * uRotSin + pos.z * uRotCos;
            pos.x = newX; pos.z = newZ;

            vec3 deformed = pos;
            deformed.y *= uPillarHeight;
            deformed += vec3(0.0, uTime, 0.0);

            float freq = 1.0; float amp = 1.0;
            for (int j = 0; j < 4; j++) {
              float wx = deformed.x * uWaveCos[j] - deformed.z * uWaveSin[j];
              float wz = deformed.x * uWaveSin[j] + deformed.z * uWaveCos[j];
              deformed.x = wx; deformed.z = wz;
              deformed += cos(deformed.zxy * freq - uTime * float(j) * 2.0) * amp;
              freq *= 2.0; amp *= 0.5;
            }

            float fieldDist = length(cos(deformed.xz)) - 0.2;
            float radialBound = length(pos.xz) - uPillarWidth;
            float k = 4.0;
            float h = max(k - abs(-radialBound - (-fieldDist)), 0.0);
            fieldDist = -(min(-radialBound, -fieldDist) - h * h * 0.25 / k);
            fieldDist = abs(fieldDist) * 0.15 + 0.01;

            color += mix(uTopColor, uBottomColor, smoothstep(-15.0, 15.0, pos.x)) / fieldDist;
            if (fieldDist < EPSILON || depth > 50.0) break;
            depth += fieldDist;
          }

          float norm = uPillarWidth / 3.0;
          color = tanh(color * uGlowAmount / norm);
          color -= noise(gl_FragCoord.xy) / 15.0 * uNoiseIntensity;
          gl_FragColor = vec4(color * uIntensity, 1.0);
        }
      `,
      uniforms: {
        uTime:           { value: 0 },
        uResolution:     { value: new THREE.Vector2(w, h) },
        uTopColor:       { value: parseColor(topColor) },
        uBottomColor:    { value: parseColor(bottomColor) },
        uIntensity:      { value: intensity },
        uGlowAmount:     { value: glowAmount },
        uPillarWidth:    { value: pillarWidth },
        uPillarHeight:   { value: pillarHeight },
        uNoiseIntensity: { value: noiseIntensity },
        uRotCos:         { value: 1.0 },
        uRotSin:         { value: 0.0 },
        uPillarRotCos:   { value: Math.cos(pillarRotRad) },
        uPillarRotSin:   { value: Math.sin(pillarRotRad) },
        uWaveSin:        { value: waveSin },
        uWaveCos:        { value: waveCos },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let last = performance.now();
    const animate = (now: number) => {
      const delta = now - last;
      last = now;
      timeRef.current += (delta / 1000) * rotSpeedRef.current;
      material.uniforms.uTime.value = timeRef.current;
      const angle = timeRef.current * 0.3;
      material.uniforms.uRotCos.value = Math.cos(angle);
      material.uniforms.uRotSin.value = Math.sin(angle);
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      const nw = container.clientWidth, nh = container.clientHeight;
      renderer.setSize(nw, nh);
      material.uniforms.uResolution.value.set(nw, nh);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      renderer.dispose();
      renderer.forceContextLoss();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      material.dispose();
      rendererRef.current = null;
      materialRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute ${className}`}
      style={{ mixBlendMode }}
    />
  );
};

export default LightPillar;
