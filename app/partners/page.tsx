import Link from "next/link";

const BASE_URL = "https://affordablecareact.topdoglead.com";

export const metadata = {
  title: "Our Partner Carriers | Top Dog Leads LLC",
  description:
    "Top Dog Leads LLC partners with licensed health insurance carriers nationwide to help you compare ACA plans and find affordable coverage that fits your needs.",
  alternates: { canonical: `${BASE_URL}/partners` },
};

// TODO: Replace these placeholders with your actual verified carrier
// partnerships. Listing a specific insurer's name/logo without a real,
// confirmed partnership agreement is a compliance and trust risk — only
// add a carrier here once that relationship is real and confirmed.
const partnerCategories = [
  {
    title: "National Carriers",
    description:
      "Large, well-established health insurance companies offering ACA-compliant plans across multiple states.",
  },
  {
    title: "Regional Providers",
    description:
      "Carriers with strong local networks, often offering more competitive rates in specific states or metro areas.",
  },
  {
    title: "Specialty & Supplemental Plans",
    description:
      "Partners offering dental, vision, and short-term coverage to round out your primary health plan.",
  },
];

export default function PartnersPage() {
  return (
    <main className="bg-[#0D0B1A] text-[#EEEDFE] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#534AB7]/35 bg-[#534AB7]/10 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7F77DD]" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#AFA9EC]">
              Our Network
            </span>
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#EEEDFE]">
            Partner Carriers
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#9b99b3]">
            Top Dog Leads LLC is an independent marketing and lead-generation
            company. We work with a network of licensed health insurance
            carriers and agents so you can compare ACA-compliant plans from
            multiple providers in one place, rather than calling around
            yourself.
          </p>
        </div>

        {/* Partner categories */}
        <div className="grid gap-5 sm:grid-cols-3 mb-14">
          {partnerCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-[#2A2650] bg-[#13102B] p-6"
            >
              <h2 className="text-base font-medium text-[#EEEDFE] mb-2">
                {cat.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#6B6A80]">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why we partner with multiple carriers */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-[#EEEDFE] mb-4">
            Why We Work With Multiple Health Insurance Carriers
          </h2>
          <p className="text-sm leading-relaxed text-[#9b99b3] mb-3">
            No single insurance carrier is the cheapest or the best fit for
            every household. Premiums, deductibles, and provider networks vary
            significantly by state, income level, and family size. By
            comparing plans across our partner carriers, our licensed agents
            can help you find ACA Marketplace coverage that actually matches
            your budget and healthcare needs &mdash; instead of pushing a
            single company&rsquo;s product regardless of fit.
          </p>
          <p className="text-sm leading-relaxed text-[#9b99b3]">
            We are not affiliated with the U.S. government, Healthcare.gov,
            Medicare, or any federal agency. Plan availability, premiums, and
            subsidy eligibility vary by carrier, state, and individual
            circumstances.
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-2xl border border-[#2A2650] bg-[#13102B] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-medium text-[#EEEDFE] mb-1">
              Ready to compare plans from our partner carriers?
            </h3>
            <p className="text-sm text-[#6B6A80]">
              Enter your ZIP code to see what&rsquo;s available in your area.
            </p>
          </div>
          <Link
            href="/#hero"
            className="flex items-center gap-2 bg-[#7F77DD] rounded-xl px-6 py-3 text-sm font-medium text-white whitespace-nowrap flex-shrink-0"
          >
            Compare Plans →
          </Link>
        </div>
      </div>
    </main>
  );
}