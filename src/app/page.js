"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">

      {/* ================= GLOBAL ANIMATIONS ================= */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity:  1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .grain {
          position: relative;
          overflow: hidden;
        }

        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .organic-blob {
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
        }

        .body-text {
          font-family: 'Crimson Text', serif;
        }

       
      `}} />

      {/* ================= HERO SECTION ================= */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
        }

        .hero-grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: multiply;
          opacity: 0.6;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-track {
          animation: scrollLeft 22s linear infinite;
          white-space: nowrap;
          display: inline-flex;
          gap: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) forwards; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.30s; }
        .delay-3 { animation-delay: 0.48s; }
        .delay-4 { animation-delay: 0.65s; }
        .delay-5 { animation-delay: 0.80s; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(93, 66, 43, 0.10);
          border: 1px solid rgba(93, 66, 43, 0.22);
          border-radius: 999px;
          padding: 8px 22px;
          backdrop-filter: blur(6px);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1F3D2B;
          color: #F5EFE6;
          padding: 10px 22px;
          font-size: 14px;      
          border-radius: 999px;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 4px 20px rgba(31,61,43,0.25);
          text-decoration: none;
        }
        .btn-primary:hover {
          background: #F2C94C;
          color: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(242,201,76,0.35);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #1F3D2B;
          padding: 10px 18px;
          font-size: 14px;
          border-radius: 999px;
          font-weight: 500;
          border: 1.5px solid rgba(31,61,43,0.35);
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          text-decoration: none;
        }
        .btn-secondary:hover {
          border-color: #1F3D2B;
          background: rgba(31,61,43,0.06);
          transform: translateY(-2px);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(31,61,43,0.18) 0%,
            rgba(210,207,207,0.05) 60%,
            transparent 100%
          );
          border-radius: inherit;
        }

        .stat-card {
          position: absolute;
          background: rgba(245, 239, 230, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 20px;
          padding: 18px 24px;
          box-shadow: 0 8px 32px rgba(31,61,43,0.14);
        }

        /* Mobile stat cards - smaller padding & font */
        @media (max-width: 640px) {
          .stat-card {
            padding: 10px 14px;
            border-radius: 14px;
          }
        }

        .vertical-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 0.15em;
          font-size: 11px;
          font-weight: 500;
          color: rgba(31,61,43,0.5);
          text-transform: uppercase;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-16px) scale(1.04); }
        }
        .blob {
          position: absolute;
          border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
          animation: blobFloat 8s ease-in-out infinite;
          pointer-events: none;
        }

        .ticker-wrap {
          overflow: hidden;
          border-top: 1px solid rgba(31,61,43,0.12);
          border-bottom: 1px solid rgba(31,61,43,0.12);
          background: rgba(31,61,43,0.04);
        }

        /* ===== HERO MAIN GRID ===== */

        /* MOBILE: single column, items ordered naturally */
        .hero-main-grid {
          grid-template-columns: 1fr;
          grid-template-areas:
            "subtitle"
            "heading"
            "image"
            "para"
            "stats"
            "buttons";
        }
        .hero-subtitle  { grid-area: subtitle; }
        .hero-heading   { grid-area: heading; }
        .hero-image-panel { grid-area: image; }
        .hero-para      { grid-area: para; }
        .hero-stats     { grid-area: stats; }
        .hero-buttons   { grid-area: buttons; }

        /* DESKTOP (≥768px): 2-column layout */
        @media (min-width: 768px) {
          .hero-main-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "subtitle  image"
              "heading   image"
              "para      image"
              "stats     image"
              "buttons   image";
            gap: 1rem 2.5rem;
            align-items: start;
          }
          .hero-image-panel {
            grid-row: 1 / 6;
            height: 480px !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-image-panel {
            height: 560px !important;
          }
        }

        /* ===== ANDROID / MOBILE RESPONSIVE FIXES ===== */

        @media (max-width: 767px) {
          .hero-image-panel {
            height: 320px !important;
            margin: 4px 0;
          }
          /* Stat cards: keep inside image, compact */
          .hero-image-panel .stat-card {
            padding: 9px 12px !important;
            border-radius: 12px !important;
            min-width: unset !important;
          }
          .hero-vertical-label {
            display: none !important;
          }
        }

        /* Stats row: always stay in a row */
        .hero-stats-row {
          flex-wrap: nowrap !important;
        }
        @media (max-width: 480px) {
          .hero-stats-row {
            gap: 16px !important;
          }
          .hero-stats-row .stat-value {
            font-size: 1.4rem !important;
          }
        }

        /* Buttons: stack on very small screens */
        @media (max-width: 380px) {
          .hero-btn-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section
        className="hero-root hero-grain relative w-full overflow-hidden"
        style={{ background: "linear-gradient(160deg, #e8f0dc 0%, #cddbb8 35%, #b5c9a2 65%, #d4cfc9 100%)" }}
      >
        <div
          className="blob"
          style={{
            width: 520, height: 520,
            top: -120, right: -140,
            background: "rgba(167,201,131,0.28)",
            animationDuration: "10s",
          }}
        />
        <div
          className="blob"
          style={{
            width: 380, height: 380,
            bottom: 60, left: -100,
            background: "rgba(125,88,53,0.10)",
            animationDuration: "13s",
            animationDelay: "2s",
          }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-10 pt-6 sm:pt-8 pb-2 gap-4">
          <div className="hero-badge fade-up delay-1">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#A7C983", display: "inline-block" }} />
            <span className="text-base sm:text-xl font-extrabold tracking-wider text-[#1F3D2B] uppercase">
              Shri Ram Agro Industries
            </span>
          </div>
        </div>

        <div
          className="hero-main-grid px-4 sm:px-10 lg:px-16 py-10 sm:py-16"
          style={{ display: "grid", gap: "1.5rem", alignItems: "center" }}
        >

          {/* 
            DESKTOP: left col = subtitle+heading+para+stats+buttons (via .hero-left-col)
                     right col = image panel (via .hero-image-panel, grid-column: 2)
            MOBILE: single column, ordered: subtitle(1)→heading(2)→image(3)→para(4)→stats(5)→buttons(6)
          */}

          {/* Subtitle */}
          <p className="fade-up delay-2 hero-subtitle text-sm font-semibold text-[#7d5835] tracking-wide" style={{ margin: 0 }}>
            Organic Waste → Premium Inputs
          </p>

          {/* Heading */}
          <h1
            className="fade-up delay-3 hero-heading font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1F3D2B", letterSpacing: "-0.01em", fontSize: "clamp(2rem, 8vw, 3.75rem)", margin: 0 }}
          >
            Turning Waste<br />
            <em style={{ color: "#5C7A3A", fontStyle: "italic" }}>Into Wealth</em>
          </h1>

          {/* IMAGE PANEL */}
          <div className="hero-image-panel fade-up delay-3 relative" style={{ width: "100%", height: 340 }}>
            {/* Main image */}
            <div style={{ position: "absolute", top: 0, left: "5%", width: "88%", height: "88%", borderRadius: "28px 28px 120px 28px", overflow: "hidden", boxShadow: "0 24px 80px rgba(31,61,43,0.25), 0 4px 16px rgba(0,0,0,0.10)" }}>
              <img src="/images/hero.png" alt="Composting facility" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="img-overlay" />
            </div>
            {/* Small overlay image */}
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "42%", height: "38%", borderRadius: "20px 80px 20px 20px", overflow: "hidden", boxShadow: "0 12px 40px rgba(31,61,43,0.2)", border: "3px solid rgba(245,239,230,0.8)" }}>
              <img src="/images/new.png" alt="Organic manure" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(0.85)", filter: "saturate(1.15)" }} />
            </div>
            {/* Waste Transformed card */}
            <div className="stat-card" style={{ top: 16, left: 10, minWidth: 130, padding: "10px 13px", borderRadius: 14 }}>
              <div style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(31,61,43,0.55)", textTransform: "uppercase", marginBottom: 4 }}>Waste Transformed</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1F3D2B", lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 10, color: "#5C7A3A", marginTop: 3 }}>FCO/ NPOP certified output</div>
              
            </div>
            {/* Our Services card */}
            <div className="stat-card" style={{ bottom: 36, left: 10, minWidth: 120, padding: "10px 13px", borderRadius: 14 }}>
              <div style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(31,61,43,0.55)", textTransform: "uppercase", marginBottom: 4 }}>Our Services</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["Waste Management", "Project Setup", "Waste Audit", "Product Development"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#1F3D2B", fontWeight: 500 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A7C983", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Vertical label — desktop only */}
            <div className="hero-vertical-label" style={{ position: "absolute", right: -24, top: "50%", transform: "translateY(-50%)" }}>
              <span className="vertical-label">Sustainable · Compliant · Circular</span>
            </div>
          </div>

          {/* Paragraph */}
          <p className="fade-up delay-3 hero-para text-sm sm:text-base leading-relaxed text-[#2E2E2E] max-w-xl" style={{ margin: 0 }}>


            We provide end-to-end solutions for processing <strong style={{ fontWeight: 500, color: "#1F3D2B" }}> municipal, industrial, agricultural, dairy, biogas </strong> waste , etc. into high-quality, FCO, NPOP approved organic inputs such as <strong style={{ fontWeight: 500, color: "#1F3D2B" }}>Organic Fertilizer, PROM, City Compost, FOM, and LFOM.   </strong> 

We provide expert consultancy for  <strong style={{ fontWeight: 500, color: "#1F3D2B" }}> planning, designing, and establishing organic fertilizer production project setup </strong> that is compliant, efficient, and commercially viable.
          </p>

          {/* Stats */}
          <div className="fade-up delay-4 hero-stats hero-stats-row" style={{ display: "flex", gap: 24, flexWrap: "nowrap", margin: 0 }}>
            {[
              { value: "1,00,000+", label: "MT Processing/Year" },
              { value: "10+", label: "Waste Streams" },
              { value: "FCO / NPOP", label: "Approved Inputs" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-value font-bold text-[#1F3D2B]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 5vw, 2.5rem)" }}>{s.value}</div>
                <div className="text-xs text-[#1F3D2B]/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="fade-up delay-5 hero-buttons hero-btn-row" style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: 0 }}>
            <Link href="/services" className="btn-primary">
              View Our Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">Request Consultancy</Link>
          </div>
        </div>

        <div className="ticker-wrap relative z-10 py-3">
          <div className="ticker-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                {[
                  "Municipal Solid Waste",
                  "Industrial Food Waste",
                  "Sugar Factory Waste",
                  "Agricultural Waste",
                  "Dairy Waste",
                  "Biogas Digestate",
                  "Cattle Waste",
                  "PROM",
                  "City Compost",
                  "FOM",
                  "LFOM",
                ].map((label) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 28, marginRight: 28 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", color: "#2E4A25", textTransform: "uppercase" }}>
                      {label}
                    </span>
                    <span style={{ color: "#A7C983", fontSize: 16 }}>✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
     
      <section className="bg-[#E5D9B6] py-10 overflow-hidden">
        <div className="px-4 sm:px-10 lg:px-20">

          {/* Header */}
          <div className="max-w-xl mb-10 sm:mb-16">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2B] mb-4 leading-tight">
              Our Strength
            </h2>
            <p className="body-text text-base sm:text-lg leading-relaxed text-[#2E2E2E] mb-8 sm:mb-12 animate-fade-in">
              Transforming Municipal Food and Organic Waste into safe to use Organic fertilizers that restore Soil and Empower Farmers
            </p>
          </div>

          <div className="relative">

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">

              {/* Card 1 */}
              <div className="group bg-[#7d5835] rounded-xl px-3 sm:px-4 py-4
                              text-center text-white shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 hover:shadow-2xl hover:bg-[#5c422b]">
                <div className="mb-3 flex justify-center">
                  <img src="/icons/waste.png" alt="" className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg sm:text-base font-bold text-white mb-2">
                  End-to-End Wet Waste Processing & Odor Control
                </h3>
                <p className="text-sm sm:text-sm text-white/90 leading-relaxed text-left">
                  We provide end-to-end solutions for the management and processing of Municipal solid (wet) waste, transforming it into government-approved, high-quality, and safe-to-use compost fertilizer.
                  <br /><br />
                  <span className="font-bold">Key Features:</span><br />
                  1. Advanced deodorization system ensuring effective odor control.<br />
                  2. Environmentally sustainable processes aligned with government waste management guidelines.<br />
                  3. Optimized operations requiring minimal resource utilization.<br />
                  4. Proven, cost-effective technology with successful field applications.<br />
                  5. Production of stable, mature, and nutrient-rich compost that enhances soil health and fertility.<br />
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#7d5835] rounded-xl px-3 sm:px-4 py-4
                              text-center text-white shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 hover:shadow-2xl hover:bg-[#5c422b]">
                <div className="mb-3 flex justify-center">
                  <img src="/icons/agro.png" alt="" className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg sm:text-base font-bold text-white mb-2">
                  Advanced Biogas & Digestate Treatment Solutions
                </h3>
                <p className="text-sm sm:text-sm text-white/90 leading-relaxed text-left">
                  Our science-driven treatment systems ensure the efficient processing of complex waste streams such as biogas and digestate, converting them into high-quality, commercial-grade Fermented Organic Manure (FOM) and Liquid Fermented Organic Manure (LFOM).
                  <br /><br />
                  <span className="font-bold">Key Features:</span><br />
                  1. Comprehensive end-to-end turnkey project execution — from DPR preparation to final product handover.<br />
                  2. Professional waste audit and assessment services.<br />
                  3. Practical, implementation-focused solutions tailored to on-ground requirements.<br />
                  4. Research-driven product development and formulation.<br />
                  5. Production of FCO-approved, market-ready organic products.<br />
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#7d5835] rounded-xl px-3 sm:px-4 py-4
                              text-center text-white shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 hover:shadow-2xl hover:bg-[#5c422b]">
                <div className="mb-3 flex justify-center">
                  <img src="/icons/production.png" alt="" className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg sm:text-base font-bold text-white mb-2">
                  Sustainable Organic Waste to Soil Solutions
                </h3>
                <p className="text-sm sm:text-sm text-white/90 leading-relaxed text-left">
                  We convert food waste, cattle waste, and agricultural residues into high-quality organic inputs that restore soil vitality, improve soil structure, and enhance crop productivity.
                  <br /><br />
                  <span className="font-bold">Key Features:</span><br />
                  1. Microbial-based organic fertilizers for enhanced nutrient availability and soil health.<br />
                  2. Nutrient-rich compost and Phosphate-Rich Organic Manure (PROM).<br />
                  3. Granular organic fertilizers for ease of application and uniform nutrient distribution.<br />
                  4. Production of FCO-approved, market-ready organic products.<br />
                  5. Sustainable processing methods that promote circular economy practices and long-term soil regeneration.<br />
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-[#7d5835] rounded-xl px-3 sm:px-4 py-4
                              text-center text-white shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 hover:shadow-2xl hover:bg-[#5c422b]">
                <div className="mb-3 flex justify-center">
                  <img src="/icons/soil.png" alt="" className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg sm:text-base font-bold text-white mb-2">
                  Regenerative Agriculture & Consultancy
                </h3>
                <p className="text-sm sm:text-sm text-white/90 leading-relaxed text-left">
                  Beyond waste conversion, we actively support farmers, municipalities, and organizations in developing sustainable and regenerative systems that promote long-term environmental, agricultural, and economic resilience.<br />
                  <br />
                  <span className="font-bold">Key Features:</span><br />
                  1. Comprehensive waste audits and feasibility reports in accordance with international quality standards.<br />
                  2. Structured training and consultancy programs for farmers, municipal staff, CSR initiatives, and startups.<br />
                  3. End-to-end project setup and infrastructure planning support.<br />
                  4. Technical advisory for regulatory compliance, policy alignment, and FCO certification processes.<br />
                  5. Ongoing monitoring, performance optimization, and post-implementation support to ensure long-term project sustainability and operational efficiency.<br />
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= WHY WASTE MANAGEMENT ================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 sm:px-10 lg:px-20 bg-[#F1F3E0]">
        <div className="container-page">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <h2
              className="font-bold text-[#1F3D2B] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "-0.01em",
                fontSize: "clamp(1.6rem, 5vw, 3rem)",
              }}
            >
              Why Waste Management Matters
            </h2>
            <p
              className="text-base sm:text-lg text-[#2E2E2E]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              Transforming food waste into organic fertilizer builds a circular
              economy, restores soil health, and supports regenerative agriculture
              for a sustainable future.
            </p>
          </div>

          {/* Image + Cards Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">

            {/* Left Image */}
            <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/composting.png"
                alt="Food waste composting process"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="space-y-5 sm:space-y-8">

              <div className="bg-[#a7c983] p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-m sm:text-2xl font-bold text-[#000000] mb-3">
                  The Importance of Composting
                </h3>
                <p className="text-sm sm:text-base text-[#2E2E2E]" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                  Composting converts organic and food waste into nutrient-rich fertilizer
                  through natural biological processes. Instead of generating methane in
                  landfills, waste becomes a productive agricultural resource.
                </p>
              </div>

              <div className="bg-[#a7c983] p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-m sm:text-2xl font-bold text-[#000000] mb-3">
                  Reducing Food Waste
                </h3>
                <p className="text-sm sm:text-base text-[#000000] leading-relaxed">
                  Converting food waste into organic fertilizer reduces greenhouse emissions,
                  lowers landfill burden, and supports sustainable value creation for cities,
                  industries, and farmers.
                </p>
              </div>

              <div className="bg-[#a7c983] p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-m sm:text-2xl font-bold text-[#000000] mb-3">
                  Benefits to Soil Health
                </h3>
                <p className="text-sm sm:text-base text-[#000000] leading-relaxed">
                  Organic compost improves soil structure, enhances moisture retention,
                  restores organic carbon, and supports long-term crop productivity without
                  degrading the ecosystem.
                </p>
              </div>

              <div className="bg-[#a7c983] p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-m sm:text-2xl font-bold text-[#000000] mb-3">
                  Enhancing Soil Biodiversity
                </h3>
                <p className="text-sm sm:text-base text-[#000000] leading-relaxed">
                  Healthy soil is a living ecosystem. Compost stimulates microbial activity,
                  strengthens plant immunity, and contributes to regenerative agriculture systems.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR IMPACT ================= */}
      <section className="w-full bg-[#ffffff] py-10 sm:py-16 lg:py-24">
        <div className="container-page mx-auto px-4 sm:px-10 lg:px-20">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="max-w-md w-full">
              <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F3D2B] mb-5 sm:mb-6">
                Our Impact
              </h2>
              <p className="body-text text-base xs:text-lg leading-relaxed text-[#2E2E2E]">
                We transform waste into measurable environmental value.
                Through integrated waste management systems and regenerative agricultural solutions, we reduce landfill dependency, restore soil vitality, and promote climate-resilient farming models.<br /><br />
                Our work directly contributes to circular economy practices, sustainable resource utilization, and long-term ecological balance across municipalities, industries, and farming communities.<br />
              </p>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="relative w-full lg:w-[60%] rounded-3xl overflow-hidden" style={{ minHeight: 220 }}>

              {/* Background Image */}
              <img
                src="/images/impact.png"
                alt="Impact Background"
                className="w-full h-full object-cover"
                style={{ minHeight: 220 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* STATS */}
              <div className="absolute inset-0 flex items-center justify-center py-8">
                <div
                  className="impact-stats-grid w-full px-6 sm:px-12 text-white text-center"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                  }}
                >
                  <div>
                    <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>
                      150,000+
                    </h3>
                    <p className="text-xs sm:text-base opacity-100">
                      Tons waste processed
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>
                      35+
                    </h3>
                    <p className="text-xs sm:text-base opacity-100">
                      Satisfied National and International Clients
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>
                      28,000+
                    </h3>
                    <p className="text-xs sm:text-base opacity-100">
                      Acres restored
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}