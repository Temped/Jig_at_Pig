"use client";

import { useEffect, useState } from "react";

// 6th June 2026, 4pm BST (junior rave kickoff)
const TARGET = new Date("2026-06-06T15:00:00Z").getTime();

function diff(now: number) {
  const d = Math.max(0, TARGET - now);
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d % 86400000) / 3600000);
  const mins = Math.floor((d % 3600000) / 60000);
  const secs = Math.floor((d % 60000) / 1000);
  return { days, hours, mins, secs };
}

export function Countdown() {
  const [time, setTime] = useState(() => diff(Date.now()));

  useEffect(() => {
    const id = setInterval(() => setTime(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: Array<[string, number]> = [
    ["DAYS", time.days],
    ["HRS", time.hours],
    ["MIN", time.mins],
    ["SEC", time.secs],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center rounded-xl border-2 border-[var(--foreground)] bg-black/40 px-3 py-4 sm:px-5 sm:py-6"
        >
          <div
            className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl tabular-nums leading-none"
            suppressHydrationWarning
          >
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] sm:text-xs tracking-[0.2em] opacity-70">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
