"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const links = [
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
          </div>
        )}
      </motion.nav>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-t border-white/5">
        <div className="flex justify-around items-center h-16">
          {[
            { label: "Work",    href: "/work",    icon: "grid_view" },
            { label: "About",   href: "/about",   icon: "person" },
            { label: "Contact", href: "/contact", icon: "mail" },
          ].map(({ label, href, icon }) => {
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
