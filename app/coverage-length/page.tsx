"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CoverageLengthPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (value: string) => {
    setSelected(value);
    router.push(`/reasons?length=${value}`);
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

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] text-center mb-10 flex items-center justify-center gap-2">
          How long do you expect you'll need coverage for?
          <span className="w-6 h-6 rounded-full border-2 border-[#1e2a4a] flex items-center justify-center text-sm font-normal">
            ?
          </span>
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => handleSelect("year-or-more")}
            className="w-full border border-gray-300 rounded-lg p-5 flex items-center gap-4 text-left hover:border-[#1e2a4a] transition"
          >
            <span
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                selected === "year-or-more" ? "border-[#1e2a4a] bg-[#1e2a4a]" : "border-gray-400"
              }`}
            />
            <span className="text-lg text-[#1e2a4a]">A year or more</span>
          </button>

          <button
            onClick={() => handleSelect("less-than-year")}
            className="w-full border border-gray-300 rounded-lg p-5 flex items-center gap-4 text-left hover:border-[#1e2a4a] transition"
          >
            <span
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                selected === "less-than-year" ? "border-[#1e2a4a] bg-[#1e2a4a]" : "border-gray-400"
              }`}
            />
            <span className="text-lg text-[#1e2a4a]">Less than a year</span>
          </button>

          <button
            onClick={() => handleSelect("not-sure")}
            className="w-full border border-gray-300 rounded-lg p-5 flex items-start gap-4 text-left hover:border-[#1e2a4a] transition"
          >
            <span
              className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                selected === "not-sure" ? "border-[#1e2a4a] bg-[#1e2a4a]" : "border-gray-400"
              }`}
            />
            <span className="text-lg text-[#1e2a4a]">
              <span className="block mb-1">I'm not sure</span>
              <span className="block text-base">
                We can show you plans from both coverage periods
              </span>
            </span>
          </button>
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