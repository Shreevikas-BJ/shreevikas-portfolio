"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type MotionPreferences = {
  enabled: boolean;
  reducedMotion: boolean;
};

const MotionContext = createContext<MotionPreferences | null>(null);

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const value = useMemo(() => ({
    enabled: !reducedMotion,
    reducedMotion
  }), [reducedMotion]);

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
