# Avisena Healthcare Group - Website Design & Architecture Blueprint

Dokumen ini adalah rujukan utama (*Context & Design System Specification*) untuk membangun website utama (Company Profile & Portal Jaringan Rumah Sakit) **Avisena Healthcare Group**. Seluruh aturan visual, *tone of voice*, dan struktur informasi di bawah ini diekstrak langsung dari *Visual Identity Guidelines 2026*.

---

## 1. Brand Identity & Core Philosophy

Website tidak boleh terasa seperti gedung institusi medis yang dingin, kaku, dan berjarak. Website harus memancarkan kehangatan sebuah "Rumah" dan kedekatan seorang "Tetangga".

*   **Nama Brand Utama:** Avisena Healthcare Group
*   **The Big Idea / Tagline Utama:** "Avisena, Tetangga Sehatmu"
*   **Motto:** "Melayani dengan sepenuh hati"
*   ** kampanye / Sub-tagline:** "Lebih Peduli, Lebih Dekat" / "Sehat Lebih Dekat dengan Avisena"
*   **Core Values:**
    1. Berintegritas
    2. Bertanggung Jawab
    3. Berkolaboratif
    4. Bertumbuh
*   **Brand DNA:**
    *   *Trust:* Tumbuh dari hubungan personal.
    *   *Humanity:* Pasien adalah "Tamu Mulia", bukan sekadar angka atau nomor antrean.
    *   *Pengabdian:* Pelayanan kesehatan sebagai amanah (berakar dari sejarah dr. Lia di Cimahi).
    *   *Komunitas:* Kedekatan dengan warga sekitar.
    *   *Empati:* Memahami kekhawatiran pasien secara personal.
*   **Tone of Voice & Komunikasi Web:**
    *   Gunakan bahasa yang sederhana, membumi, dan **hindari istilah medis yang rumit** (gunakan analogi simpel).
    *   Ramah, hangat, penuh empati, dan memberikan *personal touch*.
    *   *Call to Action (CTA)* dan layanan pelanggan (seperti integrasi WhatsApp) harus terasa ramah dan responsif, bukan seperti robot/jawaban generik.

---

## 2. Design System & Visual Tokens (UI/UX)

### A. Color Palette (CSS Variables)
Kombinasi warna merepresentasikan keseimbangan antara kepercayaan medis (Biru), ketenangan pemulihan (Tosca), dan kehangatan manusiawi (Oranye).

```css
:root {
  /* Primary Colors */
  --avisena-tosca: #00A79C;       /* RGB: 0, 167, 156 - Tenang, menyembuhkan, ramah, modern (Dominan/Brand) */
  --avisena-blue: #154C96;        /* RGB: 21, 76, 150 - Profesional, terpercaya, stabil (Background kuat/Header/Footer) */
  --avisena-orange: #F69320;      /* RGB: 246, 147, 32 - Hangat, optimis, energi positif (Gunakan untuk CTA, Aksen, Highlight) */

  /* Secondary / Neutral Colors */
  --avisena-dark-navy: #10162C;   /* RGB: 16, 22, 44 - Untuk warna teks utama (Body/Heading) pengganti hitam pekat */
  --avisena-grey: #B2B5B3;        /* RGB: 178, 181, 179 - Untuk border, sub-teks sekunder, atau disabled state */
  --avisena-light-bg: #E0E4E9;    /* RGB: 224, 228, 233 - Untuk background section alternatif / card surface */
  --avisena-white: #FFFFFF;       /* Background utama agar tetap bersih dan higienis */

  /* Tints Opacity Scale (80%, 50%, 15% sesuai guideline) */
  --avisena-tosca-15: rgba(0, 167, 156, 0.15);
  --avisena-blue-15: rgba(21, 76, 150, 0.15);
  --avisena-orange-15: rgba(246, 147, 32, 0.15);
}
```

### B. Typography
Typeface utama dan satu-satunya untuk seluruh antarmuka web adalah **Kanit** (tersedia di Google Fonts). Memiliki karakter *rounded* yang profesional namun tetap hangat.

*   **Google Fonts Import:**
    `@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800&display=swap');`
*   **Font Weights & Penggunaan:**
    *   `ExtraBold (800)` / `Bold (700)`: Hero Title, Main Headings (H1, H2), Angka Statistik.
    *   `SemiBold (600)` / `Medium (500)`: Sub-headings (H3, H4), Navigation Menu, Tombol (CTA), Nama Cabang RS.
    *   `Regular (400)`: Body text utama, artikel edukasi, deskripsi layanan.
    *   `Light (300)`: Caption, catatan kaki, sub-label.

### C. UI Shapes, Supergraphics & Imagery
*   **Konsep Bentuk ("Simpul Kepedulian"):** Logo dan elemen visual Avisena dibentuk dari stilasi huruf "L", DNA/Infinity, dan simpul tali dengan sudut yang membulat (*rounded*) dan lancip di titik temu.
*   **Border Radius:** Hindari sudut tajam ($0\text{px}$) pada komponen UI. Gunakan sudut membulat (*rounded corners* seperti `border-radius: 12px`, `16px`, atau `24px`, hingga bentuk *pill/capsule* `9999px` untuk tombol dan *badge* nilai perusahaan).
*   **Supergraphics:** Gunakan pola *outline* atau *filled shapes* dari pecahan simbol logo di sudut-sudut *section* atau pada *banner background* (dengan warna Biru `#154C96` atau Tosca `#00A79C`) untuk memecah kekakuan halaman.
*   **Gaya Fotografi:** Gunakan foto tenaga medis dan keluarga pasien yang tersenyum hangat, berinteraksi secara dekat, dengan pencahayaan terang dan nuansa interior yang *homey* (elemen kayu/hangat).

### D. Aturan Penggunaan Logo di Web
*   **Navbar / Header:** Gunakan **Main Logo (Horizontal)** di atas *background* Putih.
*   **Footer:** Jika menggunakan *background* `--avisena-blue` (`#154C96`) atau `--avisena-tosca` (`#00A79C`), **WAJIB** menggunakan versi logo warna Putih (*All White*) atau sesuai matriks kontras (jangan gunakan logo standar berwarna di atas background biru/tosca tanpa modifikasi kontras sesuai halaman 30 guideline).
*   **Clear Space:** Berikan jarak aman (*padding*) di sekeliling logo minimal setara dengan ukuran 1 kelopak elemen simbol Avisena.
*   **Larangan (Don'ts):** Jangan mendistorsi proporsi, jangan memberi efek *drop shadow* atau *outline* pada logo, dan jangan memisahkan elemen simbol dengan cara yang salah.

---

## 3. Hospital Network Architecture (Fokus Utama Website)

Sebagai *holding/group website*, arsitektur informasi harus mampu menaungi seluruh unit rumah sakit (Tipe C dan D di Jawa Barat) tanpa menghilangkan kedekatan lokal tiap wilayah.

### Daftar 5 Cabang Utama (Branch System):
Setiap cabang menggunakan sistem *Branch Logo* resmi (`avisena` + `[Nama Kota]` dengan font Kanit Regular di bawahnya):
1.  **RSU Avisena Cimahi** (Kantor Pusat / RS Pertama)
2.  **RSU Avisena Pangalengan**
3.  **RSU Avisena Kuningan**
4.  **RSU Avisena Subang**
5.  **RSU Avisena Cikampek**

### Fitur "Branch Switcher / Hospital Locator" (Wajib Ada):
Di halaman utama (tepat di bawah Hero Section atau terintegrasi di dalamnya), buat komponen interaktif untuk memilih cabang rumah sakit:
*   **Tampilan Card / Tab Cabang:** Menampilkan 5 kotak cabang dengan desain *rounded card*.
*   **Informasi Cepat per Cabang:**
    *   Logo Cabang (contoh: `avisena Cimahi`).
    *   Tipe Rumah Sakit (Tipe C / D) & Status **Siaga 24 Jam (IGD)**.
    *   Alamat lengkap & link Google Maps.
    *   Tombol Cepat: **"Jadwal Dokter [Nama Cabang]"**, **"Chat WhatsApp Admin"**, dan **"Panggilan Darurat / Ambulans"**.

---

## 4. Struktur Halaman & Sitemap (Page Blueprint)

### 1. Header / Navigation Bar (Sticky)
*   **Kiri:** Main Logo `avisena Healthcare Group`.
*   **Tengah (Menu):**
    *   Beranda
    *   Tentang Kami (Sejarah, Visi Misi, Nilai)
    *   **Jaringan Rumah Sakit** (Dropdown ke: Cimahi, Pangalengan, Kuningan, Subang, Cikampek)
    *   Layanan & Fasilitas
    *   Jadwal Dokter
    *   Edukasi Kesehatan & Berita
    *   Karir (Open Recruitment)
*   **Kanan (Action):**
    *   Tombol Darurat / IGD 24 Jam (Icon Telepon/Ambulans - Warna Aksen/Merah/Oranye).
    *   CTA Utama: **"Hubungi Tetangga Sehatmu"** (Menggunakan `--avisena-orange` `#F69320`, mengarah ke direktori WhatsApp tiap cabang).

### 2. Hero Section
*   **Headline:** "Avisena, Tetangga Sehatmu. Lebih Peduli, Lebih Dekat."
*   **Sub-headline:** "Jaringan rumah sakit swasta pilihan masyarakat Jawa Barat yang hadir mendampingi setiap langkah kesehatan keluarga Anda selama 24 jam dengan sepenuh hati."
*   **Visual:** Foto dokter/tenaga medis Avisena berbincang akrab dengan keluarga pasien (orang tua & anak) dalam *frame* melengkung khas elemen *Simpul Kepedulian*, dipadukan dengan *supergraphics* di latar belakang.
*   **Quick Action Bar (Floating di bawah Hero):**
    *   *Dropdown 1:* Pilih Lokasi Rumah Sakit (Cimahi, Subang, Kuningan, Pangalengan, Cikampek).
    *   *Dropdown 2:* Pilih Poliklinik / Spesialis.
    *   *Button:* "Cari Dokter / Buat Janji" (`#F69320`).

### 3. Section: Jaringan Rumah Sakit Kami (Hospital Network Showcase)
*   Menampilkan peta interaktif Jawa Barat atau *Grid System* (5 Card Cabang).
*   Penjelasan singkat bahwa Avisena hadir menjembatani program kesehatan pemerintah (menerima pasien Umum, BPJS/JKN, dan Asuransi/Mitra Perusahaan) dengan fasilitas modern dan nyaman.
*   Setiap klik pada cabang akan membuka *dedicated page* atau *modal drawer* berisi detail spesifik cabang tersebut (Daftar Poliklinik, Foto Fasilitas Kamar VIP/Reguler, Nomor Ambulans cabang terkait, dan Jadwal Praktik).

### 4. Section: Mengapa Avisena? (The Story & 3 Pillars)
*   **Storytelling Block ("Semua Berawal dari Rumah"):** Cerita singkat nan menyentuh tentang bagaimana Avisena lahir dari rumah pribadi dr. Lia di Cimahi untuk menolong buruh rantau, hingga kini bertransformasi menjadi grup rumah sakit menuju IPO.
*   **Tiga Pilar "Tetangga Sehatmu":**
    *   *Pilar Teologis:* Memandang pasien sebagai Tamu Mulia.
    *   *Pilar Historis:* Tumbuh organik dari kepercayaan (*Trust*).
    *   *Pilar Sosial:* Hadir pertama kali menolong warga sekitar dengan integritas.
*   **Statistik Kinerja (Bento Grid / Counter):**
    *   **5** Jaringan Rumah Sakit di Jawa Barat.
    *   **850+** Tenaga Medis & Staf Profesional.
    *   **1,2 Juta+** Pasien Terlayani.
    *   **98%** Tingkat Kepuasan Pasien.
    *   **24/7** Layanan Siaga IGD & Ambulans.

### 5. Section: Layanan Unggulan & Pengalaman Pasien (Brand Experience)
*   **Daftar Layanan Utama:** IGD 24 Jam, Poliklinik Spesialis (Anak, Kandungan/Obgyn, Penyakit Dalam, Bedah Umum, dll.), Rawat Inap (termasuk transformasi New Look Rawat Inap VIP), Rehabilitasi Medik, Farmasi, Laboratorium, dan Medical Check-Up (MCU).
*   **Sentuhan Khas Avisena (Highlight Box):** Informasi program komunitas seperti Khitanan Massal, Promo MCU di hari ulang tahun pasien, hingga fasilitas ramah lingkungan (gratis isi ulang air minum bagi pengunjung yang membawa *tumbler*).

### 6. Section: Edukasi Kesehatan ("Kata Tetangga Sehatmu")
*   Artikel kesehatan dengan gaya bahasa ringan dan analogi sederhana (Contoh: *"Jangan Abaikan Sering Haus, Bisa Jadi Gejala Diabetes"* atau *"Anak Demam Disertai Ruam? Waspada Campak!"*).
*   Info perubahan jadwal praktik dokter terkini.

### 7. Section: Karir & Kolaborasi
*   Banner ajakan bergabung bersama keluarga besar Avisena Healthcare Group (Menampilkan info *Open Recruitment* dengan penempatan cabang yang jelas, misal: Penempatan Cikampek / Cimahi).

### 8. Footer
*   **Background:** `--avisena-blue` (`#154C96`) dengan aksen *Supergraphics* tipis di latar belakang.
*   **Logo:** `avisena Healthcare Group` versi Putih.
*   **Kontak Kantor Pusat (RSU Avisena Cimahi):**
    *   Alamat: Jl. Melong No. 170, Kel. Melong, Kec. Cimahi Selatan, Kota Cimahi.
    *   Telepon Darurat / IGD: `(022) 6000830`
    *   WhatsApp Center: `0812-2020-0170`
    *   Email: `cs@rsavisena.co.id` / `rsavisena@gmail.com`
    *   Website: `www.rsavisena.co.id`
*   **Tautan Cepat Cabang:** Link langsung ke halaman Cimahi, Pangalengan, Kuningan, Subang, dan Cikampek.

---

## 5. Panduan Prompting untuk AI Builder (Antigravity)

Saat Anda memasangkan file `.md` ini ke dalam sistem AI builder, Anda dapat menggunakan *trigger prompt* berikut:

> *"Gunakan file `avisena_web_blueprint.md` sebagai satu-satunya acuan desain dan konten. Bangun landing page utama dan portal cabang untuk **Avisena Healthcare Group**. Pastikan menggunakan font **Kanit**, skema warna eksak (`#00A79C`, `#154C96`, `#F69320`, `#10162C`), sudut komponen yang membulat (rounded UI), dekorasi supergraphics berbentuk simpul, serta fitur interaktif untuk melihat detail ke-5 cabang rumah sakit (Cimahi, Pangalengan, Kuningan, Subang, dan Cikampek)."*