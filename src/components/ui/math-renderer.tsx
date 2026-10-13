"use client";

import React, { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathRendererProps {
  content: string;
  className?: string;
}

/**
 * MathRenderer: Komponen aman untuk merender teks campuran biasa dan LaTeX matematika/fisika.
 * Format yang didukung:
 * - Blok: $$formula$$
 * - Inline: $formula$
 * Security by Design: Tidak mengeksekusi skrip, menggunakan parser KaTeX resmi dengan sanitasi ketat.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  className = "",
}) => {
  const renderedElements = useMemo(() => {
    if (!content) return null;

    // Pisahkan teks berdasarkan pola $$...$$ (display mode) dan $...$ (inline mode)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    const parts = content.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith("$$") && part.endsWith("$$")) {
        const formula = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="my-2 block overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <code key={index} className="text-red-500 font-mono text-xs">
              {formula}
            </code>
          );
        }
      } else if (part.startsWith("$") && part.endsWith("$")) {
        const formula = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="inline-block px-0.5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <code key={index} className="text-red-500 font-mono text-xs">
              {formula}
            </code>
          );
        }
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  }, [content]);

  return <div className={`inline-block leading-relaxed ${className}`}>{renderedElements}</div>;
};
