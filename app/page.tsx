"use client";

import { useState, useEffect } from "react";
import {
  FaHeartPulse,
  FaCircleCheck,
  FaChevronDown,
  FaNetworkWired,
  FaChartPie,
  FaUserTie,
  FaStar,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";
import { motion, useScroll, useSpring } from "framer-motion";

// Komponen Card agar kode lebih rapi dan reusable
const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  delay,
  isHighlight = false,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      // FIX UTAMA: Menggunakan Spring Physics agar smooth
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      // HAPUS 'transition-all' dari className di bawah ini agar tidak bentrok
      className={`relative p-8 rounded-2xl border group overflow-hidden cursor-default
        ${
          isHighlight
            ? "bg-gradient-to-br from-avisena-900 to-slate-900 border-avisena-500/50 shadow-2xl shadow-avisena-900/20"
            : "bg-white/5 backdrop-blur-sm border-white/10 hover:border-avisena-500/50 hover:bg-white/10 transition-colors duration-300"
          // Perhatikan: transition-colors hanya untuk warna, gerakan diurus Framer Motion
        }`}
    >
      {isHighlight && (
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
          <FaStar className="text-avisena-400 text-4xl animate-pulse" />
        </div>
      )}

      {/* Icon Wrapper */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-xl transition-colors duration-300
        ${isHighlight ? "bg-white text-avisena-900" : "bg-avisena-900/50 text-avisena-400 group-hover:bg-avisena-500 group-hover:text-white"}
      `}
      >
        <Icon />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-avisena-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>

      {isHighlight && (
        <a
          href="#"
          className="inline-flex items-center text-avisena-400 text-sm font-semibold hover:text-white transition-colors duration-300 gap-2 mt-2"
        >
          Learn More <FaArrowRight />
        </a>
      )}
    </motion.div>
  );
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Thank you! We will keep you updated at ${email}.`);
    setEmail("");
  };

  return (
    <main className="relative bg-slate-50 overflow-x-hidden">
      {/* ADVANCED: Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-avisena-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar with simple fade in */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute w-full z-40 top-0 left-0 py-6"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaHeartPulse className="text-avisena-500 text-2xl animate-pulse" />
            <div className="text-2xl font-serif font-bold text-white tracking-wide">
              AVISENA <span className="text-avisena-500">HOSPITALS</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-300">
            {["Our Dream", "Network", "Investors", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-white transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-avisena-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Parallax Background Effect */}
        <div
          className="absolute inset-0 z-0"
          style={{
            // UPDATE DI SINI: Menggunakan Wisdom Navy (21, 44, 88) dan Knowledge Blue (31, 68, 136)
            // agar overlay gambarnya sesuai dengan palet baru.
            backgroundImage: `linear-gradient(rgba(21, 44, 88, 0.9), rgba(31, 68, 136, 0.85)), url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* ... (sisa kode tidak perlu diubah) ... */}

        <div className="text-center max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 border border-avisena-500 rounded-full bg-avisena-900/50 text-avisena-100 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.3)]"
          >
            Under Construction
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            A Vision for a Healthier <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avisena-500 to-avisena-400 drop-shadow-lg">
              West Java
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto"
          >
            Driven by a dream to elevate public health standards across the
            province. We are building a centralized digital gateway for Avisena
            Hospitals—serving the people of West Java with compassion and modern
            innovation.
          </motion.p>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md mx-auto bg-white/5 p-2 rounded-xl backdrop-blur-md border border-white/10 ring-1 ring-white/20 shadow-2xl"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                required
                className="w-full bg-transparent text-white placeholder-slate-400 px-4 py-3 outline-none rounded-lg focus:bg-white/5 transition"
              />
              <button
                type="submit"
                className="bg-avisena-500 hover:bg-avisena-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] whitespace-nowrap"
              >
                Join Our Journey
              </button>
            </form>
          </motion.div>

          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold gap-2"
            >
              <FaCircleCheck /> {message}
            </motion.div>
          )}
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 w-full left-0 flex justify-center z-10 pointer-events-none"
        >
          <a
            href="#about"
            className="text-white/50 hover:text-white transition flex flex-col items-center gap-2 pointer-events-auto animate-bounce"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase">
              Our Mission
            </span>
            <FaChevronDown className="text-xl" />
          </a>
        </motion.div>
      </section>

      {/* Mission & Regional Focus Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute -inset-4 bg-avisena-500/10 rounded-xl transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Doctor serving community"
                className="relative rounded-xl shadow-2xl object-cover h-[500px] w-full"
              />

              {/* Floating Card with Animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 right-6 md:-right-6 bg-white p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-l-4 border-avisena-500 max-w-xs hidden sm:block"
              >
                <p className="text-slate-600 italic text-sm mb-2">
                  "Our goal is not just to build hospitals, but to build a
                  healthier generation for West Java."
                </p>
                <span className="text-xs font-bold text-avisena-800 tracking-wider uppercase">
                  - Management
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-sm font-bold text-avisena-600 uppercase tracking-widest mb-2">
                Regional Commitment
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Empowering Communities Through Better Care
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Avisena Hospitals was founded on a strong conviction: that every
                citizen in West Java deserves access to quality, dignified, and
                modern healthcare.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are currently integrating our systems to provide a seamless
                experience across all our branches. This website will soon serve
                as the central hub for patient services, health literacy, and
                regional expansion updates.
              </p>

              <div className="border-t border-slate-200 pt-8">
                <div className="flex flex-col sm:flex-row gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default"
                  >
                    <h4 className="text-4xl font-serif font-bold text-avisena-600 mb-1">
                      High
                    </h4>
                    <p className="text-sm font-semibold text-slate-900">
                      Quality Standards
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default"
                  >
                    <h4 className="text-4xl font-serif font-bold text-avisena-600 mb-1">
                      Local
                    </h4>
                    <p className="text-sm font-semibold text-slate-900">
                      Community Focus
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Investment Info */}
      <section
        id="invest"
        className="py-32 bg-slate-950 text-white relative overflow-hidden"
      >
        {/* Background Pattern - Animated Blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] bg-avisena-900/20 rounded-full blur-[100px] absolute -top-[200px] -left-[200px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] bg-avisena-500/10 rounded-full blur-[120px] absolute bottom-0 right-0"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-6"
            >
              Strategic Growth & Investment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
              Be part of the healthcare transformation in Indonesia&apos;s most
              populous province.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <FeatureCard
              icon={FaNetworkWired}
              title="Branch Expansion"
              desc="Information regarding our existing and upcoming hospital branches across West Java cities and regencies."
              delay={0.1}
            />

            <FeatureCard
              icon={FaChartPie}
              title="Investment Opportunities"
              desc="We offer sustainable investment models focused on long-term value and social impact. Detailed prospectuses will be available here."
              delay={0.2}
              isHighlight={true}
            />

            <FeatureCard
              icon={FaUserTie}
              title="Governance"
              desc="Our commitment to professional corporate governance (GCG) ensures transparency and trust for all stakeholders."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black text-slate-500 py-12 border-t border-slate-900"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-serif font-bold text-white tracking-wide">
              AVISENA <span className="text-avisena-600">HOSPITALS</span>
            </span>
            <p className="text-sm mt-2 text-slate-400">
              Head Office: Bandung, West Java
            </p>
            <p className="text-xs mt-1 text-slate-600">
              &copy; {new Date().getFullYear()} PT Avisena Medika. All Rights
              Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="group relative text-slate-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl group-hover:scale-110 transform transition" />
            </a>

            <a
              href="#"
              className="group relative text-slate-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl group-hover:scale-110 transform transition" />
            </a>

            <a
              href="mailto:contact@avisenahospitals.com"
              className="group relative text-slate-400 hover:text-white transition duration-300"
              aria-label="Email Us"
            >
              <FaEnvelope className="text-2xl group-hover:scale-110 transform transition" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
