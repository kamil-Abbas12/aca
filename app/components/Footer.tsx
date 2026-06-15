// components/Footer.tsx
import React from "react";
import Link from "next/link";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l1.88-1.88a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C8.92 21 3 15.08 3 8a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-1.43 1.8z" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M11.197 2.195a1 1 0 01.606 0l7 2.333A1 1 0 0120 5.472v5.528c0 5.017-3.743 9.59-9 10.454-5.257-.864-9-5.437-9-10.454V5.472a1 1 0 01.197-.944l7-2.333zM10.293 12.293a1 1 0 011.414 0L13 13.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414L8.707 14.293a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

// ── SEO: real hrefs — every link Google can crawl counts toward site structure
const quickLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms & conditions", href: "/terms" },
  { label: "Do not call policy", href: "/do-not-call" },
  { label: "Licensing information", href: "/licensing" },
  { label: "Partner companies", href: "/partners" },
];

export default function Footer() {
  return (
    // ── SEO: <footer> with role="contentinfo" is a landmark element ───────────
    <footer role="contentinfo" className="bg-[#0D0B1A] text-[#EEEDFE]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">

        {/* Call banner */}
        <div className="flex flex-col gap-4 rounded-2xl border border-[#2A2650] bg-[#13102B] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-medium text-[#EEEDFE]">
              Need help finding the right health coverage?
            </p>
            <p className="mt-1 text-sm text-[#6B6A80]">
              Speak with a licensed insurance specialist today — free of charge.
            </p>
          </div>
          {/* ── SEO: tel: link is crawlable & reinforces LocalBusiness schema */}
          <a
            href="tel:+18668960447"
            aria-label="Call Top Dog Leads LLC at 1-866-896-0447 for free health insurance help"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#7F77DD] bg-[#534AB7] px-5 py-3 text-lg font-medium text-[#EEEDFE] whitespace-nowrap"
          >
            <PhoneIcon className="h-5 w-5" />
            +1 866 896 0447
          </a>
        </div>

        <div className="my-8 border-t border-[#2A2650]" />

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7F77DD]/35 bg-[#7F77DD]/15 text-[#7F77DD]">
                <ShieldCheckIcon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-[#EEEDFE]">Top Dog Leads LLC</span>
            </div>
            <p className="text-sm leading-relaxed text-[#6B6A80]">
              We help individuals and families compare{" "}
              <strong className="font-normal text-[#AFA9EC]">affordable health insurance</strong>{" "}
              options from trusted carriers — simple, transparent, stress-free.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Trust signals">
              {["Secure", "Licensed", "Trusted"].map((t) => (
                <li key={t}>
                  <span className="rounded-full border border-[#7F77DD]/30 bg-[#534AB7]/12 px-3 py-1 text-xs text-[#7F77DD]">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links — nav landmark helps Googlebot understand site structure */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-sm font-medium text-[#EEEDFE]">Quick links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {/* ── SEO: <Link> over <a href="#"> — real URLs are crawlable */}
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm text-[#6B6A80] hover:text-[#AFA9EC]"
                  >
                    <ChevronIcon className="h-3 w-3 text-[#534AB7]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company info */}
          <div>
            <h3 className="mb-4 text-sm font-medium text-[#EEEDFE]">Company information</h3>
            {/* ── SEO: footer text gives Google entity context about the business */}
            <p className="text-sm leading-relaxed text-[#6B6A80]">
              Top Dog Leads LLC is an independent marketing and lead generation
              company that connects consumers with licensed health insurance professionals.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#6B6A80]">
              Not affiliated with the U.S. government, Healthcare.gov, Medicare,
              or any federal agency.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#6B6A80]">
              Health plan availability and premiums vary by carrier, state, and
              individual circumstances.
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-[#2A2650]" />

        {/* Privacy + Disclosure */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-medium text-[#EEEDFE]">Privacy commitment</h3>
            <p className="text-xs leading-relaxed text-[#6B6A80]">
              We value your privacy and are committed to protecting your personal
              information. Contact our support team to exercise your privacy rights
              or update your data.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-[#EEEDFE]">Important disclosure</h3>
            <p className="text-xs leading-relaxed text-[#6B6A80]">
              By submitting your information, you agree that{" "}
              <span className="font-medium text-[#AFA9EC]">Top Dog Leads LLC</span>{" "}
              and its licensed partners may contact you regarding insurance products,
              even if your number is on a Do Not Call registry. Consent is not
              required to purchase any product or service.
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-[#2A2650]" />

        {/* Bottom */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            {/* ── SEO: copyright signals content freshness ─────────────── */}
            <p className="text-xs text-[#6B6A80]">
              © {new Date().getFullYear()} Top Dog Leads LLC. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-[#3C3A50]">
              Your information is protected using industry-standard security practices.
            </p>
          </div>
          <p className="text-sm font-medium text-[#AFA9EC]">
            Better coverage. Better choices. Better for you.
          </p>
        </div>

      </div>
    </footer>
  );
}