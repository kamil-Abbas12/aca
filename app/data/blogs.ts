// app/data/blogs.ts

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: { bold?: string; text: string }[] }
  | { type: "pro_tip"; text: string }
  | { type: "closing"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  caption: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: ContentBlock[];
}

export const BLOGS: BlogPost[] = [
  {
    slug: "aca-essential-health-benefits-no-deductible",
    title:
      "The Hidden Perks of ACA Plans: 10 Essential Health Benefits You Don't Pay a Deductible For",
    excerpt:
      "Most people assume they're on their own until they hit their deductible. But under the ACA, a whole category of preventive and wellness services is covered at 100% - no deductible, no copay, no coinsurance.",
    caption:
      "A major subset of ACA-mandated services bypasses your deductible entirely. Here are the 10 high-value benefits you're already paying for every month and might not be using.",
    date: "2026-06-29",
    category: "Health Insurance",
    readTime: "5 min read",
    image: "/aca-essential-health-benefits-no-deductible.webp",
    content: [
      {
        type: "paragraph",
        text: "Most people look at health insurance through a single lens: How high is my deductible, and how much do I have to pay out of pocket before this thing actually kicks in?",
      },
      {
        type: "paragraph",
        text: "If you have an Affordable Care Act (ACA) plan - whether you bought it on the federal marketplace, a state exchange, or get it through an employer - it's easy to assume you're totally on your own for minor doctor visits until you smash through that deductible.",
      },
      {
        type: "paragraph",
        text: "But there is a massive loophole built into the law that most people miss. Under the ACA, all compliant plans are legally required to cover a broad suite of Essential Health Benefits. Even better, a major subset of these services - specifically focusing on preventive and wellness care - bypasses your deductible entirely. As long as you see an in-network doctor, you pay exactly $0 out of pocket. No deductible, no copay, no coinsurance.",
      },
      {
        type: "paragraph",
        text: "If you aren't booking these 10 high-value services, you are essentially leaving free healthcare on the table.",
      },
      {
        type: "heading",
        text: "1. Your Annual Wellness Exam",
      },
      {
        type: "paragraph",
        text: "Think of this as your yearly physical baseline. You can walk into an in-network primary care doctor once a year to get your vitals checked, discuss your overall health history, and plot out future screenings. The office visit itself is entirely free.",
      },
      {
        type: "heading",
        text: "2. Routine Immunizations & Vaccines",
      },
      {
        type: "paragraph",
        text: "Keeping up with your shots shouldn't drain your bank account. Your ACA plan covers standard immunizations at 100%. This includes your annual flu shot, COVID-19 vaccines, Tdap (tetanus, diphtheria, pertussis), and shingles or pneumonia vaccines if you meet the age requirements.",
      },
      {
        type: "heading",
        text: "3. Blood Pressure & Cholesterol Screenings",
      },
      {
        type: "paragraph",
        text: "Cardiovascular issues are often silent. Because managing them early prevents catastrophic medical events later, blood pressure checks and cholesterol blood panels are covered without touching your deductible.",
      },
      {
        type: "heading",
        text: "4. Mental Health & Depression Screenings",
      },
      {
        type: "paragraph",
        text: "Behavioral health is just as critical as physical health. While ongoing therapy sessions typically involve a copay or count toward your deductible, the initial screenings for depression and behavioral risks are covered completely. Your primary doctor can run these evaluations during your annual visit for free.",
      },
      {
        type: "heading",
        text: "5. Type 2 Diabetes Screenings",
      },
      {
        type: "paragraph",
        text: "If you fall into specific risk categories - like being overweight or having a family history of diabetes - your plan covers regular blood glucose or A1C screenings. Catching pre-diabetes early can save you thousands in future maintenance care.",
      },
      {
        type: "heading",
        text: "6. Cancer Screenings (Based on Age and Risk)",
      },
      {
        type: "paragraph",
        text: "Routine cancer screenings are covered at 100% because early detection saves lives. Depending on your age and risk factors, this includes:",
      },
      {
        type: "bullets",
        items: [
          { bold: "Mammograms", text: " for breast cancer screening." },
          { bold: "Pap smears", text: " for cervical cancer screening." },
          {
            bold: "Colonoscopies or home screening kits",
            text: " for colorectal cancer.",
          },
        ],
      },
      {
        type: "heading",
        text: "7. Complete Birth Control & Contraception",
      },
      {
        type: "paragraph",
        text: "For women, ACA plans must cover all FDA-approved contraceptive methods prescribed by a doctor. This includes oral pills, barrier methods, and even long-acting devices like IUDs or implants, along with the medical procedure required to insert and remove them.",
      },
      {
        type: "heading",
        text: "8. Prenatal & Maternal Care Basics",
      },
      {
        type: "paragraph",
        text: "If you are expecting, your routine prenatal visits - including essential blood tests, gestational diabetes screenings, and Rh incompatibility screenings - are fully covered from day one. Your plan will also pay for a breast pump and breastfeeding counseling sessions post-birth.",
      },
      {
        type: "heading",
        text: "9. Diet & Obesity Counseling",
      },
      {
        type: "paragraph",
        text: "If a doctor determines that your body mass index (BMI) puts you at risk for chronic illness, your plan covers nutritional counseling. You can work with a professional to develop a healthier meal and lifestyle plan without receiving a surprise bill.",
      },
      {
        type: "heading",
        text: "10. Pediatric Dental & Vision Checks",
      },
      {
        type: "paragraph",
        text: "While adult dental and vision aren't standard mandates on basic medical plans, pediatric services are part of the core essential benefits. For children under 19, routine eye exams, vision screenings, dental cleanings, and even fluoride treatments are covered to ensure they grow up healthy.",
      },
      {
        type: "heading",
        text: "The Fine Print: How to Keep It Free",
      },
      {
        type: "paragraph",
        text: "To make sure you don't accidentally trigger a bill, keep two golden rules in mind:",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Stay In-Network:",
            text: " The ACA only guarantees zero-cost care if you use providers, labs, and clinics that are actively contracted with your specific insurance network.",
          },
          {
            bold: 'Watch for "Diagnostic" Shifts:',
            text: " If you go in for a free screening and your doctor finds something that requires further testing or treatment, the appointment can shift from \"preventive\" to \"diagnostic.\" Any follow-up tests or treatments will start counting toward your deductible.",
          },
        ],
      },
      {
        type: "pro_tip",
        text: 'Tell your doctor up front that you\'re there for a "preventive" annual visit. If a separate concern comes up, ask whether it will be billed diagnostically before agreeing to additional tests in the same visit.',
      },
      {
        type: "closing",
        text: "The next time you look at your health insurance card, don't just focus on the scary deductible number. Flip it over, log into your member portal, and schedule that free annual checkup. It's a benefit you're already paying for every month - you might as well use it.",
      },
    ],
  },
  {
  slug: "how-aca-plans-handle-therapy-and-treatment",
  title:
    "The Reality of Mental Health Coverage: How ACA Plans Handle Therapy and Treatment",
  excerpt:
    "Therapy isn't an optional add-on under the ACA - it's an Essential Health Benefit. But parity rules, deductibles, and network gaps still shape what you actually pay for mental health and substance use treatment.",
  caption:
    "Mental health care is legally guaranteed under ACA plans, but networks, deductibles, and medical necessity reviews still decide what you pay out of pocket. Here's how coverage really works in practice.",
  date: "2026-06-24",
  category: "Health Insurance",
  readTime: "4 min read",
  image: "/mental-health-therapy-coverage-aca-plans.webp",
  content: [
    {
      type: "paragraph",
      text: "Navigating health insurance is complicated enough, but when it comes to mental health treatment, behavioral therapy, and substance use counseling, the fine print matters. Under the Affordable Care Act (ACA), coverage rules changed dramatically, yet many individuals still struggle to get their sessions paid for without a fight.",
    },
    {
      type: "paragraph",
      text: "Before the ACA became law, individual market plans could treat mental health care as an optional add-on. Today, it is legally classified as an Essential Health Benefit (EHB). This means every single plan on the federal exchange, state marketplaces, or small-group market must include coverage for therapy and mental health services. Here is exactly how that plays out in practice.",
    },
    {
      type: "heading",
      text: "The Legal Foundation: Essential Benefits & Parity",
    },
    {
      type: "paragraph",
      text: "The ACA relies heavily on two pillars to enforce mental health coverage: Essential Health Benefits and the Mental Health Parity and Addiction Equity Act (MHPAEA). Combined, these frameworks dictate that insurers cannot arbitrarily cap your therapy visits or charge higher copays just because the care is psychological rather than physical.",
    },
    {
      type: "paragraph",
      text: "Parity means financial and quantitative limits must be equal. If your plan offers unlimited visits to a primary care doctor for a chronic physical condition with a $30 copay, it generally cannot limit you to 12 therapy sessions a year or charge a $60 copay for those sessions. The deductible, copayment, and out-of-pocket maximum rules must run parallel to medical and surgical benefits.",
    },
    {
      type: "heading",
      text: "What is Actually Covered?",
    },
    {
      type: "paragraph",
      text: 'The term "therapy and treatment" covers a surprisingly wide net under compliant plans. It is not limited to just sitting on a couch talking to a psychologist. Standard coverage includes:',
    },
    {
      type: "bullets",
      items: [
        {
          bold: "Outpatient Services:",
          text: " Individual psychotherapy, group therapy, family counseling, and intensive outpatient programs (IOP).",
        },
        {
          bold: "Inpatient Care:",
          text: " Residential treatment programs, psychiatric hospitalization, and detox facilities.",
        },
        {
          bold: "Behavioral Health Treatment:",
          text: " Targeted therapies such as Applied Behavior Analysis (ABA) for autism spectral conditions, cognitive behavioral therapy (CBT), and dialectical behavior therapy (DBT).",
        },
        {
          bold: "Substance Use Disorder Treatment:",
          text: " Counseling, medication-assisted treatment (MAT), and long-term recovery support.",
        },
        {
          bold: "The Pre-Existing Condition Guarantee:",
          text: " Insurers are strictly prohibited from denying coverage or charging higher premiums if you have a history of depression, anxiety, PTSD, or substance use before enrolling. Your history has zero negative impact on your premium rates.",
        },
      ],
    },
    {
      type: "heading",
      text: "The Catch: Networks, Deductibles, and Medical Necessity",
    },
    {
      type: "paragraph",
      text: "While the law guarantees that therapy must be covered, it does not guarantee that your specific favorite therapist is in your plan's network. This is where most consumers run into massive out-of-pocket bills.",
    },
    {
      type: "heading",
      text: "1. The Network Bottleneck",
    },
    {
      type: "paragraph",
      text: "A major hurdle in modern mental health care is provider network participation. Many highly qualified therapists operate on a cash-pay basis because insurance reimbursement rates can be low and the administrative burden is high. If you choose an out-of-network therapist, an ACA Bronze or Silver HMO plan may pay exactly $0 toward those sessions. If you have a PPO, they might cover a portion, but only after you meet a steep out-of-network deductible.",
    },
    {
      type: "heading",
      text: "2. Deductibles and Cost-Sharing",
    },
    {
      type: "paragraph",
      text: "Unless a service is classified as preventive care (like a routine annual depression screening, which is covered at 100%), your therapy sessions are subject to your standard plan mechanics. On a high-deductible health plan (HDHP), you will pay the negotiated insurance rate for every single therapy session out-of-pocket until you hit your annual deductible.",
    },
    {
      type: "heading",
      text: '3. The "Medical Necessity" Hurdle',
    },
    {
      type: "paragraph",
      text: "Insurers retain the right to utilize utilization management. This means they can require a formal diagnosis code from a DSM-5 manual to justify the sessions. They can also require prior authorization for intensive treatments or audit clinician notes after a certain number of sessions to verify that the patient is making measurable clinical progress.",
    },
    {
      type: "heading",
      text: "How to Optimize Your Coverage",
    },
    {
      type: "paragraph",
      text: "If you are looking to maximize insurance benefits for behavioral health, strategy matters:",
    },
    {
      type: "bullets",
      items: [
        {
          bold: "Verify the network tier:",
          text: " Look specifically for plans with broader PPO networks if you already have an established provider who doesn't take standard marketplace insurance.",
        },
        {
          bold: "Leverage HSA or FSA dollars:",
          text: " Use these accounts to pay for those pre-deductible therapy costs with pre-tax income, instantly shaving a percentage off your real costs.",
        },
        {
          bold: "Check for independent EAPs:",
          text: " Many employer-sponsored setups or secondary market associations bundle separate Employee Assistance Programs that offer 3 to 6 completely free therapy sessions per issue, bypassing the deductible entirely.",
        },
      ],
    },
  ],
},
  {
    slug: "understanding-the-affordable-care-act",
    title: "Understanding the Affordable Care Act: A Beginner's Guide",
    excerpt:
      "Navigating health insurance can feel overwhelming. This guide breaks down the ACA in plain language - from metal tiers and subsidies to enrollment windows.",
    caption:
      "Health insurance doesn't have to be confusing. Here's everything a beginner needs to know about the ACA, Marketplace plans, and how to get financial help.",
    date: "2026-06-10",
    category: "Health Insurance",
    readTime: "6 min read",
    image: "/family-health-insurance.webp",
    content: [
      {
        type: "heading",
        text: "What is the ACA, exactly?",
      },
      {
        type: "paragraph",
        text: "Passed back in 2010, the Affordable Care Act was designed with a simple goal: make health insurance accessible and affordable for people who don't get it through a traditional job. Instead of letting insurance companies run the wild west of health coverage, the ACA set up an online shopping mall called the Health Insurance Marketplace. But the law did much more than just build a website. It changed the rules of the game to protect everyday people.",
      },
      {
        type: "heading",
        text: "The Big Consumer Protections",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Pre-existing conditions are covered:",
            text: " Before the ACA, if you had asthma, diabetes, or even a past sports injury, an insurance company could flat-out deny you coverage or charge you astronomical rates. Now, they legally cannot charge you more or turn you away based on your health history.",
          },
          {
            bold: 'The 10 "Essential Health Benefits":',
            text: " Every single plan sold on the marketplace has to cover the basics. This includes emergency services, prescription drugs, mental health care, pregnancy, and free preventive care (like your annual check-up and flu shots).",
          },
          {
            bold: "Staying on your parents' plan:",
            text: " Young adults can stay on their parents' health insurance until they turn 26.",
          },
        ],
      },
      {
        type: "heading",
        text: 'The "Metal" Tiers: Bronze, Silver, Gold',
      },
      {
        type: "paragraph",
        text: "When you log onto the marketplace, you'll see plans categorized by metal tiers. These do not measure the quality of medical care you get. Instead, they tell you how you and your insurance company split the bills.",
      },
      {
        type: "table",
        headers: ["Tier", "Monthly Premium", "Out-of-Pocket Costs", "Best For..."],
        rows: [
          [
            "Bronze",
            "Lowest",
            "Highest",
            "Healthier individuals who just want a safety net for major emergencies.",
          ],
          [
            "Silver",
            "Moderate",
            "Moderate",
            'The "sweet spot" for most families, especially if you qualify for cost-sharing discounts.',
          ],
          [
            "Gold",
            "Highest",
            "Lowest",
            "People who manage chronic illnesses, take expensive prescriptions, or see doctors frequently.",
          ],
        ],
      },
      {
        type: "pro_tip",
        text: 'If your income falls into a certain range, choosing a silver plan unlocks extra discounts called "Cost-Sharing Reductions." This lowers your deductible automatically, giving you Gold-level out-of-pocket costs for a Silver-tier price.',
      },
      {
        type: "heading",
        text: "The Financial Help: Subsidies Explained",
      },
      {
        type: "paragraph",
        text: "Most people shopping on the marketplace don't pay the full sticker price for insurance. The government offers financial assistance called Premium Tax Credits (or subsidies) to lower your monthly payments. These discounts are tied directly to your household income. The less you make, the more help you get.",
      },
      {
        type: "heading",
        text: "What You Need to Know?",
      },
      {
        type: "paragraph",
        text: "Health insurance rules shift over time. For instance, the extra-generous premium subsidies that were available during the pandemic have recently expired. Because of this, monthly premiums and deductibles are higher across the board than they were a year or two ago, forcing many shoppers to look closely at bronze or gold options to balance their budgets.",
      },
      {
        type: "paragraph",
        text: "Additionally, your estimated income matters at tax time. If you underestimate your income on your application and make significantly more money during the year, you may have to pay back some of those premium discounts when you file your taxes. It is always smart to update the marketplace immediately if you change jobs or get a raise.",
      },
      {
        type: "heading",
        text: "How and When Can You Sign Up?",
      },
      {
        type: "paragraph",
        text: "You can't just buy an ACA plan any day of the year. You have to wait for specific windows of time.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Open Enrollment Period (OEP):",
            text: " This is the main annual window, typically running from November 1 to January 15 in most states. If you want coverage that kicks in for the upcoming year, this is your time to shop.",
          },
          {
            bold: "Special Enrollment Period (SEP):",
            text: ' If you miss the winter window, you can only sign up if you experience a "Qualifying Life Event." This includes major life disruptions like losing health insurance from a job, getting married, having a baby, or moving to a different state.',
          },
        ],
      },
      {
        type: "heading",
        text: "Summary for Beginners",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Go to HealthCare.gov",
            text: " to find out if your state uses the federal site or its own local platform.",
          },
          {
            bold: "Be accurate with your income estimates",
            text: " to avoid messy surprises when tax season rolls around.",
          },
          {
            bold: "Mark November 1 on your calendar",
            text: " so you never miss the annual window to shop, compare, and save.",
          },
        ],
      },
      {
        type: "closing",
        text: "Health insurance isn't exactly thrilling, but taking an hour or two to understand your options can save you thousands of dollars when it counts.",
      },
    ],
  },



 
]

export const CATEGORIES: string[] = [
  "Health Insurance",
  "Coverage Options",
  "Enrollment Tips",
  "Subsidies & Cost Help",
  "Family Plans",
  "Medicaid",
];