import React from "react";
import { cn } from "../util/cn";

export const Block = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("p-1 md:p-2", className)}>{children}</div>;
};
