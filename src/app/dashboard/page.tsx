"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileCheck2,
  FileText,
  CalendarDays,
  Presentation,
  School,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Clock,
  Layers,
  Award,
} from "lucide-react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SchoolProfile, TeacherProfile } from "@/types";

export default function DashboardPage() {
  const [school, setSchool] = useState<Partial<SchoolProfile>>({
    school_name: "SMA NEGERI 1 PURWANTORO",
    government_agency: "PEMERINTAH PROVINSI JAWA TIMUR",
  });
  const [teacher, setTeacher] = useState<Partial<TeacherProfile>>({
    teacher_name: "Arfian Cahya, S.Pd.",
  });

  useEffect(() => {
    try {
      const savedSchool = localStorage.getItem("guru_school_profile");
      const savedTeacher = localStorage.getItem("guru_teacher_profile");
      if (savedSchool) setSchool(JSON.parse(savedSchool));
      if (savedTeacher) setTeacher(JSON.parse(savedTeacher));
    } catch {
      // ignore
    }
  }, []);

  const featureCards = [
    {
      title: "Soal & Evaluasi Generator",
      desc: "Susun paket soal AKM, literasi-numerasi, HOTS, dan Matriks Kisi-Kisi Ujian dalam hitungan detik.",
      href: "/soal-generator",
      icon: FileCheck2,
      badge: "HOTS / AKM",
      color: "bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
      buttonText: "Buka Soal Generator",
    },
    {
      title: "Modul Ajar BSKAP 2024",
      desc: "Rancang modul ajar dengan 3 pilar diferensiasi (konten, proses, produk) dan format supervisi kedinasan.",
      href: "/modul-ajar",
      icon: FileText,
      badge: "BSKAP 032/2024",
      color: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white",
      buttonText: "Buka Modul Generator",
    },
    {
      title: "Perangkat Tahunan (ATP, Prota, Promes)",
      desc: "Dekonstruksi Capaian Pembelajaran ke TP dan susun matriks pekan efektif kalender pendidikan secara presisi.",
      href: "/perangkat-tahunan",
      icon: CalendarDays,
      badge: "Pekan Efektif",
      color: "bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white",
      buttonText: "Buka Perangkat Tahunan",
    },
    {
      title: "Slide Bahan Tayang (.PPTX) & LKPD",
      desc: "Hasilkan file presentasi PowerPoint native yang dapat diedit langsung dan lembar aktivitas siswa siap cetak A4.",
      href: "/presentasi",
      icon: Presentation,
      badge: "PowerPoint Native",
      color: "bg-amber-50 text-amber-700 group-hover:bg-amber-700 group-hover:text-white",
      buttonText: "Buka Presentasi & LKPD",
    },
  ];

  return (
    <DashboardShell activeItem="dashboard">
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Welcome Greeting Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/60 border border-blue-500/30 text-xs font-semibold text-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Pusat Kendali Administrasi Guru Merdeka</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Selamat Datang, {teacher.teacher_name}
            </h1>

            <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed">
              Pilih modul yang ingin Anda susun hari ini. Seluruh dokumen otomatis disesuaikan dengan Kop Surat kedinasan {school.school_name} dan siap diekspor ke Microsoft Word serta PowerPoint.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/soal-generator">
                <Button size="sm" className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs h-9 shadow-xs">
                  <span>Mulai Buat Soal Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
              <Link href="/profil-sekolah">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-blue-800/60 border-blue-500/40 text-white hover:bg-blue-700/60 text-xs h-9"
                >
                  <School className="w-3.5 h-3.5 mr-1.5" />
                  <span>Cek Profil & Kop Kedinasan</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        </section>

        {/* 4 Core Features Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Menu Utama Perangkat Pembelajaran
              </h2>
              <p className="text-xs text-slate-500">
                Pilih modul spesifik untuk memulai generator dengan parameter kurikulum terstruktur
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link key={idx} href={card.href} className="block group">
                  <Card className="h-full border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${card.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="text-[10px] font-bold">
                          {card.badge}
                        </Badge>
                      </div>

                      <CardTitle className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mt-2">
                        {card.title}
                      </CardTitle>

                      <CardDescription className="text-xs text-slate-600 leading-relaxed">
                        {card.desc}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center text-xs font-bold text-blue-700 gap-1 mt-2">
                        <span>{card.buttonText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Info Penyelarasan Bukti Dukung Kinerja PMM */}
        <section id="panduan-pmm">
          <Card className="border-slate-200 bg-white shadow-xs">
            <CardHeader className="pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <CardTitle className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Keselarasan Bukti Dukung Platform Merdeka Mengajar (PMM)
                </CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-500">
                Dokumen yang Anda buat di platform ini telah memenuhi kriteria penilaian kinerja guru sesuai Perdirjen GTK No. 7607/B.B1/HK.03/2023.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800 block">RHK 1: Perangkat Ajar</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Modul ajar memuat diferensiasi konten, proses, dan produk yang siap diunggah sebagai dokumen supervisi kepala sekolah.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800 block">RHK 2: Evaluasi Asesmen</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Naskah Soal AKM dilengkapi Matriks Kisi-Kisi, Kartu Soal per butir, dan Rubrik interval KKTP standar nasional.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800 block">RHK 3: Media Ajar Aktif</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Slide presentasi PowerPoint interaktif (.pptx) beserta LKPD kelompok untuk memfasilitasi keaktifan kelas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </DashboardShell>
  );
}
