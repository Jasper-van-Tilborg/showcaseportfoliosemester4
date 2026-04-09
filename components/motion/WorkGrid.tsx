"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => {
        const isWide = index === 2;
        const themeVars = project.theme
          ? ({
              "--color-primary":            project.theme.primary,
              "--color-primary-container":  project.theme.primaryContainer,
              "--color-on-primary":         project.theme.onPrimary,
              "--color-on-primary-fixed":   project.theme.background,
              "--color-on-surface":         project.theme.onSurface,
              "--color-on-surface-variant": project.theme.onSurfaceVariant,
            } as React.CSSProperties)
          : undefined;
        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease, delay: (index % 2) * 0.08 }}
            className={isWide ? "md:col-span-2" : ""}
          >
            <Link
              href={`/work/${project.slug}`}
              style={themeVars}
              className={`group relative flex overflow-hidden bg-surface-container-low rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-2 ${
                isWide
                  ? "aspect-[16/7] min-h-[320px]"
                  : "aspect-[4/5] md:aspect-video"
              }`}
            >
              {/* Cover gradient */}
              <div
                className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-700"
                style={{ background: project.coverGradient }}
              />
              {/* Grey desaturating overlay — fades on hover to reveal colour */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 via-neutral-800/80 to-neutral-700/70 transition-opacity duration-500 group-hover:opacity-0" />
              {/* Cover image */}
              {project.coverImage && (
                <div className="absolute inset-12 group-hover:inset-0 transition-all duration-500 overflow-hidden rounded-xl group-hover:rounded-none">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              {/* Hover tint */}
              <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
              {/* Shadow intensify on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "0 32px 64px -16px color-mix(in srgb, var(--color-primary) 30%, transparent)" }} />

              {/* Tags */}
              <div className="absolute top-6 left-6 flex gap-2 z-10">
                <span className="glass-card px-4 py-1.5 rounded-full text-[10px] font-headline tracking-widest text-primary border border-primary/20" style={{ boxShadow: "0 0 15px color-mix(in srgb, var(--color-primary) 20%, transparent)" }}>
                  {project.category}
                </span>
                <span className="glass-card px-4 py-1.5 rounded-full text-[10px] font-headline tracking-widest text-on-surface border border-white/10">
                  {project.year}
                </span>
              </div>

              {/* Footer info */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent z-10">
                {isWide ? (
                  <div className="max-w-2xl">
                    <p className="text-primary font-headline text-sm tracking-widest mb-2 font-bold">
                      FEATURED PROJECT
                    </p>
                    <h3 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter leading-none mb-5">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="bg-primary text-on-primary-fixed px-6 py-3 rounded-full font-label font-bold text-xs tracking-widest uppercase">
                        View Case
                      </span>
                      <span className="text-on-surface-variant text-sm font-label">
                        {project.tags.join(", ")}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-primary font-headline text-xs tracking-widest mb-1 font-bold">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </p>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                      <span className="text-xs font-label tracking-widest">
                        VIEW CASE STUDY
                      </span>
                      <Icon
                        name="arrow_forward"
                        className="text-sm group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </>
                )}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
