"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// NOTE: export metadata must be in a separate server component when using "use client".
// Create app/contact/metadata.ts OR move the form into a child component.
// For simplicity here, metadata is handled via layout or a generateMetadata export
// in a wrapper. See comment below.

const contactMethods = [
  {
    icon: "📞",
    title: "Call Us",
    detail: "+1 866 896 0447",
    sub: "Mon–Fri, 8am–8pm EST",
    href: "tel:+18668960447",
    cta: "Call now",
  },
  {
    icon: "✉️",
    title: "Email Us",
    detail: "support@topdoglead.com",
    sub: "We reply within 1 business day",
    href: "mailto:support@topdoglead.com",
    cta: "Send email",
  },
  {
    icon: "💬",
    title: "Live Chat",
    detail: "Chat with an agent",
    sub: "Available during business hours",
    href: "#",
    cta: "Start chat",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", zip: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    // TODO: wire to your API / CRM
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="bg-[#0D0B1A] py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7F77DD]/30 bg-[#7F77DD]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7F77DD]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#AFA9EC]">Contact Us</span>
            </div>
            <h1 id="contact-heading" className="text-4xl sm:text-5xl font-black text-[#EEEDFE] mb-6">
              Get in Touch with a{" "}
              <span className="bg-gradient-to-r from-[#7F77DD] to-[#AFA9EC] bg-clip-text text-transparent">
                Licensed Insurance Agent
              </span>
            </h1>
            <p className="text-lg text-[#6B6A80] leading-relaxed">
              Have questions about health insurance plans, ACA subsidies, or enrollment?
              Our licensed agents are here to help — free of charge.
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-[#f7f6ff] py-14 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-methods-heading">
          <div className="mx-auto max-w-5xl">
            <h2 id="contact-methods-heading" className="sr-only">Ways to contact us</h2>
            <ul className="grid sm:grid-cols-3 gap-6">
              {contactMethods.map((m) => (
                <li key={m.title}>
                  <div className="h-full rounded-2xl border border-[#d4d0f5] bg-white p-7 text-center shadow-sm flex flex-col items-center">
                    <div className="text-4xl mb-4" aria-hidden="true">{m.icon}</div>
                    <h3 className="text-base font-bold text-[#1a1733] mb-1">{m.title}</h3>
                    <p className="text-sm font-medium text-[#534AB7] mb-1">{m.detail}</p>
                    <p className="text-xs text-[#8886a0] mb-5">{m.sub}</p>
                    <a
                      href={m.href}
                      className="mt-auto inline-flex items-center gap-2 rounded-xl bg-[#534AB7] border border-[#7F77DD] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                    >
                      {m.cta}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Form */}
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

                <p className="text-xs text-[#8886a0] mb-5">
                  By submitting, you agree that Top Dog Leads LLC and its licensed partners may contact you
                  regarding insurance products. Consent is not required to purchase any product or service.
                </p>

                <button
                  onClick={handleSubmit}
                  className="w-full h-12 rounded-xl bg-[#534AB7] border border-[#7F77DD] text-sm font-bold text-white hover:opacity-90 transition-opacity"
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}