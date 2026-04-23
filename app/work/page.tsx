"use client";

import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import WorkGrid from "@/components/motion/WorkGrid";
import WorkPageHero from "@/components/motion/WorkPageHero";
import { visibleProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WorkPage() {
  const { t } = useLanguage();
  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-16">
        <WorkPageHero />
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <WorkGrid projects={visibleProjects} />
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mt-24">
        <FadeUp>
          <div className="text-center py-20 bg-surface-container-lowest rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.05),transparent_70%)]" />
            <div className="relative z-10 px-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-8 text-on-surface">
                {t.work.ctaHeading1}
                <br />
                {t.work.ctaHeading2}
              </h2>
              <Link
                href="/contact"
                className="inline-block bg-primary text-on-primary-fixed px-12 py-5 rounded-full font-label font-black text-sm tracking-[0.2em] uppercase hover:bg-primary-container hover:scale-105 active:scale-95 transition-all duration-150"
              >
                {t.work.ctaButton}
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
