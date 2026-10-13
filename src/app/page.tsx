"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  FileText,
  CalendarDays,
  Presentation,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Layers,
  Clock,
  Award,
  BookOpen,
  School,
  Sliders,
  Check,
  HelpCircle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [previewTab, setPreviewTab] = useState<"soal" | "kisi" | "modul">("soal");

  const faqs = [
    {
      q: "Apakah seluruh dokumen luaran sesuai regulasi Kurikulum Merdeka terbaru?",
      a: "Ya. Sistem GuruHub AI dikembangkan mengacu langsung pada Keputusan Kepala BSKAP Kemendikbudristek No. 032/H/KR/2024 tentang Capaian Pembelajaran, Permendikbudristek No. 12 Tahun 2024, serta panduan pembelajaran dan asesmen nasional.",
    },
    {
      q: "Dapatkah berkas yang dihasilkan diedit kembali di Microsoft Word dan PowerPoint?",
      a: "Tentu saja. Mesin ekspor dokumen kami menghasilkan berkas .DOCX asli dengan margin standar kedinasan 4-3-3-3 cm dan file .PPTX native widescreen 16:9 yang dapat Anda buka, edit, dan cetak langsung di komputer Anda.",
    },
    {
      q: "Bagaimana dokumen GuruHub AI dapat digunakan sebagai bukti dukung di Platform Merdeka Mengajar (PMM)?",
      a: "Modul Ajar, instrumen asesmen, LKPD, dan media presentasi telah diselaraskan dengan 8 Indikator Observasi Kelas serta Rencana Hasil Kerja (RHK) pada Pengelolaan Kinerja Guru PMM sesuai Perdirjen GTK No. 7607/B.B1/HK.03/2023.",
    },
    {
      q: "Apakah saya harus memasukkan Kop Surat dan profil sekolah berulang kali?",
      a: "Tidak. Melalui modul Master Profil Sekolah, Anda cukup mengisi data sekolah (nama, NPSN, alamat, logo daerah, logo sekolah) dan data penandatangan satu kali. Seluruh naskah soal, modul ajar, ATP, dan LKPD akan otomatis memuat Kop Surat dan Lembar Pengesahan resmi.",
    },
    {
      q: "Apakah ada biaya langganan untuk mulai menggunakan sistem ini?",
      a: "GuruHub AI menyediakan akses awal secara gratis bagi seluruh guru di Indonesia untuk menyusun modul ajar, paket soal HOTS, dan perangkat tahunan secara mandiri tanpa batasan komplikasi.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center font-black text-base shadow-sm">
              G
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-base tracking-tight text-slate-900 block">
                GuruHub AI
              </span>
              <span className="text-[10px] text-slate-600 block uppercase font-medium tracking-wider">
                Kurikulum Merdeka
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold text-slate-600">
            <a href="#fitur" className="hover:text-blue-700 transition-colors">
              Fitur Unggulan
            </a>
            <a href="#cara-kerja" className="hover:text-blue-700 transition-colors">
              Cara Kerja
            </a>
            <a href="#efisiensi" className="hover:text-blue-700 transition-colors">
              Efisiensi Guru
            </a>
            <a href="#regulasi" className="hover:text-blue-700 transition-colors">
              Standar BSKAP 2024
            </a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-xs font-bold text-slate-700 hover:text-slate-900">
                Masuk
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs h-9 px-4 shadow-xs">
                Coba Gratis Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-bold text-blue-900 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>Teknologi Guru Cerdas - Kurikulum Merdeka BSKAP 2024</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Buat soal berkualitas dalam{" "}
                <span className="text-blue-700 underline decoration-blue-300 decoration-wavy decoration-2">
                  hitungan detik
                </span>{" "}
                bersama Guru AI
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Rancang paket asesmen, kuis, latihan HOTS/AKM, modul ajar berdiferensiasi, ATP, dan format kedinasan lengkap dengan Matriks Kisi-Kisi dan rubrik penskoran standar resmi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link href="/login" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm h-11 px-7 shadow-md gap-2">
                    <span>Coba Generator Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="#cara-kerja" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-slate-700 font-bold text-sm h-11 px-6">
                    Lihat Cara Kerja
                  </Button>
                </a>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Tanpa ribet klerikal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Regulasi BSKAP 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Ekspor Word & PowerPoint</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-5 space-y-4 relative z-10">
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-bold text-slate-400 ml-2">Generator Soal & Kisi-Kisi</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] bg-blue-50 text-blue-800 border-blue-200">
                    Otomatis 100%
                  </Badge>
                </div>

                {/* Simulated Content */}
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] text-slate-600">
                      <span>Mata Pelajaran: Fisika (Kelas X)</span>
                      <span className="font-bold text-blue-700">Level: HOTS (C4-C6)</span>
                    </div>
                    <p className="font-semibold text-slate-900 text-xs">
                      Stimulus: Analisis grafik kecepatan terhadap waktu pada kendaraan listrik perkotaan.
                    </p>
                  </div>

                  {/* Options sample */}
                  <div className="space-y-1.5">
                    <div className="p-2 rounded border border-slate-200 bg-white flex items-center justify-between text-[11px]">
                      <span>A. Percepatan tetap pada fase pertama</span>
                      <span className="text-slate-600 text-[10px]">Opsi</span>
                    </div>
                    <div className="p-2 rounded border border-emerald-500 bg-emerald-50/70 flex items-center justify-between text-[11px] font-semibold text-emerald-950">
                      <span>B. Energi kinetik sebanding dengan kuadrat kelajuan</span>
                      <span className="text-emerald-700 text-[10px] font-bold">Kunci Jawaban</span>
                    </div>
                  </div>

                  {/* Document Outputs */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-center font-bold">
                    <div className="p-2 bg-blue-50 rounded text-blue-900 border border-blue-200">
                      Naskah Soal
                    </div>
                    <div className="p-2 bg-emerald-50 rounded text-emerald-900 border border-emerald-200">
                      Matriks Kisi-Kisi
                    </div>
                    <div className="p-2 bg-indigo-50 rounded text-indigo-900 border border-indigo-200">
                      DOCX 4-3-3-3 cm
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Backdrops */}
              <div className="absolute -top-6 -right-6 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Jenjang Bar */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Disediakan untuk Pendidik dari Berbagai Satuan Pendidikan Nasional
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {["SD / MI", "SMP / MTs", "SMA / MA", "SMK / MAK", "SLB / Inklusi"].map((lvl) => (
              <span
                key={lvl}
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
              >
                {lvl}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section: Dari Pengaturan Hingga Dokumen Siap Cetak (Interactive Flow) */}
      <section id="cara-kerja" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              ALUR KERJA INTUITIF
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Dari pengaturan hingga berkas resmi siap cetak
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cukup tentukan parameter pembelajaran Anda, sistem akan menyusun naskah lengkap berserta dokumen pendukung supervisi.
            </p>
          </div>

          {/* Interactive Preview Tabs */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 border-b border-slate-200 pb-3">
              <Button
                variant={previewTab === "soal" ? "default" : "outline"}
                size="sm"
                onClick={() => setPreviewTab("soal")}
                className="text-xs font-bold"
              >
                1. Naskah Soal & Kunci
              </Button>
              <Button
                variant={previewTab === "kisi" ? "default" : "outline"}
                size="sm"
                onClick={() => setPreviewTab("kisi")}
                className="text-xs font-bold"
              >
                2. Matriks Kisi-Kisi Ujian
              </Button>
              <Button
                variant={previewTab === "modul" ? "default" : "outline"}
                size="sm"
                onClick={() => setPreviewTab("modul")}
                className="text-xs font-bold"
              >
                3. Modul Ajar BSKAP 2024
              </Button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              {previewTab === "soal" && (
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-800 text-sm">Paket Soal Asesmen Sumatif</span>
                    <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-800 font-bold">
                      Format Cetak A4
                    </Badge>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Setiap butir soal dilengkapi stimulus kontekstual, opsi jawaban proporsional, kunci jawaban akurat, serta pembahasan pedagogis untuk umpan balik konstruktif siswa.
                  </p>
                  <div className="p-3 bg-white rounded border border-slate-200 text-slate-800 italic">
                    Contoh: Mengapa pemuaian rel kereta api harus diperhitungkan dalam rekayasa jembatan baja? Jelaskan berdasarkan prinsip kalor dan hukum termodinamika.
                  </div>
                </div>
              )}

              {previewTab === "kisi" && (
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-800 text-sm">Matriks Kisi-Kisi Ujian Resmi</span>
                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-800 font-bold">
                      Standar Arsip Dinas
                    </Badge>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Tabel matriks memetakan Capaian Pembelajaran (CP), Tujuan Pembelajaran (TP), Indikator Soal, Level Kognitif (LOTS/MOTS/HOTS), dan Bobot Nilai tanpa hitungan manual.
                  </p>
                </div>
              )}

              {previewTab === "modul" && (
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-800 text-sm">Modul Ajar Supervisi BSKAP 2024</span>
                    <Badge variant="outline" className="text-xs bg-purple-50 text-purple-800 font-bold">
                      3 Pilar Diferensiasi
                    </Badge>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Lengkap dengan diferensiasi konten, proses, dan produk, serta lampiran Lembar Kerja Peserta Didik (LKPD), bahan bacaan, glosarium, dan lembar pengesahan kepala sekolah.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Waktu Anda Lebih Baik Digunakan untuk Mendampingi Siswa */}
      <section id="efisiensi" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              EFISIENSI WAKTU GURU
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Waktu Anda lebih baik digunakan untuk mendampingi siswa
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Beban administrasi menyita lebih dari 40% jam kerja guru. GuruHub AI mengotomasi proses klerikal agar fokus Anda kembali pada interaksi bermakna di ruang kelas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200 bg-white shadow-xs p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Hemat Waktu Penyusunan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pembuatan naskah soal, kisi-kisi, dan modul ajar yang biasa memakan waktu berjam-jam dapat diselesaikan dalam beberapa detik.
              </p>
            </Card>

            <Card className="border-slate-200 bg-white shadow-xs p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Dokumentasi Standar Dinas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Format berkas mengikuti standar kedinasan dengan margin 4-3-3-3 cm, Kop Surat dua logo, dan kolom tanda tangan pengawas.
              </p>
            </Card>

            <Card className="border-slate-200 bg-white shadow-xs p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Guru Memegang Kendali</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap butir soal dan skenario ajar dapat disunting secara langsung (in-line edit) sebelum disimpan atau dicetak.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Section Dark: Tiga Langkah Menuju Soal Siap Pakai */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                PROSES CEPAT & SEDERHANA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Tiga langkah menuju perangkat siap pakai
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tidak perlu perintah prompt yang rumit. Sistem kami menyediakan formulir wizard terpandu dengan istilah pedagogis yang sudah akrab bagi Anda.
              </p>
              <div className="pt-2">
                <Link href="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs h-10 px-6 shadow-sm">
                    Mulai Sekarang
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Pilih Jenjang, Fase, & Lingkup Materi</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Tentukan tingkat kelas, fase kurikulum (A s/d F), serta topik materi yang ingin diujikan atau diajarkan.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Atur Standar & Komposisi Kognitif</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Sesuaikan persentase tingkat kesulitan (mudah, sedang, sulit) serta taksonomi Bloom (C1 s/d C6) secara instan.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Periksa, Edit, dan Ekspor Berkas Resmi</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Tinjau naskah di layar, lakukan penyesuaian jika diperlukan, lalu unduh dalam format Microsoft Word (.DOCX) atau PowerPoint (.PPTX).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: Bukan Sekadar Generator Biasa (Feature Grid) */}
      <section id="fitur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              KEMAMPUAN PEDAGOGIS MENDALAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Bukan sekadar membuat pertanyaan
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Setiap keluaran dokumen dikonstruksi secara ilmiah agar dapat dipertanggungjawabkan dalam supervisi akademik dan penilaian PMM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">Stimulus Variatif AKM</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mendukung stimulus kutipan teks, studi kasus kontekstual, data tabel, dan permasalahan dunia nyata.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">Tingkat Kesulitan Akurat</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pengaturan proporsi tingkat kesulitan (Mudah, Sedang, Sulit) dengan validasi otomatis total 100%.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">Kunci & Pembahasan Lengkap</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disertai penjelasan penalaran ilmiah per butir soal untuk mempermudah evaluasi dan remedial siswa.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">Taksonomi Bloom C1 s/d C6</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pemetaan ranah berpikir dari mengingat (C1) hingga mencipta (C6) sesuai format asesmen modern.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">3 Pilar Pembelajaran Berdiferensiasi</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modul ajar merinci diferensiasi konten, proses, dan produk sesuai kesiapan belajar peserta didik.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">Dukungan Formula KaTeX & Sains</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formula matematika, reaksi kimia, dan simbol fisika dirender rapi dan dapat diedit di Word.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section FAQ Accordion */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              PERTANYAAN UMUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Masih ingin tahu tentang GuruHub AI?
            </h2>
            <p className="text-sm text-slate-600">
              Pertanyaan yang paling sering diajukan oleh para pendidik mengenai platform ini
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4.5 sm:p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-800/80 px-3 py-1 rounded-full border border-blue-400/30">
                Akses Gratis untuk Pendidik Indonesia
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Punya materi untuk diajarkan? Susun perangkatnya sekarang.
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Bergabunglah bersama ribuan guru yang telah menghemat waktu administrasi dan menghadirkan pembelajaran berkualitas di kelas.
              </p>
              <div className="pt-2">
                <Link href="/login">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-extrabold text-sm h-11 px-8 shadow-md gap-2">
                    <span>Mulai Buat Perangkat Ajar Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <span className="font-extrabold text-base text-white tracking-tight">
                  GuruHub AI
                </span>
              </div>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
                Platform terpadu otomasi administrasi Kurikulum Merdeka, Soal AKM/HOTS, Modul Ajar BSKAP 2024, ATP, dan Media Presentasi untuk kemajuan pendidikan Indonesia.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
                Modul Generator
              </span>
              <ul className="space-y-1.5 text-slate-400">
                <li><Link href="/login" className="hover:text-white transition-colors">Soal & Kisi-Kisi</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Modul Ajar BSKAP</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">ATP & Pekan Efektif</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Slide PPTX & LKPD</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
                Regulasi & Standar
              </span>
              <ul className="space-y-1.5 text-slate-400">
                <li>BSKAP No. 032/H/KR/2024</li>
                <li>Permendikbudristek No. 12/2024</li>
                <li>Perdirjen GTK Kinerja PMM</li>
                <li>Format Kedinasan 4-3-3-3 cm</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-3">
            <span>Hak Cipta 2026 GuruHub AI. Seluruh hak cipta dilindungi undang-undang.</span>
            <span>Security by Design & Standar Pendidikan Nasional Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
