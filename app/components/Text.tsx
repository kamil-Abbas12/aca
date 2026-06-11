// components/text.tsx
import React from "react";

export default function Text() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-6 text-center text-[11px] leading-5 text-[#666666] md:text-xs md:leading-6">
          <p>
            This is a solicitation for insurance. HealthCare.com is a
            non-government website of HealthCare.com Insurance Services, LLC, a
            health insurance agency that presents health plans, which may
            include Affordable Care Act (ACA) plans, short-term medical
            insurance or indemnity insurance based on the consumer&apos;s
            selection. Qualified ACA plans must meet or exceed the essential
            benefit requirements of the Affordable Care Act; non-ACA plans are
            not required to provide all of the essential benefit requirements
            contained in the Affordable Care Act. Pre-existing condition
            provisions, benefit availability, limitations and exclusions vary by
            plan type and state. You should review all plan details and product
            brochures before purchase. To qualify for ACA health insurance
            coverage outside of the open enrollment period, you must meet
            special enrollment requirements.
          </p>

          <p>
            *Eligibility for Affordable Care Act (ACA) Advance Premium Tax
            Credit (APTC) and cost-sharing reductions is based on annual
            federal income thresholds, household size, and plan availability
            within the applicable service area. If enhanced tax subsidies
            enacted under the American Rescue Plan Act (ARPA) and Inflation
            Reduction Act (IRA) are unavailable, premium tax credit amounts may
            be reduced. For plan year 2026, eligible enrollees may have access
            to ACA coverage at or below $50 after the APTC is applied, subject
            to federal eligibility determinations. Premium rates, plan
            availability, and subsidy amounts vary by state and marketplace.
            Final eligibility and premium obligations are determined by the
            Health Insurance Marketplace under Internal Revenue Code §36B and
            applicable federal regulations. &ldquo;Plan Year 2026 Marketplace
            Plans and Prices Fact Sheet.&rdquo; CMS.gov, October 28, 2025.
            https://www.cms.gov/newsroom/fact-sheets/plan-year-2026-marketplace-plans-prices-fact-sheet
          </p>
        </div>
      </div>
    </section>
  );
}
