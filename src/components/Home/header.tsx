import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";

export const HeaderTitle = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start gap-4 p-1 md:p-2">
        <h1 className="text-xl md:text-2xl font-display font-normal text-header">
          abhishek{" "}
          <span className="text-lg md:text-xl font-sans italic text-secondary">
            aka{""}
          </span>
          <span className="font-display"> abhishektumula</span>
        </h1>
      </div>
    </div>
  );
};

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-1 md:p-2 text-xl md:text-2xl font-display font-normal text-header hover:underline transition duration-700">
      {children}
    </div>
  );
};
