"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ParallaxPhoto() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = wrapRef.current;
    const img = imgRef.current;
    if (!el || !img) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(img, {
      x: px * 22,
      y: py * 22,
      rotateX: -py * 6,
      rotateY: px * 6,
      duration: 0.8,
      ease: "power3.out",
      transformPerspective: 900,
    });
  };

  const handleLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    gsap.to(img, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent-soft via-sand to-sage-soft opacity-90 blur-2xl"
      />
      <div
        ref={imgRef}
        className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[0_20px_60px_rgba(20,21,26,0.12)] will-change-transform"
      >
        <Image
          src="/images/profile.jpg"
          alt="Portrait of Adithya DS"
          fill
          priority
          sizes="(min-width: 768px) 400px, 280px"
          className="object-cover"
        />
      </div>
      <span className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-border bg-paper px-4 py-2 font-mono text-xs shadow-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
        open to work
      </span>
    </div>
  );
}
