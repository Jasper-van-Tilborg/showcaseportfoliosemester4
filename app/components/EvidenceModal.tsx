"use client";

import { useEffect } from "react";
import Image from "next/image";
import { EvidenceItem } from "../data/projects";

interface EvidenceModalProps {
  evidence: EvidenceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EvidenceModal({
  evidence,
  isOpen,
  onClose,
}: EvidenceModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !evidence) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-sm bg-[#0a0a0a] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#F9F9F9] transition-opacity hover:opacity-70"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="mb-6 text-3xl font-light tracking-tight text-[#F9F9F9]">
          {evidence.title}
        </h2>

        {/* Content based on type */}
        {evidence.type === "text" && evidence.content && (
          <div className="prose prose-invert max-w-none">
            <div className="text-base font-light leading-relaxed text-[#F9F9F9] whitespace-pre-line">
              {evidence.content.split("\n\n").map((paragraph, index) => {
                // Check if paragraph starts with a heading (bold text)
                const isHeading = /^[A-Z][a-z]+(\s+[A-Z][a-z]+)*$/.test(
                  paragraph.split("\n")[0]
                );
                const firstLine = paragraph.split("\n")[0];
                const restOfParagraph = paragraph.split("\n").slice(1).join("\n");

                return (
                  <div key={index} className="mb-6">
                    {isHeading && (
                      <h3 className="mb-2 text-xl font-normal text-[#F9F9F9]">
                        {firstLine}
                      </h3>
                    )}
                    <p className="text-base font-light leading-relaxed text-[#F9F9F9]">
                      {isHeading ? restOfParagraph : paragraph}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {evidence.type === "image" && evidence.images && evidence.images[0] && (
          <div className="relative w-full">
            <Image
              src={evidence.images[0]}
              alt={evidence.title}
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
        )}

        {evidence.type === "images" && evidence.images && (
          <div className="space-y-6">
            {evidence.images.map((imageUrl, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={imageUrl}
                  alt={`${evidence.title} - Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        {evidence.description && (
          <p className="mt-6 text-sm font-light text-[#9CA3AF]">
            {evidence.description}
          </p>
        )}
      </div>
    </div>
  );
}
