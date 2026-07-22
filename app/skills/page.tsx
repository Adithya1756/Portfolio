import type { Metadata } from "next";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiLink,
  FiLayers,
} from "react-icons/fi";
import { SKILLS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools used by Adithya DS.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  cloud: FiCloud,
  cpu: FiCpu,
  link: FiLink,
  layers: FiLayers,
};

export default function SkillsPage() {
  return (
    <div className="container-content pb-28">
      <SectionHeading
        eyebrow="Skills"
        title="The stack behind the systems."
        description="A working toolkit spanning full-stack web, mobile, infrastructure, AI, and blockchain — picked up by shipping, not just studying."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const Icon = ICONS[group.icon] ?? FiCode;
          return (
            <ScrollReveal key={group.title} delay={(i % 3) * 0.06}>
              <TiltCard strength={6}>
                <div className="card-surface h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg tracking-tight text-ink">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-sand/40 px-3 py-1.5 text-xs text-ink/80 transition-colors hover:border-accent/40 hover:bg-accent-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
