import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-light tracking-tight text-[#F9F9F9] md:text-5xl">
          Work
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block transition-opacity hover:opacity-80"
            >
              <div className="mb-4 aspect-video w-full overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-normal text-[#F9F9F9]">
                {project.title}
              </h3>
              <p className="mb-3 text-sm font-light text-[#9CA3AF]">
                {project.shortDescription}
              </p>
              <div className="flex gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-light text-[#9CA3AF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
