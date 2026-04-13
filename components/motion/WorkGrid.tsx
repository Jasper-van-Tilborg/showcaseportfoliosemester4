"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-[11px] font-headline font-bold tracking-widest uppercase transition-all duration-200 border ${
              active === cat
                ? "bg-primary text-on-primary-fixed border-primary"
                : "bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50 hover:text-on-surface"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const isWide = active === "All" && index === 2;
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
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease, delay: (index % 2) * 0.06 }}
                className={isWide ? "md:col-span-2" : ""}
              >
                <Link
                  href={`/work/${project.slug}`}
                  style={themeVars}
                  className={`group relative flex overflow-hidden bg-surface-container-low rounded-2xl transition-all duration-500 ease-out grayscale hover:grayscale-0 ${
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
                  {/* Desaturating overlay */}
                  <div className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-500 group-hover:opacity-0" />
                  {/* Cover image */}
                  {project.coverImage && (
                    <div className="absolute inset-0">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        quality={100}
                        className="object-contain scale-[0.7] group-hover:scale-[0.8] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category + year labels — top left */}
                  <div className="absolute top-6 left-6 flex gap-2 z-10">
                    <span className="glass-card px-4 py-1.5 rounded-full text-[10px] font-headline tracking-widest text-primary border border-primary/20">
                      {project.category}
                    </span>
                    <span className="glass-card px-4 py-1.5 rounded-full text-[10px] font-headline tracking-widest text-on-surface border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom bar — title left, arrow right */}
                  <div className="absolute bottom-0 left-0 w-full px-8 py-7 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end justify-between">
                    <h3 className={`font-headline font-bold text-on-surface tracking-tight ${isWide ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
                      {project.title}
                    </h3>
                    <Icon
                      name="arrow_outward"
                      className="text-2xl text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-4"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
