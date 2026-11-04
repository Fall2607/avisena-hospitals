"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaHospital,
  FaCircleCheck,
  FaTruckMedical,
  FaStethoscope,
  FaMagnifyingGlass,
  FaClock,
} from "react-icons/fa6";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";
import { CustomSelect } from "../CustomSelect";

export const HeroSection: React.FC = () => {
  const {
    lang,
    openQuickModal,
    branchSelectOptions,
    specialtySelectOptions,
    jumpToDoctorSchedule,
  } = useAvisena();

  const [heroBranch, setHeroBranch] = useState<string>("all");
  const [heroSpecialty, setHeroSpecialty] = useState<string>("all");

  const handleHeroQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    jumpToDoctorSchedule(heroBranch, heroSpecialty);
  };

  return (
    <section
      id="beranda"
      className="relative z-30 pt-10 pb-20 lg:pt-14 lg:pb-24 bg-white"
    >
      {/* Decorative Simpul Kepedulian Motif (Flat Architectural Placement) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SimpulSupergraphic
          variant="outline-tosca"
          opacity={0.08}
          className="w-[520px] h-[520px] absolute -top-32 -right-24 rotate-12"
        />
        <SimpulSupergraphic
          variant="outline-blue"
          opacity={0.05}
          className="w-96 h-96 absolute -bottom-20 -left-20 -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Supporting Statement, CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-[27px] sm:text-4xl lg:text-[52px] font-bold text-[#10162C] leading-[1.15] tracking-tight">
              {lang === "id" ? (
                <>
                  <span className="block">Avisena, Tetangga Sehatmu.</span>
                  <span className="block text-[#00A79C] font-semibold mt-1">
                    Lebih Peduli, Lebih Dekat.
                  </span>
                </>
              ) : (
                <>
                  <span className="block">Avisena, Your Healthy Neighbor.</span>
                  <span className="block text-[#00A79C] font-semibold mt-1">
                    Caring Closer to Home.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#10162C]/85 font-normal leading-relaxed max-w-2xl">
              {lang === "id"
                ? "Jaringan 5 rumah sakit swasta di Jawa Barat yang mendampingi kesehatan keluarga Anda dengan kehangatan seorang tetangga, fasilitas berstandar tinggi, dan layanan IGD 24 jam terpadu."
                : "A network of 5 private hospitals across West Java dedicated to your family's health with neighborhood warmth, modern clinical standards, and 24/7 integrated emergency services."}
            </p>

            {/* Noble Guest Philosophy Statement (Flat Surface Step, No Shadows) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#E0E4E9]/45 border border-[#154C96]/15">
              <p className="text-sm sm:text-base font-normal text-[#10162C] leading-relaxed">
                <strong className="font-semibold text-[#154C96]">
                  {lang === "id" ? "Filosofi Tamu Mulia: " : "Noble Guest Promise: "}
                </strong>
                {lang === "id"
                  ? "Bagi kami, setiap pasien bukan sekadar angka atau nomor antrean, melainkan tetangga dan tamu mulia yang kami layani sepenuh hati."
                  : "Every patient is welcomed not as a queue number, but as a cherished neighbor and noble guest."}
              </p>
            </div>

            {/* Primary Actions (Flat buttons, explicit transitions) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => openQuickModal("appointment")}
                className="px-7 py-3.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-base transition-colors duration-200 flex items-center gap-2.5 cursor-pointer"
              >
                <FaCalendarCheck />
                <span>
                  {lang === "id"
                    ? "Buat Janji Temu Dokter"
                    : "Book an Appointment"}
                </span>
              </button>
              <Link
                href="/cabang-rs"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#00A79C] text-[#154C96] hover:text-white border-2 border-[#154C96]/30 hover:border-[#00A79C] font-medium text-base transition-colors duration-200 flex items-center gap-2"
              >
                <FaHospital />
                <span>
                  {lang === "id" ? "Lihat 5 Cabang RS" : "Explore 5 Hospitals"}
                </span>
              </Link>
            </div>

            {/* Trust Badges (Flat with subtle border, 13px+ text) */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-sm font-normal text-[#10162C]/80">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0E4E9]/40 border border-[#B2B5B3]/50">
                <FaCircleCheck className="text-[#00A79C]" />
                {lang === "id"
                  ? "Menerima Pasien BPJS Kesehatan & Umum"
                  : "BPJS Kesehatan (JKN) & Private Patients"}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0E4E9]/40 border border-[#B2B5B3]/50">
                <FaCircleCheck className="text-[#F69320]" />
                {lang === "id"
                  ? "50+ Mitra Asuransi & Korporasi"
                  : "50+ Insurance & Corporate Partners"}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Simpul Frame */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative simpul-frame overflow-hidden border-4 border-[#E0E4E9] bg-[#E0E4E9]">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85"
                  alt="Tenaga medis Avisena berbincang hangat dengan keluarga pasien"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
                {/* Flat caption badge at bottom */}
                <div className="p-4 bg-[#10162C] text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#00A79C]" />
                    <span className="text-sm font-semibold text-[#00A79C]">
                      {lang === "id" ? "Layanan Hangat & Profesional" : "Warm & Professional Care"}
                    </span>
                  </div>
                  <p className="text-sm font-normal text-white/90 leading-snug">
                    {lang === "id"
                      ? "Mendampingi pemulihan kesehatan keluarga Anda di Cimahi, Pangalengan, Kuningan, Subang, dan Cikampek."
                      : "Supporting your family's health journey across Cimahi, Pangalengan, Kuningan, Subang, and Cikampek."}
                  </p>
                </div>
              </div>

              {/* 24/7 Emergency Indicator (Integrated Flat Pill) */}
              <div className="mt-4 bg-white p-3.5 rounded-2xl border-2 border-[#00A79C]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00A79C] text-white flex items-center justify-center text-lg shrink-0">
                    <FaTruckMedical />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#154C96] flex items-center gap-1.5">
                      <span>IGD & Ambulans Siaga 24 Jam</span>
                    </p>
                    <p className="text-xs text-[#10162C]/70">
                      5 Jaringan RS Siaga Penuh di Jawa Barat
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-[#00A79C] bg-[#E0E4E9]/50 px-2.5 py-1 rounded-full shrink-0">
                  <FaClock />
                  <span>24 Jam Nonstop</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Thing: Integrated Quick Search & Appointment Finder (Flat container) */}
        <div className="relative z-30 mt-14 lg:mt-16 bg-[#E0E4E9]/30 rounded-3xl border border-[#B2B5B3]/40 p-5 sm:p-7">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A79C]" />
              <h2 className="text-base sm:text-lg font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Cari Jadwal Dokter & Buat Janji di 5 Cabang RS"
                  : "Find Doctors & Book Appointments Across 5 Hospitals"}
              </h2>
            </div>
            <span className="text-sm font-normal text-[#154C96]">
              {lang === "id"
                ? "Pilih cabang dan spesialisasi untuk langsung melihat jadwal"
                : "Select location and specialty to view current schedules"}
            </span>
          </div>

          <form
            onSubmit={handleHeroQuickSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-end w-full min-w-0"
          >
            {/* CustomSelect 1: Lokasi Cabang RS */}
            <div className="w-full min-w-0 lg:col-span-5">
              <CustomSelect
                label={
                  lang === "id"
                    ? "Pilih Lokasi Rumah Sakit"
                    : "Select Hospital Branch"
                }
                value={heroBranch}
                onChange={setHeroBranch}
                options={branchSelectOptions}
                icon={<FaHospital />}
              />
            </div>

            {/* CustomSelect 2: Poliklinik / Spesialis */}
            <div className="w-full min-w-0 lg:col-span-4">
              <CustomSelect
                label={
                  lang === "id"
                    ? "Pilih Poliklinik / Spesialis"
                    : "Select Polyclinic / Specialty"
                }
                value={heroSpecialty}
                onChange={setHeroSpecialty}
                options={specialtySelectOptions}
                icon={<FaStethoscope />}
              />
            </div>

            {/* Button: Cari Jadwal Dokter (#F69320) */}
            <div className="w-full min-w-0 sm:col-span-2 lg:col-span-3">
              <button
                type="submit"
                className="w-full min-w-0 max-w-full py-3.5 px-6 rounded-2xl bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer h-[52px]"
              >
                <FaMagnifyingGlass />
                <span>
                  {lang === "id"
                    ? "Lihat Jadwal Dokter"
                    : "View Doctor Schedule"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
