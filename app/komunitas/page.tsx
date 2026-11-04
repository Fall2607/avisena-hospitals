"use client";

import React from "react";
import Link from "next/link";
import {
  FaHouse,
  FaChevronRight,
  FaTruckMedical,
  FaPeopleGroup,
  FaHandHoldingHeart,
  FaSeedling,
} from "react-icons/fa6";
import { useAvisena } from "../components/AvisenaProvider";
import { CommunitySection } from "../components/sections/CommunitySection";
import { EducationSection } from "../components/sections/EducationSection";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function KomunitasPage() {
  const { lang } = useAvisena();

  return (
    <div className="bg-white">
      {/* 1. Warm Header Khusus Komunitas & Edukasi */}
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
                ? "Komunitas, KPBS & Edukasi"
                : "Community, KPBS & Health Education"}
            </span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00A79C] text-white text-xs font-medium">
              {lang === "id"
                ? "Dampak Sosial SWEEF & Pengabdian Warga"
                : "SWEEF Social Impact & Neighborhood Outreach"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight text-balance">
              {lang === "id"
                ? "Hadir Menjemput Harapan & Berbagi Ilmu Kesehatan Membumi"
                : "Reaching Underserved Communities & Sharing Accessible Health Wisdom"}
            </h1>
            <p className="text-sm sm:text-base font-normal text-[#10162C]/75 leading-relaxed text-pretty">
              {lang === "id"
                ? "Bagi Avisena, kesehatan bukan hanya terjadi di dalam ruang praktik, melainkan hidup di tengah desa, koperasi peternak, posyandu, dan obrolan hangat antar tetangga."
                : "To Avisena, healthcare lives beyond hospital walls, thriving in rural villages, dairy cooperatives, community clinics, and everyday neighborly conversations."}
            </p>
          </div>

          {/* 4 Impact Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <div className="bg-white p-5 rounded-2xl border border-[#E0E4E9] flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[rgba(0,167,156,0.14)] text-[#00A79C] flex items-center justify-center text-lg shrink-0">
                <FaTruckMedical />
              </div>
              <div>
                <p className="text-xl font-bold text-[#10162C]">120+ Desa</p>
                <p className="text-xs font-normal text-[#10162C]/70">
                  {lang === "id"
                    ? "Dijangkau RS Keliling"
                    : "Reached by Mobile Hospital"}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E0E4E9] flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[rgba(246,147,32,0.15)] text-[#F69320] flex items-center justify-center text-lg shrink-0">
                <FaPeopleGroup />
              </div>
              <div>
                <p className="text-xl font-bold text-[#10162C]">4.500+ Keluarga</p>
                <p className="text-xs font-normal text-[#10162C]/70">
                  {lang === "id"
                    ? "Peternak & Anggota KPBS"
                    : "KPBS Dairy Farmer Families"}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E0E4E9] flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[rgba(21,76,150,0.12)] text-[#154C96] flex items-center justify-center text-lg shrink-0">
                <FaHandHoldingHeart />
              </div>
              <div>
                <p className="text-xl font-bold text-[#10162C]">250+ Kader</p>
                <p className="text-xs font-normal text-[#10162C]/70">
                  {lang === "id"
                    ? "Pemberdayaan Perempuan"
                    : "Women Health Champions"}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E0E4E9] flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[rgba(0,167,156,0.14)] text-[#00A79C] flex items-center justify-center text-lg shrink-0">
                <FaSeedling />
              </div>
              <div>
                <p className="text-xl font-bold text-[#10162C]">5 Cabang RS</p>
                <p className="text-xs font-normal text-[#10162C]/70">
                  {lang === "id"
                    ? "Isi Ulang Air Tumbler Gratis"
                    : "Free Eco Tumbler Refill"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Kisah RS Keliling, Kolaborasi KPBS & Suara Tetangga */}
      <CommunitySection />

      {/* 3. Artikel Edukasi Kesehatan & Papan Jadwal */}
      <EducationSection />
    </div>
  );
}
