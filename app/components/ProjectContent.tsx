"use client";

import { EvidenceItem } from "../data/projects";

interface ProjectContentProps {
  content: string;
  evidence: EvidenceItem[];
  onEvidenceClick: (evidenceId: string) => void;
}

export default function ProjectContent({
  content,
  evidence,
  onEvidenceClick,
}: ProjectContentProps) {
  // Create a map of evidence titles to IDs for quick lookup
  const evidenceMap = new Map<string, string>();
  evidence.forEach((item) => {
    evidenceMap.set(item.title.toLowerCase(), item.id);
  });

  // Parse content and replace [link: Evidence Name] with clickable elements
  const parseContent = (text: string) => {
    const linkPattern = /\[link:\s*([^\]]+)\]/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Find the evidence item
      const evidenceTitle = match[1].trim();
      const evidenceId = evidenceMap.get(evidenceTitle.toLowerCase());

      if (evidenceId) {
        // Create clickable link
        parts.push(
          <button
            key={match.index}
            onClick={() => onEvidenceClick(evidenceId)}
            className="text-[#9CA3AF] underline transition-opacity hover:opacity-70"
          >
            {evidenceTitle}
          </button>
        );
      } else {
        // If evidence not found, just show the text
        parts.push(match[0]);
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  const parsedContent = parseContent(content);

  return (
    <div className="text-lg font-light leading-relaxed text-[#F9F9F9] whitespace-pre-line">
      {parsedContent.map((part, index) => (
        <span key={index}>{part}</span>
      ))}
    </div>
  );
}
