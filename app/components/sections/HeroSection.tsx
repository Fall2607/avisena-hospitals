"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaHeartPulse,
  FaCalendarCheck,
  FaHospital,
  FaCircleCheck,
  FaTruckMedical,
  FaStethoscope,
  FaMagnifyingGlass,
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
      className="relative z-30 pt-10 pb-24 lg:pt-16 lg:pb-28 bg-gradient-to-br from-[#FFFFFF] via-[#E0E4E9]/35 to-[rgba(0,167,156,0.12)]"
    >
      {/* Decorative Simpul Kepedulian Supergraphics (Isolated Overflow Wrapper) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SimpulSupergraphic
          variant="outline-tosca"
          opacity={0.12}
          className="w-96 h-96 absolute -top-20 -right-20 rotate-12"
        />
        <SimpulSupergraphic
          variant="outline-blue"
          opacity={0.08}
          className="w-80 h-80 absolute bottom-0 -left-20 -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,167,156,0.14)] border border-[#00A79C]/30 text-[#154C96] text-xs font-medium tracking-wide">
              <FaHeartPulse className="text-[#00A79C]" />
              <span>
                {lang === "id"
                  ? "Avisena Healthcare Group • Lebih Peduli, Lebih Dekat"
                  : "Avisena Healthcare Group • Caring Closer to Home"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-[#10162C] leading-[1.15] tracking-tight">
              {lang === "id" ? (
                <>
                  Avisena,{" "}
                  <span className="font-bold text-[#00A79C]">
                    Tetangga Sehatmu.
                  </span>{" "}
                  <span className="font-normal text-[#154C96] block sm:inline">
                    Lebih Peduli, Lebih Dekat.
                  </span>
                </>
              ) : (
                <>
                  A Vision for a{" "}
                  <span className="font-bold text-[#00A79C]">
                    Healthier West Java.
                  </span>{" "}
                  <span className="font-normal text-[#154C96] block sm:inline">
                    Your Healthy Neighbor.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#10162C]/80 font-normal leading-relaxed max-w-2xl">
              {lang === "id"
                ? "Jaringan rumah sakit swasta pilihan masyarakat Jawa Barat yang hadir mendampingi setiap langkah kesehatan keluarga Anda selama 24 jam dengan sepenuh hati."
                : "Driven by a dream to elevate public health standards across the province. We are building a centralized digital gateway for Avisena Hospitals—serving the people of West Java with compassion and modern innovation."}
            </p>

            {/* Vision Statement Highlight Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-l-4 border-[#F69320] shadow-xs">
              <p className="text-xs sm:text-sm font-normal text-[#10162C]/80 leading-relaxed">
                <span className="font-semibold text-[#154C96]">
                  {lang === "id"
                    ? "Visi untuk Jawa Barat yang Lebih Sehat: "
                    : "Our Regional Promise: "}
                </span>
                {lang === "id"
                  ? "Berangkat dari mimpi meningkatkan derajat kesehatan masyarakat, kami membangun gerbang digital terpadu Rumah Sakit Avisena—melayani warga Jawa Barat dengan sepenuh hati, kehangatan seorang tetangga, dan inovasi modern."
                  : "Every citizen in West Java deserves access to quality, dignified, and modern healthcare—where every patient is welcomed as a Noble Guest (Tamu Mulia)."}
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => openQuickModal("appointment")}
                className="px-7 py-3.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <FaCalendarCheck />
                <span>
                  {lang === "id"
                    ? "Buat Janji Temu Sekarang"
                    : "Book an Appointment"}
                </span>
              </button>
              <Link
                href="/cabang-rs"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#00A79C] text-[#154C96] hover:text-white border border-[#154C96]/25 hover:border-[#00A79C] font-medium text-sm sm:text-base transition-all flex items-center gap-2"
              >
                <FaHospital />
                <span>
                  {lang === "id" ? "Lihat 5 Cabang RS" : "Explore 5 Hospitals"}
                </span>
              </Link>
            </div>

            {/* Quick Trust Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-normal text-[#10162C]/75">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E0E4E9]">
                <FaCircleCheck className="text-[#00A79C]" />
                {lang === "id"
                  ? "Menerima BPJS Kesehatan (JKN) & Umum"
                  : "BPJS Kesehatan (JKN) & General Patients"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E0E4E9]">
                <FaCircleCheck className="text-[#F69320]" />
                {lang === "id"
                  ? "50+ Mitra Asuransi & Perusahaan"
                  : "50+ Insurance & Corporate Partners"}
              </span>
            </div>
          </div>

          {/* Hero Visual Column (Simpul Kepedulian Curved Frame) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#154C96] via-[#00A79C] to-[#F69320] simpul-frame opacity-20 blur-sm" />

              <div className="relative simpul-frame overflow-hidden border-4 border-white shadow-2xl bg-[#E0E4E9]">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=85"
                  alt="Tenaga medis Avisena berbincang hangat dengan keluarga pasien"
                  className="w-full h-[420px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10162C]/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium mb-2">
                    {lang === "id"
                      ? "Filosofi Tamu Mulia"
                      : "Noble Guest Philosophy"}
                  </span>
                  <p className="text-sm sm:text-base font-normal leading-snug">
                    {lang === "id"
                      ? '"Bagi kami, setiap pasien bukan sekadar nomor antrean, melainkan tetangga dan tamu mulia yang harus disambut hangat."'
                      : '"To us, every patient is never just a queue number, but a cherished neighbor and noble guest."'}
                  </p>
                </div>
              </div>

              {/* Floating 24/7 IGD Badge */}
              <div className="absolute -top-4 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-[#E0E4E9] flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
                  <FaTruckMedical />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#154C96]">
                    IGD & Ambulans 24/7
                  </p>
                  <p className="text-[11px] font-light text-[#10162C]/70">
                    Cimahi • Pangalengan • Kuningan • Subang • Cikampek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Action Bar (Menggunakan CustomSelect Interaktif Beranimasi) */}
        <div className="relative z-30 mt-12 lg:mt-14 bg-white rounded-3xl shadow-2xl border-2 border-[#00A79C]/25 p-5 sm:p-7">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A79C]" />
              <h2 className="text-base sm:text-lg font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Pencarian Cepat Dokter & Janji Temu Multi-Cabang"
                  : "Quick Multi-Branch Doctor Finder & Appointment"}
              </h2>
            </div>
            <span className="text-xs font-light text-[#154C96]">
              {lang === "id"
                ? "Terintegrasi di 5 Jaringan RS Avisena Jawa Barat"
                : "Integrated across all 5 Avisena Hospitals in West Java"}
            </span>
          </div>

          <form
            onSubmit={handleHeroQuickSearch}
            className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end"
          >
            {/* CustomSelect 1: Pilih Lokasi Rumah Sakit */}
            <div className="lg:col-span-5">
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

            {/* CustomSelect 2: Pilih Poliklinik / Spesialis */}
            <div className="lg:col-span-4">
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

            {/* Button: Cari Dokter / Buat Janji (#F69320) */}
            <div className="sm:col-span-2 lg:col-span-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer h-[52px]"
              >
                <FaMagnifyingGlass />
                <span>
                  {lang === "id"
                    ? "Cari Dokter / Buat Janji"
                    : "Find Doctor / Book"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

