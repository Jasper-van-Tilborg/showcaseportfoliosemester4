"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import AboutHero from "@/components/motion/AboutHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";

const tools = ["NEXT.JS", "FIGMA", "SUPABASE", "AI API"];

// Maps display tool name to keywords that match project tags
const toolTagMap: Record<string, string[]> = {
  "NEXT.JS":  ["next.js", "next"],
  "FIGMA":    ["figma"],
  "SUPABASE": ["supabase"],
  "AI API":   ["claude", "ai"],
};

const capabilityIcons = ["design_services", "code", "photo_camera"];

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const projectCarouselRef = useRef<HTMLDivElement>(null);
  const projectDragState = useRef({ startX: 0, scrollLeft: 0 });
  const projectHasDragged = useRef(false);
  const [projectsAtEnd, setProjectsAtEnd] = useState(false);

  const activeProjects = activeTool
    ? projects.filter((p) =>
        p.tags.some((tag) =>
          toolTagMap[activeTool]?.some((kw) => tag.toLowerCase().includes(kw))
        )
      )
    : [];

  function handleSetTool(tool: string | null) {
    setActiveTool(tool);
    setTimeout(() => {
      if (projectCarouselRef.current) {
        projectCarouselRef.current.scrollLeft = 0;
        setProjectsAtEnd(false);
      }
    }, 50);
  }

  function onProjectPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = projectCarouselRef.current;
    if (!el) return;
    projectHasDragged.current = false;
    projectDragState.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }
  function onProjectPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = projectCarouselRef.current;
    if (!el?.hasPointerCapture(e.pointerId)) return;
    e.preventDefault();
    const moved = e.clientX - projectDragState.current.startX;
    if (Math.abs(moved) > 4) projectHasDragged.current = true;
    el.scrollLeft = projectDragState.current.scrollLeft - moved;
  }
  function onProjectPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = projectCarouselRef.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.style.cursor = "grab";
  }
  function onProjectScroll() {
    const el = projectCarouselRef.current;
    if (!el) return;
    setProjectsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = carouselRef.current;
    if (!el) return;
    dragState.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!carouselRef.current?.hasPointerCapture(e.pointerId)) return;
    e.preventDefault();
    carouselRef.current.scrollLeft = dragState.current.scrollLeft - (e.clientX - dragState.current.startX);
  }
  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = carouselRef.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.style.cursor = "grab";
  }

  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      <AboutHero />

      {/* ── Personal Photos ───────────────────────────────────── */}
      <section className="mb-24 -mx-8 md:-mx-16">
        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide px-8 md:px-16 cursor-grab select-none"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" } as React.CSSProperties}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="flex gap-3 md:gap-5 py-10" style={{ width: "max-content" }}>
            {[
              { src: "/persoonlijkefotos/persoonlijkefoto6.jpeg",  position: "50% 50%",  offset: "" },
              { src: "/persoonlijkefotos/persoonlijkefoto2.jpeg",  position: "50% 50%",  offset: "-mt-10" },
              { src: "/persoonlijkefotos/persoonlijkefoto11.jpeg", position: "50% 50%",  offset: "" },
              { src: "/persoonlijkefotos/persoonlijkefoto4.jpeg",  position: "50% 50%",  offset: "mt-10" },
              { src: "/persoonlijkefotos/persoonlijkefoto1.jpeg",  position: "100% 50%", offset: "" },
              { src: "/persoonlijkefotos/persoonlijkefoto7.jpeg",  position: "50% 50%",  offset: "-mt-10" },
              { src: "/persoonlijkefotos/persoonlijkefoto5.JPG",   position: "50% 50%",  offset: "mt-10" },
              { src: "/persoonlijkefotos/persoonlijkefoto12.jpeg", position: "75% 50%",  offset: "" },
            ].map((photo, i) => (
              <FadeUp key={photo.src} delay={i * 0.07} className={`shrink-0 w-[42vw] md:w-[20vw] ${photo.offset}`}>
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cinematic-shadow">
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    quality={100}
                    className="object-cover pointer-events-none"
                    style={{ objectPosition: photo.position }}
                    draggable={false}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ──────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-headline font-bold tracking-tight border-l-4 border-primary-container pl-5 md:pl-8 py-2 uppercase">
              {t.about.journeyHeading.split("\n")[0]}
              <br />
              {t.about.journeyHeading.split("\n")[1]}
            </h2>
          </FadeUp>
          <div className="lg:col-span-8 space-y-8 text-lg md:text-2xl leading-relaxed text-on-surface-variant font-light font-body">
            <FadeUp delay={0.1}><p>{t.about.journeyP1}</p></FadeUp>
            <FadeUp delay={0.22}><p>{t.about.journeyP2}</p></FadeUp>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <FadeUp className="mb-12 flex items-center gap-6">
          <p className="text-xs uppercase tracking-[0.5em] text-primary font-headline font-bold shrink-0">
            {t.about.capabilitiesLabel}
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
        </FadeUp>

        <div>
          {t.about.capabilities.map((cap, i) => (
            <FadeUp key={cap.title} delay={i * 0.1}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-10 md:py-14 border-t border-white/5 hover:border-primary/20 transition-colors duration-300 cursor-default">
                <div className="md:col-span-7 flex gap-5 md:gap-8 items-start">
                  <span className="font-headline text-primary/20 text-xs tracking-widest pt-2 group-hover:text-primary/50 transition-colors duration-300 shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline text-[clamp(2.2rem,6vw,5.5rem)] font-bold tracking-tighter uppercase leading-none group-hover:text-primary transition-colors duration-500">
                    {cap.title}{" "}
                    <span className="text-on-surface-variant group-hover:text-white transition-colors duration-300">
                      {cap.subtitle}
                    </span>
                  </h3>
                </div>
                <div className="md:col-span-5 flex gap-4 items-start pl-10 md:pl-0">
                  <Icon
                    name={capabilityIcons[i]}
                    className="text-primary/30 group-hover:text-primary transition-colors duration-500 shrink-0 mt-0.5"
                  />
                  <p className="text-on-surface-variant text-base leading-relaxed font-body">
                    {cap.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-white/5" />
        </div>

        <FadeUp className="mt-12 mb-4 flex items-center gap-6">
          <p className="text-xs uppercase tracking-[0.5em] text-primary font-headline font-bold shrink-0">
            Toolset
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
        </FadeUp>

        <div className="grid grid-cols-2 border-l border-t border-white/5">
          {tools.map((tool, i) => {
            const isOpen = activeTool === tool;
            return (
              <FadeUp key={tool} delay={i * 0.06}>
                <button
                  onClick={() => handleSetTool(isOpen ? null : tool)}
                  className={`group w-full relative border-r border-b border-white/5 p-6 md:p-8 overflow-hidden text-left transition-colors duration-300 ${isOpen ? "bg-primary/5" : ""}`}
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${isOpen ? "w-full" : "w-0 group-hover:w-full"}`} />
                  <div className="flex items-start justify-between relative">
                    <div>
                      <span className={`block font-headline text-[10px] tracking-widest mb-3 transition-colors duration-300 ${isOpen ? "text-primary/50" : "text-primary/20 group-hover:text-primary/50"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-headline font-bold text-xl md:text-2xl tracking-tight uppercase transition-colors duration-300 ${isOpen ? "text-on-surface" : "text-on-surface/40 group-hover:text-on-surface"}`}>
                        {tool}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 mt-1"
                    >
                      <Icon name="expand_more" className={`text-base transition-colors duration-300 ${isOpen ? "text-primary" : "text-on-surface-variant/20 group-hover:text-on-surface-variant/60"}`} />
                    </motion.div>
                  </div>
                </button>
              </FadeUp>
            );
          })}
        </div>

        <AnimatePresence>
          {activeTool && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="border border-t-0 border-white/5 rounded-b-2xl p-5 md:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTool}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                {activeProjects.length > 0 ? (
                  <div className="relative">
                    <div
                      ref={projectCarouselRef}
                      className="overflow-x-auto scrollbar-hide cursor-grab select-none"
                      style={{ msOverflowStyle: "none", scrollbarWidth: "none" } as React.CSSProperties}
                      onPointerDown={onProjectPointerDown}
                      onPointerMove={onProjectPointerMove}
                      onPointerUp={onProjectPointerUp}
                      onScroll={onProjectScroll}
                    >
                      <div className="flex gap-4 w-full">
                        {activeProjects.map((p) => {
                          const themeVars = p.theme ? ({
                            "--color-primary":            p.theme.primary,
                            "--color-primary-container":  p.theme.primaryContainer,
                            "--color-on-primary":         p.theme.onPrimary,
                            "--color-on-primary-fixed":   p.theme.background,
                            "--color-on-surface":         p.theme.onSurface,
                            "--color-on-surface-variant": p.theme.onSurfaceVariant,
                          } as React.CSSProperties) : undefined;
                          return (
                            <Link
                              key={p.slug}
                              href={`/work/${p.slug}`}
                              className="group relative flex overflow-hidden bg-surface-container-low rounded-2xl shrink-0 w-[calc(33.333%-0.677rem)] aspect-video transition-all duration-500 ease-out grayscale hover:grayscale-0"
                              onClick={(e) => { if (projectHasDragged.current) e.preventDefault(); }}
                              style={themeVars}
                            >
                              <div className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-700" style={{ background: p.coverGradient }} />
                              <div className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-500 group-hover:opacity-0" />
                              {p.coverImage && (
                                <div className="absolute inset-0">
                                  <Image src={p.coverImage} alt={p.title} fill quality={90} className="object-contain scale-[0.7] group-hover:scale-[0.8] transition-transform duration-500 pointer-events-none" draggable={false} sizes="(max-width: 768px) 75vw, 35vw" />
                                </div>
                              )}
                              <div className="absolute top-4 left-4 z-10">
                                <span className="glass-card px-3 py-1 rounded-full text-[10px] font-headline tracking-widest text-primary border border-primary/20">
                                  {p.category}
                                </span>
                              </div>
                              <div className="absolute bottom-0 left-0 w-full px-5 py-5 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end justify-between">
                                <h3 className="font-headline font-bold text-on-surface tracking-tight text-lg md:text-xl">{p.title}</h3>
                                <Icon name="arrow_outward" className="text-xl text-primary opacity-60 group-hover:opacity-100 shrink-0 ml-3" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    {activeProjects.length > 1 && !projectsAtEnd && (
                      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-surface-container-lowest to-transparent pointer-events-none flex items-center justify-end pr-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Icon name="chevron_right" className="text-white/70 text-base" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[11px] font-headline tracking-widest uppercase text-on-surface-variant/30">
                    {lang === "nl" ? "Nog geen projecten met deze tool" : "No projects with this tool yet"}
                  </p>
                )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Education ────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-12 font-headline font-bold">
            {t.about.educationLabel}
          </p>
        </FadeUp>
        <div className="space-y-0">
          {t.about.education.map((edu, i) => (
            <FadeUp key={edu.degree} delay={i * 0.1}>
              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-t border-white/5 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
                <div>
                  <h4 className="text-xl md:text-3xl font-headline font-bold mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-on-surface-variant font-label text-lg">{edu.school}</p>
                </div>
                <span className="text-primary/60 font-headline text-xl mt-4 md:mt-0 tracking-widest">
                  {edu.period}
                </span>
              </div>
            </FadeUp>
          ))}
          <div className="border-b border-white/5" />
        </div>
      </section>

    </main>
  );
}
