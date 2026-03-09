"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-normal text-[#F9F9F9] transition-opacity hover:opacity-70"
          >
            Jasper van Tilborg
          </button>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
