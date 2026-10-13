import { z } from "zod";

function sanitizeText(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .trim();
}

export const perangkatTahunanInputSchema = z.object({
  subject: z
    .string()
    .min(2, "Nama mata pelajaran minimal 2 karakter")
    .max(100, "Nama mata pelajaran maksimal 100 karakter")
    .transform(sanitizeText),
  phase: z.enum(["A", "B", "C", "D", "E", "F"], {
    message: "Fase harus dipilih antara A sampai F",
  }),
  grade: z
    .string()
    .min(1, "Kelas wajib diisi")
    .max(20, "Kelas maksimal 20 karakter")
    .transform(sanitizeText),
  academic_year: z
    .string()
    .min(4, "Tahun ajaran wajib diisi")
    .max(15, "Tahun ajaran maksimal 15 karakter")
    .transform(sanitizeText),
  jp_per_week: z
    .number()
    .int()
    .min(1, "Jam pelajaran per minggu minimal 1 JP")
    .max(10, "Jam pelajaran per minggu maksimal 10 JP"),
  sem1_calendar_weeks: z
    .number()
    .int()
    .min(15, "Jumlah minggu kalender semester 1 minimal 15 minggu")
    .max(28, "Jumlah minggu kalender semester 1 maksimal 28 minggu"),
  sem1_ineffective_weeks: z
    .number()
    .int()
    .min(0, "Jumlah minggu tidak efektif minimal 0")
    .max(12, "Jumlah minggu tidak efektif maksimal 12"),
  sem2_calendar_weeks: z
    .number()
    .int()
    .min(15, "Jumlah minggu kalender semester 2 minimal 15 minggu")
    .max(28, "Jumlah minggu kalender semester 2 maksimal 28 minggu"),
  sem2_ineffective_weeks: z
    .number()
    .int()
    .min(0, "Jumlah minggu tidak efektif minimal 0")
    .max(12, "Jumlah minggu tidak efektif maksimal 12"),
  learning_scope: z
    .string()
    .max(1500, "Cakupan materi maksimal 1500 karakter")
    .optional()
    .transform((val) => (val ? sanitizeText(val) : "")),
});

export type PerangkatTahunanInput = z.infer<typeof perangkatTahunanInputSchema>;
