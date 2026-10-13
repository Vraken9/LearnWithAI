import React from "react";
import { QuestionPackage, SchoolProfile, TeacherProfile } from "@/types";

interface ScoringRubricViewProps {
  packageData: QuestionPackage;
  school?: Partial<SchoolProfile>;
  teacher?: Partial<TeacherProfile>;
  className?: string;
}

export const ScoringRubricView: React.FC<ScoringRubricViewProps> = ({
  packageData,
  school,
  teacher,
  className = "",
}) => {
  const schoolName = school?.school_name || "SMA NEGERI 1 PURWANTORO";
  const teacherName = teacher?.teacher_name || "Arfian Cahya, S.Pd.";
  const headmasterName = teacher?.headmaster_name || "Drs. H. Mulyadi, M.Pd.";

  const totalQuestions = packageData.questions?.length || 0;
  const totalMaxScore = (packageData.questions || []).reduce(
    (acc, curr) => acc + curr.score_weight,
    0
  );

  return (
    <div
      className={`w-full bg-white text-black p-6 font-serif text-xs leading-normal select-none ${className}`}
    >
      {/* Header Pedoman Penskoran */}
      <div className="text-center pb-4 mb-4 border-b border-black">
        <h2 className="text-sm font-bold uppercase tracking-wider">
          PEDOMAN PENSKORAN DAN PENILAIAN ASESMEN
        </h2>
        <h3 className="text-xs font-bold uppercase mt-0.5">
          {schoolName} &mdash; TAHUN PELAJARAN {packageData.academic_year}
        </h3>
        <p className="text-[11px] text-gray-700 mt-1">
          Mata Pelajaran: {packageData.subject} | {packageData.grade} (Fase {packageData.phase})
        </p>
      </div>

      {/* Bagian 1: Rumus Perhitungan Nilai Akhir */}
      <div className="border border-black p-4 mb-6 rounded-sm bg-gray-50/50 space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
          I. Rumus Konversi Nilai Akhir (Skala 0 - 100)
        </h3>
        <div className="bg-white p-3 border border-gray-300 font-mono text-center text-sm font-bold my-2">
          Nilai Akhir (NA) = ( &Sigma; Skor Perolehan Peserta Didik / {totalMaxScore} ) &times; 100
        </div>
        <p className="text-[11px] text-gray-700 leading-relaxed">
          Keterangan: Jumlah soal sebanyak <strong>{totalQuestions} butir</strong> dengan total skor maksimal ideal sebesar <strong>{totalMaxScore} poin</strong>.
        </p>
      </div>

      {/* Bagian 2: Ketentuan Penskoran Butir Soal */}
      <div className="border border-black p-4 mb-6 rounded-sm space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
          II. Ketentuan Penskoran Berdasarkan Bentuk Soal
        </h3>
        <table className="w-full border-collapse border border-black text-[11px]">
          <thead>
            <tr className="bg-gray-100 font-bold text-center">
              <th className="border border-black p-1.5 w-12">No.</th>
              <th className="border border-black p-1.5 w-44">Bentuk Soal</th>
              <th className="border border-black p-1.5">Kriteria Penskoran</th>
              <th className="border border-black p-1.5 w-28">Rentang Skor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 text-center font-semibold">1</td>
              <td className="border border-black p-2 font-medium">Pilihan Ganda Tunggal</td>
              <td className="border border-black p-2 leading-relaxed">
                Jawaban benar diberi skor sesuai bobot butir soal (1-2 poin). Jawaban salah atau kosong diberi skor 0. Tidak ada pengurangan skor untuk jawaban salah.
              </td>
              <td className="border border-black p-2 text-center font-bold">0 atau 1 - 2</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center font-semibold">2</td>
              <td className="border border-black p-2 font-medium">Pilihan Ganda Kompleks</td>
              <td className="border border-black p-2 leading-relaxed">
                Memilih seluruh pernyataan benar secara tepat diberi skor penuh. Memilih sebagian benar diberi skor parsial proporsional.
              </td>
              <td className="border border-black p-2 text-center font-bold">0 - 3</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center font-semibold">3</td>
              <td className="border border-black p-2 font-medium">Uraian / Pemecahan Masalah</td>
              <td className="border border-black p-2 leading-relaxed">
                Dinilai menggunakan rubrik analitis berjenjang mencakup identifikasi besaran, perumusan langkah sistematis, ketepatan kalkulasi, dan simpulan.
              </td>
              <td className="border border-black p-2 text-center font-bold">0 - 4</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bagian 3: Rubrik Analitis Soal Uraian / HOTS */}
      <div className="border border-black p-4 mb-6 rounded-sm space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
          III. Rubrik Penilaian Analitis Soal Penalaran / HOTS
        </h3>
        <table className="w-full border-collapse border border-black text-[11px]">
          <thead>
            <tr className="bg-gray-100 font-bold text-center">
              <th className="border border-black p-1.5 w-40">Aspek yang Dinilai</th>
              <th className="border border-black p-1.5">Deskriptor Indikator</th>
              <th className="border border-black p-1.5 w-20">Skor Maks.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 font-semibold">Pemahaman Konsep (Knowing)</td>
              <td className="border border-black p-2 leading-relaxed">
                Mampu mengidentifikasi informasi penting, besaran-besaran yang diketahui, serta pokok permasalahan secara lengkap.
              </td>
              <td className="border border-black p-2 text-center font-bold">1</td>
            </tr>
            <tr>
              <td className="border border-black p-2 font-semibold">Penalaran & Metode (Applying)</td>
              <td className="border border-black p-2 leading-relaxed">
                Mampu memilih prinsip hukum ilmiah atau rumus matematika yang tepat serta menyusun alur penyelesaian secara logis.
              </td>
              <td className="border border-black p-2 text-center font-bold">1</td>
            </tr>
            <tr>
              <td className="border border-black p-2 font-semibold">Kalkulasi & Analisis (Reasoning)</td>
              <td className="border border-black p-2 leading-relaxed">
                Melakukan kalkulasi langkah demi langkah dengan tepat tanpa kesalahan teknis atau salah konversi satuan.
              </td>
              <td className="border border-black p-2 text-center font-bold">1</td>
            </tr>
            <tr>
              <td className="border border-black p-2 font-semibold">Simpulan Akhir (Evaluating)</td>
              <td className="border border-black p-2 leading-relaxed">
                Memberikan interpretasi akhir atau kesimpulan logis yang menjawab pertanyaan soal secara komprehensif.
              </td>
              <td className="border border-black p-2 text-center font-bold">1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bagian 4: Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) */}
      <div className="border border-black p-4 mb-6 rounded-sm space-y-3 bg-gray-50/30">
        <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
          IV. Interval Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) Kurikulum Merdeka
        </h3>
        <table className="w-full border-collapse border border-black text-[11px]">
          <thead>
            <tr className="bg-gray-100 font-bold text-center">
              <th className="border border-black p-1.5 w-32">Interval Nilai</th>
              <th className="border border-black p-1.5 w-44">Kategori Ketercapaian</th>
              <th className="border border-black p-1.5">Tindak Lanjut Pedagogis Guru</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 text-center font-bold text-rose-700">0 &ndash; 69%</td>
              <td className="border border-black p-2 font-semibold">Belum Mencapai Ketuntasan</td>
              <td className="border border-black p-2 leading-relaxed">
                Peserta didik memerlukan remedial menyeluruh pada konsep dasar materi terkait melalui bimbingan khusus atau tutor sebaya.
              </td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center font-bold text-amber-700">70 &ndash; 79%</td>
              <td className="border border-black p-2 font-semibold">Belum Mencapai Ketuntasan</td>
              <td className="border border-black p-2 leading-relaxed">
                Peserta didik diberikan remedial parsial hanya pada indikator soal yang belum berhasil dijawab dengan tepat.
              </td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center font-bold text-blue-700">80 &ndash; 89%</td>
              <td className="border border-black p-2 font-semibold">Sudah Mencapai Ketuntasan</td>
              <td className="border border-black p-2 leading-relaxed">
                Peserta didik telah tuntas dan dapat melanjutkan ke lingkup materi berikutnya tanpa kewajiban remedial.
              </td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center font-bold text-emerald-700">90 &ndash; 100%</td>
              <td className="border border-black p-2 font-semibold">Mencapai Ketuntasan Unggul</td>
              <td className="border border-black p-2 leading-relaxed">
                Peserta didik diberikan program pengayaan (enrichment) berupa proyek analisis lanjutan atau soal tantangan HOTS berbobot tinggi.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lembar Tanda Tangan */}
      <div className="grid grid-cols-2 gap-8 text-center text-[11px] pt-4">
        <div>
          <p className="font-semibold">Mengetahui,</p>
          <p className="font-semibold">Kepala {schoolName},</p>
          <div className="h-16" />
          <p className="font-bold underline uppercase">{headmasterName}</p>
        </div>

        <div>
          <p>Purwantoro, 15 Juli 2026</p>
          <p className="font-semibold">Guru Mata Pelajaran,</p>
          <div className="h-16" />
          <p className="font-bold underline uppercase">{teacherName}</p>
        </div>
      </div>
    </div>
  );
};
