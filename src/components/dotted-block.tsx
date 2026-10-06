import { cn } from "@/util/cn";
import { Container } from "./container";

export const DottedBlock = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-[radial-gradient(circle,var(--color-dotted)_1px,transparent_1px)] bg-size-[16px_16px]",
        className,
      )}
    />
  );
};
