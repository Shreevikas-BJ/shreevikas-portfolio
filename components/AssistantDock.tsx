"use client";

import dynamic from "next/dynamic";
import { Pause, Play } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { RobotCompanion } from "@/components/RobotCompanion";
import { useMotionPreferences } from "@/components/MotionPreferences";

const Chatbot = dynamic(() => import("@/components/Chatbot").then((module) => module.Chatbot), {
  ssr: false,
  loading: () => <p className="assistant-loading" role="status">Opening assistant...</p>
});

export function AssistantDock() {
  const { paused, reducedMotion, togglePaused } = useMotionPreferences();
  const [open, setOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    trigger.current?.focus();
  }, []);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="assistant-launcher"
        aria-expanded={open}
        aria-controls="portfolio-assistant"
        aria-haspopup="dialog"
        onClick={() => {
          setInitialized(true);
          setOpen((previous) => !previous);
        }}
      >
        <RobotCompanion />
        <span className="assistant-board"><span className="assistant-grip assistant-grip-left" /><span className="assistant-grip assistant-grip-right" />I&apos;m Shreevikas&apos;s assistant</span>
      </button>
      {initialized ? <Chatbot open={open} onClose={close} /> : null}
      {!reducedMotion ? (
        <button type="button" className="portfolio-motion-control" data-motion-control onClick={togglePaused} aria-label={paused ? "Resume animations" : "Pause animations"} aria-pressed={paused} title={paused ? "Resume animations" : "Pause animations"}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      ) : null}
    </>
  );
}
