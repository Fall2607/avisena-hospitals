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
      className="py-20 lg:py-24 bg-[#E0E4E9]/45"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#B2B5B3]/40 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(246,147,32,0.15)] text-[#F69320] text-xs font-semibold">
                <FaBriefcaseMedical />
                <span>Open Recruitment • Karir Insan Avisena</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#10162C] leading-tight">
                {lang === "id" ? (
                  <>
                    <span>Mari Mengabdi &amp; Bertumbuh Bersama Avisena</span>
                    <span className="block text-[#00A79C] font-medium text-xl sm:text-2xl mt-1">
                      Karir Pelayanan Kesehatan di 5 Rumah Sakit Avisena
                    </span>
                  </>
                ) : (
                  <>
                    <span>Grow Your Career with Avisena Healthcare</span>
                    <span className="block text-[#00A79C] font-medium text-xl sm:text-2xl mt-1">
                      Healthcare Opportunities Across 5 Hospital Branches
                    </span>
                  </>
                )}
              </h2>
              <p className="text-sm font-normal text-[#10162C]/75 pt-1">
                {lang === "id"
                  ? "Kami mencari tenaga medis dan profesional berhati hangat dengan penempatan cabang yang jelas di Cimahi, Pangalengan, Kuningan, Subang, dan Cikampek."
                  : "Join our warm, inclusive healthcare team across our 5 hospital branches in West Java."}
              </p>
            </div>

            <a
              href="mailto:cs@rsavisena.co.id?subject=Lamaran%20Karir%20Insan%20Avisena%20-%20%5BPosisi%20%26%20Cabang%5D"
              className="px-6 py-4 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm transition-colors duration-200 flex items-center gap-2 self-start shrink-0"
            >
              <FaEnvelope />
              <span>
                {lang === "id"
                  ? "Kirim CV ke Tim SDM Avisena"
                  : "Send CV to Avisena HR"}
              </span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-4">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-[#E0E4E9]/35 border border-[#B2B5B3]/40 hover:border-[#00A79C] transition-colors duration-200 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#154C96] text-white text-xs font-semibold">
                      {job.placement}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-semibold">
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

                <div className="flex items-center justify-between pt-3 bg-white/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-xs font-normal text-[#10162C]/70">
                    Rekrutmen Resmi Tanpa Biaya Pungutan
                  </span>
                  <a
                    href={`mailto:cs@rsavisena.co.id?subject=${encodeURIComponent(
                      `Lamaran ${job.role.id} - ${job.placement}`
                    )}`}
                    className="text-xs sm:text-sm font-semibold text-[#00A79C] hover:text-[#F69320]"
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
