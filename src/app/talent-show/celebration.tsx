"use client";

import { useMemo } from "react";

type NeonWord = { text: string; color: string; glow: string };

const LINES: NeonWord[][] = [
  [
    { text: "THANK", color: "#ff3d8b", glow: "255,61,139" },
    { text: "YOU", color: "#ffe94a", glow: "255,233,74" },
  ],
  [
    { text: "SEE YOU", color: "#4af0ff", glow: "74,240,255" },
    { text: "SATURDAY", color: "#c6ff3d", glow: "198,255,61" },
  ],
];

const CONFETTI_COLORS = [
  "#ff3d8b",
  "#ffe94a",
  "#c6ff3d",
  "#4af0ff",
  "#ff7a29",
];

function hashFloat(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function Celebration() {
  const confetti = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        left: (hashFloat(i + 1) * 100).toFixed(2),
        delay: (hashFloat(i + 100) * 6).toFixed(2),
        duration: (4 + hashFloat(i + 200) * 4).toFixed(2),
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        rotate: (hashFloat(i + 300) * 360).toFixed(2),
        width: 6 + Math.round(hashFloat(i + 400) * 8),
      })),
    []
  );

  let neonDelay = 0;

  return (
    <>
      <div className="celebration-glow" aria-hidden />
      <div className="confetti-layer" aria-hidden>
        {confetti.map((c, i) => (
          <span
            key={i}
            className="confetti-piece"
            style={{
              left: `${c.left}%`,
              width: `${c.width}px`,
              height: `${(c.width * 1.6).toFixed(2)}px`,
              background: c.color,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              transform: `rotate(${c.rotate}deg)`,
              boxShadow: `0 0 6px ${c.color}`,
            }}
          />
        ))}
      </div>

      <h1
        className="neon-title font-[family-name:var(--font-display)] leading-[0.95] uppercase relative z-10"
        style={{ fontSize: "clamp(1.75rem, 6.5vw, 5rem)" }}
      >
        {LINES.map((line, li) => (
          <span key={li} className="neon-line">
            {line.map((w) => {
              const delay = neonDelay++ * 220;
              return (
                <span
                  key={w.text}
                  className="neon-word"
                  style={
                    {
                      "--neon": w.color,
                      "--glow": w.glow,
                      "--delay": `${delay}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span className="neon-text">{w.text}</span>
                </span>
              );
            })}
          </span>
        ))}
      </h1>
    </>
  );
}
