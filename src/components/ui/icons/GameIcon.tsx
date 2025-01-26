export default function GameIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={className}
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="17" cy="12" r="1.5" />
      <circle cx="14" cy="12" r="1.5" />
      <line x1="7" y1="10" x2="7" y2="14" />
      <line x1="5" y1="12" x2="9" y2="12" />
    </svg>
  )
}
