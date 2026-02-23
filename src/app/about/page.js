"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div id="about" className="bg-[#F1F3E0]">

      <style>{`
        /* ===== ANDROID / MOBILE RESPONSIVE FIXES ===== */

        @media (max-width: 767px) {
          .about-hero-inner {
            padding-top: 60px !important;
            padding-bottom: 80px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .about-hero-h1 {
            font-size: clamp(2rem, 9vw, 4rem) !important;
          }
          .about-hero-sub {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .about-company-label {
            font-size: 1.2rem !important;
            letter-spacing: 0.1em !important;
          }
          .about-card-inner {
            padding: 24px 16px !important;
          }
          .about-card-text {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 767px) {
          .mv-grid {
            grid-template-columns: 1fr !important;
          }
          .mv-card {
            padding: 28px 20px !important;
          }
        }

        @media (max-width: 767px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .team-card {
            padding: 20px 16px !important;
          }
          .founder-card {
            padding: 24px 16px !important;
          }
          .founder-card h3 {
            font-size: 1.4rem !important;
          }
          .founder-card p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 380px) {
          .team-member-inner {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }

        @media (max-width: 767px) {
          .cta-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .cta-h2 {
            font-size: clamp(1.8rem, 7vw, 3rem) !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .cta-buttons a {
            text-align: center !important;
          }
        }

        @media (max-width: 767px) {
          .about-company-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .about-company-content {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (max-width: 767px) {
          .mission-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .mission-header h2 {
            font-size: 2rem !important;
          }
          .mission-grid-wrapper {
            padding-left: 4px !important;
            padding-right: 4px !important;
          }
        }

        @media (max-width: 767px) {
          .stats-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .stats-content {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (max-width: 767px) {
          .team-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .team-header h2 {
            font-size: 2rem !important;
          }
          .team-header-label {
            font-size: 0.85rem !important;
            letter-spacing: 0.1em !important;
          }
        }
      `}</style>

      {/* Hero with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7baa67] via-[#27773a] to-[#09451f]">
        <div className="absolute top-0 right-0 w-96 h-116 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-116 bg-black/10 rounded-full blur-3xl"></div>

        <div className="about-hero-inner relative max-w-5xl mx-auto px-6 py-40 md:py-40">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="text-lg tracking-[0.3em] text-[#E5D9B6] font-bold mb-6 uppercase">
                Shriram Agro Industries
              </div>
              <div className="w-20 h-1 bg-[#E5D9B6]"></div>
            </div>

            <h1
              className="about-hero-h1 font-bold text-white leading-[1.15] tracking-tight max-w-xl"
              style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
            >
              Turning waste into<br />
              <span className="italic font-serif text-[#E5D9B6]">regenerative value</span>
            </h1>

            <p className="about-hero-sub text-sm sm:text-base text-white/100 max-w-2xl font-light leading-relaxed">
              22+ years of expertise in Organic Waste Management, Sustainable Agriculture practices, creating practical and science-backed solutions for a healthier planet.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C300,80 600,80 900,20 L1200,40 L1200,120 L0,120 Z" fill="#F1F3E0"></path>
          </svg>
        </div>
      </section>

      {/* About The Company */}
      <section className="about-company-section relative py-28 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/images/compost-facility.png"
            alt="Industrial Composting Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="about-company-content relative max-w-xl mx-auto px-4 sm:px-6">

          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="w-12 h-[2px] bg-[#000000]"></div>
              <span className="about-company-label text-m tracking-[0.25em] text-black font-bold">
                ABOUT THE COMPANY
              </span>
            </div>
          </div>

          <div className="about-card-inner bg-white border border-[#E5D9B6]/40 rounded-2xl px-6 sm:px-20 py-8 sm:py-12 shadow-2xl">
            <div className="about-card-text space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-black-100 font-semibold">
              <p>
                Shriram Agro Industries, founded by Mr. Rahul Prataprao Padwal, is dedicated to integrated Waste Management and Sustainable Agriculture Solutions. With over 22 years of field expertise, the company delivers science-driven technologies to transform multiple organic waste streams into regenerative agricultural value.
              </p>
              <p>
                What began as a soil restoration initiative has grown into a comprehensive enterprise working across municipal solid waste management, Industrial Organic waste treatment, Bio-methanation, CBG-linked organic by-products, and a wide range of high-quality organic fertilizer production.
              </p>
              <p>
                The organization develops eco-friendly waste transformation systems including composting, bio-digestion, decentralized zero-waste models, and customized microbial technologies for agricultural applications.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6">

          <div className="mission-header text-center mb-10 sm:mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#F1F3E0] rounded-full mb-4">
              <span className="text-sm font-medium text-[#7d5835] tracking-wide">OUR FOUNDATION</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-light text-[#2a2a2a]">
              Mission & Vision
            </h2>
          </div>

          <div className="mv-grid mission-grid-wrapper grid md:grid-cols-2 gap-6 sm:gap-8 mx-auto px-2 sm:px-10">

            {/* Vision Card */}
            <div className="mv-card group relative overflow-hidden bg-gradient-to-br from-[#7baa67] via-[#27773a] to-[#09451f] p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
              <div className="relative">
                <div className="w-12 h-12 bg-[#E5D9B6] rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#1F3D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  To restore soil fertility, reduce chemical dependency, and build climate-resilient farming systems through sustainable waste utilization.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="mv-card group relative overflow-hidden bg-gradient-to-br from-[#E5D9B6] to-[#d4c8a5] p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
              <div className="relative">
                <div className="w-12 h-12 bg-[#7d5835] rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#2a2a2a]">Our Mission</h3>
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                  To transform organic waste into high-quality compost and regenerative inputs while empowering farmers and municipalities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats with Image Background */}
      <section className="stats-section relative py-8 sm:py-12 text-white overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/images/background.png"
            alt="Sustainable Compost Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="stats-content relative max-w-[1200px] mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-8 text-center">

            <div className="group">
              <div className="text-xl sm:text-3xl md:text-4xl font-light mb-1 bg-gradient-to-br from-white to-[#E5D9B6] bg-clip-text text-transparent inline-block">
                22+
              </div>
              <div className="text-[10px] sm:text-sm text-white/90 leading-tight">
                Years of expertise in sustainable agriculture
              </div>
            </div>

            <div className="group">
              <div className="text-xl sm:text-3xl md:text-4xl font-light mb-1 bg-gradient-to-br from-white to-[#E5D9B6] bg-clip-text text-transparent inline-block">
                100%
              </div>
              <div className="text-[10px] sm:text-sm text-white/90 leading-tight">
                Organic, chemical-free soil solutions
              </div>
            </div>

            <div className="group">
              <div className="text-xl sm:text-3xl md:text-4xl font-light mb-1 bg-gradient-to-br from-white to-[#E5D9B6] bg-clip-text text-transparent inline-block">
                Global
              </div>
              <div className="text-[10px] sm:text-sm text-white/90 leading-tight">
                Impact across India and abroad
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-12 bg-[#F1F3E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <div className="mb-10 text-center">
            <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 flex-wrap">
              <div className="w-12 h-[2px] bg-[#7d5835]"></div>
              <span className="team-header-label text-base sm:text-2xl tracking-[0.25em] text-[#7d5835] font-semibold">
                LEADERSHIP & TEAM
              </span>
              <div className="w-12 h-[2px] bg-[#7d5835]"></div>
            </div>
            
          </div>

          {/* Founder Highlight Card */}
          <div className="flex justify-center mb-8">
            <div className="founder-card bg-white rounded-2xl shadow-xl border border-[#E5D9B6]/40 p-6 sm:p-8 max-w-2xl w-full text-center">
              <img
                src="/images/rahul_Padwal.png"
                alt="Adv. Rahul Prataprao Padwal"
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a]">
                Adv. Rahul Prataprao Padwal
              </h3>
              <p className="text-[#7d5835] text-base sm:text-lg font-medium mt-1">
                Founder & CEO
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                Sustainability advocate, researcher, and environmental engineering
                expert with over 22 years of experience in integrated waste
                management and regenerative agriculture systems.
              </p>
              <div className="mt-5 pt-4 border-t border-gray-200 flex justify-center">
                <a
                  href="https://www.linkedin.com/in/rahul-padwal-6b240339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-white">
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.54 53.54 0 1 1 53.54-53.54A53.54 53.54 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.8V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3V448z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Team Carousel */}
          <div className="relative flex items-center justify-center gap-2 w-full">

  {/* Left Arrow */}
  <button
    onClick={() => {
      const el = document.getElementById("team-carousel");
      if (el) el.scrollBy({ left: -el.offsetWidth, behavior: "smooth" });
    }}
    className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1F3D2B] text-white flex items-center justify-center shadow-lg hover:bg-[#7d5835] transition-colors z-10"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  </button>

  {/* Scrollable Cards */}
  <div
    id="team-carousel"
    className="flex overflow-hidden flex-1 min-w-0"
  >
    {[
      {
        name: "Dr. Anita Handa Corrign - UK",
        role: " Sr. Scientific Advisor & Director",
        qualification: "PhD (Chemical Engineering), MSc BioTechnology",
        image: "/images/anita.png",
      },
      {
        name: "Vaibhav M Phalle",
        role: "Planning & Operations- Advisor & Director",
        qualification: "MBA & BTech Mechanical",
        image: "/images/vaibhav.png",
      },
      {
        name: "Shridatt G. Khandagale",
        role: "Director Creative Head",
        qualification: "B.E. Computer",
        image: "/images/shridatt.png",
      },
      {
        name: "Shravani Padwal",
        role: "IT & Digital Solutions Engineer",
        qualification: "BTech IT",
        image: "/images/shravani.png",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="team-slide flex-shrink-0 bg-white rounded-2xl shadow-md border border-[#E5D9B6]/40 p-5 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
        style={{ width: "100%" }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-16 h-16 object-cover rounded-full shadow-sm mb-3"
        />

        <h4 className="text-sm font-semibold text-[#2a2a2a] leading-tight">
          {member.name}
        </h4>

        <p className="text-xs text-[#7d5835] mt-1 leading-snug">
          {member.role}
        </p>

        {member.qualification && (
          <p className="text-xs text-[#2d5016] font-medium leading-snug mt-1">
            {member.qualification}
          </p>
        )}
      </div>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={() => {
      const el = document.getElementById("team-carousel");
      if (el) el.scrollBy({ left: el.offsetWidth, behavior: "smooth" });
    }}
    className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1F3D2B] text-white flex items-center justify-center shadow-lg hover:bg-[#7d5835] transition-colors z-10"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  </button>

</div>

        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="cta-section relative py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#7d5835] rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#E5D9B6] rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

    <h2 className="cta-h2 text-2xl sm:text-3xl md:text-6xl font-light text-[#2a2a2a] mb-4 sm:mb-6 leading-tight">
      Ready to transform<br />
      <span className="italic font-serif text-[#7d5835]">
        your approach to agriculture?
      </span>
    </h2>

    <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
      Partner with us to create sustainable, regenerative solutions for your organization.
    </p>

    <div className="cta-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">

      <Link
        href="/contact"
        className="px-6 py-2.5 text-sm font-medium 
bg-[#7d5835] text-white rounded-full 
hover:bg-[#6a4a2d] transition-all duration-300 
transform hover:scale-105 shadow-lg hover:shadow-xl 
inline-block text-center"
      >
        Request Consultation
      </Link>

      <a
        href="https://drive.google.com/file/d/1SBCXuDW4N7U6aX97XxoPG0gUEIfUgpSw/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
         className="px-6 py-2.5 text-sm font-medium 
border-2 border-[#7d5835] text-[#7d5835] rounded-full 
hover:bg-[#7d5835] hover:text-white transition-all duration-300 
transform hover:scale-105 shadow-md hover:shadow-lg 
inline-block text-center"
      >
        Download Brochure
      </a>

    </div>

  </div>
</section>

    </div>
  );
}