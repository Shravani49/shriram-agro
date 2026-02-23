"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function BlogCarousel({ posts, manualMeta }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const total = posts.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // On mobile: show 1 card. On larger screens, CSS handles it via the track offset.
  const post = posts[current];

  return (
    <>
      <style>{`
        /* ── Carousel wrapper ── */
        .carousel-root {
          position: relative;
          width: 100%;
        }

        /* Track clips overflow */
        .carousel-viewport {
          overflow: hidden;
          border-radius: 24px;
        }

        /* Sliding track */
        .carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        /* Each slide */
        .carousel-slide {
          flex: 0 0 100%;
          min-width: 0;
        }

        /* ── Nav arrows ── */
        .carousel-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          gap: 12px;
        }

        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 7px;
          flex: 1;
          justify-content: center;
        }

        .carousel-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c8c0b0;
          transition: background 0.3s, transform 0.3s;
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .carousel-dot.active {
          background: var(--green-light, #5da832);
          transform: scale(1.35);
        }

        .carousel-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid rgba(45,90,27,0.25);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, transform 0.2s;
          flex-shrink: 0;
          color: #2d5a1b;
        }

        .carousel-btn:hover {
          background: #2d5a1b;
          border-color: #2d5a1b;
          color: #fff;
          transform: scale(1.08);
        }

        .carousel-btn:active {
          transform: scale(0.95);
        }

        .carousel-counter {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 0.85rem;
          color: #7a6e58;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        /* ── Desktop: show multiple cards ── */
        @media (min-width: 800px) {
          .carousel-slide {
            flex: 0 0 50%;
          }
          .carousel-viewport {
            border-radius: 0;
          }
        }

        @media (min-width: 1100px) {
          .carousel-slide {
            flex: 0 0 33.333%;
          }
        }

        /* ── Card styles (same as original) ── */
        .c-card {
          display: block;
          text-decoration: none;
          color: inherit;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(26,18,8,0.07);
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 1px 3px rgba(26,18,8,0.04), 0 4px 16px rgba(26,18,8,0.04);
          margin: 0 8px;
          height: 100%;
        }

        .c-card:hover {
          transform: translateY(-6px) scale(1.006);
          box-shadow: 0 4px 8px rgba(26,18,8,0.04), 0 20px 60px rgba(26,18,8,0.12), 0 0 0 1px rgba(45,90,27,0.12);
        }

        /* Cinematic card */
        .c-cine {
          position: relative;
          overflow: hidden;
          height: 420px;
        }

        @media (max-width: 560px) {
          .c-cine { height: 260px; }
        }

        .c-cine img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.6s;
          filter: saturate(0.85) brightness(0.9);
        }

        .c-card:hover .c-cine img {
          transform: scale(1.06);
          filter: saturate(1.05) brightness(0.75);
        }

        .c-cine-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,16,5,0.95) 0%, rgba(10,16,5,0.5) 40%, rgba(10,16,5,0.1) 70%, transparent 100%);
        }

        .c-cine-body {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px 28px 32px;
        }

        @media (max-width: 560px) {
          .c-cine-body { padding: 18px 18px 22px; }
        }

        /* Standard card */
        .c-std-img {
          height: 220px;
          overflow: hidden;
        }

        @media (max-width: 560px) {
          .c-std-img { height: 180px; }
        }

        .c-std-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .c-card:hover .c-std-img img { transform: scale(1.06); }

        .c-std-body {
          padding: 22px 24px 26px;
        }

        @media (max-width: 560px) {
          .c-std-body { padding: 16px 18px 20px; }
        }

        /* Chip */
        .c-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 14px;
        }

        .c-chip-dark {
          background: rgba(93,168,50,0.18);
          color: #5da832;
          border: 1px solid rgba(93,168,50,0.3);
        }

        .c-chip-light {
          background: #dff0d2;
          color: #2d5a1b;
          border: 1px solid rgba(45,90,27,0.15);
        }

        .c-chip-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 6px currentColor;
        }

        /* Title */
        .c-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          transition: color 0.3s;
          margin: 0 0 16px;
        }

        .c-title-lg {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          color: #fff;
        }

        .c-title-md {
          font-size: 1.15rem;
          color: #1a1208;
        }

        .c-card:hover .c-title-md { color: #2d5a1b; }

        /* Meta */
        .c-meta-dark, .c-meta-light {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .c-meta-dark { color: rgba(255,255,255,0.85); }
        .c-meta-light { color: #7a6e58; }

        .c-meta-dot {
          width: 3px; height: 3px;
          background: currentColor;
          border-radius: 50%;
        }

        /* Read link */
        .c-read {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: gap 0.4s cubic-bezier(0.16,1,0.3,1);
          color: #3e7a27;
          margin-top: 14px;
        }

        .c-card:hover .c-read { gap: 18px; }

        .c-read-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          flex-shrink: 0;
          transition: background 0.3s, color 0.3s;
        }

        .c-card:hover .c-read-icon {
          background: #2d5a1b;
          color: #fff;
          border-color: #2d5a1b;
        }

        /* No-img fallback */
        .c-no-img {
          padding: 28px;
          background: linear-gradient(135deg,#f0f8e8,#e4f2d8);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>

      <div className="carousel-root">
        {/* Viewport */}
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${current * (typeof window !== 'undefined' && window.innerWidth >= 1100 ? 33.333 : window.innerWidth >= 800 ? 50 : 100)}%)` }}
          >
            {posts.map((p, i) => {
              const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              const meta = manualMeta[p.slug];
              const isFirst = i === 0;

              return (
                <div className="carousel-slide" key={p.id}>
                  <Link href={`/blogs/${p.slug}`} className="c-card">
                    {isFirst && img ? (
                      /* First card: cinematic style */
                      <div className="c-cine">
                        <img src={img} alt="" />
                        <div className="c-cine-overlay" />
                        <div className="c-cine-body">
                          <div className="c-chip c-chip-dark">
                            <span className="c-chip-dot" />
                            Featured
                          </div>
                          <h3
                            className="c-title c-title-lg"
                            dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                          />
                          {meta && (
                            <div className="c-meta-dark">
                              <span>{meta.date}</span>
                              <span className="c-meta-dot" />
                              <span>{meta.views} views</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : img ? (
                      /* Standard card with image */
                      <>
                        <div className="c-std-img"><img src={img} alt="" /></div>
                        <div className="c-std-body">
                          <div className="c-chip c-chip-light">
                            <span className="c-chip-dot" />Article
                          </div>
                          <h3
                            className="c-title c-title-md"
                            dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                          />
                          {meta && (
                            <div className="c-meta-light">
                              <span>{meta.date}</span>
                              <span className="c-meta-dot" />
                              <span>{meta.views} views</span>
                            </div>
                          )}
                          <div className="c-read">
                            Read Article
                            <span className="c-read-icon">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* No image fallback */
                      <div className="c-no-img">
                        <div className="c-chip c-chip-light">
                          <span className="c-chip-dot" />Article
                        </div>
                        <h3
                          className="c-title c-title-md"
                          dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                        />
                        {meta && (
                          <div className="c-meta-light">
                            <span>{meta.date}</span>
                            <span className="c-meta-dot" />
                            <span>{meta.views} views</span>
                          </div>
                        )}
                        <div className="c-read">
                          Read Article
                          <span className="c-read-icon">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nav: arrows + dots + counter */}
        <div className="carousel-nav">
          {/* Prev */}
          <button className="carousel-btn" onClick={prev} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {posts.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="carousel-counter">{String(current + 1).padStart(2,"0")} / {String(total).padStart(2,"0")}</span>

          {/* Next */}
          <button className="carousel-btn" onClick={next} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}