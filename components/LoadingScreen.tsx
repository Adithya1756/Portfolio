"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("intro-played")) {
      setDone(true);
      return;
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("intro-played", "1");
        setDone(true);
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) countRef.current.textContent = String(Math.floor(counter.val));
        if (barRef.current) barRef.current.style.width = `${counter.val}%`;
      },
    })
      .to(wrapRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "+=0.15");

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink text-paper"
    >
      <div className="flex items-baseline gap-2 font-display text-2xl">
        <span ref={countRef}>0</span>
        <span className="text-sm text-paper/50">%</span>
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-paper/50">
        Compiling portfolio
      </p>
      <div className="mt-6 h-px w-48 overflow-hidden bg-paper/15">
        <div ref={barRef} className="h-full w-0 bg-accent" />
      </div>
    </div>
  );
}
