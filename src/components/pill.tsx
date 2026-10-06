import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "../util/cn";

export type pillReq = {
  className?: string;
  title: string;
  href?: string;
  icon: React.ReactNode;
};

export const PillDesign = ({ data }: { data: pillReq }) => {
  return (
    <Link
      className={cn(
        "w-fit gap-2 hover:border-hborder relative flex items-center justify-center px-2 py-1 rounded-md md:rounded-lg border border-dashed border-border",
        data.className,
      )}
      href={data.href ? data.href : "/"}
    >
      {data.icon}
      <p className="text-md text-secondary font-sans">{data.title}</p>
    </Link>
  );
};
