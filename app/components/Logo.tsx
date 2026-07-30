import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl shadow-sm shadow-brand-600/30 transition-transform group-hover:scale-105">
        <Image
          src="/app-icon.png"
          alt="Food Scanner logo"
          width={36}
          height={36}
          className="h-full w-full object-cover"
          priority
          unoptimized
        />
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-brand-950">
        Food<span className="text-brand-600">Scanner</span>
      </span>
    </a>
  );
}
