"use client";

import React from "react";
import Link from "next/link";
import {
  FaHouse,
  FaChevronRight,
  FaBullseye,
  FaCompass,
  FaCircleCheck,
} from "react-icons/fa6";
import { useAvisena } from "../components/AvisenaProvider";
import { AboutLeadershipSection } from "../components/sections/AboutLeadershipSection";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function TentangKamiPage() {
  const { lang } = useAvisena();

  const milestones = [
    {
      year: "2010",
      title: {
        id: "Awal Pengabdian di Rumah Pribadi Cimahi",
        en: "Our Origins: A Private Home Clinic in Cimahi",
      },
      desc: {
        id: "dr. Lia Yuliana Elsis membuka garasi rumah pribadinya untuk melayani warga sekitar yang sakit di malam hari dengan tulus.",
        en: "dr. Lia opened her family garage at night to treat sick neighbors who could not afford hospital care.",
      },
    },
    {
      year: "2013",
      title: {
        id: "Transformasi Menjadi RSU Avisena Cimahi",
        en: "Founding of RSU Avisena Cimahi Hospital",
      },
      desc: {
        id: "Klinik bersalin berkembang menjadi rumah sakit umum tipe D dan kini tipe C dengan gedung modern 4 lantai dan IGD 24 Jam.",
        en: "The clinic expanded into a full hospital with modern inpatient rooms, surgical suites, and 24/7 ER.",
      },
    },
    {
      year: "2018",
      title: {
        id: "Kemitraan Peternak Sapi KPBS Pangalengan",
        en: "Working with KPBS Dairy Cooperative",
      },
      desc: {
        id: "Kembali ke tanah tempat dr. Lia dahulu berjualan susu untuk biaya kuliah, Avisena bermitra dengan peternak mendirikan rumah sakit.",
        en: "Returning to the dairy cooperative where dr. Lia once sold milk to fund medical school, Avisena partnered with KPBS to build a hospital for South Bandung.",
      },
    },
    {
      year: "Ekspansi",
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
      {/* 1. Warm Header Khusus Tentang Kami */}
      <section className="relative bg-[#E0E4E9]/35 pt-10 pb-14 lg:pt-14 lg:pb-16 overflow-hidden">
        <SimpulSupergraphic
          variant="outline-tosca"
          opacity={0.1}
          className="w-80 h-80 absolute -top-16 -right-16 rotate-12"
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-light text-[#10162C]/65 mb-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#00A79C] transition-colors duration-200"
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
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium">
              {lang === "id"
                ? "Profil Korporat • Avisena Healthcare Group"
                : "Corporate Profile • Avisena Healthcare Group"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight text-balance">
              {lang === "id"
                ? "Semua Berawal dari Rumah: Mengabdi sebagai Tetangga Sehatmu"
                : "It All Started from Home: Serving as Your Healthy Neighbor"}
            </h1>
            <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed text-pretty">
              {lang === "id"
                ? "Mengenal lebih dekat akar sejarah dr. Lia Yuliana Elsis, tonggak pertumbuhan 5 rumah sakit di Jawa Barat, visi-misi perusahaan, serta jajaran pimpinan yang menjaga amanah pelayanan Avisena."
                : "Discover the founding story of dr. Lia Yuliana Elsis, our West Java milestones, corporate vision-mission, and the leadership team behind Avisena."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visi & Misi Korporasi */}
      <section className="py-16 bg-[#E0E4E9]/40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-7">
          <div className="bg-white p-8 rounded-3xl border border-[#E0E4E9] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#154C96] text-white flex items-center justify-center text-xl">
              <FaBullseye />
            </div>
            <span className="text-xs font-medium text-[#00A79C]">
              {lang === "id" ? "Visi Avisena" : "Our Vision"}
            </span>
            <h2 className="text-2xl font-semibold text-[#10162C] text-balance">
              {lang === "id"
                ? "Menjadi Jaringan Rumah Sakit Pilihan Utama Masyarakat Jawa Barat yang Melayani Sepenuh Hati"
                : "To Be West Java's Most Trusted & Compassionate Hospital Network"}
            </h2>
            <p className="text-sm font-normal text-[#10162C]/75 leading-relaxed text-pretty">
              {lang === "id"
                ? "Menghadirkan layanan kesehatan bermutu tinggi yang mudah dijangkau, bermartabat, dan memperlakukan setiap pasien layaknya keluarga serta Tamu Mulia."
                : "Delivering accessible, high-quality healthcare that treats every patient with the warmth of family and the dignity of a Noble Guest."}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E0E4E9] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
              <FaCompass />
            </div>
            <span className="text-xs font-medium text-[#F69320]">
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
                    ? "Mendukung dan melatih tenaga kesehatan profesional, khususnya perempuan, melalui jenjang klinis dan lingkungan kerja yang inklusif."
                    : "Advancing healthcare professionals, especially women, through clinical training and inclusive workplaces."}
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium mb-2">
              {lang === "id"
                ? "Jejak Langkah & Transformasi"
                : "Our Growth Milestones"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C] text-balance">
              {lang === "id"
                ? "Dari Klinik Rumah Pribadi Menuju 5 Rumah Sakit di Jawa Barat"
                : "From a Private Home Clinic to 5 Hospitals Across West Java"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-3xl bg-[#E0E4E9]/35 border border-[#E0E4E9] hover:border-[#00A79C] transition-colors duration-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
                    {m.year}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#10162C]">
                  {m.title[lang]}
                </h3>
                <p className="text-xs font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                  {m.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sejarah dr. Lia, 3 Pilar, Statistik & Dewan Pimpinan */}
      <AboutLeadershipSection />
    </div>
  );
}
