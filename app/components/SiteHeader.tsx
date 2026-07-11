import Logo from "./Logo";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-950/70 md:flex">
          <a href="/#how" className="transition hover:text-brand-700">How it works</a>
          <a href="/#features" className="transition hover:text-brand-700">Features</a>
          <a href="/#faq" className="transition hover:text-brand-700">FAQ</a>
        </nav>
        <a
          href="/#waitlist"
          className="inline-flex h-10 items-center rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
