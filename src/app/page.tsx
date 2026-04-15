import Image from "next/image";
import Link from "next/link";
import { Countdown } from "./countdown";
import { NeonTitle } from "./neon-title";
import { WhatsAppButton } from "./whatsapp-button";

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
      <div className="hidden sm:block border-y-2 border-[var(--foreground)] bg-[var(--accent-lime)] text-black overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-2 font-[family-name:var(--font-display)] text-lg sm:text-xl">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-6 flex items-center gap-6">
              {item}
              <span aria-hidden>★</span>
            </span>
          ))}
        </div>
      </div>

      <main className="relative mx-auto max-w-5xl px-6 pt-4 pb-12 sm:pt-8 sm:pb-20">
        {/* Presents line */}
        <div className="neon-presents flex items-center justify-center gap-4 text-xl sm:text-3xl tracking-[0.12em] uppercase">
          <span className="hidden sm:inline">Jig at the Pig</span>
          <span aria-hidden className="hidden sm:inline">●</span>
          <span>Presents</span>
        </div>

        {/* Hero → schedule wrapper */}
        <div className="relative mt-20 sm:mt-8">
          {/* Hero with pig snout behind */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
            >
              <Image
                src="/pig-snout-v2.png"
                alt=""
                width={600}
                height={470}
                priority
                className="w-[min(80vw,560px)] h-auto pig-snout-glow wobble"
              />
            </div>
            <div className="relative z-10">
              <NeonTitle />
            </div>
          </div>

          {/* Event blurb */}
          <div className="relative z-10 mt-10 mx-auto max-w-5xl text-center space-y-6 sm:space-y-8 sm:w-[130%] sm:max-w-none sm:-mx-[15%]">
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl uppercase leading-tight text-[var(--foreground)] [text-shadow:_0_0_6px_rgba(255,61,139,0.9),_0_0_18px_rgba(255,61,139,0.55)]">
              Welcome in the summer
              <br />
              with a{" "}
              <span className="text-[var(--accent-pink)]">
                good ol&apos; fashioned knees-up
              </span>
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl uppercase leading-tight text-[var(--accent-yellow)] [text-shadow:_0_0_6px_rgba(255,233,74,0.95),_0_0_20px_rgba(255,233,74,0.55)]">
              Just because
            </p>

            <p className="font-[family-name:var(--font-display)] text-xl sm:text-3xl uppercase leading-tight text-[var(--foreground)] [text-shadow:_0_0_6px_rgba(74,240,255,0.85),_0_0_18px_rgba(74,240,255,0.5)]">
              A DJ-led tour through the{" "}
              <span className="text-[var(--accent-cyan)]">musical ages</span> &mdash;
              <br className="hidden sm:inline" /> 40s to today,{" "}
              <span className="text-[var(--accent-pink)]">
                New Year&apos;s Eve
              </span>{" "}
              every decade.
            </p>

            <p className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl uppercase leading-none text-[var(--accent-yellow)] [text-shadow:_0_0_6px_rgba(255,233,74,0.95),_0_0_20px_rgba(255,233,74,0.6),_0_0_42px_rgba(255,233,74,0.35)]">
              Dress as your favourite era
            </p>

            <div className="inline-block rounded-full border-2 border-[var(--accent-lime)] bg-black/60 px-6 py-3 font-[family-name:var(--font-display)] text-base sm:text-xl uppercase tracking-[0.1em] text-[var(--accent-lime)] [text-shadow:_0_0_6px_rgba(198,255,61,0.9),_0_0_16px_rgba(198,255,61,0.55)] shadow-[0_0_14px_rgba(198,255,61,0.5),0_0_32px_rgba(198,255,61,0.25)]">
              + free kids&apos; rave &amp; talent show
            </div>
          </div>

          {/* Date strip */}
          <div className="relative z-10 mt-10 flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-6 py-2 text-black font-[family-name:var(--font-display)] text-xl sm:text-2xl">
              <span>SAT · 6 JUNE 2026</span>
            </div>
            <div className="text-sm sm:text-base opacity-80 mt-1">
              The Pig&apos;s Nose · East Prawle, South Devon
            </div>
          </div>

          {/* Get tickets CTA */}
          <div className="relative z-10 mt-10 flex justify-center">
            <a
              href="https://fixr.co/event/jig-at-the-pig-an-adventure-through-time-tickets-726942319?lang=en-US"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-8 py-3 font-[family-name:var(--font-display)] text-base sm:text-lg uppercase tracking-[0.15em] text-black hover:brightness-110"
            >
              Book Tickets
            </a>
          </div>

          {/* Countdown */}
          <div className="relative z-10 mt-12 mx-auto max-w-2xl">
            <div className="text-center text-xs tracking-[0.3em] uppercase opacity-70 mb-4">
              Time until the time machine departs
            </div>
            <Countdown />
          </div>

          {/* Schedule cards */}
          <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              href="/kids-rave"
              color="#ffe94a"
              glow="255,233,74"
              time="4–6 PM"
              title="Talent Show & Junior Rave"
              sub="By Tiny Dancers"
              image="/tiny-dancers.png"
              imageAlt="Tiny Dancers — Family Rave"
            />
            <Card
              href="/event"
              color="#4af0ff"
              glow="74,240,255"
              time="8 PM – 1 AM"
              title="A Ridiculous Escapade"
              sub="Through the Musical Ages · Headlined by Mango Django"
              image="/mango-django.gif"
              imageAlt="Mango Django"
            />
          </div>
        </div>

        {/* Info row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InfoPill title="Dress Code" body="Dress through the ages (pig-related for bonus points)" />
          <InfoPill title="Camping" body="Camping in Prawle · Bus back to Kingsbridge (TBC)" />
          <InfoPill title="Tickets" body="£10 a ticket · From the 60s to now… and back again" />
        </div>

        <WhatsAppButton />

        {/* Footer */}
        <footer className="mt-20 text-center text-xs tracking-[0.2em] uppercase opacity-60">
          More info coming soon
        </footer>
      </main>

      {/* Bottom marquee */}
      <div className="hidden sm:block border-y-2 border-[var(--foreground)] bg-[var(--accent-pink)] text-black overflow-hidden">
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
  href,
  color,
  glow,
  time,
  title,
  sub,
  image,
  imageAlt,
}: {
  href: string;
  color: string;
  glow: string;
  time: string;
  title: string;
  sub: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Link
      href={href}
      className="relative flex flex-col rounded-2xl p-6 bg-black/60 backdrop-blur-sm transition hover:brightness-110 hover:-translate-y-0.5"
      style={{
        border: `3px solid ${color}`,
        boxShadow: `0 0 6px rgba(${glow},0.9), 0 0 18px rgba(${glow},0.55), 0 0 40px rgba(${glow},0.35), inset 0 0 12px rgba(${glow},0.2)`,
      }}
    >
      <div
        className="text-xs tracking-[0.3em] uppercase"
        style={{
          color,
          textShadow: `0 0 4px rgba(${glow},0.9), 0 0 10px rgba(${glow},0.5)`,
        }}
      >
        {time}
      </div>
      <div
        className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl uppercase leading-tight"
        style={{
          color: "var(--foreground)",
          textShadow: `0 0 4px rgba(${glow},0.9), 0 0 12px rgba(${glow},0.6)`,
        }}
      >
        {title}
      </div>
      <div className="mt-1 text-sm sm:text-base opacity-85">{sub}</div>
      {image && (
        <div
          className="mt-auto pt-4"
        >
          <div
            className="relative overflow-hidden rounded-xl bg-black aspect-[5/3]"
            style={{ border: `2px solid ${color}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </Link>
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
