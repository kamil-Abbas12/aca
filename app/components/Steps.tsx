// components/Steps.tsx
import React from "react";
import Link from "next/link";

type StepItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  sub: string;
};

const steps: StepItem[] = [
  {
    title: "Step 01",
    description: "Share your ZIP code",
    sub: "We use your location to find ACA health insurance plans available in your area.",
    icon: <MapPinIcon />,
  },
  {
    title: "Step 02",
    description: "Answer quick questions",
    sub: "Tell us a little about yourself. It takes under 60 seconds.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Step 03",
    description: "Compare & Save",
    sub: "See your top health plan matches side by side and pick what fits best.",
    icon: <ShieldCheckIcon />,
  },
];

export default function Step() {
  return (
    // ── SEO: aria-labelledby ties the section to its <h2> for crawlers ────────
    <section
      aria-labelledby="steps-heading"
      className="bg-[#0D0B1A] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">

        {/* Badge — decorative, aria-hidden */}
        <div className="flex justify-center mb-5" aria-hidden="true">
          <div className="flex items-center gap-2 bg-[#7F77DD]/10 border border-[#7F77DD]/30 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7F77DD]" />
            <span className="text-xs font-medium tracking-widest text-[#AFA9EC] uppercase">
              How it works
            </span>
          </div>
        </div>

        {/* ── SEO: <h2> with keyword-rich text ─────────────────────────────── */}
        <div className="text-center mb-12">
          <h2
            id="steps-heading"
            className="text-3xl sm:text-4xl font-medium leading-snug text-[#EEEDFE]"
          >
            Find Affordable Health Insurance in{" "}
            <span className="text-[#7F77DD]">3 Simple Steps</span>
          </h2>
          <p className="mt-3 text-sm text-[#6B6A80]">
            No forms to fill. No agents to call. Get matched with ACA health plans in minutes.
          </p>
        </div>

        {/* Steps Card — ordered list is semantically correct for sequential steps */}
        <div className="rounded-2xl border border-[#2A2650] bg-[#13102B] overflow-hidden">
          <ol className="grid grid-cols-1 md:grid-cols-3" aria-label="How to find health insurance with Top Dog Leads LLC">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={`flex flex-col items-center text-center px-7 py-11 ${
                  index !== steps.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#2A2650]"
                    : ""
                }`}
              >
                {/* Step number — visible but also in aria via the <h3> */}
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#534AB7] mb-5" aria-hidden="true">
                  {step.title}
                </p>
                <div className="relative mb-6" aria-hidden="true">
                  <div className="absolute inset-[-8px] rounded-[22px] border border-[#7F77DD]/20" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#534AB7]/20 border border-[#7F77DD]/40 flex items-center justify-center text-[#AFA9EC]">
                    {step.icon}
                  </div>
                </div>
                {/* ── SEO: <h3> under the section <h2> — correct hierarchy ── */}
                <h3 className="text-base font-medium text-[#EEEDFE] mb-2">
                  {step.description}
                </h3>
                <p className="text-sm text-[#6B6A80] leading-relaxed max-w-[170px]">
                  {step.sub}
                </p>
              </li>
            ))}
          </ol>

          <div className="h-px bg-[#2A2650]" />

          {/* Card Footer */}
          <div className="flex items-center justify-between px-8 py-5 gap-4">
            <p className="text-sm text-[#6B6A80] flex items-center gap-2">
              🔒 Your data is never sold or shared.
            </p>
            {/* ── SEO: <a> is crawlable; <button> without href is not ──────── */}
            <Link
              href="/#hero"
              className="flex items-center gap-2 bg-[#534AB7] border border-[#7F77DD] rounded-xl px-5 py-2.5 text-sm font-medium text-[#EEEDFE] whitespace-nowrap"
            >
              Get started free →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 rounded-2xl border border-[#2A2650] bg-[#13102B] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            {/* ── SEO: <h3> — continues heading hierarchy h2 → h3 ─────────── */}
            <h3 className="text-lg font-medium text-[#EEEDFE] mb-1">
              More choices. Better rates. Faster results.
            </h3>
            <p className="text-sm text-[#6B6A80]">
              Join 50,000+ users who found better health coverage this year.
            </p>
            <ul className="flex flex-wrap gap-2 mt-4" aria-label="Plan benefits">
              {["No credit card", "Cancel anytime", "2-min setup"].map((t) => (
                <li key={t}>
                  <span className="text-xs text-[#AFA9EC] bg-[#534AB7]/15 border border-[#7F77DD]/30 rounded-full px-3 py-1">
                    ✓ {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/#hero"
            aria-label="Start comparing health insurance plans now"
            className="flex items-center gap-2 bg-[#7F77DD] rounded-xl px-6 py-3 text-sm font-medium text-white whitespace-nowrap flex-shrink-0"
          >
            🚀 Start now
          </Link>
        </div>

      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z" />
      <circle cx="12" cy="8.5" r="2.5" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.5 9-7 10C8.5 20 5 16 5 11V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}