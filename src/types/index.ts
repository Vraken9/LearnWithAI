// Domain Data Types for GuruHub / Perangkat Ajar & Evaluasi Terpadu

export type EducationLevel = "SD" | "SMP" | "SMA" | "SMK";
export type Phase = "A" | "B" | "C" | "D" | "E" | "F";
export type Semester = "Ganjil" | "Genap";
export type BloomLevel = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
export type CognitiveLevel = "LOTS" | "MOTS" | "HOTS";
export type DifficultyLevel = "Mudah" | "Sedang" | "Sulit";
export type QuestionType =
  | "Pilihan Ganda"
  | "Pilihan Ganda Kompleks"
  | "Menjodohkan"
  | "Isian Singkat"
  | "Uraian";

export interface SchoolProfile {
  id: string;
  user_id: string;
  government_agency: string; // misal: Pemerintah Provinsi Jawa Timur
  education_office: string;   // misal: Dinas Pendidikan dan Kebudayaan
  school_name: string;        // misal: SMAN 1 Purwantoro
  npsn: string;
  accreditation: string;
  address: string;
  postal_code: string;
  phone: string;
  email: string;
  website: string;
  left_logo_url?: string | null;  // Logo Pemda / Kemdikbud
  right_logo_url?: string | null; // Logo Sekolah
  created_at: string;
  updated_at: string;
}

export interface TeacherProfile {
  id: string;
  user_id: string;
  school_id?: string | null;
  teacher_name: string;
  teacher_title?: string;
  teacher_nip?: string;
  headmaster_name?: string;
  headmaster_title?: string;
  headmaster_nip?: string;
  supervisor_name?: string;
  supervisor_title?: string;
  supervisor_nip?: string;
  created_at: string;
  updated_at: string;
}

export interface QuestionOption {
  label: "A" | "B" | "C" | "D" | "E";
  text: string;
}

export interface QuestionItem {
  id?: string;
  package_id?: string;
  question_number: number;
  question_type: QuestionType;
  stimulus_text?: string | null;
  question_text: string;
  options?: QuestionOption[] | null;
  correct_answer: string;
  explanation: string;
  bloom_level: BloomLevel;
  cognitive_level: CognitiveLevel;
  difficulty: DifficultyLevel;
  competency_indicator?: string;
  score_weight: number;
}

export interface QuestionPackage {
  id: string;
  user_id: string;
  school_id?: string | null;
  title: string;
  subject: string;
  education_level: EducationLevel;
  grade: string;
  phase: Phase;
  semester: Semester;
  academic_year: string;
  source_type: "text" | "pdf";
  chapter_or_material: string;
  learning_objectives: string;
  total_questions: number;
  difficulty_distribution: {
    mudah: number;
    sedang: number;
    sulit: number;
  };
  cognitive_distribution: {
    lots: number;
    mots: number;
    hots: number;
  };
  bloom_distribution: {
    c1: number;
    c2: number;
    c3: number;
    c4: number;
    c5: number;
    c6: number;
  };
  stimulus_type: "langsung" | "kutipan" | "teks_utuh" | "variatif";
  questions?: QuestionItem[];
  created_at: string;
  updated_at: string;
}

export interface KisiKisiItem {
  nomor_urut: number;
  capaian_pembelajaran: string;
  tujuan_pembelajaran_materi: string;
  indikator_soal: string;
  level_kognitif: string; // misal: "C3 (Aplikasi) / MOTS"
  bentuk_soal: QuestionType;
  nomor_soal: number;
  bobot_skor: number;
}

export interface ScoringRubricCriteria {
  aspek: string;
  kriteria: string;
  skor_maksimal: number;
}

export interface ScoringGuide {
  skor_maksimal_total: number;
  rumus_nilai_akhir: string;
  rubrik_uraian?: ScoringRubricCriteria[];
}

export interface TeachingModule {
  id: string;
  user_id: string;
  school_id?: string | null;
  title: string;
  subject: string;
  grade: string;
  phase: Phase;
  semester: Semester;
  academic_year: string;
  duration_jp: number;
  total_meetings: number;
  learning_model: string;
  target_students: string;
  pancasila_dimensions: string[];
  initial_competency: string;
  learning_objectives: string[];
  meaningful_understanding: string;
  trigger_questions: string[];
  learning_activities: {
    meetings: Array<{
      meeting_number: number;
      duration_minutes: number;
      introduction: string[];
      core_activities: {
        syntax_steps: string[];
        differentiation_content?: string;
        differentiation_process?: string;
        differentiation_product?: string;
      };
      closing: string[];
    }>;
  };
  assessments: {
    diagnostic: string;
    formative: string;
    summative: string;
    rubric?: Record<string, unknown>;
  };
  appendices: {
    student_worksheet_lkpd?: string;
    reading_materials?: string;
    glossary?: Array<{ term: string; definition: string }>;
    references?: string[];
  };
  format_mode: "ringkas" | "lengkap_bskap";
  created_at: string;
  updated_at: string;
}
