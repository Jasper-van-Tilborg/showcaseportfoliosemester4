"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function ContactHero() {
  return (
    <header className="w-full text-center mb-16">
      <motion.h1
        {...item(0.05)}
        className="font-headline text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tighter text-on-surface mb-4 leading-none"
      >
        Let&apos;s <span className="text-primary">Work</span> Together
      </motion.h1>

      <motion.p
        {...item(0.18)}
        className="text-on-surface-variant max-w-xl mx-auto text-lg font-light font-body"
      >
        Open for internships, collaborations, and creative commissions. Drop me
        a message and let&apos;s talk.
      </motion.p>
    </header>
  );
}
