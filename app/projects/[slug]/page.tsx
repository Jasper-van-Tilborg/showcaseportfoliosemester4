import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../data/projects";
import Navbar from "../../components/Navbar";
import ProjectContentWrapper from "../../components/ProjectContentWrapper";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Jasper van Tilborg`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <article className="px-8 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="mb-12 inline-flex items-center gap-2 text-sm font-light text-[#9CA3AF] transition-opacity hover:opacity-70"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          {/* Hero Image */}
          <div className="mb-12 aspect-video w-full overflow-hidden bg-[#0a0a0a]">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-5xl font-light tracking-tight text-[#F9F9F9] md:text-6xl">
              {project.title}
            </h1>
            <p className="mb-6 text-lg font-light leading-relaxed text-[#F9F9F9]">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm font-light text-[#9CA3AF]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metadata */}
            {project.metadata && (
              <div className="mb-8 flex flex-wrap gap-6 text-sm font-light text-[#9CA3AF]">
                {project.metadata.duration && (
                  <span>Duration: {project.metadata.duration}</span>
                )}
                {project.metadata.teamSize && (
                  <span>Team: {project.metadata.teamSize} members</span>
                )}
                {project.metadata.role && (
                  <span>Role: {project.metadata.role}</span>
                )}
              </div>
            )}

            {/* Links */}
            {project.links && (
              <div className="flex flex-wrap gap-6">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-[#F9F9F9] underline transition-opacity hover:opacity-70"
                  >
                    View Live
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-[#F9F9F9] underline transition-opacity hover:opacity-70"
                  >
                    GitHub
                  </a>
                )}
                {project.links.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-[#F9F9F9] underline transition-opacity hover:opacity-70"
                  >
                    Case Study
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Content Section with Evidence */}
          <ProjectContentWrapper
            content={project.content || ""}
            evidence={project.evidence || []}
          />
        </div>
      </article>
    </main>
  );
}
