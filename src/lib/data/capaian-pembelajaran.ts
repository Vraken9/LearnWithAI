// Basis Data Rujukan Capaian Pembelajaran (CP) Resmi BSKAP Kemendikbudristek No. 032/H/KR/2024
// Digunakan untuk rekomendasi otomatis TP dan ATP lintas Fase A sampai Fase F

export interface StandardCP {
  phase: "A" | "B" | "C" | "D" | "E" | "F";
  level: "SD" | "SMP" | "SMA" | "SMK";
  subject: string;
  element: string;
  description: string;
}

export const OFFICIAL_CP_DATABASE: StandardCP[] = [
  // Fase A (Kelas 1-2 SD)
  {
    phase: "A",
    level: "SD",
    subject: "Bahasa Indonesia",
    element: "Menyimak",
    description:
      "Peserta didik mampu bersikap menjadi pendengar yang penuh perhatian. Peserta didik menunjukkan minat pada tuturan yang didengar serta mampu memahami pesan lisan dan informasi dari media audio, teks aural, dan teks visual.",
  },
  {
    phase: "A",
    level: "SD",
    subject: "Matematika",
    element: "Bilangan",
    description:
      "Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 100, dapat membaca, menulis, menentukan nilai tempat, serta melakukan operasi penjumlahan dan pengurangan.",
  },
  // Fase B (Kelas 3-4 SD)
  {
    phase: "B",
    level: "SD",
    subject: "IPAS",
    element: "Pemahaman IPAS (Sains & Sosial)",
    description:
      "Peserta didik memahami bentuk dan fungsi bagian tubuh manusia, siklus hidup makhluk hidup, wujud zat dan perubahannya, bentuk energi dan perubahannya, serta peran manusia dalam pelestarian lingkungan.",
  },
  {
    phase: "B",
    level: "SD",
    subject: "Matematika",
    element: "Geometri",
    description:
      "Peserta didik dapat mendeskripsikan ciri berbagai bentuk bangun datar (segiempat, segitiga, segibanyak) dan menyusun serta mengurai komposisi bangun datar.",
  },
  // Fase C (Kelas 5-6 SD)
  {
    phase: "C",
    level: "SD",
    subject: "IPAS",
    element: "Pemahaman IPAS",
    description:
      "Peserta didik memahami sistem organ tubuh manusia yang dikaitkan dengan cara menjaga kesehatan tubuhnya; hubungan antar komponen biotik dan abiotik dalam ekosistem; gelombang bunyi dan cahaya; serta pemanfaatan energi terbarukan.",
  },
  // Fase D (Kelas 7-9 SMP)
  {
    phase: "D",
    level: "SMP",
    subject: "IPA",
    element: "Pemahaman IPA",
    description:
      "Peserta didik memahami pengukuran besaran, zat dan perubahannya, kalor dan perubahannya, gerak dan gaya, usaha dan energi, bumi dan tata surya, pewarisan sifat, serta bioteknologi ramah lingkungan.",
  },
  {
    phase: "D",
    level: "SMP",
    subject: "Matematika",
    element: "Aljabar",
    description:
      "Peserta didik dapat mengenali, memprediksi, dan menggeneralisasi pola dalam bentuk susunan benda dan bilangan; menyatakan situasi ke dalam bentuk aljabar; serta menggunakan relasi dan fungsi untuk menyelesaikan masalah.",
  },
  {
    phase: "D",
    level: "SMP",
    subject: "Bahasa Inggris",
    element: "Menyimak - Berbicara",
    description:
      "Peserta didik menggunakan bahasa Inggris untuk berinteraksi dan saling bertukar ide, pengalaman, minat, dan pendapat dalam diskusi kelompok serta menyajikan informasi terkait topik akrab dalam kehidupan sehari-hari.",
  },
  // Fase E (Kelas 10 SMA)
  {
    phase: "E",
    level: "SMA",
    subject: "Fisika",
    element: "Pemahaman Sains & Keterampilan Proses",
    description:
      "Peserta didik mampu mengamati, menyelidiki, dan mengevaluasi fenomena gerak lurus, gaya, hukum Newton, energi terbarukan, pemanasan global, serta teknologi ramah lingkungan dengan menggunakan pengukuran ilmiah presisi.",
  },
  {
    phase: "E",
    level: "SMA",
    subject: "Biologi",
    element: "Pemahaman Biologi",
    description:
      "Peserta didik menganalisis keterkaitan struktur dan fungsi sel, keanekaragaman hayati Indonesia, peranan virus, serta bioteknologi konvensional dan modern dalam pelestarian lingkungan dan kesehatan.",
  },
  {
    phase: "E",
    level: "SMA",
    subject: "Matematika",
    element: "Analisis Data dan Peluang",
    description:
      "Peserta didik dapat merepresentasikan dan menginterpretasi data dengan menggunakan diagram pencar, garis regresi linear, serta menentukan peluang kejadian saling bebas dan saling lepas.",
  },
  {
    phase: "E",
    level: "SMA",
    subject: "Informatika",
    element: "Berpikir Komputasional & Algoritma",
    description:
      "Peserta didik mampu menerapkan strategi algoritmik standar untuk menghasilkan beberapa solusi persoalan dengan data diskrit bervolume besar serta mengintegrasikan aplikasi perkantoran untuk visualisasi data.",
  },
  // Fase F (Kelas 11-12 SMA)
  {
    phase: "F",
    level: "SMA",
    subject: "Fisika",
    element: "Pemahaman Fisika Lanjutan",
    description:
      "Peserta didik menganalisis konsep mekanika fluida, termodinamika, gelombang mekanik, gelombang elektromagnetik, listrik statis dan dinamis, serta fisika modern dan radioaktivitas dalam teknologi kontemporer.",
  },
  {
    phase: "F",
    level: "SMA",
    subject: "Kimia",
    element: "Pemahaman Kimia",
    description:
      "Peserta didik mampu menjelaskan keterkaitan struktur atom, ikatan kimia, stoikiometri reaksi, termokimia, laju reaksi, kesetimbangan kimia, serta sifat koligatif larutan dan elektrokimia.",
  },
];

export function getOfficialCP(phase: string, subject: string): StandardCP | undefined {
  return OFFICIAL_CP_DATABASE.find(
    (item) =>
      item.phase === phase &&
      item.subject.toLowerCase().includes(subject.toLowerCase().trim())
  );
}
