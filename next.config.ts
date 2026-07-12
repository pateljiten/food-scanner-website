import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a minimal, self-contained server bundle (.next/standalone) so the
  // Docker image stays small and doesn't need node_modules at runtime.
  output: "standalone",
};

export default nextConfig;
