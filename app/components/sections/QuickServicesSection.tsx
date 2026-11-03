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
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium uppercase tracking-wider mb-2">
              {lang === "id"
                ? "Layanan Cepat Pasien"
                : "Quick Patient Services"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C]">
              {lang === "id"
                ? "Apa yang Bisa Tetangga Sehatmu Bantu Hari Ini?"
                : "How Can Your Healthy Neighbor Help You Today?"}
            </h2>
          </div>
          <p className="text-sm font-normal text-[#10162C]/70 max-w-md">
            {lang === "id"
              ? "Akses cepat satu sentuhan untuk kebutuhan harian pasien dan keluarga tanpa istilah medis yang membingungkan."
              : "One-touch access for your everyday healthcare needs, designed with clarity and warmth."}
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
              className={`group relative p-7 rounded-3xl border ${item.bgClass} hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer`}
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-[#154C96] text-xs font-medium mb-4 shadow-2xs">
                  {item.tag[lang]}
                </span>
                <h3 className="text-xl font-semibold text-[#10162C] group-hover:text-[#154C96] transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-sm font-normal text-[#10162C]/75 mt-2 leading-relaxed pr-10">
                  {item.subtitle[lang]}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6">
                <span className="text-xs font-medium text-[#154C96] group-hover:underline">
                  {lang === "id" ? "Buka Layanan" : "Open Service"}
                </span>
                <span className="w-11 h-11 rounded-full bg-[#F69320] group-hover:bg-[#154C96] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all">
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

