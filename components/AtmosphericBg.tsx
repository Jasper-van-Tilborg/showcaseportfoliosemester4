export default function AtmosphericBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-[#131313]" />
      {/* Top centre warm halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,92,0,0.12)_0%,transparent_60%)]" />
      {/* Left mid blob — drifts slowly */}
      <div className="absolute top-[25%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[rgba(255,92,0,0.05)] blur-[120px] animate-blob-a" />
      {/* Right lower blob — drifts at different phase */}
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[rgba(255,181,154,0.04)] blur-[100px] animate-blob-b" />
      {/* Bottom centre glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(255,92,0,0.07)_0%,transparent_50%)]" />
    </div>
  );
}
