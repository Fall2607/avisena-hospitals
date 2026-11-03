"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingMedical,
  FaHandshakeAngle,
  FaPeopleGroup,
} from "react-icons/fa6";
import { LEADERSHIP_TEAM } from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";

export const AboutLeadershipSection: React.FC = () => {
  const { lang } = useAvisena();
  const [leaderTab, setLeaderTab] = useState<
    "founders" | "directors" | "committee"
  >("founders");

  const activeLeaders = useMemo(
    () => LEADERSHIP_TEAM.filter((l) => l.tab === leaderTab),
    [leaderTab]
  );

  return (
    <section
      id="tentang-kami"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* A. Our Story: How We Started ("Semua Berawal dari Rumah" — Kisah dr. Lia Yuliana Elsis) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="simpul-frame-reverse overflow-hidden border-4 border-[#E0E4E9] bg-[#E0E4E9]">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&q=80"
                alt="Kisah Pendiri dr. Lia Yuliana Elsis dan pengabdian Avisena"
                className="w-full h-[440px] object-cover"
              />
            </div>

            {/* Management Quote Box (Flat panel with clean contrast border) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-[#154C96] text-white p-6 rounded-3xl max-w-sm border border-white/20">
              <p className="text-xs sm:text-sm font-normal italic leading-relaxed">
                {lang === "id"
                  ? '“Bagi kami, merawat kesehatan adalah membangun masa depan keluarga dan generasi yang tangguh di Jawa Barat.”'
                  : '“To us, healthcare is about uplifting families and nurturing a resilient future across West Java.”'}
              </p>
              <p className="text-xs font-semibold text-[#F69320] mt-2">
                — Manajemen Avisena Healthcare Group
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C] leading-tight">
              {lang === "id"
                ? "Lahir dari Rumah Pribadi dr. Lia Yuliana Elsis"
                : "The Story of dr. Lia Yuliana Elsis"}
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-[#00A79C]">
              {lang === "id"
                ? "Semua Berawal dari Rumah: Menolong Sesama dengan Sepenuh Hati"
                : "Rooted in Empathy: Serving Neighbors Across West Java"}
            </p>

            <div className="space-y-3.5 text-sm sm:text-base font-normal text-[#10162C]/80 leading-relaxed">
              <p>
                {lang === "id"
                  ? "Avisena berawal dari keinginan sederhana untuk memberikan manfaat dengan menolong sesama dan memperkuat masyarakat melalui ilmu pengetahuan. Di awal karirnya, pendiri kami, dr. Lia Yuliana Elsis, membagi perannya antara praktik klinis, layanan kesehatan masyarakat, dan dokter klinik pabrik."
                  : "Avisena began with a simple desire to serve others and strengthen communities through medical knowledge. Early in her career, our founder, dr. Lia Yuliana Elsis, divided her time between clinical practice, community health, and serving as a factory clinic doctor."}
              </p>
              <p>
                {lang === "id"
                  ? "Di sanalah beliau menyaksikan langsung beratnya perjuangan para pekerja perempuan (buruh rantau) yang tinggal jauh dari keluarga dan kesulitan mengakses perawatan medis yang layak saat jatuh sakit. Tergerak oleh kondisi tersebut, dr. Lia membuka rumah pribadinya di pinggiran Bandung/Cimahi sebagai klinik kecil, memanfaatkan kamar-kamar kosong di rumahnya untuk memberikan rawat inap gratis bagi mereka yang membutuhkan."
                  : "There, she witnessed firsthand the struggles of female migrant workers living far from family who lacked access to dignified care when ill. Moved by empathy, dr. Lia opened her own private home in Cimahi as a small clinic, turning spare rooms into compassionate care wards."}
              </p>
              <p>
                {lang === "id"
                  ? "Warga sekitar turut mendukung dengan tulus, bahkan tak jarang membawa hasil bumi dan bahan pokok sebagai ungkapan terima kasih. Dari ikatan kepercayaan dan pemberdayaan kader kesehatan lokal inilah lahir RSU Avisena Cimahi, yang kini bertransformasi menjadi Avisena Healthcare Group."
                  : "Local neighbors rallied around her wholeheartedly, often bringing fresh farm produce as tokens of gratitude. From this deep bond of trust and community empowerment, RSU Avisena Cimahi was born, growing organically into Avisena Healthcare Group."}
              </p>
            </div>

            {/* Core Values Pills (4 Nilai Utama) */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-[#154C96] mb-2.5">
                {lang === "id"
                  ? "4 Nilai Utama Insan Avisena (Core Values):"
                  : "Our 4 Core Values:"}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: "1. Berintegritas", en: "1. Integrity" },
                  { id: "2. Bertanggung Jawab", en: "2. Accountability" },
                  { id: "3. Berkolaboratif", en: "3. Collaborative" },
                  { id: "4. Bertumbuh", en: "4. Continuous Growth" },
                ].map((val) => (
                  <span
                    key={val.id}
                    className="px-4 py-2 rounded-full bg-[#E0E4E9]/40 text-[#10162C] border border-[#B2B5B3]/40 text-xs sm:text-sm font-medium"
                  >
                    {val[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* B. Tiga Pilar "Tetangga Sehatmu" */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-[#E0E4E9]/35 border border-[#00A79C]/30 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00A79C] text-white flex items-center justify-center text-xl">
              <FaHandHoldingMedical />
            </div>
            <span className="text-xs font-semibold text-[#00A79C]">
              {lang === "id" ? "Pilar 1 • Teologis" : "Pillar 1 • Theological"}
            </span>
            <h3 className="text-xl font-semibold text-[#10162C]">
              {lang === "id"
                ? 'Pasien Adalah "Tamu Mulia"'
                : 'Every Patient is a "Noble Guest"'}
            </h3>
            <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed">
              {lang === "id"
                ? "Kami memandang pelayanan kesehatan sebagai amanah pengabdian. Setiap pasien disambut dengan hormat dan kasih sayang, bukan sekadar angka atau nomor antrean."
                : "We view healthcare as a sacred trust. Every patient is welcomed with warmth and dignity, never treated as just a number in a queue."}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#E0E4E9]/35 border border-[#154C96]/25 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#154C96] text-white flex items-center justify-center text-xl">
              <FaHandshakeAngle />
            </div>
            <span className="text-xs font-semibold text-[#154C96]">
              {lang === "id" ? "Pilar 2 • Historis" : "Pillar 2 • Historical"}
            </span>
            <h3 className="text-xl font-semibold text-[#10162C]">
              {lang === "id"
                ? "Tumbuh Organik dari Kepercayaan"
                : "Grown Organically from Trust"}
            </h3>
            <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed">
              {lang === "id"
                ? "Berakar dari hubungan personal dr. Lia bersama warga Cimahi dan Pangalengan, kepercayaan masyarakat adalah fondasi utama yang membesarkan Avisena."
                : "Rooted in personal relationships built by dr. Lia with local families, community trust remains the foundation of our hospital network."}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#E0E4E9]/35 border border-[#F69320]/35 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F69320] text-white flex items-center justify-center text-xl">
              <FaPeopleGroup />
            </div>
            <span className="text-xs font-semibold text-[#F69320]">
              {lang === "id" ? "Pilar 3 • Sosial" : "Pillar 3 • Social"}
            </span>
            <h3 className="text-xl font-semibold text-[#10162C]">
              {lang === "id"
                ? "Hadir Pertama Menolong Tetangga"
                : "First to Care for Our Neighbors"}
            </h3>
            <p className="text-sm font-normal text-[#10162C]/80 leading-relaxed">
              {lang === "id"
                ? "Menghadirkan akses medis yang inklusif dan menjemput bola ke masyarakat sekitar melalui program Rumah Sakit Keliling dan kemitraan koperasi lokal."
                : "Delivering inclusive healthcare that proactively reaches neighborhoods through our Mobile Hospital fleet and local cooperative partnerships."}
            </p>
          </div>
        </div>

        {/* C. Statistik Kinerja (Solid #154C96, no resting shadow, no blur) */}
        <div className="rounded-3xl bg-[#154C96] text-white p-8 lg:p-10 relative overflow-hidden border border-[#154C96]">
          <SimpulSupergraphic
            variant="outline-white"
            opacity={0.1}
            className="w-80 h-80 absolute -right-10 -bottom-10"
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10 text-center">
            <div className="p-4 rounded-2xl bg-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-[#F69320]">5</p>
              <p className="text-xs sm:text-sm font-normal text-white/90 mt-1">
                {lang === "id"
                  ? "Jaringan Rumah Sakit di Jawa Barat"
                  : "Hospital Branches in West Java"}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-[#00A79C]">
                850+
              </p>
              <p className="text-xs sm:text-sm font-normal text-white/90 mt-1">
                {lang === "id"
                  ? "Tenaga Medis & Staf Profesional"
                  : "Medical & Professional Staff"}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-white">
                1,2 Juta+
              </p>
              <p className="text-xs sm:text-sm font-normal text-white/90 mt-1">
                {lang === "id"
                  ? "Pasien Terlayani Sepenuh Hati"
                  : "Patients Served Wholeheartedly"}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-[#F69320]">
                98%
              </p>
              <p className="text-xs sm:text-sm font-normal text-white/90 mt-1">
                {lang === "id"
                  ? "Tingkat Kepuasan Pasien"
                  : "Patient Satisfaction Rate"}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-[#00A79C] text-white">
              <p className="text-3xl sm:text-4xl font-bold">24/7</p>
              <p className="text-xs sm:text-sm font-normal mt-1">
                {lang === "id"
                  ? "Layanan Siaga IGD & Ambulans"
                  : "Emergency & Ambulance Readiness"}
              </p>
            </div>
          </div>
        </div>

        {/* D. Profil Manajemen & Kepemimpinan */}
        <div className="pt-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#10162C]">
              {lang === "id"
                ? "Sosok di Balik Kehangatan Layanan Avisena"
                : "The Leaders Behind Avisena's Compassionate Care"}
            </h3>
            <p className="text-sm sm:text-base font-normal text-[#10162C]/75 mt-2">
              {lang === "id"
                ? "Kepemimpinan terpadu yang memadukan dedikasi medis dan tata kelola berstandar tinggi."
                : "Unified leadership blending clinical dedication and governance standards."}
            </p>
          </div>

          {/* Tabbed Navigation (Clean pill container) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-[#E0E4E9]/40 rounded-full max-w-xl mx-auto">
            {[
              {
                key: "founders",
                label: {
                  id: "Pendiri & Direksi",
                  en: "Founder & Directors",
                },
              },
              {
                key: "directors",
                label: {
                  id: "Direktur 5 Cabang RS",
                  en: "Hospital Directors",
                },
              },
              {
                key: "committee",
                label: {
                  id: "Komite Medik",
                  en: "Medical Committee",
                },
              },
            ].map((t) => {
              const active = leaderTab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setLeaderTab(t.key as typeof leaderTab)}
                  className={`py-2 px-5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active
                      ? "bg-[#154C96] text-white"
                      : "text-[#10162C]/70 hover:text-[#10162C]"
                  }`}
                >
                  {t.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Leadership Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {activeLeaders.map((leader) => (
              <div
                key={leader.id}
                className={`rounded-3xl bg-white border-2 overflow-hidden transition-colors duration-200 ${
                  leader.highlight
                    ? "border-[#F69320] ring-4 ring-[#F69320]/15"
                    : "border-[#B2B5B3]/40 hover:border-[#00A79C]"
                }`}
              >
                <div className="relative h-64 overflow-hidden bg-[#E0E4E9]">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#154C96] text-white text-xs font-normal">
                      {leader.attireNote[lang]}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-lg font-semibold text-[#10162C]">
                    {leader.name}
                  </h4>
                  <p className="text-xs font-medium text-[#00A79C]">
                    {leader.role[lang]}
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-[#10162C]/80 leading-relaxed pt-1">
                    {leader.bio[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
