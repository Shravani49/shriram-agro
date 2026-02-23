import Link from "next/link";
export default function Footer() {
  return (



<footer className="bg-[#124125] text-white">
      
      {/* Main Footer Content */}
      <div className="px-6 sm:px-10 lg:px-28 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpeg"
                alt="Shri Ram Agro Industries"
                className="w-16 h-16 rounded-full object-cover"
              />
              <h3 className="text-lg sm:text-base text-white font-bold">Shri Ram Agro Industries</h3>
            </div>
            <p className="text-sm sm:text-base text-white/80">
              Transforming food and organic waste into nutrient-rich compost and organic fertilizers through sustainable waste management solutions.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-base sm:text-lg font-medium">
  <li>
    <Link href="/" className="text-white/80 text-sm hover:text-[#F2C94C] transition-colors">
      Home
    </Link>
  </li>

  <li>
    <Link href="/about" className="text-white/80 text-sm hover:text-[#F2C94C] transition-colors">
      About Us
    </Link>
  </li>

  <li>
    <Link href="/services" className="text-white/80 text-sm hover:text-[#F2C94C] transition-colors">
      Services
    </Link>
  </li>


  <li>
    <Link href="/blogs" className="text-white/80 text-sm hover:text-[#F2C94C] transition-colors">
      Blog
    </Link>
  </li>
</ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-base sm:text-lg">
              <li className="text-white/80 ">Waste Management Systems</li>
              <li className="text-white/80 ">Bio-Processing Solutions</li>
              <li className="text-white/80 ">Organic Fertilizer Production</li>
              <li className="text-white/80 ">Regenerative Agriculture</li>
              <li className="text-white/80 ">Project Consultancy</li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-base sm:text-lg">
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:rahulppadwal@gmail.com" className="text-white/80 hover:text-[#F2C94C] transition-colors duration-200 text-base sm:text-lg">
                  rahulppadwal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+911234567890" className="text-white/80 hover:text-[#F2C94C] transition-colors duration-200 text-base sm:text-lg">
                  +91 9921881000
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-6 sm:px-10 lg:px-28 py-6 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
          <p className="text-white text-sm sm:text-base">
            © 2026 Shri Ram Agro Industries. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-[#F2C94C] transition-colors duration-200 text-sm sm:text-base">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[#F2C94C] transition-colors duration-200 text-sm sm:text-base">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>

  )}