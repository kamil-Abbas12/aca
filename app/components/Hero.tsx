"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const [zipCode, setZipCode] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!/^\d{5}$/.test(zipCode)) {
      alert("Please enter a valid 5-digit ZIP code");
      return;
    }

    window.open(`/age-group?zip=${zipCode}`, "_blank");
    router.push(`/agent?zip=${zipCode}`);
  };

  return (
    <section
      aria-label="Find affordable health insurance plans"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Layered background design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100" />
        <svg
          className="absolute bottom-0 left-0 w-full text-white/40 dark:text-slate-800/40"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0,120 C240,200 480,40 720,80 C960,120 1200,200 1440,100 L1440,200 L0,200 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 shadow-lg
            backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-sm ring-1 ring-blue-100 mb-5">
              ⭐ Trusted Health Coverage Partner
            </span>

            {/* ── SEO: Single <h1> with primary keyword woven in ─────────── */}
            <h1 className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-black leading-[0.95] tracking-[-0.04em] mb-6
            ">
              <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Affordable Health
              </span>
              <br />
              <span className="text-slate-900">Insurance Plans.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Better Tomorrow.
              </span>
            </h1>

            {/* ── SEO: <p> contains secondary keywords naturally ─────────── */}
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 mb-8 max-w-xl">
              Enter your <span className="font-bold text-slate-800">ZIP code</span> to compare{" "}
              <span className="font-bold text-blue-600">ACA health plans</span> in your area,
              check availability, and get started with{" "}
              <span className="font-bold text-blue-600">Top Dog Leads LLC</span>.
            </p>

            {/* ZIP Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mb-6">
              <div className="relative w-full flex-1">
                <span
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                  aria-hidden="true"
                >
                  📍
                </span>
                <label htmlFor="zip-input" className="sr-only">
                  Enter your ZIP code to find health insurance plans
                </label>
                <input
                  id="zip-input"
                  type="text"
                  value={zipCode}
                  onChange={(e) =>
                    setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))
                  }
                  placeholder="Enter ZIP Code"
                  maxLength={5}
                  inputMode="numeric"
                  autoComplete="postal-code"
                  aria-label="ZIP code"
                  aria-describedby="zip-hint"
                  className="
                    w-full h-14 sm:h-16 pl-11 pr-5 rounded-xl
                    border border-blue-100 bg-white/90 backdrop-blur-sm shadow-sm
                    dark:bg-slate-800 dark:border-slate-700
                    text-slate-900 dark:text-white placeholder:text-slate-400
                    focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500
                    transition-all
                  "
                />
              </div>

              <button
                onClick={handleSubmit}
                aria-label="View affordable health insurance plans for my ZIP code"
                className="
                  w-full sm:w-auto h-14 sm:h-16 px-10 rounded-xl
                  font-bold text-lg text-white
                  bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500
                  hover:scale-[1.02] transition-all duration-300
                  shadow-xl shadow-blue-500/30
                "
              >
                View Plans
              </button>
            </div>

            <p id="zip-hint" className="sr-only">
              Enter a 5-digit US ZIP code to see ACA-compliant health insurance plans available in your area.
            </p>

            {/* Customer Card */}
            <div className="inline-flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm ring-1 ring-blue-100 px-4 py-3 mb-6 w-full sm:w-auto dark:bg-slate-800 dark:ring-slate-700">
              <div
                className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="text-lg">👥</span>
              </div>
              <div>
                <p className="font-bold text-blue-600 text-sm">100,000+ FAMILIES</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  have trusted Top Dog Leads LLC for their health coverage.
                </p>
              </div>
            </div>

            {/* Benefits list — keywords: "compare quotes", "licensed agents", "affordable plans" */}
            <ul className="space-y-3" aria-label="Why choose Top Dog Leads LLC">
              {[
                "Compare health insurance quotes from top-rated providers",
                "Get expert guidance from licensed insurance professionals",
                "Find affordable ACA plans that fit your needs and budget",
                "Simple, fast, and secure enrollment by phone",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span
                    className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-xs text-white flex-shrink-0 shadow-sm shadow-green-500/30"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image — descriptive alt text for Google Images + screen readers */}
          <div className="order-1 lg:order-2 lg:p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/40">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/50">
              <Image
                src="/family.png"
                alt="Happy family with affordable ACA health insurance coverage provided by Top Dog Leads LLC"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="relative rounded-2xl bg-white/85 backdrop-blur-sm shadow-lg ring-1 ring-blue-100 px-5 sm:px-8 py-5 sm:py-6 flex items-center gap-4 sm:gap-6 overflow-hidden dark:bg-slate-800">
          <div
            className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl sm:text-3xl shadow-lg shadow-blue-500/30"
            aria-hidden="true"
          >
            🛡️
          </div>
          <div>
            {/* ── SEO: <h2> under the <h1> — correct heading hierarchy ──── */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
              We Shop.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                You Save.
              </span>{" "}
              Real Coverage That Fits.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Our licensed agents compare multiple health insurance plans from top carriers so
              you get the right coverage at the right price — including major
              medical, short-term plans, indemnity options, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}