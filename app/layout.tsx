import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://affordablecareact.topdoglead.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Primary SEO ──────────────────────────────────────────────────────────────
  title: {
    default: "Affordable Health Insurance Plans | Top Dog Leads LLC",
    template: "%s | Top Dog Leads LLC",
  },
  description:
    "Compare ACA-compliant health insurance plans in your area. Top Dog Leads LLC connects you with licensed agents to find affordable coverage — major medical, short-term & more. Get a free quote today.",
  keywords: [
    "affordable health insurance",
    "ACA health plans",
    "affordable care act plans",
    "compare health insurance quotes",
    "health insurance marketplace",
    "cheap health coverage",
    "obamacare plans 2025",
    "individual health insurance",
    "family health insurance plans",
    "short-term health insurance",
    "licensed health insurance agents",
    "health coverage by zip code",
    "Top Dog Leads",
    "topdoglead health insurance",
  ],
  authors: [{ name: "Top Dog Leads LLC", url: BASE_URL }],
  creator: "Top Dog Leads LLC",
  publisher: "Top Dog Leads LLC",
  category: "Health Insurance",

  // ── Canonical & Robots ───────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Top Dog Leads LLC",
    title: "Affordable Health Insurance Plans | Top Dog Leads LLC",
    description:
      "Compare ACA-compliant health plans from top carriers. Find affordable coverage for you and your family. Free quotes — no credit card required.",
    images: [
      {
        url: "/og-image.png", // create a 1200×630 branded image and place it in /public
        width: 1200,
        height: 630,
        alt: "Top Dog Leads LLC – Affordable Health Insurance",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Affordable Health Insurance Plans | Top Dog Leads LLC",
    description:
      "Find affordable ACA health plans in your area. Licensed agents. Real savings. Get a free quote now.",
    images: ["/og-image.png"],
    creator: "@topdogleads", // update to your real handle
  },

  // ── Verification (add your real tokens from each platform) ───────────────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "REPLACE_WITH_BING_WEBMASTER_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ── JSON-LD: Organization ───────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Top Dog Leads LLC",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-866-896-0447",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
              sameAs: [
                // Add your real social profile URLs:
                // "https://www.facebook.com/topdogleads",
                // "https://twitter.com/topdogleads",
              ],
            }),
          }}
        />

        {/* ── JSON-LD: LocalBusiness / InsuranceAgency ────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Top Dog Leads LLC",
              description:
                "Independent health insurance marketing company connecting consumers with licensed insurance professionals for ACA, short-term, and indemnity plans.",
              url: BASE_URL,
              telephone: "+1-866-896-0447",
              priceRange: "Free quotes",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2000000",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}