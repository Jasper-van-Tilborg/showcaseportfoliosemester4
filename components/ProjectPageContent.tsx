"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import MountReveal from "@/components/motion/MountReveal";
import FadeUp from "@/components/motion/FadeUp";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

const tagTranslations: Record<string, { nl: string; en: string }> = {
  "Groepsproject": { nl: "Groepsproject", en: "Group project" },
};

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

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/25 backdrop-blur-2xl" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden cinematic-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="w-full max-h-[85vh] object-contain block"
        />
      </motion.div>
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 backdrop-blur-sm"
      >
        <Icon name="close" className="text-xl" />
      </button>
    </motion.div>
  );
}

function VercelLink({ href, discontinuedMessage }: { href: string; discontinuedMessage?: string }) {
  const [open, setOpen] = useState(false);
  const hasWarning = !!discontinuedMessage;

  return (
    <div className={`rounded-xl border transition-all duration-200 overflow-hidden ${hasWarning && open ? "border-amber-500/40" : "border-white/10"}`}>
      <div className="flex items-stretch">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2.5 flex-1 text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" /></svg>
          <span className="text-xs font-headline font-bold tracking-widest uppercase">Vercel</span>
        </a>
        {hasWarning && (
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center px-2.5 border-l transition-colors duration-200 ${open ? "border-amber-500/40 text-amber-400 bg-amber-500/5" : "border-white/10 text-amber-400/40 hover:text-amber-400 hover:bg-amber-500/5"}`}
          >
            <Icon name="warning" className="text-sm" />
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {hasWarning && open && (
          <motion.div
            key="discontinued"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-3 py-2.5 border-t border-amber-500/20 text-[11px] text-amber-300/80 font-body leading-relaxed bg-amber-500/5">
              {discontinuedMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

function FigmaEmbed({
  src,
  poster,
  aspect = "aspect-[4/3]",
  className = "",
  gradient,
  primary,
}: {
  src: string;
  poster?: string;
  aspect?: string;
  className?: string;
  gradient: string;
  primary: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden ${aspect} ${className}`}>
        <iframe
          src={src}
          className="absolute inset-0 w-full border-0"
          style={{ height: "calc(100% + 50px)" }}
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`group relative w-full rounded-2xl overflow-hidden cursor-pointer ${aspect} ${className}`}
      onClick={() => setLoaded(true)}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 35% 55%, color-mix(in srgb, ${primary} 25%, transparent), transparent 60%)` }}
      />
      {poster && (
        <Image src={poster} alt="Figma prototype preview" fill className="object-contain scale-75" />
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
          <svg className="w-6 h-6 text-white" viewBox="0 0 38 57" fill="currentColor">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/>
            <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z"/>
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
          </svg>
        </div>
        <span className="text-xs font-headline font-bold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors duration-300">
          Laad prototype
        </span>
      </div>
    </div>
  );
}

function SectionMedia({
  section,
  aspect = "aspect-[4/3]",
  gradient,
  primary,
  className = "",
  onImageClick,
}: {
  section: import("@/data/projects").ProjectSection;
  aspect?: string;
  gradient: string;
  primary: string;
  className?: string;
  onImageClick?: (src: string) => void;
}) {
  if (section.media?.type === "figma") {
    return <FigmaEmbed src={section.media.src} poster={section.media.poster} aspect={aspect} className={className} gradient={gradient} primary={primary} />;
  }
  if (section.media?.type === "video") {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden ${aspect} ${className}`}>
        <video
          src={section.media.src}
          poster={section.media.poster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  if (section.media?.type === "image") {
    const src = section.media.src;
    return (
      <div
        className={`group relative w-full rounded-2xl overflow-hidden ${aspect} ${className} ${onImageClick ? "cursor-pointer" : ""}`}
        style={{ background: gradient }}
        onClick={() => onImageClick?.(src)}
      >
        <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        {onImageClick && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <Icon name="open_in_full" className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
      </div>
    );
  }
  return <ImgPlaceholder aspect={aspect} gradient={gradient} primary={primary} className={className} />;
}

interface Props {
  project: Project;
  nextProject: Project;
  prevProject: Project;
}

export default function ProjectPageContent({ project, nextProject, prevProject }: Props) {
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <main className="relative z-10" style={themeVars}>
      <AnimatePresence>
        {lightboxSrc && (
          <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
        )}
      </AnimatePresence>
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
          <div className="absolute inset-0 -translate-y-12">
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
        <MountReveal delay={0.05} className="absolute top-0 left-0 right-0 pt-32 z-20">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-xs tracking-widest uppercase font-bold group"
            >
              <Icon name="arrow_back" className="group-hover:-translate-x-1 transition-transform duration-200" />
              {t.case.backLabel}
            </Link>
          </div>
        </MountReveal>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 max-w-screen-2xl mx-auto z-10">
          <MountReveal delay={0.15}>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3 block font-label">
              {project.category} / {project.year}
            </span>
            <h1 className="font-headline text-[clamp(1.8rem,7vw,6.5rem)] font-bold text-on-surface tracking-tighter leading-[0.9]">
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
            {(project.tags.length > 0 || project.metadata?.teamSize) && (
              <div className="flex flex-wrap gap-2 mt-8">
                {project.metadata?.teamSize && (
                  <span className="px-4 py-1.5 rounded-full text-xs font-headline tracking-widest text-on-surface-variant border border-white/10 hover:border-primary/30 hover:text-primary transition-colors duration-200">
                    {project.metadata.teamSize === 1 ? t.case.solo : `${t.case.team} ${project.metadata.teamSize}`}
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-headline tracking-widest text-on-surface-variant border border-white/10 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                  >
                    {tagTranslations[tag]?.[lang] ?? tag}
                  </span>
                ))}
              </div>
            )}
          </FadeUp>

          {(project.metadata || project.discontinued) && (
            <FadeUp delay={0.2} className="lg:col-span-4 lg:col-start-9">
              <div className="glass-panel rounded-2xl border border-white/8 p-7 flex flex-col gap-5">
                {project.metadata?.duration && (
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
                      <p className="font-headline text-sm font-bold text-on-surface">{project.metadata?.duration}</p>
                    )}
                  </div>
                )}
                {project.metadata?.role && (
                  <div className="border-t border-white/8 pt-5">
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      {lang === "nl" ? "Rol" : "Role"}
                    </p>
                    <p className="font-body text-sm text-on-surface">{project.metadata?.role}</p>
                  </div>
                )}
                {project.links && Object.values(project.links).some(Boolean) && (
                  <div className="border-t border-white/8 pt-5 flex flex-col gap-2">
                    <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">
                      {t.case.links}
                    </p>
                    {project.links.live && (
                      <VercelLink
                        href={project.links.live}
                        discontinuedMessage={project.discontinued?.[lang]}
                      />
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
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center w-full py-8 md:py-14"
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
                    <SectionMedia section={section} aspect="aspect-[4/3]" gradient={gradient} primary={primary} className="cinematic-shadow" onImageClick={setLightboxSrc} />
                  </motion.div>
                </Shell>
              );
            }

            // ── Regular section ───────────────────────────────────────
            return (
              <Shell key={section.heading} last={isLast}>
                <motion.div variants={sectionItem} className={`lg:col-span-8 ${flipImage ? "lg:order-2" : ""}`}>
                  <SectionMedia section={section} aspect="aspect-[4/3]" gradient={gradient} primary={primary} className="cinematic-shadow" onImageClick={setLightboxSrc} />
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
      {project.gallery && project.gallery.length > 0 && <div className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-24">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant font-headline font-bold mb-8">
            Gallery
          </p>
        </FadeUp>
        {(() => {
          const g = project.gallery ?? [];
          const img = (i: number, aspect: string, className = "") =>
            g[i] ? (
              <div
                className={`group relative w-full rounded-2xl overflow-hidden cursor-pointer ${aspect} ${className}`}
                style={{ background: gradient }}
                onClick={() => setLightboxSrc(g[i])}
              >
                <Image src={g[i]} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Icon name="open_in_full" className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ) : (
              <ImgPlaceholder aspect={aspect} gradient={gradient} primary={primary} className={className} />
            );
          return (
            <div className="grid grid-cols-12 gap-5">
              <FadeUp delay={0} className="col-span-12 md:col-span-8">
                {img(0, "aspect-[4/3]")}
              </FadeUp>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
                <FadeUp delay={0.1} className="flex-1">
                  {img(1, "aspect-video", "h-full")}
                </FadeUp>
                <FadeUp delay={0.18} className="flex-1">
                  {img(2, "aspect-video", "h-full")}
                </FadeUp>
              </div>
              {(g[3] || g[4] || g[5]) && (
                <>
                  <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
                    {g[3] && (
                      <FadeUp delay={0.08} className="flex-1">
                        {img(3, "aspect-video", "h-full")}
                      </FadeUp>
                    )}
                    {g[4] && (
                      <FadeUp delay={0.14} className="flex-1">
                        {img(4, "aspect-video", "h-full")}
                      </FadeUp>
                    )}
                  </div>
                  {g[5] && (
                    <FadeUp delay={0} className="col-span-12 md:col-span-8">
                      {img(5, "aspect-[4/3]")}
                    </FadeUp>
                  )}
                </>
              )}
            </div>
          );
        })()}
      </div>}

      {/* ── Prev / Next Project ───────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 pb-28 pt-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant font-headline font-bold mb-8">
            {t.case.nextProject}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { p: prevProject, dir: "prev" },
              { p: nextProject, dir: "next" },
            ].map(({ p, dir }) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group relative aspect-video rounded-3xl overflow-hidden cinematic-shadow block"
                style={
                  p.theme
                    ? ({
                        "--color-primary":            p.theme.primary,
                        "--color-primary-container":  p.theme.primaryContainer,
                        "--color-on-primary":         p.theme.onPrimary,
                        "--color-on-surface":         p.theme.onSurface,
                        "--color-on-surface-variant": p.theme.onSurfaceVariant,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.coverGradient }} />
                <div className="absolute inset-0 bg-neutral-900/50 transition-opacity duration-500 group-hover:opacity-0" />
                {p.coverImage && (
                  <div className="absolute inset-0">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      quality={90}
                      className="object-contain scale-[0.5] group-hover:scale-[0.55] transition-transform duration-500"
                      sizes="50vw"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  {dir === "prev" && (
                    <Icon
                      name="arrow_back"
                      className="text-2xl text-primary shrink-0 mr-4 opacity-70 group-hover:opacity-100 group-hover:-translate-x-0.5 transition-all duration-200"
                    />
                  )}
                  <div>
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block font-label">
                      {dir === "prev" ? (lang === "nl" ? "Vorig project" : "Previous project") : (lang === "nl" ? "Volgend project" : "Next project")}
                    </span>
                    <h3 className="font-headline text-base md:text-2xl font-bold text-on-surface tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  {dir === "next" && (
                    <Icon
                      name="arrow_forward"
                      className="text-2xl text-primary shrink-0 ml-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
