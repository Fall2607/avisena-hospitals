export type Lang = "id" | "en";

export interface BranchItem {
  id: string;
  city: string;
  name: string;
  badge: { id: string; en: string };
  type: string;
  igdStatus: { id: string; en: string };
  address: string;
  phone: string;
  ambulancePhone: string;
  whatsapp: string;
  whatsappDisplay: string;
  mapsUrl: string;
  logoColor: string;
  logoWhite: string;
  logoVerticalColor: string;
  image: string;
  bedCount: string;
  polyclinics: string[];
  featuredFacilities: { id: string[]; en: string[] };
  description: { id: string; en: string };
}

export const BRANCHES: BranchItem[] = [
  {
    id: "cimahi",
    city: "Cimahi",
    name: "RSU Avisena Cimahi",
    badge: {
      id: "Kantor Pusat • RS Pertama",
      en: "Head Office • Flagship Hospital",
    },
    type: "Tipe C",
    igdStatus: { id: "Siaga 24 Jam (IGD & Ambulans)", en: "24/7 Emergency & Ambulance" },
    address: "Jl. Melong No. 170, Kel. Melong, Kec. Cimahi Selatan, Kota Cimahi, Jawa Barat",
    phone: "(022) 6000830",
    ambulancePhone: "(022) 6000830",
    whatsapp: "6281220200170",
    whatsappDisplay: "0812-2020-0170",
    mapsUrl: "https://maps.google.com/?q=RSU+Avisena+Cimahi+Jl.+Melong+No.+170",
    logoColor: "/Logo/Logo_Cimahi/Horizontal/FA LOGO AVISENA_Cimahi Horizontal Color.svg",
    logoWhite: "/Logo/Logo_Cimahi/Horizontal/FA LOGO AVISENA_Cimahi Horizontal White.svg",
    logoVerticalColor: "/Logo/Logo_Cimahi/FA LOGO AVISENA_Cimahi Color.svg",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80",
    bedCount: "145+ Tempat Tidur",
    polyclinics: [
      "Spesialis Anak",
      "Spesialis Kandungan (Obgyn)",
      "Spesialis Penyakit Dalam",
      "Spesialis Bedah Umum",
      "Spesialis Jantung & Pembuluh Darah",
      "Spesialis Saraf (Neurologi)",
      "Spesialis Mata",
      "Spesialis THT-KL",
      "Poliklinik Gigi & Mulut",
      "Gizi Klinik & Rehabilitasi Medik",
    ],
    featuredFacilities: {
      id: [
        "IGD Terpadu & Ambulans Siaga 24 Jam",
        "New Look Rawat Inap VIP Homey",
        "ICU, NICU & PICU Modern",
        "Kamar Operasi Berstandar Tinggi",
        "Medical Check-Up (MCU) Terpadu & Water Refill Station",
      ],
      en: [
        "24/7 Integrated Emergency & Ambulance",
        "New Look Homey VIP Inpatient Suites",
        "Modern ICU, NICU & PICU",
        "High-Standard Operating Theaters",
        "Comprehensive Medical Check-Up (MCU) & Water Refill Station",
      ],
    },
    description: {
      id: "Lahir dari rumah pribadi dr. Lia Yuliana Elsis untuk menolong buruh rantau dan warga sekitar, RSU Avisena Cimahi kini menjadi pusat komando pelayanan Avisena Healthcare Group yang hangat dan terpercaya.",
      en: "Born from the private home of dr. Lia Yuliana Elsis to care for migrant factory workers and neighbors, RSU Avisena Cimahi now serves as the warm, trusted flagship hub of Avisena Healthcare Group.",
    },
  },
  {
    id: "pangalengan",
    city: "Pangalengan",
    name: "RSU Avisena Pangalengan",
    badge: {
      id: "Kolaborasi KPBS Pangalengan",
      en: "KPBS Pangalengan Collaboration",
    },
    type: "Tipe D",
    igdStatus: { id: "Siaga 24 Jam (IGD & Ambulans)", en: "24/7 Emergency & Ambulance" },
    address: "Jl. Raya Pangalengan, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat",
    phone: "(022) 5979118",
    ambulancePhone: "(022) 5979118",
    whatsapp: "6281220200171",
    whatsappDisplay: "0812-2020-0171",
    mapsUrl: "https://maps.google.com/?q=RS+KPBS+Pangalengan+Avisena",
    logoColor: "/Logo/Logo_Pangalengan/Horizontal/FA LOGO AVISENA_Pangalengan Horizontal Color.svg",
    logoWhite: "/Logo/Logo_Pangalengan/Horizontal/FA LOGO AVISENA_Pangalengan Horizontal White.svg",
    logoVerticalColor: "/Logo/Logo_Pangalengan/FA LOGO AVISENA_Pangalengan Color.svg",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    bedCount: "85+ Tempat Tidur",
    polyclinics: [
      "Spesialis Anak",
      "Spesialis Kandungan (Obgyn)",
      "Spesialis Penyakit Dalam",
      "Spesialis Bedah Umum",
      "Poliklinik Gigi",
      "Kesehatan Ibu & Anak (KIA)",
    ],
    featuredFacilities: {
      id: [
        "IGD 24 Jam & Armada RS Keliling Pegunungan",
        "Layanan Prioritas Peternak KPBS & Warga Bandung Selatan",
        "Persalinan Ramah Ibu & Bayi (PONEK 24 Jam)",
        "Laboratorium, Radiologi & Farmasi 24 Jam",
      ],
      en: [
        "24/7 Emergency & Highland Mobile Hospital Fleet",
        "Dedicated Care for KPBS Dairy Farmers & South Bandung Community",
        "24/7 Maternal & Neonatal Care (PONEK)",
        "24/7 Laboratory, Radiology & Pharmacy",
      ],
    },
    description: {
      id: "Wujud 'Full-Circle Journey' dr. Lia bersama Koperasi Peternakan Bandung Selatan (KPBS)—menghadirkan akses kesehatan modern bagi ribuan keluarga peternak dan masyarakat dataran tinggi Bandung Selatan.",
      en: "A 'Full-Circle Journey' uniting dr. Lia with the South Bandung Dairy Cooperative (KPBS)—bringing modern, dignified healthcare to thousands of dairy farming families and highland communities.",
    },
  },
  {
    id: "kuningan",
    city: "Kuningan",
    name: "RSU Avisena Kuningan",
    badge: {
      id: "Wilayah Priangan Timur",
      en: "East Priangan Hub",
    },
    type: "Tipe C",
    igdStatus: { id: "Siaga 24 Jam (IGD & Ambulans)", en: "24/7 Emergency & Ambulance" },
    address: "Jl. Raya Cirendang - Cigugur, Kabupaten Kuningan, Jawa Barat",
    phone: "(0232) 8890170",
    ambulancePhone: "(0232) 8890170",
    whatsapp: "6281220200172",
    whatsappDisplay: "0812-2020-0172",
    mapsUrl: "https://maps.google.com/?q=RSU+Avisena+Kuningan",
    logoColor: "/Logo/Logo_Kuningan/Horizontal/FA LOGO AVISENA_Kuningan Horizontal Color.svg",
    logoWhite: "/Logo/Logo_Kuningan/Horizontal/FA LOGO AVISENA_Kuningan Horizontal White.svg",
    logoVerticalColor: "/Logo/Logo_Kuningan/FA LOGO AVISENA_Kuningan Color.svg",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
    bedCount: "110+ Tempat Tidur",
    polyclinics: [
      "Spesialis Penyakit Dalam",
      "Spesialis Anak",
      "Spesialis Kandungan (Obgyn)",
      "Spesialis Bedah Umum",
      "Spesialis Saraf (Neurologi)",
      "Fisioterapi & Rehabilitasi Medik",
      "Poliklinik Gigi",
    ],
    featuredFacilities: {
      id: [
        "IGD 24 Jam & Penanganan Trauma Cepat",
        "Pusat Rehabilitasi Medik & Lansia Ramah Keluarga",
        "Rawat Inap VIP & Kelas Standar KRIS Nyaman",
        "Layanan Pasien Umum, BPJS/JKN & Asuransi",
      ],
      en: [
        "24/7 Emergency & Rapid Trauma Response",
        "Family-Friendly Medical Rehabilitation & Geriatric Care",
        "Comfortable VIP & KRIS Standard Inpatient Rooms",
        "General, BPJS/JKN & Private Insurance Coverage",
      ],
    },
    description: {
      id: "Hadir sebagai tetangga sehat bagi masyarakat Kabupaten Kuningan dan sekitarnya dengan suasana asri yang mempercepat ketenangan pemulihan pasien.",
      en: "Serving as a caring neighbor for Kuningan Regency and surrounding communities with a serene healing environment designed for faster patient recovery.",
    },
  },
  {
    id: "subang",
    city: "Subang",
    name: "RSU Avisena Subang",
    badge: {
      id: "Koridor Utara Jawa Barat",
      en: "North West Java Corridor",
    },
    type: "Tipe C",
    igdStatus: { id: "Siaga 24 Jam (IGD & Ambulans)", en: "24/7 Emergency & Ambulance" },
    address: "Jl. Otto Iskandardinata, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat",
    phone: "(0260) 411170",
    ambulancePhone: "(0260) 411170",
    whatsapp: "6281220200173",
    whatsappDisplay: "0812-2020-0173",
    mapsUrl: "https://maps.google.com/?q=RSU+Avisena+Subang",
    logoColor: "/Logo/Logo_Subang/Horizontal/FA LOGO AVISENA_Subang Horizontal Color.svg",
    logoWhite: "/Logo/Logo_Subang/Horizontal/FA LOGO AVISENA_Subang Horizontal White.svg",
    logoVerticalColor: "/Logo/Logo_Subang/FA LOGO AVISENA_Subang Color.svg",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80",
    bedCount: "115+ Tempat Tidur",
    polyclinics: [
      "Spesialis Kandungan (Obgyn)",
      "Spesialis Anak",
      "Spesialis Penyakit Dalam",
      "Spesialis Bedah Umum",
      "Spesialis Mata",
      "Spesialis Gizi Klinik",
      "Medical Check-Up (MCU) Industri",
    ],
    featuredFacilities: {
      id: [
        "IGD & Trauma Center Jalur Utama 24 Jam",
        "Poliklinik Ibu & Anak Terpadu",
        "Layanan MCU Korporat & Pekerja Industri",
        "Farmasi Cepat Tanpa Antre Lama",
      ],
      en: [
        "24/7 Highway Corridor Emergency & Trauma Center",
        "Integrated Maternal & Child Polyclinic",
        "Corporate & Industrial Workforce MCU Center",
        "Fast-Track Pharmacy Service",
      ],
    },
    description: {
      id: "Menjembatani kebutuhan layanan kesehatan keluarga dan kawasan pertumbuhan Subang dengan fasilitas diagnostik modern dan keramahan khas Avisena.",
      en: "Bridging family healthcare and Subang's growing community needs with modern diagnostics and Avisena's signature neighborly hospitality.",
    },
  },
  {
    id: "cikampek",
    city: "Cikampek",
    name: "RSU Avisena Cikampek",
    badge: {
      id: "Sentra Industri & Komunitas",
      en: "Industrial & Community Hub",
    },
    type: "Tipe C",
    igdStatus: { id: "Siaga 24 Jam (IGD & Ambulans)", en: "24/7 Emergency & Ambulance" },
    address: "Jl. Ir. H. Juanda, Cikampek, Kabupaten Karawang, Jawa Barat",
    phone: "(0264) 318170",
    ambulancePhone: "(0264) 318170",
    whatsapp: "6281220200174",
    whatsappDisplay: "0812-2020-0174",
    mapsUrl: "https://maps.google.com/?q=RSU+Avisena+Cikampek",
    logoColor: "/Logo/Logo_Cikampek/Horizontal/FA LOGO AVISENA_Cikampek Horizontal Color.svg",
    logoWhite: "/Logo/Logo_Cikampek/Horizontal/FA LOGO AVISENA_Cikampek Horizontal White.svg",
    logoVerticalColor: "/Logo/Logo_Cikampek/FA LOGO AVISENA_Cikampek Color.svg",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    bedCount: "120+ Tempat Tidur",
    polyclinics: [
      "Spesialis Penyakit Dalam",
      "Spesialis Bedah Umum & Ortopedi",
      "Spesialis Anak",
      "Spesialis Kandungan (Obgyn)",
      "Spesialis Okupasi & MCU Pekerja",
      "Spesialis Jantung",
      "Fisioterapi & Rehabilitasi Medik",
    ],
    featuredFacilities: {
      id: [
        "IGD Kecelakaan Kerja & Trauma 24 Jam",
        "Pusat Kesehatan Pekerja & Mitra Perusahaan",
        "New Look Rawat Inap VIP & Reguler",
        "Radiologi Digital, USG 4D & Laboratorium 24 Jam",
      ],
      en: [
        "24/7 Occupational & Trauma Emergency Center",
        "Corporate Partner & Workforce Wellness Hub",
        "New Look VIP & Regular Inpatient Suites",
        "Digital Radiology, 4D Ultrasound & 24/7 Lab",
      ],
    },
    description: {
      id: "Melanjutkan semangat awal dr. Lia dalam merawat para pekerja pabrik dan keluarganya di koridor timur Jawa Barat dengan layanan cepat, bermartabat, dan komprehensif.",
      en: "Carrying forward dr. Lia's founding mission of caring for factory workers and their families in West Java's eastern corridor with fast, dignified, and comprehensive care.",
    },
  },
];

export interface BentoServiceItem {
  id: string;
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  tag: { id: string; en: string };
  bgClass: string;
  actionType: "appointment" | "visitor" | "medicine" | "insurance" | "education" | "feedback";
}

export const BENTO_SERVICES: BentoServiceItem[] = [
  {
    id: "appointment",
    title: {
      id: "Buat / Ubah Janji Temu",
      en: "Make / Change / Cancel Appointment",
    },
    subtitle: {
      id: "Pilih cabang rumah sakit, poliklinik, dan jadwal dokter tanpa harus antre dari pagi.",
      en: "Select your preferred Avisena branch, specialty clinic, and doctor schedule effortlessly.",
    },
    tag: { id: "Akses Cepat #1", en: "Quick Access #1" },
    bgClass: "bg-[rgba(0,167,156,0.15)] border-[#00A79C]/30",
    actionType: "appointment",
  },
  {
    id: "visitor",
    title: {
      id: "Panduan Rawat Inap & Jam Besuk",
      en: "Patient & Visitor Info",
    },
    subtitle: {
      id: "Informasi jam kunjung keluarga, hak Tamu Mulia, dan tata tertib kenyamanan bersama.",
      en: "Visiting hours, inpatient room preparation, and our Noble Guest care guidelines.",
    },
    tag: { id: "Info Tamu Mulia", en: "Visitor Guide" },
    bgClass: "bg-[#E0E4E9] border-[#B2B5B3]/50",
    actionType: "visitor",
  },
  {
    id: "medicine",
    title: {
      id: "Layanan Antar / Siap Obat Tanpa Antre",
      en: "Medicines Order Service",
    },
    subtitle: {
      id: "Tebus resep lebih tenang. Obat diantar langsung ke rumah atau siap diambil tanpa menunggu lama.",
      en: "Skip the pharmacy queue. Have your prescriptions delivered home or ready for express pickup.",
    },
    tag: { id: "Farmasi Ramah", en: "Express Pharmacy" },
    bgClass: "bg-[rgba(246,147,32,0.15)] border-[#F69320]/30",
    actionType: "medicine",
  },
  {
    id: "insurance",
    title: {
      id: "Informasi Pembayaran, BPJS & Asuransi",
      en: "Pay Online & Insurance Info",
    },
    subtitle: {
      id: "Kami melayani sepenuh hati pasien Umum, BPJS Kesehatan (JKN), Asuransi Swasta & Mitra Perusahaan.",
      en: "Seamless coverage for General patients, BPJS Kesehatan (JKN), Private Insurers & Corporate Partners.",
    },
    tag: { id: "BPJS & Mitra", en: "Coverage & Billing" },
    bgClass: "bg-[#E0E4E9] border-[#B2B5B3]/50",
    actionType: "insurance",
  },
  {
    id: "education",
    title: {
      id: "Edukasi Kesehatan (Kata Tetangga Sehatmu)",
      en: "Patient Education & Health Literacy",
    },
    subtitle: {
      id: "Tips kesehatan keluarga dengan bahasa sederhana yang membumi dan mudah dipahami.",
      en: "Easy-to-understand family health tips using clear, everyday analogies without complex jargon.",
    },
    tag: { id: "Literasi Sehat", en: "Health Literacy" },
    bgClass: "bg-[rgba(0,167,156,0.15)] border-[#00A79C]/30",
    actionType: "education",
  },
  {
    id: "feedback",
    title: {
      id: "Suara Tetangga (Kotak Saran Pasien)",
      en: "Neighbor Feedback & Care Line",
    },
    subtitle: {
      id: "Ceritakan pengalaman Anda agar kami terus bertumbuh menjadi tetangga sehat yang lebih baik.",
      en: "Share your care experience to help us continually grow as your trusted healthcare neighbor.",
    },
    tag: { id: "98% Kepuasan", en: "98% Satisfaction" },
    bgClass: "bg-[rgba(246,147,32,0.15)] border-[#F69320]/30",
    actionType: "feedback",
  },
];

export type ServiceFocusGroup =
  | "ibu-anak"
  | "dewasa-jantung"
  | "bedah-indra"
  | "darurat-mcu";

export interface SpecialtyItem {
  id: string;
  letter: string;
  category: "poliklinik" | "penunjang";
  focusGroup: ServiceFocusGroup;
  name: { id: string; en: string };
  simpleAnalogy: { id: string; en: string };
  symptomTags: { id: string[]; en: string[] };
  branches: string[];
}

export const SPECIALTIES_DATA: SpecialtyItem[] = [
  {
    id: "anak",
    letter: "A",
    category: "poliklinik",
    focusGroup: "ibu-anak",
    name: { id: "Anak (Pediatri & Tumbuh Kembang)", en: "Pediatrics & Child Growth" },
    simpleAnalogy: {
      id: "Pendamping tumbuh kembang buah hati sejak lahir, imunisasi lengkap, hingga penanganan demam & alergi dengan pendekatan ramah anak.",
      en: "Warm, child-friendly care accompanying your little ones from newborn immunization to growth milestones and pediatric illnesses.",
    },
    symptomTags: {
      id: ["Imunisasi Anak", "Demam & Batuk", "Tumbuh Kembang"],
      en: ["Child Immunization", "Fever & Flu", "Growth & Nutrition"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "bedah",
    letter: "B",
    category: "poliklinik",
    focusGroup: "bedah-indra",
    name: { id: "Bedah Umum & Laparoskopi", en: "General & Laparoscopic Surgery" },
    simpleAnalogy: {
      id: "Penanganan tindakan operasi yang aman dan minim nyeri agar Anda bisa pulih lebih cepat dan kembali berkumpul bersama keluarga.",
      en: "Safe, minimally invasive surgical procedures focused on gentle recovery so you can return home to your family sooner.",
    },
    symptomTags: {
      id: ["Operasi Minim Luka", "Usus Buntu & Hernia", "Perawatan Luka"],
      en: ["Minimally Invasive", "Appendicitis & Hernia", "Wound Care"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "gigi",
    letter: "G",
    category: "poliklinik",
    focusGroup: "bedah-indra",
    name: { id: "Gigi & Kesehatan Mulut", en: "Dental & Oral Care" },
    simpleAnalogy: {
      id: "Merawat senyum sehat keluarga tanpa rasa takut—mulai dari pembersihan karang gigi, tambal, hingga perawatan gusi.",
      en: "Stress-free dental care to keep your family smiling brightly—from routine scaling and fillings to gentle gum care.",
    },
    symptomTags: {
      id: ["Sakit Gigi & Gusi", "Bersih Karang Gigi", "Tambal & Cabut Gigi"],
      en: ["Toothache & Gums", "Dental Scaling", "Fillings & Extraction"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "gizi",
    letter: "G",
    category: "poliklinik",
    focusGroup: "ibu-anak",
    name: { id: "Gizi Klinik (Nutrisi Keluarga)", en: "Clinical Nutrition" },
    simpleAnalogy: {
      id: "Ibarat mengatur bahan bakar terbaik untuk tubuh—membantu pengaturan pola makan untuk diabetes, pemulihan pasca sakit, dan gizi anak.",
      en: "Like choosing the best fuel for your body—tailored meal planning for diabetes management, recovery, and child nutrition.",
    },
    symptomTags: {
      id: ["Pola Makan Diabetes", "Gizi Anak & MPASI", "Diet Medis"],
      en: ["Diabetic Meal Plan", "Child Nutrition", "Medical Diet"],
    },
    branches: ["Cimahi", "Subang", "Cikampek"],
  },
  {
    id: "jantung",
    letter: "J",
    category: "poliklinik",
    focusGroup: "dewasa-jantung",
    name: { id: "Jantung & Pembuluh Darah (Kardiologi)", en: "Cardiology & Vascular Care" },
    simpleAnalogy: {
      id: "Menjaga 'mesin pompa utama' tubuh Anda tetap berdetak stabil melalui pemeriksaan EKG, Echo, dan pencegahan hipertensi.",
      en: "Keeping your body's 'main pump' beating steadily with ECG, Echocardiography, and proactive blood pressure care.",
    },
    symptomTags: {
      id: ["Nyeri Dada & Berdebar", "Hipertensi / Darah Tinggi", "EKG & Echo Jantung"],
      en: ["Chest Pain", "Hypertension", "ECG & Echocardiogram"],
    },
    branches: ["Cimahi", "Cikampek"],
  },
  {
    id: "kandungan",
    letter: "K",
    category: "poliklinik",
    focusGroup: "ibu-anak",
    name: { id: "Kandungan & Kebidanan (Obgyn)", en: "Obstetrics & Gynecology (Obgyn)" },
    simpleAnalogy: {
      id: "Teman setia Bunda sejak program hamil, pemeriksaan USG 4D yang jelas, hingga persalinan hangat 24 jam.",
      en: "A mother's trusted companion from prenatal checkups and 4D ultrasound to warm, round-the-clock maternity delivery.",
    },
    symptomTags: {
      id: ["USG 4D Kehamilan", "Persalinan 24 Jam", "Program Hamil & KB"],
      en: ["4D Pregnancy Ultrasound", "24/7 Maternity", "Fertility & Prenatal"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "mata",
    letter: "M",
    category: "poliklinik",
    focusGroup: "bedah-indra",
    name: { id: "Mata (Oftalmologi)", en: "Ophthalmology (Eye Clinic)" },
    simpleAnalogy: {
      id: "Menjaga jendela penglihatan Anda tetap jernih, mulai dari pemeriksaan gangguan rabun hingga penanganan katarak.",
      en: "Keeping your window to the world crystal clear, from vision screening to gentle cataract care.",
    },
    symptomTags: {
      id: ["Pandangan Kabur", "Skrining Katarak", "Iritasi & Infeksi Mata"],
      en: ["Blurry Vision", "Cataract Screening", "Eye Irritation"],
    },
    branches: ["Cimahi", "Subang"],
  },
  {
    id: "penyakit-dalam",
    letter: "P",
    category: "poliklinik",
    focusGroup: "dewasa-jantung",
    name: { id: "Penyakit Dalam (Interna)", en: "Internal Medicine" },
    simpleAnalogy: {
      id: "Detektif kesehatan organ dalam dewasa—membantu mengelola gula darah, pencernaan, kolesterol, dan daya tahan tubuh secara menyeluruh.",
      en: "Comprehensive adult organ care—helping manage blood sugar, digestion, cholesterol, and overall vitality.",
    },
    symptomTags: {
      id: ["Diabetes & Kolesterol", "Lambung / GERD", "Demam & Infeksi Dewasa"],
      en: ["Diabetes & Cholesterol", "Gastric / GERD", "Adult Internal Care"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "rehab-medik",
    letter: "R",
    category: "poliklinik",
    focusGroup: "bedah-indra",
    name: { id: "Rehabilitasi Medik & Fisioterapi", en: "Medical Rehabilitation & Physiotherapy" },
    simpleAnalogy: {
      id: "Melatih kembali gerak tubuh yang kaku akibat cedera, nyeri pinggang, atau pemulihan stroke agar kembali mandiri.",
      en: "Restoring natural movement and independence after injury, back pain, or stroke with guided physical therapy.",
    },
    symptomTags: {
      id: ["Nyeri Pinggang & Sendi", "Pemulihan Pasca Stroke", "Terapi Cedera Kerja"],
      en: ["Back & Joint Pain", "Post-Stroke Rehab", "Injury Therapy"],
    },
    branches: ["Cimahi", "Kuningan", "Cikampek"],
  },
  {
    id: "saraf",
    letter: "S",
    category: "poliklinik",
    focusGroup: "dewasa-jantung",
    name: { id: "Saraf (Neurologi)", en: "Neurology" },
    simpleAnalogy: {
      id: "Merawat jalur kabel komunikasi tubuh Anda—menangani keluhan sering pusing/vertigo, kesemutan, saraf kejepit, hingga stroke.",
      en: "Caring for your body's communication network—treating vertigo, numbness, pinched nerves, and stroke recovery.",
    },
    symptomTags: {
      id: ["Vertigo & Sakit Kepala", "Saraf Kejepit & Kebas", "Penanganan Stroke"],
      en: ["Vertigo & Migraine", "Pinched Nerve", "Stroke Care"],
    },
    branches: ["Cimahi", "Kuningan"],
  },
  {
    id: "tht",
    letter: "T",
    category: "poliklinik",
    focusGroup: "bedah-indra",
    name: { id: "THT-KL (Telinga, Hidung & Tenggorokan)", en: "ENT (Ear, Nose & Throat)" },
    simpleAnalogy: {
      id: "Solusi nyaman untuk gangguan pendengaran, alergi hidung tersumbat, amandel, dan kesehatan suara.",
      en: "Gentle relief for hearing concerns, sinus allergies, tonsils, and throat wellness.",
    },
    symptomTags: {
      id: ["Telinga Berdenging", "Sinusitis & Alergi", "Radang Amandel"],
      en: ["Ear Care & Hearing", "Sinus & Allergy", "Tonsillitis"],
    },
    branches: ["Cimahi", "Subang"],
  },
  // Layanan Penunjang & Fasilitas
  {
    id: "igd-24",
    letter: "I",
    category: "penunjang",
    focusGroup: "darurat-mcu",
    name: { id: "IGD 24 Jam & Ambulans Siaga", en: "24/7 Emergency & Ambulance" },
    simpleAnalogy: {
      id: "Pintu pertolongan pertama yang tidak pernah tutup. Tim dokter & perawat kami siaga menjemput dan menolong kapan pun dibutuhkan.",
      en: "Our emergency doors never close. Doctors, nurses, and ambulance teams stand ready 24/7 for rapid life-saving care.",
    },
    symptomTags: {
      id: ["Gawat Darurat 24 Jam", "Jemput Ambulans Cepat", "Trauma & Kecelakaan Kerja"],
      en: ["24/7 Emergency Room", "Ambulance Pickup", "Workforce Trauma"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "mcu",
    letter: "M",
    category: "penunjang",
    focusGroup: "darurat-mcu",
    name: { id: "Medical Check-Up (MCU) & Promo Ulang Tahun", en: "Medical Check-Up (MCU) & Birthday Wellness" },
    simpleAnalogy: {
      id: "Servis berkala untuk tubuh sebelum muncul keluhan. Tersedia paket keluarga, karyawan pabrik, dan promo spesial di hari ulang tahun Anda!",
      en: "Preventive tune-ups for your health—offering family packages, industrial workforce screenings, and special patient birthday promos!",
    },
    symptomTags: {
      id: ["Skrining Kesehatan Tahunan", "MCU Karyawan & Pabrik", "Diskon Ulang Tahun"],
      en: ["Annual Health Screening", "Corporate Workforce MCU", "Birthday Promo"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "lab-radiologi",
    letter: "L",
    category: "penunjang",
    focusGroup: "darurat-mcu",
    name: { id: "Laboratorium & Radiologi 24 Jam", en: "24/7 Laboratory & Digital Radiology" },
    simpleAnalogy: {
      id: "Pemeriksaan darah, Rontgen, dan USG yang akurat dan cepat agar dokter dapat memberikan obat yang paling tepat.",
      en: "Fast, accurate blood tests, digital X-rays, and ultrasounds for clear and reliable medical diagnosis.",
    },
    symptomTags: {
      id: ["Cek Darah Lengkap 24 Jam", "Rontgen Digital", "USG Abdomen & 4D"],
      en: ["24/7 Blood Tests", "Digital X-Ray", "Ultrasound Imaging"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "farmasi-24",
    letter: "F",
    category: "penunjang",
    focusGroup: "darurat-mcu",
    name: { id: "Farmasi 24 Jam & Konseling Obat", en: "24/7 Pharmacy & Medication Counseling" },
    simpleAnalogy: {
      id: "Apoteker ramah yang menjelaskan cara minum obat dengan bahasa sederhana, dilengkapi layanan antar obat ke rumah.",
      en: "Friendly pharmacists who explain your medication clearly in everyday terms, complete with home delivery service.",
    },
    symptomTags: {
      id: ["Tebus Resep 24 Jam", "Antar Obat ke Rumah", "Konsultasi Apoteker"],
      en: ["24/7 Prescription", "Home Medicine Delivery", "Pharmacist Counseling"],
    },
    branches: ["Cimahi", "Pangalengan", "Kuningan", "Subang", "Cikampek"],
  },
  {
    id: "kamar-operasi",
    letter: "K",
    category: "penunjang",
    focusGroup: "darurat-mcu",
    name: { id: "Kamar Operasi Steril & ICU/NICU", en: "Sterile Operating Theaters & ICU/NICU" },
    simpleAnalogy: {
      id: "Ruang tindakan berstandar keselamatan tinggi dengan pengawasan intensif penuh kasih bagi pasien dewasa maupun bayi baru lahir.",
      en: "High-safety surgical suites and intensive care units providing vigilant, compassionate monitoring for adults and newborns.",
    },
    symptomTags: {
      id: ["Rawat Intensif ICU", "NICU Bayi Baru Lahir", "Kamar Operasi Steril"],
      en: ["Adult ICU Care", "Newborn NICU", "Sterile Surgical Suite"],
    },
    branches: ["Cimahi", "Kuningan", "Subang", "Cikampek"],
  },
];

export interface InpatientRoomClass {
  id: string;
  name: { id: string; en: string };
  badge: { id: string; en: string };
  capacity: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string[]; en: string[] };
  image: string;
}

export const INPATIENT_ROOMS: InpatientRoomClass[] = [
  {
    id: "vip",
    name: {
      id: "Kelas VIP (New Look Homey Interior)",
      en: "VIP Suite (New Look Homey Interior)",
    },
    badge: { id: "Transformasi Baru", en: "New Look Transformation" },
    capacity: { id: "1 Pasien + Area Keluarga Luas", en: "1 Patient + Spacious Family Lounge" },
    description: {
      id: "Dirancang seperti kamar rumah sendiri dengan elemen interior kayu yang hangat, pencahayaan alami yang menenangkan, dan ruang privasi bagi keluarga yang mendampingi.",
      en: "Designed like a warm bedroom at home with soothing wood accents, bright natural lighting, and private space for accompanying family members.",
    },
    features: {
      id: [
        "Tempat Tidur Elektrik Medis Nyaman",
        "Interior Bernuansa Kayu Hangat (Homey)",
        "Sofa Bed Keluarga & Meja Makan",
        "Smart TV, Wi-Fi Cepat & Kulkas Mini",
        "Kamar Mandi Dalam dengan Air Hangat",
        "Gratis Welcome Drink & Isi Ulang Tumbler",
      ],
      en: [
        "Ergonomic Electric Medical Bed",
        "Warm Wood-Accented Homey Interior",
        "Family Sofa Bed & Dining Table",
        "Smart TV, High-Speed Wi-Fi & Mini Fridge",
        "En-Suite Bathroom with Warm Water",
        "Complimentary Welcome Kit & Tumbler Refill",
      ],
    },
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "kelas-1",
    name: { id: "Kelas 1 (Nyaman & Tenang)", en: "Class 1 (Semi-Private Comfort)" },
    badge: { id: "Privasi Terjaga", en: "Enhanced Privacy" },
    capacity: { id: "2 Tempat Tidur per Ruangan", en: "2 Beds per Room" },
    description: {
      id: "Kamar perawatan untuk 2 pasien dengan sekat privasi penuh, sirkulasi udara sejuk, dan suasana tenang agar istirahat lebih optimal.",
      en: "A serene 2-bed recovery room with full privacy curtains, air conditioning, and a restful atmosphere.",
    },
    features: {
      id: [
        "2 Tempat Tidur dengan Tirai Privasi Penuh",
        "AC, TV LED & Lemari Pribadi",
        "Kursi Penunggu Pasien yang Empuk",
        "Kamar Mandi Dalam Bersih & Higienis",
        "Bel Panggil Perawat Responsif 24 Jam",
      ],
      en: [
        "2 Beds with Full Privacy Partitions",
        "AC, LED TV & Personal Bedside Cabinet",
        "Cushioned Companion Chair",
        "Hygienic En-Suite Bathroom",
        "24/7 Responsive Nurse Call Bell",
      ],
    },
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "kelas-2",
    name: { id: "Kelas 2 (Hangat & Bersahabat)", en: "Class 2 (Warm & Restful)" },
    badge: { id: "Pilihan Keluarga", en: "Family Choice" },
    capacity: { id: "3–4 Tempat Tidur per Ruangan", en: "3–4 Beds per Room" },
    description: {
      id: "Ruang rawat inap yang terang, bersih, dan lapang dengan jarak antar tempat tidur yang lega sesuai standar pencegahan infeksi.",
      en: "Bright, clean, and airy inpatient room with generous spacing between beds for safe, comfortable recovery.",
    },
    features: {
      id: [
        "Jarak Antar Tempat Tidur Lega & Ber-AC",
        "Pencahayaan Terang & Sirkulasi Udara Sehat",
        "Loker Penyimpanan masing-masing Pasien",
        "Kamar Mandi Dalam dengan Pegangan Pengaman (Grab Bar)",
      ],
      en: [
        "Spacious Air-Conditioned Bed Layout",
        "Bright Natural Light & Healthy Airflow",
        "Individual Patient Storage Lockers",
        "En-Suite Bathroom with Safety Grab Bars",
      ],
    },
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "kelas-3",
    name: { id: "Kelas 3 & Standar KRIS (Bermartabat)", en: "Class 3 & KRIS Standard (Dignified Care)" },
    badge: { id: "Ramah BPJS / JKN", en: "BPJS / JKN Friendly" },
    capacity: { id: "Maksimal 4 Tempat Tidur (Standar KRIS)", en: "Max 4 Beds (National KRIS Standard)" },
    description: {
      id: "Di Avisena, setiap pasien adalah Tamu Mulia. Ruang Kelas 3 kami telah mengadopsi standar Kelas Rawat Inap Standar (KRIS) yang ber-AC, bersih, wangi, dan manusiawi.",
      en: "At Avisena, every patient is a Noble Guest. Our Class 3 rooms meet modern KRIS standards—air-conditioned, spotless, and dignified for all.",
    },
    features: {
      id: [
        "Ber-AC Sejuk & Maksimal 4 Tempat Tidur (Standar KRIS)",
        "Tirai Pembatas & Outlet Oksigen di Setiap Bed",
        "Kamar Mandi Dalam Ramah Disabilitas",
        "Pelayanan Setara & Sepenuh Hati Tanpa Diskriminasi",
      ],
      en: [
        "Air-Conditioned & Max 4 Beds (KRIS Standard)",
        "Privacy Curtains & Oxygen Outlet at Every Bed",
        "Accessible En-Suite Bathroom",
        "Equal, Wholehearted Care Without Discrimination",
      ],
    },
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
  },
];

export interface DoctorItem {
  id: string;
  name: string;
  specialty: { id: string; en: string };
  specialtyKey: string;
  branchId: string;
  branchName: string;
  schedule: { id: string; en: string };
  photo: string;
  experienceBadge: { id: string; en: string };
}

export const DOCTORS_LIST: DoctorItem[] = [
  {
    id: "dr-ratna-sp-a",
    name: "dr. Ratna Dewi Kartika, Sp.A",
    specialty: { id: "Spesialis Anak", en: "Pediatrician" },
    specialtyKey: "Spesialis Anak",
    branchId: "cimahi",
    branchName: "RSU Avisena Cimahi",
    schedule: { id: "Senin – Jumat • 08.00 – 14.00 WIB", en: "Mon – Fri • 08:00 – 14:00 WIB" },
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Ramah Anak & Tumbuh Kembang", en: "Child Growth Specialist" },
  },
  {
    id: "dr-hendri-sp-og",
    name: "dr. Hendri Pratama, Sp.OG",
    specialty: { id: "Spesialis Kandungan (Obgyn)", en: "Obstetrician & Gynecologist" },
    specialtyKey: "Spesialis Kandungan (Obgyn)",
    branchId: "cimahi",
    branchName: "RSU Avisena Cimahi",
    schedule: { id: "Senin – Sabtu • 09.00 – 15.00 WIB", en: "Mon – Sat • 09:00 – 15:00 WIB" },
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "USG 4D & Persalinan Hangat", en: "4D Ultrasound & Maternity" },
  },
  {
    id: "dr-siti-sp-pd",
    name: "dr. Siti Nurhaliza Putri, Sp.PD",
    specialty: { id: "Spesialis Penyakit Dalam", en: "Internal Medicine Specialist" },
    specialtyKey: "Spesialis Penyakit Dalam",
    branchId: "pangalengan",
    branchName: "RSU Avisena Pangalengan",
    schedule: { id: "Senin – Jumat • 09.00 – 16.00 WIB", en: "Mon – Fri • 09:00 – 16:00 WIB" },
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Tim Dokter RS Keliling", en: "Mobile Hospital Lead" },
  },
  {
    id: "dr-bambang-sp-b",
    name: "dr. Bambang Wijaya, Sp.B",
    specialty: { id: "Spesialis Bedah Umum", en: "General Surgeon" },
    specialtyKey: "Spesialis Bedah Umum",
    branchId: "kuningan",
    branchName: "RSU Avisena Kuningan",
    schedule: { id: "Senin, Rabu, Jumat • 10.00 – 15.00 WIB", en: "Mon, Wed, Fri • 10:00 – 15:00 WIB" },
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Bedah Minim Nyeri", en: "Minimally Invasive Surgery" },
  },
  {
    id: "dr-nadia-sp-og",
    name: "dr. Nadia Kusumawardhani, Sp.OG",
    specialty: { id: "Spesialis Kandungan (Obgyn)", en: "Obstetrician & Gynecologist" },
    specialtyKey: "Spesialis Kandungan (Obgyn)",
    branchId: "subang",
    branchName: "RSU Avisena Subang",
    schedule: { id: "Senin – Sabtu • 08.30 – 14.30 WIB", en: "Mon – Sat • 08:30 – 14:30 WIB" },
    photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Kesehatan Ibu & Bayi", en: "Maternal & Fetal Care" },
  },
  {
    id: "dr-arief-sp-jp",
    name: "dr. Arief Rahman Hakim, Sp.JP",
    specialty: { id: "Spesialis Jantung & Pembuluh Darah", en: "Cardiologist" },
    specialtyKey: "Spesialis Jantung & Pembuluh Darah",
    branchId: "cikampek",
    branchName: "RSU Avisena Cikampek",
    schedule: { id: "Selasa, Kamis, Sabtu • 13.00 – 18.00 WIB", en: "Tue, Thu, Sat • 13:00 – 18:00 WIB" },
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Kardiologi & MCU Pekerja", en: "Cardiology & Workforce MCU" },
  },
  {
    id: "dr-diana-sp-a",
    name: "dr. Diana Maharani, Sp.A",
    specialty: { id: "Spesialis Anak", en: "Pediatrician" },
    specialtyKey: "Spesialis Anak",
    branchId: "pangalengan",
    branchName: "RSU Avisena Pangalengan",
    schedule: { id: "Senin – Sabtu • 08.00 – 13.00 WIB", en: "Mon – Sat • 08:00 – 13:00 WIB" },
    photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Gizi & Imunisasi Anak", en: "Child Nutrition & Vaccines" },
  },
  {
    id: "dr-taufik-sp-s",
    name: "dr. Taufik Hidayatullah, Sp.N",
    specialty: { id: "Spesialis Saraf (Neurologi)", en: "Neurologist" },
    specialtyKey: "Spesialis Saraf (Neurologi)",
    branchId: "kuningan",
    branchName: "RSU Avisena Kuningan",
    schedule: { id: "Senin – Kamis • 14.00 – 19.00 WIB", en: "Mon – Thu • 14:00 – 19:00 WIB" },
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    experienceBadge: { id: "Pemulihan Stroke & Saraf", en: "Stroke & Nerve Care" },
  },
];

export interface LeaderProfile {
  id: string;
  tab: "founders" | "directors" | "committee";
  name: string;
  role: { id: string; en: string };
  attireNote: { id: string; en: string };
  bio: { id: string; en: string };
  photo: string;
  highlight?: boolean;
}

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    id: "dr-lia",
    tab: "founders",
    name: "dr. Lia Yuliana Elsis",
    role: {
      id: "Pendiri & Komisaris Utama Avisena Healthcare Group",
      en: "Founder & President Commissioner, Avisena Healthcare Group",
    },
    attireNote: {
      id: "Kepemimpinan Perempuan & Pengabdian Komunitas",
      en: "Women's Leadership & Community Dedication",
    },
    bio: {
      id: "Memulai perjalanan dari berjualan susu KPBS semasa kuliah kedokteran hingga membuka kamar-kamar rumah pribadinya di Cimahi bagi buruh perempuan rantau yang sakit. Beliau menanamkan filosofi bahwa setiap pasien adalah Tamu Mulia.",
      en: "From selling KPBS dairy milk on weekends to fund medical school to opening her private home in Cimahi as a free clinic for female factory workers, she instilled the core philosophy that every patient is a Noble Guest.",
    },
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    highlight: true,
  },
  {
    id: "ceo-avisena",
    tab: "founders",
    name: "dr. R. Darmawan Setiadi, MARS",
    role: {
      id: "Direktur Utama (CEO) Avisena Healthcare Group",
      en: "Chief Executive Officer (CEO), Avisena Healthcare Group",
    },
    attireNote: {
      id: "Tata Kelola GCG & Transformasi Jaringan RS",
      en: "Corporate Governance (GCG) & Network Growth",
    },
    bio: {
      id: "Memimpin integrasi standar layanan medis, transformasi digital, dan kesiapan Good Corporate Governance (GCG) di seluruh 5 jaringan rumah sakit Avisena di Jawa Barat.",
      en: "Leading clinical quality integration, digital transformation, and Good Corporate Governance (GCG) across all 5 Avisena hospital branches in West Java.",
    },
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "cfo-avisena",
    tab: "founders",
    name: "Rina Wulandari, SE., Ak., MM",
    role: {
      id: "Direktur Keuangan & Kemitraan Strategis (SWEEF Liaison)",
      en: "Chief Financial & Impact Investment Officer",
    },
    attireNote: {
      id: "Keberlanjutan Finansial & Social Impact",
      en: "Sustainable Finance & Social Impact",
    },
    bio: {
      id: "Mengawal pertumbuhan berkelanjutan, transparansi laporan bagi pemangku kepentingan & mitra investor (SWEEF), serta program pemberdayaan perempuan di lingkungan kerja Avisena.",
      en: "Overseeing sustainable growth, transparent stakeholder reporting with SWEEF impact partners, and women's economic empowerment across Avisena's workforce.",
    },
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
  },
  // Tab 2: Kepala Cabang 5 RS
  {
    id: "dir-cimahi",
    tab: "directors",
    name: "dr. Maya Puspitasari, MMRS",
    role: {
      id: "Direktur RSU Avisena Cimahi",
      en: "Hospital Director, RSU Avisena Cimahi",
    },
    attireNote: { id: "Kantor Pusat & RS Pertama", en: "Flagship Hospital Cimahi" },
    bio: {
      id: "Memastikan standar layanan unggulan dan inovasi kenyamanan New Look VIP di rumah sakit pertama tempat sejarah Avisena bermula.",
      en: "Ensuring clinical excellence and New Look VIP comfort at the historic flagship hospital where Avisena began.",
    },
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dir-pangalengan",
    tab: "directors",
    name: "dr. Fajar Siddiq, MARS",
    role: {
      id: "Direktur RSU Avisena Pangalengan (KPBS)",
      en: "Hospital Director, RSU Avisena Pangalengan (KPBS)",
    },
    attireNote: { id: "Kemitraan KPBS & RS Keliling", en: "KPBS Partnership & Mobile Hospital" },
    bio: {
      id: "Menggerakkan layanan kesehatan dekat warga dan program Rumah Sakit Keliling bagi peternak susu KPBS serta desa-desa di Bandung Selatan.",
      en: "Leading community-centered care and the Mobile Hospital program for KPBS dairy farmers and remote South Bandung villages.",
    },
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dir-kuningan",
    tab: "directors",
    name: "dr. Laila Rahmawati, MKM",
    role: {
      id: "Direktur RSU Avisena Kuningan",
      en: "Hospital Director, RSU Avisena Kuningan",
    },
    attireNote: { id: "Jaringan Priangan Timur", en: "East Priangan Network" },
    bio: {
      id: "Mengembangkan layanan spesialis dan perawatan ramah lansia serta keluarga di Kabupaten Kuningan.",
      en: "Expanding specialist clinics and family-friendly geriatric care across Kuningan Regency.",
    },
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dir-subang",
    tab: "directors",
    name: "dr. Gilang Permana, MARS",
    role: {
      id: "Direktur RSU Avisena Subang",
      en: "Hospital Director, RSU Avisena Subang",
    },
    attireNote: { id: "Koridor Utara Jawa Barat", en: "North West Java Corridor" },
    bio: {
      id: "Memperkuat kesiapsiagaan IGD 24 jam dan layanan kesehatan ibu-anak bagi warga Kabupaten Subang.",
      en: "Strengthening 24/7 emergency readiness and maternal-child healthcare for Subang Regency.",
    },
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dir-cikampek",
    tab: "directors",
    name: "dr. Intan Permatasari, MMRS",
    role: {
      id: "Direktur RSU Avisena Cikampek",
      en: "Hospital Director, RSU Avisena Cikampek",
    },
    attireNote: { id: "Sentra Pekerja & Keluarga Cikampek", en: "Workforce & Family Hub Cikampek" },
    bio: {
      id: "Melayani ribuan pekerja kawasan industri dan keluarga warga Cikampek-Karawang dengan layanan cepat dan empatik.",
      en: "Serving thousands of industrial workers and families in Cikampek-Karawang with responsive, empathetic care.",
    },
    photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80",
  },
  // Tab 3: Komite Medik & Mutu
  {
    id: "komite-medik",
    tab: "committee",
    name: "dr. H. Suryono, Sp.PD, FINASIM",
    role: {
      id: "Ketua Komite Medik Grup Avisena",
      en: "Chairman of Group Medical Committee",
    },
    attireNote: { id: "Standar Klinis & Keselamatan Pasien", en: "Clinical Standards & Patient Safety" },
    bio: {
      id: "Menjaga integritas klinis, audit medis berkala, dan komunikasi dokter yang membumi tanpa istilah rumit bagi pasien.",
      en: "Upholding clinical integrity, peer medical audits, and clear, jargon-free doctor-patient communication.",
    },
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "komite-keperawatan",
    tab: "committee",
    name: "Ns. Sri Mulyani, S.Kep., M.Kep",
    role: {
      id: "Kepala Divisi Keperawatan & Pengalaman Tamu Mulia",
      en: "Head of Nursing & Noble Guest Experience",
    },
    attireNote: { id: "Budaya Melayani Sepenuh Hati", en: "Wholehearted Care Culture" },
    bio: {
      id: "Melatih lebih dari 500 perawat dan bidan Avisena agar selalu menghadirkan senyum, sapaan hangat, dan empati layaknya tetangga dekat.",
      en: "Training over 500 Avisena nurses and midwives to deliver warm smiles, personal empathy, and neighborly care.",
    },
    photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=700&q=80",
  },
];

export interface CommunityTestimonial {
  id: string;
  quote: { id: string; en: string };
  name: string;
  origin: { id: string; en: string };
  branchTag: string;
  avatar: string;
}

export const COMMUNITY_TESTIMONIALS: CommunityTestimonial[] = [
  {
    id: "t1",
    quote: {
      id: "Sebagai perantau yang bekerja di pabrik tekstil Cimahi, dulu saya paling takut kalau jatuh sakit karena jauh dari orang tua. Di Avisena, suster dan dokternya menyapa seperti keluarga sendiri. Rasanya benar-benar punya tetangga yang peduli.",
      en: "As a migrant worker at a textile factory in Cimahi, falling ill far from my parents used to terrify me. At Avisena, the nurses and doctors greeted me like family. It truly feels like having a caring neighbor right next door.",
    },
    name: "Teh Nenden Suryani",
    origin: { id: "Pekerja Pabrik di Cimahi", en: "Factory Worker in Cimahi" },
    branchTag: "RSU Avisena Cimahi",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t2",
    quote: {
      id: "Kami para peternak sapi perah KPBS bangga sekali ketika tahu dr. Lia yang dulu berjuang sambil berjualan susu KPBS, kini menghadirkan RS Avisena Pangalengan untuk warga kami. Ibu saya berobat pakai BPJS dilayani sangat hormat sebagai Tamu Mulia.",
      en: "We KPBS dairy farmers are deeply proud that dr. Lia, who once sold KPBS milk to put herself through medical school, built RSU Avisena Pangalengan for our community. My mother used BPJS and was treated with complete dignity as a Noble Guest.",
    },
    name: "Kang Deden Ruhiyat",
    origin: { id: "Peternak Anggota KPBS, Warga Pangalengan", en: "KPBS Dairy Farmer, Pangalengan Resident" },
    branchTag: "RSU Avisena Pangalengan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t3",
    quote: {
      id: "Waktu tim Rumah Sakit Keliling Avisena datang ke desa kami di perbatasan Kuningan, bapak saya yang sudah lansia akhirnya bisa diperiksa jantung dan gula darahnya tanpa harus menempuh perjalanan jauh. Terima kasih dokter-dokter Avisena!",
      en: "When the Avisena Mobile Hospital team visited our rural village in Kuningan, my elderly father finally had his heart and blood sugar checked without enduring a long journey. Thank you, Avisena doctors!",
    },
    name: "Pak H. Ujang Kosasih",
    origin: { id: "Warga Desa di Kabupaten Kuningan", en: "Village Resident in Kuningan Regency" },
    branchTag: "Program RS Keliling & Kuningan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "t4",
    quote: {
      id: "Melahirkan anak pertama di RSU Avisena Subang rasanya tenang sekali. Kamarnya hangat seperti di rumah, bahasanya mudah dimengerti, dan saat kontrol kami bahkan bisa isi ulang air minum gratis di tumbler. Hal kecil tapi sangat perhatian!",
      en: "Delivering my first baby at RSU Avisena Subang was so peaceful. The room felt warm like home, the doctors explained everything simply, and we could even refill our water tumblers for free. Small touches that show big care!",
    },
    name: "Ibu Risa Septiani",
    origin: { id: "Ibu Muda, Warga Subang", en: "New Mother, Subang Resident" },
    branchTag: "RSU Avisena Subang",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
];

export interface EducationArticle {
  id: string;
  category: { id: string; en: string };
  title: { id: string; en: string };
  readTime: string;
  date: string;
  analogySummary: { id: string; en: string };
  tips: { id: string[]; en: string[] };
  image: string;
}

export const EDUCATION_ARTICLES: EducationArticle[] = [
  {
    id: "diabetes-haus",
    category: { id: "Penyakit Dalam", en: "Internal Medicine" },
    title: {
      id: "Jangan Abaikan Sering Haus di Malam Hari, Bisa Jadi Sinyal Gula Darah!",
      en: "Don't Ignore Constant Thirst at Night—It Could Be a Blood Sugar Signal!",
    },
    readTime: "3 Menit Baca",
    date: "Pembaruan Minggu Ini",
    analogySummary: {
      id: "Bayangkan aliran darah seperti teh yang terlalu kental karena kebanyakan gula. Tubuh kita otomatis 'meminta tambahan air putih' terus-menerus untuk mengencerkannya—itulah sebabnya gejala awal diabetes sering ditandai rasa haus berlebih.",
      en: "Imagine your bloodstream like tea brewed with too much sugar. Your body naturally asks for more water to dilute it—which is why excessive thirst is often an early whisper of diabetes.",
    },
    tips: {
      id: [
        "Kenali 3 tanda klasik: Sering haus (Polidipsi), sering buang air kecil malam hari, dan cepat lemas.",
        "Kurangi minuman kemasan manis dan ganti dengan air putih di tumbler kesayangan Anda.",
        "Manfaatkan Promo MCU Hari Ulang Tahun di cabang RS Avisena terdekat untuk cek gula darah rutin.",
      ],
      en: [
        "Watch for the 3 classic signs: Frequent thirst, nighttime urination, and unexplained fatigue.",
        "Swap sweetened bottled drinks for plain water in your reusable tumbler.",
        "Use Avisena's Birthday MCU Promo at your nearest branch for a quick blood sugar check.",
      ],
    },
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "anak-demam-ruam",
    category: { id: "Kesehatan Anak", en: "Child Health" },
    title: {
      id: "Anak Demam Disertai Ruam Merah? Yuk Kenali Bedanya Biang Keringat & Campak!",
      en: "Child Fever with Red Rash? How to Tell Heat Rash Apart from Measles!",
    },
    readTime: "4 Menit Baca",
    date: "Edukasi Bunda",
    analogySummary: {
      id: "Ruam pada kulit anak adalah 'bahasa tubuh' saat imun sedang bekerja. Jika ruam muncul mulai dari belakang telinga lalu menyebar disertai batuk, pilek, dan mata berair, segera konsultasikan ke dokter anak.",
      en: "A skin rash is your child's body language when the immune system is active. If spots start behind the ears and come with a cough, runny nose, and watery eyes, visit our pediatrician promptly.",
    },
    tips: {
      id: [
        "Pastikan anak tetap cukup cairan (ASI, air putih, atau sup hangat).",
        "Jangan menaburi bedak pada ruam yang sedang meradang agar pori-pori kulit tetap bernapas.",
        "Lengkapi imunisasi MR/Campak di Poliklinik Anak Avisena.",
      ],
      en: [
        "Keep your child hydrated with breastmilk, water, or warm broth.",
        "Avoid putting powder on active rashes so the skin can breathe cleanly.",
        "Keep MR/Measles immunizations up to date at Avisena Pediatric Clinic.",
      ],
    },
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hipertensi-tetangga",
    category: { id: "Jantung & Lansia", en: "Heart & Senior Care" },
    title: {
      id: "Tekanan Darah Tinggi: Mengapa Sering Datang Tanpa Permisi?",
      en: "High Blood Pressure: Why Does It Often Arrive Unannounced?",
    },
    readTime: "3 Menit Baca",
    date: "Tips Keluarga",
    analogySummary: {
      id: "Pembuluh darah kita mirip selang penyiram tanaman. Jika tekanannya terlalu kencang terus-menerus padahal kita tidak menyadarinya, dinding selang bisa cepat aus. Cek tensi rutin adalah kunci ketenangan.",
      en: "Our blood vessels work like a garden hose. When water pressure stays too high for too long without us noticing, the hose walls wear out faster. Routine blood pressure checks keep you safe.",
    },
    tips: {
      id: [
        "Pegal di tengkuk bukan satu-satunya tanda hipertensi—banyak tensi tinggi tanpa gejala sama sekali.",
        "Batasi garam berlebih (maksimal 1 sendok teh sehari) dan jalan pagi 30 menit.",
        "Obat tensi dari dokter aman untuk ginjal justru karena melindungi ginjal dari tekanan darah tinggi.",
      ],
      en: [
        "Neck stiffness isn't the only sign—high blood pressure often has zero symptoms.",
        "Limit salt intake to 1 teaspoon daily and enjoy a 30-minute morning walk.",
        "Prescribed blood pressure medicine protects your kidneys from high-pressure damage.",
      ],
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
];

export const SCHEDULE_UPDATES = [
  {
    branch: "RSU Avisena Cimahi",
    notice: {
      id: "Poliklinik Anak (dr. Ratna Dewi, Sp.A) buka tambahan sesi Sabtu pagi pukul 08.00 – 12.00 WIB.",
      en: "Pediatric Clinic (dr. Ratna Dewi, Sp.A) added a Saturday morning session 08:00 – 12:00 WIB.",
    },
    status: "Tambahan Jam Praktik",
  },
  {
    branch: "RSU Avisena Pangalengan",
    notice: {
      id: "Tim RS Keliling Avisena hadir di Desa Margamekar hari Kamis ini pukul 08.30 WIB (Pemeriksaan Gratis).",
      en: "Avisena Mobile Hospital visits Margamekar Village this Thursday at 08:30 WIB (Free Screening).",
    },
    status: "Jadwal RS Keliling",
  },
  {
    branch: "RSU Avisena Cikampek",
    notice: {
      id: "Poliklinik Jantung (dr. Arief Rahman, Sp.JP) melayani pendaftaran BPJS & Umum sore hari hingga 18.00 WIB.",
      en: "Cardiology Clinic (dr. Arief Rahman, Sp.JP) open for BPJS & General patients until 18:00 WIB.",
    },
    status: "Praktik Sore",
  },
];

export interface CareerOpening {
  id: string;
  role: { id: string; en: string };
  placement: string;
  department: { id: string; en: string };
  type: string;
  qualification: { id: string; en: string };
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "job-1",
    role: { id: "Perawat IGD & ICU (Ners)", en: "Emergency & ICU Nurse (RN)" },
    placement: "Penempatan RSU Avisena Cikampek",
    department: { id: "Keperawatan Medis", en: "Clinical Nursing" },
    type: "Full-Time",
    qualification: {
      id: "Profesi Ners, STR aktif, memiliki sertifikat BTCLS/PPGD, ramah dan berempati tinggi.",
      en: "BSN/Ners degree, active STR, BTCLS certified, warm and deeply empathetic.",
    },
  },
  {
    id: "job-2",
    role: { id: "Apoteker Klinis & Farmasi", en: "Clinical Pharmacist" },
    placement: "Penempatan RSU Avisena Cimahi",
    department: { id: "Instalasi Farmasi", en: "Pharmacy Department" },
    type: "Full-Time",
    qualification: {
      id: "Profesi Apoteker, STRA aktif, komunikatif dalam mengedukasi pasien dengan bahasa sederhana.",
      en: "Licensed Pharmacist (STRA), skilled at explaining medications in clear everyday language.",
    },
  },
  {
    id: "job-3",
    role: { id: "Bidan Pelaksana (KIA & PONEK)", en: "Maternity & PONEK Midwife" },
    placement: "Penempatan RSU Avisena Pangalengan",
    department: { id: "Kebidanan & Ibu-Anak", en: "Maternal & Neonatal Care" },
    type: "Full-Time",
    qualification: {
      id: "D3/S1 Kebidanan, STR aktif, siap melayani masyarakat Bandung Selatan dengan sepenuh hati.",
      en: "Diploma/Bachelor in Midwifery, active STR, passionate about community maternal health.",
    },
  },
  {
    id: "job-4",
    role: { id: "Petugas Duta Tamu Mulia (Front Office & Customer Care)", en: "Noble Guest Relations Officer" },
    placement: "Penempatan RSU Avisena Subang & Kuningan",
    department: { id: "Pelayanan Pelanggan", en: "Patient Experience" },
    type: "Full-Time",
    qualification: {
      id: "Min. D3 semua jurusan, murah senyum, solutif membantu alur pasien BPJS maupun Umum.",
      en: "Min. Associate Degree, warm smile, proactive in assisting both BPJS and General patients.",
    },
  },
];

