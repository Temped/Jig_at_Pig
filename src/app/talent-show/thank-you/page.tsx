import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received — Jig at the Pig",
  description:
    "Thanks for applying to the Pig's Nose Kids Talent Show. We'll be in touch.",
};

export default function TalentShowThankYouPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-2xl px-6 py-16 sm:py-24 text-center">
        <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
          Talent Show
        </div>
        <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
          Application Received
        </h1>
        <p className="mt-8 text-base sm:text-lg opacity-90">
          Thanks for signing up! We&apos;ve got your details and will be in
          touch before the big day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
