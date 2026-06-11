"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MedicareEnrollmentPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/pricing-info?enrolled=${selected}`);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[#1e2a4a] font-medium whitespace-nowrap">
            Your Progress:
          </span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[24%] bg-[#1e2a4a] rounded-full" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] text-center mb-10">
          Are you currently enrolled in Medicare Part A & Part B?
        </h1>

        <div className="space-y-4 mb-10">
          {[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "notsure", label: "I'm not sure" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelected(opt.value)}
              className="w-full border border-gray-300 rounded-lg p-5 flex items-center gap-4 text-left hover:border-[#1e2a4a] transition"
            >
              <span
                className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                  selected === opt.value ? "border-[#1e2a4a] bg-[#1e2a4a]" : "border-gray-400"
                }`}
              />
              <span className="text-lg text-[#1e2a4a]">{opt.label}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            disabled={!selected}
            className={`font-bold text-lg px-12 py-4 rounded-md transition ${
              selected ? "bg-[#1e2a4a] text-white hover:opacity-90" : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}