"use client";

import { useState, useEffect } from "react";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch existing comments (public GET is allowed)
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(
          `https://shriramagro.com/wp-json/wp/v2/comments?post=${postId}&status=approve`
        );

        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    if (postId) {
      fetchComments();
    }
  }, [postId]);

  // 🔹 Submit comment (via our secure API route)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          name,
          email,
          content,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit comment");
      }

      alert("Comment submitted successfully!");

      setName("");
      setEmail("");
      setContent("");

      // 🔹 Refresh comments
      const refreshed = await fetch(
        `https://shriramagro.com/wp-json/wp/v2/comments?post=${postId}&status=approve`
      );

      const refreshedData = await refreshed.json();
      setComments(refreshedData);

    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit comment.");
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h3>Comments ({comments.length})</h3>

      {/* Existing Comments */}
      <div style={{ marginTop: "30px" }}>
        {comments.map((c) => (
          <div
            key={c.id}
            style={{
              padding: "20px",
              borderBottom: "1px solid #eee",
              marginBottom: "20px",
            }}
          >
            <strong>{c.author_name}</strong>

            <div
              dangerouslySetInnerHTML={{ __html: c.content.rendered }}
              style={{ marginTop: "10px" }}
            />

            <small>
              {new Date(c.date).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
        <h4>Leave a Comment</h4>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <textarea
          placeholder="Write your comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", minHeight: "120px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#2d5a1b",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}