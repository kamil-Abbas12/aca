"use client";

import { useSearchParams } from "next/navigation";

export default function CongratulationsContent() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName") || "there";

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto text-center">

        <div className="flex justify-center mb-4">
          <div className="relative">
            <span className="text-2xl">🎉</span>
            <span className="mx-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white text-lg">
              ✓
            </span>
            <span className="text-2xl">🎊</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] mb-2">
          Congratulations, {firstName}!
        </h1>

        <p className="text-gray-600 mb-8">
          We've{" "}
          <span className="text-[#f5a623] font-semibold">matched</span>{" "}
          you with our partner at
        </p>

        <div className="mx-auto w-64 h-40 bg-gray-100 rounded-xl flex items-center justify-center mb-8 border border-gray-200">
          <div className="text-center">
            <div className="text-4xl mb-1">🛡️</div>
            <p className="text-[#1e2a4a] font-bold text-lg">LEOSOURCE</p>
            <p className="text-gray-400 text-xs">Insurance Agency</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-6 mb-10 text-left">
          <div className="w-36 h-56 bg-[#1e2a4a] rounded-3xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-gray-300 mb-2 overflow-hidden flex items-center justify-center">
              <span className="text-2xl">👩</span>
            </div>

            <p className="text-white text-xs font-semibold text-center leading-tight px-2">
              Licensed Insurance Agent
            </p>

            <p className="text-gray-400 text-xs mt-1">connecting...</p>

            <div className="mt-4 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-lg">📞</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#1e2a4a] mb-3 leading-snug">
              Have your phone ready. Your licensed insurance agent will be calling!
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              If you want to connect right away, you can call the number below:
            </p>

            <a
              href="tel:8776259968"
              className="inline-flex items-center gap-2 bg-[#f5a623] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              877-625-9968 (TTY 711) 📞
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          <span className="text-[#f5a623] font-semibold">
            Healthcare.com
          </span>{" "}
          has helped millions of Americans find the right coverage — and we're not done yet.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: "5M+", label: "CUSTOMERS HELPED" },
            { value: "10+", label: "YEARS IN BUSINESS" },
            { value: "50", label: "STATES COVERED" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-[#1e2a4a]">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs font-bold text-[#f5a623] tracking-widest mb-2">
          PERSONALIZED FOR YOU
        </p>

        <h2 className="text-2xl font-extrabold text-[#1e2a4a] mb-2">
          Complete Your Coverage Picture
        </h2>

        <p className="text-gray-500 text-sm">
          Based on your profile, these offers may help fill gaps in your
          coverage. We've already filled in most of the details.
        </p>
      </div>
    </main>
  );
}