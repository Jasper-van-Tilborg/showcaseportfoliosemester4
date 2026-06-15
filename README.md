# Jasper van Tilborg - Showcase Portfolio

This is my personal portfolio, built to present myself as a Front end developer & Visual Designer (Fontys University of Applied Sciences). It's where I bring together the projects I'm proud of — branding work, UI/UX design, and full-stack builds — alongside an "About" page that introduces who I am, and a contact page so people can actually reach me.

Rather than a static showcase, I wanted the site itself to be a demonstration of craft: smooth page transitions, per-project visual theming, and full bilingual support (Dutch/English) so it works for both my local and international audience.

## Live Demo

🔗 **[[https://showcaseportfoliosemester4.vercel.app](https://showcaseportfoliosemester4.vercel.app)]**

Hosted on [Vercel](https://vercel.com) — every push to `main` automatically deploys to production.

## Tech Stack & Why

- **Next.js 16 (App Router) + React 19 + TypeScript** — the foundation. App Router gives me clean routing for project pages (`/work/[slug]`), and TypeScript keeps the growing `projects.ts` data file honest as it scales.
- **Tailwind CSS 4** — fast, consistent styling without writing a separate stylesheet per project. Pairs well with the per-project theme system I built.
- **Framer Motion** — for the page transitions and reveal animations that give the site its polish and make it feel less like a template and more like a designed experience.
- **Three.js** — powers the atmospheric/visual background effects, adding depth without distracting from the content.
- **Resend** — handles the contact form. Simple API, reliable delivery, no need to run my own mail server.
- **ESLint** — keeps the codebase clean as it grows.
- **Vercel** — zero-friction deploys straight from `main`, perfect for a portfolio that needs to always be up to date.

## Running Locally

1. Install dependencies:
  ```bash
   npm install
  ```
2. Add a `.env.local` file in the project root with my Resend API key (needed for the contact form to work):
  ```
   RESEND_API_KEY=your_resend_api_key
  ```
3. Start the dev server:
  ```bash
   npm run dev
  ```
4. Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint

## Folder Structure

```
app/
  page.tsx          → Home page
  layout.tsx        → Root layout (fonts, navbar, footer, providers)
  about/             → About page
  contact/           → Contact page
  work/              → Work overview + [slug] dynamic project pages
  api/contact/       → API route that sends contact form submissions via Resend

components/
  Navbar.tsx, Footer.tsx, AtmosphericBg.tsx, ThemeApplicator.tsx, Icon.tsx
  LanguageTransition.tsx → Handles the NL/EN switch animation
  ProjectPageContent.tsx → Renders individual project pages (sections, evidence, galleries, etc.)
  motion/            → Reusable animated components (hero sections, fade-ups, work grid, etc.)

contexts/
  LanguageContext.tsx → Provides the current language (nl/en) and stores the choice in localStorage

data/
  projects.ts        → All project content: titles, descriptions, sections, images, theming, NL/EN i18n
  translations.ts    → General UI text translations (nav, footer, buttons, etc.)

public/
  Project assets (logos, images, videos), organised per project:
  /cookmind, /fioresque, /qualitylodgings, /varaxvp, /popkoordivers, /roshproject,
  plus /persoonlijkefotos and /cv
```

## Things Worth Remembering

- **Everything content-wise lives in `data/projects.ts` and `data/translations.ts`.** Adding, editing, or hiding a project (`hidden: true`) almost never requires touching a component — just update the data. Each project can define its own colour theme (`theme`), sections, galleries, and NL/EN overrides via `i18n`.
- **The site defaults to Dutch (`nl`).** `LanguageContext` stores the user's choice in `localStorage`. If a project's `i18n.en` block is missing a field, it silently falls back to the Dutch version — worth double-checking when adding a new project so nothing accidentally shows up in the wrong language.
- `**ProjectPageContent.tsx` is the engine room.** It renders every section type defined in `projects.ts` — text, palette, visual identity, carousels, video, Figma embeds, etc. New content block types get their rendering logic added here.
- **The contact form needs `RESEND_API_KEY`.** Set it locally in `.env.local` and in Vercel's project environment variables — without it, submissions to `vantilborgjasper@gmail.com` will fail.
- **This Next.js setup isn't "vanilla."** There are breaking changes versus older Next.js conventions — when something behaves unexpectedly, check the bundled docs in `node_modules/next/dist/docs/` before assuming it's a bug.
- `tsconfig.tsbuildinfo` and `next-env.d.ts` are auto-generated build artifacts — safe to ignore, no need to edit them manually.

## Deployment

Configured for [Vercel](https://vercel.com/new) — connect the repo and it deploys on every push to `main`. Just remember to set `RESEND_API_KEY` in the Vercel project's environment variables, or the contact form will fail in production.