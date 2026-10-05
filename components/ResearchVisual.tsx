"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMotionPreferences } from "@/components/MotionPreferences";

const ResearchScene = dynamic(() => import("@/components/ResearchScene"), { ssr: false });

export function ResearchVisual() {
  const container = useRef<HTMLDivElement>(null);
  const { enabled, reducedMotion } = useMotionPreferences();
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onError = useCallback(() => setFailed(true), []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "80px" });
    observer.observe(element);
    const visibility = () => setActiveTab(!document.hidden);
    visibility();
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  useEffect(() => {
    if (!visible || !enabled || loaded || failed) return;
    const timeout = window.setTimeout(() => setLoaded(true), 150);
    return () => window.clearTimeout(timeout);
  }, [visible, enabled, loaded, failed]);

  return (
    <div ref={container} className="research-visual" data-ready={ready && !failed && !reducedMotion}>
      <div className="research-chip-poster" aria-hidden="true">
        <Image src="/images/nvidia-logo.svg" alt="" width={256} height={144} />
      </div>
      {loaded && !failed && !reducedMotion ? <ResearchScene animate={visible && activeTab && enabled} onReady={onReady} onError={onError} /> : null}
      <p className="research-visual-caption">NVIDIA PhysicsNeMo <span>Physics-informed learning</span></p>
    </div>
  );
}
