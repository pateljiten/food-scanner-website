import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Basic email validation
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

type Entry = { email: string; joinedAt: string };

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const joinedAt = new Date().toISOString();

  try {
    // Pick a storage backend based on which env vars are configured.
    // This lets the same code run locally (file) and on serverless (provider).
    if (process.env.WAITLIST_WEBHOOK_URL) {
      await saveToWebhook(email, joinedAt);
    } else if (process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID) {
      await saveToResend(email);
    } else {
      const added = await saveToFile(email, joinedAt);
      if (!added) {
        return NextResponse.json({
          message: "You're already on the list — see you at launch!",
        });
      }
    }
  } catch (err) {
    // Never lose a signup silently — log it so it can be recovered.
    console.error("Waitlist persistence failed:", err);
    console.log("Waitlist signup (not persisted):", email);
  }

  return NextResponse.json({ message: "You're on the list!" });
}

/**
 * Local JSON file storage. Great for development. Returns false if the email
 * was already present. Note: read-only on most serverless hosts (Vercel).
 */
async function saveToFile(email: string, joinedAt: string): Promise<boolean> {
  let entries: Entry[] = [];
  try {
    entries = JSON.parse(await fs.readFile(DATA_FILE, "utf8")) as Entry[];
  } catch {
    entries = [];
  }
  if (entries.some((e) => e.email === email)) return false;
  entries.push({ email, joinedAt });
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
  return true;
}

/**
 * Generic webhook — works with a Google Sheets Apps Script, Zapier, Make, or
 * any endpoint that accepts a JSON POST. Set WAITLIST_WEBHOOK_URL.
 */
async function saveToWebhook(email: string, joinedAt: string): Promise<void> {
  const res = await fetch(process.env.WAITLIST_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, joinedAt, source: "food-scanner-website" }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

/**
 * Resend Audiences (https://resend.com). Set RESEND_API_KEY and
 * RESEND_AUDIENCE_ID. No SDK needed — this uses the REST API directly.
 */
async function saveToResend(email: string): Promise<void> {
  const res = await fetch(
    `https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    }
  );
  // 409 = already a contact; treat as success.
  if (!res.ok && res.status !== 409) {
    throw new Error(`Resend responded ${res.status}`);
  }
}
