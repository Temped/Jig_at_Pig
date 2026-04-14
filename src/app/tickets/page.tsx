import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets — Jig at the Pig",
  description:
    "Get your tickets now — no tickets on the door. £10 adult contribution, kids' rave free.",
};

export default function TicketsPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Book Your Spot
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">Tickets</h1>
          <p className="mt-6 text-base sm:text-lg opacity-90">
            Get your tickets now &mdash; no tickets on the door.
          </p>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Kids&apos; Rave &amp; Talent Show
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-4xl text-[var(--accent-yellow)]">
              FREE
            </div>
            <div className="mt-2 text-sm opacity-85">
              4 PM &ndash; 6 PM. All welcome, no booking fee.
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Adult Party
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-4xl text-[var(--accent-pink)]">
              £10
            </div>
            <div className="mt-2 text-sm opacity-85">
              A contribution towards putting on the night. 8 PM &ndash; 1 AM,
              18+.
            </div>
            <a
              href="https://fixr.co/event/jig-at-the-pig-an-adventure-through-time-tickets-726942319?lang=en-US"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-5 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-black hover:brightness-110"
            >
              Get Tickets
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Refunds &amp; Transfers
          </h2>
          <div className="mt-6 info-card space-y-3 text-sm sm:text-base">
            <p>
              <strong>Transfers:</strong> Ticket transfers are possible up to 1
              week before the event.
            </p>
            <p>
              <strong>Refunds:</strong> By request, up to 1 week before the
              event.
            </p>
            <p className="opacity-85">
              If the event is cancelled, full refunds will be issued (minus
              booking fees).
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Stay in the Loop
          </h2>
          <div className="mt-6 info-card text-sm sm:text-base">
            <p>
              For the latest updates, join the{" "}
              <strong>event WhatsApp broadcast group</strong> &mdash; limited
              posts from organisers in the run-up to the event.
            </p>
            {/* TODO @edward: add WhatsApp join link */}
            <p className="mt-3 opacity-80">
              Join link coming soon.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
