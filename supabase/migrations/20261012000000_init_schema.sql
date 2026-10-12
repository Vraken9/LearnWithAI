-- Initial Schema for GuruHub / Perangkat Ajar & Evaluasi Terpadu
-- Security by Design: Strict typing, Foreign Keys with CASCADE, and Row Level Security (RLS)

-- 1. Table: schools (Data Satuan Pendidikan & Kop Surat)
CREATE TABLE IF NOT EXISTS public.schools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    government_agency TEXT NOT NULL DEFAULT '',
    education_office TEXT NOT NULL DEFAULT '',
    school_name TEXT NOT NULL,
    npsn TEXT NOT NULL DEFAULT '',
    accreditation TEXT NOT NULL DEFAULT 'A',
    address TEXT NOT NULL DEFAULT '',
    postal_code TEXT NOT NULL DEFAULT '',
    phone TEXT NOT NULL DEFAULT '',
    email TEXT NOT NULL DEFAULT '',
    website TEXT NOT NULL DEFAULT '',
    left_logo_url TEXT,
    right_logo_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Table: teacher_profiles (Profil Guru, Kepala Sekolah, & Pengawas Pembina)
CREATE TABLE IF NOT EXISTS public.teacher_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES public.schools(id) ON DELETE SET NULL,
    teacher_name TEXT NOT NULL,
    teacher_title TEXT DEFAULT '',
    teacher_nip TEXT DEFAULT '',
    headmaster_name TEXT DEFAULT '',
    headmaster_title TEXT DEFAULT '',
    headmaster_nip TEXT DEFAULT '',
    supervisor_name TEXT DEFAULT '',
    supervisor_title TEXT DEFAULT '',
    supervisor_nip TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Table: question_packages (Paket Soal Evaluasi)
CREATE TABLE IF NOT EXISTS public.question_packages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES public.schools(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    education_level TEXT NOT NULL, -- SD, SMP, SMA, SMK
    grade TEXT NOT NULL,
    phase TEXT NOT NULL,           -- A, B, C, D, E, F
    semester TEXT NOT NULL,        -- Ganjil, Genap
    academic_year TEXT NOT NULL,   -- e.g. 2026/2027
    source_type TEXT NOT NULL DEFAULT 'text', -- 'text' | 'pdf'
    chapter_or_material TEXT NOT NULL,
    learning_objectives TEXT DEFAULT '',
    total_questions INT NOT NULL DEFAULT 25,
    difficulty_distribution JSONB NOT NULL DEFAULT '{"mudah": 30, "sedang": 50, "sulit": 20}'::jsonb,
    cognitive_distribution JSONB NOT NULL DEFAULT '{"lots": 30, "mots": 40, "hots": 30}'::jsonb,
    bloom_distribution JSONB NOT NULL DEFAULT '{"c1": 15, "c2": 15, "c3": 40, "c4": 10, "c5": 10, "c6": 10}'::jsonb,
    stimulus_type TEXT NOT NULL DEFAULT 'variatif',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Table: questions (Butir Soal & Rubrik)
CREATE TABLE IF NOT EXISTS public.questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    package_id UUID NOT NULL REFERENCES public.question_packages(id) ON DELETE CASCADE,
    question_number INT NOT NULL,
    question_type TEXT NOT NULL DEFAULT 'Pilihan Ganda',
    stimulus_text TEXT,
    question_text TEXT NOT NULL,
    options JSONB, -- Array of { label: "A", text: "..." }
    correct_answer TEXT NOT NULL,
    explanation TEXT NOT NULL,
    bloom_level TEXT NOT NULL,      -- C1 .. C6
    cognitive_level TEXT NOT NULL,  -- LOTS, MOTS, HOTS
    difficulty TEXT NOT NULL,       -- Mudah, Sedang, Sulit
    competency_indicator TEXT,     -- Indikator soal untuk kisi-kisi
    score_weight INT NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Table: teaching_modules (Modul Ajar Kurikulum Merdeka BSKAP)
CREATE TABLE IF NOT EXISTS public.teaching_modules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES public.schools(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    grade TEXT NOT NULL,
    phase TEXT NOT NULL,
    semester TEXT NOT NULL,
    academic_year TEXT NOT NULL,
    duration_jp INT NOT NULL DEFAULT 2,
    total_meetings INT NOT NULL DEFAULT 1,
    learning_model TEXT NOT NULL,
    target_students TEXT NOT NULL DEFAULT 'Peserta Didik Reguler',
    pancasila_dimensions JSONB NOT NULL DEFAULT '[]'::jsonb,
    initial_competency TEXT,
    learning_objectives JSONB NOT NULL DEFAULT '[]'::jsonb,
    meaningful_understanding TEXT,
    trigger_questions JSONB NOT NULL DEFAULT '[]'::jsonb,
    learning_activities JSONB NOT NULL DEFAULT '{}'::jsonb,
    assessments JSONB NOT NULL DEFAULT '{}'::jsonb,
    appendices JSONB NOT NULL DEFAULT '{}'::jsonb,
    format_mode TEXT NOT NULL DEFAULT 'lengkap_bskap', -- 'ringkas' | 'lengkap_bskap'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_schools_user_id ON public.schools(user_id);
CREATE INDEX IF NOT EXISTS idx_teacher_profiles_user_id ON public.teacher_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_question_packages_user_id ON public.question_packages(user_id);
CREATE INDEX IF NOT EXISTS idx_questions_package_id ON public.questions(package_id);
CREATE INDEX IF NOT EXISTS idx_teaching_modules_user_id ON public.teaching_modules(user_id);

-- =========================================================================
-- SECURITY BY DESIGN: ROW LEVEL SECURITY (RLS)
-- =========================================================================
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teaching_modules ENABLE ROW LEVEL SECURITY;

-- Schools Policies
CREATE POLICY "Users can view their own school"
    ON public.schools FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own school"
    ON public.schools FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own school"
    ON public.schools FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own school"
    ON public.schools FOR DELETE
    USING (auth.uid() = user_id);

-- Teacher Profiles Policies
CREATE POLICY "Users can view their own teacher profile"
    ON public.teacher_profiles FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own teacher profile"
    ON public.teacher_profiles FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own teacher profile"
    ON public.teacher_profiles FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own teacher profile"
    ON public.teacher_profiles FOR DELETE
    USING (auth.uid() = user_id);

-- Question Packages Policies
CREATE POLICY "Users can view their own question packages"
    ON public.question_packages FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own question packages"
    ON public.question_packages FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own question packages"
    ON public.question_packages FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own question packages"
    ON public.question_packages FOR DELETE
    USING (auth.uid() = user_id);

-- Questions Policies (Linked via package_id ownership)
CREATE POLICY "Users can view questions in their packages"
    ON public.questions FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM public.question_packages qp
        WHERE qp.id = questions.package_id AND qp.user_id = auth.uid()
    ));

CREATE POLICY "Users can insert questions to their packages"
    ON public.questions FOR INSERT
    WITH CHECK (EXISTS (
        SELECT 1 FROM public.question_packages qp
        WHERE qp.id = questions.package_id AND qp.user_id = auth.uid()
    ));

CREATE POLICY "Users can update questions in their packages"
    ON public.questions FOR UPDATE
    USING (EXISTS (
        SELECT 1 FROM public.question_packages qp
        WHERE qp.id = questions.package_id AND qp.user_id = auth.uid()
    ));

CREATE POLICY "Users can delete questions in their packages"
    ON public.questions FOR DELETE
    USING (EXISTS (
        SELECT 1 FROM public.question_packages qp
        WHERE qp.id = questions.package_id AND qp.user_id = auth.uid()
    ));

-- Teaching Modules Policies
CREATE POLICY "Users can view their own teaching modules"
    ON public.teaching_modules FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own teaching modules"
    ON public.teaching_modules FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own teaching modules"
    ON public.teaching_modules FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own teaching modules"
    ON public.teaching_modules FOR DELETE
    USING (auth.uid() = user_id);
