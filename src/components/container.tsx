import { cn } from "../util/cn";

export const Container = ({
  children,
  className,
  border = false,
}: {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
}) => {
  return (
    <div className={cn("mx-auto w-full md:max-w-4xl relative p-2", className)}>
      {border && (
        <div className="absolute top-0 left-0 h-full w-[2px] bg-border" />
      )}
      {border && (
        <div className="absolute top-0 right-0 h-full w-[2px] bg-border hidden md:block" />
      )}
      {children}
    </div>
  );
};
