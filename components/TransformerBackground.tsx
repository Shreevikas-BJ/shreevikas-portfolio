"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { useMotionPreferences } from "@/components/MotionPreferences";

const brainOutline = "M320 78 C295 40 258 37 233 65 C195 49 161 69 153 102 C112 97 79 128 84 165 C45 189 47 235 73 255 C47 291 65 329 103 337 C98 378 132 404 168 397 C185 432 228 441 256 417 C291 433 320 411 320 372 C320 411 349 433 384 417 C412 441 455 432 472 397 C508 404 542 378 537 337 C575 329 593 291 567 255 C593 235 595 189 556 165 C561 128 528 97 487 102 C479 69 445 49 407 65 C382 37 345 40 320 78 Z";

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
  const { enabled } = useMotionPreferences();
  const clipId = `brain-${useId()}`;
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
    <div ref={root} className="transformer-background" data-running={visible && enabled}>
      <div className="transformer-visual" aria-hidden="true">
        <svg viewBox="0 0 640 500" fill="none" focusable="false">
          <defs><clipPath id={clipId}><path d={brainOutline} /></clipPath></defs>
          <path className="brain-outline" d={brainOutline} />
          <g className="brain-folds">
            <path d="M320 78 C307 120 335 152 320 193 C302 243 334 282 320 372" />
            <path d="M153 102 C153 132 180 148 171 172 M84 165 C116 153 140 169 140 197 M73 255 C110 237 127 260 139 280 M103 337 C125 314 157 319 170 346 M168 397 C193 378 204 355 234 361 M233 65 C245 94 268 101 270 125" />
            <path d="M487 102 C487 132 460 148 469 172 M556 165 C524 153 500 169 500 197 M567 255 C530 237 513 260 501 280 M537 337 C515 314 483 319 470 346 M472 397 C447 378 436 355 406 361 M407 65 C395 94 372 101 370 125" />
            <path d="M302 424 C302 443 314 454 326 474 M338 424 C337 446 342 455 348 468" />
          </g>
          <g clipPath={`url(#${clipId})`}>
          <g transform="translate(62 112) scale(0.84)">
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
          </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
