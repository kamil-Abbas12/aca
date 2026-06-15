// app/robots.ts
// Next.js App Router auto-generates /robots.txt from this file.

import { MetadataRoute } from "next";

const BASE_URL = "https://affordablecareact.topdoglead.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // never crawl internal API routes
          "/_next/",      // Next.js internals
          "/admin/",      // if you ever add an admin area
        ],
      },
      {
        // Block AI training scrapers (optional but increasingly common)
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}