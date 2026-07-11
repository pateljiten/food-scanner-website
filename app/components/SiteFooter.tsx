import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-950/60">
          <a href="/#how" className="transition hover:text-brand-700">How it works</a>
          <a href="/#features" className="transition hover:text-brand-700">Features</a>
          <a href="/#faq" className="transition hover:text-brand-700">FAQ</a>
          <a href="/privacy" className="transition hover:text-brand-700">Privacy</a>
        </nav>
        <p className="text-xs text-brand-950/50">
          © {new Date().getFullYear()} Food Scanner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
