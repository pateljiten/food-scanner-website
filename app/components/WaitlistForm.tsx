"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(data.message || "You're on the list!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl px-5 py-4 ${
          variant === "dark"
            ? "bg-white/10 text-white ring-1 ring-white/20"
            : "bg-brand-50 text-brand-800 ring-1 ring-brand-200"
        }`}
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
          <CheckIcon className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold">You&apos;re on the list! 🎉</p>
          <p className={`text-xs ${variant === "dark" ? "text-white/70" : "text-brand-600"}`}>
            We&apos;ll email you the moment Food Scanner launches.
          </p>
        </div>
      </div>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          disabled={status === "loading"}
          className={`h-13 w-full rounded-full border px-5 py-3.5 text-sm outline-none transition focus:ring-4 disabled:opacity-60 ${
            isDark
              ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/10"
              : "border-brand-200 bg-white text-brand-950 placeholder:text-brand-400 focus:border-brand-500 focus:ring-brand-500/15"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`inline-flex h-13 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition active:scale-[0.98] disabled:opacity-70 ${
            isDark
              ? "bg-white text-brand-700 shadow-black/20 hover:bg-brand-50"
              : "bg-brand-600 text-white shadow-brand-600/30 hover:bg-brand-700"
          }`}
        >
          {status === "loading" ? "Joining…" : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className={`mt-2 pl-2 text-xs ${isDark ? "text-red-200" : "text-red-verdict"}`}>
          {message}
        </p>
      )}
      <p className={`mt-2.5 pl-2 text-xs ${isDark ? "text-white/60" : "text-brand-500"}`}>
        No spam. Just one email when we launch.
      </p>
    </form>
  );
}
