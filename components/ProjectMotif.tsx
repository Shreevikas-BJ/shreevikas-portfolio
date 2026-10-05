import type { Project } from "@/data/portfolio";

export function ProjectMotif({ visual }: { visual: Project["visual"] }) {
  const shared = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg className="project-motif" viewBox="0 0 180 112" fill="none" aria-hidden="true" focusable="false">
      {visual === "architecture" ? <g {...shared}>
        <path d="M18 56 H45 M45 26 V86 M45 26 H68 M45 56 H68 M45 86 H68 M94 26 H118 V56 M94 56 H142 M94 86 H118 V56" />
        {[26, 56, 86].map((y) => <rect key={y} x="68" y={y - 9} width="26" height="18" rx="3" />)}
        <circle cx="18" cy="56" r="4" className="motif-accent" /><path d="M146 44 L158 56 L146 68 L134 56 Z" className="motif-accent" />
      </g> : null}
      {visual === "shield" ? <g {...shared}>
        <path d="M32 21 L60 11 L88 21 V48 C88 68 73 81 60 89 C47 81 32 68 32 48 Z" />
        <path d="M49 48 L58 57 L74 38" className="motif-accent" /><path d="M101 25 H160 M101 44 H160 M101 63 H160 M101 82 H160" opacity="0.4" />
        {[25, 44, 63, 82].map((y, index) => <circle key={y} cx={index % 2 ? 137 : 115} cy={y} r="3.5" className="motif-accent" />)}
      </g> : null}
      {visual === "rag" ? <g {...shared}>
        <path d="M16 22 H47 V49 H16 Z M24 14 H55 V41 M23 31 H39 M23 38 H34 M47 36 H70" />
        <circle cx="85" cy="36" r="14" /><path d="M95 47 L107 60 M107 60 H123 M126 47 H164 V91 H126 Z M135 61 H154 M135 69 H149 M135 77 H154" />
        <path d="M25 79 H70 Q85 79 85 61" strokeDasharray="3 5" className="motif-accent" />
        <circle cx="137" cy="88" r="2" className="motif-accent" /><circle cx="148" cy="88" r="2" className="motif-accent" />
      </g> : null}
      {visual === "procurement" ? <g {...shared}>
        <path d="M17 24 H44 V77 H17 Z M51 24 H78 V77 H51 Z M24 35 H37 M24 45 H37 M58 35 H71 M58 45 H71 M88 50 H109" />
        <path d="M127 32 L144 50 L127 68 L109 50 Z" className="motif-accent" /><path d="M127 74 V88 H162 M152 81 L161 88 L152 95" />
        <path d="M24 58 H34 M58 58 H68" className="motif-accent" />
      </g> : null}
      {visual === "finops" ? <g {...shared}>
        <path d="M19 44 C9 44 9 25 22 25 C26 7 50 10 55 24 C69 21 74 42 61 44 Z M36 45 V73 H73 M74 27 H156 M74 44 H156 M93 62 H156 M93 80 H156" />
        <path d="M75 27 H134 M75 44 H113 M94 62 H140 M94 80 H119" strokeWidth="3" className="motif-accent" />
        <circle cx="80" cy="73" r="5" />
      </g> : null}
      {visual === "medallion" ? <g {...shared}>
        {[22, 69, 116].map((x, index) => <g key={x}>
          <path d={`M${x} 35 L${x + 20} 25 L${x + 40} 35 L${x + 20} 45 Z M${x} 35 V66 L${x + 20} 77 L${x + 40} 66 V35 M${x + 20} 45 V77`} className={index === 2 ? "motif-accent" : undefined} />
          {index < 2 ? <path d={`M${x + 41} 51 H${x + 46}`} /> : null}
        </g>)}
        <path d="M22 90 H156" strokeDasharray="2 5" opacity="0.35" />
      </g> : null}
    </svg>
  );
}
