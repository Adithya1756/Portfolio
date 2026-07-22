import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SITE, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="container-content flex flex-col gap-10 py-16 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl tracking-tight">{SITE.name}</p>
          <p className="mt-3 text-sm text-muted">{SITE.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-cursor="hover"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-ink"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-cursor="hover"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-ink"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={SITE.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              data-cursor="hover"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-ink"
            >
              <SiLeetcode size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-content flex flex-col items-start justify-between gap-2 border-t border-border py-6 text-xs text-muted md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js, GSAP &amp; Three.js</p>
      </div>
    </footer>
  );
}
