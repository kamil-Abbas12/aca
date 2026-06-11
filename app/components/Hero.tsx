"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <section className="bg-[#dfeaf2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Choose the Best Health Insurance for You and Your Family
          </h1>

          <p className="text-gray-600 mb-4">
            Confirm your <span className="font-bold">ZIP code</span> to access pricing, availability, and enrollment options for your location.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mb-6">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter Your Zip Code..."
              maxLength={5}
              className="flex-1 h-16 px-5 border rounded-md"
            />

            <button
              onClick={handleSubmit}
              className="h-16 px-10 bg-[#f5b526] rounded-md font-bold text-xl"
            >
              See Options
            </button>
          </div>

          <div className="bg-white rounded-md p-3 inline-flex items-center gap-3 mb-6 shadow-sm">
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <span className="text-blue-500 text-lg">👥</span>
            </div>
            <div>
              <p className="font-bold text-blue-600 text-sm">5+ MILLION CUSTOMERS</p>
              <p className="text-xs text-gray-500">have chosen us for their health insurance needs.</p>
            </div>
          </div>

          <ul className="space-y-3">
            {[
              "Access the same pricing as agents for 100+ plans",
              "Get your questions answered by licensed insurance agents",
              "Compare plan options customized for you",
              "Secure the right coverage for you & enroll via phone",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="/family.png"
            alt="Happy family"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8 relative z-10">
        <div className="bg-white/70 backdrop-blur-sm rounded-md p-4 flex items-center gap-3 text-gray-700 text-sm">
          <span className="text-xl">📋</span>
          Our network of licensed agents can walk you through multiple plan options, including major medical, short-term coverage, indemnity plans, and others.
        </div>
      </div>
    </section>
  );
}