"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { BENTO_SERVICES } from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";

export const QuickServicesSection: React.FC = () => {
  const { lang, openQuickModal } = useAvisena();
  const router = useRouter();

  return (
    <section className="relative z-10 py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C] leading-tight">
              {lang === "id"
                ? "Apa yang Bisa Tetangga Sehatmu Bantu Hari Ini?"
                : "How Can Your Healthy Neighbor Help You Today?"}
            </h2>
            <p className="text-sm sm:text-base font-normal text-[#10162C]/75 mt-2">
              {lang === "id"
                ? "Layanan Cepat Pasien: satu sentuhan untuk kebutuhan harian tanpa antrean panjang."
                : "Quick Patient Access: one-touch pathways for everyday care without confusing terms."}
            </p>
          </div>
          <p className="text-sm font-normal text-[#10162C]/70 max-w-md">
            {lang === "id"
              ? "Akses langsung terhubung ke layanan IGD 24 jam, pendaftaran poliklinik, konsultasi dokter, dan informasi BPJS."
              : "Direct access connected to 24/7 ER, polyclinic booking, doctor consultation, and BPJS information."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENTO_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.actionType === "education") {
                  const el = document.getElementById("edukasi");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    router.push("/komunitas#edukasi");
                  }
                } else {
                  openQuickModal(item.actionType);
                }
              }}
              className={`group relative p-7 rounded-3xl border border-[#B2B5B3]/40 ${item.bgClass} hover:border-[#00A79C] transition-colors duration-200 flex flex-col justify-between min-h-[220px] cursor-pointer`}
            >
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#154C96] text-xs font-semibold mb-4 border border-[#B2B5B3]/40">
                  {item.tag[lang]}
                </span>
                <h3 className="text-xl font-semibold text-[#10162C] group-hover:text-[#154C96] transition-colors duration-200">
                  {item.title[lang]}
                </h3>
                <p className="text-sm font-normal text-[#10162C]/80 mt-2 leading-relaxed pr-8">
                  {item.subtitle[lang]}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6">
                <span className="text-sm font-medium text-[#154C96] group-hover:underline">
                  {lang === "id" ? "Buka Layanan" : "Open Service"}
                </span>
                <span className="w-11 h-11 rounded-full bg-[#F69320] group-hover:bg-[#154C96] text-white flex items-center justify-center transition-colors duration-200">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
