export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-4xl font-light tracking-tight text-[#F9F9F9] md:text-5xl">
          Let's Talk
        </h2>
        <div className="flex flex-col gap-6">
          <a
            href="mailto:547118@student.fontys.nl"
            className="text-lg font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
          >
            547118@student.fontys.nl
          </a>
          <div className="flex gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Jasper-van-Tilborg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-[#F9F9F9] transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
