---
name: Avisena Healthcare Group Design System
description: Visual tokens and anti-slop guidelines for Avisena Healthcare Group
colors:
  primary: "#00A79C"
  brand-blue: "#154C96"
  brand-orange: "#F69320"
  brand-navy: "#10162C"
  brand-grey: "#B2B5B3"
  brand-light: "#E0E4E9"
  brand-white: "#FFFFFF"
typography:
  display:
    fontFamily: "var(--font-sans), Kanit, sans-serif"
    fontWeight: 700
    lineHeight: 1.15
  heading:
    fontFamily: "var(--font-sans), Kanit, sans-serif"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "var(--font-sans), Kanit, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.brand-white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.brand-white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
---

# Avisena Healthcare Group Design System

## Overview
Sistem desain resmi Avisena Healthcare Group dirancang untuk menghadirkan atmosfer rumah sakit yang ramah, hangat, dan terpercaya ("Avisena, Tetangga Sehatmu"). Menggabungkan prinsip anti-slop dari Taste Skill dan Impeccable dengan identitas visual resmi Avisena.

## Colors
- **Avisena Tosca (`#00A79C`):** Warna primer untuk healing, kesegaran, ketenangan, dan keramahan.
- **Avisena Blue (`#154C96`):** Warna stabilitas klinis, kredibilitas medis, digunakan untuk header solid, footer, dan badge institusional.
- **Avisena Orange (`#F69320`):** Warna aksen hangat, energi positif, dan CTA utama (Panggilan IGD, Janji Temu, Tombol Aksi).
- **Avisena Dark Navy (`#10162C`):** Warna teks utama pengganti hitam pekat untuk keterbacaan yang nyaman di mata.
- **Avisena Light Background (`#E0E4E9`):** Latar belakang permukaan kontainer, card netral, dan alternating section.
- **Avisena Grey (`#B2B5B3`):** Warna border netral dan teks pendukung sekunder.
- **Avisena White (`#FFFFFF`):** Latar belakang utama yang higienis, bersih, dan terang.

## Typography
- **Typeface Tunggal:** **Kanit** (`--font-sans`). Tidak diperkenankan menambah atau mencampur typeface lain.
- **Skala & Bobot:**
  - ExtraBold / Bold (`font-bold`, 700/800): Display hero headline dan angka statistik.
  - SemiBold (`font-semibold`, 600): Judul section H2, H3, dan label navigasi.
  - Medium (`font-medium`, 500): Sub-heading, tab, dan tombol.
  - Regular (`font-normal`, 400): Body teks artikel dan deskripsi layanan.
- **Rhythm & Line Balance:**
  - Terapkan `text-wrap: balance` pada semua heading utama agar distribusi baris rapi dan tidak ada kata menggantung.
  - Terapkan `text-wrap: pretty` pada body copy untuk mencegah straggler (1 kata sendirian di baris terakhir).
  - Teks body dijaga dengan batas lebar nyaman (`max-w-2xl` s.d. `max-w-3xl`, 65–75 karakter).

## Layout
- **Container Lebar:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Rhythm Section:** Spacing vertikal yang proporsional (`py-16 md:py-20`), ruang di atas heading selalu lebih lega dibanding ruang di bawah heading.
- **Grid Responsif:** Desain mobile-first dengan adaptasi `grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4`.

## Elevation & Depth
- **Bukan Gradient Background:** Menggunakan solid flat surface bertingkat (White, `#E0E4E9`, Dark Navy, atau Deep Blue `#154C96`).
- **Tanpa Resting Drop Shadows yang Berlebihan:** Mengandalkan border solid halus (`border border-avisena-grey/25` atau `border-avisena-light-bg`) dan perbedaan warna permukaan. Bayangan lembut hanya muncul pada interaksi `hover:shadow-md`.
- **Tanpa Colored Halo / Neon Glows:** Tidak ada `shadow-[0_0_20px_#...]` dekoratif khas AI.

## Shapes
- **Tanpa Sudut Tajam 0px:** Seluruh kontainer, kartu, modal, input form, dan gambar wajib memiliki sudut membulat:
  - Kartu & Kontainer: `rounded-2xl` (16px) atau `rounded-3xl` (24px).
  - Tombol, Chip, & Badge: `rounded-full` (pill shape).
  - Simpul Frame: Menggunakan class `.simpul-frame` atau `.simpul-frame-reverse` yang terinspirasi dari lekukan logo Avisena.

## Components
- **Primary CTA:** Tombol pill berwarna oranye Avisena `#F69320` dengan teks putih tebal.
- **Emergency Button:** Tombol merah darurat / oranye dengan ikon telepon yang jelas untuk akses IGD 24 Jam.
- **Service & Doctor Cards:** Kartu berlatar putih bersih dengan radius membulat 16/24px, border netral tipis, metadata yang jelas, dan tombol aksi terarah.
- **Branch Switcher:** Tab/selektor 5 cabang RSU Avisena dengan status 24 jam IGD.

## Do's and Don'ts
### Do's:
- Terapkan bahasa Indonesia yang hangat, bersahabat, dan mudah dicerna ("Tetangga Sehatmu").
- Gunakan ikon fungsional SVG dari `react-icons/fa6` dengan proporsi seimbang.
- Pastikan kontras teks memenuhi standar WCAG AA (minimal 4.5:1 untuk teks normal).
- Pastikan logo Avisena di atas background biru/tosca menggunakan versi warna putih.

### Don'ts:
- **Jangan gunakan teks gradien (`bg-gradient-to-r text-transparent bg-clip-text`).**
- **Jangan gunakan border aksen tebal satu sisi (`border-l-4`) pada kartu rounded ("side-tab" AI tell).**
- **Jangan gunakan micro-label/eyebrow huruf kapital serba kecil di atas heading.**
- **Jangan gunakan dekorasi kaca buram (`backdrop-blur`) berlebihan di section statis.**
- **Jangan gunakan nomor urut dekoratif (01, 02, 03) kecuali urutan langkah kronologis nyata.**
- **Jangan gunakan emoji sebagai pengganti ikon medis.**
