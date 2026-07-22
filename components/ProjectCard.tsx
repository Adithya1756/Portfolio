import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/types";
import TiltCard from "./TiltCard";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <TiltCard className="h-full">
      <div className="card-surface group flex h-full flex-col justify-between p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(20,21,26,0.1)] md:p-8">
        <div>
          <div className="node-divider">
            <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
              {project.tag}
            </span>
          </div>
          <h3 className="mt-5 font-display text-2xl tracking-tight text-ink md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.summary}</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-sand/50 px-3 py-1 font-mono text-[11px] text-ink/70"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={`/projects#${project.slug}`}
            data-cursor="hover"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-ink underline decoration-border underline-offset-4 transition-colors group-hover:decoration-accent"
          >
            View details
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}
