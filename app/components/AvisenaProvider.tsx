"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneVolume,
  FaTruckMedical,
  FaLocationDot,
  FaStethoscope,
  FaHospital,
  FaCalendarCheck,
  FaArrowRight,
  FaChevronDown,
  FaUserDoctor,
  FaEnvelope,
  FaGlobe,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import {
  BRANCHES,
  DOCTORS_LIST,
  BranchItem,
  Lang,
} from "../data/avisenaData";
import { SimpulSupergraphic } from "./SimpulSupergraphic";
import { SelectOption } from "./CustomSelect";
import {
  BranchDetailModal,
  QuickActionModal,
  QuickModalType,
  FloatingWidgets,
} from "./InteractiveModals";

interface AvisenaContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  fontScale: number;
  setFontScale: React.Dispatch<React.SetStateAction<number>>;
  selectedBranchTab: string;
  setSelectedBranchTab: (branchId: string) => void;
  drawerBranch: BranchItem | null;
  setDrawerBranch: (branch: BranchItem | null) => void;
  quickModal: QuickModalType;
  openQuickModal: (
    type: QuickModalType,
    serviceText?: string,
    branchId?: string
  ) => void;
  closeQuickModal: () => void;
  doctorBranchFilter: string;
  setDoctorBranchFilter: (branchId: string) => void;
  doctorSpecialtyFilter: string;
  setDoctorSpecialtyFilter: (specialty: string) => void;
  branchSelectOptions: SelectOption[];
  specialtySelectOptions: SelectOption[];
  jumpToDoctorSchedule: (branchId: string, specialty?: string) => void;
}

const AvisenaContext = createContext<AvisenaContextValue | null>(null);

export const useAvisena = () => {
  const ctx = useContext(AvisenaContext);
  if (!ctx) {
    throw new Error("useAvisena must be used within AvisenaProvider");
  }
  return ctx;
};

export const AvisenaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const [lang, setLang] = useState<Lang>("id");
  const [fontScale, setFontScale] = useState<number>(100);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  const [selectedBranchTab, setSelectedBranchTab] = useState<string>("cimahi");
  const [drawerBranch, setDrawerBranch] = useState<BranchItem | null>(null);

  const [quickModal, setQuickModal] = useState<QuickModalType>(null);
  const [modalInitialBranch, setModalInitialBranch] =
    useState<string>("cimahi");
  const [modalInitialService, setModalInitialService] = useState<string>("");

  const [doctorBranchFilter, setDoctorBranchFilter] = useState<string>("all");
  const [doctorSpecialtyFilter, setDoctorSpecialtyFilter] =
    useState<string>("all");

  const openQuickModal = (
    type: QuickModalType,
    serviceText = "",
    branchId = selectedBranchTab
  ) => {
    setModalInitialBranch(branchId);
    setModalInitialService(serviceText);
    setQuickModal(type);
  };

  const closeQuickModal = () => setQuickModal(null);

  const jumpToDoctorSchedule = (branchId: string, specialty = "all") => {
    setDoctorBranchFilter(branchId);
    setDoctorSpecialtyFilter(specialty);
    setDrawerBranch(null);
    if (pathname === "/cari-dokter" || pathname === "/") {
      const el = document.getElementById("cari-dokter");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push("/cari-dokter");
  };

  const doctorSpecialties = useMemo(() => {
    return Array.from(new Set(DOCTORS_LIST.map((d) => d.specialtyKey)));
  }, []);

  const branchSelectOptions: SelectOption[] = useMemo(
    () => [
      {
        value: "all",
        label:
          lang === "id"
            ? "Semua Cabang RS Avisena"
            : "All Avisena Hospital Branches",
        sublabel:
          lang === "id"
            ? "Cimahi â€¢ Pangalengan â€¢ Kuningan â€¢ Subang â€¢ Cikampek"
            : "5 Hospitals across West Java",
        badge: "5 RS",
        icon: <FaHospital />,
      },
      ...BRANCHES.map((b) => ({
        value: b.id,
        label: b.name,
        sublabel: `${b.badge[lang]} â€¢ IGD ${b.phone}`,
        badge: b.type,
        icon: <FaLocationDot />,
      })),
    ],
    [lang]
  );

  const specialtySelectOptions: SelectOption[] = useMemo(
    () => [
      {
        value: "all",
        label:
          lang === "id"
            ? "Semua Poliklinik Spesialis"
            : "All Medical Specialties",
        sublabel:
          lang === "id"
            ? "Anak, Kandungan, Penyakit Dalam, Bedah, Jantung, Saraf"
            : "Full specialist directory",
        badge: lang === "id" ? "Lengkap" : "All",
        icon: <FaStethoscope />,
      },
      ...doctorSpecialties.map((spec) => ({
        value: spec,
        label: spec,
        sublabel:
          lang === "id"
            ? "Tersedia pendaftaran Umum, BPJS/JKN & Asuransi"
            : "General, BPJS/JKN & Insurance accepted",
        icon: <FaUserDoctor />,
      })),
    ],
    [doctorSpecialties, lang]
  );

  const navItems = [
    { href: "/", label: { id: "Beranda", en: "Home" } },
    { href: "/layanan", label: { id: "Layanan", en: "Services" } },
    { href: "/cari-dokter", label: { id: "Dokter", en: "Doctors" } },
    { href: "/tentang-kami", label: { id: "Tentang Kami", en: "About Us" } },
    { href: "/komunitas", label: { id: "Komunitas", en: "Community" } },
    { href: "/investor", label: { id: "Investor", en: "Investors" } },
    { href: "/karir", label: { id: "Karir", en: "Careers" } },
  ];

  return (
    <AvisenaContext.Provider
      value={{
        lang,
        setLang,
        fontScale,
        setFontScale,
        selectedBranchTab,
        setSelectedBranchTab,
        drawerBranch,
        setDrawerBranch,
        quickModal,
        openQuickModal,
        closeQuickModal,
        doctorBranchFilter,
        setDoctorBranchFilter,
        doctorSpecialtyFilter,
        setDoctorSpecialtyFilter,
        branchSelectOptions,
        specialtySelectOptions,
        jumpToDoctorSchedule,
      }}
    >
      <div
        style={{ fontSize: `${fontScale}%` }}
        className="min-h-[100svh] bg-[#FFFFFF] text-[#10162C] font-normal overflow-x-hidden selection:bg-[#00A79C]/20 flex flex-col justify-between"
      >
        <div>
          {/* Top Emergency & Language Bar */}
          <div className="bg-[#154C96] text-white text-xs py-2 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-normal truncate">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F69320] text-white font-medium text-xs shrink-0">
                  <FaTruckMedical /> IGD 24 Jam
                </span>
                <span className="hidden sm:inline text-white/85 font-light">
                  {lang === "id"
                    ? "Siaga 5 Cabang Jawa Barat:"
                    : "24/7 Emergency Across West Java:"}
                </span>
                <a
                  href="tel:0226000830"
                  className="font-medium hover:text-[#F69320] transition-colors"
                >
                  (022) 6000830
                </a>
                <span className="hidden md:inline text-white/40">|</span>
                <a
                  href="https://wa.me/6281220200170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1 text-white/90 hover:text-[#00A79C] transition-colors font-normal"
                >
                  <FaWhatsapp className="text-[#00A79C]" /> 0812-2020-0170
                </a>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden lg:inline text-white/75 text-[11px] font-light">
                  {lang === "id"
                    ? "Umum â€¢ BPJS/JKN â€¢ 50+ Asuransi"
                    : "General â€¢ BPJS/JKN â€¢ 50+ Insurers"}
                </span>

                {/* Bilingual Switcher */}
                <div className="inline-flex items-center rounded-full bg-white/15 p-0.5 border border-white/20">
                  <button
                    type="button"
                    onClick={() => setLang("id")}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                      lang === "id"
                        ? "bg-[#00A79C] text-white shadow-2xs"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    ID
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                      lang === "en"
                        ? "bg-[#00A79C] text-white shadow-2xs"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Sticky Header Navigation */}
          <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
              {/* Brand Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 shrink-0 py-2"
                aria-label="Avisena Healthcare Group Beranda"
              >
                <img
                  src="/Logo/Primary_Logo/FA LOGO AVISENA_Main Color.svg"
                  alt="Logo Utama Avisena Healthcare Group"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden xl:flex items-center gap-5 text-[14px] font-medium text-[#10162C]">
                <Link
                  href="/"
                  className={`transition-colors whitespace-nowrap ${
                    pathname === "/"
                      ? "text-[#00A79C] font-semibold"
                      : "hover:text-[#00A79C]"
                  }`}
                >
                  {lang === "id" ? "Beranda" : "Home"}
                </Link>

                {/* Dropdown Cabang RS + Link to /cabang-rs */}
                <div
                  className="relative"
                  onMouseEnter={() => setBranchDropdownOpen(true)}
                  onMouseLeave={() => setBranchDropdownOpen(false)}
                >
                  <Link
                    href="/cabang-rs"
                    onClick={() => setBranchDropdownOpen(false)}
                    className={`flex items-center gap-1.5 transition-colors py-2 cursor-pointer font-medium whitespace-nowrap ${
                      pathname === "/cabang-rs"
                        ? "text-[#00A79C] font-semibold"
                        : "hover:text-[#00A79C]"
                    }`}
                  >
                    <span>{lang === "id" ? "Cabang RS" : "Hospitals"}</span>
                    <motion.span
                      animate={{ rotate: branchDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[11px] text-[#00A79C]"
                    >
                      <FaChevronDown />
                    </motion.span>
                  </Link>

                  <AnimatePresence>
                    {branchDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 28,
                        }}
                        data-ui="dropdown" className="absolute left-0 top-full w-80 bg-white rounded-3xl shadow-2xl border border-[#E0E4E9] p-3 space-y-1.5 z-50 /* taste-skill-ignore */"
                      >
                        <div className="px-3 py-1.5 text-xs font-semibold text-[#154C96]">
                          {lang === "id"
                            ? "Pilih 5 Cabang RS Avisena"
                            : "Select 5 Avisena Hospitals"}
                        </div>
                        {BRANCHES.map((b) => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => {
                              setBranchDropdownOpen(false);
                              setDrawerBranch(b);
                            }}
                            className="w-full text-left px-3 py-2.5 rounded-2xl hover:bg-[rgba(0,167,156,0.12)] transition-colors flex items-center justify-between gap-2 group cursor-pointer"
                          >
                            <div>
                              <p className="text-sm font-medium text-[#10162C] group-hover:text-[#154C96]">
                                {b.name}
                              </p>
                              <p className="text-[11px] font-light text-[#10162C]/65">
                                {b.badge[lang]} â€¢ {b.type}
                              </p>
                            </div>
                            <span className="w-7 h-7 rounded-full bg-[#E0E4E9]/70 group-hover:bg-[#F69320] text-[#10162C] group-hover:text-white flex items-center justify-center text-xs transition-colors shrink-0">
                              <FaArrowRight />
                            </span>
                          </button>
                        ))}
                        <div className="pt-2">
                          <Link
                            href="/cabang-rs"
                            onClick={() => setBranchDropdownOpen(false)}
                            className="block text-center text-xs font-medium text-[#00A79C] hover:text-[#154C96] py-1.5"
                          >
                            {lang === "id"
                              ? "Buka Halaman 5 Cabang RS â†’"
                              : "Open 5 Hospital Branches Page â†’"}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.slice(1).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-[#00A79C] font-semibold"
                          : "hover:text-[#00A79C]"
                      }`}
                    >
                      {item.label[lang]}
                    </Link>
                  );
                })}
              </nav>

              {/* Right CTA Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="tel:0226000830"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[rgba(0,167,156,0.14)] hover:bg-[#00A79C] text-[#154C96] hover:text-white text-xs font-medium transition-colors whitespace-nowrap"
                >
                  <FaPhoneVolume className="text-[#F69320]" />
                  <span>IGD 24 Jam</span>
                </a>

                <button
                  type="button"
                  onClick={() => openQuickModal("appointment")}
                  className="px-4 sm:px-5 py-2.5 rounded-full bg-[#F69320] hover:bg-[#154C96] text-white text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <FaCalendarCheck />
                  <span>{lang === "id" ? "Buat Janji" : "Book Visit"}</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Buka menu navigasi"
                  className="xl:hidden w-10 h-10 rounded-full bg-[#E0E4E9]/60 flex items-center justify-center text-[#10162C] cursor-pointer"
                >
                  {mobileMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="xl:hidden bg-white px-4 py-4 space-y-2 overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`p-2.5 rounded-xl ${
                        pathname === "/"
                          ? "bg-[#00A79C] text-white"
                          : "bg-[#E0E4E9]/40"
                      }`}
                    >
                      {lang === "id" ? "Beranda" : "Home"}
                    </Link>
                    <Link
                      href="/cabang-rs"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`p-2.5 rounded-xl ${
                        pathname === "/cabang-rs"
                          ? "bg-[#00A79C] text-white"
                          : "bg-[#E0E4E9]/40"
                      }`}
                    >
                      {lang === "id" ? "5 Cabang RS" : "5 Hospitals"}
                    </Link>
                    {navItems.slice(1).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-2.5 rounded-xl ${
                          pathname === item.href
                            ? "bg-[#00A79C] text-white"
                            : "bg-[#E0E4E9]/40"
                        }`}
                      >
                        {item.label[lang]}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* Main Page Content */}
          <main>{children}</main>
        </div>

        {/* 12. Footer (--avisena-blue #154C96 + Mandatory All-White Logo + Supergraphics) */}
        <footer className="bg-[#154C96] text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-[#00A79C]">
          <SimpulSupergraphic
            variant="outline-white"
            opacity={0.07}
            className="w-[420px] h-[420px] absolute -bottom-24 -right-24"
          />

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
              {/* Col 1: Mandatory All-White Logo & Brand Philosophy */}
              <div className="lg:col-span-4 space-y-4">
                <div className="py-2 px-1 inline-block overflow-hidden">
                  <img
                    src="/Logo/Primary_Logo/FA LOGO AVISENA_Main White.svg"
                    alt="Avisena Healthcare Group White Logo"
                    className="h-16 sm:h-20 w-auto object-contain scale-125 origin-left"
                  />
                </div>

                <p className="text-sm font-medium text-[#F69320]">
                  â€œAvisena, Tetangga Sehatmu â€¢ Melayani dengan Sepenuh Hatiâ€
                </p>

                <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  {lang === "id"
                    ? "Jaringan rumah sakit pilihan masyarakat Jawa Barat yang memadukan keunggulan klinis, tata kelola perusahaan yang transparan (GCG), dan kehangatan sebuah keluarga."
                    : "West Java's trusted hospital network uniting clinical excellence, transparent corporate governance (GCG), and the warmth of a caring neighbor."}
                </p>
              </div>

              {/* Col 2: Kontak Kantor Pusat (RSU Avisena Cimahi) */}
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-base font-semibold text-white mb-3">
                  {lang === "id"
                    ? "Kantor Pusat (RSU Avisena Cimahi)"
                    : "Head Office (RSU Avisena Cimahi)"}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-white/85">
                  <li className="flex items-start gap-2.5">
                    <FaLocationDot className="text-[#F69320] shrink-0 mt-1" />
                    <span>
                      Jl. Melong No. 170, Kel. Melong, Kec. Cimahi Selatan, Kota
                      Cimahi, Jawa Barat
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FaPhoneVolume className="text-[#F69320] shrink-0" />
                    <span>
                      Telepon Darurat / IGD:{" "}
                      <a
                        href="tel:0226000830"
                        className="font-medium text-white hover:text-[#F69320]"
                      >
                        (022) 6000830
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FaWhatsapp className="text-[#00A79C] text-base shrink-0" />
                    <span>
                      WhatsApp Center:{" "}
                      <a
                        href="https://wa.me/6281220200170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-[#00A79C]"
                      >
                        0812-2020-0170
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FaEnvelope className="text-[#F69320] shrink-0" />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:cs@rsavisena.co.id"
                        className="hover:underline"
                      >
                        cs@rsavisena.co.id
                      </a>{" "}
                      /{" "}
                      <a
                        href="mailto:rsavisena@gmail.com"
                        className="hover:underline"
                      >
                        rsavisena@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FaGlobe className="text-[#00A79C] shrink-0" />
                    <span>Website: www.rsavisena.co.id</span>
                  </li>
                </ul>
              </div>

              {/* Col 3: Tautan Cepat 5 Cabang RS */}
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-base font-semibold text-white mb-3">
                  {lang === "id"
                    ? "Tautan Cepat 5 Jaringan Cabang"
                    : "Quick Links to Our 5 Hospitals"}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {BRANCHES.map((b) => (
                    <li key={b.id}>
                      <button
                        type="button"
                        onClick={() => setDrawerBranch(b)}
                        className="w-full text-left py-1.5 px-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <span className="font-normal text-white/90 group-hover:text-[#F69320]">
                          {b.name} ({b.type})
                        </span>
                        <span className="text-[11px] font-light text-white/65">
                          {b.phone} â†’
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-6 bg-white/5 -mx-4 lg:-mx-8 px-4 lg:px-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/70">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-medium text-white">
                  Avisena Healthcare Group
                </span>{" "}
                (PT Avisena Medika). All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/tentang-kami" className="hover:text-white">
                  {lang === "id" ? "Sejarah dr. Lia" : "Founder Story"}
                </Link>
                <Link href="/komunitas" className="hover:text-white">
                  {lang === "id" ? "Kemitraan KPBS" : "KPBS Partnership"}
                </Link>
                <Link href="/investor" className="hover:text-white">
                  {lang === "id" ? "Investor & GCG" : "Investors & GCG"}
                </Link>
                <Link href="/karir" className="hover:text-white">
                  {lang === "id" ? "Karir" : "Careers"}
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Interactive Branch Detail Modal Drawer */}
        <BranchDetailModal
          branch={drawerBranch}
          lang={lang}
          onClose={() => setDrawerBranch(null)}
          onBookDoctor={(branchId, docName) => {
            setDrawerBranch(null);
            openQuickModal(
              "appointment",
              docName ? `Konsultasi ${docName}` : "Janji Temu Poliklinik",
              branchId
            );
          }}
        />

        {/* Interactive Quick Action & Booking Modal */}
        <QuickActionModal
          modalType={quickModal}
          lang={lang}
          initialBranchId={modalInitialBranch}
          initialDoctorOrPoli={modalInitialService}
          onClose={closeQuickModal}
        />

        {/* Floating Accessibility (A+/A-) & Sticky CTA Widgets */}
        <FloatingWidgets
          lang={lang}
          fontScale={fontScale}
          onIncreaseFont={() => setFontScale((prev) => Math.min(prev + 10, 125))}
          onDecreaseFont={() => setFontScale((prev) => Math.max(prev - 10, 90))}
          onResetFont={() => setFontScale(100)}
          onOpenModal={(type, service) => openQuickModal(type, service)}
          activeBranchId={selectedBranchTab}
        />
      </div>
    </AvisenaContext.Provider>
  );
};

