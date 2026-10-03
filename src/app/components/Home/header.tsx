import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start gap-4 p-1 md:p-2">
        {/* <Image
          src="/profile.jpg"
          alt="profile image"
          width={100}
          height={40}
          className="w-12 h-auto border border-secondary rounded-lg"
        /> */}
        <h1 className="text-xl md:text-2xl font-inter font-normal text-primary">
          abhishek{" "}
          <span className="text-lg md:text-xl font-sans italic text-secondary">
            aka{" "}
          </span>
          <span className=""> abhishektumula</span>
        </h1>
      </div>
      <ThemeToggle />
    </div>
  );
};
