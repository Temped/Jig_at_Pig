import type { Metadata } from "next";
import Link from "next/link";
import { Celebration } from "../celebration";

export const metadata: Metadata = {
  title: "Application Received — Jig at the Pig",
  description:
    "Thanks for applying to the Pig's Nose Kids Talent Show. We'll be in touch.",
};

export default function TalentShowThankYouPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28 text-center overflow-hidden">
        <Celebration />

        <div
          className="celebration-rise relative z-10 mt-14 text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80"
          style={{ "--rise-delay": "900ms" } as React.CSSProperties}
        >
          Talent Show · Application Received
        </div>

        <p
          className="celebration-rise relative z-10 mx-auto mt-8 max-w-xl text-base sm:text-lg opacity-90"
          style={{ "--rise-delay": "1100ms" } as React.CSSProperties}
        >
          We&apos;ve got your details. We&apos;ll be in touch before the
          big day with running order, sound-check time, and arrival info.
        </p>

        <div
          className="celebration-rise relative z-10 mt-12 flex flex-wrap justify-center gap-3"
          style={{ "--rise-delay": "1300ms" } as React.CSSProperties}
        >
          <Link
            href="/"
            className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-6 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-black hover:brightness-110"
          >
            Back to Home
          </Link>
          <Link
            href="/event"
            className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-cyan)] px-6 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-black hover:brightness-110"
          >
            Event Details
          </Link>
        </div>
      </main>
    </div>
  );
}
