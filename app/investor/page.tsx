"use client";

import React from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaBuildingColumns,
  FaFilePdf,
  FaShieldHalved,
  FaHospital,
  FaUsers,
  FaHandHoldingHeart,
  FaCircleCheck,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaHouse,
  FaChevronRight,
} from "react-icons/fa6";
import { BRANCHES } from "../data/avisenaData";
import { useAvisena } from "../components/AvisenaProvider";
import { SimpulSupergraphic } from "../components/SimpulSupergraphic";

export default function InvestorPage() {
  const { lang, openQuickModal, setDrawerBranch } = useAvisena();

  return (
    <div className="bg-white">
      {/* 1. Executive Warm Header */}
      <section className="relative bg-[#E0E4E9]/35 pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <SimpulSupergraphic
          variant="outline-tosca"
          opacity={0.1}
          className="w-96 h-96 absolute -top-20 -right-20 rotate-12"
        />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-light text-[#10162C]/65 mb-6">
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
                ? "Hubungan Investor & Tata Kelola (GCG)"
                : "Investor Relations & Governance"}
            </span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(21,76,150,0.10)] text-[#154C96] text-xs font-medium">
                {lang === "id"
                  ? "Investor Relations • Kemitraan SWEEF & GCG"
                  : "Investor Relations • SWEEF Partnership & GCG"}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#10162C] leading-tight text-balance">
                {lang === "id" ? (
                  <>
                    Pertumbuhan Strategis &{" "}
                    <span className="text-[#154C96] font-bold">
                      Investasi Berkelanjutan
                    </span>{" "}
                    di Jawa Barat
                  </>
                ) : (
                  <>
                    Strategic Growth &{" "}
                    <span className="text-[#154C96] font-bold">
                      Sustainable Healthcare Investment
                    </span>{" "}
                    in West Java
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base font-normal text-[#10162C]/80 leading-relaxed max-w-2xl text-pretty">
                {lang === "id"
                  ? "PT Avisena Medika (Avisena Healthcare Group) memadukan skala ekonomi jaringan 5 rumah sakit di provinsi terpadat Indonesia dengan tata kelola perusahaan yang transparan (Good Corporate Governance) serta dampak sosial pemberdayaan perempuan bersama SWEEF Capital."
                  : "PT Avisena Medika (Avisena Healthcare Group) combines the network scale of 5 hospitals in Indonesia's most populous province with transparent Good Corporate Governance (GCG) and measurable gender-lens social impact with SWEEF Capital."}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => openQuickModal("prospectus")}
                  className="px-6 py-3.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <FaFilePdf />
                  <span>
                    {lang === "id"
                      ? "Unduh Prospektus & Laporan Tahunan"
                      : "Download Prospectus & Annual Report"}
                  </span>
                </button>
                <a
                  href="mailto:cs@rsavisena.co.id?subject=Investor%20Relations%20Inquiry%20-%20Avisena%20Healthcare%20Group"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-[#00A79C] text-[#154C96] hover:text-white border border-[#154C96]/25 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <FaEnvelope />
                  <span>
                    {lang === "id"
                      ? "Hubungi Tim Investor Relations"
                      : "Contact Investor Relations"}
                  </span>
                </a>
              </div>
            </div>

            {/* Key Investment Thesis Metrics Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#00A79C]/30 space-y-5">
                <div className="flex items-center justify-between pb-3">
                  <div>
                    <p className="text-xs font-medium text-[#00A79C]">
                      {lang === "id"
                        ? "Ikhtisar Kinerja Korporasi"
                        : "Corporate Snapshot"}
                    </p>
                    <h2 className="text-lg font-semibold text-[#10162C]">
                      PT Avisena Medika (2026)
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[rgba(246,147,32,0.15)] text-[#F69320] text-xs font-medium">
                    IPO Roadmap Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#E0E4E9]/35">
                    <p className="text-2xl sm:text-3xl font-bold text-[#154C96]">
                      5 RS
                    </p>
                    <p className="text-xs font-normal text-[#10162C]/75 mt-1">
                      {lang === "id"
                        ? "Unit Rumah Sakit Beroperasi di Jawa Barat"
                        : "Operating Hospitals in West Java"}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#E0E4E9]/35">
                    <p className="text-2xl sm:text-3xl font-bold text-[#00A79C]">
                      575+
                    </p>
                    <p className="text-xs font-normal text-[#10162C]/75 mt-1">
                      {lang === "id"
                        ? "Total Kapasitas Tempat Tidur (Bed)"
                        : "Total Inpatient Bed Capacity"}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#E0E4E9]/35">
                    <p className="text-2xl sm:text-3xl font-bold text-[#F69320]">
                      ~50 Juta
                    </p>
                    <p className="text-xs font-normal text-[#10162C]/75 mt-1">
                      {lang === "id"
                        ? "Populasi Pasar Sasaran Jawa Barat"
                        : "West Java Catchment Population"}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#E0E4E9]/35">
                    <p className="text-2xl sm:text-3xl font-bold text-[#154C96]">
                      65%+
                    </p>
                    <p className="text-xs font-normal text-[#10162C]/75 mt-1">
                      {lang === "id"
                        ? "Tenaga Kesehatan & Pimpinan Perempuan"
                        : "Women Healthcare Workforce & Leaders"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tiga Pilar Investasi & Tata Kelola */}
      <section className="py-20 bg-[#154C96] text-white relative overflow-hidden">
        <SimpulSupergraphic
          variant="outline-white"
          opacity={0.08}
          className="w-96 h-96 absolute -bottom-20 -right-20"
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium mb-3">
              {lang === "id"
                ? "3 Pilar Nilai Investor"
                : "3 Core Investment Pillars"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance">
              {lang === "id"
                ? "Fondasi Pertumbuhan yang Terukur & Bertanggung Jawab"
                : "Disciplined Expansion Backed by Transparent Governance"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            <div className="p-7 rounded-3xl bg-[#10162C]/40 border border-white/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold">
                {lang === "id"
                  ? "1. Ekspansi Jaringan Regional"
                  : "1. Regional Network Expansion"}
              </h3>
              <p className="text-sm font-normal text-white/85 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Strategi akuisisi dan pengembangan rumah sakit Tipe C & D di kantong-kantong populasi produktif Jawa Barat (kawasan industri, agribisnis, dan kota satelit)."
                  : "Targeted development and acquisition of Class C & D hospitals across West Java's high-density industrial, agricultural, and urban corridors."}
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white text-[#10162C] border-2 border-[#F69320] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F69320] text-white flex items-center justify-center text-xl">
                <FaBuildingColumns />
              </div>
              <h3 className="text-xl font-semibold text-[#154C96]">
                {lang === "id"
                  ? "2. Investasi Berdampak (SWEEF)"
                  : "2. SWEEF Impact Investment"}
              </h3>
              <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Kemitraan strategis bersama SWEEF Capital yang menempatkan kepemimpinan perempuan, kesejahteraan tenaga medis, serta akses kesehatan inklusif sebagai penggerak nilai perusahaan."
                  : "Strategic partnership with SWEEF Capital placing women's leadership, healthcare workforce wellbeing, and inclusive medical access at the core of enterprise value."}
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#10162C]/40 border border-white/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
                <FaShieldHalved />
              </div>
              <h3 className="text-xl font-semibold">
                {lang === "id"
                  ? "3. Tata Kelola GCG & Kesiapan IPO"
                  : "3. GCG & IPO Readiness"}
              </h3>
              <p className="text-sm font-normal text-white/85 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Penerapan standar audit keuangan independen, komite mutu klinis, kepatuhan regulasi Kemenkes/BPJS, serta pelaporan ESG secara berkala."
                  : "Rigorous independent financial auditing, clinical quality committees, regulatory compliance, and periodic ESG impact reporting."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Portofolio Aset 5 Rumah Sakit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium mb-2">
                {lang === "id"
                  ? "Portofolio Rumah Sakit Aktif"
                  : "Active Hospital Asset Portfolio"}
              </span>
              <h2 className="text-3xl font-semibold text-[#10162C] text-balance">
                {lang === "id"
                  ? "Profil Kapasitas & Segmen Pasar 5 Unit Rumah Sakit"
                  : "Capacity & Market Segment Profile of Our 5 Hospitals"}
              </h2>
            </div>
            <Link
              href="/cabang-rs"
              className="text-xs sm:text-sm font-medium text-[#154C96] hover:text-[#F69320] flex items-center gap-1.5 transition-colors duration-200"
            >
              <span>
                {lang === "id"
                  ? "Lihat Fasilitas Tiap Rumah Sakit"
                  : "View Clinical Facilities by Branch"}
              </span>
              <FaArrowUpRightFromSquare className="text-xs" />
            </Link>
          </div>

          <div data-ui="table" className="overflow-x-auto rounded-3xl border border-[#E0E4E9]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E0E4E9]/60 text-[#154C96] text-xs font-semibold">
                  <th className="py-4 px-5">
                    {lang === "id" ? "Unit Rumah Sakit" : "Hospital Unit"}
                  </th>
                  <th className="py-4 px-5">
                    {lang === "id" ? "Kota / Koridor" : "City / Corridor"}
                  </th>
                  <th className="py-4 px-5">
                    {lang === "id" ? "Klasifikasi" : "Classification"}
                  </th>
                  <th className="py-4 px-5">
                    {lang === "id"
                      ? "Fokus Pasar & Komunitas"
                      : "Key Catchment & Focus"}
                  </th>
                  <th className="py-4 px-5 text-right">
                    {lang === "id" ? "Profil Detail" : "Detail Profile"}
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                {BRANCHES.map((b) => (
                  <tr
                    key={b.id}
                    className="hover:bg-[rgba(0,167,156,0.05)] even:bg-[#E0E4E9]/15 transition-colors duration-200"
                  >
                    <td className="py-4 px-5 font-semibold text-[#10162C]">
                      {b.name}
                    </td>
                    <td className="py-4 px-5 text-[#10162C]/80">{b.city}</td>
                    <td className="py-4 px-5">
                      <span className="px-3 py-1 rounded-full bg-[rgba(21,76,150,0.1)] text-[#154C96] text-xs font-medium">
                        RS {b.type}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-[#10162C]/75">
                      {b.badge[lang]}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        type="button"
                        onClick={() => setDrawerBranch(b)}
                        className="text-xs font-medium text-[#00A79C] hover:text-[#F69320] cursor-pointer transition-colors duration-200"
                      >
                        {lang === "id" ? "Buka Data RS →" : "Open Data →"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Pusat Dokumen GCG, Laporan Tahunan & Kontak Investor */}
      <section className="py-20 bg-[#E0E4E9]/45">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
                {lang === "id"
                  ? "Dokumen & Pelaporan GCG"
                  : "GCG Documents & Disclosures"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10162C] text-balance">
                {lang === "id"
                  ? "Transparansi Informasi bagi Pemangku Kepentingan"
                  : "Transparent Disclosures for Stakeholders"}
              </h2>
              <p className="text-sm font-normal text-[#10162C]/75 leading-relaxed text-pretty">
                {lang === "id"
                  ? "Unduh ringkasan eksekutif, prospektus korporasi, laporan keberlanjutan (ESG & SWEEF Impact), serta pedoman tata kelola perusahaan kami."
                  : "Access our executive summary, corporate prospectus, ESG & SWEEF impact report, and corporate governance charter."}
              </p>

              <div className="pt-2 space-y-2 text-xs font-normal text-[#10162C]/80">
                <div className="flex items-center gap-2">
                  <FaCircleCheck className="text-[#00A79C]" />
                  <span>
                    {lang === "id"
                      ? "Audit Keuangan & Kepatuhan Pajak Terverifikasi"
                      : "Verified Financial Audit & Tax Compliance"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCircleCheck className="text-[#00A79C]" />
                  <span>
                    {lang === "id"
                      ? "Akreditasi Standar Keselamatan Pasien Kemenkes RI"
                      : "Ministry of Health Patient Safety Accreditation"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCircleCheck className="text-[#00A79C]" />
                  <span>
                    {lang === "id"
                      ? "Indikator Dampak Gender & Inklusi Sosial (SWEEF)"
                      : "SWEEF Gender-Lens & Social Inclusion Metrics"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: {
                    id: "Company Prospectus & Executive Profile 2026",
                    en: "Company Prospectus & Executive Profile 2026",
                  },
                  meta: "PDF • 4.2 MB • Bilingual ID/EN",
                  badge: "Utama",
                },
                {
                  title: {
                    id: "Laporan Dampak Sosial & Keberlanjutan (SWEEF ESG)",
                    en: "SWEEF Social Impact & Sustainability Report",
                  },
                  meta: "PDF • 3.1 MB • Impact Metrics",
                  badge: "ESG & SWEEF",
                },
                {
                  title: {
                    id: "Pedoman Good Corporate Governance (GCG Charter)",
                    en: "Good Corporate Governance (GCG) Charter",
                  },
                  meta: "PDF • 1.8 MB • Tata Kelola",
                  badge: "GCG",
                },
                {
                  title: {
                    id: "Ikhtisar Ekspansi 5 Rumah Sakit Avisena Jawa Barat",
                    en: "5-Hospital West Java Network Expansion Fact Sheet",
                  },
                  meta: "PDF • 2.5 MB • Portofolio RS",
                  badge: "Fact Sheet",
                },
              ].map((doc) => (
                <div
                  key={doc.title.id}
                  className="bg-white p-6 rounded-3xl border border-[#E0E4E9] hover:border-[#00A79C] flex flex-col justify-between gap-4 transition-colors duration-200"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[rgba(0,167,156,0.12)] text-[#00A79C] text-[11px] font-medium">
                      {doc.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-[#10162C]">
                      {doc.title[lang]}
                    </h3>
                    <p className="text-xs font-light text-[#10162C]/60">
                      {doc.meta}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openQuickModal("prospectus")}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#E0E4E9]/50 hover:bg-[#F69320] text-[#154C96] hover:text-white text-xs font-medium transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaFilePdf />
                    <span>
                      {lang === "id" ? "Unduh Dokumen" : "Download PDF"}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
