# Food Scanner — Marketing Website

A modern "coming soon" landing page for the **Food Scanner** mobile app, with an
email waitlist signup. Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Features

- Polished single-page landing site (hero, how-it-works, features, FAQ, CTA)
- Email waitlist capture with a small API route
- Fully responsive, green health-themed design
- SEO + Open Graph metadata, branded SVG favicon
- Scroll-reveal animations and an animated app mockup

## Getting started

```bash
npm install      # already run during scaffolding
npm run dev      # start the dev server at http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
├── layout.tsx              # Root layout + SEO metadata
├── page.tsx                # Landing page (all sections)
├── globals.css             # Theme tokens (brand palette) + animations
├── icon.svg                # Branded favicon
├── api/
│   └── waitlist/route.ts   # POST endpoint for email signups
└── components/
    ├── Logo.tsx
    ├── PhoneMockup.tsx      # Animated in-app result screen
    ├── WaitlistForm.tsx     # Client-side signup form
    ├── Reveal.tsx           # Scroll-reveal wrapper
    └── icons.tsx            # SVG icon set
```

## Waitlist storage

The waitlist API (`POST /api/waitlist` with `{ "email": "..." }`) automatically
picks a backend based on which environment variables are set — no code changes
needed:

| Env vars set | Backend used |
|---|---|
| `WAITLIST_WEBHOOK_URL` | Posts each signup to your webhook (Google Sheet Apps Script, Zapier, Make, …) |
| `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` | Adds the contact to a [Resend](https://resend.com) audience |
| _(none)_ | Local `data/waitlist.json` file — **dev only** (serverless filesystems are read-only) |

Copy `.env.example` to `.env.local` and fill in whichever option you want. For
production on a serverless host, use the webhook or Resend option.

## Environment variables

See `.env.example`. All are optional:

- `NEXT_PUBLIC_SITE_URL` — your real domain (used for SEO, sitemap, robots, OG image)
- `WAITLIST_WEBHOOK_URL` — generic webhook for signups
- `RESEND_API_KEY` / `RESEND_AUDIENCE_ID` — Resend Audiences integration

## Deploy

The easiest path is [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel            # follow the prompts
```

Then, in the Vercel dashboard, add your environment variables (`NEXT_PUBLIC_SITE_URL`
and a waitlist backend) and redeploy. Or run a production build locally:

```bash
npm run build
npm run start
```

## Pages & routes

- `/` — landing page
- `/privacy` — Privacy Policy (link this URL in your App Store / Google Play listing)
- `/api/waitlist` — email signup endpoint
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image` — generated automatically

## Customizing

- **Brand colors** — edit the `--color-brand-*` tokens in `app/globals.css`.
- **Copy** — all text lives in `app/page.tsx`.
- **Store links** — once the app is live, replace the "Coming soon" badge and
  waitlist CTA with real App Store / Google Play buttons.
- **Domain / social image** — update `siteUrl` and add an `opengraph-image` in
  `app/layout.tsx`.
