"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, CloudCog, Database, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const introNodes = [
  { label: "Data", icon: Database },
  { label: "Model", icon: BrainCircuit },
  { label: "Evaluate", icon: ShieldCheck },
  { label: "Deploy", icon: CloudCog }
];

export function IntroSequence() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const previousOverflow = useRef("");

  const closeIntro = useCallback(() => {
    document.body.style.overflow = previousOverflow.current;
    setVisible(false);
  }, []);

  useEffect(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(closeIntro, reduceMotion ? 120 : 2300);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeIntro();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow.current;
    };
  }, [closeIntro, reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading Shreevikas Jagadish portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.42, ease: "easeOut" }}
          className="intro-overlay"
        >
          <div className="intro-grid" aria-hidden="true" />
          <button
            type="button"
            onClick={closeIntro}
            className="focus-ring absolute right-5 top-5 z-20 rounded-md border border-border bg-surface/80 px-3 py-2 font-mono text-[0.68rem] font-semibold uppercase text-muted-foreground transition hover:border-primary/50 hover:text-primary sm:right-8 sm:top-8"
          >
            Skip intro
          </button>

          <div className="relative z-10 mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-lg font-bold text-primary shadow-glow"
            >
              SJ
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.35 }}
              className="mt-7 font-mono text-[0.7rem] font-semibold uppercase text-primary"
              style={{ letterSpacing: "0.14em" }}
            >
              Initializing engineering portfolio
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-3xl font-semibold text-balance sm:text-4xl"
            >
              Shreevikas Jagadish
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.4 }}
              className="mt-3 text-sm text-muted-foreground sm:text-base"
            >
              AI / ML &middot; Data &middot; Scientific Computing
            </motion.p>

            <div className="mx-auto mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {introNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.56 + index * 0.11, duration: 0.32 }}
                    className="intro-node"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="box-heading text-sm font-semibold">{node.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mx-auto mt-9 h-1 max-w-2xl overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ scaleX: reduceMotion ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.55, delay: 0.5, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-3 font-mono text-[0.64rem] font-semibold text-success">
              SYSTEM READY
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
