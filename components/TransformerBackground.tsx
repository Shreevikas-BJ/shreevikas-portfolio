"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";

const tokenRows = Array.from({ length: 6 }, (_, index) => 100 + index * 24);
const networkLayers = [
  { x: 366, rows: [108, 144, 180, 216] },
  { x: 408, rows: [100, 124, 148, 172, 196, 220] },
  { x: 450, rows: [108, 144, 180, 216] }
];
const attentionCells = Array.from({ length: 36 }, (_, index) => ({ row: Math.floor(index / 6), column: index % 6 }));

function signalStyle(index: number): CSSProperties {
  return { "--signal-delay": `${index * -0.8}s` } as CSSProperties;
}

export function TransformerBackground() {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);

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
    <div ref={root} className="transformer-background" data-running={visible && !paused}>
      <div className="transformer-visual" aria-hidden="true">
        <svg viewBox="0 0 620 320" fill="none" focusable="false">
          <g className="transformer-labels">
            <text x="24" y="44">TOKENS</text>
            <text x="88" y="70">EMBED</text>
            <text x="202" y="70">SELF-ATTENTION</text>
            <text x="355" y="70">FEED-FORWARD</text>
            <text x="530" y="70">OUTPUT</text>
            <text x="202" y="244">QK / SOFTMAX / V</text>
          </g>
          {tokenRows.map((y, index) => {
            const path = `M 52 ${y} H 130 C 156 ${y} 163 ${112 + index * 18} 194 ${112 + index * 18}`;
            return (
              <g key={y}>
                <rect className="transformer-token" x="24" y={y - 6} width={18 + index % 3 * 5} height="12" rx="2" />
                <path className="transformer-track" d={path} />
                <path className="transformer-signal" d={path} pathLength="120" style={signalStyle(index)} />
                {[0, 1, 2, 3].map((column) => (
                  <rect key={column} className="transformer-embedding" x={88 + column * 10} y={y - 6} width="6" height="12" opacity={0.25 + (index + column) % 4 * 0.15} />
                ))}
              </g>
            );
          })}
          {attentionCells.map(({ row, column }) => (
            <rect
              key={`${row}-${column}`}
              className={`attention-cell${row === 5 ? " attention-cell-active" : ""}`}
              x={202 + column * 19}
              y={102 + row * 19}
              width="13"
              height="13"
              rx="1"
              fill={column <= row ? "currentColor" : "none"}
              opacity={column <= row ? 0.2 + (row + column) % 4 * 0.15 : 0.12}
              style={signalStyle(column)}
            />
          ))}
          {networkLayers.slice(0, -1).map((layer, layerIndex) => (
            <g key={layer.x}>
              {layer.rows.flatMap((y, index) => [0, 2].map((offset) => {
                const next = networkLayers[layerIndex + 1];
                const target = next.rows[(index + offset) % next.rows.length];
                return <path key={`${y}-${offset}`} className="transformer-network-edge" d={`M ${layer.x} ${y} L ${next.x} ${target}`} />;
              }))}
            </g>
          ))}
          {networkLayers[0].rows.map((y, index) => {
            const path = `M 316 ${112 + index * 28} C 340 ${112 + index * 28} 340 ${y} 366 ${y} L 408 ${networkLayers[1].rows[index]} L 450 ${y} C 482 ${y} 500 ${y} 530 ${y}`;
            return (
              <g key={y}>
                <path className="transformer-track" d={path} />
                <path className="transformer-signal transformer-signal-output" d={path} pathLength="120" style={signalStyle(index + 3)} />
                <rect className="transformer-output" x="534" y={y - 5} width={26 + index * 7} height="10" rx="1" style={signalStyle(index + 3)} />
              </g>
            );
          })}
          {networkLayers.map((layer) => (
            <g key={layer.x}>
              {layer.rows.map((y) => <rect key={y} className="transformer-neuron" x={layer.x - 3} y={y - 3} width="6" height="6" rx="1" />)}
            </g>
          ))}
          <path className="transformer-residual" d="M 174 146 V 274 H 488 V 170" />
          <g className="transformer-labels"><text x="302" y="294">RESIDUAL FLOW</text></g>
        </svg>
      </div>
      <button
        type="button"
        className="hero-motion-control"
        aria-label={paused ? "Resume background animation" : "Pause background animation"}
        aria-pressed={paused}
        title={paused ? "Resume background animation" : "Pause background animation"}
        disabled={!visible}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>
    </div>
  );
}
