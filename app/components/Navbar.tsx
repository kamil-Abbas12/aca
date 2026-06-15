"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Licensing Information", href: "#" },
];

const blogLinks = [
  { label: "Blog Grid", href: "/blog" },
  { label: "Blog Sidebar", href: "/blog/sidebar" },
];

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (blogRef.current && !blogRef.current.contains(event.target as Node)) {
        setBlogOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2650] bg-[#0D0B1A]">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Healthcare Logo"
              width={180}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3.5 py-1.5 text-[13.5px] text-[#6B6A80] transition-colors hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
              >
                {item.label}
              </Link>
            ))}

            {/* Blog Dropdown */}
            <div className="relative" ref={blogRef}>
              <button
                type="button"
                onClick={() => setBlogOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-[13.5px] text-[#6B6A80] transition-colors hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
              >
                Blog
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    blogOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {blogOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-[#2A2650] bg-[#141125] p-2 shadow-xl shadow-black/30">
                  {blogLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setBlogOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-[#B8B6D9] transition-colors hover:bg-[#7F77DD]/10 hover:text-[#EEEDFE]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Call Now Button */}
          <a
            href="tel:+18668960447"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#7F77DD] bg-[#534AB7] px-4 py-2 text-[13.5px] font-medium text-[#EEEDFE] transition-opacity hover:opacity-90"
          >
            <PhoneIcon />
            Call Now: +1 866 896 0447
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M6.6 10.8c1.8 3.5 3.1 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}
