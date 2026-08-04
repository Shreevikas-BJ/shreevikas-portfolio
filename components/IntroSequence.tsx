"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

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

    const timer = window.setTimeout(closeIntro, reduceMotion ? 80 : 2050);
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
          aria-label="Opening Shreevikas Jagadish portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.025, filter: reduceMotion ? "none" : "blur(10px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="intro-overlay"
        >
          <button
            type="button"
            onClick={closeIntro}
            className="focus-ring absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl transition hover:bg-white/10 hover:text-white sm:right-8 sm:top-8"
          >
            Skip
          </button>

          <div className="intro-aurora" aria-hidden="true" />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-medium text-white/55"
            >
              Shreevikas Jagadish
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="intro-mark"
              aria-hidden="true"
            >
              SJ
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.46, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-3xl font-semibold text-white text-balance sm:text-5xl"
            >
              Intelligence, engineered.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82, duration: 0.48 }}
              className="mx-auto mt-4 max-w-xl text-sm text-white/55 sm:text-base"
            >
              AI systems. Reliable data. Production impact.
            </motion.p>

            <div className="mx-auto mt-9 h-px max-w-sm overflow-hidden bg-white/10">
              <motion.div
                className="h-full origin-left bg-white"
                initial={{ scaleX: reduceMotion ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
