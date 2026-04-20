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
      root.style.setProperty("--color-surface-tint",             theme.primary);
      root.style.setProperty("--color-background",               theme.background);
      root.style.setProperty("--color-surface",                  theme.background);
      root.style.setProperty("--color-surface-dim",              theme.background);
      root.style.setProperty("--color-surface-container-lowest", theme.surfaceContainerLowest);
      if (theme.surfaceContainerLow)  root.style.setProperty("--color-surface-container-low",  theme.surfaceContainerLow);
      if (theme.surfaceContainer)     root.style.setProperty("--color-surface-container",      theme.surfaceContainer);
      if (theme.surfaceContainerHigh) root.style.setProperty("--color-surface-container-high", theme.surfaceContainerHigh);
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
        "--color-background",
        "--color-surface",
        "--color-surface-dim",
        "--color-surface-container-lowest",
        "--color-surface-container-low",
        "--color-surface-container",
        "--color-surface-container-high",
      ].forEach((v) => root.style.removeProperty(v));
    }
  }, [pathname]);

  return null;
}
