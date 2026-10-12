import React from "react";
import { SchoolProfile } from "@/types";
import { Building2 } from "lucide-react";

interface OfficialLetterheadProps {
  school?: Partial<SchoolProfile>;
  className?: string;
}

export const OfficialLetterhead: React.FC<OfficialLetterheadProps> = ({
  school,
  className = "",
}) => {
  const governmentAgency =
    school?.government_agency || "PEMERINTAH PROVINSI JAWA TIMUR";
  const educationOffice =
    school?.education_office || "DINAS PENDIDIKAN DAN KEBUDAYAAN";
  const schoolName = school?.school_name || "SMA NEGERI 1 PURWANTORO";
  const npsn = school?.npsn || "20311234";
  const accreditation = school?.accreditation || "A";
  const address =
    school?.address || "Jalan Raya Purwantoro - Kismantoro Km. 2, Purwantoro, Wonogiri";
  const postalCode = school?.postal_code || "57695";
  const phone = school?.phone || "(0273) 415123";
  const email = school?.email || "info@sman1purwantoro.sch.id";
  const website = school?.website || "www.sman1purwantoro.sch.id";

  return (
    <div className={`w-full text-black select-none ${className}`}>
      <div className="flex items-center justify-between gap-4 pb-2">
        {/* Logo Kiri (Pemda / Kemendikbud) */}
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center border border-dashed border-gray-300 rounded bg-gray-50 text-gray-400">
          {school?.left_logo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={school.left_logo_url}
              alt="Logo Pemda"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="text-center text-[10px] leading-tight flex flex-col items-center">
              <Building2 className="w-6 h-6 mb-1 text-gray-400" />
              <span>Logo Dinas</span>
            </div>
          )}
        </div>

        {/* Teks Identitas Kedinasan */}
        <div className="flex-1 text-center font-serif leading-tight">
          <p className="text-xs uppercase font-medium tracking-wide">
            {governmentAgency}
          </p>
          <p className="text-xs uppercase font-bold tracking-wide">
            {educationOffice}
          </p>
          <h1 className="text-lg font-black uppercase tracking-wider my-0.5">
            {schoolName}
          </h1>
          <p className="text-[11px] text-gray-700">
            NPSN: {npsn} | Akreditasi: {accreditation}
          </p>
          <p className="text-[10px] text-gray-600 mt-0.5">
            Alamat: {address}, Kode Pos: {postalCode}
          </p>
          <p className="text-[10px] text-gray-600">
            Telepon: {phone} | Pos-el: {email} | Laman: {website}
          </p>
        </div>

        {/* Logo Kanan (Sekolah) */}
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center border border-dashed border-gray-300 rounded bg-gray-50 text-gray-400">
          {school?.right_logo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={school.right_logo_url}
              alt="Logo Sekolah"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="text-center text-[10px] leading-tight flex flex-col items-center">
              <Building2 className="w-6 h-6 mb-1 text-gray-400" />
              <span>Logo Sekolah</span>
            </div>
          )}
        </div>
      </div>

      {/* Garis Pembatas Kedinasan (Garis Ganda Formal Tebal-Tipis) */}
      <div className="border-t-2 border-black mt-1" />
      <div className="border-t border-black mt-[1.5px] mb-4" />
    </div>
  );
};
