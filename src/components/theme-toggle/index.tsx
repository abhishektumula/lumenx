"use client";
import { cn } from "@/util/cn";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="p-1 rounded">{/* empty placeholder */}</button>;
  }

  const handleChange = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/click.mp3");
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
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
