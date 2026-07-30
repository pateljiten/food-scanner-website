import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Food Scanner — Know what's really in your food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Inline the app icon as a data URI so it renders inside the OG image.
const iconSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "app-icon.png")
).toString("base64")}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            width={76}
            height={76}
            alt="Food Scanner logo"
            style={{
              borderRadius: "20px",
              border: "2px solid rgba(255,255,255,0.35)",
            }}
          />
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
