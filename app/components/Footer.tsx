// components/footer.tsx
import React from "react";

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Do Not Call Policy", href: "#" },
  { label: "Licensing Information", href: "#" },
  { label: "Partner Companies", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2338] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
        {/* Top: Call banner */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Need Help Finding The Right Coverage?
            </p>
            <p className="mt-1 text-sm text-[#e1e7ed]">
              Speak with a licensed insurance specialist today.
            </p>
          </div>

          <a
            href="tel:+18668960447"
            className="inline-flex items-center gap-2 text-2xl font-bold leading-none text-[#f28a3a] md:text-[2rem]"
          >
            <PhoneIcon />
            <span>+186 689 60447</span>
          </a>
        </div>

        <div className="my-8 border-t border-white/15" />

        {/* Middle */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              About Top Dog Leads LLC
            </h3>
            <p className="text-[15px] leading-6 text-[#e1e7ed]">
              At <span className="font-semibold text-[#f28a3a]">Top Dog Leads LLC</span>,
              we help individuals and families compare health coverage
              options from trusted insurance providers. Our goal is to make
              finding the right plan simple, transparent, and stress-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[15px] leading-6 text-white">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="underline underline-offset-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Company Information
            </h3>
            <p className="text-[14px] leading-6 text-[#e1e7ed]">
              Top Dog Leads LLC is an independent marketing and lead
              generation company that connects consumers with licensed
              insurance professionals.
            </p>
            <p className="mt-3 text-[14px] leading-6 text-[#e1e7ed]">
              We are not affiliated with or endorsed by the U.S. government,
              Healthcare.gov, Medicare, or any federal agency.
            </p>
            <p className="mt-3 text-[14px] leading-6 text-[#e1e7ed]">
              Coverage availability, plan benefits, premiums, and eligibility
              requirements vary by carrier, state, and individual
              circumstances.
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-white/15" />

        {/* Privacy Commitment */}
        <div className="text-[14px] leading-6 text-[#e1e7ed]">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Privacy Commitment
          </h3>
          <p>
            We value your privacy and are committed to protecting your
            personal information. If you would like to exercise your privacy
            rights, update your information, or submit a request regarding
            your data, please contact us through our support team.
          </p>
        </div>

        <div className="my-8 border-t border-white/15" />

        {/* Important Disclosure */}
        <div className="text-[14px] leading-6 text-[#e1e7ed]">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Important Disclosure
          </h3>
          <p>
            By submitting your information, you agree that{" "}
            <span className="font-semibold text-[#f28a3a]">
              Top Dog Leads LLC
            </span>{" "}
            and its licensed partners may contact you by phone, email, text
            message, or automated technology regarding insurance products and
            services, even if your number is listed on a federal or state Do
            Not Call registry.
          </p>
          <p className="mt-3">Consent is not required to purchase any product or service.</p>
        </div>

        <div className="my-8 border-t border-white/15" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-[14px] text-[#e1e7ed]">
            © 2026 Top Dog Leads LLC. All Rights Reserved.
          </p>
          <p className="text-[15px] font-semibold text-white">
            Better Coverage. Better Choices. Better For You.
          </p>
          <p className="text-[13px] text-[#9fb0c2]">
            Your information is protected using industry-standard security
            and privacy practices.
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M6.6 10.8c1.8 3.5 3.1 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}