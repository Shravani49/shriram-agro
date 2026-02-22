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
          padding: 16px 36px;
          border-radius: 999px;
          font-size: 16px;
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
          padding: 16px 28px;
          border-radius: 999px;
          font-size: 16px;
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

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 sm:px-10 pt-10 pb-2 gap-4">
          <div className="hero-badge fade-up delay-1">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#A7C983", display: "inline-block" }} />
            <span
              style={{
                fontSize: 25,
                fontWeight: 950,
                letterSpacing: "0.12em",   // slightly tighter = bolder feel
                color: "#1F3D2B",         // deeper contrast
                textTransform: "uppercase",
              }}
            >
              Shri Ram Agro Industries
            </span>
          </div>

          <div className="fade-up delay-1" style={{ textAlign: "right" }}>
            <span style={{ fontSize: 11, color: "rgba(31,61,43,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Est. 2005 · Registered FCO
            </span>
          </div>
        </div>

        <div
          className="
            grid 
            grid-cols-1 
            lg:grid-cols-2 
            gap-10 
            px-6 
            sm:px-10 
            lg:px-16 
            py-16 
            items-center
"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              className="fade-up delay-2"
              style={{
                fontSize: 20,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#7d5835",
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Organic Waste → Premium Inputs
            </p>

            <h1
              className="fade-up delay-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 5vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 900,
                color: "#1F3D2B",
                marginBottom: 32,
                letterSpacing: "-0.01em",
              }}
            >
              Turning Waste
              <br />
              <em style={{ color: "#5C7A3A", fontStyle: "italic" }}>Into Wealth</em>
              <br />
            
            </h1>

            <p
              className="fade-up delay-3"
              style={{
                fontSize: 20,
                lineHeight: 1.75,
                color: "#2E2E2E",
                maxWidth: 770,
                marginBottom: 40,
                fontWeight: 300,
              }}
            >
              We specialize in providing end-to-end solutions for the management and processing of municipal solid waste, industrial food waste, sugar factory waste, agricultural and dairy waste, cattle waste, and biogas digestate. <br/> <br/>

                Our core expertise lies in transforming these diverse waste streams into high-quality, safe-to-use, and FCO-approved organic inputs, including <strong style={{ fontWeight: 500, color: "#1F3D2B" }}> Phosphate-Rich Organic Manure (PROM), City Compost, Fermented Organic Manure (FOM), and Liquid Fermented Organic Manure (LFOM). </strong><br/><br/>

                In addition, we offer comprehensive consultancy services for the <strong style={{ fontWeight: 500, color: "#1F3D2B" }}> planning, design, and setup of organic fertilizer production projects </strong> — enabling sustainable, compliant, and commercially viable operations. <br/><br/> 
            </p>

            <div
              className="fade-up delay-4"
              style={{ display: "flex", gap: 40, marginBottom: 48 }}
            >
              {[
                { value: "10,000+", label: "MT Processed/Year" },
                { value: "5+", label: "Waste Streams" },
                { value: "FCO", label: "Approved Inputs" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: "#1F3D2B" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 18, color: "rgba(31,61,43,0.6)", letterSpacing: "0.06em", marginTop: 2 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-up delay-5" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/services" className="btn-primary">
                View Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request Consultancy
              </Link>
            </div>
          </div>

          <div
  
  className="fade-up delay-3 relative w-full h-[400px] sm:h-[500px] lg:h-[620px]"
>

            <div
              style={{
                position: "absolute",
                top: 0, left: "5%",
                width: "88%", height: "88%",
                borderRadius: "28px 28px 120px 28px",
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(31,61,43,0.25), 0 4px 16px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src="/images/hero.png"
                alt="Composting facility"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="img-overlay" />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0, right: 0,
                width: "42%", height: "38%",
                borderRadius: "20px 80px 20px 20px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(31,61,43,0.2)",
                border: "3px solid rgba(245,239,230,0.8)",
              }}
            >
              <img
  src="/images/new.png"
  alt="Organic manure"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(0.85)",   // zooms OUT image
    filter: "saturate(1.15)"
  }}
/>
            </div>

            <div
              className="stat-card"
              style={{ top: 24, left: -28, minWidth: 170 }}
            >
              <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(31,61,43,0.55)", textTransform: "uppercase", marginBottom: 6 }}>
                Waste Transformed
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: "#1F3D2B", lineHeight: 1 }}>
                100%
              </div>
              <div style={{ fontSize: 12, color: "#5C7A3A", marginTop: 4 }}>FCO-certified output</div>
            </div>

            <div
              className="stat-card"
              style={{ bottom: 50, left: -20, minWidth: 190 }}
            >
              <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(31,61,43,0.55)", textTransform: "uppercase", marginBottom: 6 }}>
                Our Services
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {["PROM", "City Compost", "FOM", "LFOM"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#1F3D2B", fontWeight: 500 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A7C983", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{ position: "absolute", right: -24, top: "50%", transform: "translateY(-50%)" }}
            >
              <span className="vertical-label">Sustainable · Compliant · Circular</span>
            </div>
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



          {/* ================= WHAT WE DO ================= */}
      <section className="bg-[#E5D9B6] py-10 overflow-hidden">
        <div className="px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <div className="max-w-xl mb-20">
            <h2 className="section-title text-[62px] leading-tight font-bold text-[#1F3D2B] mb-6">
              What We Do
            </h2>
          <p className="body-text text-[20px] text-[#2E2E2E] leading-relaxed mb-12 animate-fade-in">

             Transforming Food and Organic Waste into Organic fertilizers that Restore Soil and Empower Farmers
            </p>
          </div>

          <div className="relative">

            {/* Image Panel */}
            <div
              className="absolute right-0 -top-64 w-[50%] h-[550px] bg-cover bg-center rounded-3xl hidden lg:block"
              style={{ backgroundImage: "url('/images/whatWeDo.png')" }}
            />

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

              {/* Card 1 */}
              <div className="group bg-[#7d5835] rounded-2xl px-8 py-10 
                              text-center text-white
                              shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 
                              hover:shadow-2xl 
                              hover:bg-[#5c422b]">

                <div className="mb-6 flex justify-center">
                  <img
                    src="/icons/waste.png"
                    alt=""
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-[20px] font-bold text-white mb-3">
                  End-to-End Wet Waste Processing & Composting Solutions
                </h3>

                <p className="text-[18px] text-white/90 leading-relaxed text-left">
                 We provide end-to-end solutions for the management and processing of municipal solid (wet) waste, transforming it into government-approved, high-quality, and safe-to-use compost fertilizer.
<br /> <br />
  <span className="font-bold">Key Features:</span>  
 <br />

1. Advanced deodorization system ensuring effective odor control. <br />

2. Environmentally sustainable processes aligned with government waste management guidelines. <br />

3. Optimized operations requiring minimal resource utilization. <br />

4. Proven, cost-effective technology with successful field applications. <br />

5. Production of stable, mature, and nutrient-rich compost that enhances soil health and fertility. <br/>
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#7d5835] rounded-2xl px-8 py-10 
                              text-center text-white
                              shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 
                              hover:shadow-2xl 
                              hover:bg-[#5c422b]">

                <div className="mb-6 flex justify-center">
                  <img
                    src="/icons/agro.png"
                    alt=""
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-[20px] font-bold text-white mb-3">
                  Advanced Biogas & Digestate Treatment Solutions
                </h3>
                <br/>

                <p className="text-[18px] text-white/90 leading-relaxed text-left">
                 Our science-driven treatment systems ensure the efficient processing of complex waste streams such as biogas and digestate, converting them into high-quality, commercial-grade Fermented Organic Manure (FOM) and Liquid Fermented Organic Manure (LFOM).
<br /> <br />
  <span className="font-bold">Key Features:</span>  
 <br />

1. Comprehensive end-to-end turnkey project execution — from Detailed Project Report (DPR) preparation to final product handover. <br />

2. Professional waste audit and assessment services.<br />

3. Practical, implementation-focused solutions tailored to on-ground requirements.<br />

4. Research-driven product development and formulation.<br />

5. Production of FCO-approved, market-ready organic products. <br />
                </p>
              </div>
              {/* Card 3 */}
              <div className="group bg-[#7d5835] rounded-2xl px-8 py-10 
                              text-center text-white
                              shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 
                              hover:shadow-2xl 
                              hover:bg-[#5c422b]">

                <div className="mb-6 flex justify-center">
                  <img
                    src="/icons/production.png"
                    alt=""
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-[20px] font-bold text-white mb-3">
                  Sustainable Organic Waste to Soil Solutions
                </h3>
                <br/>

                <p className="text-[18px] text-white/90 leading-relaxed text-left">
                 We convert food waste, cattle waste, and agricultural residues into high-quality organic inputs that restore soil vitality, improve soil structure, and enhance crop productivity.
<br /> <br /> <br/>
  <span className="font-bold">Key Features:</span>  
 <br />

1. Microbial-based organic fertilizers for enhanced nutrient availability and soil health. <br />

2. Nutrient-rich compost and Phosphate-Rich Organic Manure (PROM). <br />

3. Granular organic fertilizers for ease of application and uniform nutrient distribution. <br />

4. Production of FCO-approved, market-ready organic products. <br />

5. Sustainable processing methods that promote circular economy practices and long-term soil regeneration. <br/>

                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-[#7d5835] rounded-2xl px-8 py-10 
                              text-center text-white
                              shadow-md
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-3 
                              hover:shadow-2xl 
                              hover:bg-[#5c422b]">

                <div className="mb-6 flex justify-center">
                  <img
                    src="/icons/soil.png"
                    alt=""
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-[20px] font-bold text-white mb-3">
                  Regenerative Agriculture & Consultancy
                </h3>

                <p className="text-[18px] text-white/90 leading-relaxed text-left">
                Beyond waste conversion, we actively support farmers, municipalities, and organizations in developing sustainable and regenerative systems that promote long-term environmental, agricultural, and economic resilience. <br/>
  <br/>
  <span className="font-bold">Key Features:</span>  
 <br />
1. Comprehensive waste audits and feasibility reports in accordance with international quality standards. <br/>

2. Structured training and consultancy programs for farmers, municipal staff, CSR initiatives, and startups. <br/>

3. End-to-end project setup and infrastructure planning support. <br/>

4. Technical advisory for regulatory compliance, policy alignment, and FCO certification processes. <br/>

5. Ongoing monitoring, performance optimization, and post-implementation support to ensure long-term project sustainability and operational efficiency. <br/>

                </p>
              </div>


            </div>
          </div>
        </div>
      </section>
     
{/* ================= WHY WASTE MANAGEMENT ================= */}
<section className="py-28 px-6 sm:px-10 lg:px-20 bg-[#F1F3E0]">
  <div className="container-page">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 
  className="text-[48px] font-bold text-[#1F3D2B] mb-6"
  style={{
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "-0.01em"
  }}
>
        Why Waste Management Matters
      </h2>
      <p 
  className="text-[18px] text-[#2E2E2E]"
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
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <div className="relative w-full h-[380px] sm:h-[520px] lg:h-[700px] rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/images/composting.png"
          alt="Food waste composting process"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="space-y-8">

        {/* Card 1 */}
        <div className="bg-[#a7c983] p-6 rounded-2xl shadow-lg 
                        hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
<h3 className="text-[25px] font-bold text-[#000000] mb-3">

            The Importance of Composting
          </h3>
          <p 
  className="text-[17px] text-[#2E2E2E]"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.7
  }}
>
            Composting converts organic and food waste into nutrient-rich fertilizer
            through natural biological processes. Instead of generating methane in
            landfills, waste becomes a productive agricultural resource.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#a7c983] p-6 rounded-2xl shadow-lg 
                        hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-[25px] font-bold text-[#000000] mb-3">
            Reducing Food Waste
          </h3>
          <p className="text-[17px] text-[#000000] leading-relaxed">
            Converting food waste into organic fertilizer reduces greenhouse emissions,
            lowers landfill burden, and supports sustainable value creation for cities,
            industries, and farmers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#a7c983] p-6 rounded-2xl shadow-lg 
                        hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-[25px] font-bold text-[#000000] mb-3">
            Benefits to Soil Health
          </h3>
          <p className="text-[17px] text-[#000000] leading-relaxed">
            Organic compost improves soil structure, enhances moisture retention,
            restores organic carbon, and supports long-term crop productivity without
            degrading the ecosystem.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#a7c983] p-6 rounded-2xl shadow-lg 
                        hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-[25px] font-bold text-[#000000] mb-3">
            Enhancing Soil Biodiversity
          </h3>
          <p className="text-[17px] text-[#000000] leading-relaxed">
            Healthy soil is a living ecosystem. Compost stimulates microbial activity,
            strengthens plant immunity, and contributes to regenerative agriculture systems.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


{/* ================= OUR IMPACT ================= */}
<section className="w-full bg-[#ffffff] py-28">
  <div className="container-page mx-auto px-6 sm:px-10 lg:px-20">
    
    <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
      
      {/* LEFT CONTENT */}
      <div className="max-w-md">
        <h2 className="section-title text-[52px] font-semibold text-[#1F3D2B] mb-6">
          Our Impact
        </h2>

        <p className="body-text text-[20px] text-[#2E2E2E] leading-relaxed">
          
          We transform waste into measurable environmental value.
Through integrated waste management systems and regenerative agricultural solutions, we reduce landfill dependency, restore soil vitality, and promote climate-resilient farming models. <br/><br/>

Our work directly contributes to circular economy practices, sustainable resource utilization, and long-term ecological balance across municipalities, industries, and farming communities. <br/>
        </p>
      </div>


      {/* RIGHT IMAGE CARD */}
      <div className="relative w-full lg:w-[60%] h-[300px] rounded-3xl overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/impact.png"
          alt="Impact Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* STATS */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full px-12 text-white text-center">

                        <div>
              <h3 className="text-[50px] text-white font-bold mb-2">
                150,000+
              </h3>
              <p className="text-[18px] opacity-90">
                Tons waste processed
              </p>
            </div>

            <div>
              <h3 className="text-[50px] text-white font-bold mb-2">
                35+
              </h3>
              <p className="text-[18px] opacity-90">
                Satisfied National and International Clients 
              </p>
            </div>
            
            <div className="text-white">
              <h3 className="text-[50px] text-white font-bold mb-2">
                28,000+
              </h3>
              <p className="text-[18px] opacity-90">
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
