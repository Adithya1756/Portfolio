"use client";

import { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "a";
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  as = "button",
  target,
  rel,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || disabled) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  if (as === "a" && href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn("inline-block will-change-transform", className)}
        data-cursor="hover"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block will-change-transform", className)}
      data-cursor="hover"
    >
      {children}
    </button>
  );
}
