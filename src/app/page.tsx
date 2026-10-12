"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Sparkles,
  School,
  Presentation,
  CalendarDays,
  FileCheck2,
  Download,
  Settings,
  ChevronRight,
  ShieldCheck,
  Award,
  Layers,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OfficialLetterhead } from "@/components/kop-surat/OfficialLetterhead";
import { EndorsementSheet } from "@/components/kop-surat/EndorsementSheet";
import { SchoolProfile, TeacherProfile } from "@/types";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "preview-kop" | "preview-pengesahan">("overview");

  // Sample Master Data (Default Kedinasan)
  const sampleSchool: Partial<SchoolProfile> = {
    government_agency: "PEMERINTAH PROVINSI JAWA TIMUR",
    education_office: "DINAS PENDIDIKAN DAN KEBUDAYAAN",
    school_name: "SMA NEGERI 1 PURWANTORO",
    npsn: "20311234",
    accreditation: "A",
    address: "Jalan Raya Purwantoro - Kismantoro Km. 2, Purwantoro, Wonogiri",
    postal_code: "57695",
    phone: "(0273) 415123",
    email: "info@sman1purwantoro.sch.id",
    website: "www.sman1purwantoro.sch.id",
  };

  const sampleTeacher: Partial<TeacherProfile> = {
    teacher_name: "Arfian Cahya, S.Pd.",
    teacher_nip: "19880412 201402 1 003",
    headmaster_name: "Drs. H. Mulyadi, M.Pd.",
    headmaster_nip: "19670815 199303 1 005",
    supervisor_name: "Dr. Hj. Sri Wahyuni, M.Pd.",
    supervisor_nip: "19651120 199002 2 002",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  GuruHub AI
                </span>
                <Badge variant="secondary" className="text-[10px] uppercase font-semibold">
                  BSKAP 2024
                </Badge>
              </div>
              <p className="text-xs text-slate-500">
                Asisten Perangkat Ajar & Administrasi Kedinasan Guru
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700">
              <School className="w-4 h-4 text-blue-700" />
              <span className="font-medium">SMAN 1 Purwantoro</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500">Fase E / Fisika</span>
            </div>
            <Link href="/profil-sekolah">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                <span>Profil Sekolah</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Banner */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-8 sm:p-10 shadow-md relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/60 border border-blue-500/30 text-xs font-medium text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Security by Design & Standar Resmi Kemendikbudristek</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Susun Administrasi & Soal Ujian Berkualitas Tanpa Beban Klerikal
            </h1>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              Platform terpadu untuk guru jenjang SD, SMP, dan SMA. Dihasilkan langsung dalam format resmi siap cetak lengkap dengan Kop Surat Kedinasan, Matriks Kisi-Kisi Soal, Taksonomi Bloom, dan Lembar Pengesahan Pengawas.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="accent" size="lg" className="font-semibold shadow-sm">
                <Sparkles className="w-4 h-4" />
                Mulai Buat Perangkat Ajar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                onClick={() => setActiveTab("preview-kop")}
              >
                Pratinjau Kop Kedinasan
              </Button>
            </div>
          </div>
          {/* Subtle Decorative Elements */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        </section>

        {/* Feature Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Modul Generator & Asisten Pembelajaran
              </h2>
              <p className="text-xs text-slate-500">
                Pilih modul kerja yang ingin Anda susun hari ini
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Soal Generator */}
            <Card className="hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-2 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <CardTitle className="text-base group-hover:text-blue-700 transition-colors">
                  Soal & Evaluasi Generator
                </CardTitle>
                <CardDescription className="text-xs leading-normal">
                  Pilihan Ganda, PG Kompleks, Uraian dengan kontrol LOTS/HOTS, Bloom C1-C6, dan Matriks Kisi-kisi.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-xs font-semibold text-blue-700 gap-1 mt-2">
                  <span>Buka Generator</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            {/* 2. Modul Ajar Generator */}
            <Card className="hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <CardTitle className="text-base group-hover:text-emerald-700 transition-colors">
                  Modul Ajar Kurikulum Merdeka
                </CardTitle>
                <CardDescription className="text-xs leading-normal">
                  Mode Ringkas (1-2 Lembar) dan Mode Lengkap BSKAP 2024 disertai diferensiasi konten, proses, dan produk.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-xs font-semibold text-emerald-700 gap-1 mt-2">
                  <span>Buka Generator</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            {/* 3. Perangkat Tahunan */}
            <Card className="hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-2 group-hover:bg-indigo-700 group-hover:text-white transition-colors">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <CardTitle className="text-base group-hover:text-indigo-700 transition-colors">
                  ATP, Prota, & Promes
                </CardTitle>
                <CardDescription className="text-xs leading-normal">
                  Pemisahan CP ke TP dan penyusunan tabel jam efektif sesuai kalender pendidikan sekolah.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-xs font-semibold text-indigo-700 gap-1 mt-2">
                  <span>Buka Generator</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            {/* 4. Slide Presentasi */}
            <Card className="hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-2 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <Presentation className="w-5 h-5" />
                </div>
                <CardTitle className="text-base group-hover:text-amber-700 transition-colors">
                  Slide Bahan Tayang (.PPTX)
                </CardTitle>
                <CardDescription className="text-xs leading-normal">
                  Slide alur pedagogis interaktif yang dapat diedit langsung dalam format Microsoft PowerPoint asli.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-xs font-semibold text-amber-700 gap-1 mt-2">
                  <span>Buka Generator</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Live Interactive Preview Tabs: Official Standards */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-700" />
                Standar Dokumen Resmi & Format Cetak Kedinasan
              </h2>
              <p className="text-xs text-slate-500">
                Setiap dokumen secara otomatis disesuaikan dengan data profil sekolah Anda
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={activeTab === "overview" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("overview")}
              >
                Contoh Paket Soal
              </Button>
              <Button
                variant={activeTab === "preview-kop" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("preview-kop")}
              >
                Kop Surat Resmi
              </Button>
              <Button
                variant={activeTab === "preview-pengesahan" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("preview-pengesahan")}
              >
                Lembar Pengesahan
              </Button>
            </div>
          </div>

          {/* Tab 1: Contoh Paket Soal */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="font-semibold text-slate-800">
                    Fisika - Gerak dan Gaya | Fase E (Kelas X)
                  </div>
                  <div className="text-slate-500">
                    Guru: Arfian Cahya | Satuan: SMAN 1 Purwantoro | Semester: Ganjil | TA: 2026/2027
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs bg-white">
                    <Download className="w-3.5 h-3.5 text-blue-700" />
                    Unduh DOCX
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs bg-white">
                    <Download className="w-3.5 h-3.5 text-red-600" />
                    Unduh PDF
                  </Button>
                </div>
              </div>

              {/* Sample Question Item */}
              <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-800">SOAL 1</span>
                    <Badge variant="warning">SEDANG</Badge>
                    <Badge variant="info">MOTS</Badge>
                    <Badge variant="secondary">C3 (Aplikasi)</Badge>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Bobot Skor: 2</span>
                </div>

                <p className="text-sm text-slate-800 leading-relaxed">
                  Seorang atlet berlari mengelilingi lintasan atletik berbentuk lingkaran dengan diameter 140 m. Atlet tersebut menempuh setengah lingkaran dalam waktu 20 detik. Berapakah kelajuan rata-rata dan kecepatan rata-rata atlet tersebut? (Gunakan &pi; = 22/7)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-md border border-slate-200 bg-slate-50/50 flex items-center gap-2">
                    <span className="font-bold text-slate-700">A.</span>
                    <span>11 m/s dan 7 m/s</span>
                  </div>
                  <div className="p-2.5 rounded-md border border-slate-200 bg-slate-50/50 flex items-center gap-2">
                    <span className="font-bold text-slate-700">B.</span>
                    <span>22 m/s dan 14 m/s</span>
                  </div>
                  <div className="p-2.5 rounded-md border border-slate-200 bg-slate-50/50 flex items-center gap-2">
                    <span className="font-bold text-slate-700">C.</span>
                    <span>7 m/s dan 11 m/s</span>
                  </div>
                  <div className="p-2.5 rounded-md border border-slate-200 bg-slate-50/50 flex items-center gap-2">
                    <span className="font-bold text-slate-700">D.</span>
                    <span>11 m/s dan 11 m/s</span>
                  </div>
                </div>

                {/* Kunci & Pembahasan */}
                <div className="p-3.5 rounded-md bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                  <p className="font-bold text-emerald-800">
                    Kunci Jawaban: A
                  </p>
                  <p className="text-emerald-950 leading-relaxed font-sans">
                    <strong>Pembahasan:</strong> Keliling lintasan setengah lingkaran adalah s = 0.5 &times; &pi; &times; d = 0.5 &times; (22/7) &times; 140 = 220 m. Kelajuan rata-rata = s / t = 220 / 20 = 11 m/s. Perpindahan atlet adalah diameter lingkaran yaitu &Delta;x = 140 m. Kecepatan rata-rata = &Delta;x / t = 140 / 20 = 7 m/s.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Pratinjau Kop Surat Resmi */}
          {activeTab === "preview-kop" && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-900">
                Kop surat ini akan otomatis diletakkan pada halaman muka berkas naskah soal, modul ajar, dan bundel administrasi pengawas.
              </div>
              <div className="p-6 bg-white border border-slate-300 rounded-lg shadow-xs">
                <OfficialLetterhead school={sampleSchool} />
                <div className="text-center py-8 text-xs text-slate-400 font-mono">
                  [Konten Naskah Ujian / Modul Ajar Dimulai Di Sini]
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Pratinjau Lembar Pengesahan */}
          {activeTab === "preview-pengesahan" && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-xs text-blue-900">
                Lembar pengesahan resmi memuat tanda tangan Guru Mata Pelajaran, Kepala Sekolah, dan Pengawas Pembina untuk memenuhi syarat supervisi akademik dinas pendidikan.
              </div>
              <EndorsementSheet
                school={sampleSchool}
                teacher={sampleTeacher}
                subject="Fisika"
                grade="Fase E (Kelas X)"
                academicYear="2026/2027"
                semester="Ganjil"
              />
            </div>
          )}
        </section>

        {/* Roadmap Progress Status */}
        <section className="bg-slate-100/70 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
          <div className="flex items-center justify-between font-semibold text-slate-800">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-700" />
              Status Milestone Pembangunan (Security by Design & SSOT)
            </span>
            <span className="text-blue-700 font-bold">Milestone 0: Selesai</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-700 h-full w-[25%]" />
          </div>
          <p className="text-[11px] text-slate-500">
            Fondasi repositori, Supabase migration dengan Row Level Security (RLS), design tokens, serta komponen Kop Surat Kedinasan telah siap dan dipush ke GitHub.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p className="max-w-7xl mx-auto px-4">
          GuruHub AI &mdash; Platform Perangkat Ajar & Evaluasi Terpadu Kurikulum Merdeka (SD, SMP, SMA). Sesuai Panduan Pembelajaran dan Asesmen BSKAP Kemendikbudristek No. 032/H/KR/2024.
        </p>
      </footer>
    </div>
  );
}
