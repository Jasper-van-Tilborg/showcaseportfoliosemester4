import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import AboutHero from "@/components/motion/AboutHero";

const capabilities = [
  {
    number: "01",
    title: "BRAND",
    subtitle: "STRATEGY",
    icon: "token",
    description:
      "Building visual identities that stand the test of time. From core values to full brand language.",
  },
  {
    number: "02",
    title: "UI / UX",
    subtitle: "DESIGN",
    icon: "auto_awesome",
    description:
      "Logical structures within emotive environments. High-fidelity prototyping and user flow optimisation.",
  },
  {
    number: "03",
    title: "MOTION",
    subtitle: "STUDIO",
    icon: "movie_edit",
    description:
      "Breathing life into static layouts through cinematic transitions and micro-interactions.",
  },
];

const tools = [
  { category: "DESIGN", items: "FIGMA / ADOBE CC" },
  { category: "MOTION", items: "AFTER EFFECTS" },
  { category: "CODE",   items: "NEXT.JS / TAILWIND" },
  { category: "BRAND",  items: "MIRO / NOTION" },
];

const education = [
  {
    degree: "ICT & Media Design",
    school: "Fontys University of Applied Sciences",
    period: "2023 — Present",
  },
  {
    degree: "Visual Arts & Design Foundation",
    school: "Pre-University Education",
    period: "2017 — 2023",
  },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      {/* ── Hero — staggered mount ───────────────────────────── */}
      <AboutHero />

      {/* ── Journey ──────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-headline font-bold tracking-tight border-l-4 border-primary-container pl-8 py-2 uppercase">
              The
              <br />
              Journey
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8 text-2xl leading-relaxed text-on-surface-variant font-light font-body">
            <p>
              My creative path began at the intersection of visual storytelling and
              strategic communication. Exploring how typography, colour, and rhythm
              can shape how a brand is felt — not just seen.
            </p>
            <p>
              Currently pursuing Media Design at Fontys University, I focus on the
              symbiosis of{" "}
              <span className="text-on-surface underline decoration-primary/30 underline-offset-8">
                Brand Strategy
              </span>{" "}
              and{" "}
              <span className="text-on-surface underline decoration-primary/30 underline-offset-8">
                Visual Systems Design
              </span>
              .
            </p>
          </div>
        </div>
        </FadeUp>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <FadeUp>
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/60 font-headline mb-4">
            Service Capabilities
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/5 relative">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {capabilities.map((cap) => (
              <div
                key={cap.number}
                className="p-10 md:p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500 group"
              >
                <div className="flex justify-between items-start mb-16">
                  <span className="font-headline text-primary/30 text-lg tracking-widest">
                    {cap.number}
                  </span>
                  <Icon
                    name={cap.icon}
                    className="text-primary/40 group-hover:text-primary transition-colors duration-500"
                  />
                </div>
                <h3 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter uppercase mb-5 leading-none group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                  <br />
                  <span className="text-outline group-hover:text-white transition-colors">
                    {cap.subtitle}
                  </span>
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-10 font-body">
                  {cap.description}
                </p>
                <div className="w-10 h-[1px] bg-primary/40 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="p-10 md:p-12 lg:p-16 border-t border-white/10 bg-black/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div>
                <h4 className="text-sm font-headline uppercase tracking-[0.3em] text-primary mb-1">
                  Core Arsenal
                </h4>
                <p className="text-xs text-on-surface-variant font-label">PRODUCTION TOOL STACK</p>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {tools.map(({ category, items }) => (
                  <div key={category} className="flex flex-col">
                    <span className="text-[10px] text-primary/40 font-headline uppercase tracking-widest mb-1">
                      {category}
                    </span>
                    <span className="text-base font-headline font-medium text-on-surface">
                      {items}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* ── Education ────────────────────────────────────────── */}
      <FadeUp>
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-12 font-headline font-bold">
          Academic Foundation
        </p>
        <div className="space-y-0">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-t border-white/5 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl"
            >
              <div>
                <h4 className="text-2xl md:text-3xl font-headline font-bold mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-on-surface-variant font-label text-lg">{edu.school}</p>
              </div>
              <span className="text-primary/60 font-headline text-xl mt-4 md:mt-0 tracking-widest">
                {edu.period}
              </span>
            </div>
          ))}
          <div className="border-b border-white/5" />
        </div>
      </section>
      </FadeUp>
    </main>
  );
}
