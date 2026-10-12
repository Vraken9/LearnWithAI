# SINGLE SOURCE OF TRUTH (SSOT): ARSITEKTUR, ROADMAP, DAN SPESIFIKASI PENGEMBANGAN
## Platform Digital Perangkat Ajar dan Asisten Guru Terpadu (SD, SMP, SMA)

---

## 1. INFORMASI PROYEK DAN PRINSIP PENGEMBANGAN

### 1.1 Identitas Proyek
* **Nama Proyek:** GuruHub / GuruCerdas AI (Perangkat Ajar & Evaluasi Terpadu).
* **Fokus Utama:** Otomasi penyusunan administrasi guru resmi Kurikulum Merdeka (Modul Ajar, Soal Evaluasi, Kisi-Kisi, ATP, Prota, Promes, dan Bahan Tayang) dengan luaran dokumen siap cetak standar kedinasan.
* **Target Pengguna:** Guru jenjang SD, SMP, SMA/SMK, Kepala Sekolah, dan Pengawas Pembina di Indonesia.

### 1.2 Prinsip Arsitektur (Core Tenets)
1. **Regulasi-Sentris (BSKAP Compliant):** Semua format kurikulum, taksonomi, dan komponen modul ajar merujuk secara ketat pada panduan resmi Kemendikbudristek/BSKAP terbaru (Surat Keputusan BSKAP No. 032/H/KR/2024).
2. **Zero Formatting Breakdown (Anti Tata Letak Rusak):** Hasil generasi dokumen (DOCX, PDF, PPTX) tidak diproduksi dari konversi mentah teks AI, melainkan melalui template engine khusus yang menjamin margin 4-3-3-3 cm, tabel rapi, kop surat presisi, dan rumus matematika/sains berbasis OMML/LaTeX.
3. **Atomic & Modular Development:** Setiap modul fitur dikembangkan secara bertahap dalam ukuran kecil dan terisolasi agar mudah diuji, diperiksa kualitasnya, dan dikembangkan secara kolaboratif oleh tim lintas pengembang.
4. **Data Privacy & Multi-Tenancy:** Data guru, soal evaluasi, dan profil sekolah diamankan menggunakan Row Level Security (RLS) pada PostgreSQL/Supabase.

---

## 2. EVALUASI DAN REKOMENDASI TECH STACK

Pilihan teknologi yang Anda gunakan (TypeScript, Next.js, shadcn/ui, Supabase Lokal) adalah **kombinasi yang sangat tepat, modern, dan berstandar industri (enterprise-grade)** untuk aplikasi SaaS edukasi berbasis AI saat ini. 

Berikut adalah analisis komparatif serta pustaka tambahan yang disarankan untuk melengkapi ekosistem tersebut:

### 2.1 Analisis Komponen Utama
* **Next.js (App Router, Server Actions, React Server Components):**
  * *Evaluasi:* Sangat ideal. Mendukung streaming AI response (menghindari timeout saat menghasilkan naskah panjang), optimalisasi SEO untuk publikasi materi terbuka, serta arsitektur fullstack tanpa overhead konfigurasi terpisah.
* **TypeScript:**
  * *Evaluasi:* Wajib. Menjamin integritas tipe data antara AI structured outputs, skema database Supabase, dan form wizard yang kompleks.
* **shadcn/ui + Tailwind CSS:**
  * *Evaluasi:* Sangat direkomendasikan. Berbeda dari UI kit yang kaku, shadcn/ui memberikan kendali 100% pada kode komponen di folder proyek lokal (`components/ui`), mendukung standar aksesibilitas Radix UI, dan mudah disesuaikan dengan tema formal kedinasan.
* **Supabase Lokal (Docker / Supabase CLI):**
  * *Evaluasi:* Pilihan terbaik untuk database dan autentikasi. Menghadirkan lingkungan PostgreSQL penuh, Auth bawaan, Storage S3-compatible untuk berkas logo/PDF modul, serta ekstensi `pgvector` untuk pencarian semantik referensi kurikulum tanpa biaya langganan cloud selama fase pengembangan.

### 2.2 Pustaka Tambahan yang Wajib Diintegrasikan
Untuk mendukung fungsionalitas spesifik aplikasi ini, disarankan menambahkan dependensi berikut:
1. **AI Orchestration & Streaming:**
   * `ai` (Vercel AI SDK): Untuk menangani streaming teks dan antrean proses AI secara efisien di Next.js.
   * `zod`: Untuk memvalidasi output AI terstruktur (Structured Outputs / JSON Strict Mode) agar format data yang diterima backend selalu valid 100%.
2. **Mesin Pembangun Dokumen (Document Engines):**
   * `docx`: Pustaka resmi Node.js untuk menyusun berkas Microsoft Word (.docx) murni secara programatik (menjamin Kop Surat, tabel, pembagian seksi, dan margin presisi).
   * `pptxgenjs`: Untuk membuat berkas presentasi Microsoft PowerPoint (.pptx) asli yang dapat diedit langsung oleh guru.
   * `@react-pdf/renderer` atau `puppeteer` (headless browser printing): Untuk mencetak naskah PDF dengan resolusi tinggi dan tata letak cetak A4 baku.
3. **Penulisan Formula Sains & Matematika:**
   * `katex`: Untuk rendering visual persamaan matematika/fisika yang cepat dan aman di sisi peramban web.
   * `latex-to-omml`: Pustaka untuk mengonversi sintaks LaTeX ke format Office Math Markup Language (OMML) agar rumus matematika di Word dapat diedit secara natif.
4. **Formulir dan Validasi Data:**
   * `react-hook-form` + `@hookform/resolvers`: Menangani form berjenjang kompleks (seperti slider Taksonomi Bloom C1-C6 dan distribusi LOTS/MOTS/HOTS).
5. **Penyajian Data Tabel Kompleks:**
   * `@tanstack/react-table`: Untuk menyajikan matriks Alur Tujuan Pembelajaran (ATP), Program Semester (Promes), dan Kisi-Kisi Soal secara interaktif dengan fitur sorting, filtering, dan in-line cell editing.

---

## 3. STATUS INTEGRASI SKILL AGENT UI/UX ENTERPRISE

### 3.1 Penilaian Skill `ui-ux-pro-max-skill`
Keputusan Anda untuk menggunakan skill `nextlevelbuilder/ui-ux-pro-max-skill` adalah **langkah yang sangat tepat**.
* **Alasan:** Skill ini memiliki basis pengetahuan komprehensif (79 gaya desain, 192 palet warna industri, panduan UX, tipografi berpasangan, dan pola komponen berbasis dashboard SaaS) yang mencegah tampilan antarmuka terlihat seperti template generik atau purwarupa kasar.
* **Dampak pada Hasil Akhir:** Menjamin hierarki visual, kontras warna yang nyaman untuk mata guru yang bekerja dalam durasi lama, serta micro-interactions yang terasa halus dan responsif.

### 3.2 Status Instalasi
Skill tersebut telah **berhasil diunduh dan dipasang secara resmi** ke dalam repositori kerja ini pada folder:
1. `.agents/skills/ui-ux-pro-max/`: Berisi aturan desain, panduan layout, tipografi, dan sistem warna.
2. `.agents/skills/ui-styling/`: Berisi panduan penerapan komponen shadcn/ui dan optimasi utilitas Tailwind CSS.

Kedua skill ini berada pada jalur resmi Customizations Antigravity IDE (`.agents/skills/`), sehingga dapat langsung diakses dan diaktifkan secara konsisten dalam setiap sesi perancangan tampilan UI/UX.

---

## 4. STANDAR STRUKTUR DIREKTORI PROYEK

Struktur folder mengadopsi arsitektur modular berorientasi fitur (Feature-Driven Architecture) di dalam Next.js App Router:

```text
toolsguru/
├── .agents/                          # Customizations & Design Skills
│   └── skills/
│       ├── ui-ux-pro-max/
│       └── ui-styling/
├── docs/                             # Single Source of Truth & Spesifikasi
│   ├── BLUEPRINT_PLATFORM_GURU_AI.md
│   └── PROJECT_SSOT_AND_ROADMAP.md
├── supabase/                         # Konfigurasi Supabase Lokal
│   ├── config.toml
│   ├── migrations/                   # Skema database & RLS policies
│   └── seed.sql                      # Master data CP/TP Kurikulum Merdeka
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                   # Rute Login, Register, Lupa Password
│   │   ├── (dashboard)/              # Rute Area Guru Terproteksi
│   │   │   ├── dashboard/            # Halaman Ringkasan & Dokumen Saya
│   │   │   ├── profil-sekolah/       # Pengaturan Kop Surat & Pejabat
│   │   │   ├── modul-ajar/           # Generator & Editor Modul Ajar
│   │   │   ├── soal-generator/       # Generator Soal, Kisi-kisi, & Kartu Soal
│   │   │   ├── perangkat-tahunan/    # ATP, Prota, Promes, & Kalender
│   │   │   ├── presentasi/           # Generator Slide Deck (.PPTX)
│   │   │   └── materi-lkpd/          # Generator Materi Bacaan & LKPD
│   │   ├── api/                      # Route Handlers & AI Endpoints
│   │   │   ├── ai/
│   │   │   │   ├── generate-soal/
│   │   │   │   ├── generate-modul/
│   │   │   │   └── generate-slide/
│   │   │   └── export/               # Endpoint Konversi DOCX/PDF/PPTX
│   │   ├── layout.tsx
│   │   └── page.tsx                  # Landing Page Publik
│   ├── components/
│   │   ├── ui/                       # Komponen Primitif shadcn/ui
│   │   ├── shared/                   # Header, Sidebar, Footer, UserMenu
│   │   ├── kop-surat/                # Komponen Visual Kop Surat Resmi
│   │   ├── forms/                    # Form Wizards & Input Parameter
│   │   └── document-preview/         # Live Preview A4 Paper & Slide Deck
│   ├── lib/
│   │   ├── ai/                       # Klien LLM, System Prompts, Zod Schemas
│   │   ├── docx/                     # Mesin Pembentuk File .docx
│   │   ├── pptx/                     # Mesin Pembentuk File .pptx
│   │   ├── pdf/                      # Mesin Pembentuk File .pdf
│   │   ├── supabase/                 # Supabase Client (Browser & Server)
│   │   └── utils.ts
│   ├── types/                        # Definisi TypeScript Seluruh Domain
│   └── styles/
│       └── globals.css               # Desain Token, Variabel CSS, Font Setup
├── public/                           # Aset Statis, Font, Logo Template
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 5. SKEMA DATABASE UTAMA (SUPABASE POSTGRESQL)

Struktur data dirancang untuk mendukung integrasi identitas sekolah ke seluruh dokumen:

### 5.1 Tabel: `schools` (Profil Satuan Pendidikan)
* `id` (UUID, Primary Key)
* `user_id` (UUID, Foreign Key ke `auth.users`)
* `goverment_agency` (VARCHAR: misal "Pemerintah Provinsi Jawa Timur")
* `education_office` (VARCHAR: misal "Dinas Pendidikan dan Kebudayaan")
* `school_name` (VARCHAR: misal "SMA Negeri 1 Purwantoro")
* `npsn` (VARCHAR(10))
* `accreditation` (VARCHAR(2): "A", "B", "C")
* `address` (TEXT)
* `postal_code` (VARCHAR(10))
* `phone` (VARCHAR(20))
* `email` (VARCHAR(100))
* `website` (VARCHAR(100))
* `left_logo_url` (TEXT: Logo Pemda / Kemendikbud)
* `right_logo_url` (TEXT: Logo Sekolah)
* `created_at`, `updated_at` (TIMESTAMP WITH TIME ZONE)

### 5.2 Tabel: `teacher_profiles` (Profil Pendidik & Pejabat)
* `id` (UUID, Primary Key)
* `user_id` (UUID, Foreign Key ke `auth.users`)
* `school_id` (UUID, Foreign Key ke `schools.id`)
* `teacher_name` (VARCHAR)
* `teacher_title` (VARCHAR: misal "S.Pd., M.Si.")
* `teacher_nip` (VARCHAR(30))
* `headmaster_name` (VARCHAR)
* `headmaster_title` (VARCHAR)
* `headmaster_nip` (VARCHAR(30))
* `supervisor_name` (VARCHAR: Pengawas Pembina)
* `supervisor_title` (VARCHAR)
* `supervisor_nip` (VARCHAR(30))
* `created_at`, `updated_at` (TIMESTAMP WITH TIME ZONE)

### 5.3 Tabel: `question_packages` (Paket Soal & Evaluasi)
* `id` (UUID, Primary Key)
* `user_id` (UUID, Foreign Key ke `auth.users`)
* `school_id` (UUID, Foreign Key ke `schools.id`)
* `title` (VARCHAR)
* `subject` (VARCHAR)
* `education_level` (VARCHAR: "SD", "SMP", "SMA", "SMK")
* `grade` (VARCHAR: "Kelas 1" s/d "Kelas 12")
* `phase` (VARCHAR: "A", "B", "C", "D", "E", "F")
* `semester` (VARCHAR: "Ganjil", "Genap")
* `academic_year` (VARCHAR: "2026/2027")
* `duration_minutes` (INTEGER)
* `total_questions` (INTEGER)
* `difficulty_distribution` (JSONB: { mudah: 30, sedang: 50, sulit: 20 })
* `cognitive_distribution` (JSONB: { lots: 30, mots: 40, hots: 30 })
* `bloom_distribution` (JSONB: { c1: 15, c2: 15, c3: 40, c4: 10, c5: 10, c6: 10 })
* `stimulus_type` (VARCHAR)
* `created_at`, `updated_at` (TIMESTAMP WITH TIME ZONE)

### 5.4 Tabel: `questions` (Butir Soal & Rubrik)
* `id` (UUID, Primary Key)
* `package_id` (UUID, Foreign Key ke `question_packages.id` ON DELETE CASCADE)
* `question_number` (INTEGER)
* `question_type` (VARCHAR: "Pilihan Ganda", "Pilihan Ganda Kompleks", "Menjodohkan", "Isian", "Uraian")
* `stimulus_text` (TEXT, Nullable)
* `question_text` (TEXT)
* `options` (JSONB, Nullable: [{ label: "A", text: "..." }, ...])
* `correct_answer` (TEXT)
* `explanation` (TEXT)
* `bloom_level` (VARCHAR: "C1" s/d "C6")
* `cognitive_level` (VARCHAR: "LOTS", "MOTS", "HOTS")
* `difficulty` (VARCHAR: "Mudah", "Sedang", "Sulit")
* `competency_indicator` (TEXT: Indikator Soal untuk Kisi-kisi)
* `score_weight` (INTEGER)

### 5.5 Tabel: `teaching_modules` (Modul Ajar Kurikulum Merdeka)
* `id` (UUID, Primary Key)
* `user_id` (UUID, Foreign Key ke `auth.users`)
* `school_id` (UUID, Foreign Key ke `schools.id`)
* `title` (VARCHAR)
* `subject` (VARCHAR)
* `grade` (VARCHAR)
* `phase` (VARCHAR)
* `semester` (VARCHAR)
* `academic_year` (VARCHAR)
* `duration_jp` (INTEGER)
* `total_meetings` (INTEGER)
* `target_students` (VARCHAR)
* `learning_model` (VARCHAR)
* `pancasila_dimensions` (JSONB: Array string dimensi)
* `initial_competency` (TEXT)
* `learning_objectives` (JSONB: Array string TP)
* `meaningful_understanding` (TEXT)
* `trigger_questions` (JSONB: Array string pertanyaan)
* `learning_activities` (JSONB: Skenario per pertemuan + diferensiasi konten/proses/produk)
* `assessments` (JSONB: Diagnostik, Formatif, Sumatif)
* `appendices` (JSONB: LKPD, Bahan Bacaan, Glosarium, Daftar Pustaka)
* `format_mode` (VARCHAR: "ringkas", "lengkap_bskap")
* `created_at`, `updated_at` (TIMESTAMP WITH TIME ZONE)

---

## 6. TAHAPAN EKSEKUSI TERKONTROL (MILESTONES & BREAKDOWN TUGAS)

Agar proses implementasi terukur, terarah, dan tidak membingungkan, proyek dibagi menjadi 8 tahapan kecil:

```text
[M0: Setup & Design] ---> [M1: Master Profil] ---> [M2: Soal Engine] ---> [M3: Kisi-kisi & Evaluasi]
                                                                                      |
[M7: Final Polish]   <--- [M6: Export Engine] <--- [M5: Presentasi & LKPD] <--- [M4: Modul Ajar BSKAP]
```

### Milestone 0: Fondasi Proyek, Supabase Lokal, dan Design System Enterprise
* **Target:** Repositori terinisialisasi bersih, database lokal berjalan, dan sistem desain siap.
* **Sub-Tugas:**
  * 0.1 Inisialisasi Next.js 15+ dengan TypeScript, ESLint, dan Tailwind CSS.
  * 0.2 Konfigurasi Supabase CLI lokal (`supabase init`, `supabase start`).
  * 0.3 Setup shadcn/ui dengan komponen inti (`button`, `input`, `select`, `dialog`, `tabs`, `card`, `slider`, `badge`, `table`, `form`).
  * 0.4 Terapkan token desain dari skill `ui-ux-pro-max` (palet warna formal biru kedinasan/slate, tipografi Inter/Outfit, tata letak dashboard modern).
  * 0.5 Setup shell dashboard: Sidebar navigasi responsif, Topbar, dan Breadcrumb.

### Milestone 1: Modul Profil Sekolah dan Kop Kedinasan Otomatis (Master Data)
* **Target:** Guru dapat mengisi data instansi sekali, dan sistem dapat menampilkan Kop Surat dan Lembar Pengesahan standar secara dinamis.
* **Sub-Tugas:**
  * 1.1 Buat migrasi database untuk tabel `schools` dan `teacher_profiles`.
  * 1.2 Bangun form UI pengaturan profil sekolah dengan validasi Zod (NPSN, alamat, kontak, penandatangan).
  * 1.3 Integrasikan Supabase Storage untuk upload logo dinas/daerah (kiri) dan logo sekolah (kanan).
  * 1.4 Buat komponen reaktif `OfficialLetterhead` (Kop Surat) dan `EndorsementSheet` (Lembar Pengesahan).
  * 1.5 Uji coba tampilan responsif dan mode pratinjau cetak A4.

### Milestone 2: Soal Generator Engine (Bloom C1-C6, LOTS/MOTS/HOTS, LaTeX)
* **Target:** Guru dapat menghasilkan paket soal dengan kontrol kognitif akurat dan formula matematika yang rapi.
* **Sub-Tugas:**
  * 2.1 Buat formulir wizard Soal Generator (Konteks, Sumber Materi teks/PDF, Distribusi Kesulitan, Slider Taksonomi Bloom C1-C6).
  * 2.2 Rancang Prompt Engineering terstruktur dengan Zod Strict Schema untuk luaran soal terstruktur (nomor, tipe, stimulus, opsi, kunci, pembahasan, level Bloom).
  * 2.3 Buat Route Handler AI dengan dukungan streaming Vercel AI SDK.
  * 2.4 Integrasikan komponen KaTeX untuk menampilkan formula matematika/fisika secara instan di peramban.
  * 2.5 Sediakan fitur in-line edit: Guru dapat mengedit teks soal, opsi, dan pembahasan langsung di dashboard sebelum disimpan.

### Milestone 3: Matriks Evaluasi Lengkap (Kisi-Kisi Soal dan Kartu Soal Otomatis)
* **Target:** Dalam satu klik, paket soal otomatis menghasilkan dokumen pendamping resmi untuk arsip kurikulum sekolah.
* **Sub-Tugas:**
  * 3.1 Buat algoritma ekstraksi data soal menjadi Matriks Kisi-Kisi Ujian (pemetaan Capaian Pembelajaran, Indikator Soal, Bentuk Soal, Nomor Soal, Bobot).
  * 3.2 Tampilkan tabel kisi-kisi interaktif menggunakan `@tanstack/react-table`.
  * 3.3 Buat antarmuka Kartu Soal standar format dinas (satu kartu per butir soal untuk bank soal sekolah).
  * 3.4 Buat pedoman penskoran dan rubrik penilaian untuk soal uraian/esai.

### Milestone 4: Modul Ajar Generator (Mode Ringkas dan Mode Lengkap BSKAP)
* **Target:** Guru dapat menghasilkan modul ajar Kurikulum Merdeka yang patuh terhadap regulasi BSKAP 2024 dengan skenario diferensiasi pembelajaran nyata.
* **Sub-Tugas:**
  * 4.1 Buat pangkalan data (seed database) Capaian Pembelajaran (CP) resmi BSKAP untuk fase A hingga F.
  * 4.2 Bangun formulir input Modul Ajar: Pilihan Fase, Mapel, Elemen CP, Model Pembelajaran (PBL/PjBL), 6 Dimensi Profil Pancasila, dan Alokasi Waktu.
  * 4.3 Kembangkan Prompt Generator Modul Ajar yang merinci 3 langkah diferensiasi (Konten, Proses, Produk) dan asesmen 3 tahap (Awal, Formatif, Sumatif).
  * 4.4 Sediakan toggle mode tampilan: Mode Ringkas (1-2 lembar) vs Mode Supervisi Lengkap.
  * 4.5 Bangun antarmuka pratinjau lembar kertas A4 digital (WYSIWYG document viewer).

### Milestone 5: Perangkat Tahunan (ATP, Prota, Promes, dan Kalkulator Minggu Efektif)
* **Target:** Guru dapat menyusun silabus/ATP dan jadwal distribusi jam pelajaran tahunan tanpa hitungan manual.
* **Sub-Tugas:**
  * 5.1 Buat modul dekonstruksi CP menjadi Tujuan Pembelajaran (TP) dan Alur Tujuan Pembelajaran (ATP).
  * 5.2 Bangun formulir input kalender pendidikan (jumlah minggu efektif semester ganjil dan genap, jam per minggu).
  * 5.3 Buat algoritma otomatis yang memetakan ATP ke dalam Program Tahunan (Prota) dan matriks mingguan Program Semester (Promes).
  * 5.4 Sediakan tabel editor untuk penyesuaian manual distribusi JP oleh guru.

### Milestone 6: Generator Slide Presentasi (.PPTX Asli) dan LKPD Interaktif
* **Target:** Guru memperoleh media ajar visual kelas dan lembar aktivitas siswa yang siap digunakan.
* **Sub-Tugas:**
  * 6.1 Buat formulir generator presentasi (topik, jenjang siswa, durasi tampil, jumlah slide).
  * 6.2 Rancang prompt AI khusus pedagogi slide (Apersepsi -> Konsep Inti -> Studi Kasus -> Kuis Cepat -> Refleksi + Catatan Pembicara).
  * 6.3 Integrasikan library `pptxgenjs` di backend untuk mengubah data JSON menjadi file PowerPoint asli (.pptx) dengan tata letak visual modern.
  * 6.4 Buat generator Lembar Kerja Peserta Didik (LKPD) mandiri dan kelompok yang dapat dilampirkan ke modul ajar.

### Milestone 7: Mesin Ekspor Dokumen Kedinasan (DOCX, PDF, PPTX Print-Ready)
* **Target:** Menghilangkan keluhan kerusakan tata letak saat guru mencetak atau mengedit di Microsoft Word.
* **Sub-Tugas:**
  * 7.1 Bangun pipeline rendering `docx` dengan template resmi: margin 4-3-3-3 cm, Kop Surat di header halaman pertama, nomor halaman otomatis di footer, dan batas tabel terstandarisasi.
  * 7.2 Implementasikan konverter LaTeX ke OMML pada engine docx agar formula matematika dapat diedit secara natif di Microsoft Word.
  * 7.3 Bangun engine cetak PDF beresolusi tinggi yang identik dengan hasil cetak printer fisik.
  * 7.4 Sediakan tombol unduhan instan: DOCX Soal Siswa, DOCX Soal + Kunci, DOCX Kisi-Kisi, DOCX Modul Ajar Lengkap, dan PPTX Bahan Tayang.

### Milestone 8: Penguatan Sistem, Keamanan, dan Kompatibilitas Kinerja PMM
* **Target:** Platform stabil, aman, cepat, dan siap digunakan oleh guru secara massal.
* **Sub-Tugas:**
  * 8.1 Terapkan Row Level Security (RLS) di seluruh tabel Supabase untuk memastikan isolasi data antar pengguna.
  * 8.2 Optimasi caching query dan vector embeddings untuk pangkalan data CP/TP Kemendikbudristek.
  * 8.3 Tambahkan panduan penyelarasan dokumen ke Rencana Hasil Kerja (RHK) pada Platform Merdeka Mengajar (PMM).
  * 8.4 Uji coba performa dan validasi tampilan di perangkat seluler serta laptop berspesifikasi standar guru.

---

## 7. STANDAR KUALITAS DAN KETENTUAN KERJA SAMA TIM PENGEMBANG

Untuk menjaga konsistensi kode saat dikerjakan oleh beberapa pengembang:

1. **Konvensi Kode (Code Standards):**
   * Gunakan TypeScript Strict Mode (`noImplicitAny: true`).
   * Seluruh antarmuka API dan skema formulir wajib divalidasi menggunakan skema Zod.
   * Penamaan komponen menggunakan PascalCase (`QuestionWizard.tsx`), utilitas menggunakan camelCase (`formatDate.ts`), dan rute Next.js menggunakan kebab-case (`profil-sekolah/page.tsx`).
2. **Aturan Rekayasa Prompt AI (AI Engineering Rules):**
   * Dilarang menggunakan prompt bebas tanpa format keluaran terstruktur.
   * Setiap prompt harus menyertakan konteks regulasi BSKAP 2024 dan instruksi larangan halusinasi istilah kurikulum.
   * Wajib memanfaatkan fitur Structured Outputs / JSON Schema mode pada model LLM.
3. **Pemberdayaan Skill UI/UX:**
   * Sebelum membuat komponen visual baru, periksa panduan desain pada `.agents/skills/ui-ux-pro-max/` dan komponen contoh di `.agents/skills/ui-styling/`.
   * Hindari penggunaan warna dasar mentah (hindari pure red #FF0000 atau pure blue #0000FF). Gunakan palet HSL/Slate yang telah dikurasi agar visual platform berkesan elegan, tenang, dan berwibawa bagi instansi pendidikan.
4. **Git Workflow:**
   * Branch `main`: Khusus rilis stabil yang siap diuji coba publik.
   * Branch `develop`: Tempat integrasi seluruh milestone yang sedang aktif.
   * Feature Branch: Format penamaan `feat/m{nomor}-{nama-fitur}`, contoh: `feat/m1-kop-surat`, `feat/m2-soal-generator`.

---

## 8. KESIMPULAN

Dokumen SSOT ini menjadi pedoman resmi arsitektur dan tahapan pengerjaan. Pengembang mana pun yang bergabung dalam proyek ini dapat langsung memahami konteks, struktur folder, skema basis data, dan prioritas tugas yang harus dikerjakan secara berurutan mulai dari Milestone 0 hingga Milestone 8 tanpa kehilangan arah visi produk.
