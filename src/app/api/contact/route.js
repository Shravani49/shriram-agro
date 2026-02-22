export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
const { name, email, contactNumber, organization, address, subject, message } = body;

// 🔒 Basic Sanitization
const safeName = name?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const safeEmail = email?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const safeContactNumber = contactNumber?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const safeOrganization = organization?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const safeAddress = address?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const safeSubject = subject?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const safeMessage = message?.replace(/</g, "&lt;").replace(/>/g, "&gt;");


    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
await transporter.sendMail({
  from: `"Shriram Agro Website" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,

  // 🔹 Better Subject Line
 subject: `📩 New Inquiry: ${safeSubject || "General Inquiry"} | Shriram Agro`,


  // 🔹 So reply goes directly to customer
  replyTo: email,

  // 🔹 Professional HTML Email Layout
  html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      
      <h2 style="color:#1F3D2B;">📩 New Inquiry Received</h2>

      <hr style="border:1px solid #e5e5e5; margin:20px 0;" />

      <p><strong>📧 Email:</strong> ${safeEmail}</p>
      <p><strong>📞 Contact Number:</strong> ${safeContactNumber || "Not Provided"}</p>
      <p><strong>📍 Address:</strong> ${safeAddress || "Not Provided"}</p>
      <p><strong>🏢 Organization:</strong> ${safeOrganization || "Not Provided"}</p>
      <p><strong>📌 Subject:</strong> ${safeSubject || "Not Selected"}</p>

      <hr style="border:1px solid #e5e5e5; margin:20px 0;" />

      <h3 style="color:#7d5835;">📝 Message</h3>

      <div style="
        background:#F1F3E0;
        padding:15px;
        border-radius:8px;
        margin-top:10px;
      ">
        ${safeMessage}
      </div>

      <br/>

      <p style="font-size:12px; color:#888;">
        This message was submitted through the Shriram Agro Industries website contact form.
      </p>

    </div>
  `,
});

await transporter.sendMail({
  from: `"Shriram Agro Industries" <${process.env.EMAIL_USER}>`,
  to: email,   // 🔹 send to customer

  subject: "Thank you for contacting Shriram Agro Industries",

  html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      
      <h2 style="color:#1F3D2B;">Thank You for Your Inquiry 🌱</h2>

      <p>Dear ${safeName},</p>

      <p>
        Thank you for reaching out to <strong>Shriram Agro Industries</strong>.
        We have received your inquiry regarding:
      </p>

      <p style="background:#F1F3E0; padding:10px; border-radius:6px;">
        <strong>${safeSubject || "General Inquiry"}</strong>
      </p>

      <p>
        Our team will review your message and get back to you within 
        <strong>24 business hours</strong>.
      </p>

      <br/>

      <p>Warm regards,</p>
      <p><strong>Shriram Agro Industries Team</strong></p>
      <p>Maharashtra, India</p>

      <hr style="margin-top:20px; border:1px solid #eee;" />

      <p style="font-size:12px; color:#888;">
        This is an automated confirmation email. Please do not reply directly to this message.
      </p>

    </div>
  `,
});



    return Response.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
