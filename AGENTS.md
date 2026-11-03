# Avisena Healthcare Group — Agent Rules

Aturan ini berlaku untuk semua AI agent yang bekerja di repo ini.

## Urutan Prioritas Desain

Jika ada instruksi yang bertentangan, ikuti urutan ini (paling atas menang):

1. **Brand Guideline Avisena**: `doc/avisena_web_design_guidelines.md` dan token di `app/globals.css`.
2. **Content & UX Strategy**: `doc/avisena_content_ux_strategy_sweef_integration.md`.
3. **Taste Skill** (`.agents/skills/design-taste-frontend/`): untuk art direction, layout, komposisi, hierarki, spacing, ritme section, dan motion.
4. **Impeccable** (`.agents/skills/impeccable/`): untuk audit deterministik 62 anti-slop rules (contrast, side-tabs, text-wrap balance, straggler, a11y), UX critique heuristics, dan playbook refactor (`critique`, `audit`, `polish`, `harden`, dll.).
5. Skill UI lain (global/user-level).

## Batasan Wajib (tidak boleh di-override oleh skill apa pun)

- **Font:** hanya **Kanit** (`--font-sans`). Jangan menambah atau mengganti typeface.
- **Warna:** hanya palet resmi: Tosca `#00A79C`, Blue `#154C96`, Orange `#F69320`, Navy `#10162C`, Grey `#B2B5B3`, Light `#E0E4E9`, White, beserta tint 80/50/15%. Gunakan token Tailwind `avisena-*` yang sudah ada.
- **Bentuk:** tidak boleh ada sudut tajam (0px) pada komponen UI. Gunakan radius 12/16/24px, pill (`9999px`), atau `.simpul-frame` / `.simpul-frame-reverse`.
- **Logo:** jangan didistorsi atau diberi shadow/outline. Gunakan versi putih di atas background biru/tosca.
- **Tone:** hangat, ramah, membumi ("Avisena, Tetangga Sehatmu"). Copy berbahasa Indonesia, tanpa istilah medis yang rumit.
- **Stack:** Next.js (App Router) + React 19 + Tailwind CSS v4 + framer-motion + react-icons. Jangan menambah dependency baru tanpa persetujuan.

## Cara Memakai Taste Skill di Project Ini

- Selalu jalankan `draw.mjs` dengan `--keep palette,type`, lalu petakan role warna/tipografi hasil draw ke token Avisena di atas.
- Sector: `health` (cek dengan `--list sectors`). Tone: `warm`.
- Untuk halaman yang sudah ada, **audit dulu** (sesuai alur redesign di skill) sebelum mengubah apa pun. Kerjakan bertahap per section.
- Gambar dari open archive (Wikimedia, Openverse, dll.) hanya sebagai placeholder sementara dan wajib diberi kredit. Prioritaskan foto resmi Avisena.
- File kerja skill disimpan di `.taste-skill/` (sudah di-ignore oleh Git).

## Cara Memakai Impeccable di Project Ini

- Launcher binary: gunakan `.agents/skills/impeccable/scripts/impeccable.cmd` (Windows).
- Jalankan detector kapan saja untuk memeriksa kode atau halaman live:
  ```powershell
  & ".agents/skills/impeccable/scripts/impeccable.cmd" detect app/
  & ".agents/skills/impeccable/scripts/impeccable.cmd" detect http://localhost:3000
  ```
- Rujukan playbook tersedia di `.agents/skills/impeccable/reference/` (misalnya `craft-floor.md`, `audit.md`, `critique.md`, `polish.md`, `harden.md`, `clarify.md`).
- Hindari anti-pattern yang dideteksi Impeccable:
  - **side-tab:** hindari `border-l-4` atau border tebal satu sisi pada kartu/elemen membulat.
  - **low-contrast:** pastikan rasio kontras teks memenuhi WCAG AA (minimal 4.5:1 untuk teks normal).
  - **unbalanced-heading & straggler:** gunakan `text-wrap: balance` pada judul dan `text-wrap: pretty` pada paragraf agar tidak ada 1 kata sendirian di baris terakhir.
