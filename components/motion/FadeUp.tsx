"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function FadeUp({
  children,
  delay = 0,
  className = "",
  distance = 28,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
