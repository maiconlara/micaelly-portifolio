import { cn } from "@/lib/utils";
import React from "react";

interface DottedBgProps {
  children: React.ReactNode;
  direction: "col" | "row";
}

export function DottedBg({ children, direction }: DottedBgProps) {
  
  return (
    <div className={`relative overflow-hidden min-h-[calc(100vh-72px)] w-full flex ${direction === "col" ? "flex-col" : "flex-row"} items-center justify-center bg-black`}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:15px_15px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      {children}
    </div>
  );
}
