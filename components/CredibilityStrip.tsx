"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/data/portfolio";

function AnimatedMetric({
  value,
  prefix = "",
  suffix,
  decimals = 0,
  start
}: {
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

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
      setDisplay(Number((value * eased).toFixed(decimals)));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [decimals, reduceMotion, start, value]);

  return (
    <span className="text-4xl font-semibold text-foreground sm:text-[2.75rem]">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function CredibilityStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section aria-label="Selected career outcomes" className="border-y border-border/70 bg-surface/55">
      <div ref={sectionRef} className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 py-5 sm:px-8 md:grid-cols-5 lg:px-12">
        {heroStats.map((stat) => (
          <div key={stat.label} className="border-b border-border/70 px-2 py-7 even:border-l sm:px-4 md:border-b-0 md:border-l md:py-9 first:md:border-l-0">
            <AnimatedMetric
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              start={visible}
            />
            <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">{stat.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
