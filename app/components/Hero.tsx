"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-6xl font-light tracking-tight text-[#F9F9F9] md:text-7xl">
          Jasper van Tilborg
        </h1>
        <p className="mb-8 text-xl font-light text-[#9CA3AF] md:text-2xl">
          Brand Strategist & Visual Designer
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-[#F9F9F9]">
          I create digital experiences that blend thoughtful design with clean,
          efficient code. Passionate about building interfaces that are both
          visually striking and user-friendly.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="rounded-sm border border-[#F9F9F9] px-8 py-3 text-sm font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
        >
          View Work
        </button>
      </div>
    </section>
  );
}
