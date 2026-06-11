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
    <section className="relative overflow-hidden">
      {/* top background */}
      <div className="bg-[#f7f7f5] pt-14 pb-28 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#3b3b3b] md:text-5xl">
            <span className="text-[#25b8f2]">3 easy</span> steps to get your
            customized
            <br />
            quotes <span className="text-[#25b8f2]">in minutes</span>
          </h2>
        </div>
      </div>

      {/* bottom blue strip */}
      <div className="h-36 bg-[#21b4ee] md:h-40" />

      {/* floating card */}
      <div className="pointer-events-none absolute inset-x-0 top-[118px] px-4 md:top-[150px]">
        <div className="mx-auto max-w-5xl rounded-[4px] bg-white shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 divide-y divide-[#efefef] md:grid-cols-3 md:divide-x md:divide-y-0">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex min-h-[210px] flex-col items-center justify-center px-8 py-8 text-center md:min-h-[185px]"
              >
                <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-[#9a9a9a]">
                  {step.title}
                </p>

                <div className="mb-4 flex h-16 w-16 items-center justify-center text-[#3f3f46]">
                  {step.icon}
                </div>

                <p className="max-w-[180px] text-sm leading-6 text-[#4b4b4b]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* spacer so the absolute card doesn't overlap following content */}
    </section>
  );
}

function DocPencilIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-14 w-14"
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
      className="h-14 w-14"
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
      <circle cx="39.5" cy="37.5" r="8.5" stroke="currentColor" strokeWidth="1.8" />
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
      className="h-14 w-14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 10L49 16V29C49 39.5 42.1 48.8 32 52C21.9 48.8 15 39.5 15 29V16L32 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="30" r="8.5" stroke="currentColor" strokeWidth="1.8" />
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
