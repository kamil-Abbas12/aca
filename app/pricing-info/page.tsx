"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PricingInfoPage() {
  const [gender, setGender] = useState<string | null>(null);
  const [dob, setDob] = useState("");
  const router = useRouter();
const formatDob = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
};
  const handleContinue = () => {
router.push(`/insurance-for?gender=${gender}&dob=${dob}`);  };

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[#1e2a4a] font-medium whitespace-nowrap">
            Your Progress:
          </span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[64%] bg-[#1e2a4a] rounded-full" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] text-center mb-10">
          Help us calculate your pricing!
        </h1>

        <div className="mb-6">
          <label className="block text-lg text-[#1e2a4a] mb-2">Gender</label>
          <div className="grid grid-cols-2 border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setGender("male")}
              className={`py-4 text-lg font-semibold text-[#1e2a4a] transition ${
                gender === "male" ? "bg-gray-200" : "bg-white hover:bg-gray-50"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender("female")}
              className={`py-4 text-lg font-semibold text-[#1e2a4a] border-l border-gray-300 transition ${
                gender === "female" ? "bg-gray-200" : "bg-white hover:bg-gray-50"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg text-[#1e2a4a] mb-2">Date of birth</label>
         <input
  type="text"
  value={dob}
  onChange={(e) => setDob(formatDob(e.target.value))}
  placeholder="MM/DD/YYYY"
  maxLength={10}
  className="w-full border border-gray-300 text-gray-900 rounded-lg px-4 py-4 text-lg placeholder-gray-400 focus:outline-none focus:border-[#1e2a4a]"
/>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            disabled={!gender || !dob}
            className={`font-bold text-lg px-12 py-4 rounded-md transition ${
              gender && dob ? "bg-[#f5b526] text-white hover:opacity-90" : "bg-gray-300 text-white cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}