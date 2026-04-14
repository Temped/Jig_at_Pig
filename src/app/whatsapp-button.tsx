export function WhatsAppButton() {
  return (
    <div className="mt-12 flex justify-center">
      <a
        href="https://chat.whatsapp.com/JSoJvXsFJNmJRH3dZnOPhK?mode=gi_t"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full border-2 border-[var(--foreground)] bg-[#25D366] px-7 py-3 font-[family-name:var(--font-display)] text-sm sm:text-base uppercase tracking-[0.15em] text-black hover:brightness-110"
      >
        <svg
          aria-hidden
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.05 4.91A10 10 0 0 0 4.93 19.02L3.5 24l5.1-1.34A10 10 0 1 0 19.05 4.91Zm-7.07 15.33a8.29 8.29 0 0 1-4.23-1.16l-.3-.18-3.03.8.81-2.95-.2-.31a8.29 8.29 0 1 1 6.95 3.8Zm4.54-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13s-.64.8-.79.97c-.15.17-.29.19-.54.07a6.84 6.84 0 0 1-2-1.24 7.6 7.6 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.09-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.89 2.1 4.9 4.9 0 0 0 1.02 2.61 11.24 11.24 0 0 0 4.3 3.8c.6.26 1.07.41 1.43.52a3.46 3.46 0 0 0 1.58.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.11-.23-.18-.48-.31Z" />
        </svg>
        Join the WhatsApp Group
      </a>
    </div>
  );
}
