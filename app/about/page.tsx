import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About Us ",
  description:
  "Top Dog Leads LLC connects Americans with licensed agents to find affordable ACA-compliant and short-term health insurance plans.",
  alternates: { canonical: "https://affordablecareact.topdoglead.com/about" },
  openGraph: {
    title: "About Top Dog Leads LLC | Affordable Health Insurance Experts",
    description:
      "We help 100,000+ families compare health insurance plans from 50+ trusted carriers. Licensed agents, real savings, zero pressure.",
    url: "https://affordablecareact.topdoglead.com/about",
  },
};

const stats = [
  { value: "2M+", label: "People covered nationwide" },
  { value: "50+", label: "Trusted carrier partners" },
  { value: "100K+", label: "Families served" },
  { value: "4.9★", label: "Average customer rating" },
];

const values = [
  {
    icon: "🛡️",
    title: "Integrity First",
    body: "We never sell your data, never pressure you into a plan, and never hide fees. Your trust is the foundation of everything we do.",
  },
  {
    icon: "⚡",
    title: "Speed & Simplicity",
    body: "Finding health insurance shouldn't take days. Our process takes under 60 seconds to match you with top plans in your area.",
  },
  {
    icon: "🤝",
    title: "Licensed Expertise",
    body: "Every agent in our network is fully licensed and trained. You get real guidance from real professionals — not bots or call scripts.",
  },
  {
    icon: "💡",
    title: "Technology-Driven",
    body: "We use real-time data and powerful comparison tools to surface the best ACA-compliant plans for your exact situation and budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="bg-[#0D0B1A] py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-hero-heading">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7F77DD]/30 bg-[#7F77DD]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7F77DD]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#AFA9EC]">About Us</span>
            </div>
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl font-black text-[#EEEDFE] leading-tight mb-6">
              Connecting Americans to{" "}
              <span className="bg-gradient-to-r from-[#7F77DD] to-[#AFA9EC] bg-clip-text text-transparent">
                Affordable Health Insurance
              </span>
            </h1>
            <p className="text-lg text-[#6B6A80] max-w-2xl mx-auto leading-relaxed">
              Top Dog Leads LLC is an independent health insurance marketing company dedicated to
              making quality coverage accessible, understandable, and affordable for every American family.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#f7f6ff] py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="mission-heading">
          <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="mission-heading" className="text-3xl font-bold text-[#1a1733] mb-5">
                Our Mission: Simplify Health Insurance for Everyone
              </h2>
              <p className="text-[#5a5870] leading-relaxed mb-4">
                Health insurance is one of the most important decisions a family makes — yet the process
                of finding the right plan is needlessly complex. At Top Dog Leads LLC, we exist to
                change that.
              </p>
              <p className="text-[#5a5870] leading-relaxed mb-4">
                We use powerful technology, real-time carrier data, and a network of licensed insurance
                professionals to match you with ACA-compliant plans, short-term coverage, major medical
                insurance, and more — all tailored to your ZIP code, household size, and budget.
              </p>
              <p className="text-[#5a5870] leading-relaxed">
                Since launching, we've helped over 2 million people across the United States find
                health coverage they can count on — with zero pressure and zero cost to use our service.
              </p>
              <Link
                href="tel:+18668960447"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#534AB7] border border-[#7F77DD] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                📞 Speak with a Licensed Agent
              </Link>
            </div>

            {/* Stats */}
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-[#d4d0f5] bg-white p-6 shadow-sm text-center">
                  <dt className="text-3xl font-black text-[#534AB7] mb-1">{s.value}</dt>
                  <dd className="text-sm text-[#8886a0]">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
          <div className="mx-auto max-w-5xl">
            <h2 id="values-heading" className="text-3xl font-bold text-[#1a1733] text-center mb-12">
              What We Stand For
            </h2>
            <ul className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <li key={v.title} className="rounded-2xl border border-[#d4d0f5] bg-[#f7f6ff] p-7">
                  <div className="text-3xl mb-4" aria-hidden="true">{v.icon}</div>
                  <h3 className="text-lg font-bold text-[#1a1733] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#5a5870] leading-relaxed">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D0B1A] py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#EEEDFE] mb-4">
              Ready to Find Affordable Health Coverage?
            </h2>
            <p className="text-[#6B6A80] mb-8">
              Enter your ZIP code or call us directly. Our licensed agents are standing by.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="rounded-xl bg-[#534AB7] border border-[#7F77DD] px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                Compare Plans Free →
              </Link>
              <a
                href="tel:+18668960447"
                className="rounded-xl border border-[#2A2650] px-8 py-3 text-sm font-medium text-[#AFA9EC] hover:border-[#7F77DD] transition-colors"
              >
                📞 +1 866 896 0447
              </a>
            </div>
          </div>
        </section>

      </main>
    
    </>
  );
}