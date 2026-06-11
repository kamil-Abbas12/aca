// app/components/Navbar.tsx

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#f2f2f2] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          
          {/* Left Side - Logo */}
          <Link href="/" className="flex flex-col items-center sm:items-start">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Healthcare Logo"
                width={280}
                height={60}
                priority
              />
            </div>

            <p className="text-[14px] text-gray-600 mt-1">
              a non-government resource
            </p>
          </Link>

          {/* Right Side */}
          <div className="text-center sm:text-right">
            <p className="text-gray-600 text-sm md:text-base">
              TTY Users:{" "}
              <span className="font-medium text-gray-800">711</span>
              <span className="mx-2">|</span>
              Today:{" "}
              <span className="font-medium text-gray-800">
                8:00AM - 10:00PM (EST)
              </span>
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}