"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-family: 'Georgia', serif;
          font-size: 1.15rem; /* increased */
          font-weight: 600;
          color: #3a3a2e;
          text-decoration: none;
          padding: 8px 0;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #5a8432;
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover {
          color: #1F3D2B;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: #1F3D2B;
          font-weight: 700;
        }
        .nav-link.active::after {
          width: 100%;
          background: #5a8432;
        }

        .btn-founder {
          font-family: 'Georgia', serif;
          font-size: 1.05rem; /* increased */
          font-weight: 600;
          color: #1a1400;
          background: #f2c201;
          padding: 14px 28px; /* bigger */
          border-radius: 10px;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 3px 0px #c49a00, 0 6px 18px rgba(242,194,1,0.25);
          white-space: nowrap;
          display: inline-block;
        }
        .btn-founder:hover {
          background: #fad429;
          box-shadow: 0 5px 0px #c49a00, 0 8px 22px rgba(242,194,1,0.35);
          transform: translateY(-2px);
        }

        .btn-consult {
          font-family: 'Georgia', serif;
          font-size: 1.05rem; /* increased */
          font-weight: 600;
          color: #f0f5e8;
          background: #253d18;
          padding: 14px 28px; /* bigger */
          border-radius: 10px;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 3px 0px #111e09, 0 6px 20px rgba(37,61,24,0.3);
          white-space: nowrap;
          display: inline-block;
        }
        .btn-consult:hover {
          background: #1a2e10;
          box-shadow: 0 5px 0px #111e09, 0 10px 24px rgba(37,61,24,0.4);
          transform: translateY(-2px);
        }
      `}</style>

      <header
        style={{
          width: "100%",
          background: "#f4f7ee",
          borderBottom: "1.5px solid #d4e0bc",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
  style={{
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 28px",   // brings logo/name close to left & buttons to right
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>

          {/* LEFT — Logo + Brand Name */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px", /* increased */
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "82px", /* bigger logo */
                height: "82px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #8aad5e",
                flexShrink: 0,
              }}
            >
              <img
                src="/images/logo.jpeg"
                alt="Shri Ram Agro Industries"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: "700",
                  fontSize: "1.4rem", /* bigger brand name */
                  color: "#1F3D2B",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                Shri Ram Agro Industries
              </span>
              <span
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.8rem", /* slightly bigger */
                  color: "#6a8c4a",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Est. 2005 · FCO Registered
              </span>
            </div>
          </Link>

          {/* CENTER — Nav Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "48px", /* increased spacing */
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${pathname === href ? " active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* RIGHT — CTA Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px", /* more spacing */
              flexShrink: 0,
            }}
          >
            <Link href="/founder" className="btn-founder">
              About the Founder
            </Link>
            <Link href="/contact" className="btn-consult">
              Request Consultancy
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}