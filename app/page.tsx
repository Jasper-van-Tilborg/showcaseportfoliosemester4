"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import HeroContent from "@/components/motion/HeroContent";
import { featuredProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto w-full relative">
          <HeroContent />

          {/* Floating visual accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] aspect-square hidden lg:block animate-float">
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
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────────── */}
      <section className="px-8 md:px-16 lg:px-24 py-10">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <FadeUp delay={0} className="relative">
            <div className="w-full aspect-[4/5] max-h-[72vh] rounded-2xl overflow-hidden glass-card cinematic-shadow">
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
                {t.home.projects}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t.home.designerHeading.split("\n")[0]}
              <br />
              {t.home.designerHeading.split("\n")[1]}<span className="text-primary">{t.home.designerAccent}</span>.
            </h2>
            <p className="text-on-surface-variant text-lg mb-6 leading-relaxed font-body">
              {t.home.designerBody}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-primary font-headline font-bold uppercase tracking-widest text-sm group"
            >
              {t.home.designerCta}
              <Icon name="arrow_forward" className="group-hover:translate-x-2 transition-transform duration-200 text-primary" />
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
                {t.home.featuredLabel.split(" ")[0]}
                <br />
                {t.home.featuredLabel.split(" ").slice(1).join(" ")}
              </h2>
              <Link
                href="/work"
                className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-xs tracking-widest uppercase font-bold group"
              >
                {t.home.allProjects}
                <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-12 gap-5">
            {featuredProjects[0] && (
              <FadeUp delay={0.05} className="md:col-span-8">
                <Link
                  href={`/work/${featuredProjects[0].slug}`}
                  className="group block transition-all duration-500 ease-out grayscale hover:grayscale-0"
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
                      <div className="absolute inset-0">
                        <Image
                          src={featuredProjects[0].coverImage}
                          alt={featuredProjects[0].title}
                          fill
                          quality={100}
                          className="object-contain scale-[0.7] group-hover:scale-[0.8] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 66vw"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-500 group-hover:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/5" />
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
                  className="group block h-full transition-all duration-500 ease-out grayscale hover:grayscale-0"
                  style={featuredProjects[1].theme ? ({
                    "--color-primary":            featuredProjects[1].theme.primary,
                    "--color-primary-container":  featuredProjects[1].theme.primaryContainer,
                    "--color-on-primary":         featuredProjects[1].theme.onPrimary,
                    "--color-on-primary-fixed":   featuredProjects[1].theme.background,
                    "--color-on-surface":         featuredProjects[1].theme.onSurface,
                    "--color-on-surface-variant": featuredProjects[1].theme.onSurfaceVariant,
                  } as React.CSSProperties) : undefined}
                >
                  <div className="relative w-full h-full min-h-[300px] glass-card rounded-3xl overflow-hidden border border-outline-variant/10 cinematic-shadow">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: featuredProjects[1].coverGradient }}
                    />
                    {featuredProjects[1].coverImage && (
                      <div className="absolute inset-0">
                        <Image
                          src={featuredProjects[1].coverImage}
                          alt={featuredProjects[1].title}
                          fill
                          quality={100}
                          className="object-contain scale-[0.7] group-hover:scale-[0.8] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-500 group-hover:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/5" />
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
                  className="group block transition-all duration-500 ease-out grayscale hover:grayscale-0"
                >
                  <div className="relative w-full aspect-[21/9] glass-card rounded-3xl overflow-hidden border border-outline-variant/10 cinematic-shadow">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: featuredProjects[2].coverGradient }}
                    />
                    <div className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-500 group-hover:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/5" />
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
                {t.home.ctaHeading1}
                <br />
                {t.home.ctaHeading2}<span className="text-primary italic">{t.home.ctaHeadingAccent}</span>.
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-10 leading-relaxed font-body">
                {t.home.ctaBody}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-on-primary-fixed px-12 py-5 rounded-full font-headline font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-transform duration-150"
              >
                {t.home.ctaButton}
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
