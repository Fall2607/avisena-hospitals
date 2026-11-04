"use client";

import React from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaBuildingColumns,
  FaFilePdf,
  FaShieldHalved,
} from "react-icons/fa6";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";

export const InvestorSection: React.FC = () => {
  const { lang, openQuickModal } = useAvisena();

  return (
    <section
      id="investor"
      className="py-20 lg:py-28 bg-[#154C96] text-white relative overflow-hidden"
    >
      <SimpulSupergraphic
        variant="outline-white"
        opacity={0.09}
        className="w-96 h-96 absolute -top-20 -right-20"
      />
      <SimpulSupergraphic
        variant="outline-tosca"
        opacity={0.14}
        className="w-80 h-80 absolute -bottom-20 -left-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Strategic Growth &amp; Investment
          </h2>
          <p className="text-base sm:text-lg font-normal text-white/85 mt-3">
            {lang === "id"
              ? "Transformasi layanan kesehatan inklusif, hubungan investor, dan tata kelola GCG di Jawa Barat."
              : "Inclusive healthcare transformation, investor relations, and corporate governance in West Java."}
          </p>
        </div>

        {/* 3 Fokus Utama Investor */}
        <div className="grid md:grid-cols-3 gap-7">
          <div className="p-8 rounded-3xl bg-white/10 border border-white/15 hover:border-[#00A79C] transition-colors duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-2xl">
                <FaChartLine />
              </div>
              <h3 className="text-2xl font-semibold">
                {lang === "id"
                  ? "Hospital Network & Expansion"
                  : "Branch Expansion"}
              </h3>
              <p className="text-sm font-normal text-white/85 leading-relaxed">
                {lang === "id"
                  ? "Mengelola 5 rumah sakit aktif di Jawa Barat (Cimahi, Pangalengan, Kuningan, Subang, Cikampek) dengan peta jalan ekspansi terukur menuju kota dan kabupaten strategis lainnya."
                  : "Operating 5 established hospitals across West Java (Cimahi, Pangalengan, Kuningan, Subang, Cikampek) with a disciplined roadmap for new regional branches."}
              </p>
            </div>
            <div className="pt-6 mt-6 bg-white/5 -mx-8 -mb-8 p-6 rounded-b-3xl text-xs font-semibold text-[#00A79C] flex items-center justify-between">
              <span>5 Active Hospitals • 575+ Total Beds</span>
              <Link href="/cabang-rs" className="text-white hover:underline">
                {lang === "id" ? "Lihat Peta →" : "View Network →"}
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white text-[#10162C] border-4 border-[#F69320] flex flex-col justify-between relative">
            <span className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-semibold">
              SWEEF Social Impact
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F69320] text-white flex items-center justify-center text-2xl">
                <FaBuildingColumns />
              </div>
              <h3 className="text-2xl font-semibold text-[#154C96]">
                {lang === "id"
                  ? "Peluang Investasi (Investment)"
                  : "Investment Opportunities"}
              </h3>
              <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed">
                {lang === "id"
                  ? "Model investasi berkelanjutan yang memadukan nilai finansial jangka panjang, pemberdayaan ekonomi perempuan, dan dampak sosial nyata menuju kesiapan IPO."
                  : "Sustainable investment models focused on long-term value, women's economic empowerment, and measurable social impact on the path toward IPO."}
              </p>
            </div>
            <div className="pt-6 mt-6">
              <button
                type="button"
                onClick={() => openQuickModal("prospectus")}
                className="w-full py-3.5 px-5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaFilePdf />
                <span>
                  {lang === "id"
                    ? "Unduh Company Prospectus / Annual Report"
                    : "Download Prospectus / Annual Report"}
                </span>
              </button>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/10 border border-white/15 hover:border-[#00A79C] transition-colors duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-2xl">
                <FaShieldHalved />
              </div>
              <h3 className="text-2xl font-semibold">
                {lang === "id"
                  ? "Governance (Tata Kelola / GCG)"
                  : "Corporate Governance (GCG)"}
              </h3>
              <p className="text-sm font-normal text-white/85 leading-relaxed">
                {lang === "id"
                  ? "Komitmen penuh terhadap Good Corporate Governance (GCG) profesional untuk menjamin transparansi, akuntabilitas klinis maupun finansial, serta kepercayaan seluruh pemangku kepentingan."
                  : "Unwavering commitment to professional Good Corporate Governance (GCG), ensuring clinical and financial transparency, accountability, and stakeholder trust."}
              </p>
            </div>
            <div className="pt-6 mt-6 bg-white/5 -mx-8 -mb-8 p-6 rounded-b-3xl text-xs font-semibold text-[#F69320] flex items-center justify-between">
              <span>Audit &amp; ESG Compliance Ready</span>
              <button
                type="button"
                onClick={() => openQuickModal("prospectus")}
                className="text-white hover:underline cursor-pointer"
              >
                {lang === "id" ? "Laporan GCG →" : "GCG Charter →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
