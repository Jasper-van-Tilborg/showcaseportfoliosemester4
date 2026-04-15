import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectPageContent from "@/components/ProjectPageContent";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return <ProjectPageContent project={project} nextProject={nextProject} prevProject={prevProject} />;
}
