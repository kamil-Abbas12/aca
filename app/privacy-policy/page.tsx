import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Top Dog Leads LLC",
  description:
  "Read the Top Dog Leads LLC Privacy Policy to learn how we collect, use, and protect your personal information on our site.",
  alternates: { canonical: "https://affordablecareact.topdoglead.com/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: [
      "When you use our website, we may collect the following types of information:",
      "• Personal identifiers such as your name, email address, phone number, and ZIP code when you submit a quote request or contact form.",
      "• Health-related information you voluntarily provide, such as age, household size, and coverage preferences, solely to match you with appropriate health insurance plans.",
      "• Usage data including browser type, device information, IP address, pages visited, and time spent on the site, collected automatically through cookies and similar technologies.",
      "• Communication records when you contact us by phone, email, or chat.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect to:",
      "• Connect you with licensed insurance agents and carriers who can provide quotes and coverage options.",
      "• Respond to your inquiries and provide customer support.",
      "• Send you relevant information about health insurance plans, ACA enrollment periods, and related topics.",
      "• Improve our website, services, and user experience.",
      "• Comply with legal obligations and enforce our terms.",
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing Your Information",
    body: [
      "We do not sell your personal information to third parties for their own marketing purposes.",
      "We may share your information with:",
      "• Licensed insurance agents and carriers in our partner network for the purpose of providing you with health insurance quotes and enrollment assistance.",
      "• Service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.",
      "• Government authorities or law enforcement when required by law.",
      "By submitting your information, you consent to being contacted by Top Dog Leads LLC and its licensed insurance partners, even if your number is listed on a Do Not Call registry. This consent is not required to purchase any product or service.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    body: [
      "We use cookies, web beacons, and similar technologies to enhance your experience and analyze site traffic. These technologies may collect information about your browsing behavior across other websites.",
      "You may disable cookies through your browser settings. Note that disabling cookies may affect certain features of our website.",
      "We may use third-party analytics services such as Google Analytics to understand how visitors interact with our site. These services have their own privacy policies.",
    ],
  },
  {
    id: "security",
    title: "5. Data Security",
    body: [
      "We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
      "No method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "rights",
    title: "6. Your Rights & Choices",
    body: [
      "Depending on your state of residence, you may have the right to:",
      "• Access the personal information we hold about you.",
      "• Request correction of inaccurate information.",
      "• Request deletion of your personal information, subject to certain exceptions.",
      "• Opt out of marketing communications at any time by calling us, emailing us, or clicking 'unsubscribe' in any email.",
      "• Opt out of the sale or sharing of your personal information (we do not sell personal data).",
      "To exercise any of these rights, please contact us at the information provided below.",
    ],
  },
  {
    id: "childrens",
    title: "7. Children's Privacy",
    body: [
      "Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately.",
    ],
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised effective date. Your continued use of our website after changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    id: "contact-privacy",
    title: "9. Contact Us",
    body: [
      "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:",
      "Top Dog Leads LLC",
      "Phone: +1 866 896 0447",
      "Email: privacy@topdoglead.com",
      "You may also exercise your privacy rights by calling or emailing us directly.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <main id="main-content">

        {/* Hero */}
        <section className="bg-[#0D0B1A] py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7F77DD]/30 bg-[#7F77DD]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7F77DD]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#AFA9EC]">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#EEEDFE] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#6B6A80]">
              <strong className="text-[#AFA9EC]">Effective date:</strong> June 10, 2026 &nbsp;·&nbsp;
              <strong className="text-[#AFA9EC]">Last updated:</strong> June 19, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">

            <p className="text-[#5a5870] leading-relaxed mb-10 text-base border-l-4 border-[#534AB7] pl-5">
              Top Dog Leads LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, share, and safeguard your
              personal information when you visit{" "}
              <strong>affordablecareact.topdoglead.com</strong> or interact with our services.
              By using our website, you agree to the practices described in this policy.
            </p>

            {/* Jump links */}
            <nav aria-label="Privacy policy sections" className="mb-12 rounded-2xl border border-[#d4d0f5] bg-[#f7f6ff] p-6">
              <h2 className="text-sm font-bold text-[#1a1733] mb-3">Table of Contents</h2>
              <ol className="space-y-1.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-sm text-[#534AB7] hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2 className="text-xl font-bold text-[#1a1733] mb-4">{s.title}</h2>
                  <div className="space-y-3">
                    {s.body.map((para, i) => (
                      <p key={i} className="text-[#5a5870] leading-relaxed text-sm">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}