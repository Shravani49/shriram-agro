import Link from "next/link";

export default function ServicesPage() {
   const services = [
    {
      id: "01",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      tag: "Core Service",
      title: "Integrated Waste Management Systems",
      intro:
        "We design and implement comprehensive waste management systems that transform municipal, agricultural, and industrial waste into valuable organic resources.",
      items: [
        "Municipal wet waste composting (Windrow, Aerobic & Bio-digestion systems)",
        "Municipal Solid Waste (MSW) to compost projects",
        "Sewage sludge treatment & wastewater bioremediation",
        "Cattle, dairy & sugar factory waste composting",
        "Resource recovery and recycling systems",
        "Decentralized waste management units",
        "Zero-waste model implementation",
        "Waste-to-organic input transformation systems",
      ],
      footer:
        "Our systems ensure environmental compliance, odor control, nutrient recovery, and sustainable resource utilization.",
      accent: "#1F3D2B",
      accentLight: "#a7c983",
      img: "/images/core1.png",
    },
    {
      id: "02",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tag: "Product Portfolio",
      title: "Organic Fertilizer Production & Product Development",
      intro:
        "We specialize in development and production of specialized organic fertilizers compliant with regulatory standards and quality benchmarks.",
      products: [
        { name: "City Compost", desc: "Urban organic waste converted to certified compost" },
        { name: "PROM", desc: "Phosphate Rich Organic Manure — high-yield soil enhancer" },
        { name: "FOM", desc: "Fermented Organic Manure with optimized microbial activity" },
        { name: "LFOM", desc: "Liquid Fermented Organic Manure for foliar & drip use" },
        { name: "PDM", desc: "Potash Derived from Molasses — potassium-rich bio-input" },
        { name: "Bio-enriched Manure", desc: "Microbially fortified organic compost" },
      ],
      footer:
        "All production systems align with FCO (1985) and NPOP specifications.",
      accent: "#7d5835",
      accentLight: "#E5D9B6",
      img: "/images/core2.png",
    },
    {
      id: "03",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9" />
        </svg>
      ),
      tag: "End-to-End Delivery",
      title: "Turnkey Project Implementation",
      intro:
        "We provide complete end-to-end project execution for waste management and organic fertilizer production facilities.",
      steps: [
        { phase: "Plan", items: ["Feasibility study & project planning", "Compost plant infrastructure design"] },
        { phase: "Build", items: ["Organic fertilizer production unit setup", "Biogas & CBG integration with FOM by-products", "QC laboratory setup"] },
        { phase: "Optimize", items: ["Production standardization & microbial optimization", "Regulatory documentation & compliance"] },
        { phase: "Sustain", items: ["Monitoring, training & operational management"] },
      ],
      footer:
        "Our implementation model ensures projects are delivered efficiently, sustainably, and in compliance with government norms.",
      accent: "#1F3D2B",
      accentLight: "#a7c983",
      img: "/images/core3.png",
    },
    {
      id: "04",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      tag: "Advisory",
      title: "Consultancy, Certification & Compliance",
      intro:
        "We offer advisory and technical consultancy services to municipal corporations, private firms, agricultural cooperatives, CSR programs, NGOs, and development organizations.",
      clients: [
        "Municipal Corporations",
        "Private Waste Management Firms",
        "Agricultural Cooperatives",
        "CSR Programs",
        "NGOs & Development Organizations",
      ],
      advisory: [
        "Organic input certification guidance",
        "FCO compliance advisory",
        "NPOP certification support",
        "Technical audits & project evaluation",
        "Waste-to-value strategic planning",
        "Policy-level advisory & sustainability presentations",
      ],
      footer:
        "We bridge regulatory frameworks with practical field implementation.",
      accent: "#7d5835",
      accentLight: "#E5D9B6",
      img: "/images/consultancy.png",
    },
    {
      id: "05",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      tag: "Innovation",
      title: "Research & Innovation",
      intro:
        "Under the leadership of Adv. Rahul Padwal, Adjunct Research Scientist at AICAD, Nairobi, our services are strengthened by active research and international collaboration.",
      focusAreas: [
        "Food & agricultural waste bio-processing",
        "Soil health management",
        "Integrated nutrient management",
        "Microbial CFU optimization",
        "Climate-resilient agriculture systems",
        "Fermented Organic Manure development",
        "Quality enhancement of organic fertilizers",
      ],
      footer:
        "Our international collaborations and academic engagements strengthen our project credibility and innovation capability.",
      accent: "#1F3D2B",
      accentLight: "#a7c983",
      img: "/images/research.png",
    },
  ];

  const industries = [
    { name: "Municipal Corporations", icon: "🏛️" },
    { name: "Agricultural Cooperatives", icon: "🌾" },
    { name: "Dairy Farms", icon: "🐄" },
    { name: "Sugar Factories", icon: "🏭" },
    { name: "Biofuel & Biogas Plants", icon: "⚡" },
    { name: "CSR & Corporate Sustainability", icon: "🌍" },
    { name: "International NGOs", icon: "🤝" },
    { name: "Research Institutions", icon: "🔬" },
    { name: "Waste Processing Enterprises", icon: "♻️" },
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#2C2416]">
      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600;700&family=Lora:wght@400;500;600;700&display=swap');
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .body-text {
          font-family: 'Crimson Text', serif;
        }
        
        .accent-text {
          font-family: 'Lora', serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
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
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
        }
      `}} />

      {/* Hero Section - Organic & Sophisticated */}
      <section className="relative flex items-center justify-center overflow-hidden grain">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d1e5b6] via-[#87a382] to-[#d2cfcf]"></div>
        
        {/* Decorative Organic Shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#7d5835]/10 organic-blob animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#E5D9B6]/30 organic-blob animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#7d5835]/5 organic-blob animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/80 backdrop-blur-sm rounded-full border border-[#7d5835]/20 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-[#5c3c1d] animate-pulse"></div>
            <span className="text-xl font-bold tracking-widest uppercase text-[#402e1c] accent-text">22+ Years of Excellence</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 section-title text-[#100d08] leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transforming Waste<br />
            <span className="font-bold text-[#7d5835] italic">into Living Soil</span>
          </h1>
          
          <p className="text-2xl font-semibold text-[#474303] max-w-3xl mx-auto mb-12 body-text leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Science-backed integrated waste management and organic fertilizer solutions 
            that restore ecosystems and nourish the earth
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap animate-fade-in" style={{animationDelay: '0.6s'}}>
          
            <Link
  href="/contact"
  className="px-10 py-5 bg-white/90 backdrop-blur-sm text-[#7d5835] rounded-full border-2 border-[#7d5835] hover:bg-[#7d5835] hover:text-white transition-all text-lg font-medium accent-text inline-block"
>
  Get in Touch
</Link>

          </div>
        </div>
        

      </section>

      {/* ─────────────────── OUR SERVICES — RIBBON HEADING ─────────────────── */}
     {/* ─────────────────── OUR SERVICES — HEADING ─────────────────── */}
<div className="bg-[#FDFBF7] py-20 flex flex-col items-center gap-0">
  
  {/* Eyebrow */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-px bg-[#7d5835] opacity-60" />
    <span className="font-sans text-[16px] font-bold tracking-[6px] uppercase text-[#7d5835]">
      What We Offer
    </span>
    <div className="w-12 h-px bg-[#7d5835] opacity-60" />
  </div>

  {/* Ruled headline */}
  <div className="flex flex-col items-center w-full max-w-3xl px-6">
    <div className="w-full h-px"
      style={{ background: "linear-gradient(to right, transparent, #1F3D2B 20%, #1F3D2B 80%, transparent)" }} />

    <h2 className="section-title text-[clamp(64px,8vw,96px)] font-light text-[#1F3D2B] tracking-tight leading-none px-12 py-4 whitespace-nowrap">
      Our <em className="font-semibold not-italic text-[#7d5835]">Services</em>
    </h2>

    <div className="w-full h-px"
      style={{ background: "linear-gradient(to right, transparent, #1F3D2B 20%, #1F3D2B 80%, transparent)" }} />
  </div>

</div>

      {/* ─────────────────── SERVICE 01 – Waste Management ─────────────────── */}
      <section className="bg-[#1F3D2B] py-24 px-6 md:px-10 overflow-hidden">
      
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left */}
            <div className="lg:w-[45%] space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#a7c983] rounded-2xl flex items-center justify-center text-[#1F3D2B] shrink-0">
                  {services[0].icon}
                </div>
                <div>
                  <p className="text-[#a7c983] text-sm font-semibold tracking-widest uppercase">{services[0].tag}</p>
                  <p className="text-[#E5D9B6] text-4xl font-bold font-serif leading-none">{services[0].id}</p>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {services[0].title}
              </h2>

              <p className="text-white/80 text-lg leading-relaxed">
                {services[0].intro}
              </p>

              <div className="pt-2 space-y-3">
                {services[0].items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#a7c983] shrink-0" />
                    <span className="text-white/100 text-3xl text-[16px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-[#a7c983] pl-5 py-1">
                <p className="text-[#a7c983] text-[15px] italic">{services[0].footer}</p>
              </div>
            </div>

            {/* Right – image + highlight cards */}
            <div className="lg:w-[55%] space-y-6">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#163021]">
                <img 
                    src={services[0].img}
                    alt={services[0].title}
                    className="w-full h-full object-cover opacity-90" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Environmental Compliance", "Odor Control", "Nutrient Recovery", "Zero-waste Ecosystems"].map((item) => (
                  <div key={item}
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/90 text-[15px] font-medium hover:bg-[#a7c983]/20 transition-colors duration-200">
                    <span className="text-[#a7c983] mr-2">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

  {/* ─────────────────── SERVICE 02 – Fertilizer Production ─────────────────── */}
<section className="bg-[#E5D9B6] py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">

      {/* Right label + content */}
      <div className="lg:w-[75%] space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#7d5835] rounded-2xl flex items-center justify-center text-white shrink-0">
            {services[1].icon}
          </div>
          <div>
            <p className="text-[#7d5835] text-sm font-semibold tracking-widest uppercase">{services[1].tag}</p>
            <p className="text-[#7d5835]/40 text-4xl font-bold font-serif leading-none">{services[1].id}</p>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#152f1f] leading-tight">
          {services[1].title}
        </h2>

        <p className="text-[#000000] text-xl leading-relaxed font-semibold">
          {services[1].intro}
        </p>

        <div className="border-l-4 border-[#7d5835] pl-5 py-1">
          <p className="text-[#412000] text-[15px] italic font-bold">
            {services[1].footer}
          </p>
        </div>

        {/* ✅ GREEN BOX MOVED HERE (RIGHT SIDE) */}
        <div className="bg-[#1F3D2B] rounded-2xl px-6 py-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-[#a7c983] rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-[#1F3D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-white text-[16px]">
            All formulations develop optimized <strong>microbial CFU levels</strong> to enhance
            soil structure, nutrient availability, and long-term soil fertility.
          </p>
        </div>
      </div>

      {/* Left – product cards grid */}
      <div className="lg:w-[45%] space-y-6">
        <div className="w-full h-52 rounded-3xl overflow-hidden shadow-xl">
          <img 
              src={services[1].img}
              alt={services[1].title}
              className="w-full h-full object-cover" 
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services[1].products.map((p) => (
            <div key={p.name}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#7d5835]/10">
              <p className="text-[#7d5835] font-bold text-[18px] mb-1">{p.name}</p>
              <p className="text-[#2E2E2E] text-[16px] leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ─────────────────── SERVICE 03 – Turnkey ─────────────────── */}
      <section className="bg-[#F1F3E0] py-24 px-6 md:px-16">
        <div className="max-w-[1800px] mx-auto">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#1F3D2B] rounded-2xl flex items-center justify-center text-[#a7c983] shrink-0">
              {services[2].icon}
            </div>
            <div>
              <p className="text-[#1F3D2B] text-xl font-semibold tracking-widest uppercase">{services[2].tag}</p>
              <p className="text-[#1F3D2B]/70 text-4xl font-bold font-serif leading-none">{services[2].id}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-[40%] space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3D2B] leading-tight">
                {services[2].title}
              </h2>
              <p className="text-[#2E2E2E] text-lg leading-relaxed">{services[2].intro}</p>

              <div className="w-full h-66 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={services[2].img}
                  alt={services[2].title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Phase cards */}
            <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services[2].steps.map((step, i) => (
                <div key={step.phase}
                  className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#a7c983]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#1F3D2B] text-white text-s font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#1F3D2B] font-bold text-xl tracking-wide uppercase">{step.phase}</span>
                  </div>

                  
                  <div className="space-y-2">
                    {step.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#a7c983] shrink-0" />
                        <span className="text-[#2E2E2E] text-[18px] leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            

          </div>
          <div className="mt-10 border-l-4 border-[#1F3D2B] pl-5 py-1">
  <p className="text-[#1F3D2B] text-[17px] italic font-bold">
    {services[2].footer}
  </p>
</div>

        </div>
      </section>

      {/* ─────────────────── SERVICE 04 – Consultancy ─────────────────── */}
      <section className="bg-[#7d5835] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            <div className="lg:w-[45%] space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#c2a44a] rounded-2xl flex items-center justify-center text-[#7d5835] shrink-0">
                  {services[3].icon}
                </div>
                <div>
                  <p className="text-[#E5D9B6] text-sm font-semibold tracking-widest uppercase">{services[3].tag}</p>
                  <p className="text-[#E5D9B6]/30 text-4xl font-bold font-serif leading-none">{services[3].id}</p>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {services[3].title}
              </h2>
              <p className="text-white/100 text-lg leading-relaxed">{services[3].intro}</p>

              {/* Client types */}
              <div>
                <p className="text-[#E5D9B6] text-lg font-semibold tracking-widest uppercase mb-3">Who We Serve</p>
                <div className="flex flex-wrap gap-2">
                  {services[3].clients.map((c) => (
                    <span key={c}
                      className="px-4 py-2 border border-white/20 text-white text-m rounded-full hover:bg-white/10 transition-colors duration-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] space-y-6">
              <div className="w-full h-70 rounded-3xl overflow-hidden shadow-xl">
                <img src="/images/core4.png" alt="Consultancy Services"
                  className="w-full h-full object-cover" />
              </div>


              <div>
                <p className="text-[#E5D9B6] text-sm font-semibold tracking-widest uppercase mb-4">Advisory Services</p>
                <div className="space-y-3">
                  {services[3].advisory.map((a) => (
  <div key={a}
    className="flex items-center gap-3 bg-[#E5D9B6] border border-[#7d5835]/20 rounded-2xl px-5 py-3 hover:bg-[#d8caa3] transition-colors duration-200">
    
    <span className="text-[#7d5835] font-bold text-lg">→</span>
    
    <span className="text-black text-[15px] font-medium">
      {a}
    </span>
  </div>
))}

                </div>
              </div>

              <div className="border-l-4 border-[#E5D9B6] pl-5 py-1">
                <p className="text-[#f8f8f8] text-[15px] italic font-bold">{services[3].footer}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────── SERVICE 05 – Research ─────────────────── */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">

            <div className="lg:w-[45%] space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#1F3D2B] rounded-2xl flex items-center justify-center text-[#a7c983] shrink-0">
                  {services[4].icon}
                </div>
                <div>
                  <p className="text-[#1F3D2B] text-lg font-semibold tracking-widest uppercase">{services[4].tag}</p>
                  <p className="text-[#1F3D2B]/80 text-4xl font-bold font-serif leading-none">{services[4].id}</p>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3D2B] leading-tight">
                {services[4].title}
              </h2>
              <p className="text-[#2E2E2E] text-xl leading-relaxed">{services[4].intro}</p>

              <div className="border-l-4 border-[#a7c983] pl-5 py-1">
                <p className="text-[#1F3D2B] text-[18px] italic font-bold">{services[4].footer}</p>
              </div>

              {/* AICAD badge */}
              <div className="bg-[#F1F3E0] rounded-2xl px-6 py-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F3D2B] rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  AI<br />CAD
                </div>
                <div>
                  <p className="font-bold text-[#1F3D2B] text-[17px]">AICAD Nairobi</p>
                  <p className="text-[#2E2E2E] text-[15px]">International research collaboration & academic engagement</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] space-y-6">
              <div className="w-90 h-84 rounded-3xl overflow-hidden shadow-xl">
                <img src="/images/core5.png" alt="Research and Innovation"
                  className="w-full h-80 object-cover" />
              </div>

              <div>
                <p className="text-[#1F3D2B] text-sm font-semibold tracking-widest uppercase mb-4">Research Focus Areas</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[4].focusAreas.map((area, i) => (
                    <div key={area}
                      className="bg-[#F1F3E0] rounded-2xl px-5 py-4 hover:bg-[#a7c983]/30 transition-colors duration-200 flex items-start gap-3 border border-[#a7c983]/20">
                      <span className="w-6 h-6 rounded-full bg-[#1F3D2B] text-white text-m flex items-center justify-center shrink-0 mt-0.5 font-medium">
                        {i + 1}
                      </span>
                      <span className="text-[#2E2E2E] text-[16px] leading-snug">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────── INDUSTRIES WE SERVE ─────────────────── */}
      <section className="bg-[#E5D9B6] py-24 overflow-hidden">

        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div className="inline-block px-4 py-1.5 bg-[#7d5835]/10 rounded-full mb-4">
            <span className="text-xl font-bold text-[#7d5835] tracking-widest uppercase">Sectors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3D2B] leading-tight">
            Industries We Serve
          </h2>
          <p className="mt-4 text-[#2E2E2E] text-lg max-w-2xl mx-auto">
            Our solutions are trusted across a wide range of sectors, from civic bodies to global research institutions.
          </p>
        </div>

        {/* Marquee strip */}
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Row 1 — left to right */}
        <div className="relative overflow-hidden mb-5">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
            style={{ background: "linear-gradient(to right, #E5D9B6, transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
            style={{ background: "linear-gradient(to left, #E5D9B6, transparent)" }} />

          <div className="marquee-track">
            {/* Duplicate the list twice so the loop is seamless */}
            {[...industries, ...industries].map((ind, i) => (
              <div key={i}
                className="flex items-center gap-3 bg-white border border-[#7d5835]/10 rounded-full px-7 py-4 mx-3 shadow-sm whitespace-nowrap cursor-default hover:bg-[#1F3D2B] hover:border-[#1F3D2B] group transition-colors duration-300">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                <span className="text-[#1F3D2B] group-hover:text-white font-semibold text-[15px] transition-colors duration-300">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right to left (reverse) */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
            style={{ background: "linear-gradient(to right, #E5D9B6, transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
            style={{ background: "linear-gradient(to left, #E5D9B6, transparent)" }} />

          <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "22s" }}>
            {[...industries, ...industries].map((ind, i) => (
              <div key={i}
                className="flex items-center gap-3 bg-[#1F3D2B] border border-[#1F3D2B] rounded-full px-7 py-4 mx-3 shadow-sm whitespace-nowrap cursor-default hover:bg-white hover:border-[#7d5835]/20 group transition-colors duration-300">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                <span className="text-white group-hover:text-[#1F3D2B] font-semibold text-[15px] transition-colors duration-300">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7d5835] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E5D9B6] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#F1F3E0] rounded-full mb-6">
            <span className="text-lg font-medium text-[#7d5835] tracking-widest uppercase">Let's Work Together</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light text-[#2a2a2a] mb-6 leading-tight">
            Ready to build a<br />
            <span className="italic font-serif text-[#7d5835]">sustainable waste ecosystem?</span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Partner with Shriram Agro Industries to design, implement, and manage scalable,
            science-backed solutions for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
                <button className="px-10 py-4 bg-[#7d5835] text-white font-medium rounded-full hover:bg-[#6a4a2d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Request Consultation
                </button>
            </Link>

            <a
  href="https://drive.google.com/file/d/1SBCXuDW4N7U6aX97XxoPG0gUEIfUgpSw/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-10 py-4 border-2 border-[#7d5835] text-[#7d5835] font-medium rounded-full hover:bg-[#7d5835] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block active:scale-95"
>
  Download Brochure
</a>
          </div>
        </div>
      </section>

    </div>
  );
}




