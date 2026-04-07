import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import MountReveal from "@/components/motion/MountReveal";
import FadeUp from "@/components/motion/FadeUp";
import { getProjectBySlug, projects } from "@/data/projects";

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

  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,92,0,0.15),transparent_60%)]" />
          <div className="absolute bottom-8 left-8">
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

      {/* ── Meta + Description ───────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <FadeUp delay={0} className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6 font-headline font-bold">
            Overview
          </p>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body font-light">
            {project.description}
          </p>

          {project.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="glass-card px-4 py-2 rounded-full text-xs font-headline tracking-widest text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </FadeUp>

        {project.metadata && (
          <FadeUp delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <div className="glass-panel p-8 rounded-3xl border border-outline-variant/15 space-y-6">
              {[
                { label: "Role",     value: project.metadata.role },
                { label: "Duration", value: project.metadata.duration },
                { label: "Team",     value: project.metadata.teamSize ? `${project.metadata.teamSize} people` : undefined },
                { label: "Course",   value: project.metadata.course },
              ]
                .filter((item) => item.value)
                .map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold font-label mb-1">
                      {label}
                    </p>
                    <p className="text-on-surface font-body">{value}</p>
                  </div>
                ))}
            </div>
          </FadeUp>
        )}
      </div>

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
