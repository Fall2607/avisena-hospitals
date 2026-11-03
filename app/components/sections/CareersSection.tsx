"use client";

import React from "react";
import { FaBriefcaseMedical, FaEnvelope } from "react-icons/fa6";
import { CAREER_OPENINGS } from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";

export const CareersSection: React.FC = () => {
  const { lang } = useAvisena();

  return (
    <section
      id="karir"
      className="py-20 lg:py-24 bg-gradient-to-br from-[#E0E4E9]/60 to-[rgba(21,76,150,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-white border-2 border-[#00A79C]/30 p-8 lg:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E0E4E9]">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(246,147,32,0.15)] text-[#F69320] text-xs font-medium uppercase tracking-wider">
                <FaBriefcaseMedical />
                <span>Open Recruitment • Karir Insan Avisena</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Mari Mengabdi & Bertumbuh Bersama Keluarga Besar Avisena Healthcare Group"
                  : "Grow Your Career with the Avisena Healthcare Group Family"}
              </h2>
              <p className="text-sm font-normal text-[#10162C]/75">
                {lang === "id"
                  ? "Kami mencari tenaga medis dan profesional berhati hangat dengan penempatan cabang yang jelas di Cimahi, Pangalengan, Kuningan, Subang, dan Cikampek."
                  : "Join our warm, inclusive healthcare team across our 5 hospital branches in West Java."}
              </p>
            </div>

            <a
              href="mailto:cs@rsavisena.co.id?subject=Lamaran%20Karir%20Insan%20Avisena%20-%20%5BPosisi%20%26%20Cabang%5D"
              className="px-6 py-4 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm shadow-lg transition-colors flex items-center gap-2 self-start shrink-0"
            >
              <FaEnvelope />
              <span>
                {lang === "id"
                  ? "Kirim CV ke Tim SDM Avisena"
                  : "Send CV to Avisena HR"}
              </span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-[#E0E4E9]/35 border border-[#E0E4E9] hover:border-[#00A79C] transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#154C96] text-white text-xs font-medium">
                      {job.placement}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium">
                      {job.type} • {job.department[lang]}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#10162C] mt-2">
                    {job.role[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 mt-1.5 leading-relaxed">
                    {job.qualification[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#B2B5B3]/40">
                  <span className="text-[11px] font-light text-[#10162C]/65">
                    Rekrutmen Resmi Tanpa Biaya Pungutan
                  </span>
                  <a
                    href={`mailto:cs@rsavisena.co.id?subject=${encodeURIComponent(
                      `Lamaran ${job.role.id} - ${job.placement}`
                    )}`}
                    className="text-xs font-medium text-[#00A79C] hover:text-[#F69320]"
                  >
                    {lang === "id" ? "Lamar Posisi Ini →" : "Apply Now →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

