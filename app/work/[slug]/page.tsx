import { notFound } from "next/navigation";
import { getProjectBySlug, projects, visibleProjects } from "@/data/projects";
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

  const nav = visibleProjects;
  const currentIndex = nav.findIndex((p) => p.slug === slug);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextProject = nav[(safeIndex + 1) % nav.length];
  const prevProject = nav[(safeIndex - 1 + nav.length) % nav.length];

  return <ProjectPageContent project={project} nextProject={nextProject} prevProject={prevProject} />;
}
