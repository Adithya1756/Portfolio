import type { Metadata } from "next";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SITE } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Adithya DS for roles, projects, or collaborations.",
};

const CONTACT_LINKS = [
  { icon: FiMail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: FiPhone, label: SITE.phone, href: `tel:${SITE.phone.replace(/\s+/g, "")}` },
  { icon: FiMapPin, label: SITE.location, href: undefined },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, label: "GitHub", href: SITE.social.github },
  { icon: FiLinkedin, label: "LinkedIn", href: SITE.social.linkedin },
  { icon: SiLeetcode, label: "LeetCode", href: SITE.social.leetcode },
];

export default function ContactPage() {
  return (
    <div className="container-content pb-28">
      <SectionHeading
        eyebrow="Contact"
        title="Say hello, or pitch me the hard problem."
        description="Open to full-time roles, internships, and interesting collaborations — reply time is usually under a day."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <div className="space-y-8">
            <div className="card-surface p-6 md:p-8">
              <p className="eyebrow">Reach me directly</p>
              <ul className="mt-5 space-y-4">
                {CONTACT_LINKS.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-ink">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <item.icon className="h-4 w-4" />
                    </span>
                    {item.href ? (
                      <a href={item.href} data-cursor="hover" className="hover:text-accent">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-6 md:p-8">
              <p className="eyebrow">Find me elsewhere</p>
              <ul className="mt-5 space-y-4">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="flex items-center gap-3 text-sm text-ink hover:text-accent"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <item.icon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="card-surface p-6 md:p-8">
            <p className="eyebrow">Send a message</p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
