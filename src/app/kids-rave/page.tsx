import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Rave — Jig at the Pig",
  description:
    "Free kids' rave at The Pig's Nose on Saturday 6th June, with Tiny Dancers.",
};

export default function KidsRavePage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Saturday 6th June · Free · The Pig&apos;s Nose
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
            Kids&apos; Rave
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-90">
            An afternoon of proper disco for the little ones, brought to you by{" "}
            <a
              href="https://www.tinydancersevents.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[var(--accent-pink)]"
            >
              Tiny Dancers
            </a>
            .
          </p>
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
                Register your name
              </span>
            </a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Watch This
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-[var(--foreground)]">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dDaozFwnj5Y"
                title="Kids Rave — Jig at the Pig"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Who
            </div>
            <div className="mt-2 text-sm sm:text-base">
              All kids welcome. Grown-ups free to dance alongside.
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Price
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--accent-yellow)]">
              FREE
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Where
            </div>
            <div className="mt-2 text-sm sm:text-base">
              The Pig&apos;s Nose hall, East Prawle.
            </div>
          </div>
          <div className="info-card">
            <div className="text-xs tracking-[0.25em] uppercase opacity-70">
              Hosted By
            </div>
            <div className="mt-2 text-sm sm:text-base">
              Tiny Dancers &mdash;{" "}
              <a
                href="https://www.tinydancersevents.com"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[var(--accent-pink)]"
              >
                tinydancersevents.com
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <a
            href="/talent-show"
            className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-cyan)] px-6 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-black hover:brightness-110"
          >
            Got a Performer? Sign up for the Talent Show
          </a>
        </div>
      </main>
    </div>
  );
}
