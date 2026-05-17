import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  tone?: "primary" | "white";
  align?: "center" | "start";
  className?: string;
}

export const SectionHeader = ({
  label,
  tone = "primary",
  align = "center",
  className,
}: SectionHeaderProps) => {
  const color = tone === "white" ? "text-white" : "text-green-primary";
  const line = tone === "white" ? "bg-white/60" : "bg-green-primary/60";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center" : "items-start",
        className
      )}
    >
      <span className={cn("block h-px w-10", line)} />
      <p
        className={cn(
          "text-sm md:text-base uppercase font-light font-clean tracking-[0.45em] cursor-default",
          color
        )}
      >
        {label}
      </p>
    </div>
  );
};
