"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FileText,
  FileCheck2,
  CalendarDays,
  Presentation,
  School,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TickerFeature {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  tagline: string;
  fullDesc: string;
  points: string[];
  docOutput: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FEATURES: TickerFeature[] = [
  {
    id: "modul-ajar",
    badge: "BSKAP 032/H/KR/2024",
    title: "Modul Ajar 3 Pilar Diferensiasi",
    shortDesc: "Konten, Proses, & Produk Terpetakan Otomatis",
    tagline: "Format Lengkap Supervisi & Ringkas Harian",
    fullDesc:
      "Menyusun struktur modul lengkap dengan 3 pilar diferensiasi (konten, proses, produk), asesmen diagnostik/formatif/sumatif, pemetaan 6 Dimensi Profil Pancasila, serta lampiran LKPD dan Lembar Pengesahan Pengawas Sekolah.",
    points: [
      "Pemetaan diferensiasi belajar siswa terakomodasi nyata",
      "Format resmi supervisi lengkap (LKPD, Glosarium, Refleksi)",
      "Ekspor dokumen Word (.docx) dengan margin kedinasan 4-3-3-3 cm",
    ],
    docOutput: "Modul Ajar Resmi (.docx & PDF Siap Cetak)",
    link: "/modul-ajar",
    icon: FileText,
  },
  {
    id: "soal-generator",
    badge: "TAKSONOMI BLOOM C1-C6",
    title: "Generator Soal HOTS & Kisi-Kisi AKM",
    shortDesc: "Formula Sains KaTeX & Rubrik Penskoran",
    tagline: "Bank Soal Terukur dengan Kontrol Kognitif",
    fullDesc:
      "Otomasi penyusunan soal pilihan ganda kompleks, menjodohkan, dan uraian analitis berbasis stimulus faktual, matriks kisi-kisi penulisan soal, kartu soal berstandar dinas, serta rubrik KKTP.",
    points: [
      "Kontrol proporsi tingkat kognitif LOTS, MOTS, dan HOTS",
      "Dukungan formula matematika dan kimia terformat rapi",
      "Matriks kisi-kisi dan kartu soal siap cetak atau ekspor DOCX",
    ],
    docOutput: "Naskah Soal, Kisi-Kisi, & Rubrik Penilaian",
    link: "/soal-generator",
    icon: FileCheck2,
  },
  {
    id: "perangkat-tahunan",
    badge: "ALOKASI PEKAN EFEKTIF",
    title: "ATP, Prota, & Promes Terintegrasi",
    shortDesc: "Dekonstruksi Capaian Pembelajaran BSKAP",
    tagline: "Distribusi Jam Pembelajaran Kalender Akademik",
    fullDesc:
      "Menghitung rincian pekan efektif semester, membagi jam pelajaran per materi pokok, menyusun Alur Tujuan Pembelajaran (ATP) runtut, dan menghasilkan matriks Program Semester (Promes) mingguan.",
    points: [
      "Kalkulator minggu efektif otomatis menyesuaikan kalender daerah",
      "Matriks Program Semester (Promes) siap cetak format dinas",
      "Distribusi JP terukur menghindari materi tertinggal di akhir semester",
    ],
    docOutput: "Dokumen Administrasi Perangkat Tahunan Lengkap",
    link: "/perangkat-tahunan",
    icon: CalendarDays,
  },
  {
    id: "presentasi-pptx",
    badge: "POWERPOINT ASLI",
    title: "Slide Tayang .PPTX & LKPD Interaktif",
    shortDesc: "Alur Pedagogis Kurikulum Merdeka",
    tagline: "Bahan Ajar Presentasi Native Dapat Diedit Bebas",
    fullDesc:
      "Membuat materi presentasi ruang kelas dalam format file Microsoft PowerPoint (.pptx) asli widescreen 16:9 dengan susunan apersepsi pemantik, eksplorasi konsep, diskusi interaktif, serta lembar kerja siswa.",
    points: [
      "Berkas .pptx asli yang dapat langsung diedit di PowerPoint",
      "Disertai Lembar Kerja Peserta Didik (LKPD) siap pakai",
      "Palet warna presentasi profesional dan ramah visual siswa",
    ],
    docOutput: "Slide Presentasi (.pptx) & Lembar LKPD (.docx)",
    link: "/presentasi",
    icon: Presentation,
  },
  {
    id: "profil-sekolah",
    badge: "MASTER KOP KEDINASAN",
    title: "Kop Surat & Lembar Pengesahan",
    shortDesc: "Konfigurasi Identitas Satuan Pendidikan",
    tagline: "Otomasi Identitas Resmi Dokumen Tanpa Ketik Ulang",
    fullDesc:
      "Isi data nama sekolah, NPSN, alamat dinas, NIP Kepala Sekolah, dan Pengawas Pembina satu kali. Seluruh naskah soal, modul ajar, dan perangkat otomatis memuat kop surat kedinasan yang valid.",
    points: [
      "Penyimpanan profil lokal aman langsung di peramban guru",
      "Kop surat bergaris ganda resmi dinas pendidikan",
      "Tanda tangan digital dan lembar verifikasi pengawas",
    ],
    docOutput: "Kop Surat Resmi & Lembar Pengesahan Supervisi",
    link: "/profil-sekolah",
    icon: School,
  },
  {
    id: "bukti-pmm",
    badge: "PENGELOLAAN KINERJA GURU",
    title: "Penyelarasan Bukti Dukung PMM",
    shortDesc: "8 Indikator Observasi Kelas Perdirjen GTK",
    tagline: "Siap Unggah untuk Observasi Kinerja Kepala Sekolah",
    fullDesc:
      "Setiap modul dan instrumen asesmen yang dihasilkan telah disesuaikan dengan fokus perilaku RHK observasi kelas Platform Merdeka Mengajar (PMM), memudahkan guru saat dinilai oleh pimpinan sekolah.",
    points: [
      "Selaras dengan Perdirjen GTK No. 7607/B.B1/HK.03/2023",
      "Menyediakan fokus perilaku keteraturan suasana kelas dan instruksi",
      "Dokumentasi rapi memudahkan pelaporan kinerja tahunan",
    ],
    docOutput: "Bukti Dukung Siap Unggah Pengelolaan Kinerja PMM",
    link: "/dashboard",
    icon: Award,
  },
];

export function InteractiveTicker() {
  const [selectedId, setSelectedId] = useState<string>("modul-ajar");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const selectedFeature =
    FEATURES.find((f) => f.id === selectedId) || FEATURES[0];
  const IconComponent = selectedFeature.icon;

  // Auto-rotasi setiap 6 detik jika tidak sedang di-pause oleh user
  useEffect(() => {
    if (isPaused) return;

    const interval = 60; // ms
    const duration = 6000; // ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const currentIndex = FEATURES.findIndex((f) => f.id === selectedId);
          const nextIndex = (currentIndex + 1) % FEATURES.length;
          setSelectedId(FEATURES[nextIndex].id);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, selectedId]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setProgress(0);
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Header Pengantar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-1">
            <span>[fitur_administrasi_unggulan]</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Pilih Modul Kerja & Pelajari Detail Output
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-xl">
            Klik atau arahkan kursor ke tombol running text di bawah untuk melihat rincian format luaran resmi yang dihasilkan.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Status: 6 Modul Aktif Siap Pakai</span>
        </div>
      </div>

      {/* 2. Container Running Text Marquee dengan Gradasi Blind di Kiri & Kanan */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-3 shadow-xs"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradasi Blind Kiri (Fade Mask) */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Gradasi Blind Kanan (Fade Mask) */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Ticker Track Mengalir Horizontal */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex shrink-0 items-center gap-3 animate-marquee group-hover:[animation-play-state:paused]">
            {FEATURES.map((item) => {
              const isSelected = item.id === selectedId;
              const ItemIcon = item.icon;

              return (
                <button
                  key={`track-1-${item.id}`}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  onMouseEnter={() => handleSelect(item.id)}
                  className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 border cursor-pointer ${
                    isSelected
                      ? "bg-blue-700 text-white border-blue-800 shadow-sm scale-105"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <ItemIcon
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <span>{item.title}</span>
                  <span
                    className={`text-[9px] uppercase font-mono px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-blue-800 text-blue-100"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Duplikasi track untuk continuous looping tanpa jeda */}
          <div className="flex shrink-0 items-center gap-3 animate-marquee group-hover:[animation-play-state:paused] ml-3">
            {FEATURES.map((item) => {
              const isSelected = item.id === selectedId;
              const ItemIcon = item.icon;

              return (
                <button
                  key={`track-2-${item.id}`}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  onMouseEnter={() => handleSelect(item.id)}
                  className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 border cursor-pointer ${
                    isSelected
                      ? "bg-blue-700 text-white border-blue-800 shadow-sm scale-105"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <ItemIcon
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <span>{item.title}</span>
                  <span
                    className={`text-[9px] uppercase font-mono px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-blue-800 text-blue-100"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Kotak Keterangan Detail di Bawah Running Text (Otomatis Mengikuti Pilihan) */}
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFeature.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Kolom Kiri: Rincian Narasi & Poin Keunggulan */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-800 border-blue-200 font-bold text-[11px]"
                >
                  {selectedFeature.badge}
                </Badge>
                <span className="text-xs text-slate-500 font-mono">
                  {selectedFeature.tagline}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-blue-700" />
                  </div>
                  <span>{selectedFeature.title}</span>
                </h3>
                <p className="text-xs font-semibold text-blue-700">
                  {selectedFeature.shortDesc}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedFeature.fullDesc}
              </p>

              {/* Poin-poin Kunci */}
              <div className="space-y-2 pt-1">
                {selectedFeature.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tombol Aksi Langsung ke Fitur Terkait */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link href={selectedFeature.link}>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs h-9 px-5 gap-2 shadow-xs cursor-pointer">
                    <span>Buka Modul Ini Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
                <div className="text-xs text-slate-500 font-medium">
                  Luaran Resmi:{" "}
                  <span className="font-bold text-slate-800">
                    {selectedFeature.docOutput}
                  </span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Card Showcase Visual */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-[11px] font-bold text-slate-700 uppercase font-mono">
                  Pratinjau Format Dokumen
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Terverifikasi BSKAP
                </span>
              </div>

              <div className="bg-white rounded-lg p-4 border border-slate-200 space-y-2.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold text-slate-900">
                    {selectedFeature.title}
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Standar Acuan:</span>
                    <span className="font-semibold text-slate-800">
                      Kemendikbudristek 2024
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tipe Berkas:</span>
                    <span className="font-semibold text-slate-800">
                      DOCX / PPTX / PDF A4
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dukungan Kop:</span>
                    <span className="font-semibold text-emerald-700">
                      Kop Dinas Otomatis
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 italic">
                  Klik modul di atas untuk berpindah pratinjau dokumen kerja lainnya.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar Rotasi Otomatis di Pojok Bawah */}
        <div className="absolute right-6 bottom-4 flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-500">
            {isPaused ? "Rotasi Dijeda (Kursor Aktif)" : "Rotasi Otomatis"}
          </span>
          <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-blue-700 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
