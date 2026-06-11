// components/footer.tsx
import React from "react";

const leftLinks = [
  { label: "About our company", href: "#" },
  { label: "Jobs", href: "#", hiring: true },
  { label: "Contact Us", href: "#" },
  { label: "Licensing", href: "#" },
];

const rightLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Do Not Call Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Partner Companies", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2338] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-10">
        {/* Top row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Looking for a health insurance quote?
            </p>
            <a
              href="tel:8773704992"
              className="mt-1 inline-flex items-center gap-2 text-[28px] font-bold leading-none text-[#f28a3a]"
            >
              <PhoneIcon />
              <span className="text-2xl md:text-[2rem]">877-370-4992</span>
            </a>
          </div>

          <div className="flex items-center gap-5 text-white md:pt-1">
            <a href="#" aria-label="Facebook" className="opacity-95 hover:opacity-100">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="opacity-95 hover:opacity-100">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-95 hover:opacity-100">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-95 hover:opacity-100">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="my-6 border-t border-white/15" />

        {/* Middle */}
        <div className="grid gap-8 md:grid-cols-[200px_200px_1fr]">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              About Healthcare.com
            </h3>

            <div className="grid grid-cols-1 gap-3 text-[15px] leading-6 text-white sm:grid-cols-2 sm:gap-x-8">
              <div className="space-y-3">
                {leftLinks.map((item) => (
                  <div key={item.label}>
                    <a href={item.href} className="underline underline-offset-2">
                      {item.label}
                    </a>
                    {item.hiring && (
                      <span className="ml-2 inline-flex rounded-full bg-[#2ea8df] px-2 py-[2px] text-[11px] font-semibold text-white">
                        We Are Hiring
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {rightLinks.map((item) => (
                  <div key={item.label}>
                    <a href={item.href} className="underline underline-offset-2">
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-[14px] leading-6 text-[#e1e7ed]">
            <p>
              <span className="font-semibold text-[#f28a3a]">Healthcare.com</span>{" "}
              is a website domain of HealthCare.com Insurance Services, LLC, a
              subsidiary of HealthCare, Inc., a privately-owned{" "}
              <span className="font-semibold">non-government website</span>, not
              to be confused with HealthCare.gov. This website serves as an
              invitation for you, the customer, to inquire about further
              information regarding health insurance, and submission of your
              contact information constitutes permission for an agent to contact
              you with further information, including complete details on cost
              and coverage of health insurance marketed by Healthcare.com
              Insurance Services, LLC or HealthCare, Inc. subsidiary Pivot
              Health Holdings, LLC.
            </p>
          </div>
        </div>

        <div className="my-6 border-t border-white/15" />

        {/* Privacy note */}
        <div className="text-[14px] leading-6 text-[#e1e7ed]">
          We are committed to protecting and respecting your privacy. If you
          don&apos;t want to share your information please{" "}
          <a href="#" className="font-semibold text-[#f28a3a] underline underline-offset-2">
            submit a request from our contact page
          </a>
          . If you want to exercise your privacy rights, please use our{" "}
          <a href="#" className="font-semibold text-[#f28a3a] underline underline-offset-2">
            Data Privacy Rights Request Form
          </a>
          .
        </div>

        <div className="my-6 border-t border-white/15" />

        {/* Bottom */}
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-[#e1e7ed]">
            Copyright © 2006-2026 HealthCare, Inc.
          </p>

          <button
            type="button"
            aria-label="Accessibility"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#37b4f2] bg-[#0f2a42]"
          >
            <AccessibilityIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M6.6 10.8c1.8 3.5 3.1 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M13.5 22v-8.2H16l.4-3h-2.9V8.9c0-.9.2-1.5 1.5-1.5h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H8v3h2.5V22h3Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M18.9 7.1c.8-.1 1.5-.5 2.1-1-.3.9-.9 1.6-1.7 2.1v.5c0 5.3-4 11.3-11.3 11.3-2.2 0-4.3-.6-6-1.8h.9c1.9 0 3.6-.6 5-1.8-1.8 0-3.2-1.2-3.7-2.8.3.1.5.1.8.1.4 0 .7 0 1-.1-1.8-.4-3.1-2-3.1-3.9v-.1c.5.3 1.1.5 1.8.5-1.1-.7-1.8-1.9-1.8-3.2 0-.7.2-1.4.6-2 2 2.5 5 4.1 8.4 4.3-.1-.3-.1-.6-.1-.9 0-2.2 1.8-4 4-4 1.2 0 2.2.5 2.9 1.3.9-.2 1.7-.5 2.5-1-.3.9-.9 1.6-1.7 2.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.5 1.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M4.98 3.5A1.75 1.75 0 1 1 5 7a1.75 1.75 0 0 1-.02-3.5ZM3.5 8.5h3V20h-3V8.5Zm5.5 0h2.9v1.6h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V20h-3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3V8.5Z" />
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#37b4f2]" fill="none" aria-hidden="true">
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <path
        d="M6 9h12M12 7v10M9 21l3-5 3 5M8 12l4 2 4-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
