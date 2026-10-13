"use client";

import React from "react";
import { AnnualCalendarData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KalkulatorMingguEfektifProps {
  data: AnnualCalendarData;
}

export function KalkulatorMingguEfektif({ data }: KalkulatorMingguEfektifProps) {
  const sem1 = data.semester_1;
  const sem2 = data.semester_2;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-blue-600 shadow-sm">
          <CardContent className="pt-5">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Total Beban Belajar Tahunan
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {data.total_annual_jp}
              </span>
              <span className="text-sm font-medium text-slate-600">JP / Tahun</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {data.jp_per_week} JP per minggu x ({sem1.effective_weeks} + {sem2.effective_weeks} minggu efektif)
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-indigo-600 shadow-sm">
          <CardContent className="pt-5">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Semester Ganjil (Semester 1)
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-indigo-900 tracking-tight">
                {sem1.effective_hours}
              </span>
              <span className="text-sm font-medium text-slate-600">JP</span>
              <Badge variant="outline" className="ml-auto text-xs font-semibold">
                {sem1.effective_weeks} Pekan Efektif
              </Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {sem1.total_calendar_weeks} total pekan - {sem1.ineffective_weeks} pekan non-efektif
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-600 shadow-sm">
          <CardContent className="pt-5">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Semester Genap (Semester 2)
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-900 tracking-tight">
                {sem2.effective_hours}
              </span>
              <span className="text-sm font-medium text-slate-600">JP</span>
              <Badge variant="outline" className="ml-auto text-xs font-semibold">
                {sem2.effective_weeks} Pekan Efektif
              </Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {sem2.total_calendar_weeks} total pekan - {sem2.ineffective_weeks} pekan non-efektif
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Semester 1 Detail */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-3 px-5">
            <CardTitle className="text-sm font-bold text-slate-800 uppercase tracking-wide">
              Rincian Pekan Semester Ganjil (Tahun Ajaran {data.academic_year})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-4 text-sm text-slate-700">
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
              <span>Jumlah Pekan Kalender Pendidikan:</span>
              <span className="font-bold text-slate-900">{sem1.total_calendar_weeks} Pekan</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
              <span>Jumlah Pekan Tidak Efektif:</span>
              <span className="font-bold text-red-600">{sem1.ineffective_weeks} Pekan</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 font-semibold bg-blue-50/50 px-2 rounded">
              <span className="text-blue-950">Jumlah Pekan Efektif KBM:</span>
              <span className="text-blue-900 font-bold">{sem1.effective_weeks} Pekan</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 font-semibold bg-blue-100/50 px-2 rounded">
              <span className="text-blue-950">Total Jam Pelajaran Efektif (JP):</span>
              <span className="text-blue-900 font-bold">{sem1.effective_hours} JP</span>
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-bold text-slate-600 uppercase mb-2">
                Distribusi Kegiatan Non-Efektif Semester 1:
              </h5>
              <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200/60 text-xs">
                {sem1.non_effective_details.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-slate-600">{item.activity}</span>
                    <span className="font-semibold text-slate-800">{item.count_weeks} Pekan</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Semester 2 Detail */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-3 px-5">
            <CardTitle className="text-sm font-bold text-slate-800 uppercase tracking-wide">
              Rincian Pekan Semester Genap (Tahun Ajaran {data.academic_year})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-4 text-sm text-slate-700">
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
              <span>Jumlah Pekan Kalender Pendidikan:</span>
              <span className="font-bold text-slate-900">{sem2.total_calendar_weeks} Pekan</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
              <span>Jumlah Pekan Tidak Efektif:</span>
              <span className="font-bold text-red-600">{sem2.ineffective_weeks} Pekan</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 font-semibold bg-emerald-50/50 px-2 rounded">
              <span className="text-emerald-950">Jumlah Pekan Efektif KBM:</span>
              <span className="text-emerald-900 font-bold">{sem2.effective_weeks} Pekan</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 font-semibold bg-emerald-100/50 px-2 rounded">
              <span className="text-emerald-950">Total Jam Pelajaran Efektif (JP):</span>
              <span className="text-emerald-900 font-bold">{sem2.effective_hours} JP</span>
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-bold text-slate-600 uppercase mb-2">
                Distribusi Kegiatan Non-Efektif Semester 2:
              </h5>
              <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200/60 text-xs">
                {sem2.non_effective_details.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-slate-600">{item.activity}</span>
                    <span className="font-semibold text-slate-800">{item.count_weeks} Pekan</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
