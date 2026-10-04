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
    <div className="relative z-10 flex min-w-0 items-center justify-between gap-3 border-b border-border/80 px-4 py-3">
      <span className="box-heading min-w-0 font-mono text-[0.65rem] font-semibold uppercase leading-4 text-muted-foreground">
        {label}
      </span>
      <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[0.62rem] font-semibold text-success">
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
    ["Excessive agency", "pass"]
  ];

  return (
    <div className="project-visual max-[419px]:min-h-[430px]">
      <VisualHeader label="Agent risk matrix" status="SCAN 06/06" />
      <div className="relative z-10 grid min-w-0 gap-3 p-4 min-[420px]:grid-cols-[0.72fr_1.28fr] min-[420px]:gap-4 min-[420px]:p-5">
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
            <div key={label} className="min-w-0 rounded-md border border-border bg-background/70 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="box-heading min-w-0 text-[0.7rem] font-medium leading-4 text-muted-foreground">{label}</span>
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
          <span className="box-heading rounded-md border border-border bg-background/70 px-1 py-2">SEVERITY</span>
          <span className="box-heading rounded-md border border-border bg-background/70 px-1 py-2">OWNER</span>
          <span className="box-heading rounded-md border border-border bg-background/70 px-1 py-2">ACTION</span>
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
        <div className="grid grid-cols-2 gap-2 min-[460px]:grid-cols-4">
          {pipeline.map((item, index) => (
              <div key={item} className="min-w-0 rounded-md border border-border bg-background/72 p-3 text-center">
                {index === 0 ? <Search className="mx-auto h-4 w-4 text-primary" /> : null}
                {index === 1 ? <Activity className="mx-auto h-4 w-4 text-primary" /> : null}
                {index === 2 ? <Database className="mx-auto h-4 w-4 text-primary" /> : null}
                {index === 3 ? <FileCheck2 className="mx-auto h-4 w-4 text-primary" /> : null}
                <p className="box-heading mt-2 font-mono text-[0.6rem] font-semibold">{item}</p>
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
        <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] text-muted-foreground">
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
        <p className="box-heading mt-4 text-center font-mono text-[0.62rem] text-muted-foreground">
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
      <div className="relative z-10 grid h-[calc(100%-45px)] min-w-0 grid-cols-[0.8fr_1fr_0.9fr] items-center gap-2 p-4 min-[460px]:gap-4 min-[460px]:p-5">
        <div className="space-y-2">
          {["Bookings", "Hosts", "Listings"].map((item) => (
            <div key={item} className="box-heading min-w-0 rounded-md border border-border bg-background/72 p-2 text-center font-mono text-[0.6rem]">
              {item}
            </div>
          ))}
        </div>
        <div className="min-w-0 rounded-md border border-primary/35 bg-primary/10 p-2 text-center min-[460px]:p-4">
          <Layers3 className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 font-mono text-[0.65rem] font-semibold">dbt</p>
          <p className="box-heading mt-1 text-[0.62rem] text-muted-foreground">Bronze / Silver / Gold</p>
        </div>
        <div className="space-y-2">
          {["Facts", "SCD2", "Analytics"].map((item) => (
            <div key={item} className="box-heading min-w-0 rounded-md border border-border bg-background/72 p-2 text-center font-mono text-[0.6rem]">
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

function VisionVisual() {
  return (
    <div className="project-visual">
      <VisualHeader label="Industrial vision inference" status="500+ FPS" />
      <div className="relative z-10 grid h-[calc(100%-45px)] min-w-0 gap-4 p-4 min-[460px]:grid-cols-[1.15fr_0.85fr] min-[460px]:p-5">
        <div className="relative min-h-40 overflow-hidden rounded-md border border-border bg-background/72">
          <div className="absolute inset-4 rounded border border-primary/25" />
          <div className="scan-beam absolute inset-x-3 top-0 h-px bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
          <div className="absolute left-[18%] top-[24%] h-[42%] w-[34%] rounded border border-success/70 bg-success/5">
            <span className="absolute -top-5 left-0 font-mono text-[0.56rem] text-success">PASS 0.98</span>
          </div>
          <div className="absolute bottom-[17%] right-[14%] h-[27%] w-[24%] rounded border border-error/70 bg-error/5">
            <span className="absolute -top-5 right-0 font-mono text-[0.56rem] text-error">DEFECT 0.91</span>
          </div>
          <Activity className="absolute bottom-4 left-4 h-4 w-4 text-primary" />
        </div>

        <div className="grid grid-cols-2 gap-2 min-[460px]:grid-cols-1">
          {[
            ["DEFECT LEAKAGE", "-32%", "text-success"],
            ["SCRAP SAVINGS", "$850K", "text-primary"],
            ["INFERENCE", "REAL TIME", "text-foreground"]
          ].map(([label, value, color]) => (
            <div key={label} className="min-w-0 rounded-md border border-border bg-background/72 p-3">
              <p className="box-heading font-mono text-[0.56rem] text-muted-foreground">{label}</p>
              <p className={`box-heading mt-1 text-lg font-semibold ${color}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentVisual() {
  const stages = [
    { label: "PDF", icon: FileCheck2 },
    { label: "OCR", icon: Search },
    { label: "Vector", icon: Database },
    { label: "Answer", icon: Check }
  ];

  return (
    <div className="project-visual">
      <VisualHeader label="Document intelligence flow" status="40% FASTER" />
      <div className="relative z-10 p-4 min-[460px]:p-5">
        <div className="grid grid-cols-2 gap-2 min-[460px]:grid-cols-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="relative min-w-0 rounded-md border border-border bg-background/72 p-3 text-center">
                <Icon className="mx-auto h-4 w-4 text-primary" />
                <p className="box-heading mt-2 font-mono text-[0.6rem] font-semibold">{stage.label}</p>
                {index < stages.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 z-10 hidden h-px w-2 bg-primary/50 min-[460px]:block" />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-md border border-border bg-background/72 p-4">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <p className="box-heading font-mono text-[0.6rem] text-muted-foreground">SEMANTIC FIELD EXTRACTION</p>
            <span className="shrink-0 font-mono text-[0.58rem] font-semibold text-success">GROUNDED</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Vendor", "Clause", "Risk"].map((field, index) => (
              <div key={field} className="min-w-0 rounded border border-primary/20 bg-primary/5 px-2 py-2 text-center">
                <p className="box-heading text-[0.65rem] font-semibold">{field}</p>
                <div className="mx-auto mt-2 h-1 rounded-full bg-primary/25" style={{ width: `${82 - index * 12}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureVisual() {
  const stages = ["Requirements", "Web research", "JEV routing", "Design alternatives"];

  return (
    <div className="project-visual project-workflow-visual">
      <VisualHeader label="ArchPilot orchestration" status="LOCAL INFERENCE" />
      <div className="relative z-10 p-5">
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          {stages.map((stage, index) => (
            <div key={stage} className="min-w-0 border-l border-primary/40 pl-3">
              <p className="font-mono text-[0.6rem] text-primary">0{index + 1}</p>
              <p className="box-heading mt-2 text-sm font-semibold leading-5">{stage}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex min-w-0 items-start gap-3 border-t border-border pt-5">
          <Layers3 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div className="min-w-0">
            <p className="box-heading text-sm font-semibold">FastAPI + PydanticAI</p>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              Multi-agent routing &middot; PostgreSQL persistence
            </p>
            <p className="mt-3 font-mono text-xs text-primary">27B quantized LLM / llama.cpp</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <span>Cost-effective</span><span>Balanced</span><span>High-performance</span>
        </div>
      </div>
    </div>
  );
}

function ProcurementVisual() {
  return (
    <div className="project-visual project-workflow-visual">
      <VisualHeader label="Accord decision workflow" status="HUMAN REVIEW" />
      <div className="relative z-10 p-5">
        <div className="flex items-start gap-3">
          <FileCheck2 className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold">From quotes to decisions</p>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">PDF, spreadsheet, CSV, and OCR inputs</p>
          </div>
        </div>
        <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
          {["Extract & validate", "Compare suppliers", "Review source evidence", "Approve & audit"].map((stage, index) => (
            <li key={stage} className="min-w-0 border-l border-primary/40 pl-3">
              <p className="font-mono text-[0.6rem] text-primary">0{index + 1}</p>
              <p className="box-heading mt-1 text-sm font-semibold leading-5">{stage}</p>
            </li>
          ))}
        </ol>
        <div className="mt-5 border-t border-border pt-4 text-xs leading-6 text-muted-foreground">
          Deterministic calculations &middot; Human approval &middot; Audit trail
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual) {
    case "architecture":
      return <ArchitectureVisual />;
    case "procurement":
      return <ProcurementVisual />;
    case "vision":
      return <VisionVisual />;
    case "document":
      return <DocumentVisual />;
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
