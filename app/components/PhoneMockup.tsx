import { CheckIcon, AlertIcon, LeafIcon } from "./icons";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SCORE = 8;
const progress = CIRCUMFERENCE * (1 - SCORE / 10);

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[310px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.75rem] border border-brand-950/10 bg-brand-950 p-2.5 shadow-2xl shadow-brand-900/30">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-brand-950" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3.5 text-[10px] font-medium text-brand-950">
            <span>9:41</span>
            <span className="tracking-widest">● ● ●</span>
          </div>

          {/* Screen content */}
          <div className="px-5 pb-7 pt-4">
            <div className="flex items-center gap-2 text-brand-700">
              <LeafIcon className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Analysis complete
              </span>
            </div>

            {/* Score ring */}
            <div className="mt-4 flex flex-col items-center">
              <div className="relative h-[132px] w-[132px]">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    fill="none"
                    stroke="#dcfce7"
                    strokeWidth="12"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={progress}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold leading-none text-brand-950">
                    {SCORE}
                    <span className="text-lg text-brand-400">/10</span>
                  </span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-500">
                    Health score
                  </span>
                </div>
              </div>

              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Healthy
              </span>
            </div>

            {/* Summary */}
            <p className="mt-4 text-[11px] leading-relaxed text-brand-950/70">
              Mostly whole-food ingredients with a good source of fiber and
              protein. Watch the added sugar near the end of the list.
            </p>

            {/* Positives */}
            <div className="mt-4 space-y-2">
              <Row good text="Rolled oats & almonds" />
              <Row good text="No artificial colors" />
              <Row text="Contains added sugar" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating verdict chip */}
      <div className="animate-float absolute -right-4 top-24 hidden rounded-2xl border border-brand-100 bg-white/90 px-3.5 py-2.5 shadow-xl shadow-brand-900/10 backdrop-blur sm:block">
        <p className="text-[10px] font-medium text-brand-500">Scanned in</p>
        <p className="text-lg font-bold text-brand-950">3.2s</p>
      </div>
    </div>
  );
}

function Row({ text, good = false }: { text: string; good?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2">
      <span
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
          good ? "bg-brand-500 text-white" : "bg-amber-verdict/15 text-amber-verdict"
        }`}
      >
        {good ? <CheckIcon className="h-3 w-3" /> : <AlertIcon className="h-3 w-3" />}
      </span>
      <span className="text-[11px] font-medium text-brand-950/80">{text}</span>
    </div>
  );
}
