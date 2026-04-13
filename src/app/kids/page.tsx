import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Rave & Talent Show — Jig at the Pig",
  description:
    "Free kids' rave and talent show at The Pig's Nose, 4–6 PM on 6th June, with Tiny Dancers.",
};

export default function KidsPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            4 PM &ndash; 6 PM · Free
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
            Kids&apos; Rave &amp; Talent Show
          </h1>
          <div className="mt-5 text-sm sm:text-base opacity-85">
            With{" "}
            <a
              href="https://www.tinydancersevents.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[var(--accent-pink)]"
            >
              Tiny Dancers
            </a>
            {" · "}The Pig&apos;s Nose, East Prawle
          </div>
        </div>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            The Talent Show
          </h2>
          {/* TODO @edward: populate from Barney's msg */}
          <div className="mt-6 info-card text-center space-y-3 text-sm sm:text-base">
            <p>Details of the kids&apos; performance &mdash; coming soon.</p>
            <p className="opacity-80">
              Barney&apos;s putting the details together. Check back shortly.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title text-xl sm:text-2xl text-center">
            Sign Up a Performer
          </h2>
          {/* TODO @edward: replace placeholder with real sign-up form */}
          <form
            className="mt-6 info-card space-y-4"
            action="mailto:edwardtemperley@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Child&apos;s name
              </label>
              <input
                type="text"
                name="child_name"
                required
                className="mt-1 w-full rounded-md border border-[var(--foreground)]/60 bg-black/40 px-3 py-2 text-sm focus:border-[var(--accent-pink)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Age
              </label>
              <input
                type="number"
                name="age"
                min={0}
                max={18}
                className="mt-1 w-32 rounded-md border border-[var(--foreground)]/60 bg-black/40 px-3 py-2 text-sm focus:border-[var(--accent-pink)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Act / performance
              </label>
              <textarea
                name="act"
                rows={3}
                className="mt-1 w-full rounded-md border border-[var(--foreground)]/60 bg-black/40 px-3 py-2 text-sm focus:border-[var(--accent-pink)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Parent/guardian contact
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-[var(--foreground)]/60 bg-black/40 px-3 py-2 text-sm focus:border-[var(--accent-pink)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-5 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-black hover:brightness-110"
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
