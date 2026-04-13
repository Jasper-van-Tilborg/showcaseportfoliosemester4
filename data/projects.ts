export interface EvidenceItem {
  id: string;
  title: string;
  type: "text" | "image" | "images";
  content?: string;
  images?: string[];
  thumbnail?: string;
  description?: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface ProjectI18n {
  description?: string;
  shortDescription?: string;
  sections?: ProjectSection[];
}

export interface ProjectTheme {
  background: string;        // page background colour
  primary: string;           // replaces --color-primary (vibrant accent)
  primaryContainer: string;  // replaces --color-primary-container
  onPrimary: string;         // replaces --color-on-primary
  onSurface: string;         // replaces --color-on-surface (main text)
  onSurfaceVariant: string;  // replaces --color-on-surface-variant (secondary text)
  outlineVariant: string;    // replaces --color-outline-variant (borders)
  surfaceContainerLowest: string; // replaces --color-surface-container-lowest (footer bg)
  fontHighlights?: Record<string, string>; // word → font-family, renders that word in its own font
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  sections?: ProjectSection[];
  tags: string[];
  coverGradient: string; // CSS gradient string used as cover
  coverImage?: string;  // Optional hero image for cards
  featured: boolean;
  evidence?: EvidenceItem[];
  links?: { live?: string; github?: string; figma?: string };
  metadata?: {
    duration?: string;
    teamSize?: number;
    role?: string;
    course?: string;
  };
  theme?: ProjectTheme;
  i18n?: {
    nl?: ProjectI18n;
    en?: ProjectI18n;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "fioresque",
    title: "Fioresque",
    category: "UI/UX",
    year: "2026",
    shortDescription: "Ontworpen én gebouwd — van visuele identiteit tot werkende code, live in productie.",
    description:
      "Fioresque is een premium fashion e-commerce website die ik volledig heb ontworpen én gebouwd voor een natuur-geïnspireerd kledingmerk. Het project omvat het gehele traject van visuele identiteit tot werkende code, live in productie.",
    sections: [
      {
        heading: "Ontwerp & visuele identiteit",
        body: "Het merk draait om een verfijnd kleurenpalet van donkergroen, zwart en crème, gecombineerd met de typografie van Playfair Display en DM Sans. Deze keuzes geven het merk een luxueuze, organische uitstraling die aansluit bij de natuur-geïnspireerde positionering.",
      },
      {
        heading: "Pagina's & componenten",
        body: "De website beslaat meerdere pagina's en componenten, waaronder de homepage, shopoverzicht, collectiespagina, productdetailpagina en een over ons-pagina — volledig responsive voor zowel mobiel als desktop. Specifieke aandacht ging uit naar navigatie-interacties, een horizontale productcarousel met peek-effect, een bottom sheet filter/sort-overlay voor mobiel en een desktop cartlade.",
      },
      {
        heading: "Tech stack",
        body: "Next.js · Tailwind CSS · Figma · Vercel",
      },
    ],
    tags: ["UI/UX Design", "Figma", "E-commerce", "Visuele Identiteit", "Next.js", "Tailwind CSS"],
    coverGradient: "linear-gradient(135deg, #1E2420 0%, #2D4A35 50%, #4A7A56 100%)",
    coverImage: "/fioresque_logo.png",
    featured: true,
    links: { live: "https://fioresque.vercel.app", github: "https://github.com/Jasper-van-Tilborg/fioresque" },
    metadata: {
      duration: "Ongoing",
      teamSize: 1,
      role: "Designer & Developer",
      course: "Personal Project",
    },
    theme: {
      background:        "#1E2420",
      primary:           "#4A7A56",
      primaryContainer:  "#2D4A35",
      onPrimary:         "#F2F0EB",
      onSurface:         "#F2F0EB",
      onSurfaceVariant:  "#a8b8a0",
      outlineVariant:             "#2D4A35",
      surfaceContainerLowest:     "#141a16",
      fontHighlights: {
        "Playfair Display": "var(--font-playfair-display), serif",
        "DM Sans":          "var(--font-dm-sans), system-ui, sans-serif",
      },
    },
    i18n: {
      en: {
        shortDescription: "Designed and built — from visual identity to working code, live in production.",
        description:
          "Fioresque is a premium fashion e-commerce website I fully designed and built for a nature-inspired clothing brand. The project covers the entire trajectory from visual identity to working code, live in production.",
        sections: [
          {
            heading: "Design & visual identity",
            body: "The brand revolves around a refined colour palette of deep green, black, and cream, combined with Playfair Display and DM Sans typography. These choices give the brand a luxurious, organic feel that aligns with its nature-inspired positioning.",
          },
          {
            heading: "Pages & components",
            body: "The website spans multiple pages and components — homepage, shop overview, collections page, product detail page, and an about page — fully responsive for both mobile and desktop. Specific attention went to navigation interactions, a horizontal product carousel with peek effect, a bottom sheet filter/sort overlay for mobile, and a desktop cart drawer.",
          },
          {
            heading: "Tech stack",
            body: "Next.js · Tailwind CSS · Figma · Vercel",
          },
        ],
      },
    },
  },
  {
    id: 2,
    slug: "vara-media-agency",
    title: "VARA Media Agency",
    category: "BRANDING",
    year: "2026",
    shortDescription: "Een volledig merkbureau opgezet van nul in 3 weken.",
    description:
      "In drie weken hebben we met een team van zes VARA Media Agency opgezet — een volledig functionerend merkbureau met eigen identiteit, positionering en visueel systeem. Ik was verantwoordelijk voor de merkstrategie en visuele identiteit.",
    tags: ["Brand Strategy", "Visual Identity", "UI Design"],
    coverGradient: "linear-gradient(135deg, #246BF6 0%, #4d8ef8 50%, #D9F855 100%)",
    coverImage: "/vara_logo2.png",
    links: { live: "https://vara-agency.vercel.app", github: "https://github.com/timjonkergouw/vara_agency" },
    featured: true,
    sections: [
      {
        heading: "Merkontwikkeling",
        body: "In drie weken hebben we met een team van zes VARA Media Agency opgezet — een volledig functionerend merkbureau met eigen identiteit, positionering en visueel systeem. Ik was verantwoordelijk voor de merkstrategie en visuele identiteit.",
      },
      {
        heading: "Visueel systeem",
        body: "Het kleurenpalet combineert een diep antraciet met elektrisch blauw en een scherp geel-groen accent. Dit geeft het merk een gedurfd, modern karakter dat past bij een ambitieus mediabureau. Typografie en gridstructuur werden zorgvuldig gedefinieerd in het brand guidelines document.",
      },
      {
        heading: "Logo & huisstijl",
        body: "Het logo is opgebouwd rond een krachtige geometrische vorm die schaalbaarheid en herkenbaarheid combineert. De volledige huisstijl omvat visitekaartjes, presentatiesjablonen en social media assets.",
      },
    ],
    metadata: {
      duration: "3 weeks",
      teamSize: 6,
      role: "Brand Strategist & Visual Designer",
      course: "Semester 4 — Media Design",
    },
    theme: {
      background:             "#343231",
      primary:                "#D9F855",
      primaryContainer:       "#246BF6",
      onPrimary:              "#343231",
      onSurface:              "#FAF9F6",
      onSurfaceVariant:       "#92B5FB",
      outlineVariant:         "#444342",
      surfaceContainerLowest: "#1e1e1d",
    },
    i18n: {
      en: {
        shortDescription: "Building a full branding agency from the ground up in 3 weeks.",
        description:
          "A collaborative 3-week sprint where I worked with 5 teammates to establish a complete branding agency — VARA. Responsible for brand strategy, visual identity, color system, logo design, and the homepage concept.",
        sections: [
          {
            heading: "Brand development",
            body: "In three weeks we built VARA Media Agency with a team of six — a fully functioning branding agency with its own identity, positioning, and visual system. I was responsible for the brand strategy and visual identity.",
          },
          {
            heading: "Visual system",
            body: "The colour palette combines deep anthracite with electric blue and a sharp yellow-green accent. This gives the brand a bold, modern character that suits an ambitious media agency. Typography and grid structure were carefully defined in the brand guidelines document.",
          },
          {
            heading: "Logo & house style",
            body: "The logo is built around a powerful geometric shape that combines scalability and recognisability. The full house style includes business cards, presentation templates, and social media assets.",
          },
        ],
      },
    },
  },
  {
    id: 3,
    slug: "showcase-portfolio",
    title: "Showcase Portfolio",
    category: "UI/UX",
    year: "2026",
    shortDescription: "Designing and developing this portfolio as a living evidence archive.",
    description:
      "Designed and built this portfolio from a Stitch-generated design concept into a production-ready Next.js application. Focus on design-system fidelity, accessibility, and reusable components.",
    tags: ["Next.js", "Tailwind CSS", "Design Systems"],
    coverGradient: "linear-gradient(135deg, #0e0e0e 0%, #201f1f 50%, #353534 100%)",
    featured: true,
    metadata: {
      duration: "Ongoing",
      teamSize: 1,
      role: "Designer & Developer",
      course: "Semester 4 — ICT & Media Design",
    },
    i18n: {
      nl: {
        shortDescription: "Dit portfolio ontworpen en gebouwd als een levend bewijs-archief.",
        description:
          "Dit portfolio ontworpen en gebouwd vanuit een Stitch-gegenereerd designconcept naar een productieklare Next.js applicatie. Gericht op design-system consistentie, toegankelijkheid en herbruikbare componenten.",
        sections: [
          {
            heading: "Van concept naar code",
            body: "Gestart vanuit een Stitch-design en volledig omgezet naar een Next.js applicatie met Tailwind CSS. Elk component is zorgvuldig vertaald van Figma naar werkende, herbruikbare code.",
          },
          {
            heading: "Design system",
            body: "Material Design 3 als basis voor het kleurensysteem, met aangepaste CSS-variabelen per project voor dynamische thematisering. Typografie, spacing en motion zijn consistent doorgevoerd via design tokens.",
          },
          {
            heading: "Tech stack",
            body: "Next.js · Tailwind CSS · Framer Motion · Figma · Vercel",
          },
        ],
      },
      en: {
        sections: [
          {
            heading: "From concept to code",
            body: "Started from a Stitch design and fully converted into a Next.js application with Tailwind CSS. Every component was carefully translated from Figma into working, reusable code.",
          },
          {
            heading: "Design system",
            body: "Material Design 3 as the foundation for the colour system, with custom CSS variables per project for dynamic theming. Typography, spacing, and motion are consistently applied through design tokens.",
          },
          {
            heading: "Tech stack",
            body: "Next.js · Tailwind CSS · Framer Motion · Figma · Vercel",
          },
        ],
      },
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
