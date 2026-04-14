"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease, delay },
});

export default function WorkPageHero() {
  const { t } = useLanguage();

  return (
    <div>
      <motion.h1
        {...item(0.05)}
        className="font-headline text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tighter mb-4 leading-[0.9] text-on-surface"
      >
        {t.work.heroLine1}
        <br />
        <span className="text-primary">{t.work.heroLine2}</span>
      </motion.h1>

      <motion.p
        {...item(0.18)}
        className="max-w-xl text-on-surface-variant text-lg font-body"
      >
        {t.work.heroBody}
      </motion.p>
    </div>
  );
}
