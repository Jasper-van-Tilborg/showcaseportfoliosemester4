import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bg-surface-container-lowest mt-0 z-10">
      {/* Orange gradient separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-40" />
      <div className="absolute top-0 left-0 w-full h-12" style={{ background: "radial-gradient(ellipse at top, color-mix(in srgb, var(--color-primary) 8%, transparent), transparent 70%)" }} />

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="font-headline text-lg font-bold tracking-tighter text-on-surface uppercase hover:text-primary transition-colors"
          >
            Jasper VT
          </Link>
          <p className="text-[10px] font-label font-bold tracking-[0.3em] uppercase text-on-surface-variant">
            Brand Strategist &amp; Visual Designer
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8">
          {[
            { label: "Work",    href: "/work" },
            { label: "About",   href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "LinkedIn", href: "https://linkedin.com", external: true },
          ].map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="font-headline text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[10px] font-label tracking-widest uppercase text-on-surface-variant opacity-50">
          © {new Date().getFullYear()} Jasper van Tilborg
        </p>
      </div>
    </footer>
  );
}
