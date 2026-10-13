-- Migration: Perangkat Tahunan (ATP, Prota, Promes) & Media Pembelajaran (Presentasi, LKPD)
-- Security by Design: Strict typing, UUIDs, CASCADE deletes, and Row Level Security (RLS)

-- 1. Table: annual_devices (ATP, Prota, Promes, & RPE Bundle)
CREATE TABLE IF NOT EXISTS public.annual_devices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES public.schools(id) ON DELETE SET NULL,
    subject TEXT NOT NULL,
    phase TEXT NOT NULL,          -- A .. F
    grade TEXT NOT NULL,
    academic_year TEXT NOT NULL,
    jp_per_week INT NOT NULL DEFAULT 3,
    calendar_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    atp_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    prota_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    promes_1_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    promes_2_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Table: presentation_decks (Bahan Tayang Slide Kelas PPTX)
CREATE TABLE IF NOT EXISTS public.presentation_decks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES public.schools(id) ON DELETE SET NULL,
    topic TEXT NOT NULL,
    subject TEXT NOT NULL,
    grade TEXT NOT NULL,
    target_duration_minutes INT NOT NULL DEFAULT 45,
    theme_palette TEXT NOT NULL DEFAULT 'navy_enterprise',
    slides JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Table: student_worksheets (Lembar Kerja Peserta Didik - LKPD)
CREATE TABLE IF NOT EXISTS public.student_worksheets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES public.schools(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    grade TEXT NOT NULL,
    semester INT NOT NULL DEFAULT 1,
    group_type TEXT NOT NULL DEFAULT 'Kelompok',
    estimated_minutes INT NOT NULL DEFAULT 40,
    learning_objectives JSONB NOT NULL DEFAULT '[]'::jsonb,
    materials_tools JSONB NOT NULL DEFAULT '[]'::jsonb,
    activity_steps JSONB NOT NULL DEFAULT '[]'::jsonb,
    data_observation_table JSONB NOT NULL DEFAULT '{}'::jsonb,
    analysis_questions JSONB NOT NULL DEFAULT '[]'::jsonb,
    conclusion_prompts JSONB NOT NULL DEFAULT '[]'::jsonb,
    rubric_scoring JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_annual_devices_user_id ON public.annual_devices(user_id);
CREATE INDEX IF NOT EXISTS idx_presentation_decks_user_id ON public.presentation_decks(user_id);
CREATE INDEX IF NOT EXISTS idx_student_worksheets_user_id ON public.student_worksheets(user_id);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================
ALTER TABLE public.annual_devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.presentation_decks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_worksheets ENABLE ROW LEVEL SECURITY;

-- Annual Devices RLS
CREATE POLICY "Users can manage their own annual devices"
    ON public.annual_devices
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Presentation Decks RLS
CREATE POLICY "Users can manage their own presentation decks"
    ON public.presentation_decks
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Student Worksheets RLS
CREATE POLICY "Users can manage their own student worksheets"
    ON public.student_worksheets
    FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);
