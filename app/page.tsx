// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Step from "./components/Steps";
import Healthcare from "./components/Healthcare";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

// ── Page-level metadata (overrides layout defaults for the home page) ──────────
export const metadata: Metadata = {
  title: "Affordable Health Insurance Plans | Top Dog Leads LLC",
  description:
  "Compare ACA-compliant health insurance plans in your area. Licensed agents help you find affordable coverage. Free quote, no credit card.",
  alternates: {
    canonical: "https://affordablecareact.topdoglead.com",
  },
  openGraph: {
    title: "Affordable Health Insurance Plans | Top Dog Leads LLC",
    description:
      "Find affordable ACA health plans in your area. 100,000+ families served. Licensed agents. Get a free quote in 60 seconds.",
    url: "https://affordablecareact.topdoglead.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Top Dog Leads LLC – Affordable Health Insurance",
      },
    ],
  },
};

// ── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Skip-to-content for accessibility (also helps Googlebot) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-700"
      >
        Skip to main content
      </a>


      {/* Wrap page body in <main> with a unique id — critical for semantic HTML */}
      <main id="main-content">
        {/* 
          Each section below should contain a single <h1> (in Hero) and
          <h2> / <h3> for sub-sections.  Make sure those heading tags exist
          inside the component files — Google uses heading hierarchy to
          understand page structure.
        */}
        <Hero />
        <Step />
        <Healthcare />
        <Blog />
      </main>


      {/* ── JSON-LD: FAQPage (great for rich results / "People also ask") ──── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the Affordable Care Act (ACA)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Affordable Care Act (ACA), also known as Obamacare, is a federal law that expanded access to health insurance for millions of Americans by creating the Health Insurance Marketplace, offering subsidies, and requiring plans to cover essential health benefits.",
                },
              },
              {
                "@type": "Question",
                name: "How do I find affordable health insurance near me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter your ZIP code on our site and our licensed agents will compare major medical, short-term, and indemnity plans from top carriers available in your area — at no cost to you.",
                },
              },
              {
                "@type": "Question",
                name: "Is Top Dog Leads LLC affiliated with the government?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Top Dog Leads LLC is an independent marketing and lead generation company. We are not affiliated with the U.S. government, Healthcare.gov, Medicare, or any federal agency.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can I compare health insurance plans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our process takes under 60 seconds. Share your ZIP code, answer a few quick questions, and see your top plan matches side by side — for free.",
                },
              },
              {
                "@type": "Question",
                name: "What types of health plans are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We help you compare major medical (ACA-compliant) plans, short-term health insurance, dental and vision add-ons, indemnity plans, and more from 50+ trusted carrier partners.",
                },
              },
            ],
          }),
        }}
      />

      {/* ── JSON-LD: WebSite with SearchAction (enables Google Sitelinks Search) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Top Dog Leads LLC",
            url: "https://affordablecareact.topdoglead.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://affordablecareact.topdoglead.com/blog?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}