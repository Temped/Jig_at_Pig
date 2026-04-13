import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/event", label: "The Event" },
  { href: "/kids", label: "Kids Rave" },
  { href: "/tickets", label: "Tickets" },
  { href: "/directions", label: "Directions" },
  { href: "/faq", label: "FAQ" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--foreground)] bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="neon-brand shrink-0 text-base sm:text-xl tracking-[0.08em]"
        >
          Jig at the Pig
        </Link>
        <nav className="min-w-0 flex-1">
          <ul className="flex items-center justify-end gap-3 overflow-x-auto whitespace-nowrap text-xs sm:text-sm font-[family-name:var(--font-display)] uppercase tracking-[0.15em]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="nav-link inline-block px-2 py-1"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
