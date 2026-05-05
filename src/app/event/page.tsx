import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Event — Jig at the Pig",
  description:
    "An Adventure Through Time — 6th June at The Pig's Nose, East Prawle. A DJ-led tour through the musical ages from the 40s to today.",
};

export default function EventPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Jig at the Pig Presents
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
            An Adventure Through Time
          </h1>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-6 py-2 text-black font-[family-name:var(--font-display)] text-lg sm:text-2xl">
            <span>SAT · 6 JUNE 2026</span>
            <span aria-hidden>●</span>
            <span>FROM 4 PM</span>
          </div>
          <div className="mt-3 text-sm sm:text-base opacity-85">
            The Pig&apos;s Nose Inn · East Prawle, South Devon
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeoCArNp6tVXjZYqkiIuZvsEQAAElpsU8nvNYRzP530RJHLVw/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-md flex-col items-center rounded-2xl border-2 border-[var(--foreground)] bg-[var(--accent-yellow)] px-6 py-3 text-center font-[family-name:var(--font-display)] text-black hover:brightness-110"
            >
              <span className="text-base sm:text-lg uppercase tracking-[0.15em]">
                Second Ticket Release
              </span>
              <span className="mt-1 text-xs sm:text-sm">
                Register your name for a second ticket release
              </span>
            </a>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            The Knees-Up
          </h2>
          <div className="mt-6 info-card space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              A good ol&apos; fashioned knees-up at The Pig&apos;s Nose on the
              6th June to welcome in the summer. Just because.
            </p>
            <p>
              A DJ-led tour through the musical ages from the 40s to today,
              with &lsquo;New Year&apos;s Eve&rsquo; celebrated every decade,
              ending up in the present day.
            </p>
            <p>Dress as your favourite era.</p>
            <p>
              Plus an earlier kids&apos; rave and talent show &mdash; free
              &mdash; from 4 PM&ndash;6 PM.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Watch This
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-[var(--foreground)]">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/oAxB-oCkPt0"
                title="Jig at the Pig — An Adventure Through Time"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Lineup
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="info-card">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Kids&apos; Rave
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-xl sm:text-2xl uppercase text-[var(--accent-yellow)] [text-shadow:_0_0_6px_rgba(255,233,74,0.9),_0_0_18px_rgba(255,233,74,0.5)]">
                Tiny Dancers
              </div>
              <div className="mt-2 text-sm opacity-90 italic">
                The biggest little party in town.
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border-2 border-[var(--accent-yellow)]">
                <Image
                  src="/tiny-dancers.png"
                  alt="Tiny Dancers — Family Rave"
                  width={600}
                  height={360}
                  className="block w-full h-auto"
                />
              </div>
              <a
                href="https://www.tinydancersevents.com"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm underline opacity-85 hover:opacity-100"
              >
                tinydancersevents.com
              </a>
            </div>
            <div className="info-card">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Headliner
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-xl sm:text-2xl uppercase text-[var(--accent-pink)] [text-shadow:_0_0_6px_rgba(255,61,139,0.85),_0_0_18px_rgba(255,61,139,0.5)]">
                Mango Django
              </div>
              <div className="mt-2 text-sm opacity-90 italic">
                The floor-filling maestro returns by popular demand.
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border-2 border-[var(--accent-pink)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mango-django.gif"
                  alt="Mango Django"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Running Order
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="info-card">
              <div className="font-[family-name:var(--font-display)] text-2xl text-[var(--accent-yellow)]">
                4 PM &ndash; 6 PM
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-lg sm:text-xl uppercase">
                Kids&apos; Talent Show &amp; Rave
              </div>
              <div className="mt-1 text-sm opacity-85">Free · All welcome</div>
            </div>
            <div className="info-card">
              <div className="font-[family-name:var(--font-display)] text-2xl text-[var(--accent-cyan)]">
                8 PM &ndash; 1 AM
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-lg sm:text-xl uppercase">
                Adult Party
              </div>
              <div className="mt-1 text-sm opacity-85">
                A Musical Adventure Through Time · 18+
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Need to Know
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="info-card">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Age Policy
              </div>
              <div className="mt-2 text-sm sm:text-base">
                18+ only for the main adult event (8 PM onwards).
              </div>
            </div>
            <div className="info-card">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Food &amp; Drink
              </div>
              <div className="mt-2 text-sm sm:text-base">
                Available at the pub. Book a table in advance if you&apos;d like
                to eat.
              </div>
            </div>
            <div className="info-card">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Camping
              </div>
              <div className="mt-2 text-sm sm:text-base">
                Camping available in Prawle. More details to follow via the
                event WhatsApp group.
              </div>
            </div>
            <div className="info-card">
              <div className="text-xs tracking-[0.25em] uppercase opacity-70">
                Transport
              </div>
              <div className="mt-2 text-sm sm:text-base">
                Bus to and from Kingsbridge &mdash; TBC on the event WhatsApp
                group.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
