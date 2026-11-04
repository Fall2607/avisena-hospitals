"use client";

import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHospital,
  FaChildren,
  FaHeartPulse,
  FaStethoscope,
  FaTruckMedical,
  FaMagnifyingGlass,
  FaXmark,
  FaBottleWater,
  FaCakeCandles,
  FaBed,
  FaCircleCheck,
} from "react-icons/fa6";
import {
  SPECIALTIES_DATA,
  INPATIENT_ROOMS,
  ServiceFocusGroup,
} from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";

export const SpecialtiesSection: React.FC = () => {
  const { lang, openQuickModal } = useAvisena();

  const [serviceCategory, setServiceCategory] = useState<
    "all" | "poliklinik" | "penunjang"
  >("all");
  const [serviceFocus, setServiceFocus] = useState<"all" | ServiceFocusGroup>(
    "all"
  );
  const [serviceBranch, setServiceBranch] = useState<string>("ALL");
  const [serviceSearch, setServiceSearch] = useState<string>("");
  const [openRoomId, setOpenRoomId] = useState<string>("vip");

  const filteredSpecialties = useMemo(() => {
    return SPECIALTIES_DATA.filter((item) => {
      const matchCat =
        serviceCategory === "all" || item.category === serviceCategory;
      const matchFocus =
        serviceFocus === "all" || item.focusGroup === serviceFocus;
      const matchBranch =
        serviceBranch === "ALL" || item.branches.includes(serviceBranch);
      const q = serviceSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.name[lang].toLowerCase().includes(q) ||
        item.simpleAnalogy[lang].toLowerCase().includes(q) ||
        item.symptomTags[lang].some((tag) => tag.toLowerCase().includes(q));
      return matchCat && matchFocus && matchBranch && matchSearch;
    });
  }, [serviceCategory, serviceFocus, serviceBranch, serviceSearch, lang]);

  const activeRoom =
    INPATIENT_ROOMS.find((r) => r.id === openRoomId) || INPATIENT_ROOMS[0];

  return (
    <section
      id="layanan"
      className="py-20 lg:py-24 bg-[#E0E4E9]/45 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* A. Direktori Layanan & Spesialis */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C] leading-tight">
                {lang === "id"
                  ? "Direktori Layanan Medis Lengkap dan Membumi"
                  : "Comprehensive Medical Care Explained Simply"}
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#10162C]/75 mt-2">
                {lang === "id"
                  ? "Temukan poliklinik spesialis dan fasilitas penunjang di 5 cabang RS Avisena."
                  : "Find specialist clinics and diagnostic support across 5 Avisena hospitals."}
              </p>
            </div>

            {/* Toggle Category */}
            <div className="flex flex-wrap sm:inline-flex rounded-2xl sm:rounded-full bg-white p-1.5 border border-[#B2B5B3]/50 self-start max-w-full gap-1">
              {[
                {
                  id: "all",
                  label: { id: "Semua Layanan", en: "All Services" },
                },
                {
                  id: "poliklinik",
                  label: {
                    id: "Poliklinik Spesialis",
                    en: "Specialist Clinics",
                  },
                },
                {
                  id: "penunjang",
                  label: {
                    id: "Penunjang & IGD 24 Jam",
                    en: "24/7 Support & ER",
                  },
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setServiceCategory(tab.id as typeof serviceCategory)
                  }
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    serviceCategory === tab.id
                      ? "bg-[#154C96] text-white"
                      : "text-[#10162C]/75 hover:text-[#10162C]"
                  }`}
                >
                  {tab.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Smart Guided Filter Bar */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#B2B5B3]/40 space-y-5 mb-8">
            {/* Row 1: Filter Fokus Kebutuhan Kesehatan */}
            <div>
              <p className="text-sm font-semibold text-[#154C96] mb-2.5">
                {lang === "id"
                  ? "1. Pilih Berdasarkan Fokus Kebutuhan Kesehatan Keluarga:"
                  : "1. Filter by Family Health Focus:"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {[
                  {
                    id: "all" as const,
                    title: { id: "Semua Layanan", en: "All Services" },
                    desc: {
                      id: "16 Poliklinik & Penunjang",
                      en: "16 Clinics & Facilities",
                    },
                    icon: <FaHospital />,
                  },
                  {
                    id: "ibu-anak" as const,
                    title: { id: "Ibu & Anak", en: "Mother & Child" },
                    desc: {
                      id: "Pediatri & Obgyn",
                      en: "Pediatrics & Obgyn",
                    },
                    icon: <FaChildren />,
                  },
                  {
                    id: "dewasa-jantung" as const,
                    title: {
                      id: "Jantung & Saraf",
                      en: "Cardio & Neuro",
                    },
                    desc: {
                      id: "Kardiologi & Saraf",
                      en: "Cardiology & Neurology",
                    },
                    icon: <FaHeartPulse />,
                  },
                  {
                    id: "bedah-indra" as const,
                    title: {
                      id: "Bedah & Penyakit Dalam",
                      en: "Surgery & Internal",
                    },
                    desc: {
                      id: "Bedah & Interna",
                      en: "General Surgery & Interna",
                    },
                    icon: <FaStethoscope />,
                  },
                  {
                    id: "darurat-mcu" as const,
                    title: {
                      id: "IGD & Penunjang 24 Jam",
                      en: "24/7 ER & Support",
                    },
                    desc: {
                      id: "Laboratorium & Radiologi",
                      en: "Lab & Digital Radiology",
                    },
                    icon: <FaTruckMedical />,
                  },
                ].map((focus) => {
                  const isActive = serviceFocus === focus.id;
                  return (
                    <button
                      key={focus.id}
                      type="button"
                      onClick={() => setServiceFocus(focus.id)}
                      className={`p-3.5 rounded-2xl text-left transition-colors duration-200 cursor-pointer border flex items-start gap-3 ${
                        isActive
                          ? "bg-[#154C96] text-white border-[#154C96]"
                          : "bg-[#E0E4E9]/35 hover:bg-[rgba(0,167,156,0.1)] text-[#10162C] border-[#B2B5B3]/40"
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 mt-0.5 ${
                          isActive
                            ? "bg-[#00A79C] text-white"
                            : "bg-white text-[#00A79C] border border-[#B2B5B3]/30"
                        }`}
                      >
                        {focus.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold leading-snug">
                          {focus.title[lang]}
                        </p>
                        <p
                          className={`text-xs mt-0.5 truncate ${
                            isActive ? "text-white/80" : "text-[#10162C]/65"
                          }`}
                        >
                          {focus.desc[lang]}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 2: Pencarian Keluhan + Filter Ketersediaan Cabang RS */}
            <div className="pt-4 bg-[#E0E4E9]/20 p-4 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full min-w-0">
              {/* Search Input */}
              <div className="flex-1 w-full min-w-0 space-y-2.5">
                <div className="relative w-full min-w-0">
                  <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A79C]" />
                  <input
                    type="text"
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    placeholder={
                      lang === "id"
                        ? "Ketik keluhan atau layanan (contoh: USG 4D, Demam Anak, Vertigo, Diabetes, MCU)..."
                        : "Type a symptom or clinic (e.g., 4D Ultrasound, Child Fever, Vertigo, Diabetes, MCU)..."
                    }
                    className="w-full min-w-0 max-w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-[#B2B5B3]/60 text-xs sm:text-sm font-normal focus:outline-none focus:border-[#00A79C] transition-colors"
                  />
                  {serviceSearch && (
                    <button
                      type="button"
                      onClick={() => setServiceSearch("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#10162C]/50 hover:text-[#10162C] text-sm cursor-pointer"
                    >
                      <FaXmark />
                    </button>
                  )}
                </div>
              </div>

              {/* Branch Availability Pills */}
              <div className="w-full lg:w-auto shrink-0 space-y-1.5">
                <p className="text-xs font-semibold text-[#154C96]">
                  {lang === "id"
                    ? "2. Filter Cabang RS:"
                    : "2. Filter by Hospital:"}
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: "ALL", label: lang === "id" ? "Semua" : "All" },
                    { id: "Cimahi", label: "Cimahi" },
                    { id: "Pangalengan", label: "Pangalengan" },
                    { id: "Kuningan", label: "Kuningan" },
                    { id: "Subang", label: "Subang" },
                    { id: "Cikampek", label: "Cikampek" },
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setServiceBranch(b.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer ${
                        serviceBranch === b.id
                          ? "bg-[#00A79C] text-white"
                          : "bg-white text-[#10162C]/80 border border-[#B2B5B3]/40 hover:bg-[#154C96] hover:text-white"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid Ikon Layanan */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.map((spec) => (
              <div
                key={spec.id}
                className="bg-white p-6 rounded-3xl border border-[#B2B5B3]/40 hover:border-[#00A79C] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                        spec.category === "poliklinik"
                          ? "bg-[rgba(0,167,156,0.15)] text-[#00A79C]"
                          : "bg-[rgba(246,147,32,0.15)] text-[#F69320]"
                      }`}
                    >
                      <FaStethoscope />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E0E4E9]/60 text-[#154C96]">
                      {spec.category === "poliklinik"
                        ? "Poliklinik Spesialis"
                        : "Penunjang Medis"}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#10162C]">
                    {spec.name[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-[#10162C]/80 mt-2 leading-relaxed">
                    {spec.simpleAnalogy[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {spec.symptomTags[lang].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-normal bg-[rgba(0,167,156,0.1)] text-[#00A79C]"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 bg-[#E0E4E9]/30 -mx-6 -mb-6 p-4 rounded-b-3xl flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {spec.branches.map((city) => (
                      <span
                        key={city}
                        className="px-2 py-0.5 rounded-full text-xs font-normal bg-white text-[#154C96] border border-[#154C96]/20"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      openQuickModal("appointment", spec.name[lang])
                    }
                    className="text-xs sm:text-sm font-semibold text-[#F69320] hover:text-[#154C96] shrink-0 cursor-pointer"
                  >
                    {lang === "id" ? "Daftar →" : "Book →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B. Sentuhan Khas Avisena (Solid #154C96 field, no gradient) */}
        <div className="rounded-3xl bg-[#154C96] text-white p-8 lg:p-10 relative overflow-hidden border border-[#154C96]">
          <SimpulSupergraphic
            variant="outline-white"
            opacity={0.12}
            className="w-72 h-72 absolute -top-10 -right-10"
          />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
              {lang === "id"
                ? "Sentuhan Khas: Kejutan Hangat di Setiap Cabang Avisena"
                : "Avisena Signature: Thoughtful Neighborly Touches"}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F69320] text-white flex items-center justify-center text-lg">
                  <FaBottleWater />
                </div>
                <h4 className="font-semibold text-base">
                  {lang === "id"
                    ? "Gratis Isi Ulang Air Minum (Bawa Tumbler)"
                    : "Free Water Refill Stations (Bring Your Tumbler)"}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-white/85 leading-relaxed">
                  {lang === "id"
                    ? "Mendukung gaya hidup sehat & ramah lingkungan—seluruh pengunjung dan keluarga pasien dapat mengisi ulang air minum secara gratis menggunakan tumbler di area RS."
                    : "Supporting eco-friendly wellness—visitors and patient families enjoy free drinking water refills using their personal tumblers across all branches."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F69320] text-white flex items-center justify-center text-lg">
                  <FaCakeCandles />
                </div>
                <h4 className="font-semibold text-base">
                  {lang === "id"
                    ? "Promo Spesial MCU di Hari Ulang Tahun"
                    : "Special Birthday Medical Check-Up Promo"}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-white/85 leading-relaxed">
                  {lang === "id"
                    ? "Kado sehat dari Tetangga Sehatmu! Nikmati potongan khusus paket Medical Check-Up (MCU) di bulan ulang tahun Anda."
                    : "A healthy birthday gift from your neighbor! Enjoy special privileges on Medical Check-Up packages during your birthday month."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F69320] text-white flex items-center justify-center text-lg">
                  <FaChildren />
                </div>
                <h4 className="font-semibold text-base">
                  {lang === "id"
                    ? "Khitanan Massal & Senam Tetangga Sehat"
                    : "Community Circumcision & Morning Wellness"}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-white/85 leading-relaxed">
                  {lang === "id"
                    ? "Program rutin bakti sosial khitanan massal anak, penyuluhan gizi posyandu, dan senam sehat bersama warga sekitar rumah sakit."
                    : "Regular community circumcision drives, Posyandu child nutrition workshops, and weekend wellness exercises with local residents."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* C. Interactive Accordion Kelas Kamar Rawat Inap */}
        <div className="bg-white rounded-3xl p-7 lg:p-10 border border-[#B2B5B3]/40">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Accordion */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Ruang Rawat Inap Hangat Seperti di Rumah Sendiri"
                  : "Inpatient Rooms with the Healing Warmth of Home"}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-[#10162C]/70">
                {lang === "id"
                  ? "Pilih kelas kamar untuk melihat fasilitas dan suasana ruangan:"
                  : "Select each room class below to explore its amenities and healing atmosphere:"}
              </p>

              <div className="space-y-3 pt-2">
                {INPATIENT_ROOMS.map((room) => {
                  const isOpen = openRoomId === room.id;
                  return (
                    <div
                      key={room.id}
                      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                        isOpen
                          ? "border-[#00A79C] bg-[rgba(0,167,156,0.08)]"
                          : "border-[#B2B5B3]/40 bg-white hover:border-[#00A79C]/50"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenRoomId(room.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-xl flex items-center justify-center text-base ${
                              isOpen
                                ? "bg-[#00A79C] text-white"
                                : "bg-[#E0E4E9]/60 text-[#154C96]"
                            }`}
                          >
                            <FaBed />
                          </span>
                          <div>
                            <h4 className="text-sm sm:text-base font-semibold text-[#10162C]">
                              {room.name[lang]}
                            </h4>
                            <p className="text-xs font-normal text-[#10162C]/70">
                              {room.capacity[lang]}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            isOpen
                              ? "bg-[#00A79C] text-white"
                              : "bg-[#E0E4E9] text-[#154C96]"
                          }`}
                        >
                          {room.badge[lang]}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-3 text-xs sm:text-sm font-normal text-[#10162C]/80 space-y-3 bg-white/70">
                              <p className="leading-relaxed">
                                {room.description[lang]}
                              </p>
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {room.features[lang].map((feat) => (
                                  <li
                                    key={feat}
                                    className="flex items-center gap-2 text-xs font-normal"
                                  >
                                    <FaCircleCheck className="text-[#00A79C] shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Photo Framed in Lengkungan Simpul Kepedulian Avisena */}
            <div className="lg:col-span-6 relative">
              <SimpulSupergraphic
                variant="color"
                opacity={0.18}
                className="w-48 h-48 absolute -top-8 -right-8"
              />
              <div className="simpul-frame overflow-hidden border-4 border-[#00A79C]/40 bg-[#10162C] relative">
                <img
                  src={activeRoom.image}
                  alt={activeRoom.name[lang]}
                  className="w-full h-[320px] sm:h-[360px] object-cover"
                />
                {/* Clean solid bottom caption without overlay gradient */}
                <div className="p-4 bg-[#10162C] text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#F69320] text-white text-xs font-semibold">
                      {activeRoom.badge[lang]}
                    </span>
                    <h4 className="text-lg font-semibold mt-2">
                      {activeRoom.name[lang]}
                    </h4>
                    <p className="text-xs font-normal text-white/80">
                      {activeRoom.capacity[lang]}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openQuickModal("visitor")}
                    className="px-4 py-2 rounded-full bg-white text-[#154C96] hover:bg-[#00A79C] hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer shrink-0"
                  >
                    {lang === "id"
                      ? "Info Jam Besuk →"
                      : "Visiting Hours →"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
