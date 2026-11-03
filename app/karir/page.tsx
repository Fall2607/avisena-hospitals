"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FaHouse,
  FaChevronRight,
  FaBriefcaseMedical,
  FaEnvelope,
  FaCircleCheck,
  FaLocationDot,
  FaShieldHeart,
  FaGraduationCap,
  FaPeopleGroup,
  FaScaleBalanced,
} from "react-icons/fa6";
import { CAREER_OPENINGS } from "../data/avisenaData";
import { useAvisena } from "../components/AvisenaProvider";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function KarirPage() {
  const { lang } = useAvisena();
  const [selectedPlacement, setSelectedPlacement] = useState<string>("ALL");

  const placements = ["ALL", "Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"];

  const filteredJobs = useMemo(() => {
    if (selectedPlacement === "ALL") return CAREER_OPENINGS;
    return CAREER_OPENINGS.filter((j) =>
      j.placement.toLowerCase().includes(selectedPlacement.toLowerCase())
    );
  }, [selectedPlacement]);

  return (
    <div className="bg-white">
      {/* 1. Warm Header Khusus Halaman Karir */}
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
                ? "Karir & Rekrutmen Resmi"
                : "Careers & Official Recruitment"}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium">
                <FaBriefcaseMedical />
                <span>
                  {lang === "id"
                    ? "Karir Insan Avisena • 5 Cabang Jawa Barat"
                    : "Avisena Careers • 5 Hospitals in West Java"}
                </span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight text-balance">
                {lang === "id"
                  ? "Mari Mengabdi & Bertumbuh Bersama Keluarga Besar Avisena"
                  : "Serve Wholeheartedly & Grow Your Career with Avisena"}
              </h1>
              <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Kami membangun lingkungan kerja yang menghargai kesetaraan, kepemimpinan perempuan, pengembangan kompetensi klinis, serta semangat kekeluargaan di 5 rumah sakit kami."
                  : "We foster an inclusive workplace that champions equality, women's leadership, clinical excellence, and family warmth across our 5 hospitals."}
              </p>
            </div>

            <a
              href="mailto:cs@rsavisena.co.id?subject=Lamaran%20Karir%20Insan%20Avisena"
              className="px-6 py-4 rounded-full bg-[#154C96] hover:bg-[#00A79C] text-white text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 self-start shrink-0"
            >
              <FaEnvelope />
              <span>
                {lang === "id"
                  ? "Kirim CV ke Tim SDM (cs@rsavisena.co.id)"
                  : "Email CV to HR Team"}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Budaya Kerja & Keunggulan Bergabung */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaShieldHeart />,
                title: {
                  id: "Lingkungan Kerja Ramah & Inklusif",
                  en: "Inclusive & Supportive Workplace",
                },
                desc: {
                  id: "Mendukung kesejahteraan tenaga kesehatan perempuan dengan fasilitas ruang laktasi dan budaya kerja saling menghormati.",
                  en: "Supporting women healthcare workers with nursing rooms and a respectful team culture.",
                },
              },
              {
                icon: <FaGraduationCap />,
                title: {
                  id: "Pelatihan Klinis Berkelanjutan",
                  en: "Continuous Clinical Training",
                },
                desc: {
                  id: "Program peningkatan kompetensi berkala (BTCLS, ACLS, PONEK, dan manajemen mutu rumah sakit).",
                  en: "Regular clinical skill certification and hospital quality management training.",
                },
              },
              {
                icon: <FaPeopleGroup />,
                title: {
                  id: "Jalur Karir di 5 Rumah Sakit",
                  en: "Career Mobility Across 5 Hospitals",
                },
                desc: {
                  id: "Peluang pengembangan karir lintas cabang di Cimahi, Pangalengan, Kuningan, Subang, hingga Cikampek.",
                  en: "Cross-branch career advancement opportunities across West Java.",
                },
              },
              {
                icon: <FaScaleBalanced />,
                title: {
                  id: "100% Rekrutmen Bebas Pungutan",
                  en: "100% Zero-Fee Transparent Hiring",
                },
                desc: {
                  id: "Seluruh tahapan seleksi Insan Avisena dilakukan secara transparan dan tidak pernah memungut biaya apa pun.",
                  en: "All recruitment stages at Avisena are transparent and strictly free of charge.",
                },
              },
            ].map((item) => (
              <div
                key={item.title.id}
                className="p-6 rounded-3xl bg-[#E0E4E9]/35 border border-[#E0E4E9] space-y-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <h2 className="text-base font-semibold text-[#10162C]">
                  {item.title[lang]}
                </h2>
                <p className="text-xs font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Papan Lowongan Kerja Interaktif dengan Filter Cabang */}
      <section className="py-20 bg-[#E0E4E9]/45">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium mb-2">
                {lang === "id"
                  ? "Lowongan Aktif Saat Ini"
                  : "Current Open Positions"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C] text-balance">
                {lang === "id"
                  ? "Pilih Lokasi Penempatan Cabang RS Avisena"
                  : "Filter Openings by Hospital Placement"}
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {placements.map((city) => {
                const active = selectedPlacement === city;
                return (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedPlacement(city)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                      active
                        ? "bg-[#00A79C] text-white"
                        : "bg-white text-[#10162C] border border-[#B2B5B3]/60 hover:border-[#154C96]"
                    }`}
                  >
                    <FaLocationDot
                      className={active ? "text-white" : "text-[#F69320]"}
                    />
                    <span>
                      {city === "ALL"
                        ? lang === "id"
                          ? "Semua Cabang"
                          : "All Branches"
                        : city}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-7 rounded-3xl bg-white border border-[#E0E4E9] hover:border-[#00A79C] transition-colors duration-200 flex flex-col justify-between gap-5"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
                      {job.placement}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium">
                      {job.type} • {job.department[lang]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#10162C]">
                    {job.role[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 mt-2 leading-relaxed text-pretty">
                    {job.qualification[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-[11px] font-light text-[#10162C]/65 flex items-center gap-1.5">
                    <FaCircleCheck className="text-[#00A79C]" />
                    <span>Rekrutmen Resmi Tanpa Biaya</span>
                  </span>
                  <a
                    href={`mailto:cs@rsavisena.co.id?subject=${encodeURIComponent(
                      `Lamaran ${job.role.id} - ${job.placement}`
                    )}`}
                    className="px-4 py-2 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs font-medium transition-colors duration-200"
                  >
                    {lang === "id" ? "Lamar Posisi Ini →" : "Apply Now →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tahapan Seleksi & Panduan Melamar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium mb-2">
              {lang === "id" ? "Alur Rekrutmen" : "Recruitment Process"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C] text-balance">
              {lang === "id"
                ? "4 Langkah Mudah Bergabung Menjadi Insan Avisena"
                : "4 Transparent Steps to Join the Avisena Family"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stepName: { id: "Tahap 1", en: "Step 1" },
                title: {
                  id: "Kirim Berkas via Email",
                  en: "Submit Application via Email",
                },
                desc: {
                  id: "Kirim CV, STR/SIP aktif (untuk nakes), dan ijazah ke cs@rsavisena.co.id dengan subjek Posisi & Cabang.",
                  en: "Send your CV, active clinical license (for medical roles), and diploma to cs@rsavisena.co.id.",
                },
              },
              {
                stepName: { id: "Tahap 2", en: "Step 2" },
                title: {
                  id: "Seleksi Administrasi & Kompetensi",
                  en: "Screening & Competency Test",
                },
                desc: {
                  id: "Tim SDM dan Komite Medik/Keperawatan meninjau kualifikasi serta kesesuaian kompetensi Anda.",
                  en: "Our HR and Medical/Nursing Committee review your qualifications and clinical readiness.",
                },
              },
              {
                stepName: { id: "Tahap 3", en: "Step 3" },
                title: {
                  id: "Wawancara User & Direksi Cabang",
                  en: "Branch Leadership Interview",
                },
                desc: {
                  id: "Sesi diskusi hangat mengenai nilai pelayanan 'Tamu Mulia' dan kesiapan penempatan cabang.",
                  en: "A warm conversation on our 'Noble Guest' service values and branch placement.",
                },
              },
              {
                stepName: { id: "Tahap 4", en: "Step 4" },
                title: {
                  id: "MCU Karyawan & Orientasi",
                  en: "Employee MCU & Onboarding",
                },
                desc: {
                  id: "Pemeriksaan kesehatan karyawan baru dan program orientasi keluarga besar Avisena Healthcare Group.",
                  en: "Pre-employment health check and onboarding into the Avisena Healthcare Group family.",
                },
              },
            ].map((s) => (
              <div
                key={s.stepName.id}
                className="p-6 rounded-3xl bg-[#E0E4E9]/30 border border-[#E0E4E9] space-y-2.5"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium">
                  {s.stepName[lang]}
                </span>
                <h3 className="text-base font-semibold text-[#10162C]">
                  {s.title[lang]}
                </h3>
                <p className="text-xs font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                  {s.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
