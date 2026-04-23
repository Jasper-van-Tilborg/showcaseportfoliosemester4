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
  subheading?: string;
  body: string;
  type?: "palette" | "visual-identity" | "text"; // special render modes
  media?: {
    type: "video" | "image" | "figma";
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
  surfaceContainerLow?: string;   // replaces --color-surface-container-low
  surfaceContainer?: string;      // replaces --color-surface-container
  surfaceContainerHigh?: string;  // replaces --color-surface-container-high
  fontHighlights?: Record<string, string>; // word → font-family, renders that word in its own font
}

export interface Project {
  id: number;
  slug: string;
  hidden?: boolean;
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
  fullWidthBanner?: string; // Full-bleed image shown at top of project page
  bannerVideo?: string;        // Ping-pong background video for banner
  bannerOverlayImage?: string; // Image overlaid on top of bannerVideo
  coverLogos?: string[]; // Multiple logos rendered side by side with × between them
  heroSplit?: { left: string; right: string }; // Split hero gradient: left half / right half
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
    hidden: true,
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
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Vercel", "GitHub", "Figma", "Supabase"],
    coverGradient: "linear-gradient(135deg, #1E2420 0%, #2D4A35 50%, #4A7A56 100%)",
    coverImage: "/fioresque_logo.png",
    bannerVideo: "/fioresque/junglebackground.mp4",
    bannerOverlayImage: "/fioresque/tshirtdesign.png",
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
    hidden: true,
    title: "Virtual Production Marketing",
    category: "BRANDING",
    categories: ["BRANDING", "UI/UX"],
    year: "2026",
    status: "in-progress",
    tagline: "Eerst een bureau. Toen een campagne.",
    shortDescription: "We richtten VARA Media Agency op van nul — en als VARA namen we meteen de eerste echte opdracht aan: de marketingcampagne voor de Virtual Production minor van Fontys.",
    description:
      "Dit project heeft twee lagen. Eerst richtten we als groep VARA Media Agency op: een volwaardig creatief bureau met eigen naam, identiteit en positionering. Daarna gingen we als dat bureau aan de slag met een echte opdracht — het marketen van de Virtual Production minor van Fontys, een opleiding over filmproductie met LED walls, real-time rendering en virtuele sets.",
    tags: ["Brand Strategy", "Visual Identity", "Figma", "Marketing", "Campagne"],
    coverGradient: "linear-gradient(135deg, #0e0a14 0%, #2a1040 55%, #7B2D8B 100%)",
    coverLogos: ["/vara_logo2.png", "/virtualproductionlogo.png"],
    heroSplit: {
      left:  "linear-gradient(135deg, #0a1a4a 0%, #246BF6 50%, #b8d400 100%)",
      right: "linear-gradient(225deg, #1a0a2e 0%, #7B2D8B 50%, #3d0060 100%)",
    },
    links: { live: "https://vara-agency.vercel.app", github: "https://github.com/timjonkergouw/vara_agency" },
    featured: true,
    sections: [
      {
        heading: "Stap 1 — Het bureau",
        subheading: "VARA Media Agency, opgericht in drie weken.",
        type: "text",
        body: "Voordat we als bureau konden werken, moesten we er één zijn. Met een team van zes bouwden we VARA Media Agency op van nul: een eigen naam, merkidentiteit, positionering en visueel systeem. Ik was verantwoordelijk voor de merkstrategie en visuele identiteit — van kleurenpalet en typografie tot logo en tone of voice.",
      },
      {
        heading: "Stap 2 — De opdracht",
        subheading: "De VP minor van Fontys marketen als VARA.",
        type: "text",
        body: "Als VARA kregen we de opdracht om de Virtual Production minor van Fontys te marketen. De minor leidt studenten op in cutting-edge filmproductietechnieken — LED walls die complete werelden simuleren, real-time rendering en virtuele sets. Een wereld die de meeste media-studenten nog nooit van dichtbij hebben gezien. Onze taak: maak dat tastbaar.",
      },
      {
        heading: "De campagne",
        body: "VARA ontwikkelde een campagne die de technologie niet uitlegt maar laat voelen. Tone of voice, kanaalkeuze en beeldtaal zijn volledig gericht op creatieve media-studenten die klaar zijn voor het volgende niveau. De centrale belofte: jij staat straks in een wereld die er niet is.",
      },
    ],
    metadata: {
      duration: "Semester 4",
      teamSize: 6,
      role: "Brand Strategist & Visual Designer",
      course: "Semester 4, Media Design",
    },
    theme: {
      background:             "#0e0a14",
      primary:                "#7B2D8B",
      primaryContainer:       "#9B3DAB",
      onPrimary:              "#ffffff",
      onSurface:              "#f5f0f8",
      onSurfaceVariant:       "#b89fc7",
      outlineVariant:         "#2a1a35",
      surfaceContainerLowest: "#080610",
      surfaceContainerLow:    "#130e1c",
      surfaceContainer:       "#1a1226",
      surfaceContainerHigh:   "#221830",
    },
    i18n: {
      en: {
        tagline: "First an agency. Then a campaign.",
        shortDescription: "We founded VARA Media Agency from scratch — and as VARA we immediately took on our first real brief: the marketing campaign for the Virtual Production minor at Fontys.",
        description:
          "This project has two layers. First we founded VARA Media Agency as a group: a fully functioning creative bureau with its own name, identity and positioning. Then, as that agency, we took on a real brief — marketing the Virtual Production minor at Fontys, a programme about film production with LED walls, real-time rendering and virtual sets.",
        sections: [
          {
            heading: "Step 1 — The agency",
            subheading: "VARA Media Agency, founded in three weeks.",
            type: "text",
            body: "Before we could work as an agency, we had to be one. With a team of six we built VARA Media Agency from scratch: a name, brand identity, positioning and visual system. I was responsible for brand strategy and visual identity — from colour palette and typography to logo and tone of voice.",
          },
          {
            heading: "Step 2 — The brief",
            subheading: "Marketing the VP minor at Fontys as VARA.",
            type: "text",
            body: "As VARA we were briefed to market the Virtual Production minor at Fontys. The minor trains students in cutting-edge film production techniques — LED walls that simulate entire worlds, real-time rendering and virtual sets. A world most media students have never seen up close. Our task: make it tangible.",
          },
          {
            heading: "The campaign",
            body: "VARA developed a campaign that doesn't explain the technology — it makes you feel it. Tone of voice, channel choice and visual language are entirely focused on creative media students ready for the next level. The central promise: you'll soon be standing in a world that doesn't exist.",
          },
        ],
      },
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
        body: "Ontworpen in Figma op basis van Apple Human Interface Guidelines. Volledig design inclusief onboarding, authenticatie, voorraadpagina, modals, receptenpagina en kookmodus.",
        media: { type: "figma", src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/xtzCaZRWxFfrnutndvnbwQ/CookMind-AI?node-id=67-63&viewport=-3213%2C415%2C0.52&t=1AqZQC2l6nIonDsl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A63&show-proto-sidebar=1&page-id=0%3A1", poster: "/cookmind/onboardingpage_cookmind.png" },
      },
      {
        heading: "De app",
        body: "Volledig gebouwd in Cursor met een login flow, voorraadbeheer en barcode scanner. Claude AI analyseert de beschikbare ingrediënten en stelt passende recepten voor op basis van wat er in huis is.",
        media: { type: "video", src: "/cookmind/cookmind_poc.mp4" },
      },
    ],
    tags: ["Figma", "Next.js", "Claude API", "iOS", "UX Research", "Usability Testing", "Supabase"],
    links: {
      live: "https://cookmind-ten.vercel.app",
      github: "https://github.com/Jasper-van-Tilborg/cookmind",
    },
    coverGradient: "linear-gradient(135deg, #0a1a0e 0%, #163524 50%, #1e6b3a 100%)",
    coverImage: "/cookmind_logo2.svg",
    featured: true,
    metadata: {
      duration: "Semester 3, Front-end Development",
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
    discontinued: {
      nl: "De app maakt gebruik van Supabase en de Claude AI API. Supabase verwijdert inactieve databases na 13 dagen, waardoor de app mogelijk niet werkt. Ook zijn er credits nodig voor de Claude API die niet altijd beschikbaar zijn.",
      en: "The app uses Supabase and the Claude AI API. Supabase removes inactive databases after 13 days, which may cause the app to stop working. Claude API credits are also required and may not always be available.",
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
            body: "Designed in Figma based on Apple Human Interface Guidelines. Full design including onboarding, authentication, pantry page, modals, recipes page and cooking mode.",
            media: { type: "figma", src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/xtzCaZRWxFfrnutndvnbwQ/CookMind-AI?node-id=67-63&viewport=-3213%2C415%2C0.52&t=1AqZQC2l6nIonDsl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A63&show-proto-sidebar=1&page-id=0%3A1", poster: "/cookmind/onboardingpage_cookmind.png" },
          },
          {
            heading: "The app",
            body: "Fully built in Cursor with a login flow, pantry management and barcode scanner. Claude AI analyses available ingredients and suggests matching recipes based on what is in the house.",
            media: { type: "video", src: "/cookmind/cookmind_poc.mp4" },
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
    tagline: "Een herontworpen premium hotelwebsite voor Fightclub.",
    shortDescription: "Voor Fightclub hebben we als groep de website van Quality Lodgings herontworpen. Het eindresultaat is een strakker navigatiesysteem en een vereenvoudigd boekingsproces, uitgewerkt in een volledig klikbaar Figma prototype.",
    description:
      "Quality Lodgings is een premium hotelketen waarvan de website moeizaam te navigeren was en een omslachtig boekingsproces had. De opdracht van Fightclub: maak de site intuïtiever zonder de luxe uitstraling aan te tasten. Het eindresultaat is een herontworpen website met een overzichtelijke structuur, een vloeiend boekingsproces en een nieuwe 'Vind jouw stijl'-pagina die gasten helpt het juiste hotel te kiezen.",
    sections: [
      {
        heading: "Het eindresultaat",
        body: "Een volledig klikbaar Figma prototype met een herontworpen hoofdpagina, een vernieuwde hotelpagina en een nieuwe 'Vind jouw stijl'-pagina. De navigatie is vereenvoudigd, het boekingsproces teruggebracht tot de essentiële stappen en de visuele hiërarchie geoptimaliseerd voor conversie.",
        media: {
          type: "figma",
          src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/QbTLSUu7nLg4ucJ7FT0cOQ/Quality-Lodgings?node-id=32-386&p=f&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=32%3A386&page-id=0%3A1",
          poster: "/qualitylodgings/qualitylodgingsposter.png",
        },
      },
    ],
    tags: ["Figma", "UX Research", "Usability Testing", "Prototyping", "User Stories"],
    coverGradient: "linear-gradient(160deg, #0a1210 0%, #0f2420 50%, #1a4a3e 100%)",
    coverImage: "/qualitylodgings_logo.svg",
    featured: true,
    links: {
      figma: "https://www.figma.com/proto/QbTLSUu7nLg4ucJ7FT0cOQ/Quality-Lodgings?node-id=32-386&p=f&viewport=-212%2C681%2C0.07&t=XvOpodFHIX8QC2vy-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=32%3A386&show-proto-sidebar=1&page-id=0%3A1",
    },
    metadata: {
      duration: "Semester 4",
      teamSize: 4,
      role: "UX Designer",
      course: "Semester 4, Media Design",
    },
    theme: {
      background:             "#0f1a18",
      primary:                "#789F90",
      primaryContainer:       "#5a7d70",
      onPrimary:              "#0f1a18",
      onSurface:              "#ffffff",
      onSurfaceVariant:       "#789F90",
      outlineVariant:         "#1e3530",
      surfaceContainerLowest: "#0a1210",
      surfaceContainerLow:    "#142420",
      surfaceContainer:       "#1a2e2a",
      surfaceContainerHigh:   "#223d38",
      fontHighlights: {
        "Quality Lodgings": "Times New Roman, Georgia, serif",
      },
    },
    i18n: {
      en: {
        tagline: "A redesigned premium hotel website for Fightclub.",
        shortDescription: "For Fightclub we redesigned the Quality Lodgings website as a group. The end result is a cleaner navigation system and a simplified booking process, delivered as a fully interactive Figma prototype.",
        description:
          "Quality Lodgings is a premium hotel chain whose website was hard to navigate and had a cumbersome booking process. Fightclub's brief: make the site more intuitive without compromising its luxury feel. The end result is a redesigned website with a clear structure, a streamlined booking flow and a new 'Find your style' page that helps guests choose the right hotel.",
        sections: [
          {
            heading: "The result",
            body: "A fully interactive Figma prototype with a redesigned homepage, a revamped hotel page and a new 'Find your style' page. Navigation has been simplified, the booking process reduced to its essential steps and the visual hierarchy optimised for conversion.",
            media: {
              type: "figma",
              src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/QbTLSUu7nLg4ucJ7FT0cOQ/Quality-Lodgings?node-id=32-386&p=f&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=32%3A386&page-id=0%3A1",
              poster: "/qualitylodgings/qualitylodgingsposter.png",
            },
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
            media: { type: "video", src: "/roshproject/rosh_project_poc.mp4" },
          },
          {
            heading: "Live editor & dashboard",
            body: "After generation, pages can be edited component by component via a live editor. Data is stored in Supabase. The dashboard provides an overview of all pages, publication via custom slugs and Twitch integration.",
            media: { type: "image", src: "/roshproject/customeditorpagina_rosh.png" },
          },
        ],
      },
    },
    discontinued: {
      nl: "Dit project is stilgelegd. De tool maakt gebruik van de Claude AI API, waarvoor credits nodig zijn die momenteel niet meer beschikbaar zijn. De applicatie is daardoor niet meer functioneel.",
      en: "This project has been discontinued. The tool relies on the Claude AI API, which requires credits that are no longer available. As a result, the application is no longer functional.",
    },
  },
];

export const visibleProjects = projects.filter((p) => !p.hidden);
export const featuredProjects = visibleProjects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
