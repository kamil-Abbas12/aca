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
    slug: "understanding-the-affordable-care-act",
    title: "Understanding the Affordable Care Act: A Beginner's Guide",
    excerpt:
      "Navigating health insurance can feel overwhelming. This guide breaks down the ACA in plain language — from metal tiers and subsidies to enrollment windows.",
    caption:
      "Health insurance doesn't have to be confusing. Here's everything a beginner needs to know about the ACA, Marketplace plans, and how to get financial help.",
    date: "2025-06-10",
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

 
];

export const CATEGORIES: string[] = [
  "Health Insurance",
  "Coverage Options",
  "Enrollment Tips",
  "Subsidies & Cost Help",
  "Family Plans",
  "Medicaid",
];