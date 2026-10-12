# BLUEPRINT PENGEMBANGAN PLATFORM DIGITAL PERANGKAT PEMBELAJARAN GURU (SD, SMP, SMA)
## Dokumen Perencanaan Strategis, Arsitektur Sistem, dan Standar Kurikulum Nasional

---

## 1. PENDAHULUAN DAN VISI PRODUK

Platform ini dirancang sebagai ekosistem kerja terpadu (Integrated Teaching Workspace) yang menyederhanakan beban administratif pendidik di Indonesia tanpa mengorbankan mutu pedagogis. Berbeda dari generator teks AI konvensional yang hanya menghasilkan draf generik, platform ini memposisikan diri sebagai "Copilot Administrasi dan Pedagogi Resmi" yang patuh terhadap regulasi Kemendikbudristek (Badan Standar, Kurikulum, dan Asesmen Pendidikan / BSKAP), adaptif terhadap kebutuhan supervisi sekolah, serta siap cetak (print-ready) dengan format kedinasan formal.

### Visi Utama
Menghilangkan beban kerja administratif klerikal guru yang berulang, sehingga guru dapat mengalihkan fokus dan energi mentalnya untuk interaksi pembelajaran mendalam di kelas bersama peserta didik.

---

## 2. OBSERVASI DAN BEDAH KOMPARATIF TERHADAP REFERENSI

Berdasarkan analisis tangkapan layar (Soal Generator 1, 2, 3), platform pembanding (GuruInovatif.id dan Pordik.com), serta alur kerja dalam video referensi, berikut adalah sintesis kekuatan dan area pengembangan yang harus diunggulkan:

### A. Analisis Fitur GuruInovatif.id (Berdasarkan Tangkapan Layar)
* **Kekuatan:**
  * Pembagian konteks yang jelas: Mata pelajaran, jenjang, kelas, fase, semester, tahun ajaran, dan kurikulum.
  * Fleksibilitas sumber materi: Opsi mengetik bab secara manual atau mengunggah berkas PDF referensi.
  * Kontrol kognitif yang terukur: Pengaturan persentase tingkat kesulitan (Mudah, Sedang, Sulit), komposisi LOTS/MOTS/HOTS, serta distribusi Taksonomi Bloom C1 hingga C6 yang dapat diatur otomatis maupun manual.
  * Tipe penyajian stimulus: Pilihan antara pertanyaan langsung, analisis kutipan/paragraf, analisis teks utuh, atau variatif.
  * Output terformat rapi: Dilengkapi dukungan formula matematika/fisika (LaTeX), identitas dokumen, serta ekspor DOCX dan PDF dengan opsi menyertakan/menyembunyikan kunci jawaban dan pembahasan.
* **Keterbatasan / Area yang Perlu Ditingkatkan:**
  * Masih berfokus pada satu jenis soal dalam satu paket (umumnya Pilihan Ganda murni). Padahal standar ujian modern (seperti ANBK/AKM) memerlukan paket gabungan (Pilihan Ganda Kompleks, Menjodohkan, Isian Singkat, Uraian).
  * Belum menghasilkan dokumen pendamping resmi secara otomatis, seperti Matriks Kisi-Kisi Soal dan Kartu Soal yang diwajibkan oleh kurikulum sekolah untuk arsip penilaian.

### B. Analisis Fitur Pordik.com
* **Kekuatan:**
  * Menyediakan ragam produk administrasi yang luas: Modul Ajar/RPP, Analisis CP-TP-ATP, materi ajar bergambar, kuis instan, modul kokurikuler, dan bahan tayang.
  * Penekanan pada kecepatan proses (hitungan detik) dan kemudahan ekspor dokumen.
* **Keterbatasan / Area yang Perlu Ditingkatkan:**
  * Format dokumen yang dihasilkan sering kali memerlukan perapian tata letak manual yang signifikan sebelum siap ditandatangani oleh Kepala Sekolah atau Pengawas.
  * Kurangnya integrasi antara data profil sekolah (Kop Surat, NIP, Nomor Pokok Sekolah Nasional) dengan seluruh dokumen yang digenerate.

### C. Analisis Video Referensi (Materi, Modul Ajar, Soal/Kuis, Presentasi)
* **Generasi Materi:** Menuntut struktur materi berjenjang (Ringkasan Konsep, Studi Kasus Kontekstual Indonesia, Glosarium, dan Uji Pemahaman Mandiri).
* **Generasi Modul Ajar:** Menuntut keterkaitan langsung antara Profil Pelajar Pancasila, langkah pembelajaran berdiferensiasi (proses, konten, produk), dan instrumen asesmen autentik.
* **Generasi Soal:** Membutuhkan stimulus kontekstual berbasis fenomena kehidupan nyata (real-world problem solving).
* **Generasi Presentasi:** Membutuhkan slide yang ringkas secara teks (pedagogical deck), tidak memindahkan paragraf buku ke slide, melainkan memuat pemantik diskusi, diagram alur, dan poin kunci yang dapat diekspor langsung ke berkas presentasi asli (.pptx).

---

## 3. IDENTIFIKASI MASALAH DAN KELUHAN NYATA GURU DI INDONESIA

Pengembangan platform ini didasarkan pada penelusuran terhadap keluhan utama para guru di lapangan:

### 1. Masalah Paradoks Digitalisasi dan Birokrasi Ganda
* Guru ASN dan swasta menghadapi kewajiban ganda: mengisi bukti kinerja digital (Platform Merdeka Mengajar / PMM, e-Kinerja BKN) sekaligus menyiapkan bundel fisik administrasi untuk supervisi akademik oleh Pengawas Sekolah dan Kepala Sekolah.
* Banyak waktu guru habis di luar jam mengajar hanya untuk memindahkan data dari satu dokumen ke dokumen lain.

### 2. Masalah "Formatting Hell" (Kerusakan Tata Letak Dokumen)
* Guru yang menggunakan AI umum (seperti ChatGPT mentah) mengeluhkan hasil keluaran yang acak-acakan saat disalin ke Microsoft Word: tabel terpotong, margin berantakan, rumus matematika rusak, dan penomoran daftar tidak konsisten.
* Guru membutuhkan berkas unduhan yang langsung rapi dengan margin standar kedinasan (4-3-3-3 atau 3-3-3-3 cm), jenis huruf baku (Calibri/Times New Roman), dan penomoran otomatis.

### 3. Kebingungan Implementasi Pembelajaran Berdiferensiasi
* Kurikulum Merdeka menuntut guru menyusun skenario pembelajaran untuk 3 kelompok kesiapan belajar siswa (reguler/menengah, perbaikan/hambatan belajar, dan pengayaan/mahir).
* Guru kesulitan menuliskan secara detail langkah operasional di kelas untuk membagi waktu dan tugas bagi ketiga kelompok tersebut.

### 4. Beban Penyusunan Instrumen Evaluasi Lengkap
* Membuat soal bukan sekadar membuat pertanyaan dan kunci. Guru diwajibkan menyertakan:
  * Kisi-kisi soal lengkap dengan indikator soal dan level kognitif.
  * Kartu soal.
  * Rubrik penskoran dan pedoman penilaian analitik/holistik.
* Ketiadaan dokumen pendamping ini menyebabkan soal sering ditolak saat verifikasi tim kurikulum sekolah.

### 5. Diskoneksi Antara CP, TP, ATP, dan Alokasi Jam Pelajaran (JP)
* Guru sering kesulitan membagi alokasi waktu tahunan (Program Tahunan / Prota) dan semesteran (Program Semester / Promes) agar sinkron dengan jumlah minggu efektif riil pada kalender pendidikan masing-masing daerah.

---

## 4. USULAN FITUR UNGGULAN DAN ALUR KERJA EFISIEN (BEYOND THE REFERENCES)

Untuk mengatasi permasalahan di atas, platform ini mengusung inovasi fitur yang belum tersedia secara terpadu di platform kompetitor:

### A. Fitur Master: Profil Sekolah dan Pengesahan Terpusat (One-Time Setup)
Guru hanya perlu mengisi identitas sekolah dan tenaga pendidik satu kali pada menu pengaturan profil:
* **Header Kedinasan / Kop Surat:** Nama Instansi Pemerintah Provinsi/Kabupaten/Yayasan, Dinas Pendidikan, Nama Satuan Pendidikan, NPSN, Akreditasi, Alamat Lengkap, Kode Pos, Nomor Telepon, Alamat Email, Website Resmi, serta opsi unggah 2 logo (Logo Daerah/Kemendikbud di kiri, Logo Sekolah di kanan).
* **Pejabat Penandatangan:** Nama Guru Mata Pelajaran / Guru Kelas beserta NIP/NUPTK, Nama Kepala Sekolah beserta NIP, serta Nama Pengawas Pembina/Sekolah beserta NIP.
* **Dampak Sistemik:** Setiap dokumen yang digenerate (Modul Ajar, Silabus/ATP, Soal Ujian, LKPD) secara otomatis menyertakan Kop Surat resmi dan Lembar Pengesahan standar kedinasan pada halaman depan atau halaman akhir tanpa perlu diedit ulang.

### B. Modul Ajar Generator Multi-Mode (Fast Track vs Full Supervision)
Menyediakan dua mode pemilihan:
* **Mode 1: Ringkas / 1-2 Lembar (Untuk Penggunaan Sehari-hari):** Fokus pada komponen minimum resmi BSKAP (Tujuan Pembelajaran, Langkah Kegiatan Pembelajaran, dan Rencana Asesmen).
* **Mode 2: Lengkap / Berkas Supervisi Resmi (Untuk Portofolio dan Penilaian Kinerja):**
  * Bagian I (Informasi Umum): Identitas, Kompetensi Awal, Profil Pelajar Pancasila (pemilihan 1-3 dimensi relevan), Sarana Prasarana, Target Siswa, Model Pembelajaran (PBL, PjBL, Discovery, Cooperative).
  * Bagian II (Komponen Inti): Tujuan Pembelajaran, Pemahaman Bermakna, Pertanyaan Pemantik, Kegiatan Pendahuluan, Kegiatan Inti dengan Skenario Diferensiasi Terpeta (Diferensiasi Konten, Proses, Produk), Kegiatan Penutup/Refleksi.
  * Bagian III (Lampiran Lengkap): Lembar Kerja Peserta Didik (LKPD), Bahan Bacaan Guru dan Siswa, Glosarium Istilah, Daftar Pustaka.
  * Dilengkapi otomatis: Instrumen Asesmen Diagnostik Awal, Formatif, dan Sumatif lengkap dengan rubrik.

### C. Soal Generator AKM / ANBK Hybrid + Paket Berkas Evaluasi Lengkap
Tidak hanya menghasilkan soal pilihan ganda, sistem ini memproduksi 1 paket berkas evaluasi utuh dalam sekali proses:
* **Multi-Format Soal dalam Satu Paket:** Pilihan Ganda Tunggal, Pilihan Ganda Kompleks (pilihan lebih dari satu), Menjodohkan (Matching), Isian Singkat, dan Uraian Terstruktur.
* **Stimulus Kontekstual Nyata:** Generator teks berbasis artikel berita, tabel data, grafik, atau dialog naratif yang relevan dengan jenjang usia (SD/SMP/SMA).
* **Paket Dokumen yang Dihasilkan Sekaligus:**
  1. Naskah Soal Siswa (tanpa kunci).
  2. Naskah Pegangan Guru (dengan kunci jawaban dan pembahasan analitis).
  3. Matriks Kisi-Kisi Soal Resmi (Format tabel standar: No, Capaian Pembelajaran, Materi, Indikator Soal, Level Kognitif Bloom C1-C6, Bentuk Soal, Nomor Soal).
  4. Kartu Soal (Format baku per butir soal untuk bank soal sekolah).
  5. Pedoman Penskoran dan Rubrik Uraian.

### D. Generator Perangkat Tahunan Terpadu (CP ke TP, ATP, Prota, dan Promes)
* Sistem memiliki pangkalan data Capaian Pembelajaran (CP) resmi BSKAP terbaru untuk semua fase (Fase A hingga F).
* Guru memilih mata pelajaran dan fase, sistem menguraikan CP menjadi Tujuan Pembelajaran (TP) yang logis dan runtut.
* Sistem merangkainya menjadi Alur Tujuan Pembelajaran (ATP).
* **Kalkulator Minggu Efektif:** Guru memasukkan jumlah minggu efektif semester ganjil dan genap sesuai kalender pendidikan sekolah, sistem langsung mendistribusikan alokasi Jam Pelajaran (JP) ke dalam Program Tahunan (Prota) dan Program Semester (Promes) dalam bentuk tabel matrik siap cetak.

### E. Generator Bahan Presentasi Terstruktur (.PPTX Asli)
* Menghasilkan berkas Microsoft PowerPoint asli (.pptx yang dapat diedit langsung), bukan PDF statis.
* Struktur slide berbasis desain instruksional modern:
  * Slide 1: Judul Materi dan Identitas Pembelajaran.
  * Slide 2: Pertanyaan Pemantik dan Tujuan Pembelajaran.
  * Slide 3-4: Apersepsi dan Pengantar Masalah Kontekstual.
  * Slide 5-8: Pembahasan Konsep Inti (Menggunakan skema poin ringkas, analogi sederhana, dan saran visual/diagram).
  * Slide 9: Studi Kasus / Tantangan Diskusi Kelompok.
  * Slide 10: Kuis Interaktif Cepat (3 Pertanyaan Cek Pemahaman).
  * Slide 11: Kesimpulan dan Refleksi Siswa.

### F. Asisten Perencanaan Kinerja Guru (Sinkronisasi RHK PMM)
* Menyediakan fitur penunjang untuk membantu guru merumuskan Rencana Hasil Kerja (RHK) dan target observasi kelas sesuai 8 indikator kinerja PMM (misalnya: Keteraturan Suasana Kelas, Penerapan Disiplin Positif, Umpan Balik Konstruktif, dsb.).
* Menghasilkan dokumen bukti dukung observasi yang selaras dengan modul ajar yang digenerate.

---

## 5. SUSUNAN DAN STRUKTUR DOKUMEN RESMI KEDINASAN

Agar dokumen yang dihasilkan memenuhi standar formal pengawas sekolah dan dinas pendidikan, sistem wajib menerapkan susunan dokumen baku berikut:

### A. Format Standar Kop Surat Resmi Sekolah
Kop surat diletakkan di bagian paling atas dokumen pada naskah ujian, modul ajar, dan lembar pengesahan:

```text
========================================================================================
[LOGO PEMDA / KEMDIKBUD]           PEMERINTAH PROVINSI / KABUPATEN [NAMA DAERAH]          [LOGO SEKOLAH]
                                        DINAS PENDIDIKAN DAN KEBUDAYAAN
                                          SMA / SMP / SD NEGERI [NAMA SEKOLAH]
                             Alamat: Jalan Pendidikan No. 123, Kecamatan, Kota, Kode Pos
                               Telepon: (021) 1234567 | Pos-el: sekolah@pendidikan.sch.id
                                            Laman Resmi: www.namasekolah.sch.id
========================================================================================
```

### B. Format Lembar Pengesahan Perangkat Pembelajaran
Diletakkan di halaman setelah sampul atau di halaman akhir modul ajar/silabus:

```text
                                        LEMBAR PENGESAHAN
                           PERANGKAT PEMBELAJARAN / MODUL AJAR
                                TAHUN PELAJARAN 2026/2027

Dokumen Perangkat Pembelajaran / Modul Ajar Mata Pelajaran [Nama Mata Pelajaran] Kelas [X/XI/XII] 
Fase [E/F] ini telah diperiksa, dievaluasi, dan disahkan untuk dipergunakan sebagai pedoman 
kegiatan belajar mengajar pada semester [Ganjil/Genap] di [Nama Satuan Pendidikan].

                                                          Disahkan di : [Nama Kota/Kabupaten]
                                                          Pada Tanggal : [Tanggal Pengesahan]

Mengetahui,
Kepala [Nama Sekolah]                                      Guru Mata Pelajaran



[Nama Kepala Sekolah, Gelar]                              [Nama Guru, Gelar]
NIP. [Nomor Induk Pegawai]                                NIP. [Nomor Induk Pegawai]

                                           Mengetahui / Mengesahkan,
                                           Pengawas Pembina Sekolah



                                           [Nama Pengawas Pembina, Gelar]
                                           NIP. [Nomor Induk Pegawai]
```

### C. Anatomi Lengkap Modul Ajar Resmi (BSKAP Kemendikbudristek)

#### BAGIAN I. INFORMASI UMUM
1. **Identitas Modul:**
   * Nama Penyusun
   * Satuan Pendidikan
   * Tahun Penyusunan
   * Jenjang / Fase / Kelas
   * Mata Pelajaran
   * Alokasi Waktu (Jumlah JP dan Pertemuan)
2. **Kompetensi Awal:** Pengetahuan atau keterampilan prasyarat yang harus dimiliki peserta didik.
3. **Profil Pelajar Pancasila:** Pilihan dimensi yang dituju (misal: Bernalar Kritis, Gotong Royong, Kreatif).
4. **Sarana dan Prasarana:** Media, alat, bahan, dan sumber belajar yang digunakan.
5. **Target Peserta Didik:** Peserta didik reguler/tipikal, dengan kesulitan belajar, dan dengan pencapaian tinggi.
6. **Model dan Metode Pembelajaran:** Pendekatan (Saintifik/Kontekstual), Model (Problem-Based Learning / Project-Based Learning), Metode (Diskusi, Eksperimen, Presentasi).

#### BAGIAN II. KOMPONEN INTI
1. **Tujuan Pembelajaran (TP):** Pernyataan kompetensi dan lingkup materi yang ingin dicapai.
2. **Pemahaman Bermakna:** Konsep inti atau nilai guna materi bagi kehidupan nyata peserta didik.
3. **Pertanyaan Pemantik:** Pertanyaan provokatif untuk menstimulus rasa ingin tahu di awal sesi.
4. **Kegiatan Pembelajaran (Per Pertemuan):**
   * **Kegiatan Pendahuluan (10-15 Menit):** Pembukaan, presensi, apersepsi, kaitan materi sebelumnya, penyampaian tujuan dan asesmen awal.
   * **Kegiatan Inti (Alokasi Waktu Terbesar):**
     * Sintaks model pembelajaran yang dipilih secara berurutan.
     * Penerapan pembelajaran berdiferensiasi:
       * *Diferensiasi Konten:* Variasi bahan bacaan/infografis/video untuk gaya belajar berbeda.
       * *Diferensiasi Proses:* Pembagian bimbingan (scaffolding bertingkat) antara kelompok butuh pendampingan dan kelompok mandiri.
       * *Diferensiasi Produk:* Variasi bentuk laporan tugas siswa (tulisan, infografis, rekaman presentasi).
   * **Kegiatan Penutup (10-15 Menit):** Simpulan bersama, refleksi pembelajaran dua arah (guru dan murid), penyampaian rencana pertemuan berikutnya, dan doa penutup.
5. **Rencana Asesmen:**
   * Asesmen Awal (Diagnostik non-kognitif dan kognitif singkat).
   * Asesmen Formatif (Observasi partisipasi, lembar ceklist tugas harian).
   * Asesmen Sumatif (Tes tertulis/kinerja di akhir bab) disertai rubrik penilaian.
6. **Pengayaan dan Remedial:** Skenario penanganan khusus untuk siswa tuntas dan belum tuntas.
7. **Refleksi Pendidik dan Peserta Didik:** Daftar pertanyaan evaluasi diri bagi guru dan murid.

#### BAGIAN III. LAMPIRAN
1. Lembar Kerja Peserta Didik (LKPD) lengkap dengan petunjuk pengerjaan.
2. Bahan Bacaan Guru dan Peserta Didik (Materi ringkas terstruktur).
3. Glosarium (Daftar istilah penting dan definisinya).
4. Daftar Pustaka (Referensi buku, jurnal, dan sumber daring kredibel).

### D. Format Baku Tabel Matriks Kisi-Kisi Soal Ujian
Matriks kisi-kisi soal yang wajib dilampirkan guru pada setiap penyelenggaraan asesmen:

| No | Capaian Pembelajaran | Tujuan Pembelajaran / Lingkup Materi | Indikator Soal | Level Kognitif (Bloom) | Bentuk Soal | Nomor Soal | Bobot Skor |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Menganalisis gerak lurus dan gaya | Peserta didik mampu menghitung kelajuan dan kecepatan | Disajikan ilustrasi lintasan gerak atletik, peserta didik dapat menghitung rasio kelajuan rata-rata terhadap kecepatan rata-rata | C3 (Aplikasi) / MOTS | Pilihan Ganda | 1 | 2 |
| 2 | Menganalisis hukum gerak Newton | Peserta didik mengevaluasi fenomena inersia pada benda | Disajikan grafik hubungan gaya dan percepatan, peserta didik dapat menyimpulkan massa benda | C4 (Analisis) / HOTS | Uraian | 21 | 5 |

---

## 6. SPESIFIKASI DETAIL PARAMETER INPUT SISTEM

Agar sistem AI dapat memproduksi dokumen dengan tingkat akurasi tinggi dan minim halusinasi, form generator harus memiliki parameter input yang terstruktur secara rinci:

### A. Parameter Input Modul Ajar Generator
1. **Identitas Dokumen:**
   * Jenjang Pendidikan: SD / SMP / SMA / SMK.
   * Tingkat / Kelas: Kelas 1 hingga Kelas 12.
   * Fase Kurikulum: Fase A (Kelas 1-2), B (3-4), C (5-6), D (7-9), E (10), F (11-12).
   * Mata Pelajaran: Dropdown terpilih atau kustom.
   * Semester: Ganjil / Genap.
   * Alokasi Waktu: Input jumlah pertemuan dan total Jam Pelajaran (contoh: 2 Pertemuan x 3 JP @45 Menit).
2. **Konteks Kurikulum:**
   * Elemen Capaian Pembelajaran: Pilihan otomatis berdasarkan fase atau teks bebas.
   * Lingkup Materi / Bab Pokok.
   * Sub-Materi Spesifik yang akan diajarkan.
3. **Pengaturan Pedagogis:**
   * Dimensi Profil Pelajar Pancasila: Multi-select (Beriman/Bertakwa, Berkebinekaan Global, Bergotong Royong, Mandiri, Bernalar Kritis, Kreatif).
   * Model Pembelajaran: Problem-Based Learning (PBL), Project-Based Learning (PjBL), Discovery Learning, Inkuiri Terbimbing, Direct Instruction, Flipped Classroom.
   * Ketersediaan Sarana Belajar: Digital Lengkap (Proyektor, Internet, Lab Komputer) vs Konvensional / Keterbatasan Fasilitas (Buku Teks, Papan Tulis, Lingkungan Alam Sekolah).
   * Pendekatan Diferensiasi: Aktifkan skenario diferensiasi otomatis (Konten, Proses, Produk).
4. **Format Dokumen Output:**
   * Tipe Format: Mode Ringkas (1-2 Lembar) vs Mode Supervisi Lengkap BSKAP.
   * Sertakan Kop Sekolah dan Lembar Pengesahan: Ya / Tidak.

### B. Parameter Input Soal Generator
1. **Konteks Pembelajaran:**
   * Mata Pelajaran, Jenjang, Kelas, Fase, Semester, Tahun Ajaran.
   * Bab/Materi Pokok atau Unggah Dokumen Rujukan (PDF Modul/Buku Ajar hingga 20 MB).
   * Tujuan Pembelajaran / Indikator yang Diuji.
2. **Bentuk dan Struktur Soal:**
   * Pilihan Variasi Bentuk: Pilihan Ganda Murni, Pilihan Ganda Kompleks (jawaban lebih dari satu), Menjodohkan, Isian Singkat, Uraian, atau Campuran Proporsional.
   * Jumlah Butir Soal: Angka (contoh: 10, 20, 25, 40 soal).
   * Jumlah Opsi Jawaban: 3 opsi (A-C untuk SD awal), 4 opsi (A-D untuk SD akhir dan SMP), 5 opsi (A-E untuk SMA/SMK).
3. **Distribusi Tingkat Kesulitan dan Kognitif:**
   * Proporsi Kesulitan: Slider Mudah (%) + Sedang (%) + Sulit (%) = 100%.
   * Komposisi Tingkat Kognitif: LOTS (%) + MOTS (%) + HOTS (%) = 100%.
   * Distribusi Taksonomi Bloom: Mode Otomatis (sinkron dengan LOTS/MOTS/HOTS) atau Atur Manual C1, C2, C3, C4, C5, C6 (total 100%).
4. **Tipe Penyajian Stimulus:**
   * Pertanyaan Langsung (tanpa stimulus panjang).
   * Analisis Kutipan / Paragraf Singkat.
   * Analisis Teks Utuh / Narasi Literasi.
   * Analisis Data / Grafik / Tabel Numerasi.
   * Campuran / Berbasis Masalah Nyata.
5. **Keluaran Dokumen Tambahan (Checklist):**
   * Naskah Soal Siswa (Siap Ujian).
   * Kunci Jawaban dan Pembahasan Berurutan.
   * Format Formula LaTeX untuk Sains dan Matematika.
   * Tabel Matriks Kisi-Kisi Ujian Resmi.
   * Lembar Kartu Soal.
   * Pedoman Penskoran / Rubrik Uraian.

### C. Parameter Input ATP, Prota, dan Promes Generator
1. **Parameter Waktu:**
   * Tahun Pelajaran (misal: 2026/2027).
   * Jumlah Pekan/Minggu Efektif Semester Ganjil.
   * Jumlah Pekan/Minggu Efektif Semester Genap.
   * Total JP per Minggu untuk Mata Pelajaran Terkait.
2. **Parameter Materi:**
   * Elemen dan Capaian Pembelajaran Fase Terpilih.
   * Daftar Rencana Bab dan Prioritas Materi Esensial.
3. **Keluaran:**
   * Tabel Analisis CP ke TP.
   * Tabel Alur Tujuan Pembelajaran (ATP) berurutan.
   * Tabel Program Tahunan (Prota).
   * Tabel Matriks Program Semester (Promes) dengan pembagian minggu efektif.

### D. Parameter Input Generator Presentasi (Slide Deck)
1. **Identitas dan Audiens:**
   * Jenjang Siswa (SD: visual ceria, bahasa sederhana; SMP: eksploratif; SMA: profesional, analitis).
   * Alokasi Waktu Paparan di Kelas (misal: 15 menit presentasi + 25 menit diskusi).
2. **Karakteristik Slide:**
   * Jumlah Slide: Dropdown (7 slide, 10 slide, 15 slide).
   * Fokus Gaya: Berbasis Studi Kasus, Pemaparan Konseptual, atau Interaktif/Game Pembelajaran.
   * Catatan Pembicara (Speaker Notes): Aktifkan untuk memberikan panduan apa yang harus diucapkan guru per slide.
3. **Format Output:** Berkas PowerPoint editable (.pptx).

---

## 7. ARSITEKTUR TEKNOLOGI DAN SISTEM RENDERING DOKUMEN

Untuk menjamin keandalan platform, performa tinggi, dan ketepatan format dokumen kedinasan, berikut adalah usulan arsitektur sistem:

```text
[Frontend: Next.js / React]
         |
         v
[API Gateway & Auth: NestJS / FastAPI]
         |
         +---> [Database Utama: PostgreSQL] (Data Pengguna, Sekolah, Riwayat Dokumen)
         |
         +---> [Knowledge Base / Vector DB: Qdrant / PgVector] 
         |     (Regulasi BSKAP, Standar CP/TP Resmi Kemendikbudristek 2024)
         |
         +---> [AI Orchestration Pipeline]
         |     (Model LLM: Pemrosesan Prompt Terstruktur & JSON Strict Mode)
         |
         +---> [Document Generation Engine]
               +-- DOCX Engine: docx (Node.js) / python-docx
               +-- PDF Engine: Weasyprint / Puppeteer (HTML+CSS Print to PDF)
               +-- PPTX Engine: pptxgenjs / python-pptx
               +-- Math Renderer: KaTeX / MathJax ke MathML (Kompatibel MS Word)
```

### Keunggulan Pipeline Rendering Terpisah
* **Mencegah Masalah Tata Letak:** Sistem tidak meminta AI menghasilkan kode biner file Word atau PDF secara langsung. AI diwajibkan menghasilkan data terstruktur dalam format JSON murni.
* **Template Engine Khusus Kedinasan:** Server backend menggunakan templat dokumen resmi (.docx dan .pdf) dengan margin, tabel border, jenis huruf, dan Kop Surat yang sudah terkunci rapi sesuai standar resmi. Data JSON dari AI diinjeksikan langsung ke dalam placeholder templat tersebut.
* **Dukungan Formula Matematika Sempurna:** Persamaan fisika dan rumus matematika yang ditulis dalam sintaks LaTeX diterjemahkan menjadi format Office Math Markup Language (OMML) pada Word dan MathML pada PDF, sehingga rumus dapat diedit kembali oleh guru di Microsoft Word tanpa pecah sebagai gambar.

---

## 8. STRATEGI BISNIS DAN ROADMAP IMPLEMENTASI

### A. Model Monetisasi Ramah Guru
* **Tier Gratis (Freemium):**
  * Akses pembuatan Modul Ajar Ringkas dan Soal hingga 10 butir per hari.
  * Standar ekspor PDF dengan watermark kecil.
* **Tier Guru Berdaya (Langganan Bulanan/Tahunan Terjangkau):**
  * Akses tanpa batas ke seluruh generator (Modul Lengkap BSKAP, Soal Campuran 50 butir, Kisi-Kisi, Kartu Soal, ATP, Prota, Promes, Presentasi PPTX).
  * Ekspor berkas DOCX dan PPTX murni siap cetak tanpa watermark.
  * Penyimpanan arsip cloud perangkat ajar tanpa batas.
* **Tier Sekolah / Yayasan (B2B School License):**
  * Master akun untuk Kepala Sekolah dan Pengawas Sekolah guna meninjau dan menyetujui (verifikasi daring) modul ajar guru dalam satu dashboard sekolah.
  * Manajemen identitas guru dan satu standardisasi kop surat seluruh sekolah.

### B. Tahapan Eksekusi Produk (Roadmap)
1. **Fase 1: Minimum Viable Product (MVP) - Fokus Inti Administrasi**
   * Pembangunan Master Profil Sekolah & Kop Surat Otomatis.
   * Pembangunan Generator Soal (PG dan Uraian) + Ekspor DOCX/PDF.
   * Pembangunan Modul Ajar Generator (Mode Ringkas dan Lengkap BSKAP).
2. **Fase 2: Perangkat Tahunan dan Evaluasi Lengkap**
   * Generator Kisi-Kisi Soal dan Kartu Soal otomatis.
   * Generator CP-TP-ATP, Program Tahunan (Prota), dan Program Semester (Promes).
   * Generator Slide Presentasi (.pptx).
3. **Fase 3: Asisten Observasi Kinerja dan Ekosistem Komunitas**
   * Modul pendampingan persiapan observasi kelas PMM.
   * Fitur Berbagi Perangkat Ajar Antar-Guru (Ruang Kolaborasi).
   * Integrasi pembacaan dokumen referensi guru berbasis OCR dan PDF Parser lanjutan.

---

## 9. KESIMPULAN

Melalui blueprint ini, platform yang dibangun tidak sekadar menjadi klona dari layanan yang sudah ada, melainkan menjadi solusi tuntas terhadap titik nyeri birokrasi pendidikan di Indonesia. Dengan mengintegrasikan regulasi resmi BSKAP Kemendikbudristek, menyatukan profil kedinasan sekolah, menyajikan diferensiasi pembelajaran secara praktis, serta menjamin hasil ekspor dokumen rapi tanpa kendala tata letak, platform ini berpotensi menjadi asisten kerja utama bagi jutaan guru di seluruh jenjang pendidikan di Indonesia.
