import type { Metadata } from "next";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { EXPERIENCE } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and internship experience of Adithya DS.",
};

export default function ExperiencePage() {
  return (
    <div className="container-content pb-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've put the theory to work."
        description="Real teams, real deadlines, real users — the internships and roles that shaped how I build."
      />

      <div className="mt-16 space-y-8">
        {EXPERIENCE.map((job, i) => (
          <ScrollReveal key={job.company} delay={i * 0.08}>
            <TiltCard strength={3}>
              <div className="card-surface grid gap-8 p-7 md:grid-cols-[1fr_1.6fr] md:p-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight text-ink md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base text-muted">{job.company}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <FiMapPin className="text-accent" /> {job.location}
                  </p>
                  {job.link && (
                    <a
                      href={job.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
                    >
                      {job.link.label}
                      <FiArrowUpRight />
                    </a>
                  )}
                </div>

                <div>
                  <p className="text-base leading-relaxed text-ink">{job.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-sand/50 px-3 py-1 font-mono text-[11px] text-ink/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.1}>
          <div className="node-divider py-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              More on the way
            </span>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Actively looking for full-time and internship roles in software engineering, full-stack
            development, and AI infrastructure. Check the{" "}
            <a href="/about" className="underline decoration-border underline-offset-4">
              Linux Users Group
            </a>{" "}
            work on the About page for community leadership experience alongside this.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
