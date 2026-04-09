import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import HeroContent from "@/components/motion/HeroContent";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="relative z-10">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-20 overflow-hidden">
        <HeroContent />

        {/* Floating visual accent — CSS float loop */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] aspect-square hidden lg:block animate-float">
          <div className="w-full h-full glass-panel rounded-3xl border border-outline-variant/10 relative overflow-hidden cinematic-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-primary/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,92,0,0.3),transparent_60%)]" />
            <div className="absolute bottom-8 left-8">
              <span className="font-headline text-5xl font-bold text-primary-container/40 tracking-tighter">
                JVT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────────── */}
      <section className="px-8 md:px-16 lg:px-24 py-14">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeUp delay={0} className="relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden glass-card cinematic-shadow">
              <div className="w-full h-full bg-gradient-to-b from-surface-container via-surface-container-high to-surface-container-highest flex items-end p-8">
                <p className="font-headline text-5xl font-bold text-on-surface/20 tracking-tighter uppercase leading-none">
                  Jasper
                  <br />
                  van
                  <br />
                  Tilborg
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass-panel p-5 md:p-6 rounded-2xl border border-primary/20 cinematic-shadow">
              <span className="text-primary font-headline text-4xl font-bold italic">5+</span>
              <p className="text-[10px] tracking-widest uppercase text-on-surface-variant mt-1 font-bold font-label">
                Projects this semester
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
              The Designer
              <br />
              Behind the <span className="text-primary">Work</span>.
            </h2>
            <p className="text-on-surface-variant text-lg mb-6 leading-relaxed font-body">
              I'm a media design student at Fontys University of Applied Sciences,
              specialising in brand strategy and visual design. My work lives at the
              intersection of clear thinking and compelling aesthetics.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-primary font-headline font-bold uppercase tracking-widest text-sm group"
            >
              Full Biography
              <Icon
                name="arrow_forward"
                className="group-hover:translate-x-2 transition-transform duration-200 text-primary"
              />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Featured Works ───────────────────────────────────── */}
      <section className="px-8 md:px-16 lg:px-24 py-14">
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp>
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight uppercase">
                FEATURED
                <br />
                WORKS
              </h2>
              <Link
                href="/work"
                className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-xs tracking-widest uppercase font-bold group"
              >
                All Projects
                <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-12 gap-5">
            {featuredProjects[0] && (
              <FadeUp delay={0.05} className="md:col-span-8">
                <Link
                  href={`/work/${featuredProjects[0].slug}`}
                  className="group block transition-transform duration-300 ease-out hover:-translate-y-2"
                  style={featuredProjects[0].theme ? ({
                    "--color-primary":            featuredProjects[0].theme.primary,
                    "--color-primary-container":  featuredProjects[0].theme.primaryContainer,
                    "--color-on-primary":         featuredProjects[0].theme.onPrimary,
                    "--color-on-primary-fixed":   featuredProjects[0].theme.background,
                    "--color-on-surface":         featuredProjects[0].theme.onSurface,
                    "--color-on-surface-variant": featuredProjects[0].theme.onSurfaceVariant,
                  } as React.CSSProperties) : undefined}
                >
                  <div className="relative w-full aspect-video glass-card rounded-3xl overflow-hidden border border-outline-variant/10 cinematic-shadow">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: featuredProjects[0].coverGradient }}
                    />
                    {featuredProjects[0].coverImage && (
                      <div className="absolute inset-12 group-hover:inset-0 transition-all duration-500 overflow-hidden rounded-xl group-hover:rounded-none">
                        <Image
                          src={featuredProjects[0].coverImage}
                          alt={featuredProjects[0].title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 66vw"
                        />
                      </div>
                    )}
                    {/* Grey desaturating overlay — fades on hover to reveal colour */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 via-neutral-800/80 to-neutral-700/70 transition-opacity duration-500 group-hover:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/5 backdrop-blur-[2px]" />
                    <div className="absolute bottom-8 left-8">
                      <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block font-label">
                        {featuredProjects[0].category} / {featuredProjects[0].year}
                      </span>
                      <h3 className="font-headline text-3xl font-bold text-on-surface tracking-tight">
                        {featuredProjects[0].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            )}

            {featuredProjects[1] && (
              <FadeUp delay={0.12} className="md:col-span-4">
                <Link
                  href={`/work/${featuredProjects[1].slug}`}
                  className="group block h-full transition-transform duration-300 ease-out hover:-translate-y-2"
                >
                  <div className="relative w-full h-full min-h-[300px] glass-card rounded-3xl overflow-hidden border border-outline-variant/10 cinematic-shadow">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: featuredProjects[1].coverGradient }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/5 backdrop-blur-[2px]" />
                    <div className="absolute bottom-8 left-8">
                      <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block font-label">
                        {featuredProjects[1].category}
                      </span>
                      <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight">
                        {featuredProjects[1].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            )}

            {featuredProjects[2] && (
              <FadeUp delay={0.08} className="md:col-span-12">
                <Link
                  href={`/work/${featuredProjects[2].slug}`}
                  className="group block transition-transform duration-300 ease-out hover:-translate-y-2"
                >
                  <div className="relative w-full aspect-[21/9] glass-card rounded-3xl overflow-hidden border border-outline-variant/10 cinematic-shadow">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: featuredProjects[2].coverGradient }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/5 backdrop-blur-[2px]" />
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div>
                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block font-label">
                          {featuredProjects[2].category} / {featuredProjects[2].year}
                        </span>
                        <h3 className="font-headline text-3xl font-bold text-on-surface tracking-tight">
                          {featuredProjects[2].title}
                        </h3>
                      </div>
                      <Icon name="arrow_outward" className="text-3xl text-primary" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <section className="px-8 md:px-16 lg:px-24 py-14 pb-20 md:pb-20">
        <FadeUp>
          <div className="max-w-5xl mx-auto bg-surface-container-lowest py-20 md:py-24 px-8 md:px-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden text-center cinematic-shadow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.05),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-on-surface mb-6">
                LET'S BUILD
                <br />
                SOMETHING <span className="text-primary italic">GREAT</span>.
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-10 leading-relaxed font-body">
                Open for collaborations, internships, and creative projects.
                Let's connect and make something worth showing.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-on-primary-fixed px-12 py-5 rounded-full font-headline font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-transform duration-150"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
