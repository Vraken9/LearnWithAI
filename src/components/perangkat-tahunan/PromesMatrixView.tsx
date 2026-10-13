"use client";

import React, { useState } from "react";
import { ProgramSemester } from "@/types";
import { OfficialLetterhead } from "@/components/kop-surat/OfficialLetterhead";
import { EndorsementSheet } from "@/components/kop-surat/EndorsementSheet";
import { Button } from "@/components/ui/button";

interface PromesMatrixViewProps {
  promes1: ProgramSemester;
  promes2: ProgramSemester;
}

export function PromesMatrixView({ promes1, promes2 }: PromesMatrixViewProps) {
  const [activeSem, setActiveSem] = useState<1 | 2>(1);
  const currentPromes = activeSem === 1 ? promes1 : promes2;

  // Total alokasi JP
  const totalAllocated = currentPromes.matrix_rows.reduce(
    (acc, row) => acc + row.allocated_jp,
    0
  );

  return (
    <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 sm:p-8 space-y-6 text-slate-800 text-sm">
      <OfficialLetterhead />

      <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900">
            PROGRAM SEMESTER (PROMES)
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            Mata Pelajaran: {currentPromes.subject} | Kelas: {currentPromes.grade} | Semester:{" "}
            {activeSem === 1 ? "1 (Ganjil)" : "2 (Genap)"} | Tahun Ajaran: {currentPromes.academic_year}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant={activeSem === 1 ? "default" : "outline"}
            onClick={() => setActiveSem(1)}
            className="text-xs font-semibold"
          >
            Semester 1 (Ganjil)
          </Button>
          <Button
            size="sm"
            variant={activeSem === 2 ? "default" : "outline"}
            onClick={() => setActiveSem(2)}
            className="text-xs font-semibold"
          >
            Semester 2 (Genap)
          </Button>
        </div>
      </div>

      {/* Legenda Agenda Kurikulum */}
      <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs space-y-1.5">
        <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">
          Keterangan & Legenda Warna Matriks:
        </span>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {currentPromes.agenda_legends.map((item) => (
            <div
              key={item.code}
              className={`px-2 py-0.5 rounded font-medium border border-slate-300/60 ${item.color}`}
            >
              <span className="font-bold">{item.code}:</span> {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Matriks Mingguan PROMES */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-slate-400 text-xs text-left">
          <thead>
            {/* Baris 1: Bulan */}
            <tr className="bg-slate-100 text-slate-800 uppercase font-bold border-b border-slate-400 text-center">
              <th rowSpan={2} className="border border-slate-400 p-2 w-10">No</th>
              <th rowSpan={2} className="border border-slate-400 p-2 w-20">Kode TP</th>
              <th rowSpan={2} className="border border-slate-400 p-2 min-w-[200px] text-left">
                Tujuan Pembelajaran / Materi Pokok
              </th>
              <th rowSpan={2} className="border border-slate-400 p-2 w-14">Alokasi (JP)</th>
              {currentPromes.months.map((month, mIdx) => (
                <th
                  key={month}
                  colSpan={currentPromes.weeks_distribution[mIdx]}
                  className="border border-slate-400 p-1.5 text-center font-bold text-slate-800 bg-slate-200/80"
                >
                  {month}
                </th>
              ))}
            </tr>

            {/* Baris 2: Minggu (1, 2, 3, 4, 5) */}
            <tr className="bg-slate-50 text-slate-700 text-center text-[11px]">
              {currentPromes.months.flatMap((month, mIdx) => {
                const count = currentPromes.weeks_distribution[mIdx];
                return Array.from({ length: count }, (_, wIdx) => (
                  <th
                    key={`${mIdx}-${wIdx}`}
                    className="border border-slate-400 p-1 w-7 font-semibold"
                  >
                    {wIdx + 1}
                  </th>
                ));
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-300">
            {currentPromes.matrix_rows.map((row) => (
              <tr key={row.no} className="hover:bg-slate-50/70">
                <td className="border border-slate-400 p-1.5 text-center font-medium">{row.no}</td>
                <td className="border border-slate-400 p-1.5 text-center font-bold text-blue-800">
                  {row.tp_code}
                </td>
                <td className="border border-slate-400 p-1.5 leading-snug">{row.material}</td>
                <td className="border border-slate-400 p-1.5 text-center font-bold">{row.allocated_jp}</td>

                {/* Grid Minggu */}
                {currentPromes.months.flatMap((_, mIdx) => {
                  const count = currentPromes.weeks_distribution[mIdx];
                  return Array.from({ length: count }, (_, wIdx) => {
                    const key = `m${mIdx}_w${wIdx + 1}`;
                    const val = row.weekly_allocations[key];

                    if (!val) {
                      return (
                        <td
                          key={key}
                          className="border border-slate-400 p-1 text-center bg-white"
                        />
                      );
                    }

                    // Tampilkan angka atau kode agenda khusus
                    const isNumber = typeof val === "number";
                    const isSts = val === "STS";
                    const isSas = val === "SAS";

                    let bgClass = "bg-blue-50 text-blue-900 font-bold";
                    if (isSts) bgClass = "bg-purple-100 text-purple-900 font-bold text-[10px]";
                    if (isSas) bgClass = "bg-red-100 text-red-900 font-bold text-[10px]";

                    return (
                      <td
                        key={key}
                        className={`border border-slate-400 p-1 text-center ${bgClass}`}
                        title={`${row.tp_code}: ${val} ${isNumber ? "JP" : ""}`}
                      >
                        {val}
                      </td>
                    );
                  });
                })}
              </tr>
            ))}

            {/* Total Row */}
            <tr className="bg-slate-100 font-bold text-slate-900 border-t-2 border-slate-400">
              <td colSpan={3} className="border border-slate-400 p-2 text-right">
                TOTAL JAM PELAJARAN SEMESTER {activeSem === 1 ? "1" : "2"}:
              </td>
              <td className="border border-slate-400 p-2 text-center text-blue-900 font-extrabold">
                {totalAllocated}
              </td>
              <td
                colSpan={currentPromes.weeks_distribution.reduce((a, b) => a + b, 0)}
                className="border border-slate-400 p-2 text-slate-600 text-[11px]"
              >
                Distribusi mingguan disesuaikan dengan kalender pendidikan dinas
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <EndorsementSheet />
    </div>
  );
}
