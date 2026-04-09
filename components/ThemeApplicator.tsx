"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export default function ThemeApplicator() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.match(/^\/work\/([^/]+)/)?.[1];
    const project = slug ? getProjectBySlug(slug) : undefined;
    const theme = project?.theme;
    const root = document.documentElement;

    if (theme) {
      root.style.setProperty("--color-primary",            theme.primary);
      root.style.setProperty("--color-primary-container",  theme.primaryContainer);
      root.style.setProperty("--color-on-primary",         theme.onPrimary);
      root.style.setProperty("--color-on-primary-fixed",   theme.background);
      root.style.setProperty("--color-on-surface",         theme.onSurface);
      root.style.setProperty("--color-on-surface-variant", theme.onSurfaceVariant);
      root.style.setProperty("--color-outline-variant",    theme.outlineVariant);
      root.style.setProperty("--color-surface-tint",              theme.primary);
      root.style.setProperty("--color-surface-container-lowest",  theme.surfaceContainerLowest);
    } else {
      // Clean up — restore to CSS defaults by removing inline overrides
      [
        "--color-primary",
        "--color-primary-container",
        "--color-on-primary",
        "--color-on-primary-fixed",
        "--color-on-surface",
        "--color-on-surface-variant",
        "--color-outline-variant",
        "--color-surface-tint",
        "--color-surface-container-lowest",
      ].forEach((v) => root.style.removeProperty(v));
    }
  }, [pathname]);

  return null;
}
