import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import WorkGrid from "@/components/motion/WorkGrid";
import WorkPageHero from "@/components/motion/WorkPageHero";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      {/* ── Hero — staggered mount ───────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-16">
        <WorkPageHero />
      </section>

      {/* ── Cases Grid — staggered per card ──────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <WorkGrid projects={projects} />
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 mt-24">
        <FadeUp>
          <div className="text-center py-20 bg-surface-container-lowest rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.05),transparent_70%)]" />
            <div className="relative z-10 px-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-8 text-on-surface">
                HAVE A PROJECT
                <br />
                IN MIND?
              </h2>
              <Link
                href="/contact"
                className="inline-block bg-primary text-on-primary-fixed px-12 py-5 rounded-full font-label font-black text-sm tracking-[0.2em] uppercase hover:bg-primary-container hover:scale-105 active:scale-95 transition-all duration-150"
              >
                REACH OUT
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
