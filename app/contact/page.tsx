"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import FadeUp from "@/components/motion/FadeUp";
import ContactHero from "@/components/motion/ContactHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <main className="relative z-10 pt-32 pb-28 md:pb-20">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <ContactHero />

        <div className="flex flex-col gap-8">
          {/* Form */}
          <FadeUp delay={0.1}>
            <div className="glass-panel p-5 md:p-12 rounded-3xl border border-outline-variant/15 cinematic-shadow relative overflow-hidden group">
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@domain.com"
                      required
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
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    required
                    className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-bold">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows={6}
                    required
                    className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline transition-all resize-none font-body"
                  />
                </div>

                {status === "sent" ? (
                  <p className="text-primary font-headline font-bold tracking-widest uppercase text-sm">
                    {t.contact.successMessage ?? "Message sent!"}
                  </p>
                ) : status === "error" ? (
                  <p className="text-red-400 font-headline font-bold tracking-widest uppercase text-sm">
                    {t.contact.errorMessage ?? "Something went wrong. Try again."}
                  </p>
                ) : (
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-primary text-on-primary-fixed px-10 py-4 rounded-full font-headline font-bold text-base uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,181,154,0.3)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === "sending" ? "..." : t.contact.sendButton}
                  </button>
                )}
              </form>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700" />
            </div>
          </FadeUp>

          {/* Direct channels */}
          <FadeUp delay={0.2}>
            <div className="bg-surface-container p-6 md:p-8 rounded-3xl border border-outline-variant/15">
              <h4 className="font-headline text-lg font-bold text-on-surface mb-8 uppercase tracking-widest">
                {t.contact.directChannels}
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:vantilborgjasper@gmail.com"
                  className="flex items-center gap-4 group flex-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors duration-300 shrink-0">
                    <Icon name="mail" className="text-on-surface-variant group-hover:text-on-primary-fixed transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold font-label">Email</p>
                    <p className="text-on-surface group-hover:text-primary transition-colors font-body text-sm">vantilborgjasper@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://github.com/Jasper-van-Tilborg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group flex-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors duration-300 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-on-surface-variant group-hover:text-on-primary-fixed transition-colors">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold font-label">GitHub</p>
                    <p className="text-on-surface group-hover:text-primary transition-colors font-body text-sm">Jasper-van-Tilborg</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}
