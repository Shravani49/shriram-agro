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
    <header className="w-full bg-[#f4f7ee] border-b border-[#d4e0bc] fixed top-0 left-0 right-0 z-50">

      <style>{`
        /* Prevent horizontal overflow */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── ANDROID (≤560px) ── */
        @media (max-width: 560px) {

          /* Tighter horizontal padding on small screens */
          .nav-container {
            padding-left: 14px !important;
            padding-right: 14px !important;
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }

          /* Smaller logo image */
          .nav-logo-img {
            width: 38px !important;
            height: 38px !important;
          }

          /* Show company name but smaller */
          .nav-logo-text {
            display: block !important;
            font-size: 13px !important;
            line-height: 1.3 !important;
            max-width: 180px !important;
          }

          /* Hamburger — larger tap target */
          .nav-hamburger {
            padding: 6px !important;
            min-width: 40px !important;
            min-height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* Mobile menu spacing */
          .nav-mobile-menu {
            padding-left: 14px !important;
            padding-right: 14px !important;
            padding-bottom: 16px !important;
          }

          /* Mobile nav links — bigger tap targets */
          .nav-mobile-link {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
            font-size: 15px !important;
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
          }

          /* Mobile CTA buttons */
          .nav-mobile-btn {
            padding-top: 12px !important;
            padding-bottom: 12px !important;
            font-size: 15px !important;
            min-height: 44px !important;
          }
        }

        /* ── VERY SMALL ANDROID (≤360px) ── */
        @media (max-width: 360px) {
          .nav-logo-text {
            font-size: 12px !important;
            max-width: 150px !important;
          }
          .nav-logo-img {
            width: 34px !important;
            height: 34px !important;
          }
        }
      `}</style>

      {/* NAV CONTAINER */}
      <div className="nav-container flex items-center justify-between px-6 lg:px-12 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="Shri Ram Agro Industries"
            className="nav-logo-img w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-[#8aad5e]"
          />
          <span className="nav-logo-text hidden sm:block font-semibold text-base sm:text-xl lg:text-2xl text-[#1F3D2B]">
            Shri Ram Agro Industries
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium transition-colors ${
                    pathname === href
                      ? "text-[#1F3D2B] font-semibold"
                      : "text-[#3a3a2e] hover:text-[#1F3D2B]"
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
          className="nav-hamburger lg:hidden text-[#1F3D2B]"
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
        <div className="nav-mobile-menu lg:hidden bg-[#f4f7ee] border-t border-[#d4e0bc] px-6 pb-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="nav-mobile-link block text-[#1F3D2B] font-medium py-2"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/founder"
            onClick={() => setIsOpen(false)}
            className="nav-mobile-btn block bg-[#f2c201] text-[#1a1400] px-4 py-2 rounded-lg text-center font-medium"
          >
            About Founder
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="nav-mobile-btn block bg-[#253d18] text-white px-4 py-2 rounded-lg text-center font-medium"
          >
            Consultancy
          </Link>
        </div>
      )}
    </header>
  );
}