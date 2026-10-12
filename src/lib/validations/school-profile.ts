import { z } from "zod";

// Security by Design: Sanitasi input dan pencegahan XSS/Injection
const safeString = z
  .string()
  .trim()
  .max(250, "Maksimal 250 karakter")
  .refine((val) => !/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(val), {
    message: "Karakter tidak aman terdeteksi",
  });

export const schoolProfileSchema = z.object({
  government_agency: safeString.min(3, "Nama instansi pemerintah wajib diisi"),
  education_office: safeString.min(3, "Nama dinas pendidikan wajib diisi"),
  school_name: safeString.min(3, "Nama satuan pendidikan wajib diisi"),
  npsn: z
    .string()
    .trim()
    .regex(/^\d{8}$/, "NPSN harus berupa 8 digit angka"),
  accreditation: z.enum(["A", "B", "C", "Belum Terakreditasi"]),
  address: z
    .string()
    .trim()
    .min(5, "Alamat sekolah wajib diisi")
    .max(500, "Maksimal 500 karakter"),
  postal_code: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Kode pos harus berupa 5 digit angka"),
  phone: z
    .string()
    .trim()
    .min(6, "Nomor telepon minimal 6 karakter")
    .max(20, "Nomor telepon maksimal 20 karakter"),
  email: z.string().trim().email("Format alamat email tidak valid"),
  website: z.string().trim().max(100, "Maksimal 100 karakter"),
  left_logo_url: z.string().trim().optional().or(z.literal("")),
  right_logo_url: z.string().trim().optional().or(z.literal("")),
});

export const teacherProfileSchema = z.object({
  teacher_name: safeString.min(2, "Nama guru wajib diisi"),
  teacher_title: safeString.optional().or(z.literal("")),
  teacher_nip: z
    .string()
    .trim()
    .max(30, "Maksimal 30 karakter")
    .optional()
    .or(z.literal("")),
  headmaster_name: safeString.min(2, "Nama kepala sekolah wajib diisi"),
  headmaster_title: safeString.optional().or(z.literal("")),
  headmaster_nip: z
    .string()
    .trim()
    .max(30, "Maksimal 30 karakter")
    .optional()
    .or(z.literal("")),
  supervisor_name: safeString.min(2, "Nama pengawas pembina wajib diisi"),
  supervisor_title: safeString.optional().or(z.literal("")),
  supervisor_nip: z
    .string()
    .trim()
    .max(30, "Maksimal 30 karakter")
    .optional()
    .or(z.literal("")),
});

export type SchoolProfileFormValues = z.infer<typeof schoolProfileSchema>;
export type TeacherProfileFormValues = z.infer<typeof teacherProfileSchema>;
