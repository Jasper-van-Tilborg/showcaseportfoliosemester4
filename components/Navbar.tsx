"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.work,    href: "/work" },
    { label: t.nav.about,   href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const mobileLinks = [
    { label: t.nav.work,    href: "/work",    icon: "grid_view" },
    { label: t.nav.about,   href: "/about",   icon: "person" },
    { label: t.nav.contact, href: "/contact", icon: "mail" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-3xl border-b border-white/15"
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

          {/* Mobile toggle */}
          <button
            className="text-primary md:hidden hover:scale-95 transition-transform"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden glass-panel border-t border-white/5 px-6 py-6 flex flex-col gap-6">
            {links.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-headline text-sm tracking-widest uppercase ${
                    active ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-surface-container/40 w-fit">
              {(["nl", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="relative px-3 py-1 font-headline text-sm tracking-widest uppercase transition-colors duration-300 rounded-full"
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
          </div>
        )}
      </motion.nav>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-t border-white/5">
        <div className="flex justify-around items-center h-16">
          {mobileLinks.map(({ label, href, icon }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  active ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                <Icon name={icon} filled={active} />
                <span className="text-[10px] font-label font-bold tracking-widest uppercase">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
