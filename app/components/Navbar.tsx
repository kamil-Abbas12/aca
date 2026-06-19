"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// ── SEO: real href values so Google can crawl & index these pages ─────────────
const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Licensing Information", href: "/licensing" },
];

const blogLinks = [
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

 

  return (
    // ── SEO: <header> with role="banner" is a landmark — Googlebot uses it
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-[#2A2650] bg-[#0D0B1A]"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* Logo — alt text describes business, not just "logo" */}
          <Link href="/" aria-label="Top Dog Leads LLC — Affordable Health Insurance Home">
            <Image
              src="/logo.png"
              alt="Top Dog Leads LLC — Affordable Health Insurance"
              width={180}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Nav — wrapped in <nav> with aria-label ───────────── */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3.5 py-1.5 text-[13.5px] text-[#6B6A80] transition-colors hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
              >
                {item.label}
              </Link>
            ))}

          <Link
  href="/blog"
  className="rounded-lg px-3.5 py-1.5 text-[13.5px] text-[#6B6A80] transition-colors hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
>
  Blog
</Link>
          </nav>

          {/* Call Now — <a href="tel:"> is crawlable & adds to LocalBusiness schema */}
          <a
            href="tel:+18668960447"
            aria-label="Call Top Dog Leads LLC now at 1-866-896-0447 for health insurance help"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#7F77DD] bg-[#534AB7] px-4 py-2 text-[13.5px] font-medium text-[#EEEDFE] transition-opacity hover:opacity-90"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">Call Now: </span>+1 866 896 0447
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-[#6B6A80] hover:text-[#EEEDFE]"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile Nav — fully crawlable links in DOM ─────────────────── */}
        {mobileOpen && (
          <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden pb-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3.5 py-2.5 text-sm text-[#6B6A80] hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {blogLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3.5 py-2.5 text-sm text-[#6B6A80] hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M6.6 10.8c1.8 3.5 3.1 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}