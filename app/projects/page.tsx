import type { Metadata } from "next";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured projects by Adithya DS — ERP systems, DeFi, and full-stack web apps.",
};

export default function ProjectsPage() {
  return (
    <div className="container-content pb-28">
      <SectionHeading
        eyebrow="Projects"
        title="Selected systems, from spec to production."
        description="Each project below solves a real operational problem — for a manufacturing business, a lending market, or a storefront."
      />

      <div className="mt-16 space-y-24">
        {PROJECTS.map((project, i) => (
          <ScrollReveal key={project.slug} delay={0.05}>
            <article id={project.slug} className="scroll-mt-32">
              <div className="node-divider">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-4 font-display text-3xl tracking-tight text-ink md:text-4xl">
                {project.title}
              </h3>

              <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-4">
                  {project.description.map((para, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-muted md:text-lg">
                      {para}
                    </p>
                  ))}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-sand/50 px-3 py-1 font-mono text-[11px] text-ink/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="flex flex-wrap gap-4 pt-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="btn-secondary"
                        >
                          <FiGithub />
                          {link.label}
                          <FiArrowUpRight className="ml-0.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* ---------------- Features grid ---------------- */}
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <TiltCard key={feature.label} strength={5}>
                      <div className="card-surface h-full p-4">
                        <p className="font-display text-sm tracking-tight text-ink">{feature.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{feature.detail}</p>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>

              {/* ---------------- Architecture diagram cards ---------------- */}
              {project.architecture && (
                <div className="mt-10">
                  <p className="eyebrow">System architecture</p>
                  <div className="relative mt-6 grid gap-3 md:grid-cols-4">
                    {project.architecture.map((layer, idx) => (
                      <div key={layer.title} className="relative">
                        <div className="card-surface flex h-full flex-col gap-2 p-5">
                          <span className="font-mono text-[11px] text-muted">
                            Layer {idx + 1}
                          </span>
                          <h4 className="font-display text-base tracking-tight text-ink">
                            {layer.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-muted">{layer.detail}</p>
                        </div>
                        {idx < (project.architecture?.length ?? 0) - 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono text-muted/50 md:block"
                          >
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
