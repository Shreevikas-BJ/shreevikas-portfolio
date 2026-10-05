"use client";

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import { RobotCompanion } from "@/components/RobotCompanion";

const Chatbot = dynamic(() => import("@/components/Chatbot").then((module) => module.Chatbot), {
  ssr: false,
  loading: () => <p className="assistant-loading" role="status">Opening assistant...</p>
});

export function AssistantDock() {
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
    </>
  );
}
