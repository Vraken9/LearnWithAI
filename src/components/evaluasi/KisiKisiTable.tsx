import React from "react";
import { QuestionPackage, SchoolProfile, TeacherProfile, KisiKisiItem } from "@/types";

interface KisiKisiTableProps {
  packageData: QuestionPackage;
  school?: Partial<SchoolProfile>;
  teacher?: Partial<TeacherProfile>;
  className?: string;
}

export const KisiKisiTable: React.FC<KisiKisiTableProps> = ({
  packageData,
  school,
  teacher,
  className = "",
}) => {
  const schoolName = school?.school_name || "SMA NEGERI 1 PURWANTORO";
  const teacherName = teacher?.teacher_name || "Arfian Cahya, S.Pd.";
  const teacherNip = teacher?.teacher_nip || "19880412 201402 1 003";
  const headmasterName = teacher?.headmaster_name || "Drs. H. Mulyadi, M.Pd.";
  const headmasterNip = teacher?.headmaster_nip || "19670815 199303 1 005";

  // Ekstraksi kisi-kisi otomatis dari data butir soal
  const kisiKisiList: KisiKisiItem[] = (packageData.questions || []).map((q, idx) => ({
    nomor_urut: idx + 1,
    capaian_pembelajaran: packageData.learning_objectives,
    tujuan_pembelajaran_materi: packageData.chapter_or_material,
    indikator_soal:
      q.competency_indicator ||
      `Disajikan konteks ${packageData.chapter_or_material}, peserta didik dapat menganalisis dan memecahkan masalah terkait konsep yang diuji.`,
    level_kognitif: `${q.bloom_level} / ${q.cognitive_level}`,
    bentuk_soal: q.question_type,
    nomor_soal: q.question_number,
    bobot_skor: q.score_weight,
  }));

  const totalBobot = kisiKisiList.reduce((acc, curr) => acc + curr.bobot_skor, 0);

  return (
    <div className={`w-full bg-white text-black p-6 font-serif text-xs leading-normal select-none ${className}`}>
      {/* Header Dokumen Kisi-Kisi Resmi */}
      <div className="text-center pb-4 mb-4 border-b border-black">
        <h2 className="text-sm font-bold uppercase tracking-wider">
          KISI-KISI PENULISAN SOAL ASESMEN / EVALUASI
        </h2>
        <h3 className="text-xs font-bold uppercase mt-0.5">
          KURIKULUM MERDEKA - TAHUN PELAJARAN {packageData.academic_year}
        </h3>
      </div>

      {/* Identitas Kisi-Kisi */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-4 text-[11px]">
        <div className="flex">
          <span className="w-36 font-semibold">Satuan Pendidikan</span>
          <span className="w-4">:</span>
          <span>{schoolName}</span>
        </div>
        <div className="flex">
          <span className="w-36 font-semibold">Alokasi Waktu</span>
          <span className="w-4">:</span>
          <span>90 Menit</span>
        </div>
        <div className="flex">
          <span className="w-36 font-semibold">Mata Pelajaran</span>
          <span className="w-4">:</span>
          <span>{packageData.subject}</span>
        </div>
        <div className="flex">
          <span className="w-36 font-semibold">Jumlah Soal</span>
          <span className="w-4">:</span>
          <span>{kisiKisiList.length} Butir</span>
        </div>
        <div className="flex">
          <span className="w-36 font-semibold">Kelas / Fase</span>
          <span className="w-4">:</span>
          <span>
            {packageData.grade} / Fase {packageData.phase}
          </span>
        </div>
        <div className="flex">
          <span className="w-36 font-semibold">Penyusun</span>
          <span className="w-4">:</span>
          <span>{teacherName}</span>
        </div>
      </div>

      {/* Tabel Matriks Kisi-Kisi Standar Kedinasan */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black text-[11px]">
          <thead>
            <tr className="bg-gray-100 text-center font-bold">
              <th className="border border-black p-1.5 w-10">No.</th>
              <th className="border border-black p-1.5 w-44">Capaian Pembelajaran (CP)</th>
              <th className="border border-black p-1.5 w-36">Lingkup Materi</th>
              <th className="border border-black p-1.5">Indikator Soal</th>
              <th className="border border-black p-1.5 w-24">Level Kognitif</th>
              <th className="border border-black p-1.5 w-24">Bentuk Soal</th>
              <th className="border border-black p-1.5 w-14">No. Soal</th>
              <th className="border border-black p-1.5 w-14">Bobot</th>
            </tr>
          </thead>
          <tbody>
            {kisiKisiList.map((item) => (
              <tr key={item.nomor_urut} className="align-top">
                <td className="border border-black p-1.5 text-center font-semibold">
                  {item.nomor_urut}
                </td>
                <td className="border border-black p-1.5 leading-relaxed">
                  {item.capaian_pembelajaran}
                </td>
                <td className="border border-black p-1.5 leading-relaxed">
                  {item.tujuan_pembelajaran_materi}
                </td>
                <td className="border border-black p-1.5 leading-relaxed">
                  {item.indikator_soal}
                </td>
                <td className="border border-black p-1.5 text-center font-medium">
                  {item.level_kognitif}
                </td>
                <td className="border border-black p-1.5 text-center">
                  {item.bentuk_soal}
                </td>
                <td className="border border-black p-1.5 text-center font-bold">
                  {item.nomor_soal}
                </td>
                <td className="border border-black p-1.5 text-center font-bold">
                  {item.bobot_skor}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-bold">
              <td colSpan={7} className="border border-black p-1.5 text-right">
                TOTAL SKOR MAKSIMAL:
              </td>
              <td className="border border-black p-1.5 text-center text-sm">
                {totalBobot}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lembar Tanda Tangan Verifikator */}
      <div className="grid grid-cols-2 gap-8 text-center text-[11px] mt-8 pt-4">
        <div>
          <p className="font-semibold">Mengetahui,</p>
          <p className="font-semibold">Kepala Sekolah / Waka Kurikulum,</p>
          <div className="h-16" />
          <p className="font-bold underline uppercase">{headmasterName}</p>
          <p className="text-[10px] text-gray-700">NIP. {headmasterNip}</p>
        </div>

        <div>
          <p>Purwantoro, 15 Juli 2026</p>
          <p className="font-semibold">Guru Mata Pelajaran,</p>
          <div className="h-16" />
          <p className="font-bold underline uppercase">{teacherName}</p>
          <p className="text-[10px] text-gray-700">NIP. {teacherNip}</p>
        </div>
      </div>
    </div>
  );
};
