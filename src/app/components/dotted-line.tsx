import { SVGProps } from "react";
import { cn } from "../util/cn";

export const DottedLine = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 600 2"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-0.5 w-full text-black/40 dark:text-white/20", className)}
      {...props}
    >
      <line
        x1="0"
        y1="1"
        x2="600"
        y2="1"
        stroke="currentColor"
        strokeDasharray="1 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
