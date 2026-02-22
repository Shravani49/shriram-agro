"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F1F3E0] pt-28 pb-24">
      <div className="mx-auto px-8 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[750px]">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left flex flex-col justify-center">

          <motion.h1
            className="text-[44px] md:text-[56px] leading-[1.1] font-bold text-[#1F3D2B] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Sustainable Waste <br /> Management Solutions
          </motion.h1>

          <motion.p
            className="text-[18px] md:text-[20px] text-[#2E2E2E] leading-relaxed mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            We specialize in converting food and organic waste into nutrient-rich
            compost and organic fertilizers through advanced composting and
            bio-processing systems — supporting regenerative agriculture and
            zero-waste ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          >
            <a
              href="/services"
              className="inline-block bg-[#F2C94C] text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#163021] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Services
            </a>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full lg:w-[60%]"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/hero.png"
            alt="Waste management composting facility"
            className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}
