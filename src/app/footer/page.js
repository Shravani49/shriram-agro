import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#124125] text-white">

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body { overflow-x: hidden; }

        @media (max-width: 560px) {
          .footer-main { padding: 24px 16px !important; }
          .footer-grid { gap: 20px !important; }
          .footer-logo-img { width: 36px !important; height: 36px !important; }
          .footer-logo-name { font-size: 12px !important; line-height: 1.3 !important; }
          .footer-about-text { font-size: 11px !important; line-height: 1.6 !important; }
          .footer-col-heading { font-size: 12px !important; margin-bottom: 8px !important; }
          .footer-link, .footer-service-item { font-size: 11px !important; line-height: 1.5 !important; }
          .footer-contact-item { font-size: 11px !important; word-break: break-all !important; }
          .footer-bottom { padding: 10px 16px !important; }
          .footer-bottom-text { font-size: 10px !important; }
          .footer-bottom-links { gap: 12px !important; }
          .footer-bottom-link { font-size: 10px !important; }
          .footer-icon { width: 14px !important; height: 14px !important; }
          .footer-space-y li { margin-top: 6px !important; }
        }

        @media (max-width: 360px) {
          .footer-main { padding: 20px 12px !important; }
          .footer-logo-name { font-size: 11px !important; }
        }
      `}</style>

      <div className="footer-main px-6 sm:px-10 lg:px-28 py-10 sm:py-14">
        <div className="footer-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Column 1 - About — full width on mobile */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/images/logo.jpeg"
                alt="Shri Ram Agro Industries"
                className="footer-logo-img w-10 h-10 rounded-full object-cover"
              />
              <h3 className="footer-logo-name text-sm text-white font-bold">Shri Ram Agro Industries</h3>
            </div>
            <p className="footer-about-text text-xs text-white/80 leading-relaxed">
              Transforming food and organic waste into nutrient-rich compost and wide range of organic fertilizers through sustainable waste management solutions.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="footer-col-heading text-sm font-bold text-white mb-3">Quick Links</h4>
            <ul className="footer-space-y space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/blogs", label: "Blog" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link text-white/80 text-xs hover:text-[#F2C94C] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="footer-col-heading text-sm font-bold text-white mb-3">Our Services</h4>
            <ul className="footer-space-y space-y-2">
              {[
                "Waste Management Consultancy",
                "Quick Odor Control Solutions",
                "Organic Fertilizer Plant Setup",
                "Quality Control & Waste Audit",
                "Sustainable Agriculture",
              ].map((s) => (
                <li key={s} className="footer-service-item text-white/80 text-xs">{s}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="footer-col-heading text-sm font-bold text-white mb-3">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="footer-icon w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="footer-contact-item text-white text-xs">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="footer-icon w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:rahulppadwal@gmail.com" className="footer-contact-item text-white/80 hover:text-[#F2C94C] transition-colors text-xs">
                  rahulppadwal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="footer-icon w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919921881000" className="footer-contact-item text-white/80 hover:text-[#F2C94C] transition-colors text-xs">
                  +91 9921881000
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="footer-bottom px-6 sm:px-10 lg:px-28 py-4 flex flex-col md:flex-row justify-center items-center gap-2 text-center">
          <p className="footer-bottom-text text-white text-xs">
            © Shri Ram Agro Industries. All rights reserved.
          </p>
          <div className="footer-bottom-links flex gap-5">
            <a href="#" className="footer-bottom-link text-white/60 hover:text-[#F2C94C] transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="footer-bottom-link text-white/60 hover:text-[#F2C94C] transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}