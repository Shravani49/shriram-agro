
"use client";

import { useState } from "react";

export default function ContactPage() {

  const contactDetails = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "rahulppadwal@gmail.com",
      href: "mailto:rahulppadwal@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),

      label: "Phone",
      value: "+91 9921881000",
      href: "tel:+919921881000",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Manchar, Maharashtra, India",
      href: null,
    },
  ];

  const subjects = [
    "Waste Management Inquiry",
    "Organic Fertilizer Products",
    "Turnkey Project",
    "Consultancy Services",
    "Research Collaboration",
    "Other",
  ];

    // ---------------- STATE ----------------
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  organization: "",
  contactNumber: "",
  address: "",
  subject: "",
  message: "",
});

  const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  // ---------------- HANDLE INPUT CHANGE ----------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- HANDLE FORM SUBMIT ----------------
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {

      setSuccessMessage("Message sent successfully! Thank you for contacting us.");

      setFormData({
        name: "",
        email: "",
        organization: "",
        contactNumber: "",
        address: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

    } else {
      setErrorMessage("Something went wrong. Please try again.");
    }

  } catch (error) {
    setErrorMessage("Server error. Please try again.");
  }

  setLoading(false);
};

  return (
    <div style={{ fontFamily: "Georgia, serif" }} className="min-h-screen bg-white">

        {/* ─────────── GLOBAL STYLES ─────────── */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.65s ease-out 0.05s both; }
        .fade-up-2 { animation: fadeUp 0.65s ease-out 0.18s both; }
        .fade-up-3 { animation: fadeUp 0.65s ease-out 0.30s both; }

        .field-base {
          width: 100%;
          background: #fff;
          border: 1.5px solid #d4c9a8;
          border-radius: 12px;
          padding: 12px 15px;
          font-size: 15px;
          color: #2E2E2E;
          font-family: Georgia, serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field-base::placeholder { color: #b0a080; }
        .field-base:focus {
          border-color: #1F3D2B;
          box-shadow: 0 0 0 3px rgba(31,61,43,0.09);
        }
        textarea.field-base { resize: none; }

        /* custom select arrow */
        select.field-base {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231F3D2B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 38px;
        }
      `}</style>

      {/* ─────────── HERO BAND ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#613c24] via-[#745838] to-[#50340e]">

        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-28 text-center fade-up-1">

          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9B6] inline-block" />
            <span className="text-[#E5D9B6] text-lg font-semibold tracking-[0.22em] uppercase">
              Shriram Agro Industries
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get in Touch
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re exploring a partnership, seeking consultancy, or curious about
            our solutions — we&apos;d love to hear from you.
          </p>
        </div>

        {/* wave cutout into page bg */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <path d="M0,0 C300,65 700,65 1200,10 L1200,80 L0,80 Z" fill="#F1F3E0" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">

          {/* ── LEFT: contact info ── */}
          <aside className="lg:col-span-2 space-y-10 fu2">

            {/* intro */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F3D2B] mb-3">
                Let&apos;s build something sustainable together
              </h2>
              <p className="text-[#5a4a34] text-[18px] leading-relaxed">
                Our team responds within 24–48 hours. For urgent project
                inquiries, please call us directly.
              </p>
            </div>

            {/* divider */}
            <div className="h-px bg-[#e8e4d6]" />

            {/* contact details */}
            <div className="space-y-6">
              {contactDetails.map((item) => {
                const inner = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#F1F3E0] rounded-xl flex items-center justify-center text-[#1F3D2B] shrink-0 mt-0.5 group-hover:bg-[#1F3D2B] group-hover:text-white transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#7d5835] text-[14px] font-bold tracking-[0.22em] uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-[#1F3D2B] text-[18px] font-semibold group-hover:text-[#7d5835] transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href
                  ? <a key={item.label} href={item.href}>{inner}</a>
                  : <div key={item.label}>{inner}</div>;
              })}
            </div>

            {/* divider */}
            <div className="h-px bg-[#e8e4d6]" />

            {/* AICAD */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1F3D2B] rounded-xl flex items-center justify-center text-white text-[9px] font-extrabold leading-tight text-center shrink-0 mt-0.5">
                AI<br />CAD
              </div>
              <div>
                <p className="text-[#7d5835] text-[14px] font-bold tracking-[0.22em] uppercase mb-1">
                  International Research
                </p>
                <p className="text-[#1F3D2B] text-[18px] font-semibold">
                  Adjunct Research Scientist
                </p>
                <p className="text-[#5a4a34] text-sm mt-0.5">AICAD Nairobi</p>
              </div>
            </div>



          </aside>

          {/* ── RIGHT: form ── */}
          <div className="lg:col-span-3 fu3">
            <div className="bg-[#F1F3E0] rounded-2xl p-8 md:p-10 border border-[#e0daca]">

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[#1F3D2B] mb-1">
                  Send us a message
                </h3>
                <p className="text-[#7d5835] text-m">
                  Fill in the details below and we&apos;ll be in touch shortly.
                </p>
              </div>

              {/* Success Message */}
{successMessage && (
  <div className="mb-6 p-4 rounded-xl bg-green-100 border border-green-300 text-green-800 font-semibold text-center">
    {successMessage}
  </div>
)}

{/* Error Message */}
{errorMessage && (
  <div className="mb-6 p-4 rounded-xl bg-red-100 border border-red-300 text-red-700 font-semibold text-center">
    {errorMessage}
  </div>
)}




              <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="grid sm:grid-cols-2 gap-4">
  <div>
    <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
      Full Name
    </label>
    <input
      type="text"
      name="name"
      placeholder="Rahul Sharma"
      className="field-base"
      value={formData.name}
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      className="field-base"
      value={formData.email}
      onChange={handleChange}
    />
  </div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
  <div>
    <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
      Contact Number
    </label>
    <input
      type="tel"
      name="contactNumber"
      placeholder="+91 9876543210"
      className="field-base"
      value={formData.contactNumber}
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
      Organization
    </label>
    <input
      type="text"
      name="organization"
      placeholder="Your company / body"
      className="field-base"
      value={formData.organization}
      onChange={handleChange}
    />
  </div>
</div>

<div>
  <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
    Address
  </label>
  <textarea
    name="address"
    rows={2}
    placeholder="Your full address"
    className="field-base"
    value={formData.address}
    onChange={handleChange}
  />
</div>

<div>
  <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
    Subject
  </label>
  <select
    name="subject"
    className="field-base"
    value={formData.subject}
    onChange={handleChange}
  >
    <option value="" disabled>Select a topic</option>
    {subjects.map((s) => (
      <option key={s} value={s}>{s}</option>
    ))}
  </select>
</div>

               
                 
                 
               

                <div>
                  <label className="block text-[#1F3D2B] text-[14px] font-black tracking-[0.18em] uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, or questions…"
                    className="field-base"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-[#7d5835]/70 text-m leading-relaxed max-w-[220px]">
                    Your information is kept confidential and never shared.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-9 py-4 bg-[#1F3D2B] text-white rounded-full font-semibold text-[15px] hover:bg-[#7d5835] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

              </form>
            </div>

            <p className="text-center text-[#7d5835]/60 text-lg mt-5">
              Prefer direct contact?{" "}
              <a href="mailto:rahulppadwal@gmail.com"
                className="text-[#7d5835] underline underline-offset-2 hover:text-[#1F3D2B] transition-colors duration-200">
                Email us directly
              </a>
              {" "}or call{" "}
              <a href="tel:+919921881000"
                className="text-[#7d5835] underline underline-offset-2 hover:text-[#1F3D2B] transition-colors duration-200">
                +91 9921881000
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1F3D2B] py-5 px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Shriram Agro Industries · Maharashtra, India
          </p>

          <p className="text-[#a7c983] text-xs font-semibold tracking-wide">
            22+ Years of Sustainable Excellence
          </p>
        </div>
      </footer>

    </div>
  );
}