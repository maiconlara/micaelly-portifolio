import React from "react";
import { cn } from "@/lib/utils";
import { RiArrowRightLine, RiLinkedinBoxFill } from "@remixicon/react";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-full cursor-pointer overflow-hidden rounded-full border border-lines bg-background p-3 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 opacity-0 group-hover:opacity-100 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
        <RiLinkedinBoxFill
          size={18}
          className=" text-white transition-all duration-300 group-hover:scale-[0]"
        />
        <span className="inline-block transition-all text-white duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <RiArrowRightLine size={18} className="text-primary" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
