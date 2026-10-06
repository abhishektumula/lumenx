import { cn } from "../util/cn";

export const DottedBlocks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-[radial-gradient(circle,var(--color-dotted)_1px,transparent_2px)] bg-size-[12px_12px]",
        className,
      )}
    ></div>
  );
};

export const HorizontalLineBlocks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-100 h-100 bg-[repeating-linear-gradient(0deg,var(--color-red-300)_0px_1px,transparent_1px_16px)]",
        className,
      )}
    ></div>
  );
};

export const VerticalLineBlocks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-100 h-100 bg-[repeating-linear-gradient(90deg,var(--color-red-300)_0px_1px,transparent_1px_16px)]",
        className,
      )}
    ></div>
  );
};

export const AngledLineBlocks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-100 h-100 bg-[repeating-linear-gradient(312deg,var(--color-red-300)_0px_1px,transparent_1px_12px)]",
        className,
      )}
    ></div>
  );
};

export const GridBlocks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-100 h-100 bg-[repeating-linear-gradient(90deg,var(--color-red-300)_0px_1px,transparent_1px_32px),repeating-linear-gradient(0deg,var(--color-neutral-300)_0px_1px,transparent_1px_32px)]",
        className,
      )}
    ></div>
  );
};
