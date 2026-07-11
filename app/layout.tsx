import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foodscanner.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Food Scanner — Know what's really in your food",
    template: "%s | Food Scanner",
  },
  description:
    "Point your camera at any ingredient label and get an instant AI health score. Food Scanner reads the label for you and tells you what's good, what's not, and why — in seconds.",
  keywords: [
    "food scanner",
    "ingredient scanner",
    "food label scanner",
    "health score app",
    "nutrition app",
    "AI food analysis",
    "healthy eating app",
  ],
  authors: [{ name: "Food Scanner" }],
  openGraph: {
    title: "Food Scanner — Know what's really in your food",
    description:
      "Scan any ingredient label and get an instant AI health score. Coming soon to iOS and Android.",
    url: siteUrl,
    siteName: "Food Scanner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Scanner — Know what's really in your food",
    description:
      "Scan any ingredient label and get an instant AI health score. Coming soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
