// components/healthcare.tsx
import React from "react";

export default function Healthcare() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] py-16 md:py-24">
      {/* Decorative top squiggle */}
      <svg
        className="pointer-events-none absolute left-1/3 top-6 hidden h-10 w-40 text-blue-600 md:block"
        viewBox="0 0 200 40"
        fill="none"
      >
        <path
          d="M2 30C40 5 100 5 198 18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative dot grid */}
      <div className="pointer-events-none absolute right-10 top-10 hidden grid-cols-4 gap-2 md:grid">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-200" />
        ))}
      </div>

      {/* Decorative blob */}
      <div className="pointer-events-none absolute -right-20 top-1/4 hidden h-[420px] w-[420px] rounded-full bg-blue-50 md:block" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="max-w-xl text-[#4b5563]">
            <p className="mb-6 text-lg leading-8 md:text-[1.35rem] md:leading-9">
              At{" "}
              <span className="font-bold text-blue-600">
                Top Dog Leads LLC
              </span>
              , we&apos;re passionate about connecting people with the right
              health coverage at the right price. Our mission is simple: to
              take the confusion out of health insurance and make the process
              fast, easy, and stress-free.
            </p>

            <p className="mb-8 text-lg leading-8 md:text-[1.35rem] md:leading-9">
              Using powerful technology, real-time data, and a team of
              licensed insurance experts, we compare top plans from trusted
              carriers in your area—so you get better options and better
              savings.
            </p>

            {/* Highlight box */}
            <div className="flex items-center gap-4 rounded-2xl bg-blue-50 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                <PawShieldIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">
                  Millions Served. Top-Rated Support.
                </p>
                <p className="font-bold text-blue-600">
                  Coverage You Can Count On.
                </p>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative h-[340px] w-full md:h-[400px]">
              {/* Laptop */}
              <div className="absolute right-0 top-2 w-[82%]">
                <div className="rounded-t-[18px] border-[6px] border-[#1f2937] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <div className="px-1 py-1">
                    <div className="mb-4 flex items-center gap-2">
                      <PawShieldIcon className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 md:text-base">
                          Top Plans. Top Savings.
                        </h3>
                        <p className="text-[10px] text-[#6b7280] md:text-xs">
                          Compare top health insurance plans in your area
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <PricingRow
                        brand="aetna"
                        brandClass="text-[#7a3d8f]"
                        price="$ 84.21 / month"
                      />
                      <PricingRow
                        brand="CIGNA"
                        brandClass="text-[#2ca56b]"
                        price="$ 89.67 / month"
                      />
                      <PricingRow
                        brand="PIVOT HEALTH"
                        brandClass="text-[#4b5563]"
                        price="$ 88.91 / month"
                      />
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-[999px] bg-gradient-to-b from-[#bcc3cb] to-[#9aa3ad]" />
              </div>

              {/* Phone */}
              <div className="absolute bottom-0 left-[2%] z-10 w-[26%] min-w-[120px]">
                <div className="rounded-[22px] border-[6px] border-[#1f2937] bg-white p-[6px] shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                  <div className="rounded-[14px] px-2 pb-2 pt-2">
                    <div className="mb-2 flex flex-col items-center text-center">
                      <PawShieldIcon className="mb-1 h-4 w-4 text-blue-600" />
                      <div className="text-[8px] font-bold leading-3 text-slate-800 md:text-[9px]">
                        Better Coverage.
                        <br />
                        Better Choices.
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <MobileQuote
                        brand="aetna"
                        color="#7a3d8f"
                        price="$ 84.21 / month"
                      />
                      <MobileQuote
                        brand="CIGNA"
                        color="#2ca56b"
                        price="$ 89.67 / month"
                      />
                      <MobileQuote
                        brand="PIVOT HEALTH"
                        color="#4b5563"
                        price="$ 88.91 / month"
                      />
                    </div>

                    <button className="mt-2 w-full rounded-md bg-blue-600 py-1.5 text-[8px] font-semibold text-white md:text-[9px]">
                      See More Plans
                    </button>
                  </div>
                </div>
              </div>

              {/* Sparkle accent */}
              <span className="absolute -right-2 bottom-10 text-blue-500">
                ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PawShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <div className="flex items-center justify-between gap-4 rounded-md border border-[#eef1f4] px-4 py-2.5">
      <div className={`text-sm font-bold ${brandClass}`}>{brand}</div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-[9px] text-[#9ca3af]">Starting at</div>
          <div className="text-[11px] font-semibold text-[#374151] md:text-xs">
            {price}
          </div>
        </div>

        <button
          className={`rounded-md border px-3 py-1 text-[10px] font-semibold md:text-xs ${
            brand === "CIGNA"
              ? "border-[#2ca56b] text-[#2ca56b]"
              : brand === "aetna"
              ? "border-[#7a3d8f] text-[#7a3d8f]"
              : "border-blue-600 text-blue-600"
          }`}
        >
          View Plan
        </button>
      </div>
    </div>
  );
}

function MobileQuote({
  brand,
  color,
  price,
}: {
  brand: string;
  color: string;
  price: string;
}) {
  return (
    <div className="rounded-md border border-[#eef1f4] px-2 py-1.5">
      <div
        className="text-[8px] font-bold md:text-[9px]"
        style={{ color }}
      >
        {brand}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[6px] text-[#9ca3af] md:text-[7px]">
          Starting at
        </span>
        <span className="text-[7px] font-semibold text-[#374151] md:text-[8px]">
          {price}
        </span>
      </div>
    </div>
  );
}