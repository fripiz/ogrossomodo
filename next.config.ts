import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Environnement Vercel (production / preview / development) figé au build :
  // le mode brouillon (textes « à compléter ») n'apparaît jamais en production.
  env: {
    NEXT_PUBLIC_SITE_ENV: process.env.VERCEL_ENV ?? "development",
  },
};

export default nextConfig;
