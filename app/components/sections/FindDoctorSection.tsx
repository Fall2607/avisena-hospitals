"use client";

import React, { useState, useMemo } from "react";
import {
  FaUserDoctor,
  FaHospital,
  FaStethoscope,
  FaMagnifyingGlass,
  FaClock,
  FaCalendarCheck,
} from "react-icons/fa6";
import { DOCTORS_LIST } from "../../data/avisenaData";
import { useAvisena } from "../AvisenaProvider";
import { CustomSelect } from "../CustomSelect";

export const FindDoctorSection: React.FC = () => {
  const {
    lang,
    openQuickModal,
    doctorBranchFilter,
    setDoctorBranchFilter,
    doctorSpecialtyFilter,
    setDoctorSpecialtyFilter,
    branchSelectOptions,
    specialtySelectOptions,
  } = useAvisena();

  const [doctorQuery, setDoctorQuery] = useState<string>("");

  const filteredDoctors = useMemo(() => {
    return DOCTORS_LIST.filter((doc) => {
      const matchBranch =
        doctorBranchFilter === "all" || doc.branchId === doctorBranchFilter;
      const matchSpec =
        doctorSpecialtyFilter === "all" ||
        doc.specialtyKey === doctorSpecialtyFilter;
      const q = doctorQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.specialty.id.toLowerCase().includes(q) ||
        doc.specialty.en.toLowerCase().includes(q) ||
        doc.branchName.toLowerCase().includes(q);
      return matchBranch && matchSpec && matchQuery;
    });
  }, [doctorBranchFilter, doctorSpecialtyFilter, doctorQuery]);

  return (
    <section id="cari-dokter" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,167,156,0.14)] text-[#00A79C] text-xs font-medium uppercase tracking-wider mb-2">
            {lang === "id"
              ? "Direktori Dokter Multi-Cabang"
              : "Multi-Branch Doctor Directory"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#10162C]">
            {lang === "id"
              ? "Cari Dokter & Jadwal Praktik di 5 Cabang RS Avisena"
              : "Find Your Doctor Across All 5 Avisena Hospital Branches"}
          </h2>
        </div>

        {/* Filter Bar Menggunakan CustomSelect */}
        <div className="relative z-30 bg-[#E0E4E9]/55 p-5 sm:p-6 rounded-3xl border border-[#B2B5B3]/50 mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-4">
              <label className="block text-xs font-medium text-[#10162C]/75 mb-1.5 tracking-wide">
                {lang === "id"
                  ? "Nama Dokter, Spesialis, atau Rumah Sakit"
                  : "Doctor Name, Specialty, or Hospital"}
              </label>
              <div className="relative">
                <FaUserDoctor className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A79C]" />
                <input
                  type="text"
                  value={doctorQuery}
                  onChange={(e) => setDoctorQuery(e.target.value)}
                  placeholder={
                    lang === "id"
                      ? "Ketik nama dokter atau spesialis..."
                      : "Type doctor name or specialty..."
                  }
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-[#B2B5B3]/60 text-sm font-normal text-[#10162C] focus:outline-none focus:border-[#00A79C] h-[52px]"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <CustomSelect
                label={
                  lang === "id"
                    ? "Pilih Cabang Rumah Sakit"
                    : "Select Hospital Branch"
                }
                value={doctorBranchFilter}
                onChange={setDoctorBranchFilter}
                options={branchSelectOptions}
                icon={<FaHospital />}
              />
            </div>

            <div className="lg:col-span-3">
              <CustomSelect
                label={
                  lang === "id"
                    ? "Filter Spesialisasi"
                    : "Filter by Specialty"
                }
                value={doctorSpecialtyFilter}
                onChange={setDoctorSpecialtyFilter}
                options={specialtySelectOptions}
                icon={<FaStethoscope />}
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-2 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setDoctorQuery("");
                  setDoctorBranchFilter("all");
                  setDoctorSpecialtyFilter("all");
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#00A79C] hover:bg-[#154C96] text-white font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs h-[52px]"
              >
                <FaMagnifyingGlass />
                <span>
                  {lang === "id" ? "Cari / Reset" : "Search / Reset"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-white border border-[#E0E4E9] hover:border-[#00A79C] shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 bg-[#E0E4E9]/50 overflow-hidden">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#154C96] text-[11px] font-medium shadow-2xs">
                    {doc.experienceBadge[lang]}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-semibold text-[#10162C] group-hover:text-[#154C96] transition-colors">
                    {doc.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#00A79C]">
                    <FaStethoscope className="shrink-0" />
                    <span>{doc.specialty[lang]}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-normal text-[#154C96]">
                    <FaHospital className="shrink-0" />
                    <span>{doc.branchName}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-light text-[#10162C]/70 pt-1">
                    <FaClock className="text-[#F69320] shrink-0" />
                    <span>{doc.schedule[lang]}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() =>
                    openQuickModal(
                      "appointment",
                      `${doc.name} (${doc.specialty[lang]})`,
                      doc.branchId
                    )
                  }
                  className="w-full py-2.5 px-4 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaCalendarCheck />
                  <span>
                    {lang === "id" ? "Buat Janji Dokter" : "Book Doctor"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

