"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MedicareTimingPage() {
  const [selected, setSelected] = useState<string | null>("asap");
  const router = useRouter();

  const options = [
    { value: "asap", label: "As soon as possible", icon: "⏱️" },
    { value: "nextmonth", label: "Next month or later", icon: "📅" },
    { value: "notsure", label: "Not sure", icon: "❓" },
  ];

  const handleContinue = () => {
    router.push(`/medicare-enrollment?medicare=${selected}`);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[#1e2a4a] font-medium whitespace-nowrap">
            Your Progress:
          </span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[16%] bg-[#1e2a4a] rounded-full" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] text-center mb-10">
          How soon would you like Medicare Supplement insurance coverage to start?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelected(opt.value)}
              className={`border-2 rounded-lg p-6 flex flex-col items-center text-center transition ${
                selected === opt.value ? "border-[#1e2a4a]" : "border-gray-300"
              }`}
            >
              <span className="text-4xl mb-3">{opt.icon}</span>
              <span className="text-lg font-semibold text-[#1e2a4a] mb-4">
                {opt.label}
              </span>
              <span
                className={`w-6 h-6 rounded-full border-2 ${
                  selected === opt.value ? "border-[#1e2a4a] bg-[#1e2a4a]" : "border-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            className="bg-[#1e2a4a] text-white font-bold text-lg px-12 py-4 rounded-md hover:opacity-90 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}