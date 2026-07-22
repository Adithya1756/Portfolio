"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[500] flex justify-center px-4 pt-4 md:pt-6">
      <nav className="flex w-full max-w-content items-center justify-between rounded-full border border-border bg-paper/80 px-3 py-2 backdrop-blur-md md:px-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 hover:bg-sand/60 transition-colors"
          data-cursor="hover"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border">
            <Image src="/images/profile.jpg" alt={SITE.name} fill className="object-cover" sizes="36px" />
          </span>
          <span className="hidden font-display text-sm tracking-tight sm:inline">{SITE.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.slice(0, -1).map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="hover"
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
                    active ? "text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <MagneticButton
            as="a"
            href="/contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-paper md:inline-flex"
          >
            Contact
          </MagneticButton>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-4 bg-ink transition-transform",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-ink transition-transform",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-20 z-40 rounded-3xl border border-border bg-paper p-3 shadow-lg md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 font-mono text-sm uppercase tracking-wide",
                      pathname === link.href ? "bg-sand/60 text-ink" : "text-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
