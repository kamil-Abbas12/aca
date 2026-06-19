import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Top Dog Leads LLC",
  description:
    "Get in touch with a licensed health insurance agent at Top Dog Leads LLC. Call, email, or send a message — free help finding affordable ACA coverage.",
  alternates: { canonical: "https://affordablecareact.topdoglead.com/contact" },
};

const contactMethods = [
  { icon: "📞", title: "Call Us", detail: "+1 866 896 0447", sub: "Mon–Fri, 8am–8pm EST", href: "tel:+18668960447", cta: "Call now" },
  { icon: "✉️", title: "Email Us", detail: "support@topdoglead.com", sub: "We reply within 1 business day", href: "mailto:support@topdoglead.com", cta: "Send email" },
  { icon: "💬", title: "Live Chat", detail: "Chat with an agent", sub: "Available during business hours", href: "#", cta: "Start chat" },
];

export default function ContactPage() {
  return (
    <>
      <main id="main-content">

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
                    <a href={m.href} className="mt-auto inline-flex items-center gap-2 rounded-xl bg-[#534AB7] border border-[#7F77DD] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">
                      {m.cta}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactForm />

      </main>
    </>
  );
}