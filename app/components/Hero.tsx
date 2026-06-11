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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white mb-6">
              Choose the Best Health Insurance for You and Your Family
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6">
              Confirm your{" "}
              <span className="font-bold">ZIP code</span> to access pricing,
              availability, and enrollment options for your location.
            </p>

            {/* ZIP Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mb-8">
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
                  flex-1
                  h-14 sm:h-16
                  px-5
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  dark:bg-slate-800
                  dark:border-slate-700
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#f5b526]/30
                  focus:border-[#f5b526]
                  transition-all
                "
              />

              <button
                onClick={handleSubmit}
                className="
                  h-14 sm:h-16
                  px-8 sm:px-10
                  bg-[#f5b526]
                  hover:bg-[#e6a91f]
                  rounded-xl
                  font-bold
                  text-base sm:text-lg
                  text-slate-900
                  transition-all
                  shadow-md
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                See Options
              </button>
            </div>

            {/* Customer Card */}
            <div className="inline-flex items-center gap-3 rounded-xl bg-white dark:bg-slate-800 shadow-md px-4 py-3 mb-8">
              <div className="w-11 h-11 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <span className="text-lg">👥</span>
              </div>

              <div>
                <p className="font-bold text-blue-600 text-sm">
                  5+ MILLION CUSTOMERS
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  have chosen us for their health insurance needs.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-4">
              {[
                "Access the same pricing as agents for 100+ plans",
                "Get your questions answered by licensed insurance agents",
                "Compare plan options customized for you",
                "Secure the right coverage for you & enroll via phone",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-md p-4 sm:p-5 flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
          <span className="text-xl flex-shrink-0">📋</span>

          <p>
            Our network of licensed agents can walk you through multiple plan
            options, including major medical, short-term coverage, indemnity
            plans, and others.
          </p>
        </div>
      </div>
    </section>
  );
}