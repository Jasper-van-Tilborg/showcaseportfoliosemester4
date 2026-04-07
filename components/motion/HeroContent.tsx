"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease, delay },
  };
}

export default function HeroContent() {
  return (
    <div className="max-w-6xl w-full">
      <motion.span
        {...item(0.05)}
        className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block font-label"
      >
        Brand Strategist &amp; Visual Designer
      </motion.span>

      <motion.h1
        {...item(0.15)}
        className="font-headline text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-tighter leading-[0.88] text-on-surface mb-8"
      >
        CRAFTING
        <br />
        <span className="text-primary-container text-glow">VISUAL</span>
        <br />
        NARRATIVES.
      </motion.h1>

      <motion.p
        {...item(0.27)}
        className="max-w-xl text-on-surface-variant text-lg leading-relaxed mb-10 font-body"
      >
        Creating atmospheric experiences through strategic brand thinking and
        high-fidelity design. Turning abstract vision into coherent brand reality.
      </motion.p>

      <motion.div {...item(0.38)} className="flex flex-wrap gap-5">
        <Link
          href="/work"
          className="bg-primary text-on-primary-fixed px-10 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:scale-95 active:scale-90 transition-transform duration-150"
        >
          View Work
        </Link>
        <Link
          href="/about"
          className="glass-panel border border-outline-variant/20 text-on-surface px-10 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-bright transition-colors duration-200"
        >
          About Me
        </Link>
      </motion.div>
    </div>
  );
}
