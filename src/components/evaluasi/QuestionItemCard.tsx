import React from "react";
import { QuestionItem, QuestionPackage, SchoolProfile, TeacherProfile } from "@/types";
import { MathRenderer } from "@/components/ui/math-renderer";

interface QuestionItemCardProps {
  question: QuestionItem;
  packageData: QuestionPackage;
  school?: Partial<SchoolProfile>;
  teacher?: Partial<TeacherProfile>;
  className?: string;
}

export const QuestionItemCard: React.FC<QuestionItemCardProps> = ({
  question,
  packageData,
  school,
  teacher,
  className = "",
}) => {
  const schoolName = school?.school_name || "SMA NEGERI 1 PURWANTORO";
  const teacherName = teacher?.teacher_name || "Arfian Cahya, S.Pd.";

  return (
    <div
      className={`w-full bg-white text-black border border-black p-5 font-serif text-xs leading-normal select-none rounded-sm mb-6 ${className}`}
    >
      {/* Header Kartu Soal */}
      <div className="text-center pb-2 mb-3 border-b-2 border-black">
        <h2 className="text-sm font-bold uppercase tracking-wider">
          KARTU SOAL NOMOR {question.question_number}
        </h2>
        <h3 className="text-[11px] font-semibold uppercase">
          {schoolName} &mdash; TAHUN PELAJARAN {packageData.academic_year}
        </h3>
      </div>

      {/* Tabel Identitas Kartu Soal */}
      <table className="w-full border-collapse border border-black text-[11px] mb-3">
        <tbody>
          <tr>
            <td className="border border-black p-1.5 font-semibold bg-gray-50 w-36">
              Mata Pelajaran
            </td>
            <td className="border border-black p-1.5">{packageData.subject}</td>
            <td className="border border-black p-1.5 font-semibold bg-gray-50 w-32">
              Bentuk Soal
            </td>
            <td className="border border-black p-1.5">{question.question_type}</td>
          </tr>
          <tr>
            <td className="border border-black p-1.5 font-semibold bg-gray-50">
              Kelas / Fase
            </td>
            <td className="border border-black p-1.5">
              {packageData.grade} / Fase {packageData.phase}
            </td>
            <td className="border border-black p-1.5 font-semibold bg-gray-50">
              Level Kognitif
            </td>
            <td className="border border-black p-1.5 font-bold">
              {question.bloom_level} ({question.cognitive_level})
            </td>
          </tr>
          <tr>
            <td className="border border-black p-1.5 font-semibold bg-gray-50">
              Penyusun Soal
            </td>
            <td className="border border-black p-1.5">{teacherName}</td>
            <td className="border border-black p-1.5 font-semibold bg-gray-50">
              Tingkat Kesulitan
            </td>
            <td className="border border-black p-1.5">{question.difficulty}</td>
          </tr>
        </tbody>
      </table>

      {/* Identitas Kompetensi & Indikator */}
      <div className="border border-black p-2.5 mb-3 text-[11px] space-y-1.5 bg-gray-50/40">
        <div>
          <span className="font-bold block text-gray-800">Capaian Pembelajaran (CP):</span>
          <p className="text-gray-700 leading-relaxed">{packageData.learning_objectives}</p>
        </div>
        <div>
          <span className="font-bold block text-gray-800">Lingkup Materi:</span>
          <p className="text-gray-700">{packageData.chapter_or_material}</p>
        </div>
        <div>
          <span className="font-bold block text-gray-800">Indikator Soal:</span>
          <p className="text-gray-700 leading-relaxed">
            {question.competency_indicator ||
              `Disajikan konteks materi ${packageData.chapter_or_material}, peserta didik dapat menganalisis dan memecahkan masalah.`}
          </p>
        </div>
      </div>

      {/* Rumusan Butir Soal */}
      <div className="border border-black p-3 mb-3 text-[11px]">
        <span className="font-bold block text-xs mb-1.5 uppercase tracking-wide">
          Rumusan Butir Soal:
        </span>
        {question.stimulus_text && (
          <div className="italic p-2 bg-gray-50 border-l-2 border-black mb-2 text-gray-800 leading-relaxed">
            <MathRenderer content={question.stimulus_text} />
          </div>
        )}
        <div className="leading-relaxed font-medium mb-3 text-sm">
          <MathRenderer content={question.question_text} />
        </div>

        {question.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {question.options.map((opt) => (
              <div
                key={opt.label}
                className={`p-2 border border-gray-300 rounded flex items-start gap-2 ${
                  opt.label === question.correct_answer ? "bg-gray-100 font-bold" : ""
                }`}
              >
                <span className="w-4">{opt.label}.</span>
                <div className="flex-1">
                  <MathRenderer content={opt.text} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Kunci Jawaban & Pedoman Penskoran */}
      <div className="grid grid-cols-3 border border-black text-[11px]">
        <div className="p-2 border-r border-black bg-gray-50 font-semibold text-center">
          Kunci Jawaban: <span className="font-bold text-sm ml-1">{question.correct_answer}</span>
        </div>
        <div className="p-2 border-r border-black bg-gray-50 font-semibold text-center">
          Bobot Skor: <span className="font-bold text-sm ml-1">{question.score_weight}</span>
        </div>
        <div className="p-2 bg-gray-50 text-center font-semibold">
          Pedoman Penskoran: Terlampir
        </div>
      </div>

      {/* Pembahasan Soal */}
      <div className="border border-t-0 border-black p-2.5 text-[11px] bg-emerald-50/30">
        <span className="font-bold block text-emerald-950">Pembahasan / Rasionalisasi Kunci:</span>
        <div className="leading-relaxed text-gray-800 mt-1">
          <MathRenderer content={question.explanation} />
        </div>
      </div>
    </div>
  );
};
