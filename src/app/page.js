"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openCard, setOpenCard] = useState(null);
  const [openGreen, setOpenGreen] = useState(null);

  const toggleCard = (idx) => {
    setOpenCard(openCard === idx ? null : idx);
  };

  const cards = [
    {
      icon: "/icons/waste.png",
      title: "End-to-End Municipal Wet Waste Processing & Odor Control",
      body: (
        <>
          We provide end-to-end solutions for the management and processing of Municipal solid (wet) waste, transforming it into government-approved, high-quality, and safe-to-use compost fertilizer.
          <br /><br />
          <span className="font-bold">Key Features:</span><br />
          1. Advanced deodorization system ensuring effective odor control.<br />
          2. Environmentally sustainable processes aligned with government waste management guidelines.<br />
          3. Optimized operations requiring minimal resource utilization.<br />
          4. Proven, cost-effective technology with successful field applications.<br />
          5. Production of stable, mature, and nutrient-rich compost that enhances soil health and fertility.<br />
        </>
      ),
    },
    {
      icon: "/icons/agro.png",
      title: "Advanced Biogas Digestate Treatment Solutions",
      body: (
        <>
          Our science-driven treatment ensure the efficient processing of complex waste streams such as biogas digestate, converting them into high-quality, commercial-grade Fermented Organic Manure (FOM) and Liquid Fermented Organic Manure (LFOM).
          <br /><br />
          <span className="font-bold">Key Features:</span><br />
          1. Comprehensive end-to-end turnkey project execution — from DPR to product handover.<br />
          2. Professional waste audit and assessment services.<br />
          3. Practical, implementation-focused solutions tailored to on-ground requirements.<br />
          4. Research-driven product development and formulation, Product Development, Formulation and Quality Control.<br />
          5. Production of FCO/ NPOP approved, market-ready organic products.<br />
        </>
      ),
    },
    {
      icon: "/icons/production.png",
      title: "Industrial Food, Cattle, Diary Waste to Organic Fertilizers",
      body: (
        <>
          We convert industrial food, cattle and Diary waste, and agricultural residues into high-quality organic fertilizer that restore soil fertility, improve soil structure, and enhance crop productivity.
          <br /><br />
          <span className="font-bold">Key Features:</span><br />
          1. Microbial-based organic fertilizers for enhanced nutrient availability and soil health.<br />
          2. Nutrient-rich organic fertilizer and Phosphate-Rich Organic Manure (PROM).<br />
          3. Granular organic fertilizers for easy application and farmer adoption.<br />
          4. Production of FCO-approved, market-ready organic products.<br />
        </>
      ),
    },
    {
      icon: "/icons/soil.png",
      title: "Waste Audit, Feasibility & Consultancy",
      body: (
        <>
          Beyond waste conversion, we actively support farmers, municipalities, and organizations in developing sustainable and regenerative systems that promote long-term environmental, agricultural, and economic resilience.<br />
          <br />
          <span className="font-bold">Key Features:</span><br />
          1. Comprehensive waste audits and feasibility reports in accordance with International Quality Standards.<br />
          2. Structured training and consultancy programs for farmers, municipal staff, CSR initiatives, and startups.<br />
          3. End-to-end project setup consultancy.<br />
          4. Technical advisory for regulatory compliance, NPOP certification processes.<br />
          5. Ongoing monitoring, production optimization, and post-implementation support to ensure long-term project sustainability and operational efficiency.<br />
        </>
      ),
    },
  ];

  const greenCards = [
    {
      title: "Solid Waste Management Rule, 2026",
      body: "As per Solid Waste Management Rules, 2026 effective from 1 April 2026, the rules clearly direct that wet waste must be composted or bio-methanated. Unregulated municipal wet waste leads to GHG emissions and environmental pollution, which adversely affects human health.",
    },
    {
      title: "Urgent need of Municipal Waste Management",
      body: "Unregulated municipal wet waste leads to GHG emissions and environmental pollution, which adversely affects human health. Converting food waste to Organic Fertilizer reduces lanfill burden and supports sustainable value creation for cities, industries and farmers.",
    },
    {
      title: "Soil Health Restoration",
      body: "Organic fertilizer improves soil structure, enhances moisture retention, restores organic carbon, and supports long-term crop productivity without degrading the ecosystem.",
    },
    {
      title: "Supports Organic Food Production",
      body: "Organic Fertilizers improve soil fertlity and microbial activity creating a healthy soil environment that supports sustainable organic crop growth. By supplying nutrients in natural and slow-release form, they help produce safe, residue-free food while maintaining long term soil health.",
    },
  ];

  return (
    <main className="w-full">

      {/* ================= GLOBAL ANIMATIONS ================= */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-float   { animation: float 3s ease-in-out infinite; }
        .grain { position: relative; overflow: hidden; }
        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }
        .organic-blob { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
        .section-title { font-family: 'Cormorant Garamond', serif; }
        .body-text     { font-family: 'Crimson Text', serif; }
      `}} />

      {/* ================= HERO SECTION ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root { font-family: 'DM Sans', sans-serif; }

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
          0%   { transform: translateX(0); }
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
          background: rgba(93,66,43,0.10);
          border: 1px solid rgba(93,66,43,0.22);
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
          background: linear-gradient(135deg, rgba(31,61,43,0.18) 0%, rgba(210,207,207,0.05) 60%, transparent 100%);
          border-radius: inherit;
        }

        .stat-card {
          position: absolute;
          background: rgba(245,239,230,0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 20px;
          padding: 18px 24px;
          box-shadow: 0 8px 32px rgba(31,61,43,0.14);
        }
        @media (max-width: 640px) {
          .stat-card { padding: 10px 14px; border-radius: 14px; }
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
          50%       { transform: translateY(-16px) scale(1.04); }
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
        .hero-subtitle    { grid-area: subtitle; }
        .hero-heading     { grid-area: heading; }
        .hero-image-panel { grid-area: image; }
        .hero-para        { grid-area: para; }
        .hero-stats       { grid-area: stats; }
        .hero-buttons     { grid-area: buttons; }

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
          .hero-image-panel { grid-row: 1 / 6; height: 480px !important; }
        }
        @media (min-width: 1024px) {
          .hero-image-panel { height: 560px !important; }
        }

        /* ===== MOBILE FIXES ===== */
        @media (max-width: 767px) {
          .hero-image-panel  { height: 320px !important; margin: 4px 0; }
          .hero-vertical-label { display: none !important; }
        }

        .hero-stats-row { flex-wrap: nowrap !important; }
        @media (max-width: 480px) {
          .hero-stats-row { gap: 16px !important; }
          .hero-stats-row .stat-value { font-size: 1.4rem !important; }
        }
        @media (max-width: 380px) {
          .hero-btn-row { flex-direction: column !important; gap: 12px !important; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
        }

        /* ===== EXPANDABLE BROWN CARD ===== */
        .expand-card-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s ease, opacity 0.35s ease, padding-top 0.3s ease;
          opacity: 0;
          padding-top: 0;
        }
        .expand-card-body.open {
          max-height: 700px;
          opacity: 1;
          padding-top: 12px;
        }
        .expand-btn {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 1.5px solid rgba(255,255,255,0.5);
          color: white;
          font-size: 20px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.35s;
          flex-shrink: 0;
          outline: none;
        }
        .expand-btn:hover  { background: rgba(255,255,255,0.35); }
        .expand-btn.open   { transform: rotate(45deg); }

        /* ===== EXPANDABLE GREEN CARD ===== */
        .green-card-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .green-card-body.open {
          max-height: 400px;
          opacity: 1;
        }
        .green-expand-btn {
          width: 26px;
          height: 26px;
          min-width: 26px;
          border-radius: 50%;
          background: rgba(31,61,43,0.15);
          border: 1.5px solid rgba(31,61,43,0.3);
          color: #1F3D2B;
          font-size: 18px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.35s;
          flex-shrink: 0;
          outline: none;
        }
        .green-expand-btn:hover { background: rgba(31,61,43,0.25); }
        .green-expand-btn.open  { transform: rotate(45deg); }
      `}</style>

      <section
        className="hero-root hero-grain relative w-full overflow-hidden"
        style={{ background: "linear-gradient(160deg, #e8f0dc 0%, #cddbb8 35%, #b5c9a2 65%, #d4cfc9 100%)" }}
      >
        <div className="blob" style={{ width: 520, height: 520, top: -120, right: -140, background: "rgba(167,201,131,0.28)", animationDuration: "10s" }} />
        <div className="blob" style={{ width: 380, height: 380, bottom: 60, left: -100, background: "rgba(125,88,53,0.10)", animationDuration: "13s", animationDelay: "2s" }} />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-10 pt-6 sm:pt-8 pb-2 gap-4">
          <div className="hero-badge fade-up delay-1">
            <img src="/images/logo.jpeg" alt="Shri Ram Agro Industries Logo" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
            <span className="text-base sm:text-xl font-extrabold tracking-wider text-[#1F3D2B] uppercase">
              Shri Ram Agro Industries
            </span>
          </div>
        </div>

        <div
          className="hero-main-grid px-4 sm:px-10 lg:px-16 py-10 sm:py-16"
          style={{ display: "grid", gap: "1.5rem", alignItems: "center" }}
        >
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
            <div style={{ position: "absolute", top: 0, left: "5%", width: "88%", height: "88%", borderRadius: "28px 28px 120px 28px", overflow: "hidden", boxShadow: "0 24px 80px rgba(31,61,43,0.25), 0 4px 16px rgba(0,0,0,0.10)" }}>
              <img src="/images/hero.png" alt="Composting facility" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="img-overlay" />
            </div>

            {/* Small overlay hand image */}
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "clamp(26%, 35%, 42%)", height: "clamp(22%, 30%, 38%)", borderRadius: "20px 80px 20px 20px", overflow: "hidden", boxShadow: "0 12px 40px rgba(31,61,43,0.2)", border: "3px solid rgba(245,239,230,0.8)" }}>
              <img src="/images/new.png" alt="Organic manure" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(0.85)", filter: "saturate(1.15)" }} />
            </div>

            {/* Waste Transformed card */}
            <div className="stat-card" style={{ top: 16, left: 10, minWidth: 0, padding: "clamp(5px, 1.5vw, 10px) clamp(6px, 2vw, 13px)", borderRadius: 14 }}>
              <div style={{ fontSize: "clamp(7px, 1.8vw, 9px)", letterSpacing: "0.12em", color: "rgba(31,61,43,0.55)", textTransform: "uppercase", marginBottom: "clamp(2px, 0.5vw, 4px)" }}>Waste Transformed</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(14px, 4vw, 22px)", fontWeight: 700, color: "#1F3D2B", lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: "clamp(7px, 1.8vw, 10px)", color: "#5C7A3A", marginTop: "clamp(2px, 0.5vw, 3px)" }}>FCO/ NPOP certified output</div>
            </div>

            {/* Our Services card */}
            <div className="stat-card" style={{ bottom: 36, left: 10, minWidth: 0, padding: "clamp(5px, 1.5vw, 10px) clamp(6px, 2vw, 13px)", borderRadius: 14 }}>
              <div style={{ fontSize: "clamp(7px, 1.8vw, 9px)", letterSpacing: "0.12em", color: "rgba(31,61,43,0.55)", textTransform: "uppercase", marginBottom: "clamp(2px, 0.5vw, 4px)" }}>Our Services</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2px, 0.6vw, 3px)" }}>
                {["Waste Management", "Project Setup", "Waste Audit", "Product Development"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "clamp(3px, 1vw, 6px)", fontSize: "clamp(8px, 2vw, 11px)", color: "#1F3D2B", fontWeight: 500 }}>
                    <span style={{ width: "clamp(3px, 1vw, 5px)", height: "clamp(3px, 1vw, 5px)", borderRadius: "50%", background: "#A7C983", flexShrink: 0 }} />
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
              { value: "FCO/NPOP", label: "Approved Inputs" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-value font-bold text-[#1F3D2B]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(0.75rem, 3vw, 2.5rem)", whiteSpace: "nowrap" }}>{s.value}</div>
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
                {["Municipal Solid Waste","Industrial Food Waste","Sugar Factory Waste","Agricultural Waste","Dairy Waste","Biogas Digestate","Cattle Waste","PROM","City Compost","FOM","LFOM"].map((label) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 28, marginRight: 28 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", color: "#2E4A25", textTransform: "uppercase" }}>{label}</span>
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

          <div className="max-w-xl mb-10 sm:mb-16">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2B] mb-4 leading-tight">
              Our Strength
            </h2>
            <p className="body-text text-base sm:text-lg leading-relaxed text-[#2E2E2E] mb-8 sm:mb-12 animate-fade-in">
              Transforming Municipal Food and Organic Waste into safe to use Organic fertilizers that restore Soil and Empower Farmers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#7d5835] rounded-xl px-3 sm:px-4 py-4 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#5c422b]"
              >
                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <img src={card.icon} alt="" className="h-10 w-10 sm:h-12 sm:w-12" />
                </div>

                {/* Title row with + button */}
                <div
                  className="flex items-center justify-between gap-3"
                  onClick={() => toggleCard(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="text-base font-bold text-white text-left leading-snug" style={{ margin: 0 }}>
                    {card.title}
                  </h3>
                  <button className={`expand-btn${openCard === idx ? " open" : ""}`} aria-label={openCard === idx ? "Collapse" : "Expand"}>
                    +
                  </button>
                </div>

                {/* Expandable body */}
                <div className={`expand-card-body text-sm text-white/90 leading-relaxed text-left${openCard === idx ? " open" : ""}`}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY WASTE MANAGEMENT ================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 sm:px-10 lg:px-20 bg-[#F1F3E0]">
        <div className="container-page">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <h2
              className="font-bold text-[#1F3D2B] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em", fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
            >
              Why Waste Management Matters
            </h2>
            <p className="text-base sm:text-lg text-[#2E2E2E]" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontWeight: 400 }}>
              Transforming organic waste into certified fertilizers builds a circular economy that restores soil health, reduces environmental pollution and supports regenerative agriculture for sustainable future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">

            {/* Left Image */}
            <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <img src="/images/composting.png" alt="Food waste composting process" className="w-full h-full object-cover object-center" />
            </div>

            {/* Right — expandable green cards */}
            <div className="space-y-3 sm:space-y-4">
              {greenCards.map((item, idx) => (
                <div key={idx} className="bg-[#a7c983] rounded-2xl shadow-lg overflow-hidden">
                  {/* Header row */}
                  <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpenGreen(openGreen === idx ? null : idx)}
                  >
                    <h3 className="text-sm sm:text-lg font-bold text-[#000000]" style={{ margin: 0 }}>
                      {item.title}
                    </h3>
                    <button
                      className={`green-expand-btn${openGreen === idx ? " open" : ""}`}
                      aria-label={openGreen === idx ? "Collapse" : "Expand"}
                    >
                      +
                    </button>
                  </div>

                  {/* Expandable body */}
                  <div className={`green-card-body${openGreen === idx ? " open" : ""}`}>
                    <p className="text-sm sm:text-base text-[#000000] leading-relaxed px-5 pb-4" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR IMPACT ================= */}
      <section className="w-full bg-[#ffffff] py-10 sm:py-16 lg:py-24">
        <div className="container-page mx-auto px-4 sm:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

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

            <div className="relative w-full lg:w-[60%] rounded-3xl overflow-hidden" style={{ minHeight: 220 }}>
              <img src="/images/impact.png" alt="Impact Background" className="w-full h-full object-cover" style={{ minHeight: 220 }} />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center py-8">
                <div
                  className="w-full px-6 sm:px-12 text-white text-center"
                  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
                >
                  <div>
                    <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>150,000+</h3>
                    <p className="text-xs sm:text-base opacity-100">Tons waste processed</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>35+</h3>
                    <p className="text-xs sm:text-base opacity-100">Satisfied National and International Clients</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>28,000+</h3>
                    <p className="text-xs sm:text-base opacity-100">Acres restored</p>
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