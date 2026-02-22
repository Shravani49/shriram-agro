import Link from "next/link";

async function getCategories() {
  const res = await fetch("https://cms.shriramagro.com/wp-json/wp/v2/categories", { cache: "no-store" });
  return res.json();
}

async function getPostsByCategory(categoryId) {
  const res = await fetch(
    `https://cms.shriramagro.com/wp-json/wp/v2/posts?_embed&categories=${categoryId}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function BlogsPage() {
  const categories = await getCategories();

    // ✅ ADD THIS BLOCK HERE
  const manualMeta = {
  "challenges-in-manufacturing-organic-fertilizers": {
    date: "1 August 2024",
    views: "761"
  },
  "the-concept-of-hidden-hunger-in-agriculture": {
    date: "15 June 2024",
    views: "821"
  },
  "soil-organic-carbon-crucial-role-in-sustainable-agriculture": {
    date: "29 April 2024",
    views: "687"
  },
  "electric-conductivity-of-soil-plant-growth": {
    date: "5 April 2024",
    views: "781"
  },
  "conversion-of-food-waste-to-nutritious-organic-fertilizer": {
    date: "13 March 2024",
    views: "584"
  },
  "crop-rotation-significance-in-sustainable-agriculture": {
    date: "10 March 2024",
    views: "653"
  },
  "biopesticides-effective-eco-friendly-pest-control": {
    date: "22 February 2024",
    views: "837"
  },
  "sustainable-agriculture-practices-importance-components": {
    date: "3 February 2024",
    views: "671"
  },
  "why-to-avoid-raw-cow-dung-and-prefer-proper-decomposed-cow-manure": {
    date: "30 January 2024",
    views: "663"
  },
  "the-role-of-mycorrhizal-fungi-in-soil-health": {
    date: "27 January 2024",
    views: "784"
  },
  "soil-carbon-sequestration-organic-fertilizers": {
    date: "22 January 2024",
    views: "579"
  },
  "fermented-liquid-organic-manure-dripable": {
    date: "19 January 2024",
    views: "748"
  }
};


  // 👇 ADD THIS BLOCK HERE
  const preferredOrder = [
    "Organic Fertilizers",
    "Soil Health",
    "Sustainable Agriculture Practices",
    "Environmental Safety"
  ];

  const sortedCategories = categories
    .filter((cat) => cat.count > 0)
    .sort((a, b) => {
      const indexA = preferredOrder.indexOf(a.name);
      const indexB = preferredOrder.indexOf(b.name);
      return (indexA === -1 ? 999 : indexA) - 
             (indexB === -1 ? 999 : indexB);
    });


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,400;1,9..144,700&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --cream: #f5f0e8;
          --cream-dark: #ede6d6;
          --ink: #1a1208;
          --ink-mid: #3d3420;
          --ink-light: #7a6e58;
          --green: #2d5a1b;
          --green-mid: #3e7a27;
          --green-light: #5da832;
          --green-pale: #dff0d2;
          --gold: #c8952a;
          --gold-pale: #fdf3e0;
          --white: #ffffff;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pg {
          font-family: 'Jost', sans-serif;
          background: var(--cream);
          min-height: 100vh;
          color: var(--ink);
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           HERO — full-bleed cinematic
        ───────────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 110px;
          overflow: hidden;
          background: var(--ink);
        }

        /* Animated botanical SVG background */
        .hero-canvas {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-bg-grad {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 75% 25%, rgba(93,168,50,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 5% 70%, rgba(45,90,27,0.35) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 50% 100%, rgba(200,149,42,0.12) 0%, transparent 50%),
            linear-gradient(175deg, #0d1a07 0%, #111a08 40%, #1a2b0e 100%);
        }

        .hero-lines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 79px,
            rgba(255,255,255,0.025) 80px
          );
        }

        /* Big decorative leaf */
        .hero-leaf-deco {
          position: absolute;
          right: -70px;
          top: -50px;
          width: 700px;
          height: 700px;
          opacity: 0.06;
          animation: slowSpin 60s linear infinite;
        }

        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-leaf-deco2 {
          position: absolute;
          left: -120px;
          bottom: -80px;
          width: 500px;
          height: 500px;
          opacity: 0.05;
          animation: slowSpin 80s linear infinite reverse;
        }

        /* Grain overlay */
        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding: 0 8vw 10vh;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-pre {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 2.5rem;
          animation: fadeUp 1s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-pre-line {
          width: 48px;
          height: 1px;
          background: var(--green-light);
        }

        .hero-pre-text {
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--green-light);
        }

        .hero-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(4rem, 7vw, 7rem);
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -0.03em;
          color: var(--cream);
          margin-bottom: 1.5rem;
          animation: fadeUp 1s 0.15s ease both;
        }

        .hero-title-em {
          font-style: italic;
          font-weight: 300;
          color: var(--green-light);
          display: block;
        }

        .hero-title-gold {
          color: var(--gold);
        }

        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 3rem;
          padding-bottom: 2rem;
          animation: fadeUp 1s 0.3s ease both;
        }

        .hero-desc {
          font-size: 1.3rem;
          font-weight: 300;
          line-height: 1.3;
          color: rgba(245,240,232,0.85);
          max-width: 800px;
        }

        .hero-stats-row {
          display: flex;
          gap: 3rem;
          flex-shrink: 0;
        }

        .hero-stat {
          text-align: right;
          border-right: 1px solid rgba(255,255,255,0.5);
          padding-right: 3rem;
        }

        .hero-stat:last-child {
          border-right: none;
          padding-right: 0;
        }

        .hero-stat-n {
          font-family: 'Fraunces', serif;
          font-size: 2.9rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          display: block;
        }

        .hero-stat-l {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.75);
          display: block;
          margin-top: 5px;
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 10vh;
          right: 8vw;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          animation: fadeUp 1s 0.5s ease both;
        }

        .hero-scroll-label {
          writing-mode: vertical-rl;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.8);
        }

        .hero-scroll-track {
          width: 1px;
          height: 60px;
          background: rgba(245,240,232,0.1);
          position: relative;
          overflow: hidden;
        }

        .hero-scroll-track::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--green-light);
          animation: scrollTrack 2s ease-in-out infinite;
        }

        @keyframes scrollTrack {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* ─────────────────────────────────────────
           TICKER STRIP
        ───────────────────────────────────────── */
        .ticker {
          background: var(--green);
          overflow: hidden;
          white-space: nowrap;
          padding: 14px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .ticker-inner {
          display: inline-flex;
          gap: 0;
          animation: ticker 30s linear infinite;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 0 40px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(223,240,210,0.9);
        }

        .ticker-dot {
          width: 4px;
          height: 4px;
          background: var(--white);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ─────────────────────────────────────────
           MAIN CONTENT
        ───────────────────────────────────────── */
        .main {
          max-width: 1440px;
          margin: 0 auto;
          padding: 90px 6vw 120px;
        }

        /* ─────────────────────────────────────────
           CATEGORY HEADER
        ───────────────────────────────────────── */
        .cat-block {
          margin-bottom: 100px;
        }

        .cat-head {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
          margin-bottom: 48px;
        }

        .cat-index {
          font-family: 'Fraunces', serif;
          font-size: 4.5rem;
          font-weight: 700;
          color: #6E5034;
          line-height: 1;
          letter-spacing: -0.04em;
          min-width: 70px;
          text-align: right;
          position: relative;
          top: 4px;
        }

        .cat-head-center {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-left: 2px solid var(--green-light);
          padding-left: 20px;
        }

        .cat-label {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--green-light);
        }

        .cat-name {
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .cat-count-pill {
          background: var(--green-pale);
          color: var(--green);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 100px;
          border: 1px solid rgba(45,90,27,0.15);
        }

        /* ─────────────────────────────────────────
           MASONRY-LIKE FEATURED LAYOUT
        ───────────────────────────────────────── */
       .feat-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 40px;
        }

       

        /* ─────────────────────────────────────────
           REMAINING GRID
        ───────────────────────────────────────── */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 16px;
        }

        /* ─────────────────────────────────────────
           CARD BASE
        ───────────────────────────────────────── */
        .card {
          display: block;
          text-decoration: none;
          color: inherit;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(26,18,8,0.07);
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 1px 3px rgba(26,18,8,0.04),
            0 4px 16px rgba(26,18,8,0.04);
        }

        .card:hover {
          transform: translateY(-8px) scale(1.008);
          box-shadow:
            0 4px 8px rgba(26,18,8,0.04),
            0 20px 60px rgba(26,18,8,0.12),
            0 0 0 1px rgba(45,90,27,0.12);
        }

        /* ── CINEMATIC CARD (featured / full img) ── */
        .card-cine {
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .card-cine img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s;
          filter: saturate(0.85) brightness(0.9);
        }

        .card:hover .card-cine img {
          transform: scale(1.06);
          filter: saturate(1.05) brightness(0.75);
        }

        .card-cine-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,16,5,0.95) 0%,
            rgba(10,16,5,0.5) 40%,
            rgba(10,16,5,0.1) 70%,
            transparent 100%
          );
        }

        .card-cine-body {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 36px 36px 40px;
        }

        .card-no-img-cine {
          height: 100%;
          min-height: 200px;
          background: linear-gradient(135deg, var(--green) 0%, #1a3d0a 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 36px;
        }

        .card-no-img-cine::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
        }

        /* ── STANDARD CARD (img top + body below) ── */
        .card-std-img {
          height: 300px;
          overflow: hidden;
        }

        .card-std-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card:hover .card-std-img img { transform: scale(1.06); }

        .card-std-body {
          padding: 28px 30px 32px;
        }

        /* ── Card Chip (tag) ── */
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }

        .chip-dark {
          background: rgba(93,168,50,0.18);
          color: var(--green-light);
          border: 1px solid rgba(93,168,50,0.3);
        }

        .chip-light {
          background: var(--green-pale);
          color: var(--green);
          border: 1px solid rgba(45,90,27,0.15);
        }

        .chip-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 6px currentColor;
        }

        /* ── Card Title ── */
        .card-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          transition: color 0.3s;
          margin: 0 0 20px;
        }

        .card-title-lg {
          font-size: clamp(1.4rem, 2.2vw, 2.1rem);
          color: #fff;
        }

        .card-title-md {
          font-size: 1.25rem;
          color: var(--ink);
        }

        .card:hover .card-title-md { color: var(--green); }

        /* ── Card Read Link ── */
        .card-read {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: gap 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-read-dark { color: var(--green-light); }
        .card-read-light { color: var(--green-mid); }

        .card:hover .card-read { gap: 20px; }

        .card-read-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          flex-shrink: 0;
          transition: background 0.3s, color 0.3s;
          position: relative;
        }

        .card-read-dark .card-read-icon {
          background: rgba(93,168,50,0.15);
        }

        .card:hover .card-read-dark .card-read-icon {
          background: var(--green-light);
          color: #fff;
          border-color: var(--green-light);
        }

        .card:hover .card-read-light .card-read-icon {
          background: var(--green);
          color: #fff;
          border-color: var(--green);
        }

        /* ─────────────────────────────────────────
           CATEGORY DIVIDER
        ───────────────────────────────────────── */
        .cat-divider {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 0 100px;
          position: relative;
        }

        .cat-div-line {
          flex: 3;
          height: 2px;
          background: var(--cream-dark);
        }

        .cat-div-center {
          padding: 0 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cat-div-diamond {
          width: 8px; height: 8px;
          background: var(--green-light);
          transform: rotate(45deg);
        }

        .cat-div-text {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--green-light);
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 1100px) {
          .feat-layout {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 400px auto;
          }
          .feat-layout .card:first-child {
            grid-column: 1 / 3;
          }
        }

        @media (max-width: 800px) {
          .hero-title { font-size: clamp(3rem, 12vw, 5rem); }
          .hero-bottom { flex-direction: column; align-items: flex-start; }
          .hero-stats-row { flex-direction: row; gap: 2rem; }
          .hero-stat { text-align: left; }
          .feat-layout {
            grid-template-columns: 1fr;
            grid-template-rows: 380px auto auto;
          }
          .feat-layout .card:first-child { grid-column: 1; }
          .cat-head { grid-template-columns: auto 1fr; }
          .cat-count-pill { display: none; }
          .posts-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
          .hero-content { padding: 0 6vw 8vh; }
          .hero-title { font-size: clamp(2.8rem, 13vw, 4rem); }
          .hero-scroll { display: none; }
          .main { padding: 60px 5vw 80px; }
          .feat-layout { grid-template-rows: 320px auto auto; }
        }

        .card-meta-dark,
.card-meta-light {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 12px;
}

.card-meta-dark {
  color: rgba(255,255,255,0.85);
}

.card-meta-light {
  color: var(--ink-light);
}

.meta-dot {
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 50%;
}
      `}</style>

      <div className="pg">

        {/* ════════════════ HERO ════════════════ */}
        <section className="hero">
          <div className="hero-canvas">
            <div className="hero-bg-grad" />
            <div className="hero-lines" />
            <div className="hero-grain" />

            {/* Decorative leaf SVG */}
            <svg className="hero-leaf-deco" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 10 C100 10 20 50 20 120 C20 160 55 190 100 190 C145 190 180 160 180 120 C180 50 100 10 100 10Z" fill="white"/>
              <line x1="100" y1="10" x2="100" y2="190" stroke="black" strokeWidth="2"/>
              <path d="M100 40 Q140 70 160 110" stroke="black" strokeWidth="1.5" fill="none"/>
              <path d="M100 60 Q60 90 45 130" stroke="black" strokeWidth="1.5" fill="none"/>
              <path d="M100 80 Q135 100 148 135" stroke="black" strokeWidth="1" fill="none"/>
              <path d="M100 95 Q68 115 58 148" stroke="black" strokeWidth="1" fill="none"/>
            </svg>

            <svg className="hero-leaf-deco2" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 10 C100 10 20 50 20 120 C20 160 55 190 100 190 C145 190 180 160 180 120 C180 50 100 10 100 10Z" fill="white"/>
              <line x1="100" y1="10" x2="100" y2="190" stroke="black" strokeWidth="2"/>
            </svg>
          </div>

          <div className="hero-content">
            <div className="hero-pre">
              <div className="hero-pre-line" />
              <span className="hero-pre-text">Shriram Agro · Knowledge Hub</span>
            </div>

            <h1 className="hero-title">
              Fields of<br />
              <span className="hero-title-em">Wisdom</span>
              <span className="hero-title-gold">.</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-desc">
              Expert insights on sustainable agriculture, soil science, and organic inputs — authored by Adv. Rahul Padwal, a dedicated professional with extensive expertise in specialized organic fertilizers, waste-to-compost conversion, and quality-controlled input production. His work is driven by a deep commitment to soil health, environmental responsibility, and improving the livelihoods of farmers through sustainable practices.
              </p>

              <div className="hero-stats-row">
                <div className="hero-stat">
                  <span className="hero-stat-n">15+</span>
                  <span className="hero-stat-l">Articles</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-n">5+</span>
                  <span className="hero-stat-l">Topics</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-n">100%</span>
                  <span className="hero-stat-l">Verified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <span className="hero-scroll-label">Scroll</span>
            <div className="hero-scroll-track" />
          </div>
        </section>

        {/* ════════════════ TICKER ════════════════ */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {["Sustainable Farming", "Soil Health", "Organic Fertilizers", "Crop Protection", "Water Conservation", "Agro Innovation", "Sustainable Farming", "Soil Health", "Organic Fertilizers", "Crop Protection", "Water Conservation", "Agro Innovation"].map((t, i) => (
              <span className="ticker-item" key={i}>
                <span className="ticker-dot" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ════════════════ ARTICLES ════════════════ */}
        <main className="main">
        {sortedCategories.map(async (cat, idx) => {
            
              const posts = await getPostsByCategory(cat.id);
              if (!posts?.length) return null;

              const num = String(idx + 1).padStart(2, "0");
                    const isSoilHealth = cat.name === "Soil Health";
                    const isSustainable = cat.name === "Sustainable Agriculture Practices";
                    const isEnvironmental = cat.name === "Environmental Safety";
                    const isOrganic = cat.name === "Organic Fertilizers";
                    const isDoubleBig = isSustainable || isEnvironmental;

                    
                    const hasFeat =
  (posts.length >= 3 &&
   !isSoilHealth &&
   !isOrganic &&
   !isDoubleBig);



              return (
                <div key={cat.id}>
                  <section className="cat-block">

                    {/* ── Category Header ── */}
                    <div className="cat-head">
                      <span className="cat-index">{num}</span>
                      <div className="cat-head-center">
                        <span className="cat-label">Category</span>
                        <h2 className="cat-name">{cat.name}</h2>
                      </div>
                      <span className="cat-count-pill">
                        {posts.length} Article{posts.length !== 1 ? "s" : ""}
                      </span>
                    </div>

                    

                    {/* ── Magazine layout (3+ posts) ── */}
                    {hasFeat ? (
                      <>
                        <div className="feat-layout">
  {posts.slice(0, 2).map((p) => {
    const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return (
      <Link key={p.id} href={`/blogs/${p.slug}`} className="card">
        <div className="card-cine" style={{ height: "420px" }}>
          {img && <img src={img} alt="" />}
          <div className="card-cine-overlay" />
          <div className="card-cine-body">
            <div className="chip chip-dark">
              <span className="chip-dot" />
              Featured
            </div>
            <h3
              className="card-title card-title-lg"
              dangerouslySetInnerHTML={{ __html: p.title.rendered }}

            />
            {(() => {
                const meta = manualMeta[p.slug];
                return meta && (
                    <div className="card-meta-dark">
                    <span>{meta.date}</span>
                    <span className="meta-dot" />
                    <span>{meta.views} views</span>
                    </div>
                );
                })()}
          </div>
        </div>
      </Link>
    );
  })}
</div>

                        {/* Remaining grid */}
                        {!isSustainable && !isEnvironmental && posts.length > 2 && (
                          <div className="posts-grid">
                            {posts.slice(2).map((p) => {
                              const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                              return (
                                <Link key={p.id} href={`/blogs/${p.slug}`} className="card">
                                  {img ? (
                                    <>
                                      <div className="card-std-img"><img src={img} alt="" /></div>
                                      <div className="card-std-body">
                                        <div className="chip chip-light"><span className="chip-dot" />Article</div>
                                        <h3 className="card-title card-title-md" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />

                                        {(() => {
  const meta = manualMeta[p.slug];
  return meta && (
    <div className="card-meta-light">
      <span>{meta.date}</span>
      <span className="meta-dot" />
      <span>{meta.views} views</span>
    </div>
  );
})()}


                                        <div className="card-read card-read-light">
                                          Read Article
                                          <span className="card-read-icon">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                              <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                          </span>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <div style={{ padding: "32px", background: "linear-gradient(135deg,#f0f8e8,#e4f2d8)", minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                      <div className="chip chip-light"><span className="chip-dot" />Article</div>
                                      <h3 className="card-title card-title-md" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                                      {(() => {
  const meta = manualMeta[p.slug];
  return meta && (
    <div className="card-meta-light">
      <span>{meta.date}</span>
      <span className="meta-dot" />
      <span>{meta.views} views</span>
    </div>
  );
})()}
                                      <div className="card-read card-read-light">
                                        Read Article
                                        <span className="card-read-icon">
                                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      /* Simple grid for < 3 posts */
                      <div className="posts-grid">
                        {posts.map((p) => {
                            console.log(p.slug);
                          const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                          return (
                            <Link key={p.id} href={`/blogs/${p.slug}`} className="card">
                              {img ? (
                                <>
                                  <div className="card-std-img"><img src={img} alt="" /></div>
                                  <div className="card-std-body">
                                    <div className="chip chip-light"><span className="chip-dot" />Article</div>
                                    <h3 className="card-title card-title-md" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                                    {(() => {
 const meta = manualMeta[p.slug];
  return meta && (
    <div className="card-meta-light">
      <span>{meta.date}</span>
      <span className="meta-dot" />
      <span>{meta.views} views</span>
    </div>
  );
})()}
                                    <div className="card-read card-read-light">
                                      Read Article
                                      <span className="card-read-icon">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                          <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div style={{ padding: "32px", background: "linear-gradient(135deg,#f0f8e8,#e4f2d8)", minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                  <div className="chip chip-light"><span className="chip-dot" />Article</div>
                                  <h3 className="card-title card-title-md" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                                  <div className="card-read card-read-light">
                                    Read Article
                                    <span className="card-read-icon">
                                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </section>

                  {/* Divider */}
                  <div className="cat-divider">
                    <div className="cat-div-line" />
                    <div className="cat-div-center">
                      <div className="cat-div-diamond" />
                      <span className="cat-div-text">Next Section</span>
                      <div className="cat-div-diamond" />
                    </div>
                    <div className="cat-div-line" />
                  </div>
                </div>
              );
            })}
        </main>
      </div>
    </>
  );
}