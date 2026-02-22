import Link from "next/link";

export default function AboutPage() {
  return (
    <div id="about" className="bg-[#F1F3E0]">

      {/* Hero with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7baa67] via-[#27773a] to-[#09451f]">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-116 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-116 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-40 md:py-40">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="text-3xl tracking-[0.3em] text-[#E5D9B6] font-bold mb-6 uppercase">
                Shriram Agro Industries
              </div>
              <div className="w-20 h-1 bg-[#E5D9B6]"></div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
              Turning waste into<br />
              <span className="italic font-serif text-[#E5D9B6]">regenerative value</span>
            </h1>
          
            <p className="text-xl md:text-xl text-white/100 max-w-3xl font-light leading-relaxed">
              22 years of expertise in sustainable agriculture and organic waste management, 
              creating science-backed solutions for a healthier planet.
            </p>
            
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C300,80 600,80 900,20 L1200,40 L1200,120 L0,120 Z" fill="#F1F3E0"></path>
          </svg>
        </div>
      </section>


{/* Company Overview – Redesigned */}
{/* About The Company – Professional Layout */}
{/* About The Company – Image Background Version */}
<section className="relative py-28 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/compost-facility.png"  // <-- change to your actual image path
      alt="Industrial Composting Facility"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay for Readability */}
  

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6">

    {/* Section Label */}
    <div className="mb-14">
      <div className="flex items-center gap-4">
        <div className="w-12 h-[2px] bg-[#000000]"></div>
        <span className="text-4xl tracking-[0.25em] text-black font-extrabold">
          ABOUT THE COMPANY
        </span>
      </div>
    </div>

    {/* White Card */}
    <div className="bg-white border border-[#E5D9B6]/40 rounded-2xl px-20 py-12 shadow-2xl">

      <div className="space-y-8 text-xl leading-relaxed text-black-100 font-semibold">

        <p>
          <strong className="text-[#2a2a2a]">
            Shriram Agro Industries
          </strong>{" "}
          was established by <strong>Adv. Rahul Prataprao Padwal</strong> with a clear
          commitment to advancing sustainable agriculture and integrated waste
          management solutions. With over <strong>22 years of field expertise</strong>,
          the organization has consistently delivered science-driven environmental
          systems that transform organic waste into regenerative agricultural value.
        </p>

        <p>
          What began as a focused initiative to restore soil fertility and reduce
          chemical dependency has evolved into a comprehensive enterprise operating
          across municipal solid waste management, sewage sludge treatment,
          wastewater bioremediation, CBG-linked organic by-products, and high-quality
          organic fertilizer production.
        </p>

        <p>
          The company designs and implements eco-friendly waste transformation
          systems including windrow composting, aerobic and bio-digestion methods,
          decentralized zero-waste models, customized microbial decomposition
          technologies, and waste-to-organic input conversion processes tailored
          for agricultural applications.
        </p>

        <p>
          Headquartered in India, Shriram Agro Industries now extends its expertise
          to international consultancy and research collaborations, including its
          association with <strong>AICAD Nairobi</strong>, where Mr. Padwal serves
          as an Adjunct Research Scientist. Through project implementation,
          training, consultancy, and research-backed innovation, the company
          continues to strengthen its role as a trusted authority in environmental
          engineering and regenerative agriculture.
        </p>

      </div>

    </div>

  </div>

</section>





     {/* Mission & Vision Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className=" mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#F1F3E0] rounded-full mb-4">
              <span className="text-sm font-medium text-[#7d5835] tracking-wide">OUR FOUNDATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2a2a2a]">
              Mission & Vision
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mx-auto px-10">
            
            {/* Vision Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-[#7baa67] via-[#27773a] to-[#09451f] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#E5D9B6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-[#1F3D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-5 text-white">Our Vision</h3>
                
                {/* Content */}
                <p className="text-white/95 leading-relaxed text-lg">
                  To restore soil fertility, reduce chemical dependency, and build climate-resilient 
                  farming systems through sustainable waste utilization and ecological farming models.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-[#E5D9B6] to-[#d4c8a5] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#7d5835] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-5 text-[#2a2a2a]">Our Mission</h3>
                
                {/* Content */}
                <p className="text-gray-800 leading-relaxed text-lg">
                  To transform organic waste into high-quality compost and regenerative agricultural 
                  inputs while empowering farmers and municipalities through consultancy and training.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
{/* Stats with Image Background */}
<section className="relative py-24 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/background.png"
      alt="Sustainable Compost Facility"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Content */}
  <div className="relative max-w-[1400px] mx-auto px-12">
    <div className="grid md:grid-cols-3 gap-12 md:gap-16">
      
      <div className="text-center md:text-left group">
        <div className="text-6xl md:text-7xl font-light mb-4 bg-gradient-to-br from-white to-[#E5D9B6] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          22+
        </div>
        <div className="text-lg text-white/100">
          Years of hands-on expertise in sustainable agriculture
        </div>
      </div>

      <div className="text-center md:text-left group">
        <div className="text-6xl md:text-7xl font-light mb-4 bg-gradient-to-br from-white to-[#E5D9B6] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          100%
        </div>
        <div className="text-lg text-white/100">
          Organic, chemical-free solutions for soil health
        </div>
      </div>

      <div className="text-center md:text-left group">
        <div className="text-6xl md:text-7xl font-light mb-4 bg-gradient-to-br from-white to-[#E5D9B6] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          Global
        </div>
        <div className="text-lg text-white/100">
          Impact across India and international markets
        </div>
      </div>

    </div>
  </div>
</section>


{/* Team Section */}
<section className="py-20 bg-[#F1F3E0]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="mb-16 text-center">
      <div className="flex justify-center items-center gap-4 mb-6">
        <div className="w-12 h-[2px] bg-[#7d5835]"></div>
        <span className="text-2xl tracking-[0.25em] text-[#7d5835] font-semibold">
          LEADERSHIP & TEAM
        </span>
        <div className="w-12 h-[2px] bg-[#7d5835]"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-light font-serif text-[#2a2a2a]">
        Our Core Members
      </h2>
    </div>

    {/* Founder Highlight Card */}
    <div className="flex justify-center mb-20">
      <div className="bg-white rounded-3xl shadow-xl border border-[#E5D9B6]/40 p-10 max-w-7xl text-center">

        <img
          src="/images/rahul_Padwal.png"
          alt="Adv. Rahul Prataprao Padwal"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
        />

        <h3 className="text-3xl font-bold text-[#2a2a2a]">
          Adv. Rahul Prataprao Padwal
        </h3>

        <p className="text-[#7d5835] text-2xl font-medium mt-1">
          Founder & Proprietor
        </p>

        <p className="text-gray-600 text-xl mt-4 leading-relaxed">
          Sustainability advocate, researcher, and environmental engineering
          expert with over 22 years of experience in integrated waste
          management and regenerative agriculture systems.
        </p>

        {/* Founder Social Links */}
{/* Founder Social Links */}
{/* Founder LinkedIn Bottom Center */}
<div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
  <a
    href="https://www.linkedin.com/in/rahul-padwal-6b240339/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-5 h-5 fill-white"
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.54 53.54 0 1 1 53.54-53.54A53.54 53.54 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.8V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3V448z"/>
    </svg>
  </a>
</div>

      </div>
    </div>

    {/* Team Grid */}
    <div className="grid md:grid-cols-2 gap-10 items-stretch">

      {[
        {
          name: "Dr. Anita Handa Corrign - UK",
          role: "Climate Resilience Scientist, Technology Transfer and Gutn Microbiome- Soil Health expert ",
          qualification: "PhD (Environmental Science), MSc Toxicology",
          image: "/images/anita.png",
          linkedin: "https://www.linkedin.com/in/dr-anita-handa-corrigan-314403214/",
        },
        {
          name: "Vaibhav M Phalle",
          role: "Director - Planning & Operations",
          qualification: "MBA Production and Operations, B Tech Mechanical ",
          image: "/images/vaibhav.png",
          linkedin: "https://www.linkedin.com/in/vaibhav-m-phalle-2a20aa29/",
          
        },
        {
          name: "Shridatt G. Khandagale ",
          role: "Director Creative Head",
          qualification:"B Tech Computer",
          image: "/images/shridatt.png",
          linkedin: "#",
        
        },

                {
          name: "Shravani Padwal",
          role: "IT & Digital Solutions Engineer",
          qualification:"BTech IT",
          image: "/images/shravani.png",
          linkedin: "www.linkedin.com/in/shravani-padwal-2a1a0425b",
         
        },

                

        
      ].map((member, index) => (
        <div
          key={index}
className="bg-white rounded-3xl shadow-md border border-[#E5D9B6]/40 p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300"        >
          <div className="flex flex-col justify-between h-full">

  {/* Top Section */}
  <div className="flex gap-6">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 object-cover rounded-full"
    />

    <div>
      <h4 className="text-xl font-semibold text-[#2a2a2a]">
        {member.name}
      </h4>

      <p className="text-m text-[#7d5835] mt-1 mb-3">
        {member.role}
      </p>

      {member.qualification && (
        <p className="text-m text-[#2d5016] font-medium">
          {member.qualification}
        </p>
      )}
    </div>
  </div>

  {/* LinkedIn Bottom Center */}
  {member.linkedin && (
    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4 fill-white"
        >
          <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.54 53.54 0 1 1 53.54-53.54A53.54 53.54 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.8V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3V448z"/>
        </svg>
      </a>
    </div>
  )}

</div>

          
        </div>
      ))}

    </div>

  </div>
</section>



      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7d5835] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E5D9B6] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-4xl md:text-6xl font-light text-[#2a2a2a] mb-6 leading-tight">
            Ready to transform<br />
            <span className="italic font-serif text-[#7d5835]">your approach to agriculture?</span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Partner with us to create sustainable, regenerative solutions for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link
  href="/contact"
  className="px-10 py-4 bg-[#7d5835] text-white font-medium rounded-full  hover:bg-[#6a4a2d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block active:scale-95"
>
  Request Consultation
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
