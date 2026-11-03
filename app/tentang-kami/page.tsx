"use client";

import React from "react";
import Link from "next/link";
import {
  FaHouse,
  FaChevronRight,
  FaCircleCheck,
  FaBullseye,
  FaCompass,
} from "react-icons/fa6";
import { useAvisena } from "../components/AvisenaProvider";
import { AboutLeadershipSection } from "../components/sections/AboutLeadershipSection";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function TentangKamiPage() {
  const { lang } = useAvisena();

  const milestones = [
    {
      year: "Awal Perjalanan",
      title: {
        id: "Klinik Kamar Kosong di Rumah Pribadi dr. Lia",
        en: "Spare-Bedroom Home Clinic by dr. Lia",
      },
      desc: {
        id: "Berangkat dari empati terhadap pekerja perempuan rantau yang sakit jauh dari keluarga, dr. Lia Yuliana Elsis membuka kamar-kamar di rumah pribadinya di Melong, Cimahi untuk rawat inap gratis.",
        en: "Moved by the struggles of female migrant factory workers, dr. Lia Yuliana Elsis opened spare bedrooms in her private home in Cimahi for free inpatient care.",
      },
    },
    {
      year: "Tumbuh Bersama Warga",
      title: {
        id: "Lahirnya RSU Avisena Cimahi (Kantor Pusat)",
        en: "Birth of RSU Avisena Cimahi (Flagship Hospital)",
      },
      desc: {
        id: "Didukung kepercayaan tulus warga sekitar dan kader kesehatan perempuan lokal, klinik rumah tersebut berkembang menjadi RSU Avisena Cimahi dengan layanan spesialis lengkap.",
        en: "Backed by deep neighborhood trust and local women health cadres, the home clinic grew into RSU Avisena Cimahi.",
      },
    },
    {
      year: "Full-Circle KPBS",
      title: {
        id: "Pendirian RSU Avisena Pangalengan (KPBS Hospital)",
        en: "Founding of RSU Avisena Pangalengan (KPBS Hospital)",
      },
      desc: {
        id: "Kembali ke koperasi susu tempat dr. Lia dulu berjualan susu saat kuliah kedokteran, Avisena bersama KPBS membangun rumah sakit rujukan bagi peternak dan warga Bandung Selatan.",
        en: "Returning to the dairy cooperative where dr. Lia once sold milk to fund medical school, Avisena partnered with KPBS to build a hospital for South Bandung.",
      },
    },
    {
      year: "Ekspansi Jawa Barat",
      title: {
        id: "Jaringan 5 Rumah Sakit Avisena Healthcare Group",
        en: "5-Hospital Regional Network Across West Java",
      },
      desc: {
        id: "Hadir melayani masyarakat di Kuningan, Subang, dan Cikampek serta bertransformasi menuju tata kelola GCG modern bersama kemitraan berdampak SWEEF.",
        en: "Expanding across Kuningan, Subang, and Cikampek while advancing modern corporate governance and SWEEF social impact.",
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Editorial Warm Header Khusus Tentang Kami */}
      <section className="relative bg-gradient-to-br from-[#FFFFFF] via-[#E0E4E9]/40 to-[rgba(246,147,32,0.10)] pt-10 pb-14 lg:pt-14 lg:pb-16 border-b border-[#E0E4E9] overflow-hidden">
        <SimpulSupergraphic
          variant="outline-tosca"
          opacity={0.1}
          className="w-80 h-80 absolute -top-16 -right-16 rotate-12"
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-light text-[#10162C]/65 mb-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#00A79C] transition-colors"
            >
              <FaHouse className="text-[11px]" />
              <span>{lang === "id" ? "Beranda" : "Home"}</span>
            </Link>
            <FaChevronRight className="text-[9px] text-[#10162C]/40" />
            <span className="font-medium text-[#154C96]">
              {lang === "id"
                ? "Tentang Kami • Sejarah & Kepemimpinan"
                : "About Us • History & Leadership"}
            </span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium uppercase tracking-wider">
              {lang === "id"
                ? "Profil Korporat • Avisena Healthcare Group"
                : "Corporate Profile • Avisena Healthcare Group"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight">
              {lang === "id"
                ? "Semua Berawal dari Rumah: Mengabdi sebagai Tetangga Sehatmu"
                : "It All Started from Home: Serving as Your Healthy Neighbor"}
            </h1>
            <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed">
              {lang === "id"
                ? "Mengenal lebih dekat akar sejarah dr. Lia Yuliana Elsis, tonggak pertumbuhan 5 rumah sakit di Jawa Barat, visi-misi perusahaan, serta jajaran pimpinan yang menjaga amanah pelayanan Avisena."
                : "Discover the founding story of dr. Lia Yuliana Elsis, our West Java milestones, corporate vision-mission, and the leadership team behind Avisena."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visi & Misi Korporasi (Dirancang Khusus di Halaman Tentang Kami) */}
      <section className="py-16 bg-[#E0E4E9]/40 border-b border-[#E0E4E9]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-7">
          <div className="bg-white p-8 rounded-3xl border border-[#E0E4E9] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#154C96] text-white flex items-center justify-center text-xl">
              <FaBullseye />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#00A79C]">
              {lang === "id" ? "Visi Avisena" : "Our Vision"}
            </span>
            <h2 className="text-2xl font-semibold text-[#10162C]">
              {lang === "id"
                ? "Menjadi Jaringan Rumah Sakit Pilihan Utama Masyarakat Jawa Barat yang Melayani Sepenuh Hati"
                : "To Be West Java's Most Trusted & Compassionate Hospital Network"}
            </h2>
            <p className="text-sm font-normal text-[#10162C]/75 leading-relaxed">
              {lang === "id"
                ? "Menghadirkan layanan kesehatan bermutu tinggi yang mudah dijangkau, bermartabat, dan memperlakukan setiap pasien layaknya keluarga serta Tamu Mulia."
                : "Delivering accessible, high-quality healthcare that treats every patient with the warmth of family and the dignity of a Noble Guest."}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E0E4E9] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
              <FaCompass />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#F69320]">
              {lang === "id" ? "Misi Avisena" : "Our Mission"}
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#10162C]/80">
              <li className="flex items-start gap-2">
                <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                <span>
                  {lang === "id"
                    ? "Memberikan pelayanan medis terpadu yang aman, empatik, dan berorientasi pada keselamatan pasien."
                    : "Provide safe, empathetic, and patient-centered integrated medical care."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                <span>
                  {lang === "id"
                    ? "Memberdayakan tenaga kesehatan profesional—khususnya perempuan—melalui pendidikan dan lingkungan kerja yang inklusif."
                    : "Empower healthcare professionals—especially women—through continuous learning and inclusive workplaces."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                <span>
                  {lang === "id"
                    ? "Menjalankan tata kelola perusahaan yang baik (GCG) dan menjangkau masyarakat luas hingga ke pelosok desa."
                    : "Uphold Good Corporate Governance (GCG) while actively reaching underserved rural communities."}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Timeline Milestone Perjalanan Avisena */}
      <section className="py-16 bg-white border-b border-[#E0E4E9]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium uppercase tracking-wider mb-2">
              {lang === "id"
                ? "Jejak Langkah & Transformasi"
                : "Our Growth Milestones"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C]">
              {lang === "id"
                ? "Dari Klinik Rumah Pribadi Menuju 5 Rumah Sakit di Jawa Barat"
                : "From a Private Home Clinic to 5 Hospitals Across West Java"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-6 rounded-3xl bg-[#E0E4E9]/35 border border-[#E0E4E9] hover:border-[#00A79C] transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
                    {m.year}
                  </span>
                  <span className="text-xl font-bold text-[#00A79C]/40">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#10162C]">
                  {m.title[lang]}
                </h3>
                <p className="text-xs font-normal text-[#10162C]/75 leading-relaxed">
                  {m.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sejarah dr. Lia, 3 Pilar, Statistik & Dewan Pimpinan (Berakhir dengan Background Putih Sebelum Footer Biru) */}
      <AboutLeadershipSection />
    </div>
  );
}
