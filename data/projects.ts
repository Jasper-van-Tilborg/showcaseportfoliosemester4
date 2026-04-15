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
  type?: "palette" | "visual-identity"; // special render modes
  media?: {
    type: "video" | "image";
    src: string;
    poster?: string;
  };
}

export interface ProjectI18n {
  tagline?: string;
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
  categories?: string[];
  year: string;
  status?: "completed" | "in-progress";
  tagline?: string;
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
  gallery?: string[];
  theme?: ProjectTheme;
  i18n?: {
    nl?: ProjectI18n;
    en?: ProjectI18n;
  };
  discontinued?: {
    nl: string;
    en: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "fioresque",
    title: "Fioresque",
    category: "UI/UX",
    categories: ["UI/UX", "FRONT-END"],
    year: "2026",
    status: "in-progress",
    tagline: "Een frisse fashion webshop, van nul opgebouwd.",
    shortDescription: "Een frisse fashion webshop, van nul opgebouwd.",
    description:
      "Fioresque is een zelf bedacht kledingmerk dat ik samen met een vriend aan het bouwen ben. Wat begon als een paar shirtontwerpen die mijn vriend had gemaakt, groeide uit tot een volledig concept. Ik nam het op me om de volledige visuele identiteit en webshop te bouwen, van eerste ontwerp tot werkende checkout.",
    sections: [
      {
        heading: "De uitdaging",
        body: "Een complete e-commerce website bouwen die er premium uitziet maar fris en zomers aanvoelt voor een jong doelpubliek van 18 tot 25 jaar. De grootste technische uitdaging was het volledig responsive maken, iets waar AI-gestuurde tools zoals Cursor mee worstelden.",
      },
      {
        heading: "Visuele identiteit",
        body: "Voordat er één regel code geschreven werd, begon het bij het merk zelf. Een kleurenpalet, typografie en een logo die samen het karakter van Fioresque neerzetten: fris, natuur-geïnspireerd en premium zonder zwaar te voelen.",
        type: "visual-identity",
      },
      {
        heading: "Het ontwerp",
        body: "Met de visuele identiteit op zak begon het echte bouwen in Figma. Elk scherm, van homepage tot checkout, werd eerst uitgetekend en daarna component voor component vertaald naar Next.js code met Tailwind CSS.",
      },
      {
        heading: "Resultaat",
        body: "Een volledig werkende e-commerce website deployed op Vercel en versie beheerd op GitHub. Het merk is nog in ontwikkeling maar de technische basis is compleet. Of Fioresque een echt bedrijf wordt, dat zal de tijd uitwijzen.",
      },
    ],
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Vercel", "GitHub", "Figma"],
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
        "Plus Jakarta Sans": "'Plus Jakarta Sans', sans-serif",
        "Outfit":            "'Outfit', sans-serif",
      },
    },
    i18n: {
      en: {
        tagline: "A fresh fashion e-commerce experience, built from scratch.",
        shortDescription: "A fresh fashion e-commerce experience, built from scratch.",
        description:
          "Fioresque is a self-conceived clothing brand that I'm building together with a friend. What started as a few shirt designs my friend had made grew into a full concept. I took it upon myself to build the complete visual identity and webshop, from initial design to working checkout.",
        sections: [
          {
            heading: "The Challenge",
            body: "Building a complete e-commerce website that looks premium while feeling fresh and summery for a young target audience of 18 to 25 year olds. The biggest technical challenge was making the website fully responsive, something AI-driven tools like Cursor struggled with.",
          },
          {
            heading: "Visual Identity",
            body: "Before a single line of code was written, it started with the brand itself. A colour palette, typography and a logo that together define the character of Fioresque: fresh, nature-inspired and premium without feeling heavy.",
            type: "visual-identity",
          },
          {
            heading: "The Design",
            body: "With the visual identity in place, the real building began in Figma. Every screen, from homepage to checkout, was designed first and then translated component by component into Next.js code with Tailwind CSS.",
          },
          {
            heading: "Outcome",
            body: "A fully working e-commerce website deployed on Vercel and version controlled on GitHub. The brand is still in development but the technical foundation is complete. Whether Fioresque becomes a real business, time will tell.",
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
    status: "in-progress",
    shortDescription: "Een volledig merkbureau opgezet van nul in 3 weken.",
    description:
      "In drie weken hebben we met een team van zes VARA Media Agency opgezet: een volledig functionerend merkbureau met eigen identiteit, positionering en visueel systeem. Ik was verantwoordelijk voor de merkstrategie en visuele identiteit.",
    tags: ["Brand Strategy", "Visual Identity", "UI Design"],
    coverGradient: "linear-gradient(135deg, #246BF6 0%, #4d8ef8 50%, #D9F855 100%)",
    coverImage: "/vara_logo2.png",
    links: { live: "https://vara-agency.vercel.app", github: "https://github.com/timjonkergouw/vara_agency" },
    featured: true,
    sections: [
      {
        heading: "Merkontwikkeling",
        body: "In drie weken hebben we met een team van zes VARA Media Agency opgezet: een volledig functionerend merkbureau met eigen identiteit, positionering en visueel systeem. Ik was verantwoordelijk voor de merkstrategie en visuele identiteit.",
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
      course: "Semester 4, Media Design",
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
          "A collaborative 3-week sprint where I worked with 5 teammates to establish a complete branding agency called VARA. Responsible for brand strategy, visual identity, color system, logo design, and the homepage concept.",
        sections: [
          {
            heading: "Brand development",
            body: "In three weeks we built VARA Media Agency with a team of six: a fully functioning branding agency with its own identity, positioning, and visual system. I was responsible for the brand strategy and visual identity.",
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
    slug: "rosh-studios-tournament-editor",
    title: "Tournament Editor",
    category: "FULL-STACK",
    year: "2025",
    status: "completed",
    tagline: "AI-gestuurde toernooipagina's voor Twitch-kijkers.",
    shortDescription: "Een customizable online toernooitool gebouwd voor Rosh Studios, gericht op kijkersengagement rondom Twitch-toernooien.",
    description:
      "Een customizable online toernooitool gebouwd voor Rosh Studios, gericht op kijkersengagement rondom Twitch-toernooien. De tool stelt een admin in staat om toernooipagina's te genereren, bewerken en beheren via een AI-gestuurde wizard en live editor.",
    sections: [
      {
        heading: "De uitdaging",
        body: "Rosh Studios maakte eerder gebruik van Challonge voor het beheren van toernooien. Hoewel functioneel, bood het platform nauwelijks mogelijkheden om de uitstraling aan te passen aan de Rosh Studios-branding. De uitdaging: een tool bouwen die wél volledig customisable is, zonder dat de beheerder technische kennis nodig heeft.",
        media: { type: "image", src: "/roshproject/challongetoernooipage_rosh.png" },
      },
      {
        heading: "AI Wizard",
        body: "De kern van de tool is een wizard-flow die gebruikersinput omzet in een Claude-prompt. Claude genereert vervolgens een volledige toernooipagina in HTML, CSS en JavaScript, op maat en binnen seconden.",
        media: { type: "video", src: "/roshproject/rosh_project_poc.mp4" },
      },
      {
        heading: "Live editor & dashboard",
        body: "Na generatie kunnen pagina's component voor component bewerkt worden via een live editor. Data wordt opgeslagen in Supabase. Het dashboard biedt overzicht van alle pagina's, publicatie via eigen slugs en Twitch-integratie.",
        media: { type: "image", src: "/roshproject/customeditorpagina_rosh.png" },
      },
    ],
    gallery: [
      "/roshproject/dashboardpage_rosh.png",
      "/roshproject/toernooibeherenpage_rosh.png",
      "/roshproject/loginpage_rosh.png",
    ],
    tags: ["Next.js", "React", "Supabase", "Claude API", "Tailwind CSS", "Vercel", "Groepsproject"],
    links: {
      live: "https://roshproject.vercel.app",
      github: "https://github.com/Jasper-van-Tilborg/roshproject",
    },
    coverGradient: "linear-gradient(135deg, #111827 0%, #1A2335 50%, #482CFF 100%)",
    coverImage: "/rosh_studios_logo.svg",
    featured: true,
    metadata: {
      duration: "Semester 3, Front-end Development",
      role: "Full-stack Developer",
    },
    theme: {
      background:             "#111827",
      primary:                "#482CFF",
      primaryContainer:       "#420AB2",
      onPrimary:              "#F2F1EF",
      onSurface:              "#F2F1EF",
      onSurfaceVariant:       "#8B9EB8",
      outlineVariant:         "#2D3E5A",
      surfaceContainerLowest: "#0D1420",
    },
    i18n: {
      en: {
        tagline: "AI-powered tournament pages for Twitch audiences.",
        shortDescription: "A customizable online tournament tool built for Rosh Studios, focused on viewer engagement around Twitch tournaments.",
        description:
          "A customizable online tournament tool built for Rosh Studios, focused on viewer engagement around Twitch tournaments. The tool allows an admin to generate, edit, and manage tournament pages via an AI-powered wizard and live editor.",
        sections: [
          {
            heading: "The challenge",
            body: "Rosh Studios previously used Challonge to manage their tournaments. While functional, the platform offered little flexibility to match the Rosh Studios branding. The challenge: build a tool that is fully customisable, without requiring any technical knowledge from the admin.",
            media: { type: "image", src: "/roshproject/challongetoernooipage_rosh.png" },
          },
          {
            heading: "AI Wizard",
            body: "The core of the tool is a wizard flow that converts user input into a Claude prompt. Claude then generates a complete tournament page in HTML, CSS and JavaScript, custom and within seconds.",
          },
          {
            heading: "Live editor & dashboard",
            body: "After generation, pages can be edited component by component via a live editor. Data is stored in Supabase. The dashboard provides an overview of all pages, publication via custom slugs and Twitch integration.",
          },
        ],
      },
    },
    discontinued: {
      nl: "Dit project is stilgelegd. De tool maakt gebruik van de Claude AI API, waarvoor credits nodig zijn die momenteel niet meer beschikbaar zijn. De applicatie is daardoor niet meer functioneel.",
      en: "This project has been discontinued. The tool relies on the Claude AI API, which requires credits that are no longer available. As a result, the application is no longer functional.",
    },
  },
  {
    id: 4,
    slug: "cookmind",
    title: "CookMind",
    category: "UI/UX",
    categories: ["UI/UX", "FRONT-END"],
    year: "2025",
    status: "completed",
    tagline: "Jouw AI-kookassistent, gebouwd op wat je in huis hebt.",
    shortDescription: "Een AI-gestuurde kook-app die gebruikers helpt recepten te vinden op basis van hun voorraad, met barcode scanner en Claude AI-integratie.",
    description:
      "Een persoonlijk project waarbij ik een AI-gestuurde kook-app heb ontworpen en gebouwd. CookMind AI helpt gebruikers recepten te vinden op basis van hun voorraad, met een barcode scanner, houdbaarheidsbeheer en een AI-integratie via Claude.",
    sections: [
      {
        heading: "Onderzoek & ontwerp",
        body: "Op basis van CMD-methodes (benchmark creation, competitive analysis, best practices) en Apple Human Interface Guidelines ontworpen in Figma. Volledig design inclusief onboarding, authenticatie, voorraadpagina, modals, receptenpagina en kookmodus.",
      },
      {
        heading: "De app",
        body: "Volledig gebouwd in Cursor met een login flow, voorraadbeheer en barcode scanner. Claude AI analyseert de beschikbare ingrediënten en stelt passende recepten voor op basis van wat er in huis is.",
      },
      {
        heading: "Testen & itereren",
        body: "Usability tests uitgevoerd en testresultaten verwerkt in iteraties op het design. Inzichten vertaald naar concrete verbeteringen in navigatie, flow en AI-interactie.",
      },
    ],
    tags: ["Figma", "Claude API", "iOS", "UX Research", "Usability Testing", "Cursor", "Supabase"],
    coverGradient: "linear-gradient(135deg, #0a1a0e 0%, #163524 50%, #1e6b3a 100%)",
    coverImage: "/cookmind_logo2.svg",
    featured: true,
    metadata: {
      duration: "Semester 4",
      teamSize: 1,
      role: "Designer & Developer",
      course: "Semester 4, ICT & Media Design",
    },
    theme: {
      background:             "#0a1a0e",
      primary:                "#3ecf6e",
      primaryContainer:       "#1e6b3a",
      onPrimary:              "#021a0a",
      onSurface:              "#dff5e8",
      onSurfaceVariant:       "#8dbfa0",
      outlineVariant:         "#1a3526",
      surfaceContainerLowest: "#061009",
    },
    i18n: {
      en: {
        tagline: "Your AI cooking assistant, built on what you have at home.",
        shortDescription: "An AI-powered cooking app that helps users find recipes based on their pantry, with a barcode scanner and Claude AI integration.",
        description:
          "A personal project where I designed and built an AI-powered cooking app. CookMind AI helps users find recipes based on their pantry inventory, with a barcode scanner, expiry management and Claude AI integration.",
        sections: [
          {
            heading: "Research & design",
            body: "Designed in Figma based on CMD methods (benchmark creation, competitive analysis, best practices) and Apple Human Interface Guidelines. Full design including onboarding, authentication, pantry page, modals, recipes page and cooking mode.",
          },
          {
            heading: "The app",
            body: "Fully built in Cursor with a login flow, pantry management and barcode scanner. Claude AI analyses available ingredients and suggests matching recipes based on what is in the house.",
          },
          {
            heading: "Testing & iterating",
            body: "Usability tests conducted and results processed into design iterations. Insights translated into concrete improvements in navigation, flow and AI interaction.",
          },
        ],
      },
    },
  },
  {
    id: 5,
    slug: "quality-lodgings",
    title: "Quality Lodgings",
    category: "UI/UX",
    year: "2025",
    status: "completed",
    tagline: "UX-verbeteringen voor een premium hotelwebsite.",
    shortDescription: "Een groepsopdracht voor Fightclub waarbij we de UX van Quality Lodgings hebben verbeterd via gebruikersonderzoek, iteratief prototypen en Figma designs.",
    description:
      "Een groepsopdracht voor Fightclub, een creatief bureau, waarbij we de UX van de website van Quality Lodgings hebben verbeterd. Via gebruikersonderzoek, iteratief prototypen en Figma designs hebben we knelpunten in navigatie en het boekingsproces aangepakt.",
    sections: [
      {
        heading: "Gebruikersonderzoek",
        body: "User tests afgenomen en verbeterpunten gestructureerd via een prioriteringsmatrix: Big Bets, Quick Wins, Money Pits en Fill-ins. User stories opgesteld als basis voor het ontwerpproces.",
      },
      {
        heading: "Ontwerp & iteraties",
        body: "Paper prototypes gemaakt en getest. Figma designs uitgewerkt voor de hoofdpagina, hotelpagina en 'Vind jouw stijl'-pagina, met meerdere iteraties op basis van testfeedback. Expert review uitgevoerd op het werk van een ander groepje.",
      },
    ],
    tags: ["Figma", "UX Research", "Usability Testing", "Prototyping", "User Stories"],
    coverGradient: "linear-gradient(135deg, #1a1410 0%, #3d2e1a 50%, #8c6a3a 100%)",
    coverImage: "/qualitylodgings_logo.svg",
    featured: true,
    metadata: {
      duration: "Semester 4",
      teamSize: 4,
      role: "UX Designer",
      course: "Semester 4, Media Design",
    },
    theme: {
      background:             "#1a1410",
      primary:                "#c49a52",
      primaryContainer:       "#8c6a3a",
      onPrimary:              "#1a1410",
      onSurface:              "#f0ebe0",
      onSurfaceVariant:       "#b8a882",
      outlineVariant:         "#3d3020",
      surfaceContainerLowest: "#100e09",
    },
    i18n: {
      en: {
        tagline: "UX improvements for a premium hotel website.",
        shortDescription: "A group project for Fightclub where we improved the UX of the Quality Lodgings website through user research, iterative prototyping and Figma designs.",
        description:
          "A group project for Fightclub, a creative agency, where we improved the UX of the Quality Lodgings website. Through user research, iterative prototyping and Figma designs we tackled pain points in navigation and the booking process.",
        sections: [
          {
            heading: "User research",
            body: "User tests conducted and improvements structured via a prioritisation matrix: Big Bets, Quick Wins, Money Pits and Fill-ins. User stories drafted as the foundation for the design process.",
          },
          {
            heading: "Design & iterations",
            body: "Paper prototypes created and tested. Figma designs developed for the homepage, hotels page and 'Find your style' page, with multiple iterations based on test feedback. Expert review conducted on another group's work.",
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
