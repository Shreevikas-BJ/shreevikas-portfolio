import {
  Activity,
  ArrowRight,
  Check,
  CircleDollarSign,
  Database,
  FileCheck2,
  Layers3,
  Search,
  ShieldAlert,
  TriangleAlert
} from "lucide-react";
import type { Project } from "@/data/portfolio";

function VisualHeader({ label, status = "LIVE" }: { label: string; status?: string }) {
  return (
    <div className="relative z-10 flex items-center justify-between border-b border-border/80 px-4 py-3">
      <span className="font-mono text-[0.65rem] font-semibold uppercase text-muted-foreground">
        {label}
      </span>
      <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] font-semibold text-success">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        {status}
      </span>
    </div>
  );
}

function AgentShieldVisual() {
  const risks = [
    ["Prompt injection", "fail"],
    ["Privacy leakage", "review"],
    ["Unsafe tool use", "pass"],
    ["Hallucination", "review"],
    ["Policy risk", "pass"],
    ["Escalation", "pass"]
  ];

  return (
    <div className="project-visual">
      <VisualHeader label="Agent risk matrix" status="SCAN 06/06" />
      <div className="relative z-10 grid grid-cols-[0.72fr_1.28fr] gap-4 p-5">
        <div className="flex flex-col justify-between rounded-lg border border-error/25 bg-error/5 p-4">
          <ShieldAlert className="h-7 w-7 text-error" />
          <div>
            <p className="font-mono text-[0.64rem] text-muted-foreground">LAUNCH READINESS</p>
            <p className="mt-2 text-2xl font-semibold">Review</p>
            <p className="mt-1 text-xs text-error">2 findings need action</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {risks.map(([label, status]) => (
            <div key={label} className="rounded-md border border-border bg-background/70 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[0.7rem] font-medium leading-4 text-muted-foreground">{label}</span>
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    status === "fail"
                      ? "bg-error"
                      : status === "review"
                        ? "bg-warning"
                        : "bg-success"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinOpsVisual() {
  const bars = [42, 66, 49, 82, 58, 38];
  return (
    <div className="project-visual">
      <VisualHeader label="Cloud cost intelligence" status="READ ONLY" />
      <div className="relative z-10 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[0.64rem] text-muted-foreground">SAVINGS PIPELINE</p>
            <p className="mt-2 text-2xl font-semibold">15 findings</p>
          </div>
          <CircleDollarSign className="h-8 w-8 text-success" />
        </div>
        <div className="mt-6 flex h-24 items-end gap-2 border-b border-border pb-1">
          {bars.map((height, index) => (
            <div key={`${height}-${index}`} className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-sm bg-gradient-to-t from-primary/35 to-primary"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[0.6rem] text-muted-foreground">
          <span className="rounded-md border border-border bg-background/70 p-2">SEVERITY</span>
          <span className="rounded-md border border-border bg-background/70 p-2">OWNER</span>
          <span className="rounded-md border border-border bg-background/70 p-2">ACTION</span>
        </div>
      </div>
    </div>
  );
}

function RagVisual() {
  const pipeline = ["Query", "Jina", "pgvector", "Groq"];
  return (
    <div className="project-visual">
      <VisualHeader label="Grounded retrieval trace" status="CITED" />
      <div className="relative z-10 p-5">
        <div className="flex items-center gap-2">
          {pipeline.map((item, index) => (
            <div key={item} className="contents">
              <div className="min-w-0 flex-1 rounded-md border border-border bg-background/72 p-3 text-center">
                {index === 0 ? <Search className="mx-auto h-4 w-4 text-primary" /> : null}
                {index === 1 ? <Activity className="mx-auto h-4 w-4 text-primary" /> : null}
                {index === 2 ? <Database className="mx-auto h-4 w-4 text-primary" /> : null}
                {index === 3 ? <FileCheck2 className="mx-auto h-4 w-4 text-primary" /> : null}
                <p className="mt-2 truncate font-mono text-[0.6rem] font-semibold">{item}</p>
              </div>
              {index < pipeline.length - 1 ? (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-md border border-border bg-background/72 p-4">
          <div className="flex items-center justify-between font-mono text-[0.62rem]">
            <span className="text-muted-foreground">TOP-3 RETRIEVAL</span>
            <span className="text-success">0.82 MATCH</span>
          </div>
          <div className="mt-3 space-y-2">
            {[92, 74, 57].map((width) => (
              <div key={width} className="h-1 rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary/75" style={{ width: `${width}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MedallionVisual() {
  const layers = [
    { name: "BRONZE", width: "100%", color: "bg-warning/25 border-warning/35" },
    { name: "SILVER", width: "82%", color: "bg-muted border-border" },
    { name: "GOLD", width: "64%", color: "bg-accent/20 border-accent/40" }
  ];
  return (
    <div className="project-visual">
      <VisualHeader label="Lakehouse pipeline" status="GOVERNED" />
      <div className="relative z-10 p-5">
        <div className="flex items-center gap-3 font-mono text-[0.62rem] text-muted-foreground">
          <Database className="h-4 w-4 text-primary" />
          S3 INGESTION
          <ArrowRight className="h-3 w-3" />
          LAKEFLOW JOBS
        </div>
        <div className="mt-5 space-y-3">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className={`mx-auto flex h-12 items-center justify-between rounded-md border px-4 ${layer.color}`}
              style={{ width: layer.width }}
            >
              <Layers3 className="h-4 w-4" />
              <span className="font-mono text-[0.64rem] font-semibold">{layer.name}</span>
              <Check className="h-4 w-4 text-success" />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-[0.62rem] text-muted-foreground">
          UNITY CATALOG -&gt; ANALYTICS SERVING
        </p>
      </div>
    </div>
  );
}

function LineageVisual() {
  return (
    <div className="project-visual">
      <VisualHeader label="Transformation lineage" status="TESTS PASSING" />
      <div className="relative z-10 grid h-[calc(100%-45px)] grid-cols-[0.8fr_1fr_0.9fr] items-center gap-4 p-5">
        <div className="space-y-2">
          {["Bookings", "Hosts", "Listings"].map((item) => (
            <div key={item} className="rounded-md border border-border bg-background/72 p-2 text-center font-mono text-[0.6rem]">
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-md border border-primary/35 bg-primary/10 p-4 text-center">
          <Layers3 className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 font-mono text-[0.65rem] font-semibold">dbt</p>
          <p className="mt-1 text-[0.62rem] text-muted-foreground">Bronze / Silver / Gold</p>
        </div>
        <div className="space-y-2">
          {["Facts", "SCD2", "Analytics"].map((item) => (
            <div key={item} className="rounded-md border border-border bg-background/72 p-2 text-center font-mono text-[0.6rem]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ForecastVisual() {
  return (
    <div className="project-visual">
      <VisualHeader label="Demand forecast monitor" status="MODEL SERVING" />
      <div className="relative z-10 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[0.62rem] text-muted-foreground">FORECAST ACCURACY</p>
            <p className="mt-1 text-2xl font-semibold text-success">+21%</p>
          </div>
          <TriangleAlert className="h-6 w-6 text-warning" />
        </div>
        <svg className="mt-4 h-28 w-full" viewBox="0 0 360 112" role="img" aria-label="Forecast and actual demand trend">
          <path d="M0 94 L60 72 L120 82 L180 44 L240 55 L300 23 L360 32" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" />
          <path d="M0 88 L60 78 L120 68 L180 56 L240 49 L300 38 L360 27" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M0 108 H360" stroke="hsl(var(--border))" />
        </svg>
        <div className="flex items-center gap-5 font-mono text-[0.6rem] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-4 bg-primary" /> Actual</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-4 bg-secondary" /> Forecast</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual) {
    case "shield":
      return <AgentShieldVisual />;
    case "finops":
      return <FinOpsVisual />;
    case "rag":
      return <RagVisual />;
    case "medallion":
      return <MedallionVisual />;
    case "lineage":
      return <LineageVisual />;
    case "forecast":
      return <ForecastVisual />;
    default:
      return null;
  }
}
