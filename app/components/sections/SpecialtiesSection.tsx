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
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-20">
        {/* A. Direktori Layanan & Spesialis */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium uppercase tracking-wider mb-2">
                {lang === "id"
                  ? "Direktori Layanan & Fasilitas"
                  : "Medical Specialties & Facilities Directory"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Layanan Medis Lengkap dengan Bahasa yang Membumi"
                  : "Comprehensive Care Explained Simply"}
              </h2>
            </div>

            {/* Toggle Category */}
            <div className="inline-flex rounded-full bg-white p-1.5 border border-[#B2B5B3]/50 shadow-2xs self-start">
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
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
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

          {/* Smart Guided Filter Bar: Fokus Kebutuhan Keluarga, Ketersediaan Cabang & Keluhan Cepat */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E0E4E9] shadow-xs space-y-5 mb-8">
            {/* Row 1: Filter Fokus Kebutuhan Kesehatan */}
            <div>
              <p className="text-xs font-medium text-[#154C96] uppercase tracking-wider mb-2.5">
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
                    title: {
                      id: "Ibu, Anak & Gizi",
                      en: "Mother, Child & Diet",
                    },
                    desc: {
                      id: "Obgyn, Anak, Gizi Klinik",
                      en: "Obgyn, Pediatrics, Nutrition",
                    },
                    icon: <FaChildren />,
                  },
                  {
                    id: "dewasa-jantung" as const,
                    title: {
                      id: "Penyakit Dalam & Jantung",
                      en: "Internal, Heart & Nerve",
                    },
                    desc: {
                      id: "Interna, Jantung, Saraf",
                      en: "Internal, Cardio, Neuro",
                    },
                    icon: <FaHeartPulse />,
                  },
                  {
                    id: "bedah-indra" as const,
                    title: {
                      id: "Bedah, Gigi & Pemulihan",
                      en: "Surgery, Dental & Rehab",
                    },
                    desc: {
                      id: "Bedah, Gigi, Mata, THT, Fisio",
                      en: "Surgery, Eye, ENT, Physio",
                    },
                    icon: <FaStethoscope />,
                  },
                  {
                    id: "darurat-mcu" as const,
                    title: {
                      id: "IGD 24 Jam, Lab & MCU",
                      en: "24/7 ER, Lab & Check-Up",
                    },
                    desc: {
                      id: "IGD, MCU, Lab, Farmasi, ICU",
                      en: "ER, MCU, Lab, Pharmacy, ICU",
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
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex items-start gap-3 ${
                        isActive
                          ? "bg-[#154C96] text-white border-[#154C96] shadow-md"
                          : "bg-[#E0E4E9]/35 hover:bg-[rgba(0,167,156,0.1)] text-[#10162C] border-[#E0E4E9]"
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 mt-0.5 ${
                          isActive
                            ? "bg-[#00A79C] text-white"
                            : "bg-white text-[#00A79C] shadow-2xs"
                        }`}
                      >
                        {focus.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-snug">
                          {focus.title[lang]}
                        </p>
                        <p
                          className={`text-[11px] font-light mt-0.5 truncate ${
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
            <div className="pt-4 border-t border-[#E0E4E9] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Search Input + Quick Symptom Tags */}
              <div className="flex-1 space-y-2.5">
                <div className="relative">
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
                    className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#E0E4E9]/35 border border-[#B2B5B3]/60 text-xs sm:text-sm font-normal focus:outline-none focus:border-[#00A79C] focus:bg-white transition-colors"
                  />
                  {serviceSearch && (
                    <button
                      type="button"
                      onClick={() => setServiceSearch("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#10162C]/50 hover:text-[#F69320] cursor-pointer"
                      aria-label="Hapus pencarian"
                    >
                      <FaXmark />
                    </button>
                  )}
                </div>

                {/* Quick Symptom Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-light text-[#10162C]/60 mr-1">
                    {lang === "id"
                      ? "Keluhan Populer:"
                      : "Popular Symptoms:"}
                  </span>
                  {(lang === "id"
                    ? [
                        "USG 4D Kehamilan",
                        "Imunisasi Anak",
                        "Diabetes & Kolesterol",
                        "Vertigo & Sakit Kepala",
                        "Nyeri Pinggang & Sendi",
                        "Diskon Ulang Tahun",
                      ]
                    : [
                        "4D Pregnancy Ultrasound",
                        "Child Immunization",
                        "Diabetes & Cholesterol",
                        "Vertigo & Migraine",
                        "Back & Joint Pain",
                        "Birthday Promo",
                      ]
                  ).map((chip) => {
                    const activeChip =
                      serviceSearch.toLowerCase() === chip.toLowerCase();
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() =>
                          setServiceSearch(activeChip ? "" : chip)
                        }
                        className={`px-2.5 py-1 rounded-full text-[11px] font-normal transition-colors cursor-pointer ${
                          activeChip
                            ? "bg-[#F69320] text-white font-medium"
                            : "bg-[#E0E4E9]/60 hover:bg-[rgba(0,167,156,0.15)] text-[#10162C]/80 hover:text-[#154C96]"
                        }`}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Branch Availability Pills */}
              <div className="lg:border-l lg:border-[#E0E4E9] lg:pl-5 shrink-0">
                <p className="text-[11px] font-medium text-[#154C96] uppercase tracking-wider mb-2">
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
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        serviceBranch === b.id
                          ? "bg-[#00A79C] text-white shadow-2xs"
                          : "bg-[#E0E4E9]/60 text-[#10162C]/80 hover:bg-[#154C96] hover:text-white"
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
                className="bg-white p-6 rounded-3xl border border-[#E0E4E9] hover:border-[#00A79C] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
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
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#E0E4E9]/70 text-[#154C96]">
                      {spec.category === "poliklinik"
                        ? lang === "id"
                          ? "Poliklinik Spesialis"
                          : "Specialist Clinic"
                        : lang === "id"
                        ? "Fasilitas 24 Jam"
                        : "24/7 Facility"}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#10162C]">
                    {spec.name[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-[#10162C]/75 mt-2 leading-relaxed">
                    {spec.simpleAnalogy[lang]}
                  </p>

                  {/* Contoh Penanganan / Keluhan */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {spec.symptomTags[lang].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-normal bg-[rgba(0,167,156,0.1)] text-[#00A79C]"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E0E4E9] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {spec.branches.map((city) => (
                      <span
                        key={city}
                        className="px-2 py-0.5 rounded-full text-[10px] font-normal bg-[rgba(21,76,150,0.08)] text-[#154C96]"
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
                    className="text-xs font-medium text-[#F69320] hover:text-[#154C96] shrink-0 cursor-pointer"
                  >
                    {lang === "id" ? "Daftar →" : "Book →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B. Sentuhan Khas Avisena */}
        <div className="rounded-3xl bg-gradient-to-r from-[#00A79C] to-[#154C96] text-white p-8 lg:p-10 shadow-xl relative overflow-hidden">
          <SimpulSupergraphic
            variant="outline-white"
            opacity={0.12}
            className="w-72 h-72 absolute -top-10 -right-10"
          />
          <div className="relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium uppercase tracking-wider mb-3">
              {lang === "id"
                ? "Sentuhan Khas Tetangga Sehatmu"
                : "Avisena Signature Experience"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
              {lang === "id"
                ? "Lebih dari Sekadar Berobat: Kejutan Hangat di Setiap Cabang Avisena"
                : "More Than Medical Treatment: Thoughtful Neighborly Touches"}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/12 backdrop-blur-xs border border-white/15 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F69320] text-white flex items-center justify-center text-lg">
                  <FaBottleWater />
                </div>
                <h4 className="font-semibold text-base">
                  {lang === "id"
                    ? "Gratis Isi Ulang Air Minum (Bawa Tumbler)"
                    : "Free Water Refill Stations (Bring Your Tumbler)"}
                </h4>
                <p className="text-xs font-normal text-white/85 leading-relaxed">
                  {lang === "id"
                    ? "Mendukung gaya hidup sehat & ramah lingkungan—seluruh pengunjung dan keluarga pasien dapat mengisi ulang air minum secara gratis menggunakan tumbler di area RS."
                    : "Supporting eco-friendly wellness—visitors and patient families enjoy free drinking water refills using their personal tumblers across all branches."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/12 backdrop-blur-xs border border-white/15 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F69320] text-white flex items-center justify-center text-lg">
                  <FaCakeCandles />
                </div>
                <h4 className="font-semibold text-base">
                  {lang === "id"
                    ? "Promo Spesial MCU di Hari Ulang Tahun"
                    : "Special Birthday Medical Check-Up Promo"}
                </h4>
                <p className="text-xs font-normal text-white/85 leading-relaxed">
                  {lang === "id"
                    ? "Kado sehat dari Tetangga Sehatmu! Nikmati potongan khusus paket Medical Check-Up (MCU) di bulan ulang tahun Anda."
                    : "A healthy birthday gift from your neighbor! Enjoy special privileges on Medical Check-Up packages during your birthday month."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/12 backdrop-blur-xs border border-white/15 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F69320] text-white flex items-center justify-center text-lg">
                  <FaChildren />
                </div>
                <h4 className="font-semibold text-base">
                  {lang === "id"
                    ? "Khitanan Massal & Senam Tetangga Sehat"
                    : "Community Circumcision & Morning Wellness"}
                </h4>
                <p className="text-xs font-normal text-white/85 leading-relaxed">
                  {lang === "id"
                    ? "Program rutin bakti sosial khitanan massal anak, penyuluhan gizi posyandu, dan senam sehat bersama warga sekitar rumah sakit."
                    : "Regular community circumcision drives, Posyandu child nutrition workshops, and weekend wellness exercises with local residents."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* C. Interactive Accordion Kelas Kamar Rawat Inap */}
        <div className="bg-white rounded-3xl p-7 lg:p-10 border border-[#E0E4E9] shadow-md">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Accordion */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(21,76,150,0.12)] text-[#154C96] text-xs font-medium uppercase tracking-wider">
                {lang === "id"
                  ? "Kenyamanan Rawat Inap • Homey Interior"
                  : "Inpatient Suites • Homey Healing Interior"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#10162C]">
                {lang === "id"
                  ? "Ruang Pemulihan yang Hangat Seperti di Rumah Sendiri"
                  : "Recovery Rooms Designed with the Warmth of Home"}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-[#10162C]/70">
                {lang === "id"
                  ? "Klik setiap kelas kamar untuk melihat fasilitas dan suasana ruangan:"
                  : "Select each room class below to explore its amenities and healing atmosphere:"}
              </p>

              <div className="space-y-3 pt-2">
                {INPATIENT_ROOMS.map((room) => {
                  const isOpen = openRoomId === room.id;
                  return (
                    <div
                      key={room.id}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isOpen
                          ? "border-[#00A79C] bg-[rgba(0,167,156,0.08)] shadow-xs"
                          : "border-[#E0E4E9] bg-white hover:border-[#00A79C]/50"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenRoomId(room.id)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                              isOpen
                                ? "bg-[#00A79C] text-white"
                                : "bg-[#E0E4E9] text-[#154C96]"
                            }`}
                          >
                            <FaBed />
                          </span>
                          <div>
                            <h4 className="font-medium text-sm sm:text-base text-[#10162C]">
                              {room.name[lang]}
                            </h4>
                            <span className="text-xs font-light text-[#00A79C]">
                              {room.capacity[lang]}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#F69320]/15 text-[#F69320]">
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
                            <div className="px-5 pb-5 pt-2 text-xs sm:text-sm font-normal text-[#10162C]/80 space-y-3 border-t border-[#00A79C]/20">
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
              <div className="simpul-frame overflow-hidden border-4 border-[#00A79C]/30 shadow-2xl relative">
                <img
                  src={activeRoom.image}
                  alt={activeRoom.name[lang]}
                  className="w-full h-[380px] sm:h-[420px] object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10162C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#F69320] text-white text-xs font-medium">
                      {activeRoom.badge[lang]}
                    </span>
                    <h4 className="text-xl font-semibold mt-2">
                      {activeRoom.name[lang]}
                    </h4>
                    <p className="text-xs font-light text-white/85">
                      {activeRoom.capacity[lang]}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openQuickModal("visitor")}
                    className="px-4 py-2 rounded-full bg-white text-[#154C96] hover:bg-[#00A79C] hover:text-white text-xs font-medium transition-colors cursor-pointer shrink-0"
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

