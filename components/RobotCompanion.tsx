"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";
import { useMotionPreferences } from "@/components/MotionPreferences";
import { createRobotMotion, greetRobot, requestRobotRepair, stepRobotMotion, type RobotMotion } from "@/lib/robotMotion";

function RobotIllustration() {
  return (
    <svg className="robot-sprite" viewBox="0 0 120 160" fill="none" focusable="false">
      <ellipse className="robot-shadow" cx="72" cy="149" rx="28" ry="3" />
      <g className="robot-run-trail"><path d="M12 112 H30 M8 122 H24 M14 133 H31" /></g>
      <g className="robot-repair-network">
        <path d="M8 60 L28 68 L12 88 L34 96 M8 60 L12 88 M28 68 L34 96" />
        {[ [8, 60], [28, 68], [12, 88], [34, 96] ].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)}
      </g>
      <g className="robot-leg robot-leg-left">
        <path d="M64 111 V130 L58 142" /><rect x="49" y="139" width="20" height="8" rx="3" />
        <circle cx="64" cy="129" r="4" />
      </g>
      <g className="robot-leg robot-leg-right">
        <path d="M82 111 V130 L89 142" /><rect x="79" y="139" width="20" height="8" rx="3" />
        <circle cx="82" cy="129" r="4" />
      </g>
      <g className="robot-chassis">
        <path className="robot-antenna" d="M74 33 V20" /><rect className="robot-led" x="71" y="16" width="6" height="6" rx="2" />
        <rect className="robot-shell" x="49" y="33" width="48" height="35" rx="10" />
        <rect className="robot-visor" x="56" y="42" width="34" height="16" rx="6" />
        <g className="robot-eyes"><path d="M63 48 V52 M82 48 V52" /></g>
        <path className="robot-mouth" d="M68 61 H79" />
        <path className="robot-neck" d="M68 68 V76 M79 68 V76" />
        <g className="robot-torso">
          <rect className="robot-shell" x="52" y="75" width="42" height="40" rx="9" />
          <rect className="robot-core" x="65" y="87" width="16" height="12" rx="3" />
          <path className="robot-panel" d="M64 105 H82" />
        </g>
        <g className="robot-arm robot-arm-left">
          <path d="M54 82 L42 96 L38 108" /><circle cx="42" cy="96" r="4" /><rect x="32" y="105" width="11" height="10" rx="3" />
          <g className="robot-welder"><path d="M35 109 L19 101" /><path className="robot-sparks" d="M18 100 L8 96 M18 100 L15 89 M18 100 L9 107 M18 100 L22 90" /></g>
          <g className="robot-wiper"><path d="M35 110 L21 113" /><rect x="8" y="109" width="18" height="9" rx="2" /></g>
        </g>
        <g className="robot-arm robot-arm-right">
          <path d="M93 82 L105 97 L106 108" /><circle cx="105" cy="97" r="4" /><rect x="100" y="105" width="11" height="10" rx="3" />
        </g>
      </g>
      <g className="robot-breath"><path d="M99 59 Q108 52 113 57 M100 66 Q109 63 114 67" /></g>
    </svg>
  );
}

export function RobotCompanion() {
  const { enabled, paused, reducedMotion, togglePaused } = useMotionPreferences();
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const motion = useRef<RobotMotion | null>(null);
  const repairHeading = useRef<HTMLElement | null>(null);
  const queuedRoute = useRef(false);
  const wakeForRoute = useRef<(() => void) | null>(null);
  const suspendedAt = useRef<number | null>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || !enabled) return;
    if (suspendedAt.current !== null && motion.current?.until) motion.current.until += performance.now() - suspendedAt.current;
    suspendedAt.current = null;
    let frameId = 0;
    let lastFrame = 0;
    let lastScroll = performance.now();
    let lastScrollY = scrollY;
    let targetY = 136;
    let repairNotBefore = 0;
    let hiddenAt: number | null = document.hidden ? performance.now() : null;
    let cleaningHeading: HTMLElement | null = null;

    const clearCleaning = () => {
      cleaningHeading?.classList.remove("robot-clean-target");
      cleaningHeading?.style.removeProperty("--clean-distance");
      cleaningHeading = null;
    };
    const updateTarget = () => {
      const minimum = Math.min(136, innerHeight * 0.28);
      const maximum = Math.max(minimum, innerHeight - 164);
      const pageTravel = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      const progress = Math.max(0, Math.min(1, scrollY / pageTravel));
      targetY = minimum + (maximum - minimum) * progress;
      if (!motion.current) motion.current = createRobotMotion(minimum);
      if (motion.current.pendingRepair && repairHeading.current?.isConnected) {
        targetY = Math.max(32, Math.min(maximum, repairHeading.current.getBoundingClientRect().bottom - 40));
      }
      motion.current.y = Math.max(32, Math.min(maximum, motion.current.y));
    };
    const paint = (state: RobotMotion) => {
      element.style.transform = `translate3d(0, ${state.y.toFixed(2)}px, 0)`;
      element.dataset.mode = state.mode;
      element.dataset.direction = state.direction;
      if (state.mode === "wipe" && repairHeading.current?.isConnected) {
        if (cleaningHeading !== repairHeading.current) {
          clearCleaning();
          cleaningHeading = repairHeading.current;
          cleaningHeading.style.setProperty("--clean-distance", `${Math.max(0, cleaningHeading.clientWidth - 36)}px`);
          cleaningHeading.classList.add("robot-clean-target");
        }
      } else {
        clearCleaning();
      }
    };
    const frame = (now: number) => {
      frameId = 0;
      if (document.hidden || !motion.current) return;
      const seconds = lastFrame ? Math.min(0.05, (now - lastFrame) / 1000) : 0;
      lastFrame = now;
      const repairReady = !queuedRoute.current && now >= repairNotBefore && now - lastScroll >= 180;
      motion.current = stepRobotMotion(motion.current, targetY, now, seconds, repairReady);
      paint(motion.current);
      if (motion.current.mode !== "idle" || motion.current.pendingRepair || Math.abs(targetY - motion.current.y) > 1) frameId = requestAnimationFrame(frame);
    };
    const wake = () => {
      if (!frameId && !document.hidden) {
        lastFrame = 0;
        frameId = requestAnimationFrame(frame);
      }
    };
    const onScroll = () => {
      const now = performance.now();
      const speed = Math.abs(scrollY - lastScrollY) * 1000 / Math.max(16, now - lastScroll);
      lastScroll = now;
      lastScrollY = scrollY;
      updateTarget();
      if (motion.current && speed > 1400) {
        motion.current.urgent = true;
        if (motion.current.mode === "breathe" && Math.abs(targetY - motion.current.y) > 40) motion.current.until = 0;
      }
      wake();
    };
    const onResize = () => { updateTarget(); wake(); };
    const onVisibility = () => {
      element.dataset.sleeping = String(document.hidden);
      if (document.hidden) {
        hiddenAt ??= performance.now();
        cancelAnimationFrame(frameId);
        frameId = 0;
      } else {
        if (hiddenAt !== null && motion.current?.until) motion.current.until += performance.now() - hiddenAt;
        hiddenAt = null;
        lastScroll = performance.now();
        lastScrollY = scrollY;
        updateTarget();
        wake();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (event.target.closest("[data-motion-control], input, textarea, select, [contenteditable]")) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      const url = anchor ? new URL(anchor.href, location.href) : null;
      updateTarget();
      if (!motion.current) return;
      clearCleaning();
      if (url && url.origin === location.origin && anchor?.target !== "_blank" && (url.hash || url.pathname !== location.pathname)) {
        const destination = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
        repairHeading.current = destination?.querySelector<HTMLElement>("h1,h2,h3") ?? null;
        queuedRoute.current = url.pathname !== location.pathname;
        motion.current = requestRobotRepair(motion.current);
        repairNotBefore = performance.now() + 250;
      } else {
        repairHeading.current = null;
        queuedRoute.current = false;
        motion.current = greetRobot(motion.current, performance.now());
      }
      updateTarget();
      wake();
    };

    // Position is a fixed-rate follower; scroll velocity only selects a pace.
    updateTarget();
    paint(motion.current!);
    element.dataset.sleeping = String(document.hidden);
    wakeForRoute.current = () => {
      if (!queuedRoute.current || !motion.current) return;
      const destination = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      repairHeading.current = destination?.querySelector<HTMLElement>("h1,h2,h3") ?? document.querySelector<HTMLElement>("main h1");
      queuedRoute.current = false;
      motion.current = requestRobotRepair(motion.current);
      repairNotBefore = performance.now() + 250;
      updateTarget();
      wake();
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", onVisibility);
    wake();
    return () => {
      suspendedAt.current = performance.now();
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
      clearCleaning();
      wakeForRoute.current = null;
    };
  }, [enabled]);

  useEffect(() => { wakeForRoute.current?.(); }, [pathname]);

  return (
    <div className="robot-companion" data-ready={!reducedMotion}>
      <div ref={root} className="robot-position" data-mode="idle" data-direction="down" aria-hidden="true">
        <RobotIllustration />
      </div>
      {!reducedMotion ? (
        <button
          type="button"
          className="portfolio-motion-control"
          data-motion-control
          onClick={togglePaused}
          aria-label={paused ? "Resume animations" : "Pause animations"}
          aria-pressed={paused}
          title={paused ? "Resume animations" : "Pause animations"}
        >
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      ) : null}
    </div>
  );
}
