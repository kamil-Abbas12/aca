// components/Healthcare.tsx
import React from "react";
import Image from "next/image";

const stats = [
  { num: "2M+", label: "People covered nationwide" },
  { num: "50+", label: "Trusted carrier partners" },
  { num: "60s", label: "Average time to compare ACA plans" },
  { num: "4.9★", label: "Average customer rating" },
];

export default function Healthcare() {
  return (
    // ── SEO: id="about" lets anchor links (#about) work; aria-labelledby
    //         ties section to its <h2> for assistive tech & crawlers
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#f7f6ff] py-16 md:py-24"
    >
      {/* Glow blobs — purely decorative */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full bg-[#7F77DD]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-[280px] w-[280px] rounded-full bg-[#534AB7]/7 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#534AB7]/35 bg-[#534AB7]/10 px-4 py-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[#534AB7]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#534AB7]">
                About us
              </span>
            </div>

            {/* ── SEO: keyword-rich <h2>, unique from the Hero <h1> ──────── */}
            <h2
              id="about-heading"
              className="mb-5 text-3xl font-medium leading-snug text-[#1a1733] md:text-4xl"
            >
              Licensed Health Insurance Agents{" "}
              <span className="text-[#534AB7]">Connecting You to the Right Coverage</span>
            </h2>

            {/* ── SEO: paragraph copy uses natural keyword variations ───── */}
            <p className="mb-4 text-[15px] leading-relaxed text-[#5a5870]">
              At{" "}
              <strong className="font-medium text-[#26215C]">Top Dog Leads LLC</strong>
              , we&apos;re passionate about connecting people with affordable health
              insurance at the right price. Our mission is simple: take the confusion
              out of the{" "}
              <strong className="font-medium text-[#26215C]">Affordable Care Act marketplace</strong>{" "}
              and make finding coverage fast, easy, and stress-free.
            </p>

            <p className="text-[15px] leading-relaxed text-[#5a5870]">
              Using powerful technology, real-time data, and a team of{" "}
              <strong className="font-medium text-[#26215C]">licensed insurance professionals</strong>
              , we compare top ACA plans from trusted carriers in your area — so
              you get better options and better savings on individual and family
              health insurance.
            </p>

            {/* Highlight box */}
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-[#d4d0f5] bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#534AB7]/25 bg-[#534AB7]/10 text-[#534AB7]" aria-hidden="true">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1a1733]">
                  Millions Served. Top-Rated Support.
                </p>
                <p className="text-sm text-[#534AB7]">
                  Health Coverage You Can Count On.
                </p>
              </div>
            </div>
          </div>

          {/* Right — image + stats */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-[#d4d0f5] shadow-md">
              {/* ── SEO: descriptive alt text — crawlable by Google Images ── */}
              <Image
                src="/topdog-shield.webp"
                alt="Diverse group of Americans protected by affordable health insurance plans from Top Dog Leads LLC"
                width={620}
                height={420}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Stats — use <dl> (description list) for key–value pairs */}
            <dl className="mt-3 grid grid-cols-2 gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[#d4d0f5] bg-white px-4 py-3.5 shadow-sm"
                >
                  <dt className="text-xl font-medium text-[#534AB7]">{s.num}</dt>
                  <dd className="mt-0.5 text-xs text-[#8886a0]">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5c0 5-3.5 9-7 10C8.5 20 5 16 5 11V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}