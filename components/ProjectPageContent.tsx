"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import MountReveal from "@/components/motion/MountReveal";
import FadeUp from "@/components/motion/FadeUp";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const sectionItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

function renderWithFontHighlights(text: string, highlights: Record<string, string>) {
  const pattern = new RegExp(
    `(${Object.keys(highlights)
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g"
  );
  return text.split(pattern).map((part, i) =>
    highlights[part] ? (
      <span key={i} style={{ fontFamily: highlights[part] }}>{part}</span>
    ) : part
  );
}

function ImgPlaceholder({
  aspect = "aspect-video",
  gradient,
  primary,
  className = "",
}: {
  aspect?: string;
  gradient: string;
  primary: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden ${aspect} ${className}`} style={{ background: gradient }}>
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 35% 55%, color-mix(in srgb, ${primary} 25%, transparent), transparent 60%)` }}
      />
    </div>
  );
}

interface Props {
  project: Project;
  nextProject: Project;
}

export default function ProjectPageContent({ project, nextProject }: Props) {
  const { t, lang } = useLanguage();

  const i18n        = project.i18n?.[lang];
  const tagline     = i18n?.tagline     ?? project.tagline;
  const description = i18n?.description ?? project.description;
  const sections    = i18n?.sections    ?? project.sections;

  const themeVars = project.theme
    ? ({ backgroundColor: project.theme.background } as React.CSSProperties)
    : undefined;

  const gradient = project.coverGradient;
  const primary  = project.theme?.primary ?? "var(--color-primary)";
  const isOngoing = project.metadata?.duration?.toLowerCase() === "ongoing";

  return (
    <main className="relative z-10" style={themeVars}>
      {project.theme && (
        <style>{`
          ::selection {
            background-color: ${project.theme.primary};
            color: ${project.theme.background};
          }
        `}</style>
      )}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ minHeight: "90vh" }}>
        <div className="absolute inset-0" style={{ background: gradient }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 60%, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-56"
          style={{
            background: `linear-gradient(to bottom, transparent, ${
              project.theme?.background ?? "var(--color-background)"
            })`,
          }}
        />
        {project.coverImage && (
          <div className="absolute inset-0">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              quality={100}
              className="object-contain scale-[0.55]"
              sizes="100vw"
              priority
            />
          </div>
        )}

        {/* Back link */}
        <MountReveal delay={0.05} className="absolute top-0 left-0 pt-32 px-8 md:px-16 z-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-xs tracking-widest uppercase font-bold group"
          >
            <Icon name="arrow_back" className="group-hover:-translate-x-1 transition-transform duration-200" />
            {t.case.backLabel}
          </Link>
        </MountReveal>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 max-w-screen-2xl mx-auto z-10">
          <MountReveal delay={0.15}>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3 block font-label">
              {project.category} / {project.year}
            </span>
            <h1 className="font-headline text-[clamp(2.8rem,8vw,6.5rem)] font-bold text-on-surface tracking-tighter leading-[0.9]">
              {project.title}
            </h1>
            {tagline && (
              <p className="mt-4 text-base md:text-lg text-on-surface-variant font-body font-light max-w-xl">
                {tagline}
              </p>
            )}
          </MountReveal>
        </div>
      </section>

      {/* ── Intro + Metadata ─────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <FadeUp delay={0.05} className="lg:col-span-7">
            <p className="text-xl md:text-2xl text-on-surface leading-snug font-body font-light">
              {description}
            </p>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-headline tracking-widest text-on-surface-variant border border-white/10 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </FadeUp>

          {project.metadata && (
            <FadeUp delay={0.2} className="lg:col-span-4 lg:col-start-9">
              <div className="glass-panel rounded-2xl border border-white/8 p-7 flex flex-col gap-5">
                {project.metadata.duration && (
                  <div>
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      {lang === "nl" ? "Looptijd" : "Timeline"}
                    </p>
                    {isOngoing ? (
                      <span className="flex items-center gap-2 font-headline text-sm font-bold text-on-surface">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        {t.case.ongoing}
                      </span>
                    ) : (
                      <p className="font-headline text-sm font-bold text-on-surface">{project.metadata.duration}</p>
                    )}
                  </div>
                )}
                {project.metadata.role && (
                  <div className="border-t border-white/8 pt-5">
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      {lang === "nl" ? "Rol" : "Role"}
                    </p>
                    <p className="font-body text-sm text-on-surface">{project.metadata.role}</p>
                  </div>
                )}
                {project.metadata.teamSize && (
                  <div className="border-t border-white/8 pt-5">
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      Team
                    </p>
                    <p className="font-body text-sm text-on-surface">
                      {project.metadata.teamSize === 1 ? t.case.solo : `${t.case.team} ${project.metadata.teamSize}`}
                    </p>
                  </div>
                )}
                {project.metadata.course && (
                  <div className="border-t border-white/8 pt-5">
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      Context
                    </p>
                    <p className="font-body text-sm text-on-surface">{project.metadata.course}</p>
                  </div>
                )}
                {project.links && Object.values(project.links).some(Boolean) && (
                  <div className="border-t border-white/8 pt-5 flex flex-col gap-2">
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      {t.case.links}
                    </p>
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all duration-200">
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" /></svg>
                        <span className="text-xs font-headline font-bold tracking-widest uppercase">Vercel</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all duration-200">
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        <span className="text-xs font-headline font-bold tracking-widest uppercase">GitHub</span>
                      </a>
                    )}
                    {project.links.figma && (
                      <a href={project.links.figma} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all duration-200">
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 38 57" fill="currentColor"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/><path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>
                        <span className="text-xs font-headline font-bold tracking-widest uppercase">Figma</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────────────── */}
      {sections && sections.length > 0 && (
        <section className="mb-24">
          {sections.map((section, i) => {
            const isPalette = section.type === "palette";
            const isVisualIdentity = section.type === "visual-identity";
            // Only count regular sections when alternating image sides
            const imageIndex = sections.slice(0, i).filter(s => !s.type).length;
            const flipImage = imageIndex % 2 !== 0;

            // ── Outer shell shared by every section type ─────────────
            // min-h-[80vh] so the next section peeks into view, hinting at more content
            // motion.div with staggerChildren coordinates child animations properly
            const Shell = ({ children, last = false }: { children: React.ReactNode; last?: boolean }) => (
              <div className={`min-h-[80vh] flex items-center border-t border-white/5 ${last ? "border-b" : ""} max-w-screen-2xl mx-auto px-8 md:px-16`}>
                <motion.div
                  variants={sectionContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full py-14"
                >
                  {children}
                </motion.div>
              </div>
            );

            const isLast = i === sections.length - 1;

            // ── Visual identity ───────────────────────────────────────
            if (isVisualIdentity && project.theme) {
              const swatches = [
                { hex: project.theme.background,       label: "Midnight" },
                { hex: project.theme.primaryContainer, label: "Forest" },
                { hex: project.theme.primary,          label: "Fern" },
                { hex: project.theme.onSurface,        label: "Cream" },
                { hex: project.theme.onSurfaceVariant, label: "Sage" },
              ];
              const fonts = project.theme.fontHighlights
                ? Object.keys(project.theme.fontHighlights)
                : [];

              return (
                <Shell key={section.heading} last={isLast}>
                  {/* Text side */}
                  <motion.div variants={sectionItem} className="lg:col-span-4 flex flex-col gap-8">
                    <span className="font-headline text-[10px] uppercase tracking-[0.35em] text-primary font-bold">
                      {section.heading}
                    </span>
                    <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body">
                      {section.body}
                    </p>

                    {/* Typography */}
                    {fonts.length > 0 && (
                      <div>
                        <p className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold mb-3">
                          {lang === "nl" ? "Typografie" : "Typography"}
                        </p>
                        <div className="space-y-0.5">
                          <p className="text-xl font-bold text-on-surface font-headline">{fonts[0]}</p>
                          {fonts[1] && <p className="text-xl text-on-surface font-body">{fonts[1]}</p>}
                        </div>
                      </div>
                    )}

                    {/* Color swatches */}
                    <div>
                      <p className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold mb-4">
                        {lang === "nl" ? "Kleurenpalet" : "Color Palette"}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {swatches.map((s) => (
                          <div key={s.hex} className="flex flex-col gap-1.5">
                            <div
                              className="w-14 h-14 rounded-lg border border-white/10"
                              style={{
                                backgroundColor: s.hex,
                                boxShadow: `0 0 12px 2px ${s.hex}55`,
                              }}
                            />
                            <p className="font-headline text-[8px] font-bold uppercase tracking-widest text-on-surface-variant/50 leading-none">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Image side — 4+8=12, fills the full grid */}
                  <motion.div variants={sectionItem} className="lg:col-span-8">
                    <ImgPlaceholder aspect="aspect-[4/3]" gradient={gradient} primary={primary} className="cinematic-shadow" />
                  </motion.div>
                </Shell>
              );
            }

            // ── Regular section ───────────────────────────────────────
            return (
              <Shell key={section.heading} last={isLast}>
                <motion.div variants={sectionItem} className={`lg:col-span-8 ${flipImage ? "lg:order-2" : ""}`}>
                  <ImgPlaceholder aspect="aspect-[4/3]" gradient={gradient} primary={primary} className="cinematic-shadow" />
                </motion.div>
                <motion.div variants={sectionItem} className={`lg:col-span-4 flex flex-col gap-5 ${flipImage ? "lg:order-1" : ""}`}>
                  <span className="font-headline text-[10px] uppercase tracking-[0.35em] text-primary font-bold">
                    {section.heading}
                  </span>
                  <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body">
                    {project.theme?.fontHighlights
                      ? renderWithFontHighlights(section.body, project.theme.fontHighlights)
                      : section.body}
                  </p>
                </motion.div>
              </Shell>
            );
          })}
        </section>
      )}

      {/* ── Gallery grid ─────────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <div className="grid grid-cols-12 gap-5">
          <FadeUp delay={0} className="col-span-12 md:col-span-8">
            <ImgPlaceholder aspect="aspect-[4/3]" gradient={gradient} primary={primary} />
          </FadeUp>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
            <FadeUp delay={0.1} className="flex-1">
              <ImgPlaceholder aspect="aspect-video" gradient={gradient} primary={primary} className="h-full" />
            </FadeUp>
            <FadeUp delay={0.18} className="flex-1">
              <ImgPlaceholder aspect="aspect-video" gradient={gradient} primary={primary} className="h-full" />
            </FadeUp>
          </div>
          <FadeUp delay={0.08} className="col-span-12 md:col-span-4">
            <ImgPlaceholder aspect="aspect-video" gradient={gradient} primary={primary} />
          </FadeUp>
          <FadeUp delay={0} className="col-span-12 md:col-span-8">
            <ImgPlaceholder aspect="aspect-[4/3]" gradient={gradient} primary={primary} />
          </FadeUp>
        </div>
      </div>

      {/* ── Next Project teaser ───────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 pb-28 pt-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant font-headline font-bold mb-8">
            {t.case.nextProject}
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block relative w-full aspect-[21/9] rounded-3xl overflow-hidden cinematic-shadow"
            style={
              nextProject.theme
                ? ({
                    "--color-primary":            nextProject.theme.primary,
                    "--color-primary-container":  nextProject.theme.primaryContainer,
                    "--color-on-primary":         nextProject.theme.onPrimary,
                    "--color-on-surface":         nextProject.theme.onSurface,
                    "--color-on-surface-variant": nextProject.theme.onSurfaceVariant,
                  } as React.CSSProperties)
                : undefined
            }
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ background: nextProject.coverGradient }}
            />
            <div className="absolute inset-0 bg-neutral-900/50 transition-opacity duration-500 group-hover:opacity-0" />
            {nextProject.coverImage && (
              <div className="absolute inset-0">
                <Image
                  src={nextProject.coverImage}
                  alt={nextProject.title}
                  fill
                  quality={90}
                  className="object-contain scale-[0.5] group-hover:scale-[0.55] transition-transform duration-500"
                  sizes="100vw"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block font-label">
                  {nextProject.category} / {nextProject.year}
                </span>
                <h3 className="font-headline text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
                  {nextProject.title}
                </h3>
              </div>
              <Icon
                name="arrow_outward"
                className="text-3xl text-primary shrink-0 ml-6 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>
          </Link>
        </FadeUp>
      </section>
    </main>
  );
}
