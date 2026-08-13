import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions ",
  description:
    "Read the Terms and Conditions for using Top Dog Leads LLC's health insurance comparison and lead generation services.",
  alternates: { canonical: "https://affordablecareact.topdoglead.com/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: "By accessing or using affordablecareact.topdoglead.com (the 'Site'), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our Site or services.",
  },
  {
    id: "services",
    title: "2. Description of Services",
    body: "Top Dog Leads LLC is an independent marketing and lead generation company. We connect consumers with licensed insurance agents and carriers who offer health insurance products including ACA-compliant plans, major medical insurance, short-term health plans, and indemnity products. We do not sell insurance directly. We are not an insurance carrier or licensed insurance agency.",
  },
  {
    id: "not-government",
    title: "3. Not Affiliated with the Government",
    body: "Top Dog Leads LLC is not affiliated with, endorsed by, or connected to the United States government, the Department of Health and Human Services, Healthcare.gov, Medicare, Medicaid, or any federal or state agency. Use of terms like 'ACA' or 'Affordable Care Act' is for descriptive purposes only.",
  },
  {
    id: "eligibility",
    title: "4. Eligibility",
    body: "You must be at least 18 years of age and a resident of the United States to use our services. By using our Site, you represent and warrant that you meet these requirements.",
  },
  {
    id: "consent-contact",
    title: "5. Consent to be Contacted",
    body: "By submitting your information through our Site, you expressly consent to be contacted by Top Dog Leads LLC and its licensed insurance partners via telephone (including autodialed and pre-recorded calls), text message, and email regarding health insurance products and services — even if your telephone number is listed on a state or federal Do Not Call registry. This consent is not a condition of purchasing any product or service.",
  },
  {
    id: "no-guarantee",
    title: "6. No Guarantee of Coverage or Pricing",
    body: "The health insurance plans, premiums, and benefits displayed or described on our Site are for informational purposes only. Actual plan availability, pricing, and coverage vary by carrier, state, age, household composition, and individual circumstances. We make no guarantee that any specific plan will be available or that any particular premium will be offered to you.",
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    body: "All content on this Site, including text, graphics, logos, images, and software, is the property of Top Dog Leads LLC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer of Warranties",
    body: "Our Site and services are provided 'as is' and 'as available' without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
  },
  {
    id: "limitation",
    title: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law, Top Dog Leads LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Site or services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim shall not exceed $100.",
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    body: "You agree to indemnify, defend, and hold harmless Top Dog Leads LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of your use of our Site, your violation of these Terms, or your violation of any rights of a third party.",
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    body: "These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    body: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.",
  },
  {
    id: "contact-terms",
    title: "13. Contact Information",
    body: "For questions about these Terms and Conditions, please contact us at: Top Dog Leads LLC | Phone: +1 866 896 0447 | Email: legal@topdoglead.com",
  },
];

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-[#6B6A80]">
              <strong className="text-[#AFA9EC]">Effective date:</strong> June 7, 2026 &nbsp;·&nbsp;
              <strong className="text-[#AFA9EC]">Last updated:</strong> June 18, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">

            <p className="text-[#5a5870] leading-relaxed mb-10 text-base border-l-4 border-[#534AB7] pl-5">
              Please read these Terms and Conditions carefully before using our website. These terms
              govern your access to and use of Top Dog Leads LLC's health insurance comparison and
              referral services.
            </p>

            {/* Jump links */}
            <nav aria-label="Terms sections" className="mb-12 rounded-2xl border border-[#d4d0f5] bg-[#f7f6ff] p-6">
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

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2 className="text-xl font-bold text-[#1a1733] mb-3">{s.title}</h2>
                  <p className="text-[#5a5870] leading-relaxed text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}