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
    coverImage: "/fioresque_wit.png",
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
  },
  {
    id: 2,
    slug: "vara-media-agency",
    title: "VARA Media Agency",
    category: "BRANDING",
    year: "2026",
    shortDescription: "Building a full branding agency from the ground up in 3 weeks.",
    description:
      "A collaborative 3-week sprint where I worked with 5 teammates to establish a complete branding agency — VARA. Responsible for brand strategy, visual identity, color system, logo design, and the homepage concept.",
    tags: ["Brand Strategy", "Visual Identity", "UI Design"],
    coverGradient: "linear-gradient(135deg, #1a0a00 0%, #3d1500 40%, #ff5c00 100%)",
    featured: true,
    metadata: {
      duration: "3 weeks",
      teamSize: 6,
      role: "Brand Strategist & Visual Designer",
      course: "Semester 4 — Media Design",
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
  },
  {
    id: 4,
    slug: "brand-identity-study",
    title: "Brand Identity Study",
    category: "IDENTITY",
    year: "2025",
    shortDescription: "Developing a complete visual language for a fictional tech brand.",
    description:
      "Deep dive into brand identity work — from mood boarding and competitive analysis to logo construction, type pairing, and a comprehensive style guide.",
    tags: ["Figma", "Typography", "Brand Strategy"],
    coverGradient: "linear-gradient(135deg, #0a0a14 0%, #1a1a30 50%, #2a2a50 100%)",
    featured: true,
    metadata: {
      duration: "4 weeks",
      teamSize: 1,
      role: "Visual Designer",
      course: "Semester 4 — Media Design",
    },
  },
  {
    id: 5,
    slug: "motion-design-reel",
    title: "Motion Design Reel",
    category: "MOTION",
    year: "2025",
    shortDescription: "Animating static UI concepts into cinematic motion sequences.",
    description:
      "Collection of motion design work exploring micro-interactions, title animations, and brand reveal sequences using After Effects and Figma's prototyping engine.",
    tags: ["After Effects", "Motion Design", "Animation"],
    coverGradient: "linear-gradient(135deg, #100800 0%, #2a1500 50%, #6b3500 100%)",
    featured: false,
    metadata: {
      duration: "6 weeks",
      teamSize: 1,
      role: "Motion Designer",
      course: "Semester 4 — Media Design",
    },
  },
  {
    id: 6,
    slug: "ux-research-sprint",
    title: "UX Research Sprint",
    category: "RESEARCH",
    year: "2025",
    shortDescription: "User research, interviews, and iterative prototyping for a mobile concept.",
    description:
      "Conducted user interviews, affinity mapping, and usability testing across three prototype iterations. Delivered a validated high-fidelity Figma prototype and research report.",
    tags: ["UX Research", "Figma", "Usability Testing"],
    coverGradient: "linear-gradient(135deg, #0a0e0e 0%, #0e1f1f 50%, #1a3030 100%)",
    featured: false,
    metadata: {
      duration: "5 weeks",
      teamSize: 3,
      role: "Lead UX Researcher",
      course: "Semester 4 — ICT & Media Design",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
