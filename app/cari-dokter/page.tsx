"use client";

import React from "react";
import Link from "next/link";
import {
  FaHouse,
  FaChevronRight,
  FaCircleCheck,
  FaWhatsapp,
  FaCalendarCheck,
  FaIdCard,
} from "react-icons/fa6";
import { SCHEDULE_UPDATES } from "../data/avisenaData";
import { useAvisena } from "../components/AvisenaProvider";
import { FindDoctorSection } from "../components/sections/FindDoctorSection";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function CariDokterPage() {
  const { lang, openQuickModal } = useAvisena();

  return (
    <div className="bg-white">
      {/* 1. Warm Header Khusus Halaman Direktori Dokter */}
      <section className="relative bg-[#E0E4E9]/35 pt-10 pb-12 lg:pt-14 lg:pb-14 overflow-hidden">
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
                ? "Cari Dokter & Jadwal Praktik"
                : "Find a Doctor & Schedules"}
            </span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
              {lang === "id"
                ? "Reservasi Terpadu 5 Cabang RS Avisena"
                : "Unified Booking Across 5 Avisena Hospitals"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight text-balance">
              {lang === "id"
                ? "Direktori Dokter Spesialis & Jadwal Praktik Harian"
                : "Specialist Doctor Directory & Practice Schedules"}
            </h1>
            <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed text-pretty">
              {lang === "id"
                ? "Gunakan filter lokasi cabang dan spesialisasi di bawah ini untuk menemukan dokter pilihan keluarga Anda di Cimahi, Pangalengan, Kuningan, Subang, atau Cikampek."
                : "Filter by branch location and medical specialty below to book your preferred doctor across Cimahi, Pangalengan, Kuningan, Subang, or Cikampek."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direktori & Filter Dokter Multi-Cabang */}
      <FindDoctorSection />

      {/* 3. Papan Pengumuman Perubahan Jadwal Praktik Terkini */}
      <section className="py-16 bg-[#E0E4E9]/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F69320]" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#10162C] text-balance">
              {lang === "id"
                ? "Papan Informasi Jadwal Poliklinik Terkini"
                : "Live Polyclinic Schedule Notices"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SCHEDULE_UPDATES.map((upd, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#E0E4E9] space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#154C96]">
                    {upd.branch}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(0,167,156,0.14)] text-[#00A79C]">
                    {upd.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-normal text-[#10162C]/80 leading-relaxed text-pretty">
                  {upd.notice[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Panduan Alur Pendaftaran Tanpa Antre */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium mb-2">
              {lang === "id"
                ? "Panduan Pendaftaran Rawat Jalan"
                : "Outpatient Registration Guide"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C] text-balance">
              {lang === "id"
                ? "2 Jalur Mudah Berobat di Rumah Sakit Avisena"
                : "2 Easy Pathways for Your Clinic Visit"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jalur 1: Umum & Asuransi */}
            <div className="p-8 rounded-3xl bg-[#E0E4E9]/35 border border-[#E0E4E9] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F69320] text-white flex items-center justify-center text-xl">
                <FaCalendarCheck />
              </div>
              <h3 className="text-xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Pasien Umum, Asuransi Swasta & Mitra Perusahaan"
                  : "General, Private Insurance & Corporate Patients"}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#10162C]/80">
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                  <span>
                    {lang === "id"
                      ? "1. Pilih dokter pada direktori di atas lalu klik 'Buat Janji Dokter' atau hubungi WhatsApp Admin cabang."
                      : "1. Select a doctor above and click 'Book Doctor' or message our branch WhatsApp Admin."}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                  <span>
                    {lang === "id"
                      ? "2. Konfirmasi jadwal kedatangan dan kartu asuransi/jaminan perusahaan Anda H-1 sebelum kunjungan."
                      : "2. Confirm your arrival slot and insurance card 1 day prior to your visit."}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                  <span>
                    {lang === "id"
                      ? "3. Datang 15 menit sebelum jam praktik dan langsung menuju konter Admisi Tamu Mulia."
                      : "3. Arrive 15 minutes before consultation at our Noble Guest Admission Desk."}
                  </span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => openQuickModal("appointment")}
                className="px-5 py-2.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs font-medium transition-colors duration-200 cursor-pointer"
              >
                {lang === "id"
                  ? "Buka Formulir Reservasi Cepat →"
                  : "Open Express Booking Form →"}
              </button>
            </div>

            {/* Jalur 2: BPJS Kesehatan (JKN) */}
            <div className="p-8 rounded-3xl bg-[rgba(0,167,156,0.08)] border border-[#00A79C]/30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
                <FaIdCard />
              </div>
              <h3 className="text-xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Pasien BPJS Kesehatan (JKN) & BPJS Ketenagakerjaan"
                  : "BPJS Kesehatan (JKN) & Social Security Patients"}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#10162C]/80">
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-[#154C96] shrink-0 mt-0.5" />
                  <span>
                    {lang === "id"
                      ? "1. Pastikan memiliki Surat Rujukan aktif dari FKTP (Puskesmas / Klinik / Dokter Keluarga)."
                      : "1. Ensure you have an active referral from your primary care clinic (FKTP)."}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-[#154C96] shrink-0 mt-0.5" />
                  <span>
                    {lang === "id"
                      ? "2. Ambil nomor antrean poliklinik dari rumah melalui aplikasi Mobile JKN atau bantuan WhatsApp Admin Avisena."
                      : "2. Take your queue number from home via the Mobile JKN app or Avisena WhatsApp Admin."}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-[#154C96] shrink-0 mt-0.5" />
                  <span>
                    {lang === "id"
                      ? "3. Untuk kondisi Gawat Darurat (IGD 24 Jam), pasien BPJS dilayani langsung tanpa perlu surat rujukan."
                      : "3. For 24/7 Emergency (IGD) cases, BPJS patients are treated immediately without referrals."}
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281220200170"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A79C] hover:bg-[#154C96] text-white text-xs font-medium transition-colors duration-200"
              >
                <FaWhatsapp />
                <span>
                  {lang === "id"
                    ? "Tanya Admin BPJS via WhatsApp →"
                    : "Ask BPJS Admin via WhatsApp →"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
