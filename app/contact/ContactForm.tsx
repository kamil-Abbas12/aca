"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", zip: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="form-heading">
      <div className="mx-auto max-w-2xl">
        <h2 id="form-heading" className="text-3xl font-bold text-[#1a1733] text-center mb-2">
          Send Us a Message
        </h2>
        <p className="text-center text-sm text-[#8886a0] mb-10">
          A licensed agent will respond within one business day.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Message Received!</h3>
            <p className="text-green-700 text-sm">
              Thank you for reaching out. A licensed insurance specialist will contact you within one business day.
            </p>
            <Link href="/" className="mt-6 inline-block text-sm text-[#534AB7] underline">
              Back to home
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#d4d0f5] bg-[#f7f6ff] p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
                { id: "zip", label: "ZIP Code", type: "text", placeholder: "10001", maxLength: 5 },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-sm font-medium text-[#1a1733] mb-1.5">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    maxLength={(f as any).maxLength}
                    value={(form as any)[f.id]}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-xl border border-[#d4d0f5] bg-white text-[#1a1733] text-sm placeholder:text-[#c0bdd8] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/30 focus:border-[#534AB7] transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#1a1733] mb-1.5">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your health insurance needs — plan type, budget, household size, etc."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#d4d0f5] bg-white text-[#1a1733] text-sm placeholder:text-[#c0bdd8] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/30 focus:border-[#534AB7] transition-all resize-none"
              />
            </div>

            {error && (
              <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <p className="text-xs text-[#8886a0] mb-5">
              By submitting, you agree that Top Dog Leads LLC and its licensed partners may contact you
              regarding insurance products. Consent is not required to purchase any product or service.
            </p>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full h-12 rounded-xl bg-[#534AB7] border border-[#7F77DD] text-sm font-bold text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}