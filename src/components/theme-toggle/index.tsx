"use client";
import { cn } from "@/util/cn";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    console.log("changed");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={cn("", className)}>
      <button className="p-1 rounded-lg hover:bg-border" onClick={handleChange}>
        {theme === "dark" ? (
          <IconSun className="size-5  text-primary" />
        ) : (
          <IconMoon className="size-5  text-primary" />
        )}
      </button>
    </div>
  );
};
