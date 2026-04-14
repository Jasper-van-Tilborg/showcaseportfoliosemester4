"use client";

/**
 * Like FadeUp but fires on mount (not on scroll).
 * Use this for hero-section elements that are already in the viewport on load.
 */
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface MountRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

export default function MountReveal({
  children,
  delay = 0,
  className = "",
  distance = 28,
}: MountRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
