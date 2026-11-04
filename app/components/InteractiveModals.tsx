"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneVolume,
  FaTruckMedical,
  FaLocationDot,
  FaXmark,
  FaCalendarCheck,
  FaStethoscope,
  FaBed,
  FaCircleCheck,
  FaShareNodes,
  FaFilePdf,
  FaHeartPulse,
  FaPills,
  FaShieldHeart,
  FaCommentDots,
  FaArrowUpRightFromSquare,
  FaHospital,
} from "react-icons/fa6";
import { BRANCHES, BranchItem, DOCTORS_LIST, Lang } from "../data/avisenaData";
import { SimpulSupergraphic } from "./SimpulSupergraphic";
import { CustomSelect } from "./CustomSelect";

interface BranchModalProps {
  branch: BranchItem | null;
  lang: Lang;
  onClose: () => void;
  onBookDoctor: (branchId: string, doctorName?: string) => void;
}

export const BranchDetailModal: React.FC<BranchModalProps> = ({
  branch,
  lang,
  onClose,
  onBookDoctor,
}) => {
  const branchDoctors = branch
    ? DOCTORS_LIST.filter((d) => d.branchId === branch.id)
    : [];

  return (
    <AnimatePresence>
      {branch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-end bg-[#10162C]/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative w-full max-w-2xl h-full bg-white shadow-2xl overflow-y-auto p-6 md:p-10 border-l border-[#00A79C]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <SimpulSupergraphic
              variant="outline-tosca"
              opacity={0.08}
              className="w-72 h-72 absolute -top-10 -right-10"
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#E0E4E9] relative z-10">
              <div className="bg-white px-4 py-2 rounded-2xl border border-[#E0E4E9] flex items-center gap-3">
                <img
                  src={branch.logoColor}
                  alt={branch.name}
                  className="h-12 w-auto object-contain"
                />
                <span className="px-2.5 py-0.5 rounded-full bg-[#154C96] text-white text-[11px] font-medium uppercase tracking-wider shrink-0">
                  {branch.city}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup detail rumah sakit"
                className="w-11 h-11 rounded-full bg-[#E0E4E9]/70 hover:bg-[#F69320] text-[#10162C] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <FaXmark className="text-lg" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-6 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#154C96] text-white">
                  {branch.type}
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-[rgba(0,167,156,0.15)] text-[#00A79C]">
                  {branch.badge[lang]}
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-[rgba(246,147,32,0.15)] text-[#F69320] flex items-center gap-1.5">
                  <FaTruckMedical /> {branch.igdStatus[lang]}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#00A79C] mb-0.5">
                  {lang === "id"
                    ? "Member dari Avisena Healthcare Group"
                    : "Member of Avisena Healthcare Group"}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#10162C]">
                  {branch.name}
                </h2>
                <p className="text-sm sm:text-base font-normal text-[#10162C]/80 mt-2 leading-relaxed">
                  {branch.description[lang]}
                </p>
              </div>

              {/* Image in Simpul Frame */}
              <div className="relative overflow-hidden simpul-frame border-2 border-[#00A79C]/20 shadow-lg">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-[#154C96] shadow">
                  {branch.bedCount} • Umum, BPJS/JKN & Asuransi
                </div>
              </div>

              {/* Address & Emergency Box */}
              <div className="p-5 rounded-2xl bg-[#E0E4E9]/55 border border-[#B2B5B3]/40 space-y-3">
                <div className="flex items-start gap-3">
                  <FaLocationDot className="text-[#00A79C] text-xl shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-[#10162C]">
                      {lang === "id" ? "Alamat Lengkap:" : "Hospital Address:"}
                    </p>
                    <p className="text-sm font-normal text-[#10162C]/75">
                      {branch.address}
                    </p>
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#154C96] hover:text-[#F69320] mt-1.5"
                    >
                      {lang === "id"
                        ? "Buka di Google Maps"
                        : "Open in Google Maps"}{" "}
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    </a>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-[#B2B5B3]/40">
                  <a
                    href={`tel:${branch.ambulancePhone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#154C96] hover:bg-[#10162C] text-white text-sm font-medium transition-colors"
                  >
                    <FaPhoneVolume className="text-[#F69320]" />
                    IGD / Ambulans: {branch.phone}
                  </a>
                  <a
                    href={`https://wa.me/${
                      branch.whatsapp
                    }?text=${encodeURIComponent(
                      `Halo Tetangga Sehatku Admin ${branch.name}, saya ingin bertanya informasi layanan & jadwal dokter.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#00A79C] hover:bg-[#154C96] text-white text-sm font-medium transition-colors"
                  >
                    <FaWhatsapp className="text-lg" />
                    WA Admin: {branch.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Poliklinik Spesialis */}
              <div>
                <h3 className="text-base sm:text-lg font-medium text-[#10162C] flex items-center gap-2 mb-3">
                  <FaStethoscope className="text-[#00A79C]" />
                  {lang === "id"
                    ? "Daftar Poliklinik & Layanan Spesialis"
                    : "Specialist Polyclinics"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {branch.polyclinics.map((poli) => (
                    <span
                      key={poli}
                      className="px-3.5 py-1.5 rounded-full text-xs font-normal bg-[rgba(0,167,156,0.12)] text-[#10162C] border border-[#00A79C]/30"
                    >
                      {poli}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fasilitas Unggulan */}
              <div>
                <h3 className="text-base sm:text-lg font-medium text-[#10162C] flex items-center gap-2 mb-3">
                  <FaBed className="text-[#F69320]" />
                  {lang === "id"
                    ? "Fasilitas Unggulan Cabang"
                    : "Featured Branch Facilities"}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {branch.featuredFacilities[lang].map((fac) => (
                    <li
                      key={fac}
                      className="flex items-center gap-2 text-sm font-normal text-[#10162C]/85 bg-white p-3 rounded-xl border border-[#E0E4E9]"
                    >
                      <FaCircleCheck className="text-[#00A79C] shrink-0" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dokter Praktik di Cabang Ini */}
              <div>
                <h3 className="text-base sm:text-lg font-medium text-[#10162C] mb-3">
                  {lang === "id"
                    ? `Dokter Pilihan di ${branch.name}`
                    : `Featured Doctors at ${branch.name}`}
                </h3>
                <div className="space-y-3">
                  {branchDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-[#E0E4E9]/40 border border-[#E0E4E9]"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#00A79C]"
                        />
                        <div>
                          <p className="font-medium text-sm text-[#10162C]">
                            {doc.name}
                          </p>
                          <p className="text-xs font-normal text-[#00A79C]">
                            {doc.specialty[lang]} •{" "}
                            <span className="font-light text-[#10162C]/70">
                              {doc.schedule[lang]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => onBookDoctor(branch.id, doc.name)}
                        className="px-4 py-2 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs font-medium transition-colors cursor-pointer shrink-0"
                      >
                        {lang === "id" ? "Buat Janji" : "Book"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTA */}
              <div className="pt-4">
                <button
                  onClick={() => onBookDoctor(branch.id)}
                  className="w-full py-4 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-base shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck />
                  {lang === "id"
                    ? `Buat Janji Temu di ${branch.name}`
                    : `Book Appointment at ${branch.name}`}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export type QuickModalType =
  | null
  | "whatsapp-directory"
  | "appointment"
  | "visitor"
  | "medicine"
  | "insurance"
  | "feedback"
  | "prospectus";

interface QuickActionModalProps {
  modalType: QuickModalType;
  lang: Lang;
  initialBranchId?: string;
  initialDoctorOrPoli?: string;
  onClose: () => void;
}

export const QuickActionModal: React.FC<QuickActionModalProps> = ({
  modalType,
  lang,
  initialBranchId = "cimahi",
  initialDoctorOrPoli = "",
  onClose,
}) => {
  const [selectedBranchId, setSelectedBranchId] = useState(
    initialBranchId || "cimahi"
  );
  const [patientName, setPatientName] = useState("");
  const [serviceChoice, setServiceChoice] = useState(
    initialDoctorOrPoli || "Spesialis Anak"
  );
  const [visitDate, setVisitDate] = useState("");
  const [coverageType, setCoverageType] = useState("BPJS Kesehatan (JKN)");
  const [feedbackText, setFeedbackText] = useState("");
  const [submittedNotice, setSubmittedNotice] = useState("");

  const activeBranch =
    BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const branchOptions = BRANCHES.map((b) => ({
    value: b.id,
    label: b.name,
    sublabel: `WA Admin: ${b.whatsappDisplay} • IGD: ${b.phone}`,
    badge: b.type,
    icon: <FaHospital />,
  }));

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Tetangga Sehatku Admin ${activeBranch.name}! Saya *${patientName}* ingin mendaftar janji temu / layanan *${serviceChoice}* (Penjamin: *${coverageType}*) untuk tanggal *${
      visitDate || "Terdekat"
    }*. Mohon bantuannya ya, terima kasih!`;
    window.open(
      `https://wa.me/${activeBranch.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmittedNotice(
      lang === "id"
        ? `Pesan ramah telah disiapkan ke WhatsApp Admin ${activeBranch.name} (${activeBranch.whatsappDisplay}).`
        : `Your friendly booking request has been opened in WhatsApp for ${activeBranch.name}.`
    );
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedNotice(
      lang === "id"
        ? "Terima kasih banyak, Tetangga Sehatku! Masukan Anda telah diterima langsung oleh Tim Mutu & Layanan Tamu Mulia Avisena."
        : "Thank you, Healthy Neighbor! Your feedback has been received by our Noble Guest Experience Team."
    );
    setFeedbackText("");
  };

  return (
    <AnimatePresence>
      {modalType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10162C]/65 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-[#00A79C]/30 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E0E4E9]">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-[rgba(0,167,156,0.15)] text-[#00A79C] flex items-center justify-center text-lg shrink-0">
                  {modalType === "whatsapp-directory" && <FaWhatsapp />}
                  {modalType === "appointment" && <FaCalendarCheck />}
                  {modalType === "medicine" && <FaPills />}
                  {modalType === "visitor" && <FaHeartPulse />}
                  {modalType === "insurance" && <FaShieldHeart />}
                  {modalType === "feedback" && <FaCommentDots />}
                  {modalType === "prospectus" && <FaFilePdf />}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#10162C]">
                    {modalType === "whatsapp-directory" &&
                      (lang === "id"
                        ? "Hubungi Tetangga Sehatmu (5 Cabang RS)"
                        : "Contact Your Healthy Neighbor (5 Branches)")}
                    {modalType === "appointment" &&
                      (lang === "id"
                        ? "Buat / Ubah Janji Temu & Paket MCU"
                        : "Make / Change Appointment & MCU")}
                    {modalType === "medicine" &&
                      (lang === "id"
                        ? "Layanan Antar / Siap Obat Tanpa Antre"
                        : "Express Medicine Delivery & Pickup")}
                    {modalType === "visitor" &&
                      (lang === "id"
                        ? "Panduan Rawat Inap & Jam Besuk Tamu Mulia"
                        : "Patient & Visitor Guide")}
                    {modalType === "insurance" &&
                      (lang === "id"
                        ? "Informasi Pembayaran, BPJS/JKN & Asuransi"
                        : "Payment, BPJS/JKN & Insurance Coverage")}
                    {modalType === "feedback" &&
                      (lang === "id"
                        ? "Suara Tetangga — Kotak Saran & Apresiasi"
                        : "Neighbor Feedback & Appreciation")}
                    {modalType === "prospectus" &&
                      (lang === "id"
                        ? "Prospektus Korporasi, Laporan GCG & Dampak Sosial"
                        : "Corporate Prospectus, GCG & Social Impact Report")}
                  </h3>
                  <p className="text-xs font-light text-[#10162C]/65">
                    Avisena Healthcare Group • Melayani dengan Sepenuh Hati
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup modal"
                className="w-9 h-9 rounded-full bg-[#E0E4E9] hover:bg-[#F69320] text-[#10162C] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <FaXmark />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-5 space-y-4">
              {modalType === "whatsapp-directory" && (
                <div className="space-y-3">
                  <p className="text-sm font-normal text-[#10162C]/80">
                    {lang === "id"
                      ? "Pilih cabang RS Avisena terdekat Anda. Admin kami menjawab dengan ramah dan personal, serta IGD kami siaga 24 jam:"
                      : "Choose your nearest Avisena Hospital branch. Our friendly human care team and 24/7 Emergency units are ready to assist:"}
                  </p>
                  {BRANCHES.map((b) => (
                    <div
                      key={b.id}
                      className="p-4 rounded-2xl bg-[#E0E4E9]/45 border border-[#B2B5B3]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#10162C]">
                            {b.name}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#154C96] text-white">
                            {b.type}
                          </span>
                        </div>
                        <p className="text-xs font-light text-[#10162C]/70 mt-0.5">
                          IGD 24 Jam:{" "}
                          <span className="font-medium text-[#10162C]">
                            {b.phone}
                          </span>{" "}
                          • WA:{" "}
                          <span className="font-medium text-[#10162C]">
                            {b.whatsappDisplay}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={`tel:${b.phone.replace(/[^0-9]/g, "")}`}
                          className="px-3.5 py-2 rounded-full bg-[#154C96] hover:bg-[#10162C] text-white text-xs font-medium flex items-center gap-1.5"
                        >
                          <FaPhoneVolume className="text-[#F69320]" /> IGD
                        </a>
                        <a
                          href={`https://wa.me/${
                            b.whatsapp
                          }?text=${encodeURIComponent(
                            `Halo Tetangga Sehatku Admin ${b.name}, saya butuh bantuan informasi layanan.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-[#F69320] hover:bg-[#00A79C] text-white text-xs font-medium flex items-center gap-1.5"
                        >
                          <FaWhatsapp className="text-sm" /> Chat WA
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {(modalType === "appointment" || modalType === "medicine") && (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <CustomSelect
                    label={
                      lang === "id"
                        ? "1. Pilih Lokasi Rumah Sakit"
                        : "1. Select Avisena Hospital Branch"
                    }
                    value={selectedBranchId}
                    onChange={setSelectedBranchId}
                    options={branchOptions}
                    icon={<FaHospital />}
                  />

                  <div>
                    <label className="block text-xs font-medium text-[#10162C]/75 mb-1.5">
                      {lang === "id"
                        ? "2. Nama Lengkap Pasien (Tamu Mulia)"
                        : "2. Patient Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={
                        lang === "id"
                          ? "Contoh: Ibu Siti Aminah"
                          : "e.g., Siti Aminah"
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-[#B2B5B3]/70 text-sm font-normal text-[#10162C] focus:outline-none focus:border-[#00A79C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#10162C]/75 mb-1.5">
                        {modalType === "medicine"
                          ? lang === "id"
                            ? "Nomor Resep / Kebutuhan Obat"
                            : "Prescription / Medicine Need"
                          : lang === "id"
                          ? "Poliklinik / Dokter / Paket MCU"
                          : "Specialty / Doctor / MCU Package"}
                      </label>
                      <input
                        type="text"
                        value={serviceChoice}
                        onChange={(e) => setServiceChoice(e.target.value)}
                        placeholder="Spesialis Anak / MCU Ulang Tahun"
                        className="w-full px-4 py-3 rounded-2xl border border-[#B2B5B3]/70 text-sm font-normal text-[#10162C] focus:outline-none focus:border-[#00A79C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#10162C]/75 mb-1.5">
                        {lang === "id"
                          ? "Rencana Tanggal Kunjungan"
                          : "Preferred Visit Date"}
                      </label>
                      <input
                        type="date"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-[#B2B5B3]/70 text-sm font-normal text-[#10162C] focus:outline-none focus:border-[#00A79C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#10162C]/75 mb-1.5">
                      {lang === "id"
                        ? "Jenis Penjaminan / Pembayaran"
                        : "Coverage / Payment Type"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "BPJS Kesehatan (JKN)",
                        "Pasien Umum",
                        "Asuransi / Perusahaan",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setCoverageType(item)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                            coverageType === item
                              ? "bg-[#00A79C] text-white border-[#00A79C]"
                              : "bg-[#E0E4E9]/50 text-[#10162C] border-[#B2B5B3]/50"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaWhatsapp className="text-lg" />
                    {lang === "id"
                      ? `Kirim ke WhatsApp Admin ${activeBranch.name}`
                      : `Send via WhatsApp to ${activeBranch.name}`}
                  </button>
                </form>
              )}

              {modalType === "visitor" && (
                <div className="space-y-4 text-sm font-normal text-[#10162C]/85">
                  <div className="p-4 rounded-2xl bg-[rgba(0,167,156,0.12)] border border-[#00A79C]/30">
                    <h4 className="font-semibold text-[#154C96] mb-1">
                      {lang === "id"
                        ? "Jadwal Jam Besuk Keluarga (Seluruh Cabang)"
                        : "Family Visiting Hours (All Branches)"}
                    </h4>
                    <p>
                      • <span className="font-medium">Sesi Siang:</span> 11.00 –
                      13.00 WIB
                      <br />• <span className="font-medium">Sesi Sore:</span>{" "}
                      17.00 – 19.00 WIB
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#E0E4E9]/60 space-y-2">
                    <h4 className="font-semibold text-[#10162C]">
                      {lang === "id"
                        ? "Sentuhan Ramah Tamu Mulia Avisena:"
                        : "Avisena Noble Guest Hospitality:"}
                    </h4>
                    <ul className="space-y-1.5 text-xs">
                      <li>
                        <FaCircleCheck className="inline text-[#00A79C] mr-1.5" />
                        <span className="font-medium">
                          Gratis Isi Ulang Air Minum:
                        </span>{" "}
                        Bawa botol <em>tumbler</em> Anda dan nikmati isi ulang
                        air minum gratis di setiap lantai rawat inap &
                        poliklinik.
                      </li>
                      <li>
                        <FaCircleCheck className="inline text-[#00A79C] mr-1.5" />Demi kesehatan bersama, anak-anak di bawah usia 12
                        tahun disarankan tidak masuk ke ruang perawatan
                        intensif.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {modalType === "insurance" && (
                <div className="space-y-4 text-sm font-normal text-[#10162C]/85">
                  <p>
                    {lang === "id"
                      ? "Seluruh 5 jaringan Rumah Sakit Avisena menjembatani program kesehatan pemerintah dan swasta tanpa membeda-bedakan keramahan layanan:"
                      : "All 5 Avisena Hospitals bridge public and private healthcare programs with equal dignity and warmth:"}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-[rgba(0,167,156,0.12)] border border-[#00A79C]/30">
                      <p className="font-semibold text-[#00A79C]">
                        BPJS Kesehatan / JKN
                      </p>
                      <p className="text-xs mt-1">
                        Melayani rujukan Faskes 1, PBI/Non-PBI, dan kasus gawat
                        darurat IGD 24 jam tanpa rujukan.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[rgba(21,76,150,0.12)] border border-[#154C96]/30">
                      <p className="font-semibold text-[#154C96]">
                        BPJS Ketenagakerjaan
                      </p>
                      <p className="text-xs mt-1">
                        Pusat layanan kecelakaan kerja (PLKK) bagi buruh &
                        pekerja pabrik di Jawa Barat.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[rgba(246,147,32,0.15)] border border-[#F69320]/30">
                      <p className="font-semibold text-[#F69320]">
                        50+ Asuransi & Korporasi
                      </p>
                      <p className="text-xs mt-1">
                        AdMedika, Mandiri Inhealth, Prudential, Allianz, BNI
                        Life, KPBS, & mitra perusahaan.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {modalType === "feedback" && (
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <p className="text-sm font-normal text-[#10162C]/80">
                    {lang === "id"
                      ? "Apakah sapaan dokter, perawat, atau staf kami sudah terasa hangat seperti tetangga dekat? Sampaikan cerita atau saran Anda:"
                      : "Did our doctors, nurses, and staff make you feel cared for like a close neighbor? Share your story or suggestion:"}
                  </p>
                  <textarea
                    rows={4}
                    required
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder={
                      lang === "id"
                        ? "Tuliskan pengalaman atau saran Anda beserta cabang RS yang dikunjungi..."
                        : "Write your experience or suggestion along with the branch visited..."
                    }
                    className="w-full p-4 rounded-2xl border border-[#B2B5B3] text-sm font-normal text-[#10162C] focus:outline-none focus:border-[#00A79C]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#00A79C] hover:bg-[#154C96] text-white font-medium text-sm transition-colors cursor-pointer"
                  >
                    {lang === "id"
                      ? "Kirim Suara Tetangga"
                      : "Submit Neighbor Feedback"}
                  </button>
                </form>
              )}

              {modalType === "prospectus" && (
                <div className="space-y-4 text-sm font-normal text-[#10162C]/85">
                  <div className="p-4 rounded-2xl bg-[#154C96] text-white space-y-2">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-medium bg-[#F69320] text-white">
                      SWEEF Impact & IPO Readiness 2026
                    </span>
                    <h4 className="text-lg font-semibold">
                      Avisena Healthcare Group — Investor & GCG Overview
                    </h4>
                    <p className="text-xs font-light text-white/85 leading-relaxed">
                      Ringkasan kinerja 5 rumah sakit jaringan Avisena di Jawa Barat,
                      dampak pemberdayaan kepemimpinan perempuan (dr. Lia
                      Yuliana Elsis), kemitraan koperasi KPBS Pangalengan, serta
                      peta jalan ekspansi dan tata kelola perusahaan (Good
                      Corporate Governance).
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-[#E0E4E9]/60">
                      <p className="font-semibold text-[#154C96]">
                        68% Tenaga Kesehatan Perempuan
                      </p>
                      <p className="mt-1 font-normal">
                        Komitmen kesetaraan gender dan jenjang karir
                        kepemimpinan wanita bersama SWEEF.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#E0E4E9]/60">
                      <p className="font-semibold text-[#00A79C]">
                        1,2 Juta+ Pasien Terlayani
                      </p>
                      <p className="mt-1 font-normal">
                        Pertumbuhan organik berkelanjutan di Cimahi,
                        Pangalengan, Kuningan, Subang, dan Cikampek.
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:cs@rsavisena.co.id?subject=Request%20Company%20Prospectus%20%26%20GCG%20Report%20-%20Avisena%20Healthcare%20Group"
                    className="w-full py-3.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaFilePdf />
                    {lang === "id"
                      ? "Minta Dokumen Lengkap Investor Relations (PDF)"
                      : "Request Full Investor Prospectus & GCG Report"}
                  </a>
                </div>
              )}

              {submittedNotice && (
                <div className="p-4 rounded-2xl bg-[rgba(0,167,156,0.15)] border border-[#00A79C] text-[#10162C] text-xs font-normal flex items-center gap-2">
                  <FaCircleCheck className="text-[#00A79C] text-base shrink-0" />
                  <span>{submittedNotice}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface FloatingWidgetsProps {
  lang: Lang;
  fontScale: number;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
  onResetFont: () => void;
  onOpenModal: (type: QuickModalType, service?: string) => void;
  activeBranchId: string;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  lang,
  fontScale,
  onIncreaseFont,
  onDecreaseFont,
  onResetFont,
  onOpenModal,
  activeBranchId,
}) => {
  const [copied, setCopied] = useState(false);
  const [isRightExpanded, setIsRightExpanded] = useState(false);
  const currentBranch =
    BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {/* Sisi Kiri Layar: Floating Accessibility & Utility (Benchmark: RS Jakarta & SingHealth) */}
      <div className="fixed left-3 bottom-6 z-40 hidden sm:flex flex-col gap-2 bg-white/95 backdrop-blur-md p-2 rounded-3xl shadow-xl border border-[#B2B5B3]/50">
        <span className="text-[10px] font-medium text-center text-[#154C96] uppercase tracking-wider px-1">
          {lang === "id" ? "Teks" : "Font"}
        </span>
        <button
          onClick={onIncreaseFont}
          title={
            lang === "id"
              ? "Perbesar Ukuran Teks (Ramah Lansia)"
              : "Increase Font Size"
          }
          className="w-10 h-10 rounded-full bg-[#E0E4E9]/70 hover:bg-[#00A79C] text-[#10162C] hover:text-white font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center"
        >
          A+
        </button>
        <button
          onClick={onDecreaseFont}
          title={lang === "id" ? "Perkecil Ukuran Teks" : "Decrease Font Size"}
          className="w-10 h-10 rounded-full bg-[#E0E4E9]/70 hover:bg-[#00A79C] text-[#10162C] hover:text-white font-medium text-xs transition-colors cursor-pointer flex items-center justify-center"
        >
          A-
        </button>
        {fontScale !== 100 && (
          <button
            onClick={onResetFont}
            className="text-[10px] font-medium text-[#F69320] hover:underline cursor-pointer"
          >
            {fontScale}%
          </button>
        )}
        <div className="h-px bg-[#E0E4E9] my-0.5" />
        <button
          onClick={handleShare}
          title={lang === "id" ? "Bagikan Halaman" : "Share Page"}
          className="w-10 h-10 rounded-full bg-[rgba(21,76,150,0.12)] hover:bg-[#154C96] text-[#154C96] hover:text-white transition-colors cursor-pointer flex items-center justify-center relative"
        >
          <FaShareNodes className="text-sm" />
          {copied && (
            <span className="absolute left-12 bg-[#10162C] text-white text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap shadow">
              {lang === "id" ? "Tautan Disalin!" : "Link Copied!"}
            </span>
          )}
        </button>
      </div>

      {/* Sisi Kanan Layar: Satu Button Interaktif Expandable/Collapsible (Buat Janji, Paket MCU, WA Admin Responsif) */}
      <div className="fixed right-4 bottom-6 z-40 flex flex-col items-end">
        <AnimatePresence>
          {isRightExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="bg-white/95 backdrop-blur-md border-2 border-[#00A79C]/35 shadow-2xl rounded-3xl p-2.5 w-60 sm:w-64 mb-2.5 overflow-hidden"
            >
              <div className="flex items-center justify-between px-2.5 py-1.5 mb-1.5 border-b border-[#E0E4E9]">
                <span className="text-[11px] font-semibold text-[#154C96] uppercase tracking-wider">
                  {lang === "id" ? "Akses Cepat Avisena" : "Quick Care Access"}
                </span>
                <span className="text-[10px] font-medium text-[#00A79C]">
                  {currentBranch.city}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsRightExpanded(false);
                    onOpenModal("appointment", "Janji Temu Poliklinik");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#F69320] hover:bg-[#154C96] text-white text-xs sm:text-sm font-medium shadow-xs transition-colors cursor-pointer"
                >
                  <FaCalendarCheck className="text-base shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-medium">
                      {lang === "id" ? "Buat Janji" : "Book Visit"}
                    </span>
                    <span className="block text-[10px] font-light opacity-90">
                      {lang === "id" ? "Poliklinik & Dokter" : "Clinic & Doctor"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsRightExpanded(false);
                    onOpenModal("appointment", "Paket Medical Check-Up (MCU)");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#154C96] hover:bg-[#00A79C] text-white text-xs sm:text-sm font-medium shadow-xs transition-colors cursor-pointer"
                >
                  <FaStethoscope className="text-base text-[#F69320] shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-medium">
                      {lang === "id" ? "Paket MCU" : "MCU Packages"}
                    </span>
                    <span className="block text-[10px] font-light opacity-90">
                      {lang === "id"
                        ? "Cek Kesehatan & Promo"
                        : "Health Screening"}
                    </span>
                  </div>
                </button>

                <a
                  href={`https://wa.me/${
                    currentBranch.whatsapp
                  }?text=${encodeURIComponent(
                    `Halo Tetangga Sehatku Admin ${currentBranch.name}, saya ingin berkonsultasi mengenai jadwal dokter & layanan.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsRightExpanded(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#00A79C] hover:bg-[#154C96] text-white text-xs sm:text-sm font-medium shadow-xs transition-colors"
                >
                  <FaWhatsapp className="text-lg shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-medium">
                      {lang === "id"
                        ? "WA Admin Responsif"
                        : "Responsive WA Admin"}
                    </span>
                    <span className="block text-[10px] font-light opacity-90">
                      {currentBranch.name}
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Single Interactive Toggle Pill Button */}
        <button
          type="button"
          onClick={() => setIsRightExpanded((prev) => !prev)}
          aria-expanded={isRightExpanded}
          aria-label={
            isRightExpanded
              ? lang === "id"
                ? "Tutup menu cepat"
                : "Collapse quick menu"
              : lang === "id"
              ? "Buka menu Buat Janji, MCU & WhatsApp"
              : "Open Book Visit, MCU & WhatsApp menu"
          }
          className={`group flex items-center gap-2.5 rounded-full shadow-2xl border-2 border-white transition-colors duration-200 cursor-pointer ${
            isRightExpanded
              ? "bg-[#10162C] hover:bg-[#154C96] text-white px-4 py-3"
              : "bg-[#00A79C] hover:bg-[#154C96] text-white p-3.5 sm:px-5 sm:py-3.5"
          }`}
        >
          {isRightExpanded ? (
            <>
              <FaXmark className="text-lg text-[#F69320]" />
              <span className="text-xs font-medium">
                {lang === "id" ? "Tutup" : "Close"}
              </span>
            </>
          ) : (
            <>
              <span className="relative flex items-center justify-center">
                
                <FaWhatsapp className="relative text-xl" />
              </span>
              <span className="hidden sm:inline text-xs font-medium tracking-wide">
                {lang === "id" ? "Janji • MCU • WA" : "Book • MCU • WA"}
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
