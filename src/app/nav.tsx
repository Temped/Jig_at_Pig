"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string; icon?: boolean };

const links: NavLink[] = [
  { href: "/", label: "Home", icon: true },
  { href: "/event", label: "The Event" },
  { href: "/kids-rave", label: "Kids Rave" },
  { href: "/talent-show", label: "Talent Show" },
  { href: "/tickets", label: "Tickets" },
  { href: "/directions", label: "Directions" },
  { href: "/faq", label: "FAQ" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--foreground)] bg-black/70 backdrop-blur">
      <div className="relative mx-auto flex max-w-5xl min-h-[56px] items-center justify-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="neon-brand sm:hidden text-xl tracking-[0.06em]"
        >
          Jig at the Pig
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-3 text-xs sm:text-sm font-[family-name:var(--font-display)] uppercase tracking-[0.15em]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-label={l.icon ? l.label : undefined}
                  className="nav-link inline-flex items-center px-2 py-1"
                >
                  {l.icon ? (
                    <Image
                      src="/pig-snout-v2.png"
                      alt=""
                      width={64}
                      height={50}
                      className="h-7 w-auto"
                      priority
                    />
                  ) : (
                    l.label
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[var(--foreground)] bg-black/60 text-[var(--foreground)] hover:text-[var(--accent-pink)]"
        >
          <span className="sr-only">Menu</span>
          <svg
            aria-hidden
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="sm:hidden border-t-2 border-[var(--foreground)] bg-black/90 backdrop-blur"
        >
          <ul className="mx-auto max-w-5xl flex flex-col px-4 py-2 font-[family-name:var(--font-display)] uppercase tracking-[0.15em]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="nav-link block px-2 py-3 text-base border-b border-[var(--foreground)]/20 last:border-0"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
