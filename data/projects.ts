export interface EvidenceItem {
  id: string;
  title: string;
  type: "text" | "image" | "images";
  content?: string;
  images?: string[];
  thumbnail?: string;
  description?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  tags: string[];
  coverGradient: string; // CSS gradient string used as cover
  featured: boolean;
  evidence?: EvidenceItem[];
  links?: { live?: string; github?: string };
  metadata?: {
    duration?: string;
    teamSize?: number;
    role?: string;
    course?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
