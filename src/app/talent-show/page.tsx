import type { Metadata } from "next";
import { TalentShowForm } from "./form";

export const metadata: Metadata = {
  title: "Kids Talent Show — Jig at the Pig",
  description:
    "Pig's Nose Kids Talent Show — application form. Saturday 6th June, 3–5 PM at The Pig's Nose.",
};

export default function KidsPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Saturday 6th June · 3 PM &ndash; 5 PM · The Pig&apos;s Nose
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
            Pig&apos;s Nose Kids Talent Show
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-90">
            Sign your child up to perform. Max act length 4 minutes. Places are
            first come, first served.
          </p>
        </div>

        <TalentShowForm />
      </main>
    </div>
  );
}
