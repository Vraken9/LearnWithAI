import React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlusSeparatorProps {
  position?: Array<"top-left" | "top-right" | "bottom-left" | "bottom-right">;
  className?: string;
  size?: number;
}

export function PlusSeparator({
  position = ["top-left", "top-right", "bottom-left", "bottom-right"],
  className,
  size = 12,
}: PlusSeparatorProps) {
  return (
    <>
      {position.includes("top-left") && (
        <Plus
          size={size}
          className={cn(
            "pointer-events-none absolute -top-1.5 -left-1.5 text-slate-400 z-10",
            className
          )}
        />
      )}
      {position.includes("top-right") && (
        <Plus
          size={size}
          className={cn(
            "pointer-events-none absolute -top-1.5 -right-1.5 text-slate-400 z-10",
            className
          )}
        />
      )}
      {position.includes("bottom-left") && (
        <Plus
          size={size}
          className={cn(
            "pointer-events-none absolute -bottom-1.5 -left-1.5 text-slate-400 z-10",
            className
          )}
        />
      )}
      {position.includes("bottom-right") && (
        <Plus
          size={size}
          className={cn(
            "pointer-events-none absolute -bottom-1.5 -right-1.5 text-slate-400 z-10",
            className
          )}
        />
      )}
    </>
  );
}
