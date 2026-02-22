export const runtime = "nodejs";
export async function POST(req) {
  try {
    const { postId, name, email, content } = await req.json();

    const response = await fetch(
      `${process.env.WP_URL}/wp-json/wp/v2/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
            ).toString("base64"),
        },
        body: JSON.stringify({
          post: postId,
          author_name: name,
          author_email: email,
          content: content,
          status: "approve", // auto approve comment
        }),
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Comment failed" }),
      { status: 500 }
    );
  }
}