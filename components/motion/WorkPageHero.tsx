"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function WorkPageHero() {
  return (
    <div>
      <motion.h1
        {...item(0.05)}
        className="font-headline text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tighter mb-4 leading-[0.9] text-on-surface"
      >
        SELECTED
        <br />
        <span className="text-primary">WORKS_</span>
      </motion.h1>

      <motion.p
        {...item(0.18)}
        className="max-w-xl text-on-surface-variant text-lg font-body"
      >
        A curated archive of brand, design, and development work from Semester 4
        at Fontys University of Applied Sciences.
      </motion.p>
    </div>
  );
}
