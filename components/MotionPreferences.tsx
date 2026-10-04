"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type MotionPreferences = {
  enabled: boolean;
  paused: boolean;
  reducedMotion: boolean;
  togglePaused: () => void;
};

const MotionContext = createContext<MotionPreferences | null>(null);

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const value = useMemo(() => ({
    enabled: !paused && !reducedMotion,
    paused,
    reducedMotion,
    togglePaused: () => setPaused((previous) => !previous)
  }), [paused, reducedMotion]);

  return (
    <MotionContext.Provider value={value}>
      <div className="portfolio-motion" data-motion-paused={!value.enabled}>
        {children}
      </div>
    </MotionContext.Provider>
  );
}

export function useMotionPreferences() {
  const value = useContext(MotionContext);
  if (!value) throw new Error("Motion preferences require their provider.");
  return value;
}
