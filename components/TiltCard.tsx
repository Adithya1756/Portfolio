"use client";

import { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function TiltCard({ children, className, strength = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(el, {
      rotateX: -py * strength,
      rotateY: px * strength,
      transformPerspective: 800,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("will-change-transform [transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
}
