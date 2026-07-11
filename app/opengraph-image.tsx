import { ImageResponse } from "next/og";

export const alt = "Food Scanner — Know what's really in your food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #15803d 0%, #16a34a 55%, #22c55e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.35)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 12-9 12Z" />
              <path d="M4 20c3-6 7-8 11-9" />
            </svg>
          </div>
          <span style={{ fontSize: "40px", fontWeight: 700 }}>Food Scanner</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ fontSize: "76px", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2px" }}>
            Know what&apos;s really
            <br />
            in your food.
          </span>
          <span style={{ fontSize: "34px", color: "rgba(255,255,255,0.9)", maxWidth: "900px" }}>
            Scan any ingredient label for an instant AI health score.
          </span>
        </div>

        {/* Footer badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "26px",
              fontWeight: 600,
              padding: "12px 28px",
              borderRadius: "999px",
              background: "white",
              color: "#15803d",
            }}
          >
            Coming soon · iOS &amp; Android
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
