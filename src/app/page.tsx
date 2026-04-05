import { Countdown } from "./countdown";
import { NeonTitle } from "./neon-title";

const marqueeItems = [
  "AN ADVENTURE THROUGH TIME",
  "6TH JUNE 2026",
  "THE PIG'S NOSE",
  "FANCY DRESS ESSENTIAL",
  "£10 A TICKET",
  "60s · 70s · 80s · 90s · NOW",
];

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden grain">
      {/* Background blob gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-pink), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[60vmax] w-[60vmax] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-cyan), transparent 60%)",
        }}
      />

      {/* Top marquee */}
      <div className="border-y-2 border-[var(--foreground)] bg-[var(--accent-lime)] text-black overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-2 font-[family-name:var(--font-display)] text-lg sm:text-xl">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-6 flex items-center gap-6">
              {item}
              <span aria-hidden>★</span>
            </span>
          ))}
        </div>
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-12 sm:py-20">
        {/* Presents line */}
        <div className="flex items-center justify-center gap-3 text-sm sm:text-base tracking-[0.3em] uppercase opacity-80">
          <span>Jig at the Pig</span>
          <span aria-hidden>●</span>
          <span>Presents</span>
        </div>

        {/* Hero */}
        <div className="mt-8">
          <NeonTitle />
        </div>

        {/* Date strip */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-6 py-2 text-black font-[family-name:var(--font-display)] text-xl sm:text-2xl">
            <span>SAT · 6 JUNE 2026</span>
          </div>
          <div className="text-sm sm:text-base opacity-80 mt-1">
            The Pig&apos;s Nose · East Prawle, South Devon
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-12 mx-auto max-w-2xl">
          <div className="text-center text-xs tracking-[0.3em] uppercase opacity-70 mb-4">
            Time until the time machine departs
          </div>
          <Countdown />
        </div>

        {/* Schedule cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card
            color="var(--accent-yellow)"
            time="4–6 PM"
            title="Junior Rave"
            sub="By Tiny Dancers"
          />
          <Card
            color="var(--accent-orange)"
            time="8 PM – 1 AM"
            title="A Ridiculous Escapade"
            sub="Through the Musical Ages"
          />
        </div>

        {/* Info row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InfoPill title="Dress Code" body="Fancy dress essential (pig-related mischief encouraged)" />
          <InfoPill title="Camping" body="Camping in Prawle · Bus back to Kingsbridge (TBC)" />
          <InfoPill title="Tickets" body="£10 a ticket · From the 60s to now… and back again" />
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs tracking-[0.2em] uppercase opacity-60">
          More info coming soon · Holding page v0.1
        </footer>
      </main>

      {/* Bottom marquee */}
      <div className="border-y-2 border-[var(--foreground)] bg-[var(--accent-pink)] text-black overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-2 font-[family-name:var(--font-display)] text-lg sm:text-xl">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-6 flex items-center gap-6">
              {item}
              <span aria-hidden>✺</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({
  color,
  time,
  title,
  sub,
}: {
  color: string;
  time: string;
  title: string;
  sub: string;
}) {
  return (
    <div
      className="rounded-2xl border-2 border-[var(--foreground)] p-6 text-black"
      style={{ background: color }}
    >
      <div className="text-xs tracking-[0.3em] uppercase opacity-80">{time}</div>
      <div className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl uppercase leading-tight">
        {title}
      </div>
      <div className="mt-1 text-sm sm:text-base">{sub}</div>
    </div>
  );
}

function InfoPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border-2 border-[var(--foreground)] bg-black/40 p-4">
      <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
        {title}
      </div>
      <div className="mt-1 text-sm">{body}</div>
    </div>
  );
}
