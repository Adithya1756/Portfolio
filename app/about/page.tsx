import type { Metadata } from "next";
import Image from "next/image";
import { FiDownload, FiMapPin, FiMail } from "react-icons/fi";
import { SITE, JOURNEY, EDUCATION, STATS, RESPONSIBILITY } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, and journey of Adithya DS.",
};

export default function AboutPage() {
  return (
    <div className="container-content pb-28">
      <SectionHeading eyebrow="About" title="A builder first, a student of systems always." />

      {/* ---------------- Profile card ---------------- */}
      <div className="mt-14 grid gap-8 lg:grid-cols-[340px_1fr]">
        <ScrollReveal>
          <div className="card-surface sticky top-32 overflow-hidden p-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Adithya DS"
                fill
                sizes="340px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{SITE.name}</h3>
            <p className="text-sm text-muted">{SITE.role}</p>
            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted">
              <p className="flex items-center gap-2">
                <FiMapPin className="shrink-0 text-accent" /> {SITE.location}
              </p>
              <p className="flex items-center gap-2">
                <FiMail className="shrink-0 text-accent" /> {SITE.email}
              </p>
            </div>
            <MagneticButton
              as="a"
              href="/Adithya_DS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full justify-center"
            >
              Download Resume
              <FiDownload />
            </MagneticButton>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {/* ---------------- Intro ---------------- */}
          <ScrollReveal>
            <p className="text-lg leading-relaxed text-ink md:text-xl">{SITE.intro}</p>
          </ScrollReveal>

          {/* ---------------- Stats ---------------- */}
          <div className="grid grid-cols-2 gap-6 rounded-xl2 border border-border bg-card p-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <ScrollReveal key={stat.label}>
                <p className="font-display text-3xl tracking-tight text-ink">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 2 : 0} />
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* ---------------- Journey timeline ---------------- */}
          <div>
            <ScrollReveal>
              <p className="eyebrow">My journey</p>
            </ScrollReveal>
            <div className="mt-8 space-y-0">
              {JOURNEY.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="group relative flex gap-6 border-l border-border pb-10 pl-8 last:pb-0">
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-paper bg-accent" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-accent">{item.year}</p>
                      <h4 className="mt-1.5 font-display text-lg tracking-tight text-ink md:text-xl">
                        {item.title}
                      </h4>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.detail}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ---------------- Education ---------------- */}
          <div>
            <ScrollReveal>
              <p className="eyebrow">Education</p>
            </ScrollReveal>
            <div className="mt-8 divide-y divide-border rounded-xl2 border border-border bg-card">
              {EDUCATION.map((edu, i) => (
                <ScrollReveal key={edu.institution} delay={i * 0.05}>
                  <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-display text-lg tracking-tight text-ink">{edu.institution}</h4>
                      <p className="mt-1 text-sm text-muted">{edu.detail}</p>
                    </div>
                    <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                      <span className="font-mono text-xs text-muted">{edu.period}</span>
                      <span className="rounded-full bg-sage-soft px-3 py-1 font-mono text-xs text-sage">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ---------------- Responsibility ---------------- */}
          <ScrollReveal>
            <div className="card-surface p-6 md:p-8">
              <p className="eyebrow">{RESPONSIBILITY.period}</p>
              <h4 className="mt-2 font-display text-xl tracking-tight text-ink">
                {RESPONSIBILITY.role}
              </h4>
              <ul className="mt-4 space-y-2">
                {RESPONSIBILITY.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
