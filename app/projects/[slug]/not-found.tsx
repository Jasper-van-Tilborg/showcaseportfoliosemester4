import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light text-[#F9F9F9] md:text-5xl">
            Project Not Found
          </h1>
          <p className="mb-8 text-lg font-light text-[#9CA3AF]">
            The project you're looking for doesn't exist.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-light text-[#F9F9F9] underline transition-opacity hover:opacity-70"
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
        </div>
      </div>
    </main>
  );
}
