"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ThemeToggle } from "../theme-toggle";

const links = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  // { title: "Experience", href: "/#experience" },
  { title: "Journey", href: "/journey" },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });
  const percent = useTransform(progress, (v) => `${Math.round(v * 100)}`);

  return (
    <div className="relative size-8 flex items-center justify-center">
      <svg
        viewBox="0 0 36 36"
        className="absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          strokeWidth="3"
          className="stroke-border"
        />
        <motion.circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="stroke-foreground"
          style={{ pathLength: progress }}
        />
      </svg>
      <motion.span className="text-[9px] font-google text-secondary">
        {percent}
      </motion.span>
    </div>
  );
};

export const NavBar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-dashed border-border bg-background/80 backdrop-blur-md p-1.5 shadow-sm">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="px-3 py-1.5 rounded-full text-sm font-display text-secondary hover:text-foreground hover:bg-dotted transition-colors"
        >
          {link.title}
        </Link>
      ))}
      <ThemeToggle />
      <div className="ml-1">
        <ScrollProgress />
      </div>
    </nav>
  );
};
