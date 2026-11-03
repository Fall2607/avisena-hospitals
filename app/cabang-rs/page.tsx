"use client";

import React from "react";
import Link from "next/link";
import {
  FaLocationDot,
  FaTruckMedical,
  FaPhoneVolume,
  FaWhatsapp,
  FaCalendarCheck,
  FaCircleCheck,
  FaHouse,
  FaChevronRight,
  FaStethoscope,
  FaBed,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { BRANCHES } from "../data/avisenaData";
import { useAvisena } from "../components/AvisenaProvider";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function CabangRsPage() {
  const {
    lang,
    selectedBranchTab,
    setSelectedBranchTab,
    jumpToDoctorSchedule,
    openQuickModal,
  } = useAvisena();

  const activeBranch =
    BRANCHES.find((b) => b.id === selectedBranchTab) || BRANCHES[0];

  return (
    <div className="bg-white">
      {/* 1. Warm Header Khusus Jaringan Cabang RS (Solid flat surface) */}
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
              {lang === "id" ? "5 Cabang Rumah Sakit" : "5 Hospital Branches"}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#00A79C] text-white text-xs font-medium">
                {lang === "id"
                  ? "Jaringan Rumah Sakit Avisena • Jawa Barat"
                  : "Avisena Hospital Network • West Java"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight text-balance">
                {lang === "id"
                  ? "Eksplorasi Lokasi, Poliklinik & Fasilitas 5 Cabang RS Avisena"
                  : "Explore Locations, Polyclinics & Facilities Across Our 5 Hospitals"}
              </h1>
              <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Pilih kota cabang di bawah ini untuk melihat detail poliklinik spesialis, nomor darurat IGD 24 Jam, peta navigasi Google Maps, serta perbandingan fasilitas tiap rumah sakit."
                  : "Select a city branch below to inspect its specialist clinics, 24/7 emergency contacts, Google Maps directions, and facility comparison."}
              </p>
            </div>

            {/* Quick Branch Pills */}
            <div className="flex flex-wrap gap-2">
              {BRANCHES.map((b) => {
                const active = selectedBranchTab === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranchTab(b.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                      active
                        ? "bg-[#154C96] text-white"
                        : "bg-white text-[#10162C] border border-[#B2B5B3]/60 hover:border-[#00A79C]"
                    }`}
                  >
                    <FaLocationDot
                      className={active ? "text-[#F69320]" : "text-[#00A79C]"}
                    />
                    <span>{b.city}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Split-View Hospital Explorer */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 5 Hospital Selector List */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-semibold text-[#154C96] px-1">
                {lang === "id"
                  ? "Pilih Unit Rumah Sakit (5 Cabang):"
                  : "Select Hospital Unit (5 Branches):"}
              </p>
              {BRANCHES.map((b) => {
                const isSelected = selectedBranchTab === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranchTab(b.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-colors duration-200 cursor-pointer border flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-[rgba(0,167,156,0.08)] border-[#00A79C]"
                        : "bg-white border-[#E0E4E9] hover:border-[#154C96]/40"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                            isSelected
                              ? "bg-[#00A79C] text-white"
                              : "bg-[#E0E4E9] text-[#154C96]"
                          }`}
                        >
                          RS {b.type}
                        </span>
                        <span className="text-[11px] font-light text-[#10162C]/65">
                          {b.badge[lang]}
                        </span>
                      </div>
                      <h2 className="text-base font-semibold text-[#10162C]">
                        {b.name}
                      </h2>
                      <p className="text-xs font-normal text-[#10162C]/70 truncate max-w-[240px]">
                        {b.address}
                      </p>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        isSelected
                          ? "bg-[#F69320] text-white"
                          : "bg-[#E0E4E9]/60 text-[#10162C]"
                      }`}
                    >
                      <FaChevronRight />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Comprehensive Active Branch Workspace */}
            <div className="lg:col-span-8 rounded-3xl bg-white border border-[#00A79C]/30 overflow-hidden">
              {/* Top Banner Image + Branch Logo Bar */}
              <div className="relative h-64 sm:h-72 bg-[#10162C]">
                <img
                  src={activeBranch.image}
                  alt={activeBranch.name}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-[#10162C]/50" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
                    RS {activeBranch.type}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white text-[#10162C] text-xs font-medium">
                    {activeBranch.badge[lang]}
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs font-medium text-[#F69320]">
                      {activeBranch.igdStatus[lang]}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-semibold mt-0.5">
                      {activeBranch.name}
                    </h3>
                  </div>
                  <div className="bg-white px-3.5 py-1.5 rounded-xl border border-white/40">
                    <img
                      src={activeBranch.logoColor}
                      alt={activeBranch.name}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base font-normal text-[#10162C]/80 leading-relaxed text-pretty">
                  {activeBranch.description[lang]}
                </p>

                {/* Address & Direct Contacts Box */}
                <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#E0E4E9]/40 border border-[#E0E4E9]">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#154C96]">
                      {lang === "id"
                        ? "Alamat & Navigasi Peta"
                        : "Address & Map Navigation"}
                    </p>
                    <p className="text-xs sm:text-sm font-normal text-[#10162C]/80 leading-relaxed">
                      {activeBranch.address}
                    </p>
                    <a
                      href={activeBranch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#00A79C] hover:text-[#F69320] transition-colors duration-200"
                    >
                      <span>
                        {lang === "id"
                          ? "Buka Rute di Google Maps"
                          : "Open Route in Google Maps"}
                      </span>
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#154C96]">
                      {lang === "id"
                        ? "Kontak Cepat Cabang"
                        : "Branch Direct Contacts"}
                    </p>
                    <p className="text-xs sm:text-sm font-normal text-[#10162C]/80">
                      IGD / Telepon:{" "}
                      <strong className="font-semibold text-[#10162C]">
                        {activeBranch.phone}
                      </strong>
                    </p>
                    <p className="text-xs sm:text-sm font-normal text-[#10162C]/80">
                      WhatsApp Admin:{" "}
                      <strong className="font-semibold text-[#00A79C]">
                        +{activeBranch.whatsapp}
                      </strong>
                    </p>
                  </div>
                </div>

                {/* Polyclinics & Featured Facilities */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#154C96] flex items-center gap-2 mb-3">
                      <FaStethoscope className="text-[#00A79C]" />
                      <span>
                        {lang === "id"
                          ? "Poliklinik Spesialis Tersedia"
                          : "Available Specialist Clinics"}
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeBranch.polyclinics.map((poli) => (
                        <span
                          key={poli}
                          className="px-3 py-1 rounded-full bg-[rgba(0,167,156,0.1)] text-[#10162C] text-xs font-normal border border-[#00A79C]/25"
                        >
                          {poli}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#154C96] flex items-center gap-2 mb-3">
                      <FaBed className="text-[#F69320]" />
                      <span>
                        {lang === "id"
                          ? "Fasilitas Unggulan Cabang"
                          : "Branch Featured Facilities"}
                      </span>
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm font-normal text-[#10162C]/80">
                      {activeBranch.featuredFacilities[lang].map((fac) => (
                        <li key={fac} className="flex items-start gap-2">
                          <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      openQuickModal(
                        "appointment",
                        `Pendaftaran Poliklinik ${activeBranch.name}`,
                        activeBranch.id
                      )
                    }
                    className="px-5 py-3 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <FaCalendarCheck />
                    <span>
                      {lang === "id"
                        ? `Daftar Berobat di ${activeBranch.city}`
                        : `Book Visit at ${activeBranch.city}`}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => jumpToDoctorSchedule(activeBranch.id)}
                    className="px-5 py-3 rounded-full bg-[#154C96] hover:bg-[#00A79C] text-white text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <FaStethoscope />
                    <span>
                      {lang === "id"
                        ? `Lihat Dokter Cabang ${activeBranch.city}`
                        : `View ${activeBranch.city} Doctors`}
                    </span>
                  </button>

                  <a
                    href={`https://wa.me/${activeBranch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#00A79C] hover:bg-[#154C96] text-white text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaWhatsapp />
                    <span>Chat Admin {activeBranch.city}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tabel Perbandingan Kapasitas & Layanan 5 Cabang */}
      <section className="py-16 lg:py-20 bg-[#E0E4E9]/45">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium mb-2">
              {lang === "id"
                ? "Perbandingan Antar Cabang"
                : "Cross-Branch Comparison"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C] text-balance">
              {lang === "id"
                ? "Ringkasan Layanan & Penjaminan di 5 Rumah Sakit Avisena"
                : "Service & Coverage Overview Across All 5 Avisena Hospitals"}
            </h2>
          </div>

          <div data-ui="table" className="overflow-x-auto bg-white rounded-3xl border border-[#E0E4E9]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#154C96] text-white text-xs font-medium">
                  <th className="py-4 px-5">
                    {lang === "id" ? "Cabang RS" : "Hospital"}
                  </th>
                  <th className="py-4 px-5">Tipe</th>
                  <th className="py-4 px-5">IGD & Ambulans</th>
                  <th className="py-4 px-5">BPJS / JKN & Asuransi</th>
                  <th className="py-4 px-5">Telepon Darurat</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                {BRANCHES.map((b) => (
                  <tr
                    key={b.id}
                    onClick={() => setSelectedBranchTab(b.id)}
                    className="hover:bg-[rgba(0,167,156,0.08)] even:bg-[#E0E4E9]/20 cursor-pointer transition-colors duration-200"
                  >
                    <td className="py-4 px-5 font-semibold text-[#10162C]">
                      {b.name}
                    </td>
                    <td className="py-4 px-5">RS {b.type}</td>
                    <td className="py-4 px-5 text-[#00A79C] font-medium">
                      <FaCircleCheck className="inline text-[#00A79C] mr-1.5" />
                      Siaga 24 Jam
                    </td>
                    <td className="py-4 px-5 text-[#10162C]/80">
                      <FaCircleCheck className="inline text-[#00A79C] mr-1.5" />
                      Umum, BPJS Kesehatan, BPJS TK & 50+ Asuransi
                    </td>
                    <td className="py-4 px-5 font-medium text-[#154C96]">
                      {b.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Panduan Kunjungan & Penjaminan Pasien */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[rgba(0,167,156,0.10)] border border-[#00A79C]/25 space-y-2">
              <h3 className="text-lg font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Pasien BPJS Kesehatan (JKN)"
                  : "BPJS Kesehatan (JKN) Patients"}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Seluruh 5 cabang RS Avisena melayani rujukan berjenjang Mobile JKN maupun kasus gawat darurat (IGD 24 Jam) tanpa rujukan sesuai ketentuan BPJS."
                  : "All 5 Avisena hospitals accept Mobile JKN referrals and 24/7 emergency walk-ins without referral letters."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[rgba(21,76,150,0.08)] border border-[#154C96]/20 space-y-2">
              <h3 className="text-lg font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Kecelakaan Kerja & Mitra Pabrik"
                  : "Occupational Trauma & Corporate Partners"}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Kerja sama Pusat Layanan Kecelakaan Kerja (PLKK BPJS Ketenagakerjaan) dan MCU on-site bagi perusahaan di Cimahi, Subang, dan Cikampek."
                  : "Official occupational trauma center (BPJS Ketenagakerjaan) and corporate MCU partner across industrial corridors."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[rgba(246,147,32,0.12)] border border-[#F69320]/30 space-y-2">
              <h3 className="text-lg font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Layanan Jemput Ambulans 24 Jam"
                  : "24/7 Ambulance Pickup Service"}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Butuh penjemputan pasien darurat dari rumah atau lokasi kerja? Hubungi nomor IGD cabang terdekat untuk pengiriman ambulans segera."
                  : "Need urgent patient pickup from home or workplace? Call the nearest branch ER line for immediate ambulance dispatch."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
