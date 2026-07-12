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

### Option A — Vercel

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

### Option B — Google Cloud Run

This repo is container-ready: `next.config.ts` uses `output: "standalone"`, and
the included `Dockerfile` produces a small production image (see also
`.dockerignore`, `.gcloudignore`, `cloudbuild.yaml`).

> **Important:** Cloud Run's filesystem is ephemeral, so the local
> `data/waitlist.json` fallback will lose signups. Set a real backend
> (`WAITLIST_WEBHOOK_URL` **or** `RESEND_API_KEY` + `RESEND_AUDIENCE_ID`) plus
> `NEXT_PUBLIC_SITE_URL` as Cloud Run environment variables.

**One-time setup** (replace `PROJECT_ID`; pick your region):

```bash
gcloud config set project PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud artifacts repositories create web \
  --repository-format=docker --location=us-central1
```

**Deploy from source** (builds the Dockerfile in the cloud — no local Docker needed):

```bash
gcloud run deploy food-scanner-website \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars NEXT_PUBLIC_SITE_URL=https://your-domain,WAITLIST_WEBHOOK_URL=https://...
```

Leave **min instances at 0** (the default) to stay within the free tier and pay
nothing at low traffic. Only raise it if you want to avoid cold starts (~$5–10/mo).

**Continuous deploys from git:** push this repo to GitHub/GitLab/Bitbucket, then
either connect it via Cloud Run → *Create Service → Continuously deploy from a
repository*, or create a Cloud Build trigger pointed at `cloudbuild.yaml`
(override the `_REGION`, `_REPO`, `_SERVICE` substitutions if needed).

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
