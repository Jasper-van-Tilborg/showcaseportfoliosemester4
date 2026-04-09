import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import MountReveal from "@/components/motion/MountReveal";
import FadeUp from "@/components/motion/FadeUp";
import { getProjectBySlug, projects } from "@/data/projects";

function renderWithFontHighlights(text: string, highlights: Record<string, string>) {
  const pattern = new RegExp(`(${Object.keys(highlights).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights[part]
      ? <span key={i} style={{ fontFamily: highlights[part] }}>{part}</span>
      : part
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const themeVars = project.theme
    ? ({ "backgroundColor": project.theme.background } as React.CSSProperties)
    : undefined;

  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20" style={themeVars}>
      {project.theme && (
        <style>{`
          ::selection {
            background-color: ${project.theme.primary};
            color: ${project.theme.background};
          }
        `}</style>
      )}
      {/* ── Back ─────────────────────────────────────────────── */}
      <MountReveal delay={0.02} className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-xs tracking-widest uppercase font-bold group"
        >
          <Icon name="arrow_back" className="group-hover:-translate-x-1 transition-transform duration-200" />
          All Work
        </Link>
      </MountReveal>

      {/* ── Cover ────────────────────────────────────────────── */}
      <MountReveal delay={0.1} distance={32} className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-16">
        <div
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden cinematic-shadow relative"
          style={{ background: project.coverGradient }}
        >
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, color-mix(in srgb, var(--color-primary) 15%, transparent), transparent 60%)" }} />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
            <MountReveal delay={0.28}>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block font-label">
                {project.category} / {project.year}
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface tracking-tight">
                {project.title}
              </h1>
            </MountReveal>

          </div>
        </div>
      </MountReveal>

      {/* ── Intro ────────────────────────────────────────────── */}
      <FadeUp delay={0} className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-10 flex flex-col md:flex-row md:items-stretch gap-10">
        <p className="text-2xl md:text-4xl text-on-surface leading-snug font-body font-light max-w-4xl mr-auto">
          {project.description}
        </p>

        {project.links && Object.values(project.links).some(Boolean) && (
          <div className="glass-panel rounded-2xl border border-white/10 p-5 flex flex-col gap-3 shrink-0">
            <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">Links</p>
            <div className="grid grid-cols-2 gap-2">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all duration-200">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 76 65" fill="currentColor">
                    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
                  </svg>
                  <span className="text-xs font-headline font-bold tracking-widest uppercase">Vercel</span>
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all duration-200">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="text-xs font-headline font-bold tracking-widest uppercase">GitHub</span>
                </a>
              )}
              {project.links.figma && (
                <a href={project.links.figma} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all duration-200">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 38 57" fill="currentColor">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/>
                    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z"/>
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
                  </svg>
                  <span className="text-xs font-headline font-bold tracking-widest uppercase">Figma</span>
                </a>
              )}
            </div>
          </div>
        )}
      </FadeUp>

      {/* ── Metadata strip ───────────────────────────────────── */}
      {project.metadata && (
        <FadeUp delay={0.08} className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
          <div className="border-t border-b border-white/8 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            {project.metadata.duration && (() => {
              const isOngoing = project.metadata.duration.toLowerCase() === "ongoing";
              return isOngoing ? (
                <span className="flex items-center gap-2 font-headline text-xs uppercase tracking-widest text-on-surface font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Ongoing
                </span>
              ) : (
                <span className="font-headline text-xs uppercase tracking-widest text-on-surface font-bold">
                  {project.metadata.duration}
                </span>
              );
            })()}
            {project.metadata.role && (
              <>
                <span className="text-white/15 hidden md:block">—</span>
                <span className="font-body text-sm text-on-surface-variant">{project.metadata.role}</span>
              </>
            )}
            {project.metadata.teamSize && (
              <>
                <span className="text-white/15 hidden md:block">—</span>
                <span className="font-body text-sm text-on-surface-variant">
                  {project.metadata.teamSize === 1 ? "Solo project" : `Team of ${project.metadata.teamSize}`}
                </span>
              </>
            )}
            {project.metadata.course && (
              <>
                <span className="text-white/15 hidden md:block">—</span>
                <span className="font-body text-sm text-on-surface-variant">{project.metadata.course}</span>
              </>
            )}
          </div>
        </FadeUp>
      )}

      {/* ── Sections ─────────────────────────────────────────── */}
      {project.sections && project.sections.length > 0 && (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20 space-y-0">
          {project.sections.map((section, i) => (
            <FadeUp key={section.heading} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-t border-white/5 last:border-b">
                <h2 className="md:col-span-3 font-headline text-xs uppercase tracking-[0.3em] text-primary/70 font-bold pt-1">
                  {section.heading}
                </h2>
                <p className="md:col-span-7 text-lg text-on-surface-variant leading-relaxed font-body">
                  {project.theme?.fontHighlights
                    ? renderWithFontHighlights(section.body, project.theme.fontHighlights)
                    : section.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      {/* ── Tags ─────────────────────────────────────────────── */}
      {project.tags.length > 0 && (
        <FadeUp className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-headline tracking-widest text-on-surface-variant border border-white/10 hover:border-primary/30 hover:text-primary transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>
      )}

      {/* ── Evidence Placeholder ─────────────────────────────── */}
      <FadeUp className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
        <div className="border-t border-white/5 pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-12 font-headline font-bold">
            Evidence &amp; Deliverables
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-card rounded-2xl aspect-video border border-outline-variant/10 flex items-center justify-center group hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-center">
                  <Icon name="add_photo_alternate" className="text-on-surface-variant/30 text-4xl mb-2 group-hover:text-primary/40 transition-colors" />
                  <p className="text-xs text-on-surface-variant/40 font-label tracking-widest uppercase">
                    Evidence {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Next Project ─────────────────────────────────────── */}
      <FadeUp className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="border-t border-white/5 pt-16">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold mb-8">
            Next Project
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-flex items-center gap-6"
          >
            <h3 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors duration-200">
              {nextProject.title}
            </h3>
            <Icon name="arrow_forward" className="text-primary text-4xl group-hover:translate-x-3 transition-transform duration-200" />
          </Link>
        </div>
      </FadeUp>
    </main>
  );
}
