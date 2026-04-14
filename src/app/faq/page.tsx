import type { Metadata } from "next";
import { WhatsAppButton } from "../whatsapp-button";

export const metadata: Metadata = {
  title: "FAQ — Jig at the Pig",
  description:
    "Frequently asked questions about Jig at the Pig — An Adventure Through Time.",
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What time do doors open?",
    a: "4 PM–6 PM for the kids' rave; 8 PM for the adult party.",
  },
  {
    q: "Is the event suitable for children?",
    a: "Kids are actively welcomed for the 4 PM–6 PM slot. The main adult event (8 PM onwards) is 18+ only.",
  },
  {
    q: "Is it indoors or outdoors? What if it rains?",
    a: "Indoors, in the Pig's Nose hall.",
  },
  {
    q: "Can I bring my own food and drink?",
    a: "No. Drinks and food are available at the pub. If you want to eat, please book a table in advance.",
  },
  {
    q: "Are dogs allowed?",
    a: "No.",
  },
  {
    q: "Is there parking on site?",
    a: "Yes, on the village green in Prawle — but if the green is full you may have to park further along the village and walk.",
  },
  {
    q: "Are tickets available on the door?",
    a: "No. Please book in advance.",
  },
  {
    q: "Is the venue accessible for wheelchair users?",
    a: "Wheelchair access to the hall, but not the pub itself.",
  },
  {
    q: "What happens if the event is cancelled?",
    a: "Full refunds, minus booking fees.",
  },
  {
    q: "Who do I contact if I have a question not answered here?",
    a: (
      <>
        Please get in touch with the organisers at{" "}
        {/* TODO @edward: replace with contact form */}
        <a
          href="mailto:edwardtemperley@gmail.com"
          className="underline hover:text-[var(--accent-pink)]"
        >
          edwardtemperley@gmail.com
        </a>
        .
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Questions &amp; Answers
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">FAQ</h1>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              className="info-card group [&[open]]:border-[var(--accent-pink)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-display)] text-base sm:text-lg uppercase tracking-[0.08em]">
                <span>{q}</span>
                <span
                  aria-hidden
                  className="text-[var(--accent-pink)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm sm:text-base leading-relaxed opacity-90">
                {a}
              </div>
            </details>
          ))}
        </div>

        <WhatsAppButton />
      </main>
    </div>
  );
}
