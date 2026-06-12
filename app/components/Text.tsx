// components/text.tsx
import React from "react";

export default function Text() {
  return (
    <section className="bg-[#f4f8fb] py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-4 rounded-2xl border border-[#e6ecf2] bg-white p-5 shadow-sm md:p-8">
          {/* Disclaimer */}
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
              <ShieldInfoIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-sm leading-6 text-[#4b5563] md:text-[15px]">
              <h3 className="mb-1 font-bold text-slate-800">
                Disclaimer:{" "}
                <span className="text-blue-600">General Information</span>
              </h3>
              <p>
                The content on this website, TopDogLeadsLLC.com, is for
                general informational purposes only. Top Dog Leads LLC is a
                health insurance agency and is not connected with or endorsed
                by the U.S. government or the federal Medicare program. The
                information provided is not intended to be tax, legal, or
                financial advice. Please consult with a qualified professional
                for advice based on your individual circumstances.
              </p>
            </div>
          </div>

          {/* Info callout */}
          <div className="flex gap-3 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-[#4b5563] md:text-[15px]">
            <InfoIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <p>
              We do not offer every plan available in your area. Currently, we
              represent multiple organizations which offer products in your
              area. Please contact{" "}
              <a href="https://www.medicare.gov" className="font-semibold text-blue-600 underline underline-offset-2">
                Medicare.gov
              </a>
              , 1-800-MEDICARE, or your local State Health Insurance Program
              (SHIP) to get information on all of your options.
            </p>
          </div>

          <div className="border-t border-[#e6ecf2]" />

          {/* Disclosure */}
          <div className="flex gap-4 pt-2">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-50">
              <HandshakeIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-sm leading-6 text-[#4b5563] md:text-[15px]">
              <h3 className="mb-1 font-bold text-slate-800">
                Disclosure:{" "}
                <span className="text-green-600">Affiliate Relationships</span>
              </h3>
              <p>
                Top Dog Leads LLC is a marketing organization and may be
                compensated based on your enrollment in a plan through our
                referral partners. This may influence which products we write
                about and where and how the product appears on a page.
                However, this compensation does not influence our evaluations.
                Our opinions are our own.
              </p>
            </div>
          </div>

          {/* Money callout */}
          <div className="flex gap-3 rounded-xl bg-green-50 p-4 text-sm leading-6 text-[#4b5563] md:text-[15px]">
            <DollarIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p>
              Top Dog Leads LLC does not offer every plan available in your
              area. Any information we provide is limited to those plans we do
              offer in your area. Please contact{" "}
              <a href="https://www.medicare.gov" className="font-semibold text-green-600 underline underline-offset-2">
                Medicare.gov
              </a>{" "}
              or 1-800-MEDICARE to get information on all your options.
            </p>
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-6 flex items-center justify-center gap-3 text-center text-sm leading-6 text-[#4b5563] md:text-[15px]">
          <PawShieldIcon className="h-6 w-6 flex-shrink-0 text-blue-600" />
          <p>
            We&apos;re here to help you make confident, informed decisions
            about your health coverage.
            <br />
            Thank you for trusting{" "}
            <span className="font-semibold text-blue-600">
              Top Dog Leads LLC
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function ShieldInfoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 5v6c0 5 4 9 9 11 5-2 9-6 9-11V5l-9-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 8v4M12 15.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 11l4-3 4 3-2 2-3-2M22 11l-4-3-4 3 2 2 3-2M8 13l3 3a2 2 0 0 0 2.8 0l4.2-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7v10M14.5 9.3c0-1-1.1-1.8-2.5-1.8s-2.5.8-2.5 1.8c0 1.1 1.1 1.6 2.5 1.9 1.4.3 2.5.9 2.5 1.9 0 1-1.1 1.8-2.5 1.8s-2.5-.7-2.5-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PawShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 5v6c0 5 4 9 9 11 5-2 9-6 9-11V5l-9-3z" opacity="0.15" />
      <path d="M12 2L3 5v6c0 5 4 9 9 11 5-2 9-6 9-11V5l-9-3zm0 2.2 7 2.3v4.5c0 4-3.1 7.3-7 9-3.9-1.7-7-5-7-9V6.5l7-2.3z" />
      <circle cx="9" cy="11" r="1" />
      <circle cx="15" cy="11" r="1" />
      <circle cx="10.5" cy="13.5" r="0.8" />
      <circle cx="13.5" cy="13.5" r="0.8" />
      <path d="M12 13.5c-1.2 0-2.2.8-2.2 1.8 0 .9.9 1.5 2.2 1.5s2.2-.6 2.2-1.5c0-1-1-1.8-2.2-1.8z" />
    </svg>
  );
}