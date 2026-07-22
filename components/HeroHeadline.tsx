"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroHeadline({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const chars = el.querySelectorAll("[data-char]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.025,
          delay: 0.15,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <h1
      ref={containerRef}
      className="font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
      aria-label={text}
    >
      {text.split(" ").map((word, wIdx) => (
        <span key={wIdx} className="mr-[0.25em] inline-block overflow-hidden align-top last:mr-0">
          <span className="inline-block">
            {word.split("").map((char, cIdx) => (
              <span key={cIdx} data-char className="inline-block will-change-transform">
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}
