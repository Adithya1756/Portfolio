import type { Metadata } from "next";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or preview the resume of Adithya DS.",
};

export default function ResumePage() {
  return (
    <div className="container-content pb-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Resume"
          title="One page, everything that matters."
          description="Education, experience, and projects — condensed. Prefer the PDF? Grab it below."
        />
        <ScrollReveal delay={0.1} className="flex flex-wrap gap-3">
          <MagneticButton
            as="a"
            href="/Adithya_DS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download PDF
            <FiDownload />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/Adithya_DS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open in new tab
            <FiExternalLink />
          </MagneticButton>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="card-surface mt-14 overflow-hidden">
          <object
            data="/Adithya_DS_Resume.pdf"
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Adithya DS resume preview"
          >
            <div className="flex h-[50vh] flex-col items-center justify-center gap-4 p-10 text-center">
              <p className="text-sm text-muted">
                Your browser can&apos;t preview PDFs inline. Use the button above to open it instead.
              </p>
            </div>
          </object>
        </div>
      </ScrollReveal>
    </div>
  );
}
