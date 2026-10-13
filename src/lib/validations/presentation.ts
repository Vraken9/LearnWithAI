import { z } from "zod";

function sanitizeText(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .trim();
}

export const presentationInputSchema = z.object({
  topic: z
    .string()
    .min(3, "Topik materi minimal 3 karakter")
    .max(150, "Topik materi maksimal 150 karakter")
    .transform(sanitizeText),
  subject: z
    .string()
    .min(2, "Mata pelajaran minimal 2 karakter")
    .max(100, "Mata pelajaran maksimal 100 karakter")
    .transform(sanitizeText),
  grade: z
    .string()
    .min(1, "Kelas wajib diisi")
    .max(30, "Kelas maksimal 30 karakter")
    .transform(sanitizeText),
  target_duration_minutes: z
    .number()
    .int()
    .min(15, "Durasi minimal 15 menit")
    .max(120, "Durasi maksimal 120 menit"),
  slide_count: z
    .number()
    .int()
    .min(5, "Jumlah slide minimal 5")
    .max(15, "Jumlah slide maksimal 15"),
  theme_palette: z.enum(
    ["navy_enterprise", "emerald_nature", "slate_academic", "indigo_tech"],
    {
      message: "Pilihan tema palet tidak valid",
    }
  ),
  include_lkpd: z.boolean().default(true),
});

export type PresentationInput = z.infer<typeof presentationInputSchema>;
