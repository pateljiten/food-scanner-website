import PhoneMockup from "./components/PhoneMockup";
import Reveal from "./components/Reveal";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WaitlistForm from "./components/WaitlistForm";
import {
  ScanIcon,
  SparkIcon,
  ShieldIcon,
  BoltIcon,
  GaugeIcon,
  ListIcon,
  GlobeIcon,
  AppleIcon,
  AndroidIcon,
} from "./components/icons";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="animate-blob absolute right-0 top-32 h-80 w-80 rounded-full bg-leaf/20 blur-3xl [animation-delay:3s]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Coming soon to iOS &amp; Android
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
            Know what&apos;s{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-brand-600">really</span>
              <svg
                className="absolute -bottom-1 left-0 z-0 w-full text-brand-300"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 9c40-6 156-6 196 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            in your food.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-950/70">
            Point your camera at any ingredient label. Food Scanner reads it for
            you and returns an instant, AI-powered health score — what&apos;s good,
            what&apos;s not, and why.
          </p>

          <div className="mt-8 max-w-md" id="waitlist-top">
            <WaitlistForm />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-950/60">
            <div className="flex items-center gap-2">
              <AppleIcon className="h-5 w-5 text-brand-950/70" />
              <span>iOS</span>
            </div>
            <div className="flex items-center gap-2">
              <AndroidIcon className="h-5 w-5 text-brand-950/70" />
              <span>Android</span>
            </div>
            <span className="h-4 w-px bg-brand-200" />
            <span className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-brand-500" />
              On-device scanning
            </span>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* How it works                                                                */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    {
      icon: ScanIcon,
      title: "Scan the label",
      body: "Snap a photo of the ingredients list, or pick one from your gallery. That's it.",
    },
    {
      icon: SparkIcon,
      title: "AI reads & analyzes",
      body: "On-device text recognition pulls out the ingredients, then AI evaluates them for health impact.",
    },
    {
      icon: GaugeIcon,
      title: "Get your verdict",
      body: "See a clear 1–10 score, a Healthy / Moderate / Unhealthy verdict, and the reasons behind it.",
    },
  ];

  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionEyebrow>How it works</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
          Three taps from label to answer
        </h2>
        <p className="mt-4 text-brand-950/60">
          No barcode databases. No manual typing. Just point, scan, and understand.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-8 md:grid-cols-3">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 120}>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-brand-100 bg-white text-brand-600 shadow-sm shadow-brand-900/5">
                <step.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-950">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-950/60">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Features                                                                    */
/* -------------------------------------------------------------------------- */

function Features() {
  const features = [
    {
      icon: BoltIcon,
      title: "Instant results",
      body: "Get a full health breakdown in seconds — no waiting, no sign-up hoops.",
    },
    {
      icon: GaugeIcon,
      title: "Clear health score",
      body: "A simple 1–10 rating with a color-coded verdict you can read at a glance.",
    },
    {
      icon: ListIcon,
      title: "Concerns & positives",
      body: "See exactly which ingredients count against a product and which ones help.",
    },
    {
      icon: ShieldIcon,
      title: "Private by design",
      body: "Text recognition runs on your device, so your photos stay on your phone.",
    },
    {
      icon: SparkIcon,
      title: "AI-powered insight",
      body: "Advanced AI explains the 'why' in plain language — like a nutritionist in your pocket.",
    },
    {
      icon: GlobeIcon,
      title: "Any label, anywhere",
      body: "Works on snacks, drinks, packaged foods and more, wherever you shop.",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Features</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Everything you need to shop smarter
          </h2>
          <p className="mt-4 text-brand-950/60">
            Built for the aisle — fast, clear, and honest about what&apos;s in your basket.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-2xl border border-brand-100 bg-brand-50/40 p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-950/60">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

function Faq() {
  const faqs = [
    {
      q: "When will Food Scanner launch?",
      a: "We're putting the finishing touches on the app now. Join the waitlist and you'll be the first to know the moment it's available on the App Store and Google Play.",
    },
    {
      q: "How does the scanning work?",
      a: "Take a photo of a product's ingredient list. The app uses on-device text recognition to read the label, then analyzes the ingredients with AI to produce a health score and explanation.",
    },
    {
      q: "Is my data private?",
      a: "Yes. The text recognition happens right on your device. We only send the extracted ingredient text for analysis — never your photos.",
    },
    {
      q: "Is the health score medical advice?",
      a: "No. The score and analysis are based only on the ingredients printed on the product label — not on your individual health, allergies, or medical conditions. Food Scanner doesn't determine whether a food is suitable for you personally. Always consult your doctor or a qualified professional for advice about your diet and health.",
    },
    {
      q: "Will it be free?",
      a: "There will be a free way to try Food Scanner. Full pricing details will be shared closer to launch with everyone on the waitlist.",
    },
    {
      q: "What products does it work on?",
      a: "Any packaged food or drink with a printed ingredients list — snacks, cereals, sauces, beverages and more.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <Reveal className="text-center">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
          Questions, answered
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 70}>
            <details className="group rounded-2xl border border-brand-100 bg-white p-5 open:shadow-md open:shadow-brand-900/5 [&_summary]:list-none">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-semibold text-brand-950">{item.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600 transition group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-950/65">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Final CTA                                                                   */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section id="waitlist" className="px-5 pb-24 pt-4 sm:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-16 text-center shadow-2xl shadow-brand-900/30 sm:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
        </div>

        <Reveal className="relative mx-auto max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be first in line at launch
          </h2>
          <p className="mt-4 text-brand-50/85">
            Join the waitlist and get early access to Food Scanner, plus a heads-up
            the day it goes live.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm variant="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared                                                                      */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
      {children}
    </span>
  );
}
