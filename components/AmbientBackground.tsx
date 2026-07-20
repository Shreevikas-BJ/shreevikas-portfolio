"use client";

import { useEffect, useRef } from "react";

const points = [
  { left: "8%", top: "14%", delay: "0s" },
  { left: "26%", top: "42%", delay: "1.4s" },
  { left: "76%", top: "24%", delay: "2.2s" },
  { left: "91%", top: "54%", delay: "0.8s" },
  { left: "61%", top: "72%", delay: "3.1s" },
  { left: "17%", top: "82%", delay: "1.9s" }
];

export function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!root || !precisePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div ref={rootRef} className="site-background" aria-hidden="true">
      <div className="site-grid" />
      <div className="pointer-field" />
      <div className="site-noise" />
          {points.map((point) => (
        <span
          key={`${point.left}-${point.top}`}
          className="ambient-point"
          style={{
            left: point.left,
            top: point.top,
            animationDelay: point.delay
          }}
        />
      ))}
    </div>
  );
}
