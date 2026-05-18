"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease, delay },
});

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-screen-2xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
      {/* Text column */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <motion.span
          {...item(0.1)}
          className="text-primary font-headline uppercase tracking-widest text-xs mb-4 block font-bold"
        >
          {t.about.heroTagline}
        </motion.span>

        <motion.h1
          {...item(0.2)}
          className="font-headline text-[clamp(1.8rem,5.5vw,4.5rem)] font-bold leading-[0.9] tracking-tighter mb-8 uppercase text-on-surface"
        >
          {t.about.heroTitle1}
          <br />
          <span className="text-on-surface-variant">{t.about.heroTitle2}</span>
        </motion.h1>

        <motion.p
          {...item(0.3)}
          className="text-lg text-on-surface-variant leading-relaxed max-w-md mb-10 font-body"
        >
          {t.about.heroBody}
        </motion.p>

        <motion.div {...item(0.4)} className="flex items-center gap-4 flex-wrap">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 bg-primary-container text-on-primary-fixed px-8 py-4 rounded-full font-headline font-bold hover:scale-95 active:scale-90 transition-transform duration-150 uppercase tracking-widest text-sm"
          >
            {t.about.heroCta}
            <Icon name="arrow_forward" />
          </Link>
          <a
            href="/cv/cv_jasper_van_tilborg.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-headline font-bold border border-primary/40 text-primary hover:bg-primary hover:text-on-primary-fixed transition-all duration-300 uppercase tracking-widest text-sm"
          >
            <Icon name="download" />
            CV
          </a>
        </motion.div>
      </div>

      {/* Portrait placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.05 }}
        className="lg:col-span-7 order-1 lg:order-2"
      >
        <div className="relative aspect-[4/5] w-full max-h-[45vh] md:max-h-[72vh] overflow-hidden rounded-2xl glass-card cinematic-shadow">
          <Image
            src="/persoonlijkefotos/persoonlijkefoto7.jpeg"
            alt="Jasper van Tilborg"
            fill
            quality={90}
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
