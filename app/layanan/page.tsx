"use client";

import React from "react";
import Link from "next/link";
import {
  FaHouse,
  FaChevronRight,
  FaTruckMedical,
  FaHeartPulse,
  FaCalendarCheck,
  FaCircleCheck,
  FaCakeCandles,
  FaBed,
  FaPhoneVolume,
} from "react-icons/fa6";
import { INPATIENT_ROOMS } from "../data/avisenaData";
import { useAvisena } from "../components/AvisenaProvider";
import { SpecialtiesSection } from "../components/sections/SpecialtiesSection";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function LayananPage() {
  const { lang, openQuickModal } = useAvisena();

  const mcuPackages = [
    {
      name: {
        id: "Paket MCU Dasar & Skrining Keluarga",
        en: "Basic Family Wellness MCU",
      },
      badge: { id: "Hemat & Lengkap", en: "Essential Care" },
      target: {
        id: "Dewasa Muda & Skrining Tahunan",
        en: "Young Adults & Annual Check",
      },
      items: {
        id: [
          "Pemeriksaan Fisik Dokter Umum",
          "Darah Lengkap, Gula Darah Puasa & Asam Urat",
          "Profil Kolesterol Lengkap",
          "Rontgen Thorax Digital",
        ],
        en: [
          "General Practitioner Physical Exam",
          "Complete Blood Count, Fasting Glucose & Uric Acid",
          "Full Lipid / Cholesterol Profile",
          "Digital Chest X-Ray",
        ],
      },
    },
    {
      name: {
        id: "Paket MCU Spesial Hari Ulang Tahun",
        en: "Birthday Special Privilege MCU",
      },
      badge: { id: "Promo Kado Tetangga", en: "Birthday Gift Promo" },
      target: {
        id: "Diskon Khusus di Bulan Kelahiran Anda",
        en: "Special Discount During Your Birthday Month",
      },
      highlight: true,
      items: {
        id: [
          "Konsultasi Dokter Spesialis Penyakit Dalam",
          "Rekam Jantung (EKG) & Rontgen Thorax",
          "Fungsi Hati (SGOT/SGPT) & Ginjal (Ureum/Kreatinin)",
          "Gratis Konsultasi Gizi & Souvenir Sehat Avisena",
        ],
        en: [
          "Internal Medicine Specialist Consultation",
          "Resting ECG & Digital Chest X-Ray",
          "Liver & Kidney Function Panel",
          "Free Clinical Nutrition Session & Wellness Gift",
        ],
      },
    },
    {
      name: {
        id: "Paket MCU Karyawan & Mitra Industri",
        en: "Corporate & Industrial Workforce MCU",
      },
      badge: { id: "Bisa On-Site Pabrik", en: "On-Site Capable" },
      target: {
        id: "Calon Karyawan & Pemeriksaan Berkala K3",
        en: "Pre-Employment & Annual Occupational Health",
      },
      items: {
        id: [
          "Pemeriksaan Dokter Kesehatan Kerja / Okupasi",
          "Audiometri, Spirometri & Pemeriksaan Visus Mata",
          "Laboratorium Darah, Urine & Rontgen Paru",
          "Rekapitulasi Laporan Medis Korporat (HRD Ready)",
        ],
        en: [
          "Occupational Medicine Physician Assessment",
          "Audiometry, Spirometry & Vision Screening",
          "Blood, Urine & Pulmonary X-Ray",
          "Consolidated Corporate HR Health Summary",
        ],
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Light & Warm Header Khusus Halaman Layanan Medis */}
      <section className="relative bg-gradient-to-br from-[#FFFFFF] via-[#E0E4E9]/40 to-[rgba(0,167,156,0.12)] pt-10 pb-14 lg:pt-14 lg:pb-16 border-b border-[#E0E4E9] overflow-hidden">
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
                ? "Layanan Medis, MCU & Rawat Inap"
                : "Medical Services, MCU & Inpatient Care"}
            </span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00A79C] text-white text-xs font-medium uppercase tracking-wider">
                {lang === "id"
                  ? "Pusat Layanan Klinis Terpadu"
                  : "Comprehensive Clinical Care Center"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight">
                {lang === "id"
                  ? "Poliklinik Spesialis, Paket MCU & Kenyamanan Rawat Inap"
                  : "Specialist Polyclinics, MCU Packages & Healing Inpatient Suites"}
              </h1>
              <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed max-w-2xl">
                {lang === "id"
                  ? "Kami menerjemahkan layanan medis yang kompleks ke dalam bahasa yang ramah dan membumi—mulai dari pertolongan darurat 24 jam, skrining pencegahan, hingga ruang rawat inap yang hangat seperti di rumah sendiri."
                  : "We translate complex medical care into warm, accessible support—from 24/7 emergency response and preventive check-ups to homey recovery rooms."}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => openQuickModal("appointment")}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#F69320] hover:bg-[#154C96] text-white text-sm font-medium shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaCalendarCheck />
                <span>
                  {lang === "id"
                    ? "Daftar Poliklinik Sekarang"
                    : "Book Clinic Appointment"}
                </span>
              </button>
              <a
                href="tel:0226000830"
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-[#00A79C] text-[#154C96] hover:text-white border border-[#154C96]/25 text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FaPhoneVolume className="text-[#F69320]" />
                <span>
                  {lang === "id"
                    ? "Panggilan Darurat IGD 24 Jam"
                    : "24/7 Emergency Hotline"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direktori Layanan & Spesialis (Menggunakan Smart Guided Filter) */}
      <SpecialtiesSection />

      {/* 3. Katalog Paket Medical Check-Up (MCU) & Promo Ulang Tahun (Navy Section Kontras di Tengah) */}
      <section className="py-20 bg-[#154C96] text-white relative overflow-hidden">
        <SimpulSupergraphic
          variant="outline-white"
          opacity={0.08}
          className="w-96 h-96 absolute -bottom-20 -right-20"
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium uppercase tracking-wider">
                <FaCakeCandles />
                <span>
                  {lang === "id"
                    ? "Preventive Care • Paket Medical Check-Up"
                    : "Preventive Care • Medical Check-Up Packages"}
                </span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                {lang === "id"
                  ? "Cek Kesehatan Berkala Sebelum Muncul Keluhan"
                  : "Proactive Health Screenings for Family & Workforce"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-light text-white/80 max-w-md">
              {lang === "id"
                ? "Tersedia untuk individu, keluarga, maupun pemeriksaan kesehatan berkala karyawan perusahaan (in-house atau on-site)."
                : "Available for individuals, families, and corporate workforce screenings."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {mcuPackages.map((pkg) => (
              <div
                key={pkg.name.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                  pkg.highlight
                    ? "bg-white text-[#10162C] border-4 border-[#F69320] shadow-2xl"
                    : "bg-white/10 backdrop-blur-xs border border-white/15 text-white"
                }`}
              >
                <div className="space-y-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      pkg.highlight
                        ? "bg-[#F69320] text-white"
                        : "bg-[#00A79C] text-white"
                    }`}
                  >
                    {pkg.badge[lang]}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{pkg.name[lang]}</h3>
                    <p
                      className={`text-xs font-light mt-1 ${
                        pkg.highlight ? "text-[#154C96]" : "text-white/75"
                      }`}
                    >
                      {pkg.target[lang]}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm font-normal">
                    {pkg.items[lang].map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <FaCircleCheck
                          className={`shrink-0 mt-0.5 ${
                            pkg.highlight ? "text-[#00A79C]" : "text-[#F69320]"
                          }`}
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-current/10">
                  <button
                    type="button"
                    onClick={() => openQuickModal("appointment", pkg.name[lang])}
                    className={`w-full py-3 px-5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      pkg.highlight
                        ? "bg-[#F69320] hover:bg-[#154C96] text-white"
                        : "bg-white text-[#154C96] hover:bg-[#F69320] hover:text-white"
                    }`}
                  >
                    {lang === "id"
                      ? "Reservasi Paket MCU Ini →"
                      : "Book This MCU Package →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Perbandingan Semua Kelas Kamar & Panduan Jam Besuk (White Section Sebelum Footer Biru) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium uppercase tracking-wider mb-2">
                {lang === "id"
                  ? "Galeri & Fasilitas Rawat Inap"
                  : "Inpatient Room Comparison"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Ringkasan Seluruh Kelas Kamar Rawat Inap Avisena"
                  : "Complete Overview of Avisena Inpatient Room Classes"}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openQuickModal("visitor")}
              className="px-5 py-2.5 rounded-full bg-[#E0E4E9]/60 hover:bg-[#00A79C] text-[#154C96] hover:text-white text-xs font-medium transition-colors cursor-pointer self-start"
            >
              {lang === "id"
                ? "Lihat Ketentuan Jam Besuk Tamu Mulia →"
                : "View Visiting Hours & Guidelines →"}
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {INPATIENT_ROOMS.map((room) => (
              <div
                key={room.id}
                className="rounded-3xl bg-[#E0E4E9]/30 border border-[#E0E4E9] hover:border-[#00A79C] overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="h-36 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name[lang]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[rgba(246,147,32,0.15)] text-[#F69320] text-[10px] font-medium">
                      {room.badge[lang]}
                    </span>
                    <h3 className="text-sm font-semibold text-[#10162C]">
                      {room.name[lang]}
                    </h3>
                    <p className="text-[11px] font-medium text-[#00A79C]">
                      {room.capacity[lang]}
                    </p>
                    <ul className="space-y-1 pt-1 text-[11px] text-[#10162C]/75">
                      {room.features[lang].slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-1.5">
                          <FaBed className="text-[#154C96] shrink-0 mt-0.5 text-[10px]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
