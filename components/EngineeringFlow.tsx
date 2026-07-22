"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CloudCog,
  Database,
  Gauge,
  ServerCog,
  Sparkles,
  Workflow
} from "lucide-react";
import { useEffect, useState } from "react";

const stages = [
  { stage: "Source", title: "Data", tech: "SQL / S3", icon: Database },
  { stage: "Process", title: "PySpark", tech: "Features", icon: Workflow },
  { stage: "Model", title: "ML Systems", tech: "XGBoost / PyTorch", icon: BrainCircuit },
  { stage: "Evaluate", title: "Trust Layer", tech: "RAG / Agents", icon: Sparkles },
  { stage: "Deploy", title: "Serving", tech: "MLflow / FastAPI", icon: ServerCog },
  { stage: "Monitor", title: "Cloud", tech: "Drift / Quality", icon: CloudCog }
];

const focusStates = [
  { label: "Forecasting", value: "prediction pipeline healthy", metric: "24% accuracy gain" },
  { label: "Scientific AI", value: "surrogate inference ready", metric: "PhysicsNeMo + FNO" },
  { label: "RAG evaluation", value: "grounding checks active", metric: "citations + refusal" }
];

export function EngineeringFlow() {
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const stageTimer = window.setInterval(
      () => setActiveStage((current) => (current + 1) % stages.length),
      1450
    );
    const focusTimer = window.setInterval(
      () => setFocusIndex((current) => (current + 1) % focusStates.length),
      4200
    );
    return () => {
      window.clearInterval(stageTimer);
      window.clearInterval(focusTimer);
    };
  }, [reduceMotion]);

  const focus = focusStates[focusIndex];

  return (
    <figure className="engineering-canvas" aria-label="Production AI system lifecycle visualization">
      <div className="relative z-10 flex items-start justify-between gap-4 border-b border-border/80 px-5 py-4">
        <div className="min-w-0">
          <p className="mono-label">System architecture</p>
          <p className="mt-1 text-sm font-semibold">Production intelligence flow</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 font-mono text-[0.68rem] font-semibold text-success">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          SYSTEM ONLINE
        </div>
      </div>

      <div className="relative z-10 p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.stage} className="contents">
                <div className="flow-node" data-active={activeStage === index}>
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="box-heading mt-3 font-mono text-[0.62rem] font-semibold uppercase text-muted-foreground">
                    {item.stage}
                  </p>
                  <p className="box-heading mt-1 text-sm font-semibold">{item.title}</p>
                  <p className="box-heading mt-1 font-mono text-[0.65rem] text-muted-foreground">{item.tech}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-[1.15fr_0.85fr] lg:grid-cols-1 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-lg border border-border/80 bg-background/50 p-5">
            <div className="scan-beam pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="mono-label">Live focus</p>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={focus.label}
                      initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1 text-base font-semibold"
                    >
                      {focus.label}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              <Activity className="h-5 w-5 text-success" />
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={focus.value}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                className="relative mt-5"
              >
                <p className="font-mono text-xs text-muted-foreground">{focus.value}</p>
                <p className="mt-2 font-mono text-sm font-semibold text-primary">{focus.metric}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-5 space-y-2" aria-hidden="true">
              {[84, 62, 91].map((width, index) => (
                <div key={width} className="h-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="signal-bar h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${width}%`, animationDelay: `${index * 340}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border/80 bg-background/50 p-5">
            <p className="mono-label">Scientific compute</p>
            <div className="mt-4 space-y-3">
              {["PhysicsNeMo", "Fourier Neural Operators", "CUDA + TensorRT"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-primary/25 bg-primary/10 font-mono text-[0.62rem] text-primary">
                    0{index + 1}
                  </span>
                  <span className="box-heading min-w-0 text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 font-mono text-[0.66rem] text-muted-foreground">
          <span>DATA -&gt; MODEL -&gt; DECISION</span>
          <span className="text-success">MONITORING ACTIVE</span>
        </div>
      </div>
    </figure>
  );
}
