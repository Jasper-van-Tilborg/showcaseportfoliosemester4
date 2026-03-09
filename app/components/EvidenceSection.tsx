"use client";

import Image from "next/image";
import { EvidenceItem } from "../data/projects";

interface EvidenceSectionProps {
  evidence: EvidenceItem[];
  onEvidenceClick: (evidenceId: string) => void;
}

export default function EvidenceSection({
  evidence,
  onEvidenceClick,
}: EvidenceSectionProps) {
  if (!evidence || evidence.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 border-t border-[#1a1a1a] pt-24">
      <h2 className="mb-12 text-3xl font-light tracking-tight text-[#F9F9F9] md:text-4xl">
        Evidence
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {evidence.map((item) => (
          <button
            key={item.id}
            onClick={() => onEvidenceClick(item.id)}
            className="group text-left transition-opacity hover:opacity-80"
          >
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-sm bg-[#1a1a1a]">
              {item.type === "text" ? (
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-2 text-[#9CA3AF]"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    <p className="text-xs font-light text-[#9CA3AF]">Text Document</p>
                  </div>
                </div>
              ) : item.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  unoptimized
                />
              ) : item.images && item.images[0] ? (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  unoptimized
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm font-light text-[#9CA3AF]">No preview</p>
                </div>
              )}
            </div>
            <h3 className="mb-1 text-lg font-normal text-[#F9F9F9]">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm font-light text-[#9CA3AF]">
                {item.description}
              </p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
