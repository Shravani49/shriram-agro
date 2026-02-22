"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full bg-[#f4f7ee] border-b border-[#d4e0bc] sticky top-0 z-50">
      
      {/* NAV CONTAINER */}
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="Shri Ram Agro Industries"
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-[#8aad5e]"
          />
          <span className="hidden sm:block font-semibold text-lg lg:text-xl text-[#1F3D2B]">
            Shri Ram Agro Industries
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium text-[#3a3a2e] hover:text-[#1F3D2B] ${
                pathname === href ? "text-[#1F3D2B] font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/founder"
            className="bg-[#f2c201] text-[#1a1400] px-4 py-2 rounded-lg font-medium hover:bg-[#fad429] transition"
          >
            About Founder
          </Link>
          <Link
            href="/contact"
            className="bg-[#253d18] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a2e10] transition"
          >
            Consultancy
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#1F3D2B]"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#f4f7ee] border-t border-[#d4e0bc] px-6 pb-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-[#1F3D2B] font-medium py-2"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/founder"
            onClick={() => setIsOpen(false)}
            className="block bg-[#f2c201] text-[#1a1400] px-4 py-2 rounded-lg text-center font-medium"
          >
            About Founder
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-[#253d18] text-white px-4 py-2 rounded-lg text-center font-medium"
          >
            Consultancy
          </Link>
        </div>
      )}
    </header>
  );
}