"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMotionPreferences } from "@/components/MotionPreferences";

const BrainScene = dynamic(() => import("@/components/BrainScene"), { ssr: false });

export function TransformerBackground() {
  const root = useRef<HTMLDivElement>(null);
  const { enabled, reducedMotion } = useMotionPreferences();
  const [visible, setVisible] = useState(false);
  const [loadScene, setLoadScene] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const interacted = useRef(false);
  const onSceneReady = useCallback(() => setSceneReady(true), []);
  const onSceneError = useCallback(() => setSceneReady(false), []);

  useEffect(() => {
    if (!visible || reducedMotion || !enabled || loadScene) return;
    let idleCallback: number | undefined;
    let delay: number | undefined;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const constrained = matchMedia("(max-width: 699px), (pointer: coarse)").matches || connection?.saveData || /^(slow-)?2g$/.test(connection?.effectiveType ?? "");
    const events = ["pointerdown", "keydown", "scroll"] as const;
    const removeListeners = () => events.forEach((event) => window.removeEventListener(event, schedule));
    const schedule = () => {
      interacted.current = true;
      removeListeners();
      delay = window.setTimeout(() => {
        if ("requestIdleCallback" in window) idleCallback = window.requestIdleCallback(() => setLoadScene(true), { timeout: 1500 });
        else setLoadScene(true);
      }, constrained ? 180 : 1000);
    };
    // The still render is immediate; nonessential WebGL waits for idle/interaction.
    if (constrained && !interacted.current) events.forEach((event) => window.addEventListener(event, schedule, { passive: true }));
    else schedule();
    return () => {
      window.clearTimeout(delay);
      removeListeners();
      if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
    };
  }, [visible, reducedMotion, enabled, loadScene]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let inView = false;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.1;
      updateVisibility();
    }, { threshold: 0.1 });
    observer.observe(element);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return (
    <div ref={root} className="transformer-background" data-running={visible && enabled && sceneReady} data-scene-ready={sceneReady && !reducedMotion}>
      {loadScene && !reducedMotion ? <BrainScene animate={visible && enabled} onReady={onSceneReady} onError={onSceneError} /> : null}
      <div className="transformer-visual" aria-hidden="true">
        <Image src="/images/brain-circuit-hero.webp" alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1280px) 64vw, 820px" quality={80} loading="eager" className="brain-poster" />
      </div>
    </div>
  );
}
