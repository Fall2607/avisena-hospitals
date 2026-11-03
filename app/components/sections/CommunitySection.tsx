"use client";

import React, { useState } from "react";
import {
  FaAward,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import {
  BRANCHES,
  COMMUNITY_TESTIMONIALS,
} from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";

export const CommunitySection: React.FC = () => {
  const { lang, setDrawerBranch } = useAvisena();
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);
  const currentTestimonial = COMMUNITY_TESTIMONIALS[testimonialIndex];

  return (
    <section
      id="komunitas"
      className="py-20 lg:py-28 bg-gradient-to-b from-[rgba(0,167,156,0.10)] via-white to-[#E0E4E9]/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-[#00A79C] text-white text-xs font-medium uppercase tracking-wider mb-3">
            {lang === "id"
              ? "Komunitas & Dampak Sosial (SWEEF Social Impact)"
              : "Our Community & Social Impact"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C]">
            {lang === "id"
              ? "Menjemput Harapan hingga Pelosok Desa & Kembali ke Akar Perjuangan"
              : "Reaching Remote Villages & Returning to Our Roots"}
          </h2>
        </div>

        {/* Two Pillar Impact Stories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Story 1: Mobile Hospital Program */}
          <div className="rounded-3xl bg-white border-2 border-[#00A79C]/30 shadow-xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Mobile Hospital Program - Rumah Sakit Keliling Avisena"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-[#00A79C] text-white text-xs font-medium shadow">
                    {lang === "id"
                      ? "Program Rumah Sakit Keliling"
                      : "Mobile Hospital Program"}
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4">
                <div className="p-4 rounded-2xl bg-[rgba(0,167,156,0.12)] border-l-4 border-[#00A79C] text-sm font-medium text-[#154C96] italic">
                  {lang === "id"
                    ? '“Jangan menunggu pasien datang ke rumah sakit; layanan kesehatanlah yang harus menjemput mereka lebih dulu.”'
                    : '“Do not wait for patients to come to the hospital; healthcare must go out and reach them first.”'}
                </div>

                <h3 className="text-2xl font-semibold text-[#10162C]">
                  {lang === "id"
                    ? "Menghapus Batas Jarak & Biaya di Daerah Terpencil Jawa Barat"
                    : "Bridging Distance & Cost Barriers in Rural West Java"}
                </h3>

                <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed">
                  {lang === "id"
                    ? "Para dokter dan tenaga medis Avisena secara sukarela meluangkan waktu untuk menjangkau warga di desa-desa terpencil dan pegunungan yang sulit diakses di Jawa Barat. Melalui armada Rumah Sakit Keliling, kami membawa pemeriksaan medis esensial, USG ibu hamil, dan obat-obatan langsung ke tengah masyarakat."
                    : "Avisena's doctors and nurses voluntarily dedicate their time to reach residents in remote, hard-to-access villages across West Java. Removing barriers of distance and cost, we bring essential medical screenings and maternal care directly to the community."}
                </p>
              </div>
            </div>

            <div className="px-7 pb-7">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#E0E4E9]/50 text-xs font-medium text-[#154C96]">
                <span>
                  {lang === "id"
                    ? "✓ 120+ Desa Terjangkau di Jawa Barat"
                    : "✓ 120+ Villages Reached in West Java"}
                </span>
                <span>
                  {lang === "id"
                    ? "✓ Pemeriksaan & Pengobatan Sukarela"
                    : "✓ Free Volunteer Medical Outreach"}
                </span>
              </div>
            </div>
          </div>

          {/* Story 2: Kisah Kolaborasi KPBS Pangalengan */}
          <div className="rounded-3xl bg-white border-2 border-[#F69320]/40 shadow-xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Kisah Kolaborasi KPBS Pangalengan dan dr. Lia Yuliana Elsis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-[#F69320] text-white text-xs font-medium shadow">
                    {lang === "id"
                      ? "Full-Circle Journey • Kemitraan KPBS"
                      : "Full-Circle Journey • Working with KPBS"}
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4">
                <div className="p-4 rounded-2xl bg-[rgba(246,147,32,0.15)] border-l-4 border-[#F69320] text-sm font-medium text-[#10162C] italic">
                  {lang === "id"
                    ? '“Dari berjualan susu KPBS setiap akhir pekan demi biaya kuliah kedokteran, hingga kembali membangun rumah sakit bersama KPBS.”'
                    : '“From selling KPBS dairy milk every weekend to fund medical school, to returning years later to build a hospital together.”'}
                </div>

                <h3 className="text-2xl font-semibold text-[#10162C]">
                  {lang === "id"
                    ? "Kisah Kolaborasi RSU Avisena Pangalengan (KPBS Hospital)"
                    : "Working with KPBS: A Full-Circle Journey of Gratitude"}
                </h3>

                <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed">
                  {lang === "id"
                    ? "Saat masih berstatus mahasiswa kedokteran dan menghadapi masa sulit secara finansial, dr. Lia Yuliana Elsis berjualan susu KPBS (Koperasi Peternakan Bandung Selatan) setiap akhir pekan untuk membiayai kuliahnya. Bertahun-tahun kemudian, perjuangan itu terbayar dengan berdirinya RSU Avisena Pangalengan (KPBS Hospital), yang dibangun melalui kolaborasi bersama koperasi yang dulu menopang pendidikannya."
                    : "While struggling financially as a medical student, dr. Lia Yuliana Elsis sold milk from KPBS (South Bandung Dairy Cooperative) every weekend to pay her tuition. Years later, that perseverance came full circle with the founding of RSU Avisena Pangalengan (KPBS Hospital)—built in partnership with the very cooperative that once supported her education."}
                </p>
              </div>
            </div>

            <div className="px-7 pb-7">
              <button
                type="button"
                onClick={() =>
                  setDrawerBranch(
                    BRANCHES.find((b) => b.id === "pangalengan") || BRANCHES[1]
                  )
                }
                className="w-full py-3 px-5 rounded-full bg-[#154C96] hover:bg-[#00A79C] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaAward className="text-[#F69320]" />
                <span>
                  {lang === "id"
                    ? "Lihat Profil RSU Avisena Pangalengan (KPBS) →"
                    : "Explore RSU Avisena Pangalengan (KPBS) →"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Hear From Our Community (Testimonials Carousel) */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E0E4E9] shadow-xl relative overflow-hidden">
          <SimpulSupergraphic
            variant="outline-tosca"
            opacity={0.08}
            className="w-64 h-64 absolute -bottom-12 -right-12"
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#00A79C]">
                {lang === "id"
                  ? "Suara Tetangga • Hear From Our Community"
                  : "Hear From Our Community"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#10162C] mt-1">
                {lang === "id"
                  ? "Cerita Nyata Warga, Pekerja & Peternak Bersama Avisena"
                  : "Real Stories from Neighbors, Workers & Farmers"}
              </h3>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    prev === 0 ? COMMUNITY_TESTIMONIALS.length - 1 : prev - 1
                  )
                }
                aria-label="Testimoni Sebelumnya"
                className="w-11 h-11 rounded-full bg-[#E0E4E9] hover:bg-[#00A79C] text-[#10162C] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex(
                    (prev) => (prev + 1) % COMMUNITY_TESTIMONIALS.length
                  )
                }
                aria-label="Testimoni Selanjutnya"
                className="w-11 h-11 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-5xl sm:text-6xl font-bold leading-none select-none">
                <span className="text-[#00A79C]">“</span>
                <span className="text-[#F69320] text-3xl">”</span>
              </div>

              <p className="text-base sm:text-xl font-normal text-[#10162C]/90 leading-relaxed">
                {currentTestimonial.quote[lang]}
              </p>

              <div className="flex items-center gap-4 pt-3">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#F69320]"
                />
                <div>
                  <h4 className="font-semibold text-base text-[#10162C]">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs font-normal text-[#00A79C]">
                    {currentTestimonial.origin[lang]} •{" "}
                    <span className="font-medium text-[#154C96]">
                      {currentTestimonial.branchTag}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Thumbnails Selector */}
            <div className="lg:col-span-4 space-y-2.5">
              {COMMUNITY_TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTestimonialIndex(idx)}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center gap-3 cursor-pointer border ${
                    idx === testimonialIndex
                      ? "bg-[rgba(0,167,156,0.14)] border-[#00A79C]"
                      : "bg-[#E0E4E9]/35 border-transparent hover:bg-[#E0E4E9]/70"
                  }`}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="overflow-hidden">
                    <p className="text-xs font-medium text-[#10162C] truncate">
                      {t.name}
                    </p>
                    <p className="text-[11px] font-light text-[#10162C]/70 truncate">
                      {t.origin[lang]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

