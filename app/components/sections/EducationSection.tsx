"use client";

import React, { useState } from "react";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";
import {
  EDUCATION_ARTICLES,
  SCHEDULE_UPDATES,
} from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";

export const EducationSection: React.FC = () => {
  const { lang } = useAvisena();
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  return (
    <section id="edukasi" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C] leading-tight">
              {lang === "id"
                ? "Obrolan Sehat Tanpa Istilah Rumit"
                : "Everyday Health Wisdom in Plain Words"}
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-[#00A79C] mt-1.5">
              {lang === "id"
                ? "Edukasi Medis Praktis dari Tetangga Sehatmu"
                : "Medical Literacy from Your Healthy Neighbor"}
            </p>
          </div>
          <p className="text-sm font-normal text-[#10162C]/75 max-w-md">
            {lang === "id"
              ? "Ditulis oleh tim medis Avisena menggunakan perumpamaan sehari-hari agar mudah dipahami oleh seluruh anggota keluarga."
              : "Written by Avisena clinicians using relatable analogies for the whole family."}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {EDUCATION_ARTICLES.map((art) => {
            const isExpanded = activeArticleId === art.id;
            return (
              <article
                key={art.id}
                className="rounded-3xl bg-white border border-[#B2B5B3]/40 hover:border-[#00A79C] transition-colors duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#10162C]">
                    <img
                      src={art.image}
                      alt={art.title[lang]}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#154C96] text-white text-xs font-semibold">
                      {art.category[lang]}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#10162C]/65 font-normal">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#10162C] leading-snug">
                      {art.title[lang]}
                    </h3>

                    <p className="text-xs sm:text-sm font-normal text-[#10162C]/80 leading-relaxed">
                      {art.analogySummary[lang]}
                    </p>

                    {isExpanded && (
                      <div className="pt-3 mt-3 space-y-2 bg-[rgba(0,167,156,0.08)] p-4 rounded-2xl">
                        <p className="text-xs font-semibold text-[#154C96]">
                          {lang === "id"
                            ? "Tips Praktis Tetangga Sehatmu:"
                            : "Practical Neighborly Tips:"}
                        </p>
                        <ul className="space-y-1.5 text-xs font-normal text-[#10162C]/85">
                          {art.tips[lang].map((tip) => (
                            <li key={tip} className="flex items-start gap-2">
                              <FaCircleCheck className="text-[#00A79C] shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveArticleId(isExpanded ? null : art.id)
                    }
                    className="text-xs sm:text-sm font-semibold text-[#F69320] hover:text-[#154C96] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>
                      {isExpanded
                        ? lang === "id"
                          ? "Ringkas Artikel"
                          : "Collapse Tips"
                        : lang === "id"
                        ? "Baca Tips Lengkapnya"
                        : "Read Practical Tips"}
                    </span>
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Info Perubahan Jadwal Praktik Dokter Terkini */}
        <div className="rounded-3xl bg-[#E0E4E9]/45 border border-[#B2B5B3]/40 p-6 sm:p-7">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F69320]" />
            <h3 className="text-base sm:text-lg font-semibold text-[#10162C]">
              {lang === "id"
                ? "Info Jadwal Praktik Dokter & Layanan Komunitas Terkini"
                : "Latest Doctor Schedule & Community Service Updates"}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {SCHEDULE_UPDATES.map((upd, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-[#B2B5B3]/35 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-[#154C96]">
                    {upd.branch}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[rgba(0,167,156,0.14)] text-[#00A79C]">
                    {upd.status}
                  </span>
                </div>
                <p className="text-xs font-normal text-[#10162C]/75 leading-relaxed">
                  {upd.notice[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
