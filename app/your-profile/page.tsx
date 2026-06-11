"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function YourProfilePage() {
  const router = useRouter();

  const inputClass =
    "w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-[#1e2a4a]/20 focus:border-[#1e2a4a] transition";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    phone: "",
  });
  const [textConsent, setTextConsent] = useState(true);
  const [phoneError, setPhoneError] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (field: string, value: string) => {
    if (field === "phone") {
      const formatted = formatPhone(value);
      setForm((prev) => ({ ...prev, phone: formatted }));
      const digits = value.replace(/\D/g, "");
      setPhoneError(
        digits.length > 0 && digits.length < 10
          ? "Please enter a valid US phone number."
          : ""
      );
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const isValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.streetAddress &&
    form.phone.replace(/\D/g, "").length === 10;

  const handleSubmit = () => {
    if (!isValid) return;
    router.push(`/congratulations?firstName=${encodeURIComponent(form.firstName)}`);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 px-4 py-8 sm:py-10 transition-colors">
      <div className="max-w-xl mx-auto">

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[#1e2a4a] dark:text-blue-300 font-medium whitespace-nowrap text-sm sm:text-base">
            Your Progress:
          </span>
          <div className="flex-1 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-[95%] bg-[#1e2a4a] dark:bg-blue-400 rounded-full" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2a4a] dark:text-white text-center mb-2">
          Your Profile
        </h1>
        <p className="text-center text-gray-600 dark:text-slate-400 mb-8 text-sm sm:text-base">
          Check out the plans we've selected for you on the next page.
        </p>

        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium text-[#1e2a4a] dark:text-slate-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1e2a4a] dark:text-slate-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#1e2a4a] dark:text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Street Address */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#1e2a4a] dark:text-slate-300 mb-1">
            Street Address
          </label>
          <input
            type="text"
            value={form.streetAddress}
            onChange={(e) => handleChange("streetAddress", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-[#1e2a4a] dark:text-slate-300 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="(999) 999-9999"
            className={inputClass}
          />
          {phoneError && (
            <p className="text-red-400 text-sm mt-1">{phoneError}</p>
          )}
        </div>

        {/* SMS Consent */}
        <div className="flex items-start gap-3 mb-6 mt-4">
          <input
            type="checkbox"
            id="textConsent"
            checked={textConsent}
            onChange={(e) => setTextConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[#1e2a4a] flex-shrink-0 cursor-pointer"
          />
          <label
            htmlFor="textConsent"
            className="text-sm text-gray-700 dark:text-slate-400 leading-relaxed cursor-pointer"
          >
            <span className="font-bold text-gray-900 dark:text-slate-200">
              Text me about my insurance options
            </span>{" "}
            By checking this box, I consent to receive SMS messages from
            Healthcare.com about my insurance inquiry. Msg & data rates may
            apply. Reply STOP to opt out.{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Legal */}
        <p className="text-xs text-gray-500 dark:text-slate-500 mb-6 leading-relaxed">
          By submitting your information and clicking below, you represent that
          you are at least 18 years old and provide your express written consent
          to be contacted by HealthCare, Inc. and/or its partner companies and{" "}
          <a href="#" className="underline text-gray-600 dark:text-slate-400">
            any of their commercial partners
          </a>{" "}
          at the number and email you provided (including any wireless number)
          regarding various insurance products through the use of automated
          telephone dialing systems, pre-recorded messages, and/or text
          messages. Message and data rates may apply. Your consent is not a
          condition of purchase. This program is subject to our{" "}
          <a href="#" className="underline text-gray-600 dark:text-slate-400">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-gray-600 dark:text-slate-400">
            Terms of Use.
          </a>
        </p>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg transition ${
            isValid
              ? "bg-[#1e2a4a] hover:bg-[#2a3d6b] dark:bg-blue-500 dark:hover:bg-blue-600"
              : "bg-gray-300 dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed"
          }`}
        >
          Show Your Pricing
        </button>

        {/* Secure badge */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-400 dark:text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 3l7 4v5c0 4.418-3.134 8.573-7 9.93C5.134 20.573 2 16.418 2 12V7l10-4z"
            />
          </svg>
          <span className="text-sm font-medium">Secure</span>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 dark:text-slate-600 mt-6 leading-relaxed text-center pb-8">
          Any plan prices and details shown are our initial estimates. To buy a
          plan, you must complete an application process with one of our partners
          that is licensed to sell insurance products and that will provide you
          more definitive information on plan prices, benefits, availability, and
          other details. You may also call to inquire and/or purchase. You may be
          directed to a licensed sales agent who can answer your questions and
          provide information about individual health insurance plans. Agents are
          not connected with or endorsed by the U.S. government.
        </p>
      </div>
    </main>
  );
}