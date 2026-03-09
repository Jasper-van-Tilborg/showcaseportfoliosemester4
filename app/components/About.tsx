export default function About() {
  const skills = [
    "Design",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "TypeScript",
    "React",
  ];

  return (
    <section id="about" className="px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-4xl font-light tracking-tight text-[#F9F9F9] md:text-5xl">
          About
        </h2>
        <p className="mb-8 text-lg font-light leading-relaxed text-[#F9F9F9]">
          As a designer and developer, I specialize in creating seamless digital 
          experiences from concept to completion. My approach combines user-centered 
          design thinking with modern web technologies, resulting in interfaces that 
          are both beautiful and performant. Whether I'm sketching wireframes in 
          Figma or writing clean TypeScript code, I'm always focused on creating 
          solutions that solve real problems for real users.
        </p>
        <div className="mt-12">
          <p className="mb-4 text-sm font-light text-[#9CA3AF]">Skills & Tools</p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-sm font-light text-[#F9F9F9]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
