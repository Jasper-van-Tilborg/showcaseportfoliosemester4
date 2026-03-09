"use client";

import { useState } from "react";
import { EvidenceItem } from "../data/projects";
import ProjectContent from "./ProjectContent";
import EvidenceSection from "./EvidenceSection";
import EvidenceModal from "./EvidenceModal";

interface ProjectContentWrapperProps {
  content: string;
  evidence: EvidenceItem[];
}

export default function ProjectContentWrapper({
  content,
  evidence,
}: ProjectContentWrapperProps) {
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | null>(
    null
  );

  const selectedEvidence =
    evidence.find((item) => item.id === selectedEvidenceId) || null;

  const handleEvidenceClick = (evidenceId: string) => {
    setSelectedEvidenceId(evidenceId);
  };

  const handleCloseModal = () => {
    setSelectedEvidenceId(null);
  };

  return (
    <>
      {content && (
        <div className="mb-12">
          <ProjectContent
            content={content}
            evidence={evidence}
            onEvidenceClick={handleEvidenceClick}
          />
        </div>
      )}

      {evidence && evidence.length > 0 && (
        <EvidenceSection
          evidence={evidence}
          onEvidenceClick={handleEvidenceClick}
        />
      )}

      <EvidenceModal
        evidence={selectedEvidence}
        isOpen={selectedEvidenceId !== null}
        onClose={handleCloseModal}
      />
    </>
  );
}
