"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MonthlyIncomePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const options = [
    { value: "below-1304", label: "Below $1,304" },
    { value: "1304-5217", label: "$1,304 – $5,217" },
    { value: "over-5217", label: "Over $5,217" },
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
router.push(`/pricing-info?income=${value}`);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[#1e2a4a] font-medium whitespace-nowrap">
            Your Progress:
          </span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[80%] bg-[#1e2a4a] rounded-full" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] text-center mb-10 flex items-center justify-center gap-2 flex-wrap">
          What is your household's gross{" "}
          <span className="text-[#f5a623]">monthly</span> income?
          <span className="w-6 h-6 rounded-full border-2 border-[#1e2a4a] flex items-center justify-center text-sm font-normal flex-shrink-0">
            ?
          </span>
        </h1>

        <div className="space-y-4">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="w-full border border-gray-300 rounded-lg p-5 flex items-center gap-4 text-left hover:border-[#1e2a4a] transition"
            >
              <span
                className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                  selected === opt.value
                    ? "border-[#1e2a4a] bg-[#1e2a4a]"
                    : "border-gray-400"
                }`}
              />
              <span className="text-lg text-[#1e2a4a]">{opt.label}</span>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => router.back()}
            className="text-[#1e2a4a] underline font-medium text-lg"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
}