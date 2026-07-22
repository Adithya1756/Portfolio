import Link from "next/link";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { SITE, PROJECTS, STATS } from "@/lib/data";
import HeroHeadline from "@/components/HeroHeadline";
import ParallaxPhoto from "@/components/ParallaxPhoto";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Counter from "@/components/Counter";

const MARQUEE_ITEMS = [
  "React", "Next.js", "React Native", "Node.js", "FastAPI", "PostgreSQL",
  "MongoDB", "Docker", "AWS", "Solidity", "RAG Pipelines", "Vector DBs",
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="container-content flex flex-col items-center gap-10 pb-20 pt-6 text-center md:pb-28">
        <ScrollReveal y={12}>
          <p className="eyebrow">// final-year cse · vit chennai · open to opportunities</p>
        </ScrollReveal>

        <HeroHeadline text="Adithya DS" />

        <ParallaxPhoto />

        <ScrollReveal delay={0.05} className="max-w-xl">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            {SITE.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton as="a" href="/projects" className="btn-primary">
            View Projects
            <FiArrowUpRight />
          </MagneticButton>
          <MagneticButton as="a" href="/Adithya_DS_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Download Resume
            <FiDownload />
          </MagneticButton>
        </ScrollReveal>
      </section>

      {/* ---------------- Marquee strip ---------------- */}
      <section className="border-y border-border bg-card py-6">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-widest text-muted">
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden="true">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-widest text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Featured work ---------------- */}
      <section className="container-content py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems I've designed, shipped, and maintained."
            description="From an operations-critical manufacturing ERP to a decentralized lending protocol — a look at what I build."
          />
          <ScrollReveal delay={0.15}>
            <Link
              href="/projects"
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
            >
              All projects
              <FiArrowUpRight />
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="border-y border-border bg-card">
        <div className="container-content grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
          {STATS.map((stat) => (
            <ScrollReveal key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl tracking-tight text-ink md:text-5xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                />
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="container-content py-24 text-center md:py-32">
        <ScrollReveal>
          <p className="eyebrow justify-center">Let's build something</p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="section-heading mx-auto mt-3 max-w-2xl">
            Have a role, a project, or an idea worth shipping?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-8">
          <MagneticButton as="a" href="/contact" className="btn-primary">
            Get in touch
            <FiArrowUpRight />
          </MagneticButton>
        </ScrollReveal>
      </section>
    </>
  );
}
