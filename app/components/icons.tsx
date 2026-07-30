import type { SVGProps } from "react";

export function ScanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </svg>
  );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l8 3v5c0 4.5-3 8.5-8 10-5-1.5-8-5.5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function GaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 14 15 9" />
      <path d="M4.5 18a9 9 0 1 1 15 0" />
      <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 12-9 12Z" />
      <path d="M4 20c3-6 7-8 11-9" />
    </svg>
  );
}

// Filled leaf brand mark, matching the mobile app's app icon: a solid white
// leaf with a vein carved out to reveal the green gradient behind it.
export function LeafMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="64" height="64" rx="16" fill="url(#fsLeafGrad)" />
      <path d="M27 47a17 17 0 0 1-17-17c0-12 10-22 39-22 0 20-10 30-22 30Z" fill="#ffffff" />
      <path
        d="M10 47c7-15 17-19 27-22"
        fill="none"
        stroke="url(#fsLeafGrad)"
        strokeWidth={4.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="fsLeafGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#15803d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function AlertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 4 3.1 17a2 2 0 0 0 1.7 3h14.4a2 2 0 0 0 1.7-3L13.7 4a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.1.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.5ZM14.2 6c.6-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.8-1.3Z" />
    </svg>
  );
}

export function AndroidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.6 9.5 19 7a.5.5 0 1 0-.9-.5l-1.4 2.5a10.3 10.3 0 0 0-9.4 0L5.9 6.5A.5.5 0 1 0 5 7l1.4 2.5A7.6 7.6 0 0 0 2.5 15.5h19a7.6 7.6 0 0 0-3.9-6ZM8 13.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  );
}
