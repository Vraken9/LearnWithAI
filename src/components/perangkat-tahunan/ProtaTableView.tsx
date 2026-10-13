"use client";

import React from "react";
import { ProgramTahunan } from "@/types";
import { OfficialLetterhead } from "@/components/kop-surat/OfficialLetterhead";
import { EndorsementSheet } from "@/components/kop-surat/EndorsementSheet";

interface ProtaTableViewProps {
  data: ProgramTahunan;
}

export function ProtaTableView({ data }: ProtaTableViewProps) {
  return (
    <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 sm:p-8 space-y-6 text-slate-800 text-sm">
      <OfficialLetterhead />

      <div className="text-center space-y-1 border-b pb-4">
        <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900">
          PROGRAM TAHUNAN (PROTA)
        </h2>
        <p className="text-xs text-slate-600 font-medium">
          Mata Pelajaran: {data.subject} | Kelas: {data.grade} | Tahun Ajaran: {data.academic_year}
        </p>
      </div>

      <div className="overflow-x-auto space-y-6">
        {/* Semester 1 Table */}
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-blue-50/60 p-2.5 rounded border border-blue-200">
            <span className="text-xs font-bold uppercase tracking-wide text-blue-950">
              SEMESTER 1 (GANJIL)
            </span>
            <span className="text-xs font-semibold text-blue-900">
              Alokasi: {data.semester_1_total_jp} JP
            </span>
          </div>

          <table className="w-full border-collapse border border-slate-300 text-xs text-left">
            <thead>
              <tr className="bg-slate-100 text-slate-800 uppercase font-bold border-b border-slate-300">
                <th className="border border-slate-300 p-2 text-center w-12">No</th>
                <th className="border border-slate-300 p-2 text-center w-24">Kode TP</th>
                <th className="border border-slate-300 p-2">Materi Pokok / Alur Pembelajaran</th>
                <th className="border border-slate-300 p-2 text-center w-28">Alokasi Waktu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {data.semester_1_items.map((item) => (
                <tr key={item.no} className="hover:bg-slate-50/50">
                  <td className="border border-slate-300 p-2 text-center font-medium">{item.no}</td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-blue-800">{item.tp_code}</td>
                  <td className="border border-slate-300 p-2">{item.material}</td>
                  <td className="border border-slate-300 p-2 text-center font-bold">{item.allocated_jp} JP</td>
                </tr>
              ))}
              <tr className="bg-slate-100 font-bold text-slate-900">
                <td colSpan={3} className="border border-slate-300 p-2 text-right">
                  JUMLAH JAM SEMESTER 1 (GANJIL):
                </td>
                <td className="border border-slate-300 p-2 text-center font-extrabold text-blue-900">
                  {data.semester_1_total_jp} JP
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Semester 2 Table */}
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-emerald-50/60 p-2.5 rounded border border-emerald-200">
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-950">
              SEMESTER 2 (GENAP)
            </span>
            <span className="text-xs font-semibold text-emerald-900">
              Alokasi: {data.semester_2_total_jp} JP
            </span>
          </div>

          <table className="w-full border-collapse border border-slate-300 text-xs text-left">
            <thead>
              <tr className="bg-slate-100 text-slate-800 uppercase font-bold border-b border-slate-300">
                <th className="border border-slate-300 p-2 text-center w-12">No</th>
                <th className="border border-slate-300 p-2 text-center w-24">Kode TP</th>
                <th className="border border-slate-300 p-2">Materi Pokok / Alur Pembelajaran</th>
                <th className="border border-slate-300 p-2 text-center w-28">Alokasi Waktu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {data.semester_2_items.map((item) => (
                <tr key={item.no} className="hover:bg-slate-50/50">
                  <td className="border border-slate-300 p-2 text-center font-medium">{item.no}</td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-emerald-800">{item.tp_code}</td>
                  <td className="border border-slate-300 p-2">{item.material}</td>
                  <td className="border border-slate-300 p-2 text-center font-bold">{item.allocated_jp} JP</td>
                </tr>
              ))}
              <tr className="bg-slate-100 font-bold text-slate-900">
                <td colSpan={3} className="border border-slate-300 p-2 text-right">
                  JUMLAH JAM SEMESTER 2 (GENAP):
                </td>
                <td className="border border-slate-300 p-2 text-center font-extrabold text-emerald-900">
                  {data.semester_2_total_jp} JP
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Grand Yearly */}
        <div className="bg-slate-900 text-white p-3 rounded flex justify-between items-center text-xs font-bold uppercase tracking-wide">
          <span>TOTAL BEBAN JAM PELAJARAN TAHUNAN (SEMESTER 1 + 2):</span>
          <span className="text-sm font-extrabold text-blue-200">{data.total_yearly_jp} JP</span>
        </div>
      </div>

      <EndorsementSheet />
    </div>
  );
}
