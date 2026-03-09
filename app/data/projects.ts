export interface EvidenceItem {
  id: string;
  title: string;
  type: 'text' | 'image' | 'images';
  content?: string;
  images?: string[];
  thumbnail?: string;
  description?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  content?: string;
  evidence?: EvidenceItem[];
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  metadata?: {
    duration?: string;
    teamSize?: number;
    role?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "vara-media-agency",
    title: "VARA Media Agency",
    shortDescription: "3-week project setting up a branding agency with 5 team members",
    description: "A collaborative 3-week project where I worked with 5 team members to establish a complete branding agency. This project involved creating the agency's identity, processes, and foundational elements from the ground up.",
    tags: ["Design", "Branding", "Team Project"],
    image: "/evidence/vara/VARA Logo.jpeg",
    content: "During this project I was part of a team building a media agency called VARA from the ground up. Here is an overview of what I personally created.\n\nI started by writing out our agency's core values [link: Core Values V2], turning a rough brainstorm into a clear and structured document that explained the meaning and intention behind each value, making it accessible for anyone reading it.\n\nWhen it came to the visual identity, I designed the color palette for VARA [link: Color Palette VARA]. I went for calm blue tones as the base with a bold lime yellow accent to create a balance between calmness and boldness. I then documented this in the style guide [link: Style Guide VARA], where I also wrote out the reasoning behind each color choice.\n\nI also designed the BeeU logo [link: Logo BeeU], which was the agency's first name before we switched to VARA. The logo combined honeycomb shapes, a flowing line and clean typography into one cohesive design.\n\nFinally, together with a teammate I designed the homepage for VARA [link: Homepage VARA]. My specific contributions were the hero section with \"TO BE.\", the about preview section, the process section which I based on research into how other agencies present themselves online, and the overall idea of connecting all pages through consistent call-to-action buttons.",
    evidence: [
      {
        id: "core-values-v2",
        title: "Core Values V2",
        type: "text",
        content: "Human Connection\nWe believe that strong brands are built on real Human Connection. Instead of just focusing on likes or views, we translate real emotions and stories to digital content that feels natural for people online.\n\nWe do this by considering how people actually scroll, react and engage with content on social media, and we adapt our tone and visuals accordingly. Our communication avoids sounding overly commercial and instead aims to feel relatable and human.\n\nThis approach helps brands build meaningful relationships with their audience, leading to more trust and higher engagement.\n\nConfidence\nConfidence means understanding our craft and being able to translate that knowledge into clear and reliable communication. We believe that confidence comes from knowing what we are doing and being able to explain and apply this in a consistent way.\n\nOur confidence is shown through the way we approach strategy, design, and branding decisions with intention and understanding. We base our choices on research, analysis, and a clear view of the client's goals rather than assumptions. Because we know why we make certain creative and strategic decisions, we are able to communicate them clearly and provide convincing advice. This allows us to build brand identities and campaigns that feel deliberate and well-considered, rather than random or trend-driven.\n\nThis approach gives our clients a sense of trust and direction. They receive branding and communication that is not only visually consistent, but also supported by clear reasoning and strategic insight, helping their brand appear reliable and professional to their audience.\n\nEfficiency\nWe believe that good work comes from working with structure and intention. Every step in our process should have a clear purpose and contribute to the final outcome. Time, effort, and resources are treated as valuable, which means we avoid unnecessary actions and focus on what truly adds value to a project.\n\nThis value is reflected in the way projects are planned and executed. Clear workflows and defined responsibilities allow us to move from research to concept and execution without unnecessary steps. During the creative process, each decision is evaluated based on its relevance to the overall goal. Instead of producing work for the sake of producing work, we prioritize actions that support the strategy and the intended result, creating a process that remains both focused and adaptable.\n\nAs a result, clients experience a process that is transparent and goal-oriented. Their time and budget are invested in decisions that directly support their objectives, leading to outcomes that feel considered, consistent, and strategically grounded.\n\nPlayful but Purposeful\nWe keep our work engaging and playful, but always grounded in strategy and intention. When we are developing concepts, we aim to balance creativity with clear objectives. Each idea is evaluated based on what it is meant to achieve. Playful elements are therefore used intentionally to support the message rather than distract from it.\n\nThis results in content that is both enjoyable and effective. Which means clients benefit from communication that is entertaining while also contributing to concrete communication goals.\n\nCulture Driven\nWe stay closely connected to digital culture, mainly Gen Z trends and humor because this is our target audience. We continuously observe and analyze developments on platforms such as Tiktok and Instagram. Instead of direcly copying trends we interpret them into concepts that fit the brand's indentity and tone.\n\nBy doing this we keep our content relevant but we remain authentic to the brand. This enables brands to take part in the social media market without losing consistency or credibility.",
        description: "The agency's core values document",
      },
      {
        id: "color-palette-vara",
        title: "Color Palette VARA",
        type: "image",
        images: ["/evidence/vara/kleurenpalette vara.png"],
        thumbnail: "/evidence/vara/kleurenpalette vara.png",
        description: "Color palette with 5 colors: Digital Blue, Baby Blue Ice, Porcelain, Graphite, and Lime Yellow",
      },
      {
        id: "style-guide-vara",
        title: "Style Guide VARA",
        type: "image",
        images: ["/evidence/vara/Style guide VARA.png"],
        thumbnail: "/evidence/vara/Style guide VARA.png",
        description: "Style guide documentation with color palette reasoning",
      },
      {
        id: "logo-beeu",
        title: "Logo BeeU",
        type: "image",
        images: ["/evidence/vara/Logo BeeU.png"],
        thumbnail: "/evidence/vara/Logo BeeU.png",
        description: "BeeU logo with honeycomb shapes and flowing line",
      },
      {
        id: "homepage-vara",
        title: "Homepage VARA",
        type: "images",
        images: ["/evidence/vara/Homepage design VARA.png", "/evidence/vara/Homepage design VARA interactive menu.png"],
        thumbnail: "/evidence/vara/Homepage design VARA.png",
        description: "VARA homepage design with hero section, about preview, and process section",
      },
    ],
    metadata: {
      duration: "3 weeks",
      teamSize: 6,
      role: "Brand Strategist & Visual Designer",
    },
  },
  {
    id: 2,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A modern shopping experience with seamless checkout flow",
    description: "A modern shopping experience with seamless checkout flow",
    tags: ["Design", "Development"],
    image: "https://placehold.co/600x400/0a0a0a/F9F9F9?text=E-Commerce+Platform",
  },
  {
    id: 3,
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    shortDescription: "Analytics dashboard for data visualization and insights",
    description: "Analytics dashboard for data visualization and insights",
    tags: ["Design", "Next.js"],
    image: "https://placehold.co/600x400/0a0a0a/F9F9F9?text=SaaS+Dashboard",
  },
  {
    id: 4,
    slug: "brand-identity",
    title: "Brand Identity",
    shortDescription: "Complete visual identity system for a tech startup",
    description: "Complete visual identity system for a tech startup",
    tags: ["Design", "Figma"],
    image: "https://placehold.co/600x400/0a0a0a/F9F9F9?text=Brand+Identity",
  },
  {
    id: 5,
    slug: "mobile-app",
    title: "Mobile App",
    shortDescription: "Native mobile application with intuitive user interface",
    description: "Native mobile application with intuitive user interface",
    tags: ["Design", "Development"],
    image: "https://placehold.co/600x400/0a0a0a/F9F9F9?text=Mobile+App",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
