import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Food Scanner handles your data — what we collect, how we use it, and your choices.",
};

const LAST_UPDATED = "July 11, 2026";
const CONTACT_EMAIL = "contact.foodscanner@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:text-brand-700"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </a>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-brand-950/50">Last updated: {LAST_UPDATED}</p>

          <div className="prose-content mt-10 space-y-10">
            <Intro />

            <Section title="1. Who we are">
              <p>
                Food Scanner (&ldquo;Food Scanner&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo; or &ldquo;our&rdquo;) provides a mobile
                application that scans food ingredient labels and returns an
                AI-generated health analysis. This policy explains how we handle
                information across our website and our mobile app.
              </p>
            </Section>

            <Section title="2. Information we collect">
              <p>We keep data collection to the minimum needed to provide the service.</p>
              <h3>On our website</h3>
              <ul>
                <li>
                  <strong>Waitlist email address.</strong> If you join our
                  waitlist, we store the email address you provide so we can
                  notify you when the app launches.
                </li>
                <li>
                  <strong>Basic technical data.</strong> Like most websites, our
                  hosting provider may process standard log data (such as IP
                  address and browser type) for security and reliability.
                </li>
              </ul>
              <h3>In the mobile app</h3>
              <ul>
                <li>
                  <strong>Photos of labels.</strong> Images you capture or select
                  are processed <strong>on your device</strong> to extract text.
                  Your photos are not uploaded to us or stored on our servers.
                </li>
                <li>
                  <strong>Extracted ingredient text.</strong> The text recognized
                  from a label is sent to our AI analysis provider to generate a
                  health score and summary. This text is used only to produce
                  your result.
                </li>
              </ul>
            </Section>

            <Section title="3. How we use information">
              <ul>
                <li>To provide the core scanning and analysis features of the app.</li>
                <li>To notify waitlist subscribers about the launch and major updates.</li>
                <li>To maintain the security, reliability, and performance of our services.</li>
              </ul>
              <p>
                We do <strong>not</strong> sell your personal information, and we
                do not use your data for advertising.
              </p>
            </Section>

            <Section title="4. Third-party services">
              <p>
                To analyze ingredients, extracted label text is processed by a
                third-party AI provider. To send waitlist emails, we may use a
                reputable email delivery provider. These providers process data
                only on our behalf and under their own security and privacy
                commitments.
              </p>
            </Section>

            <Section title="5. Data retention">
              <p>
                Waitlist emails are kept until you unsubscribe or ask us to remove
                them, or until they are no longer needed. Ingredient text sent for
                analysis is used to return your result and is not retained by us to
                build a profile of you.
              </p>
            </Section>

            <Section title="6. Your rights & choices">
              <ul>
                <li>
                  <strong>Access, correction, or deletion.</strong> You can ask us
                  to access, correct, or delete the personal data we hold about
                  you.
                </li>
                <li>
                  <strong>Unsubscribe.</strong> Every email we send includes an
                  unsubscribe link, and you can opt out at any time.
                </li>
                <li>
                  <strong>Device permissions.</strong> You control camera and photo
                  access through your device settings.
                </li>
              </ul>
            </Section>

            <Section title="7. Children's privacy">
              <p>
                Food Scanner is not directed to children under 13, and we do not
                knowingly collect personal information from them.
              </p>
            </Section>

            <Section title="8. Changes to this policy">
              <p>
                We may update this policy from time to time. When we do, we will
                revise the &ldquo;Last updated&rdquo; date above. Significant
                changes will be communicated where appropriate.
              </p>
            </Section>

            <Section title="9. Contact us">
              <p>
                Questions about this policy or your data? Reach us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-600 hover:text-brand-700">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Intro() {
  return (
    <p className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-brand-950/75">
      Your privacy matters. Food Scanner is built to be private by design:
      label recognition happens on your device, we only process what&apos;s
      needed to give you a result, and we never sell your data.
    </p>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-brand-950">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-brand-950/70">{children}</div>
    </section>
  );
}
