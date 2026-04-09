"use client";

import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import AboutHero from "@/components/motion/AboutHero";
import { useLanguage } from "@/contexts/LanguageContext";

const tools = ["FIGMA", "ADOBE CC", "AFTER EFFECTS", "NEXT.JS", "CLAUDE", "AI TOOLS"];

const capabilityIcons = ["design_services", "code", "photo_camera"];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      <AboutHero />

      {/* ── Journey ──────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-headline font-bold tracking-tight border-l-4 border-primary-container pl-8 py-2 uppercase">
                {t.about.journeyHeading.split("\n")[0]}
                <br />
                {t.about.journeyHeading.split("\n")[1]}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8 text-2xl leading-relaxed text-on-surface-variant font-light font-body">
              <p>{t.about.journeyP1}</p>
              <p>{t.about.journeyP2}</p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <FadeUp>
        <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.5em] text-primary/60 font-headline mb-4">
              {t.about.capabilitiesLabel}
            </p>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border border-white/5 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {t.about.capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="p-10 md:p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500 group"
                >
                  <div className="flex justify-between items-start mb-16">
                    <span className="font-headline text-primary/30 text-lg tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon name={capabilityIcons[i]} className="text-primary/40 group-hover:text-primary transition-colors duration-500" />
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

            <div className="border-t border-white/10 bg-black/40 overflow-hidden py-6 relative">
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee whitespace-nowrap">
                {[...tools, ...tools].map((tool, i) => (
                  <span key={i} className="inline-flex items-center gap-6 px-6">
                    <span className="font-headline font-bold text-2xl md:text-3xl tracking-tighter text-on-surface/40 uppercase">
                      {tool}
                    </span>
                    <span className="text-primary/30 text-xl font-headline">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── Education ────────────────────────────────────────── */}
      <FadeUp>
        <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-12 font-headline font-bold">
            {t.about.educationLabel}
          </p>
          <div className="space-y-0">
            {t.about.education.map((edu) => (
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
