import Link from "next/link";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const articles = [
  {
    n: "01",
    title: "NPOP Organic Certification in India: Step-by-Step Guide for Farmers",
    desc: "A practical walkthrough of India's National Programme for Organic Production certification process, covering documentation, inspection, and compliance requirements.",
    link: "https://wikifarmer.com/library/en/article/npop-organic-certification-in-india-step-by-step-guide-for-farmers",
  },
  {
    n: "02",
    title: "Practical Challenges in Transitioning to Organic Farming",
    desc: "An evidence-based examination of agronomic, economic, and market barriers farmers face when shifting from conventional to organic production systems.",
    link: "https://wikifarmer.com/library/en/article/practical-challenges-in-transitioning-to-organic-farming",
  },
  {
    n: "03",
    title: "Organic Fertilizers: A Comprehensive Guide",
    desc: "Types, application methods, nutrient profiles, and agronomic benefits of organic fertilizers for sustainable soil fertility management.",
    link: "https://wikifarmer.com/library/en/article/organic-fertilizers-a-comprehensive-guide",
  },
  {
    n: "04",
    title: "Role of Soil Microorganisms in Sustainable Agriculture",
    desc: "How bacterial, fungal, and protozoan communities drive nutrient cycling, disease suppression, and long-term soil health.",
    link: "https://wikifarmer.com/library/en/article/role-of-soil-microorganisms-in-sustainable-agriculture",
  },
  {
    n: "05",
    title: "The Role of Organic Farming and Its Essential Components",
    desc: "An overview of the core principles, inputs, and practices that define certified organic agriculture worldwide.",
    link: "https://wikifarmer.com/library/en/article/the-role-of-organic-farming-and-its-essential-components",
  },
  {
    n: "06",
    title: "The Significance of Soil Health in Sustainable Agriculture",
    desc: "Why soil biological activity, structure, and chemistry are foundational to food security and environmental sustainability.",
    link: "https://wikifarmer.com/library/en/article/the-significance-of-soil-health-in-sustainable-agriculture",
  },
];

const mediaItems = [
  {
    n: "01",
    title: "Featured in Floramarket — International Agricultural Publication, Spain",
    link: "https://publuu.com/flip-book/89973/780268/page/44",
  },
  {
    n: "02",
    title: "The Element Phosphorus: A Pillar of Crop Nutrition — Verdimedia Editorial",
    link: "https://share.google/5uU7HUhZkJgzrGJ7z",
  },
  {
    n: "03",
    title: "Agriculture Today — 2024 Edition",
    link: "https://drive.google.com/file/d/1eTvnPvRB8pT3lrz5IBNdro82UWWj1NZ9/view",
  },
  {
    n: "04",
    title: "Sakal AgroVon — Feature Article 01",
    link: "https://drive.google.com/file/d/1AUOIblfjfLQ_JsepTcaOm_RdwuvHT3Vt/view?usp=sharing",
  },
  {
    n: "05",
    title: "Sakal AgroVon — Feature Article 02",
    link: "https://drive.google.com/file/d/18M7Y87DybeUTEuxiwloWkEN_Sy9Y-YvN/view?usp=sharing",
  },
  {
    n: "06",
    title: "Samarth Bharat — Media Feature",
    link: "https://drive.google.com/file/d/1p-OLZ-0JBQyIP8LxEgQqc39wu3qio0aT/view?usp=sharing",
  },
];

export default function FounderPage() {
  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#FAFAF8", color: "#1a1a1a" }}>

      <a
  href="https://www.linkedin.com/in/rahul-padwal-6b240339/"
  target="_blank"
  rel="noopener noreferrer"
  className="founder-linkedin"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.54 53.54 0 1 1 53.54-53.54A53.54 53.54 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.8V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3V448z"/>
  </svg>
</a>

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { overflow-x: hidden; -webkit-text-size-adjust: 100%; }

.founder-linkedin {
  position: fixed;
  top: 120px;
  right: 28px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #0A66C2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  z-index: 999;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.founder-linkedin svg {
  width: 22px;
  height: 22px;
  fill: white;
}

.founder-linkedin:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 28px rgba(0,0,0,0.35);
}
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a1 { animation: fadeUp 0.7s ease 0.1s both; }
        .a2 { animation: fadeUp 0.7s ease 0.25s both; }
        .a3 { animation: fadeUp 0.7s ease 0.4s both; }
        .a4 { animation: fadeUp 0.7s ease 0.55s both; }

        .sans { font-family: 'Lato', sans-serif; }

        /* HERO */
        .hero {
          background: #1C3829;
          display: flex;
          min-height: 90vh;
          align-items: stretch;
        }
        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 64px 90px 80px;
        }
        .tag {
          font-family: 'Lato', sans-serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 24px;
        }
        .hero-name {
          font-size: clamp(38px, 4.5vw, 62px);
          font-weight: 700;
          color: #fff;
          line-height: 1.07;
          margin-bottom: 16px;
        }
        .hero-role {
          font-family: 'Lato', sans-serif;
          font-size: 22px;
          font-weight: 300;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.3px;
          margin-bottom: 36px;
        }
        .gold-bar {
          width: 44px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 32px;
        }
        .hero-bio {
          font-family: 'Lato', sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.9;
          color: rgba(255,255,255,0.9);
          max-width: 600px;
          margin-bottom: 52px;
        }
        .hero-stats {
          display: flex;
          gap: 44px;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .stat-n {
          font-size: 50px;
          font-weight: 700;
          color: #C9A84C;
          line-height: 1;
        }
        .stat-l {
          font-family: 'Lato', sans-serif;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-top: 5px;
        }
        .hero-right {
          width: 40%;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: brightness(0.85) saturate(0.85);
        }
        .hero-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #1C3829 0%, transparent 28%);
          pointer-events: none;
        }
        .hero-badge {
          position: absolute;
          bottom: 32px;
          right: 32px;
          background: #C9A84C;
          color: #1C3829;
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 11px 18px;
          border-radius: 4px;
        }

        /* SHARED LAYOUT */
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 88px 40px;
        }
        .sh {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .sh-tag {
          font-family: 'Lato', sans-serif;
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #C9A84C;
          white-space: nowrap;
        }
        .sh-line { flex: 1; height: 1px; background: #e5e0d8; }
        .sec-t {
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 600;
          color: #1C3829;
          line-height: 1.15;
          margin-bottom: 40px;
        }
        .sec-sub {
          font-family: 'Lato', sans-serif;
          font-size: 20px;
          color: #aaa;
          font-weight: 900;
          margin-top: -28px;
          margin-bottom: 40px;
        }

        /* POSITIONS */
        .pos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #ddd8ce;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #ddd8ce;
        }
        .pos-card {
          background: #fff;
          padding: 36px 30px;
        }
        .pos-org {
          font-family: 'Lato', sans-serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 8px;
        }
        .pos-role {
          font-size: 24px;
          font-weight: 600;
          color: #1C3829;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .pos-desc {
          font-family: 'Lato', sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: #111;
          line-height: 1.75;
        }

        /* PUB BANNER */
        .pub-banner {
          margin-top: 36px;
          background: #1C3829;
          border-radius: 12px;
          padding: 38px 48px;
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .pub-bar {
          width: 3px;
          min-height: 60px;
          background: #C9A84C;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .pub-jrnl {
          font-family: 'Lato', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 10px;
        }
        .pub-title {
          font-size: 20px;
          font-style: italic;
          font-weight: 400;
          color: #fff;
          line-height: 1.5;
        }

        /* PRODUCTS */
        .prod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .prod-card {
          background: #fff;
          border-radius: 18px;
          padding: 30px 26px;
          border: 1px solid #ede9e1;
          transition: border-color .25s, box-shadow .25s;
        }
        .prod-card:hover {
          border-color: #C9A84C;
          box-shadow: 0 6px 24px rgba(28,56,41,.07);
        }
        .prod-abbr {
          font-family: 'Lato', sans-serif;
          font-size: 18px;
          font-weight: 1000;
          letter-spacing: 2.5px;
          color: #C9A84C;
          margin-bottom: 12px;
        }
        .prod-name {
          font-size: 24px;
          font-weight: 600;
          color: #1C3829;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .prod-desc {
          font-family: 'Lato', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #999;
          line-height: 1.7;
        }

        /* EDUCATION */
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .edu-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 18px;
          border-radius: 8px;
          border: 1px solid #eae6de;
          background: #FAFAF8;
        }
        .edu-e { font-size: 24px; flex-shrink: 0; }
        .edu-t {
          font-size: 20px;
          font-weight: 600;
          color: #1C3829;
          line-height: 1.4;
        }
        .edu-s {
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          color: #C9A84C;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-top: 3px;
        }

        /* THOUGHT LEADERSHIP */
        .tl-bg { background: #1C3829; }
        .tl-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 88px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .tl-bg .sh-tag { color: #C9A84C; }
        .tl-bg .sh-line { background: rgba(255,255,255,.08); }
        .tl-bg .sec-t { color: #fff; }
        .pub-list { list-style: none; margin-top: 28px; }
        .pub-li {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,.4);
          font-family: 'Lato', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: rgba(256,256,256,.5);
          transition: color .2s;
        }
        .pub-li:hover { color: rgba(255,255,255,.9); }
        .pub-li:last-child { border-bottom: none; }
        .pub-li-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #C9A84C;
          flex-shrink: 0;
        }
        .adv-box {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 12px;
          padding: 36px;
          margin-top: 28px;
        }
        .adv-item {
          display: flex;
          gap: 16px;
          margin-bottom: 22px;
          align-items: flex-start;
        }
        .adv-item:last-child { margin-bottom: 0; }
        .adv-n {
          font-size: 28px;
          font-weight: 700;
          color: rgba(255,255,255,.40);
          width: 30px;
          flex-shrink: 0;
          line-height: 1;
        }
        .adv-t {
          font-family: 'Lato', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: rgba(255,255,255,.65);
          line-height: 1.5;
          padding-top: 2px;
        }

        /* FOOTER */
        .foot {
          background: #111;
          padding: 26px 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .foot-n { font-size: 15px; font-weight: 600; color: #fff; }
        .foot-m {
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,.25);
          text-transform: uppercase;
        }

        /* ── PUBLICATIONS SECTION STYLES ── */
        .pub-root-inner {
          font-family: 'DM Sans', sans-serif;
        }

        /* Section eyebrow */
        .pub-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .pub-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #B8973E;
          flex-shrink: 0;
        }
        .pub-eyebrow-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B8973E;
        }
        .pub-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 700;
          color: #1C3829;
          margin: 0 0 56px 0;
          line-height: 1.2;
        }

        /* Research card */
        .res-card {
          border: 1px solid #e8e3d8;
          border-radius: 4px;
          padding: 56px 64px; 
          max-width: 5000px; 
          background: #fff;
           margin: 0 auto; 
          position: relative;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .res-card:hover {
          box-shadow: 0 8px 32px rgba(28,56,41,0.08);
          border-color: #c9b87a;
        }
        .res-card-number {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 600;
          color: #B8973E;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }
        .res-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 600;
          color: #1C3829;
          line-height: 1.45;
          margin: 0 0 20px 0;
        }
        .res-card-meta {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #ede9df;
        }
        .res-card-meta span {
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
          color: #888;
          line-height: 1.5;
        }
        .res-card-meta strong {
          color: #555;
          font-weight: 600;
        }
        .res-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
          line-height: 1.8;
          color: #4a4a4a;
          margin: 0 0 32px 0;
        }
        .res-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .res-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .res-link-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: #666;
          border: 1px solid #ddd;
          border-radius: 2px;
          padding: 5px 12px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .res-link-pill:hover {
          border-color: #1C3829;
          color: #1C3829;
          background: #f5f7f5;
        }
        .res-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #1C3829;
          text-decoration: none;
          letter-spacing: 0.04em;
          white-space: nowrap;
          transition: gap 0.2s ease;
        }
        .res-cta:hover { gap: 12px; }

        /* Article cards */
        .art-card {
          border-top: 1px solid #e8e3d8;
          padding: 32px 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: start;
        }
        .art-card:last-child { border-bottom: 1px solid #e8e3d8; }
        .art-card-source {
          font-family: 'DM Sans', sans-serif;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #B8973E;
          margin-bottom: 10px;
        }
        .art-card-num {
          display: inline-block;
          font-size: 30px;
          color: #bbb;
          margin-right: 8px;
          font-family: 'Playfair Display', serif;
        }
        .art-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 600;
          color: #1C3829;
          line-height: 1.45;
          margin: 0 0 10px 0;
          text-decoration: none;
          display: block;
        }
        .art-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          color: #777;
          line-height: 1.7;
          margin: 0;
        }
        .art-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #1C3829;
          text-decoration: none;
          letter-spacing: 0.06em;
          white-space: nowrap;
          margin-top: 4px;
          transition: color 0.2s, gap 0.2s;
        }
        .art-cta:hover { gap: 11px; color: #B8973E; }

        /* Author badge */
        .author-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #e2ddd3;
          border-radius: 40px;
          padding: 10px 20px 10px 14px;
          margin-bottom: 44px;
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          color: #555;
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .author-badge:hover {
          border-color: #B8973E;
          box-shadow: 0 2px 12px rgba(184,151,62,0.12);
        }
        .author-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4CAF50;
          flex-shrink: 0;
        }
        .author-badge strong { color: #1C3829; font-weight: 600; }

        /* Media grid */
        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .media-card {
          border: 1px solid #e8e3d8;
          border-radius: 4px;
          padding: 28px 30px;
          background: #fafaf8;
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-decoration: none;
          transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
          position: relative;
          overflow: hidden;
        }
        .media-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: #B8973E;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s ease;
        }
        .media-card:hover::before { transform: scaleY(1); }
        .media-card:hover {
          border-color: #c9b87a;
          background: #fff;
          box-shadow: 0 4px 20px rgba(28,56,41,0.07);
        }
        .media-card-num {
          font-size: 24px;
          color: #1C3829;
          font-weight: 600;
          font-family: 'Playfair Display', serif;
        }
        .media-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 600;
          color: #1C3829;
          line-height: 1.5;
          margin: 0;
        }
        .media-card-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #B8973E;
          letter-spacing: 0.05em;
          margin-top: auto;
        }

        /* pub-wrap — narrower max-width for publications sections */
        .pub-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 88px 40px;
        }

        /* ── TABLET (≤860px) ── */
        @media (max-width: 860px) {
          .hero { flex-direction: column; min-height: auto; }
          .hero-left { padding: 56px 24px; }
          .hero-right { width: 100%; height: 300px; }
          .pos-grid, .prod-grid, .edu-grid { grid-template-columns: 1fr 1fr; }
          .tl-inner { grid-template-columns: 1fr; gap: 48px; padding: 60px 24px; }
          .wrap { padding: 64px 24px; }
          .pub-wrap { padding: 64px 24px; }
          .foot { flex-direction: column; gap: 8px; padding: 24px; }
          .media-grid { grid-template-columns: 1fr; }
          .art-card { grid-template-columns: 1fr; }
          .res-card { padding: 28px 24px; }
          .sh-tag { font-size: 22px !important; letter-spacing: 2px !important; }
        }

        /* ── MOBILE / ANDROID (≤560px) ── */
        @media (max-width: 560px) {
          /* LinkedIn button — smaller, lower so it doesn't overlap content */
          .founder-linkedin {
            top: auto !important;
            bottom: 24px !important;
            right: 16px !important;
            width: 46px !important;
            height: 46px !important;
          }

          /* HERO */
          .hero { flex-direction: column; min-height: auto; }
          .hero-left {
            padding: 44px 20px 40px !important;
          }
          .tag {
            font-size: 13px !important;
            letter-spacing: 2px !important;
            margin-bottom: 16px !important;
          }
          .hero-name {
            font-size: 32px !important;
            margin-bottom: 12px !important;
          }
          .hero-role {
            font-size: 16px !important;
            margin-bottom: 24px !important;
          }
          .hero-bio {
            font-size: 16px !important;
            line-height: 1.7 !important;
            margin-bottom: 32px !important;
          }
          .hero-stats {
            gap: 24px !important;
            padding-top: 24px !important;
            flex-wrap: wrap !important;
          }
          .stat-n { font-size: 36px !important; }
          .stat-l { font-size: 13px !important; letter-spacing: 1px !important; }

          /* Show full image on mobile — let height be auto so nothing is cropped */
          .hero-right {
            width: 100% !important;
            height: auto !important;
            background: #1C3829;
          }
          .hero-right img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
            object-position: center center !important;
            display: block !important;
            filter: brightness(0.9) saturate(0.85) !important;
          }
          /* Hide the left-to-right fade gradient on mobile (not needed when stacked) */
          .hero-fade {
            background: linear-gradient(to bottom, #1C3829 0%, transparent 15%) !important;
          }
          .hero-badge {
            font-size: 12px !important;
            padding: 8px 12px !important;
            bottom: 12px !important;
            right: 12px !important;
          }

          /* SHARED SECTION LAYOUT */
          .wrap { padding: 44px 16px !important; }
          .pub-wrap { padding: 44px 16px !important; }
          .sh { margin-bottom: 28px !important; gap: 10px !important; }
          .sh-tag {
            font-size: 14px !important;
            letter-spacing: 2px !important;
            white-space: normal !important;
          }
          .sec-t { font-size: 26px !important; margin-bottom: 24px !important; }
          .sec-sub { font-size: 14px !important; margin-top: -16px !important; margin-bottom: 24px !important; }

          /* POSITIONS */
          .pos-grid {
            grid-template-columns: 1fr !important;
          }
          .pos-card { padding: 24px 18px !important; }
          .pos-org { font-size: 16px !important; letter-spacing: 1.5px !important; }
          .pos-role { font-size: 18px !important; }
          .pos-desc { font-size: 15px !important; line-height: 1.6 !important; }

          /* PRODUCTS */
          .prod-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
          .prod-card { padding: 20px 18px !important; border-radius: 12px !important; }
          .prod-abbr { font-size: 14px !important; }
          .prod-name { font-size: 18px !important; }
          .prod-desc { font-size: 14px !important; }

          /* EDUCATION */
          .edu-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
          .edu-card { padding: 14px 14px !important; gap: 10px !important; }
          .edu-e { font-size: 20px !important; }
          .edu-t { font-size: 15px !important; }

          /* PUBLICATIONS */
          .pub-eyebrow-label { font-size: 13px !important; letter-spacing: 0.12em !important; }
          .pub-section-title { font-size: 26px !important; margin-bottom: 28px !important; }

          /* Research paper title */
          .pub-wrap > h3 {
            font-size: 18px !important;
            margin-bottom: 24px !important;
          }

          /* Media grid — single column */
          .media-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .media-card { padding: 20px 18px !important; gap: 10px !important; }
          .media-card-num { font-size: 18px !important; }
          .media-card-title { font-size: 17px !important; }
          .media-card-cta { font-size: 14px !important; }

          /* Article cards */
          .art-card {
            grid-template-columns: 1fr !important;
            padding: 22px 0 !important;
            gap: 14px !important;
          }
          .art-card-source { font-size: 14px !important; letter-spacing: 0.08em !important; }
          .art-card-num { font-size: 20px !important; }
          .art-card-title { font-size: 18px !important; }
          .art-card-desc { font-size: 14px !important; }
          .art-cta { font-size: 14px !important; }

          /* Author badge */
          .author-badge {
            font-size: 14px !important;
            padding: 10px 16px !important;
            margin-bottom: 28px !important;
            flex-wrap: nowrap !important;
            display: flex !important;
            align-items: flex-start !important;
            gap: 8px !important;
            width: 100% !important;
            border-radius: 14px !important;
          }
          .author-badge span {
            flex: 1 !important;
            line-height: 1.5 !important;
          }
          .author-badge svg {
            flex-shrink: 0 !important;
            margin-top: 3px !important;
          }

          /* Res card */
          .res-card { padding: 20px 16px !important; }

          /* Footer */
          .foot {
            padding: 20px 16px !important;
            flex-direction: column !important;
            gap: 6px !important;
            text-align: center !important;
          }
          .foot-n { font-size: 14px !important; }
          .foot-m { font-size: 10px !important; }
        }

        /* ── VERY SMALL ANDROID (≤360px) ── */
        @media (max-width: 360px) {
          .hero-left { padding: 36px 14px 32px !important; }
          .hero-name { font-size: 27px !important; }
          .wrap { padding: 36px 14px !important; }
          .pub-wrap { padding: 36px 14px !important; }
          .pub-section-title { font-size: 22px !important; }
          .sec-t { font-size: 22px !important; }
          .hero-right { height: auto !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="tag a1">Founder & CEO · Adjunct Research Scientist (AICAD)</p>
          <h1 className="hero-name a2">Adv. Rahul<br />Prataprao Padwal</h1>
          <p className="hero-role sans a2">Sustainability Leader · Research Scientist · Organic Fertilizer Innovator</p>
          <div className="gold-bar a3" />
          <p className="hero-bio a3">
            Over 22 years of hands-on expertise in integrated waste management, soil health restoration, and regenerative agriculture — bridging scientific research, field implementation, and global sustainability partnerships.
          </p>
          <div className="hero-stats a4">
            <div>
              <div className="stat-n">22+</div>
              <div className="stat-l">Years</div>
            </div>
            <div>
              <div className="stat-n">10+</div>
              <div className="stat-l">Products</div>
            </div>
            <div>
              <div className="stat-n">7</div>
              <div className="stat-l">Global Assossiations</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-fade" />
          <img src="/images/rahul_Padwal.png" alt="Adv. Rahul Prataprao Padwal" />
          <div className="hero-badge">Sustainability Leader</div>
        </div>
      </section>

      {/* INTERNATIONAL POSITIONS */}
      <div style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="sh">
            <span className="sh-tag">International Engagement</span>
            <div className="sh-line" />
          </div>
          <h2 className="sec-t">Global Positions & Research</h2>

          <div className="pos-grid">
            <div className="pos-card">
              <div className="pos-dot" />
              <div className="pos-org">AICAD · Nairobi</div>
              <div className="pos-role">Adjunct Research Scientist</div>
              <div className="pos-desc">African Institute for Capacity Development — advancing organic agriculture research across the African continent.</div>
            </div>
            <div className="pos-card">
              <div className="pos-dot" />
              <div className="pos-org">JKUAT · Kenya</div>
              <div className="pos-role">Educational Adviser</div>
              <div className="pos-desc">Jomo Kenyatta University of Agriculture & Technology — guiding curriculum and agricultural research direction.</div>
            </div>
            <div className="pos-card">
              <div className="pos-dot" />
              <div className="pos-org">Makerere & PACBS University Uganda</div>
              <div className="pos-role">Joint Grat Applications</div>
              <div className="pos-desc">Makerere University and Pan African Chamber Business School — building sustainable agriculture networks.</div>
            </div>
          </div>

          
        </div>
      </div>

      

      {/* EDUCATION */}
      <div style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="sh">
            <span className="sh-tag">Academic Excellence</span>
            <div className="sh-line" />
          </div>
          <h2 className="sec-t">Education & Credentials</h2>
          <p className="sec-sub">Multidisciplinary expertise across agriculture, sustainability, and law</p>

          <div className="edu-grid">
            {[
              { e: "🏆", t: "MBA — Agriculture" },
              { e: "🏆", t: "MBA — Operations & Production" },
              { e: "🔬", t: "MSc Agriculture — Soil Science & Agricultural Chemistry" },
              { e: "🥇", t: "BSc Agriculture", s: "Gold Medalist · University Topper" },
              { e: "🥇", t: "Agri Business Management", s: "Gold Medal" },
              { e: "🌿", t: "Diploma in Horticulture" },
              { e: "📰", t: "Diploma in Agro Journalism" },
              { e: "💊", t: "Bio Pharmacy Certification" },
              { e: "⚖️", t: "LLB — Law" },
            ].map(c => (
              <div key={c.t} className="edu-card">
                <div className="edu-e">{c.e}</div>
                <div>
                  <div className="edu-t">{c.t}</div>
                  {c.s && <div className="edu-s">{c.s}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESEARCH PUBLICATIONS ── */}
      <div style={{ background: '#F4F1EB' }}>
        <div className="pub-wrap pub-root-inner">
          <div className="pub-eyebrow">
            <div className="pub-eyebrow-dot" />
            <span className="pub-eyebrow-label">Academic Research</span>
          </div>
          <h2 className="pub-section-title">Research Publications</h2>
<h3 style={{
  fontFamily: "Playfair Display, serif",
  fontSize: "26px",
  color: "#1C3829",
  marginBottom: "36px",
  lineHeight: "1.4"
}}>
  A Study on Conversion of Raw Cow Manure into Nutritious Organic Fertilizer for Quality Enhancement
</h3>

<div className="media-grid">

  <a
    href="https://doi.org/10.29121/shodhkosh.v5.i6.2024.4800"
    target="_blank"
    rel="noopener noreferrer"
    className="media-card"
  >
    <div className="media-card-num">01</div>
    <p className="media-card-title">DOI – Official Publication Record</p>
    <div className="media-card-cta">View Source →</div>
  </a>

  <a
    href="https://www.granthaalayahpublication.org/Arts-Journal/ShodhKosh/article/view/4800"
    target="_blank"
    rel="noopener noreferrer"
    className="media-card"
  >
    <div className="media-card-num">02</div>
    <p className="media-card-title">ShodhKosh Journal Page</p>
    <div className="media-card-cta">View Journal →</div>
  </a>

  <a
    href="https://www.researchgate.net/publication/390607175_A_STUDY_ON_CONVERSION_OF_RAW_COW_MANURE_INTO_NUTRITIOUS_ORGANIC_FERTILIZER_FOR_QUALITY_ENHANCEMENT"
    target="_blank"
    rel="noopener noreferrer"
    className="media-card"
  >
    <div className="media-card-num">03</div>
    <p className="media-card-title">ResearchGate Publication</p>
    <div className="media-card-cta">View Paper →</div>
  </a>

  <a
    href="https://www.semanticscholar.org/paper/A-STUDY-ON-CONVERSION-OF-RAW-COW-MANURE-INTO-FOR-Padwal-Kulkarni/caedb1e5f39e22f35dbaae7b95f8144540b91a44"
    target="_blank"
    rel="noopener noreferrer"
    className="media-card"
  >
    <div className="media-card-num">04</div>
    <p className="media-card-title">Semantic Scholar Index</p>
    <div className="media-card-cta">View Record →</div>
  </a>

  <a
    href="https://www.academia.edu/128714053/A_STUDY_ON_CONVERSION_OF_RAW_COW_MANURE_INTO_NUTRITIOUS_ORGANIC_FERTILIZER_FOR_QUALITY_ENHANCEMENT"
    target="_blank"
    rel="noopener noreferrer"
    className="media-card"
  >
    <div className="media-card-num">05</div>
    <p className="media-card-title">Academia.edu Publication</p>
    <div className="media-card-cta">View Article →</div>
  </a>

</div>
        </div>
      </div>

      {/* ── INTERNATIONAL ARTICLES ── */}
      <div style={{ background: '#fff' }}>
        <div className="pub-wrap pub-root-inner">
          <div className="pub-eyebrow">
            <div className="pub-eyebrow-dot" />
            <span className="pub-eyebrow-label">Global Contributions</span>
          </div>
          <h2 className="pub-section-title">International Articles</h2>

          <a
            href="https://wikifarmer.com/library/en/author/rahul"
            target="_blank"
            rel="noopener noreferrer"
            className="author-badge"
          >
            <div className="author-badge-dot" />
            <span>Verified Global Author on <strong>Wikifarmer</strong> — View Author Profile</span>
            <ArrowRight />
          </a>

          <div>
            {articles.map((a) => (
              <div key={a.n} className="art-card">
                <div>
                  <div className="art-card-source">
                    <span className="art-card-num">{a.n}</span>
                    Wikifarmer International
                  </div>
                  <a href={a.link} target="_blank" rel="noopener noreferrer" className="art-card-title">
                    {a.title}
                  </a>
                  <p className="art-card-desc">{a.desc}</p>
                </div>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="art-cta">
                  Read Article <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MEDIA FEATURES ── */}
      <div style={{ background: '#F4F1EB' }}>
        <div className="pub-wrap pub-root-inner">
          <div className="pub-eyebrow">
            <div className="pub-eyebrow-dot" />
            <span className="pub-eyebrow-label">Media & Publications</span>
          </div>
          <h2 className="pub-section-title">Media Features</h2>

          <div className="media-grid">
            {mediaItems.map((m) => (
              <a key={m.n} href={m.link} target="_blank" rel="noopener noreferrer" className="media-card">
                <div className="media-card-num">{m.n}</div>
                <p className="media-card-title">{m.title}</p>
                <div className="media-card-cta">
                  View Feature <ArrowRight />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}