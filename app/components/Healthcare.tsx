// components/healthcare.tsx
import React from "react";

export default function Healthcare() {
  return (
    <section className="bg-[#f4f8fb] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-[#3a3a3a] md:mb-16 md:text-5xl">
          About HealthCare.com
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="max-w-xl text-[#4b5563]">
            <p className="text-lg leading-8 md:text-[1.35rem] md:leading-9">
              The quickly growing team at{" "}
              <span className="font-semibold text-[#2f2f2f]">
                HealthCare.com
              </span>{" "}
              is dedicated to helping you find the right health coverage for
              your needs. To date, we&apos;ve helped over 5 million people find
              health insurance. By using data, technology, and customer service
              to answer your questions, we help you make the right decisions for
              your coverage. Our team of insurance-industry veterans and
              technology experts work to improve our products and shopping
              experience so you can feel more confident about your insurance
              purchase.
            </p>
          </div>

          {/* Right illustration */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative h-[300px] w-full md:h-[360px]">
              {/* Laptop */}
              <div className="absolute right-0 top-2 w-[82%]">
                <div className="rounded-t-[18px] border border-[#d8dbe2] bg-[#e9edf2] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <div className="rounded-sm border border-[#d7dbe0] bg-white px-6 py-5">
                    <h3 className="mb-4 text-center text-sm font-semibold text-[#4b5563] md:text-base">
                      Best Pricing In Your Area
                    </h3>

                    <div className="space-y-3">
                      <PricingRow
                        brand="aetna"
                        brandClass="text-[#7a3d8f]"
                        price="$ 83.81 / month"
                      />
                      <PricingRow
                        brand="Cigna"
                        brandClass="text-[#2ca56b]"
                        price="$ 89.87 / month"
                      />
                      <PricingRow
                        brand="PIVOT HEALTH"
                        brandClass="text-[#4b5563]"
                        price="$ 89.81 / month"
                      />
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-[999px] bg-gradient-to-b from-[#bcc3cb] to-[#9aa3ad]" />
              </div>

              {/* Phone */}
              <div className="absolute bottom-0 left-[6%] z-10 w-[23%] min-w-[110px]">
                <div className="rounded-[22px] border border-[#bfc5cc] bg-[#f7f7f8] p-[6px] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                  <div className="rounded-[18px] border border-[#d6d9de] bg-white px-3 pb-3 pt-2">
                    <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-[#9ca3af]" />

                    <div className="mb-3 text-center text-[8px] font-semibold leading-3 text-[#374151] md:text-[9px]">
                      Quotes in Less Than
                      <br />
                      Two Minutes
                    </div>

                    <div className="space-y-2">
                      <MobileQuote brand="aetna" color="#7a3d8f" />
                      <MobileQuote brand="Cigna" color="#2ca56b" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-[#c8ccd2] bg-[#f3f4f6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingRow({
  brand,
  brandClass,
  price,
}: {
  brand: string;
  brandClass: string;
  price: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-[2px] border border-[#eef1f4] px-4 py-3">
      <div className="min-w-0">
        <div className={`mb-2 text-sm font-semibold ${brandClass}`}>{brand}</div>
        <div className="space-y-1">
          <div className="h-[2px] w-full max-w-[220px] bg-[#eceff3]" />
          <div className="h-[2px] w-[88%] max-w-[180px] bg-[#eceff3]" />
        </div>
      </div>

      <div className="text-right">
        <div className="text-[10px] text-[#6b7280]">Starting at</div>
        <div className="text-[11px] font-semibold text-[#374151] md:text-xs">
          {price}
        </div>
      </div>
    </div>
  );
}

function MobileQuote({
  brand,
  color,
}: {
  brand: string;
  color: string;
}) {
  return (
    <div className="border-b border-[#eef1f4] pb-2 last:border-b-0">
      <div
        className="mb-1 text-[9px] font-semibold md:text-[10px]"
        style={{ color }}
      >
        {brand}
      </div>
      <div className="mb-1 h-[2px] w-full bg-[#edf0f3]" />
      <div className="text-[7px] leading-3 text-[#6b7280] md:text-[8px]">
        Starting at
        <br />
        <span className="font-semibold text-[#374151]">$ 84.44 / month</span>
      </div>
    </div>
  );
}
