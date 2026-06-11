// components/Step.tsx
import React from "react";

type StepItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: StepItem[] = [
  {
    title: "STEP ONE",
    description: "Start by entering your ZIP code",
    icon: <DocPencilIcon />,
  },
  {
    title: "STEP TWO",
    description: "Answer a few easy questions",
    icon: <SearchPaperIcon />,
  },
  {
    title: "STEP THREE",
    description: "See plan options",
    icon: <ShieldDollarIcon />,
  },
];

export default function Step() {
  return (
    <section className="relative bg-[#f7f7f5] dark:bg-slate-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-800 dark:text-white">
            <span className="text-sky-500">3 easy</span> steps to get your
            customized
            <br className="hidden sm:block" />
            quotes <span className="text-sky-500">in minutes</span>
          </h2>
        </div>

        {/* Steps Card */}
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col items-center justify-center text-center p-8 lg:p-10 ${
                  index !== steps.length - 1
                    ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700"
                    : ""
                }`}
              >
                <p className="mb-5 text-xs font-bold tracking-[0.15em] text-slate-400 dark:text-slate-500">
                  {step.title}
                </p>

                <div className="mb-5 text-slate-700 dark:text-slate-200">
                  {step.icon}
                </div>

                <p className="max-w-[220px] text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 rounded-2xl bg-sky-500 p-6 sm:p-8 text-center shadow-lg">
          <p className="text-base sm:text-lg font-medium text-white">
            Get personalized health insurance options in just a few minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

function DocPencilIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="10"
        width="30"
        height="40"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19 21H34M19 27H34M19 33H29"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M35.5 37.5L46.8 26.2C48.3 24.7 50.7 24.7 52.2 26.2V26.2C53.7 27.7 53.7 30.1 52.2 31.6L40.9 42.9L34 45L35.5 37.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="50.5" cy="15.5" r="1.2" fill="#9adffd" />
      <circle cx="54.5" cy="20.5" r="1.2" fill="#9adffd" />
      <circle cx="47.5" cy="20.5" r="1.2" fill="#9adffd" />
    </svg>
  );
}

function SearchPaperIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="18"
        y="12"
        width="28"
        height="36"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14 17V43C14 44.7 15.3 46 17 46"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 22H38M22 28H38M22 34H31"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="39.5"
        cy="37.5"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M45.5 43.5L51 49"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="49.5" cy="14.5" r="1.2" fill="#9adffd" />
      <circle cx="53.5" cy="19.5" r="1.2" fill="#9adffd" />
      <circle cx="46.5" cy="19.5" r="1.2" fill="#9adffd" />
    </svg>
  );
}

function ShieldDollarIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 10L49 16V29C49 39.5 42.1 48.8 32 52C21.9 48.8 15 39.5 15 29V16L32 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="32"
        cy="30"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M32 24.5V35.5M35.3 27.2C35.3 26 34 25 32.3 25H31.4C29.5 25 28 26.1 28 27.6C28 29 29.2 29.7 31.2 30.1L32.8 30.4C34.8 30.8 36 31.6 36 33C36 34.5 34.5 35.6 32.6 35.6H31.7C30 35.6 28.7 34.6 28.7 33.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M50 13L52.5 10.5M54 17H57"
        stroke="#ffb44c"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 16L12 13.5M10 20H7"
        stroke="#9adffd"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}