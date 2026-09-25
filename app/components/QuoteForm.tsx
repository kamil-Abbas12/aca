"use client";

import { useEffect, useState } from "react";
import { User, Phone, Mail, MapPin, Home, Building2, Calendar, Clock, Lock, Loader2, ShieldCheck } from "lucide-react";

// Strips non-digit characters and caps length — used for Phone and Zip
function sanitizeDigits(e: React.FormEvent<HTMLInputElement>, maxLen: number) {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/\D/g, "").slice(0, maxLen);
}

// Forces uppercase letters only, capped at 2 characters — used for State
function sanitizeState(e: React.FormEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 2);
}

// Pulled out of useEffect so handleSubmit can call it directly too —
// this guarantees the freshest possible token capture at submit time.
// Returns true if a Jornaya token was successfully captured this call.
function captureTrackingTokens(): boolean {
  const leadidToken = document.querySelector<HTMLInputElement>(
    "#leadid_token, input[name='universal_leadid']"
  );
  const hidLeadid = document.getElementById("Hidleadid") as HTMLInputElement | null;
  const hidTrusted = document.getElementById("hidTrusted") as HTMLInputElement | null;
  const trustedToken = document.querySelector<HTMLInputElement>(
    "input[name^='xxTrustedFormCertUrl'], input[id^='xxTrustedFormCertUrl']"
  );

  let jornayaReady = false;

  if (leadidToken && hidLeadid && leadidToken.value) {
    hidLeadid.value = leadidToken.value;
    jornayaReady = true;
  }
  if (trustedToken && hidTrusted && trustedToken.value) {
    hidTrusted.value = trustedToken.value;
  }

  return jornayaReady;
}

export default function QuoteForm() {
  const [hasInsurance, setHasInsurance] = useState<"yes" | "no" | null>(null);
  const [insuranceError, setInsuranceError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [jornayaReady, setJornayaReady] = useState(false);

  useEffect(() => {
    const poll = () => {
      const ready = captureTrackingTokens();
      if (ready) setJornayaReady(true);
    };

    poll(); // check immediately on mount
    const polling = window.setInterval(poll, 500); // fast poll, no timeout bypass

    const trustedFormField = "xxTrustedFormCertUrl";
    const provideReferrer = false;
    const trustedScript = document.createElement("script");
    trustedScript.type = "text/javascript";
    trustedScript.async = true;
    trustedScript.src =
      "http" +
      (document.location.protocol === "https:" ? "s" : "") +
      "://api.trustedform.com/trustedform.js?provide_referrer=" +
      encodeURIComponent(String(provideReferrer)) +
      "&field=" +
      encodeURIComponent(trustedFormField) +
      "&l=" +
      new Date().getTime() +
      Math.random();
    document.head.appendChild(trustedScript);

    const leadidScript = document.createElement("script");
    leadidScript.id = "LeadiDscript_campaign";
    leadidScript.type = "text/javascript";
    leadidScript.async = true;
    leadidScript.src =
      "//create.lidstatic.com/campaign/372b9fce-b1fd-68e6-0d81-5286de90f4f0.js?snippet_version=2";

    const placeholder = document.getElementById("LeadiDscript");
    if (placeholder?.parentNode) {
      placeholder.parentNode.insertBefore(leadidScript, placeholder);
    } else {
      document.body.appendChild(leadidScript);
    }

    return () => {
      window.clearInterval(polling);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Final safety check — capture right now in case state hasn't
    // re-rendered yet. Strictly block if no real token exists yet —
    // no fallback bypass.
    const readyNow = captureTrackingTokens();
    if (!jornayaReady && !readyNow) {
      setFormError("Still verifying your session — please wait a moment.");
      return;
    }
    if (readyNow) setJornayaReady(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!hasInsurance) {
      setInsuranceError(true);
      return;
    }
    setInsuranceError(false);

    const phone = String(formData.get("phone") ?? "");
    const zip = String(formData.get("zip") ?? "");
    const state = String(formData.get("state") ?? "");

    if (!/^\d{10}$/.test(phone)) {
      setFormError("Phone number must be exactly 10 digits.");
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      setFormError("ZIP code must be exactly 5 digits.");
      return;
    }
    if (!/^[A-Z]{2}$/.test(state)) {
      setFormError("State must be a 2-letter abbreviation (e.g. NY, CA).");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    const hidLeadid = form.querySelector<HTMLInputElement>("#Hidleadid");
    const hidTrusted = form.querySelector<HTMLInputElement>("#hidTrusted");

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone,
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      state,
      zip,
      dob: formData.get("dob"),
      hasInsurance: hasInsurance,
      preferredTime: formData.get("preferredTime"),
      jornayaId: hidLeadid?.value ?? "",
      trustedFormUrl: hidTrusted?.value ?? "",
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        alert("Thank you! We'll be in touch shortly.");
        form.reset();
        setHasInsurance(null);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="quote-form"
      className="relative overflow-hidden bg-[#f7efe6] py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT CONTENT */}
          <div className="lg:pr-8">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
              Free Coverage Review
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#0b2b55] sm:text-5xl">
              Get Your Free
              <span className="block text-blue-700">
                Health Insurance Quote
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#0b2b55]/80 sm:text-lg">
              Shopping for ACA Marketplace coverage? Tell us a little about
              yourself and we'll help you find a plan that fits your budget.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Lock className="h-4 w-4" />
                </span>

                <div>
                  <h3 className="text-sm font-bold text-[#0b2b55]">
                    Secure & Confidential
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#0b2b55]/60">
                    Your information is submitted through a secure online
                    process.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Clock className="h-4 w-4" />
                </span>

                <div>
                  <h3 className="text-sm font-bold text-[#0b2b55]">
                    Quick Online Form
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#0b2b55]/60">
                    Provide your basic information in just a few simple steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Phone className="h-4 w-4" />
                </span>

                <div>
                  <h3 className="text-sm font-bold text-[#0b2b55]">
                    Take the Next Step
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#0b2b55]/60">
                    A licensed representative may contact you regarding your
                    request.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <p className="text-xs leading-5 text-[#0b2b55]/60">
                <strong className="text-[#0b2b55]">
                  Please note:
                </strong>{" "}
                Submitting this form does not guarantee that you will qualify
                for any particular plan or subsidy.
              </p>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl shadow-[#0b2b55]/10">

            {/* Header */}
            <div className="relative overflow-hidden bg-[#0b2b55] px-6 py-7 sm:px-8">

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-400/10" />
              <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-blue-400/10" />

              <div className="relative">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                  Free & Confidential
                </div>

                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  Tell Us About Yourself
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100/80">
                  Complete the form below to get started.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-5 sm:p-7"
              noValidate
            >
              {/* Tracking fields */}
              <input
                id="leadid_token"
                name="universal_leadid"
                type="hidden"
                defaultValue=""
              />

              <input
                id="Hidleadid"
                name="Hidleadid"
                type="hidden"
                defaultValue=""
              />

              <input
                id="hidTrusted"
                name="hidTrusted"
                type="hidden"
                defaultValue=""
              />

              <input
                id="xxTrustedFormToken_0"
                name="xxTrustedFormToken_0"
                type="hidden"
                defaultValue=""
              />

              {/* Section title */}
              <div className="flex items-center gap-3 pb-1">
                <div className="h-px flex-1 bg-blue-50" />

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0b2b55]/40">
                  Personal Information
                </span>

                <div className="h-px flex-1 bg-blue-50" />
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InputField
                  icon={<User className="h-4 w-4" />}
                  name="firstName"
                  placeholder="First Name*"
                  required
                />

                <InputField
                  icon={<User className="h-4 w-4" />}
                  name="lastName"
                  placeholder="Last Name*"
                  required
                />
              </div>

              {/* Phone */}
              <InputField
                icon={<Phone className="h-4 w-4" />}
                name="phone"
                placeholder="Phone Number* (10 digits)"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                onInput={(e) => sanitizeDigits(e, 10)}
                required
              />

              {/* Email */}
              <InputField
                icon={<Mail className="h-4 w-4" />}
                name="email"
                placeholder="Email Address*"
                type="email"
                required
              />

              {/* Address */}
              <InputField
                icon={<Home className="h-4 w-4" />}
                name="address"
                placeholder="Street Address*"
                required
              />

              {/* City / State */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InputField
                  icon={<Building2 className="h-4 w-4" />}
                  name="city"
                  placeholder="City*"
                  required
                />

                <InputField
                  icon={<MapPin className="h-4 w-4" />}
                  name="state"
                  placeholder="State* (e.g. NY)"
                  maxLength={2}
                  onInput={sanitizeState}
                  required
                />
              </div>

              {/* ZIP */}
              <InputField
                icon={<MapPin className="h-4 w-4" />}
                name="zip"
                placeholder="ZIP Code* (5 digits)"
                inputMode="numeric"
                maxLength={5}
                onInput={(e) => sanitizeDigits(e, 5)}
                required
              />

              {/* DOB */}
              <InputField
                icon={<Calendar className="h-4 w-4" />}
                name="dob"
                placeholder="Date of Birth*"
                type="date"
                required
              />

              {/* Insurance */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
                <p className="mb-3 text-sm font-bold text-[#0b2b55]">
                  Do you currently have health insurance?*
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {(["yes", "no"] as const).map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => {
                        setHasInsurance(val);
                        setInsuranceError(false);
                      }}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-bold capitalize transition-all ${
                        hasInsurance === val
                          ? "border-blue-700 bg-blue-50 text-blue-700 shadow-sm ring-2 ring-blue-100"
                          : "border-blue-100 bg-white text-[#0b2b55]/70 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                    >
                      {val === "yes" ? "Yes" : "No"}

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          hasInsurance === val
                            ? "border-blue-700 bg-blue-700"
                            : "border-blue-200 bg-white"
                        }`}
                      >
                        {hasInsurance === val && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>

                {insuranceError && (
                  <p className="mt-2 text-xs font-medium text-red-600">
                    Please let us know if you currently have health insurance.
                  </p>
                )}
              </div>

              {/* Preferred time */}
              <div className="relative">
                <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700" />

                <select
                  name="preferredTime"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-blue-100 bg-blue-50/50 py-3 pl-10 pr-4 text-sm font-medium text-[#0b2b55] outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Preferred Time to Receive a Call*
                  </option>

                  <option value="Morning (8am - 12pm)">
                    Morning (8am - 12pm)
                  </option>

                  <option value="Afternoon (12pm - 4pm)">
                    Afternoon (12pm - 4pm)
                  </option>

                  <option value="Evening (4pm - 8pm)">
                    Evening (4pm - 8pm)
                  </option>
                </select>
              </div>

              {/* Error */}
              {formError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-xs font-medium text-red-600">
                    {formError}
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                id="btnSubmit"
                type="submit"
                disabled={isSubmitting || !jornayaReady}
                className="group relative w-full overflow-hidden rounded-xl bg-blue-700 px-5 py-4 font-extrabold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    "Submitting..."
                  ) : !jornayaReady ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Preparing Form...
                    </>
                  ) : (
                    <>
                      GET MY FREE QUOTE
                      <span className="text-lg transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              {!jornayaReady && !isSubmitting && (
                <p className="text-center text-xs text-[#0b2b55]/40">
                  Verifying your session — this usually only takes a second or two.
                </p>
              )}

              {/* Security */}
              <div className="flex items-center justify-center gap-2 rounded-xl bg-blue-50/50 px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-green-600" />

                <span className="text-xs font-medium text-[#0b2b55]/60">
                  Your information is safe and secure.
                </span>
              </div>

              <p className="text-center text-[10px] leading-4 text-[#0b2b55]/40">
                By submitting this form, you agree that you may be contacted
                regarding your request. Please review our Privacy Policy and
                Terms of Use for additional information.
              </p>
            </form>

            <div id="LeadiDscript" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  icon,
  name,
  placeholder,
  type = "text",
  required = false,
  maxLength,
  inputMode,
  onFocus,
  onInput,
}: {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="group relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[#0b2b55]/40 transition-colors duration-200 group-focus-within:text-blue-700">
        {icon}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        onFocus={onFocus}
        onInput={onInput}
        className="
          w-full
          rounded-xl
          border
          border-blue-100
          bg-blue-50/50
          py-3
          pl-10
          pr-4
          text-sm
          font-medium
          text-[#0b2b55]
          outline-none
          transition-all
          duration-200
          placeholder:text-[#0b2b55]/40
          hover:border-blue-300
          hover:bg-white
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}