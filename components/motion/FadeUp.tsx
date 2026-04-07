"use client";

import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Distance to travel upward (default: 20px) */
  distance?: number;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function FadeUp({
  children,
  delay = 0,
  className = "",
  distance = 20,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
