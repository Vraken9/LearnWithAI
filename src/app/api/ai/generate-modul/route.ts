import { NextRequest, NextResponse } from "next/server";
import { teachingModuleSchema } from "@/lib/validations/modul-ajar";
import { TeachingModule } from "@/types";

// Security by Design: Handler aman dengan validasi Zod ketat
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    const validation = teachingModuleSchema.safeParse(rawBody);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validasi parameter gagal",
          details: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const apiKey = process.env.GEMINI_API_KEY;

    let moduleResult: Partial<TeachingModule>;

    if (apiKey && apiKey !== "your-gemini-api-key-placeholder") {
      try {
        moduleResult = await callGeminiModulAI(data, apiKey);
      } catch {
        moduleResult = generatePedagogicalModule(data);
      }
    } else {
      moduleResult = generatePedagogicalModule(data);
    }

    return NextResponse.json({
      success: true,
      data: moduleResult,
    });
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan internal saat memproses modul ajar" },
      { status: 500 }
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function callGeminiModulAI(data: any, apiKey: string): Promise<Partial<TeachingModule>> {
  const prompt = `Anda adalah Spesialis Kurikulum Merdeka BSKAP Kemendikbudristek Indonesia.
Rancang Modul Ajar resmi untuk:
- Mapel: ${data.subject} (${data.grade}, Fase ${data.phase})
- Materi: ${data.chapter_or_material}
- Model: ${data.learning_model}
- Alokasi: ${data.total_meetings} Pertemuan (${data.duration_jp} JP)
- Dimensi Profil Pancasila: ${data.pancasila_dimensions.join(", ")}
- Format: ${data.format_mode}

Wajib memuat:
1. Informasi Umum (Kompetensi awal, sarpras, target siswa)
2. Komponen Inti: Tujuan Pembelajaran, Pemahaman Bermakna, Pertanyaan Pemantik, Skenario Pembelajaran (Pendahuluan, Inti dengan 3 Diferensiasi: Konten, Proses, Produk, Penutup), Asesmen (Diagnostik, Formatif, Sumatif + Rubrik), Pengayaan & Remedial, Refleksi
3. Lampiran: LKPD Lengkap, Glosarium, Bahan Bacaan, Daftar Pustaka.
Hasilkan output JSON murni sesuai format TeachingModule.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.3,
        },
      }),
    }
  );

  if (!response.ok) throw new Error("Gagal menghubungi AI");
  const json = await response.json();
  const textOutput = json.candidates?.[0]?.content?.parts?.[0]?.text;
  return JSON.parse(textOutput);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generatePedagogicalModule(data: any): Partial<TeachingModule> {
  const isScience = /fisika|ipa|kimia|biologi|ipas/i.test(data.subject);

  return {
    id: crypto.randomUUID(),
    title: `Modul Ajar: ${data.subject} - ${data.chapter_or_material}`,
    subject: data.subject,
    grade: data.grade,
    phase: data.phase,
    semester: data.semester,
    academic_year: data.academic_year,
    duration_jp: data.duration_jp,
    total_meetings: data.total_meetings,
    learning_model: data.learning_model,
    target_students: data.target_students,
    pancasila_dimensions: data.pancasila_dimensions,
    initial_competency: data.initial_competency,
    learning_objectives: [
      data.learning_objectives,
      `Peserta didik dapat merancang penyelidikan ilmiah sederhana untuk membuktikan prinsip ${data.chapter_or_material}.`,
      `Peserta didik mampu mengomunikasikan hasil analisis secara tertulis dan lisan dengan bernalar kritis.`,
    ],
    meaningful_understanding: `Peserta didik memahami bahwa konsep ${data.chapter_or_material} merupakan hukum alam fundamental yang mengatur pergerakan benda di sekitar kita, dari pergerakan kendaraan sehari-hari hingga orbit satelit di luar angkasa, serta dapat dimanfaatkan untuk efisiensi teknologi transportasi dan keselamatan kerja.`,
    trigger_questions: [
      `Mengapa saat kendaraan yang kita tumpangi mengerem mendadak, tubuh kita terdorong ke arah depan?`,
      `Bagaimanakah keterkaitan antara massa benda, gaya dorong, dan percepatan yang dialami oleh benda tersebut?`,
      `Apa yang membedakan konsep kelajuan dengan kecepatan dalam fenomena atlet lari di lintasan melingkar?`,
    ],
    learning_activities: {
      meetings: [
        {
          meeting_number: 1,
          duration_minutes: data.duration_jp * 45,
          introduction: [
            "Guru membuka kelas dengan salam, memeriksa kesiapan fisik dan psikis peserta didik, serta berdoa bersama.",
            "Guru menyampaikan apersepsi dengan menayangkan video singkat kecelakaan lalu lintas terkait gaya inersia dan pengereman kendaraan.",
            "Guru memberikan Pertanyaan Pemantik untuk memicu rasa ingin tahu peserta didik.",
            "Guru melaksanakan Asesmen Diagnostik Kognitif Awal (3 butir pertanyaan pemantik konsep dasar).",
            "Guru menyampaikan Tujuan Pembelajaran, alur kegiatan kelas, serta indikator penilaian yang akan dicapai.",
          ],
          core_activities: {
            syntax_steps: [
              "Fase 1 (Orientasi pada Masalah): Peserta didik mengamati fenomena demonstrasi gerak koin di atas kertas yang ditarik perlahan vs ditarik secara cepat.",
              "Fase 2 (Mengorganisasikan Peserta Didik): Peserta didik dibagi ke dalam kelompok heterogen beranggotakan 4-5 orang berdasarkan hasil asesmen awal.",
              "Fase 3 (Membimbing Penyelidikan Mandiri/Kelompok): Kelompok melakukan simulasi praktikum gerak dan percepatan menggunakan alat peraga ticker timer atau sensor gerak digital pada smartphone.",
              "Fase 4 (Mengembangkan dan Menyajikan Hasil Karya): Setiap kelompok mengolah data pengukuran, merumuskan grafik hubungan v-t, dan menyusun laporan ringkas.",
              "Fase 5 (Menganalisis dan Mengevaluasi): Perwakilan kelompok mempresentasikan temuan di depan kelas dan kelompok lain memberikan tanggapan kritis.",
            ],
            differentiation_content:
              "Diferensiasi Konten: Peserta didik kelompok reguler menggunakan buku teks dan modul ajar; kelompok yang membutuhkan bimbingan diberikan panduan infografis bertahap dan video animasi konsep; sedangkan kelompok mahir diberikan artikel jurnal ilmiah dan studi kasus data aerodinamika roket.",
            differentiation_process:
              "Diferensiasi Proses: Guru memberikan pendampingan bertingkat (scaffolding intensif) kepada kelompok dengan kesiapan belajar rendah, memberikan pemantik berkala pada kelompok sedang, dan memberikan keleluasaan inkuiri mandiri bagi kelompok berkemampuan tinggi.",
            differentiation_product:
              "Diferensiasi Produk: Peserta didik bebas memilih format laporan hasil penyelidikan: lembar kerja tertulis, poster/infografis Canva, atau rekaman video penjelasan berdurasi 2 menit.",
          },
          closing: [
            "Peserta didik bersama guru menyimpulkan poin-poin utama konsep yang telah dipelajari.",
            "Guru memandu refleksi kelas dua arah (Apa hal paling bermakna yang dipelajari hari ini? Apa kendala yang dihadapi?).",
            "Guru memberikan asesmen formatif akhir sesi berupa kuis tiket keluar (exit ticket 2 soal).",
            "Guru menyampaikan gambaran aktivitas pada pertemuan berikutnya dan menutup pembelajaran dengan doa.",
          ],
        },
      ],
    },
    assessments: {
      diagnostic:
        "Asesmen Diagnostik Awal: Tes lisan apersepsi dan kuis 3 soal pilihan ganda di awal sesi untuk memetakan kesiapan belajar peserta didik.",
      formative:
        "Asesmen Formatif (Proses): Lembar observasi keaktifan diskusi, lembar ceklis partisipasi bernalar kritis dan gotong royong, serta penilaian kinerja presentasi.",
      summative:
        "Asesmen Sumatif (Akhir Lingkup Materi): Tes tertulis berupa 10 butir soal pilihan ganda berstandar AKM dan 2 butir soal uraian penalaran analitis.",
      rubric: {
        skala: "1 - 4 (Perlu Bimbingan, Cukup, Baik, Sangat Baik)",
        kriteria: [
          "Kemampuan merumuskan hipotesis ilmiah",
          "Keterampilan mengolah data dan grafik",
          "Kualitas argumentasi penalaran logis",
        ],
      },
    },
    appendices: {
      student_worksheet_lkpd: `LEMBAR KERJA PESERTA DIDIK (LKPD) TERSTRUKTUR
Materi: ${data.chapter_or_material}
Kelas / Semester: ${data.grade} / ${data.semester}
Kelompok: ................................ Anggota: ................................

A. Petunjuk Pengerjaan:
1. Bacalah pengantar masalah secara seksama bersama anggota kelompok Anda.
2. Siapkan alat dan bahan praktikum: papan luncur, balok beban, stopwatch / smartphone sensor.
3. Catat data hasil variasi massa balok terhadap waktu tempuh pada tabel pengamatan di bawah.

B. Tabel Pengamatan:
| Percobaan | Massa Beban (kg) | Jarak Tempuh (m) | Waktu Tempuh (s) | Percepatan (m/s2) |
| 1         | 0.1              | 1.0              |                  |                   |
| 2         | 0.2              | 1.0              |                  |                   |
| 3         | 0.3              | 1.0              |                  |                   |

C. Pertanyaan Analisis:
1. Bagaimana grafik hubungan antara besarnya percepatan terhadap massa beban saat gaya dorong dibuat tetap?
2. Berdasarkan data di atas, buktikan apakah hukum II Newton berlaku pada percobaan Anda!`,
      reading_materials: `BAHAN BACAAN GURU DAN PESERTA DIDIK:
${isScience ? "Konsep mekanika klasik Newtonian menjelaskan bahwa keadaan alami benda adalah mempertahankan kecepatannya jika tidak ada gaya total luar yang mempengaruhinya. Hukum I Newton menyatakan bahwa inersia adalah sifat kelembaman suatu materi. Hukum II Newton menjembatani hubungan antara gaya total net, massa benda, dan percepatan yang timbul: F = m x a. Hukum III Newton menekankan bahwa gaya senantiasa muncul berpasangan (aksi-reaksi) yang besarnya sama namun berlawanan arah dan bekerja pada dua benda yang berbeda." : "Penerapan konsep materi ini menuntut pemahaman mendalam tentang prinsip kerja sistematis dan keterkaitannya dengan fenomena kontekstual di masyarakat."}`,
      glossary: [
        { term: "Inersia", definition: "Kecenderungan alami suatu benda untuk mempertahankan keadaan diam atau gerak lurus beraturannya." },
        { term: "Percepatan", definition: "Laju perubahan kecepatan suatu benda tiap satuan waktu tertentu." },
        { term: "Gaya Net", definition: "Resultan atau jumlah vektor dari seluruh gaya yang bekerja pada suatu benda." },
        { term: "Diferensiasi Pembelajaran", definition: "Pendekatan pembelajaran yang menyesuaikan konten, proses, dan produk berdasarkan kebutuhan dan kesiapan belajar peserta didik." },
      ],
      references: [
        "Kemendikbudristek. 2024. Panduan Pembelajaran dan Asesmen Kurikulum Merdeka. Jakarta: BSKAP.",
        "Kanginan, Marthen. 2022. Fisika untuk SMA/MA Kelas X Berdasarkan Kurikulum Merdeka. Jakarta: Penerbit Erlangga.",
        "Halliday, David, Robert Resnick, dan Jearl Walker. 2018. Fundamentals of Physics 11th Edition. New York: John Wiley & Sons.",
      ],
    },
    format_mode: data.format_mode,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}
