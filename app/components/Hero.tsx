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
    <section className="relative overflow-hidden bg-[#dfeaf2] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-slate-900 dark:text-white">Smart Coverage.</span>
              <br />
              <span className="text-slate-900 dark:text-white">Stronger Families.</span>
              <br />
              <span className="text-blue-600">Better Tomorrow.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6">
              Enter your <span className="font-bold">ZIP code</span> to explore plan
              options, check availability, and get started with{" "}
              <span className="font-bold text-blue-600">Top dog Leads LLc</span>.
            </p>

            {/* ZIP Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mb-6">
              <div className="relative w-full flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  📍
                </span>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) =>
                    setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))
                  }
                  placeholder="Enter ZIP Code"
                  maxLength={5}
                  inputMode="numeric"
                  className="
                    w-full
                    h-14 sm:h-16
                    pl-11 pr-5
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    dark:bg-slate-800
                    dark:border-slate-700
                    text-slate-900
                    dark:text-white
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-500/20
                    focus:border-blue-500
                    transition-all
                  "
                />
              </div>

              <button
                onClick={handleSubmit}
                className="
                  w-full sm:w-auto
                  h-14 sm:h-16
                  px-8 sm:px-10
                  bg-blue-600
                  hover:bg-blue-700
                  rounded-xl
                  font-bold
                  text-base sm:text-lg
                  text-white
                  transition-all
                  shadow-md
                  hover:shadow-lg
                  cursor-pointer
                  whitespace-nowrap
                "
              >
                View Plans
              </button>
            </div>

            {/* Customer Card */}
            <div className="inline-flex items-center gap-3 rounded-xl bg-white dark:bg-slate-800 shadow-md px-4 py-3 mb-6 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👥</span>
              </div>

              <div>
                <p className="font-bold text-blue-600 text-sm">
                  100,000+ FAMILIES
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  have trusted Top dog Leads LLc for their coverage.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-3">
              {[
                "Compare quotes from top-rated providers",
                "Get expert guidance from licensed professionals",
                "Find plans that fit your needs and budget",
                "Simple, fast, and secure enrollment by phone",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white flex-shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/family.png"
                alt="Happy family"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="relative rounded-2xl bg-white dark:bg-slate-800 shadow-md px-5 sm:px-8 py-5 sm:py-6 flex items-center gap-4 sm:gap-6 overflow-hidden">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl sm:text-3xl shadow-lg">
            🛡️
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
              We Shop. <span className="text-blue-600">You Save.</span> Real
              Coverage That Fits.
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Our licensed agents compare multiple plans from top carriers so
              you get the right coverage at the right price—including major
              medical, short-term plans, indemnity options, and more.
            </p>
          </div>

          <span className="hidden sm:block absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-blue-300">
            ✨
          </span>
        </div>
      </div>
    </section>
  );
}