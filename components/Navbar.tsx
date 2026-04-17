"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <motion.span
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease }}
        className="block h-[2px] w-full bg-primary rounded-full origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease }}
        className="block h-[2px] w-full bg-primary rounded-full"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease }}
        className="block h-[2px] w-full bg-primary rounded-full origin-center"
      />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.work,    href: "/work" },
    { label: t.nav.about,   href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease, delay: 0.05 }}
      className="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-3xl border-b border-white/15"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex justify-between items-center px-8 md:px-16 py-5 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-xl font-bold tracking-tighter text-on-surface hover:text-primary transition-colors duration-300 uppercase"
        >
          Jasper VT
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link font-headline text-sm tracking-widest uppercase transition-colors duration-300 ${
                  active
                    ? "nav-link-active text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Language toggle */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-surface-container/40">
            {(["nl", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="relative px-3 py-1 font-headline text-sm tracking-widest uppercase transition-colors duration-300 rounded-full"
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {lang === l && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-bold ${lang === l ? "text-on-primary-fixed" : "text-on-surface-variant hover:text-primary"}`}>
                  {l.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-surface-container/40">
            {(["nl", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="relative px-3 py-1 font-headline text-sm tracking-widest uppercase transition-colors duration-300 rounded-full"
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {lang === l && (
                  <motion.span
                    layoutId="lang-pill-mobile"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-bold ${lang === l ? "text-on-primary-fixed" : "text-on-surface-variant"}`}>
                  {l.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
          <button
            className="p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            style={{ overflow: "hidden" }}
            className="md:hidden border-t border-white/5 bg-surface/60 backdrop-blur-3xl"
          >
            <div className="px-8 pt-6 pb-8 flex flex-col gap-1">
              {links.map(({ label, href }, i) => {
                const active = pathname === href || (href !== "/" && pathname.startsWith(href));
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease, delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 font-headline text-2xl font-bold tracking-tight uppercase transition-colors duration-200 ${
                        active ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
