import CommentSection from "@/components/CommentSection";

async function getPost(slug) {
  const res = await fetch(
    `https://cms.shriramagro.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data[0];
}

export default async function BlogPost(props) {
  const params = await props.params;
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f4ef]">
        <div className="text-center">
          <p className="text-6xl font-light text-[#2d5016] mb-4">404</p>
          <p className="text-xl text-[#5a6b42]">Post not found</p>
        </div>
      </div>
    );
  }

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.author?.[0];
  const dateFormatted = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const wordCount = post.content.rendered.replace(/<[^>]+>/g, "").split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&family=DM+Sans:wght@300;400;500&display=swap');

        .blog-article {
          font-family: 'Source Serif 4', Georgia, serif;
          font-weight: 330;
          color: #2c2c2c;
          font-size: 1.6rem;
          line-height: 1.9;
          letter-spacing: 0.01em;
        }

        .blog-article p {
          margin-bottom: 1.5rem;
          color: #333;
        }

        .blog-article h1,
        .blog-article h2,
        .blog-article h3,
        .blog-article h4 {
          font-family: 'Playfair Display', Georgia, serif;
          color: #1e3d0f;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .blog-article h2 { font-size: 2rem; }
        .blog-article h3 { font-size: 2rem; }

        .blog-article ul, .blog-article ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-article li {
          margin-bottom: 0.5rem;
        }

        .blog-article strong, .blog-article b {
          color: #1e3d0f;
          font-weight: 600;
        }

        .blog-article a {
          color: #4a7c2f;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .blog-article img {
          width: 100%;
          max-height: 420px;
          object-fit: cover;
          border-radius: 12px;
          margin: 2rem 0;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .blog-article blockquote {
          border-left: 3px solid #4a7c2f;
          padding: 0.75rem 1.5rem;
          margin: 2rem 0;
          background: #f0f5eb;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #3a5c20;
        }

        .hero-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .hero-image-wrapper img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .hero-image-wrapper:hover img {
          transform: scale(1.02);
        }

        .category-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4a7c2f;
          background: #e8f3e0;
          padding: 0.45rem 1rem;
          border-radius: 100px;
          display: inline-block;
        }

        .meta-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: #7a8a6a;
          font-weight: 400;
        }

        .divider-leaf {
          text-align: center;
          margin: 3rem 0;
          color: #4a7c2f;
          opacity: 0.4;
          font-size: 1.4rem;
          letter-spacing: 1.2rem;
        }

        .pull-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-style: italic;
          color: #2d5016;
          border-top: 2px solid #4a7c2f;
          border-bottom: 2px solid #4a7c2f;
          padding: 1.5rem 0;
          margin: 3rem 0;
          text-align: center;
          line-height: 1.5;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE — TABLET
        ───────────────────────────────────────── */
        @media (max-width: 768px) {
          .hero-image-wrapper img { height: 280px; }
          .blog-article { font-size: 1rem; }
        }

        /* ─────────────────────────────────────────
           RESPONSIVE — ANDROID / MOBILE
        ───────────────────────────────────────── */
        @media (max-width: 560px) {
          /* Hero image */
          .hero-image-wrapper {
            border-radius: 14px;
          }
          .hero-image-wrapper img {
            height: 220px;
          }

          /* Article body */
          .blog-article {
            font-size: 1rem;
            line-height: 1.8;
          }
          .blog-article h2 {
            font-size: 1.4rem;
            margin-top: 2rem;
          }
          .blog-article h3 {
            font-size: 1.25rem;
            margin-top: 1.8rem;
          }
          .blog-article img {
            max-height: 240px;
            border-radius: 10px;
            margin: 1.4rem 0;
          }
          .blog-article blockquote {
            padding: 0.6rem 1rem;
            margin: 1.4rem 0;
          }

          /* Category tag & meta */
          .category-tag {
            font-size: 0.78rem;
            padding: 0.35rem 0.8rem;
            letter-spacing: 0.08em;
          }
          .meta-text {
            font-size: 0.76rem;
          }

          /* Pull quote */
          .pull-quote {
            font-size: 1.15rem;
            padding: 1rem 0;
            margin: 2rem 0;
          }

          /* Divider */
          .divider-leaf {
            margin: 2rem 0;
            font-size: 1.1rem;
            letter-spacing: 0.8rem;
          }

          /* Tags/share strip */
          .tags-share-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#f6f4ef]">

        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#2d5016] via-[#4a7c2f] to-[#7ab648]" />

        <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 sm:px-10 lg:px-12 py-8 sm:py-12 pb-16 sm:pb-20">

          {/* Back link */}
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 mb-7 sm:mb-10 text-[#5a7a3a] hover:text-[#2d5016] transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 500 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 12L6 8l4-4" />
            </svg>
            All Articles
          </a>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <span className="category-tag">Organic Farming</span>
            <span className="meta-text">·</span>
            <span className="meta-text">{dateFormatted}</span>
            <span className="meta-text">·</span>
            <span className="meta-text">{readTime} min read</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 7vw, 4rem)",
              fontWeight: 700,
              color: "#1a3409",
              lineHeight: 1.25,
              marginBottom: "1.2rem",
              letterSpacing: "-0.01em",
            }}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Author row */}
          {author && (
            <div className="flex items-center gap-3 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-[#d8e0cc]">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #2d5016, #4a7c2f)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {author.name?.charAt(0) || "A"}
              </div>
              <div>
                <p className="meta-text" style={{ color: "#3a5020", fontWeight: 500, fontSize: "1.1rem" }}>
                  {author.name}
                </p>
                <p className="meta-text">Shri Ram Agro Industries</p>
              </div>
            </div>
          )}

          {/* Hero Image */}
          {image && (
            <div className="hero-image-wrapper mb-8 sm:mb-12">
              <img src={image} alt={post.title.rendered} />
            </div>
          )}

          {/* Article Body */}
          <article
            className="blog-article"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Decorative divider */}
          <div className="divider-leaf">✦ ✦ ✦</div>

          {/* Tags / share strip */}
          <div
            className="tags-share-strip flex flex-wrap items-center justify-between gap-4 py-5 sm:py-6 border-t border-b border-[#d8e0cc] mb-10 sm:mb-12"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <div className="flex flex-wrap gap-2">
              {["Organic Fertilizer", "Agriculture", "Sustainability"].map((tag) => (
                <span
                  key={tag}
                  className="category-tag"
                  style={{ background: "#fff", border: "1px solid #c5d9b0", color: "#4a7c2f" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="meta-text">Share this article</p>
          </div>

          {/* Comments */}
          <CommentSection postId={post.id} />
        </div>
      </div>
    </>
  );
}