import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <ScrollReveal>
        <p className="eyebrow">{eyebrow}</p>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <h2 className="section-heading mt-3">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
