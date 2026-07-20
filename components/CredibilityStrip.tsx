"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/data/portfolio";

function AnimatedMetric({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const startedAt = performance.now();
    const duration = 850;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduceMotion, start, value]);

  return (
    <span className="font-mono text-3xl font-semibold text-foreground sm:text-[2rem]">
      {display}
      {suffix}
    </span>
  );
}

export function CredibilityStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section aria-label="Selected career outcomes" className="border-y border-border/70 bg-surface/45">
      <div ref={sectionRef} className="mx-auto grid max-w-[1320px] divide-y divide-border/70 px-5 sm:px-8 md:grid-cols-5 md:divide-x md:divide-y-0 lg:px-12">
        {heroStats.map((stat) => (
          <div key={stat.label} className="py-7 md:px-5 md:py-8 first:md:pl-0 last:md:pr-0">
            <AnimatedMetric value={stat.value} suffix={stat.suffix} start={visible} />
            <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{stat.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
