import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Directions & Camping — Jig at the Pig",
  description:
    "The Pig's Nose Inn, East Prawle, Kingsbridge TQ7 2BY. Directions, parking, camping and accessibility.",
};

export default function DirectionsPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Getting There
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
            Directions &amp; Camping
          </h1>
        </div>

        <section className="mt-12">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            The Venue
          </h2>
          <div className="mt-6 info-card text-center">
            <div className="font-[family-name:var(--font-display)] text-xl sm:text-2xl uppercase">
              The Pig&apos;s Nose Inn
            </div>
            <address className="mt-2 not-italic text-sm sm:text-base opacity-90">
              East Prawle, Kingsbridge TQ7 2BY
            </address>
            <a
              href="https://maps.app.goo.gl/1e3QJoPeynoPtub96"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-cyan)] px-5 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-black hover:brightness-110"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-[var(--foreground)]">
            <iframe
              title="The Pig's Nose Inn map"
              src="https://www.google.com/maps?q=The+Pig%27s+Nose+Inn,+East+Prawle,+Kingsbridge+TQ7+2BY&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block" }}
            />
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Parking
            </div>
            <div className="mt-2 text-sm sm:text-base">
              On the village green in Prawle. If the green is full, park further
              along the village and walk.
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Camping
            </div>
            <div className="mt-2 text-sm sm:text-base">
              Camping available in Prawle. More details to follow via the event
              WhatsApp group.
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Bus to Kingsbridge
            </div>
            <div className="mt-2 text-sm sm:text-base">
              A bus to and from Kingsbridge is planned &mdash; TBC on the event
              WhatsApp group.
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Accessibility
            </div>
            <div className="mt-2 text-sm sm:text-base">
              It&apos;s an old pub with steps and uneven surfaces. Wheelchair
              access to the hall where the music happens, but the pub itself is
              tricky.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
