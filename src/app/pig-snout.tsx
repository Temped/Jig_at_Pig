export function PigSnout({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 180"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Snout outline: rounded dome */}
      <path d="M30 150 Q30 40 120 30 Q210 40 210 150 Q210 162 195 162 L45 162 Q30 162 30 150 Z" />
      {/* Nostrils */}
      <ellipse cx="88" cy="100" rx="16" ry="24" />
      <ellipse cx="152" cy="100" rx="16" ry="24" />
    </svg>
  );
}
