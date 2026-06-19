import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Do Not Call Policy | Top Dog Leads LLC",
  description:
    "Learn about Top Dog Leads LLC's Do Not Call Policy and how to opt out of marketing calls regarding health insurance plans.",
  alternates: { canonical: "https://affordablecareact.topdoglead.com/do-not-call" },
  robots: { index: true, follow: true },
};

export default function DoNotCallPage() {
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
              Do Not Call Policy
            </h1>
            <p className="text-[#6B6A80]">Last updated: June 1, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-10">

            <p className="text-[#5a5870] leading-relaxed border-l-4 border-[#534AB7] pl-5">
              Top Dog Leads LLC respects your right to privacy and your right to control how you are
              contacted. This Do Not Call Policy explains your options regarding marketing calls and
              how to opt out.
            </p>

            <div id="consent">
              <h2 className="text-xl font-bold text-[#1a1733] mb-3">Consent to Be Contacted</h2>
              <p className="text-[#5a5870] leading-relaxed text-sm">
                When you submit your information on our website, you expressly consent to be contacted
                by Top Dog Leads LLC and its licensed insurance partners by telephone — including
                autodialed calls, pre-recorded voice messages, and text messages — at the number
                you provided, even if that number is registered on the National Do Not Call Registry
                or a state equivalent. This consent is not a condition of purchasing any product or service.
              </p>
            </div>

            <div id="internal-dnc">
              <h2 className="text-xl font-bold text-[#1a1733] mb-3">Our Internal Do Not Call List</h2>
              <p className="text-[#5a5870] leading-relaxed text-sm mb-3">
                Top Dog Leads LLC maintains an internal Do Not Call list. If you request to be placed
                on our internal Do Not Call list, we will honor that request within 30 days and retain
                your number on our list for a minimum of 5 years.
              </p>
              <p className="text-[#5a5870] leading-relaxed text-sm">
                To add your number to our internal Do Not Call list, you may:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#5a5870]">
                <li className="flex items-start gap-2">
                  <span className="text-[#534AB7] mt-0.5">•</span>
                  Call us at <a href="tel:+18668960447" className="text-[#534AB7] underline">+1 866 896 0447</a> and request to be added to our Do Not Call list.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#534AB7] mt-0.5">•</span>
                  Email us at <a href="mailto:donotcall@topdoglead.com" className="text-[#534AB7] underline">donotcall@topdoglead.com</a> with your full name and phone number(s) you wish to register.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#534AB7] mt-0.5">•</span>
                  State your request verbally to any agent during a call — they are required to honor your request immediately.
                </li>
              </ul>
            </div>

            <div id="national-registry">
              <h2 className="text-xl font-bold text-[#1a1733] mb-3">National Do Not Call Registry</h2>
              <p className="text-[#5a5870] leading-relaxed text-sm">
                The National Do Not Call Registry is maintained by the Federal Trade Commission (FTC).
                You may register your number at{" "}
                <a href="https://www.donotcall.gov" target="_blank" rel="noopener noreferrer" className="text-[#534AB7] underline">
                  www.donotcall.gov
                </a>{" "}
                or by calling 1-888-382-1222. Note that by providing your express written consent
                when submitting information through our Site, you waive your rights under the National
                Do Not Call Registry with respect to calls from Top Dog Leads LLC and its partners.
              </p>
            </div>

            <div id="third-parties">
              <h2 className="text-xl font-bold text-[#1a1733] mb-3">Third-Party Partners</h2>
              <p className="text-[#5a5870] leading-relaxed text-sm">
                Top Dog Leads LLC may share your contact information with licensed insurance agents and
                carriers in our partner network. These partners have their own Do Not Call policies and
                procedures. To be removed from a specific partner's call list, you must contact that
                partner directly. We encourage all partners to honor Do Not Call requests promptly.
              </p>
            </div>

            <div id="compliance">
              <h2 className="text-xl font-bold text-[#1a1733] mb-3">Compliance</h2>
              <p className="text-[#5a5870] leading-relaxed text-sm">
                Top Dog Leads LLC is committed to complying with the Telephone Consumer Protection Act
                (TCPA), the Telemarketing Sales Rule (TSR), and applicable state telemarketing laws.
                We train our staff and partners on compliance and take violations seriously.
                If you believe your Do Not Call request has not been honored, please contact us
                immediately.
              </p>
            </div>

            <div id="contact-dnc" className="rounded-2xl border border-[#d4d0f5] bg-[#f7f6ff] p-7">
              <h2 className="text-xl font-bold text-[#1a1733] mb-3">Contact Us</h2>
              <p className="text-sm text-[#5a5870] mb-4">
                To exercise your Do Not Call rights or for questions about this policy:
              </p>
              <ul className="space-y-2 text-sm text-[#5a5870]">
                <li>📞 <a href="tel:+18668960447" className="text-[#534AB7]">+1 866 896 0447</a></li>
                <li>✉️ <a href="mailto:donotcall@topdoglead.com" className="text-[#534AB7]">donotcall@topdoglead.com</a></li>
                <li>🏢 Top Dog Leads LLC — Independent Insurance Marketing Company</li>
              </ul>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}