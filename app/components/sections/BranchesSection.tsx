"use client";

import React from "react";
import Link from "next/link";
import {
  FaLocationDot,
  FaTruckMedical,
  FaCalendarCheck,
  FaWhatsapp,
  FaPhoneVolume,
} from "react-icons/fa6";
import { BRANCHES } from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";

export const BranchesSection: React.FC = () => {
  const {
    lang,
    selectedBranchTab,
    setSelectedBranchTab,
    setDrawerBranch,
    jumpToDoctorSchedule,
  } = useAvisena();

  return (
    <section
      id="jaringan-rs"
      className="py-20 lg:py-24 bg-[#E0E4E9]/55 relative overflow-hidden"
    >
      <SimpulSupergraphic
        variant="outline-blue"
        opacity={0.07}
        className="w-96 h-96 absolute -top-16 -left-16"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium uppercase tracking-wider mb-3">
            {lang === "id"
              ? "5 Jaringan Rumah Sakit di Jawa Barat"
              : "5 Hospital Network Branches in West Java"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C]">
            {lang === "id"
              ? "Sehat Lebih Dekat dengan Avisena di Kota Anda"
              : "Quality Healthcare Closer to Your Community"}
          </h2>
          <p className="text-sm sm:text-base font-normal text-[#10162C]/75 mt-3 leading-relaxed">
            {lang === "id"
              ? "Avisena hadir menjembatani program kesehatan pemerintah dan swasta—menerima pasien Umum, BPJS Kesehatan (JKN), BPJS Ketenagakerjaan, serta Asuransi/Mitra Perusahaan dengan fasilitas modern dan hangat."
              : "Avisena bridges public and private healthcare programs—welcoming General patients, BPJS/JKN, and Corporate/Insurance partners across our 5 Tipe C & D hospitals in West Java."}
          </p>
        </div>

        {/* Interactive Branch Switcher Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {BRANCHES.map((branch) => {
            const isSelected = selectedBranchTab === branch.id;
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => setSelectedBranchTab(branch.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#154C96] text-white shadow-lg scale-105"
                    : "bg-white text-[#10162C] hover:bg-[rgba(0,167,156,0.14)] border border-[#B2B5B3]/60"
                }`}
              >
                <FaLocationDot
                  className={isSelected ? "text-[#F69320]" : "text-[#00A79C]"}
                />
                <span>{branch.name}</span>
              </button>
            );
          })}
        </div>

        {/* 5 Branch Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BRANCHES.map((branch) => {
            const isHighlighted = selectedBranchTab === branch.id;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchTab(branch.id)}
                className={`rounded-3xl bg-white transition-all duration-300 overflow-hidden flex flex-col justify-between border-2 ${
                  isHighlighted
                    ? "border-[#00A79C] shadow-2xl ring-4 ring-[#00A79C]/15"
                    : "border-[#E0E4E9] shadow-md hover:border-[#00A79C]/60"
                }`}
              >
                <div>
                  {/* Hospital Image & Status Badges */}
                  <div className="relative h-48 overflow-hidden bg-[#10162C]">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#154C96] text-white shadow">
                        RS {branch.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-[#10162C] shadow">
                        {branch.badge[lang]}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#F69320] text-white flex items-center gap-1.5 shadow">
                        <FaTruckMedical /> {branch.igdStatus[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Branch Info */}
                  <div className="p-6">
                    {/* Proportionate Branch Logo & City Tag */}
                    <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[#E0E4E9]/80">
                      <img
                        src={branch.logoColor}
                        alt={`Logo ${branch.name}`}
                        className="h-11 w-auto object-contain -ml-1.5"
                      />
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[rgba(0,167,156,0.12)] text-[#00A79C] shrink-0">
                        {branch.city}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#10162C]">
                      {branch.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 mt-2 leading-relaxed">
                      {branch.description[lang]}
                    </p>

                    {/* Address & Google Maps Link */}
                    <div className="mt-4 pt-4 border-t border-[#E0E4E9] text-xs font-normal text-[#10162C]/75 space-y-1.5">
                      <div className="flex items-start gap-2">
                        <FaLocationDot className="text-[#00A79C] shrink-0 mt-0.5 text-sm" />
                        <span>{branch.address}</span>
                      </div>
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-medium text-[#154C96] hover:text-[#F69320]"
                      >
                        {lang === "id"
                          ? "Lihat Petunjuk Arah di Google Maps →"
                          : "View Directions on Google Maps →"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons per Branch */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpToDoctorSchedule(branch.id);
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[rgba(0,167,156,0.14)] hover:bg-[#00A79C] text-[#154C96] hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaCalendarCheck />
                    <span>
                      {lang === "id"
                        ? `Jadwal Dokter ${branch.city}`
                        : `Doctor Schedule ${branch.city}`}
                    </span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${
                        branch.whatsapp
                      }?text=${encodeURIComponent(
                        `Halo Tetangga Sehatku Admin ${branch.name}, saya ingin bertanya jadwal & layanan.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-3 rounded-full bg-[#00A79C] hover:bg-[#154C96] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaWhatsapp className="text-sm" />
                      <span>Chat WA Admin</span>
                    </a>

                    <a
                      href={`tel:${branch.ambulancePhone.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-3 rounded-full bg-[#F69320] hover:bg-[#10162C] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaPhoneVolume />
                      <span>IGD / Ambulans</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDrawerBranch(branch);
                    }}
                    className="w-full py-2.5 px-4 rounded-full border border-[#154C96]/30 hover:bg-[#154C96] text-[#154C96] hover:text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    {lang === "id"
                      ? "Lihat Detail Poliklinik & Kamar Cabang →"
                      : "View Branch Polyclinics & Rooms →"}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Expansion Roadmap Info Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#154C96] to-[#10162C] text-white p-7 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <SimpulSupergraphic
              variant="outline-white"
              opacity={0.12}
              className="w-64 h-64 absolute -bottom-10 -right-10"
            />
            <div className="space-y-4 relative z-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium">
                {lang === "id"
                  ? "Komitmen Regional Jawa Barat"
                  : "West Java Regional Commitment"}
              </span>
              <h3 className="text-2xl font-semibold leading-snug">
                {lang === "id"
                  ? "Hadir Menjangkau Lebih Banyak Tetangga di Jawa Barat"
                  : "Expanding Dignified Care Across West Java"}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-white/85 leading-relaxed">
                {lang === "id"
                  ? "Dari Cimahi, Pangalengan, Kuningan, Subang, hingga Cikampek—kami terus bertumbuh menghadirkan rumah sakit yang ramah, terjangkau, dan berstandar klinis tinggi."
                  : "From Cimahi, Pangalengan, Kuningan, Subang, to Cikampek—we continue growing to bring warm, high-standard hospitals closer to communities."}
              </p>
            </div>
            <div className="relative z-10 pt-6 space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs text-xs font-light leading-relaxed">
                “Tujuan kami bukan sekadar membangun gedung rumah sakit,
                melainkan membangun generasi yang lebih sehat untuk Jawa Barat.”
              </div>
              <Link
                href="/investor"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#F69320] hover:text-white transition-colors"
              >
                {lang === "id"
                  ? "Pelajari Ekspansi & Tata Kelola (GCG) →"
                  : "Explore Expansion & Governance →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

