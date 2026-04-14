"use client";

import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import ContactHero from "@/components/motion/ContactHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <ContactHero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <FadeUp delay={0.1} className="lg:col-span-7">
            <section>
              <div className="glass-panel p-8 md:p-12 rounded-3xl border border-outline-variant/15 cinematic-shadow relative overflow-hidden group">
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={t.contact.namePlaceholder}
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder="hello@domain.com"
                        className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      placeholder={t.contact.messagePlaceholder}
                      rows={6}
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all resize-none font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-on-primary-fixed px-10 py-4 rounded-full font-headline font-bold text-base uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,181,154,0.3)] hover:scale-[1.02] transition-all duration-300"
                  >
                    {t.contact.sendButton}
                  </button>
                </form>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700" />
              </div>
            </section>
            </FadeUp>

            {/* Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeUp delay={0.2}>
                <div className="glass-panel p-8 rounded-3xl border border-outline-variant/15 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
                  <div>
                    <Icon name="location_on" filled className="text-primary text-4xl mb-5" />
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
                      {t.contact.location}
                    </h3>
                    <p className="text-on-surface-variant font-body leading-relaxed">
                      {t.contact.locationBody}
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.32}>
                <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/15">
                  <h4 className="font-headline text-lg font-bold text-on-surface mb-8 uppercase tracking-widest">
                    {t.contact.directChannels}
                  </h4>
                  <div className="space-y-6">
                    {[
                      { icon: "mail", label: "Email", value: "547118@student.fontys.nl", href: "mailto:547118@student.fontys.nl" },
                      { icon: "open_in_new", label: "LinkedIn", value: "linkedin.com/in/jaspervantilborg", href: "https://linkedin.com" },
                    ].map(({ icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 group cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors duration-300 shrink-0">
                          <Icon name={icon} className="text-on-surface-variant group-hover:text-on-primary-fixed transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold font-label">{label}</p>
                          <p className="text-on-surface group-hover:text-primary transition-colors font-body text-sm">{value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.44}>
                <div className="flex gap-4">
                  {["LinkedIn", "GitHub"].map((name) => (
                    <a
                      key={name}
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 glass-panel py-4 rounded-xl flex items-center justify-center hover:bg-surface-bright transition-all duration-300 border border-outline-variant/10"
                    >
                      <span className="font-headline font-bold text-xs tracking-widest uppercase text-on-surface">{name}</span>
                    </a>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
      </div>
    </main>
  );
}
