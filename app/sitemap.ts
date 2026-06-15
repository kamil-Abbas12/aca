// app/sitemap.ts
// Next.js App Router auto-generates /sitemap.xml from this file.
// Add every public URL you want Google to crawl.

import { MetadataRoute } from "next";

const BASE_URL = "https://affordablecareact.topdoglead.com";

// ── Static blog slugs ──────────────────────────────────────────────────────────
// Replace / extend this list as you publish more posts.
const blogSlugs = [
  "understanding-the-affordable-care-act",
  // "how-to-choose-a-health-plan",
  // "aca-open-enrollment-2025",
  // "short-term-health-insurance-explained",
  // "medicaid-vs-marketplace-plans",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages ─────────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/licensing`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── Blog post pages ───────────────────────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}