import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Licensing Information ",
  description:
  "View licensing information for Top Dog Leads LLC and our partner agents, licensed to provide health insurance guidance across the United States.",
  alternates: { canonical: "https://affordablecareact.topdoglead.com/licensing" },
  robots: { index: true, follow: true },
};

const stateGroups = [
  {
    region: "Southeast",
    states: ["Alabama", "Florida", "Georgia", "Kentucky", "Mississippi", "North Carolina", "South Carolina", "Tennessee", "Virginia", "West Virginia"],
  },
  {
    region: "Northeast",
    states: ["Connecticut", "Delaware", "Maine", "Maryland", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"],
  },
  {
    region: "Midwest",
    states: ["Illinois", "Indiana", "Iowa", "Kansas", "Michigan", "Minnesota", "Missouri", "Nebraska", "North Dakota", "Ohio", "South Dakota", "Wisconsin"],
  },
  {
    region: "Southwest",
    states: ["Arizona", "Arkansas", "Louisiana", "New Mexico", "Oklahoma", "Texas"],
  },
  {
    region: "West",
    states: ["Alaska", "California", "Colorado", "Hawaii", "Idaho", "Montana", "Nevada", "Oregon", "Utah", "Washington", "Wyoming"],
  },
];

export default function LicensingPage() {
  return (
    <>
      <main id="main-content">

        {/* Hero */}
        <section className="bg-[#0D0B1A] py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7F77DD]/30 bg-[#7F77DD]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7F77DD]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#AFA9EC]">Compliance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#EEEDFE] mb-5">
              Licensing Information
            </h1>
            <p className="text-[#6B6A80] leading-relaxed max-w-xl mx-auto">
              Top Dog Leads LLC works exclusively with licensed insurance professionals to ensure
              every consumer receives compliant, regulated health insurance guidance.
            </p>
          </div>
        </section>

        {/* About our licensing */}
        <section className="bg-[#f7f6ff] py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="licensing-about">
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="licensing-about" className="text-3xl font-bold text-[#1a1733] mb-5">
                  Our Commitment to Licensed, Compliant Insurance Services
                </h2>
                <p className="text-[#5a5870] leading-relaxed text-sm mb-4">
                  Top Dog Leads LLC is an independent marketing and lead generation company, not a
                  licensed insurance agency. We connect consumers with licensed health insurance
                  agents and carriers who are fully authorized to sell insurance products in
                  their respective states.
                </p>
                <p className="text-[#5a5870] leading-relaxed text-sm mb-4">
                  All insurance agents and agencies in our partner network are required to maintain
                  active, valid insurance producer licenses in every state where they conduct business.
                  We verify licensing status and require proof of licensure before onboarding any agent.
                </p>
                <p className="text-[#5a5870] leading-relaxed text-sm">
                  We are not affiliated with any state insurance department, the federal government,
                  Healthcare.gov, Medicare, or any government agency. Use of terms such as "ACA" or
                  "Affordable Care Act" is descriptive only.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "🛡️",
                    title: "Agent Licensing Requirement",
                    body: "Every agent in our network must hold an active health and life insurance producer license in each state they serve.",
                  },
                  {
                    icon: "✅",
                    title: "Carrier Compliance",
                    body: "We partner only with carriers authorized to offer health plans in each market, including ACA marketplace plans, short-term plans, and supplemental coverage.",
                  },
                  {
                    icon: "📋",
                    title: "Ongoing Verification",
                    body: "We periodically verify the license status of our agent partners to ensure ongoing compliance with state insurance regulations.",
                  },
                  {
                    icon: "🔒",
                    title: "Data Protection",
                    body: "Consumer data is handled in accordance with HIPAA guidelines and applicable state privacy laws.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-[#d4d0f5] bg-white p-5 shadow-sm">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-[#1a1733] mb-1">{item.title}</h3>
                      <p className="text-xs text-[#5a5870] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* States served */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="states-heading">
          <div className="mx-auto max-w-5xl">
            <h2 id="states-heading" className="text-3xl font-bold text-[#1a1733] text-center mb-4">
              States Where We Connect Consumers with Licensed Agents
            </h2>
            <p className="text-center text-sm text-[#8886a0] mb-12">
              Our partner agents are licensed to assist consumers in all 50 US states and Washington D.C.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateGroups.map((group) => (
                <div key={group.region} className="rounded-2xl border border-[#d4d0f5] bg-[#f7f6ff] p-6">
                  <h3 className="text-sm font-bold text-[#534AB7] uppercase tracking-wider mb-4">{group.region}</h3>
                  <ul className="space-y-1.5">
                    {group.states.map((state) => (
                      <li key={state} className="flex items-center gap-2 text-sm text-[#5a5870]">
                        <span className="h-1 w-1 rounded-full bg-[#534AB7] flex-shrink-0" aria-hidden="true" />
                        {state}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verify / contact */}
        <section className="bg-[#0D0B1A] py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#EEEDFE] mb-4">
              Verify an Agent's License
            </h2>
            <p className="text-[#6B6A80] mb-8 leading-relaxed">
              You can verify that any insurance agent is properly licensed in your state by contacting
              your state's Department of Insurance or visiting the NIPR (National Insurance Producer Registry).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nipr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#534AB7] border border-[#7F77DD] px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                Visit NIPR.com →
              </a>
              <a
                href="tel:+18668960447"
                className="rounded-xl border border-[#2A2650] px-8 py-3 text-sm font-medium text-[#AFA9EC] hover:border-[#7F77DD] transition-colors"
              >
                📞 Call Us: +1 866 896 0447
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}