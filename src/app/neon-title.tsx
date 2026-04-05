"use client";

type Word = { text: string; color: string; glow: string };

const LINES: Word[][] = [
  [
    { text: "AN", color: "#ff3d8b", glow: "255,61,139" },
    { text: "ADVENTURE", color: "#ffe94a", glow: "255,233,74" },
  ],
  [
    { text: "THROUGH", color: "#4af0ff", glow: "74,240,255" },
    { text: "TIME", color: "#c6ff3d", glow: "198,255,61" },
  ],
];

export function NeonTitle() {
  let i = 0;
  return (
    <h1 className="neon-title font-[family-name:var(--font-display)] leading-[0.95] uppercase">
      {LINES.map((line, li) => (
        <span key={li} className="neon-line">
          {line.map((w) => {
            const delay = i++ * 180;
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
  );
}
