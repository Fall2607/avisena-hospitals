"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight, FaHouse } from "react-icons/fa6";
import { useAvisena } from "../AvisenaProvider";
import { SimpulSupergraphic } from "../SimpulSupergraphic";

interface PageHeaderBannerProps {
  badge: { id: string; en: string };
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  badge,
  title,
  subtitle,
}) => {
  const { lang } = useAvisena();

  return (
    <section className="relative bg-gradient-to-r from-[#154C96] via-[#154C96] to-[#00A79C] text-white py-12 lg:py-16 overflow-hidden border-b-4 border-[#F69320]">
      <SimpulSupergraphic
        variant="outline-white"
        opacity={0.12}
        className="w-80 h-80 absolute -top-16 -right-16 rotate-12"
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 space-y-3">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-light text-white/80">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#F69320] transition-colors"
          >
            <FaHouse className="text-[11px]" />
            <span>{lang === "id" ? "Beranda" : "Home"}</span>
          </Link>
          <FaChevronRight className="text-[9px] text-white/50" />
          <span className="font-medium text-[#F69320]">{badge[lang]}</span>
        </nav>

        <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-medium uppercase tracking-wider">
          {badge[lang]}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          {title[lang]}
        </h1>

        <p className="text-sm sm:text-base font-light text-white/85 max-w-2xl leading-relaxed">
          {subtitle[lang]}
        </p>
      </div>
    </section>
  );
};

