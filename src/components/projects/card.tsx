"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { proj_type } from ".";

export const ProjectCard = ({ details }: { details: proj_type }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  // preview follows the cursor vertically, smoothed with a spring
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    y.set(Math.max(0, e.clientY - rect.top - 80));
  };

  return (
    <div
      className="group relative w-full max-w-xl flex flex-col gap-2 rounded-md p-2 py-4 hover:bg-neutral-300/20 dark:hover:bg-neutral-700/20 transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-start gap-4">
          <div className="md:h-2 md:w-2 h-1 w-1 rounded-full bg-border group-hover:bg-hborder transition-colors" />
          <p className="font-display font-medium text-md md:text-lg text-primary group-hover:text-header transition-colors">
            {details.title}
          </p>
        </div>
        {details.live && details.href ? (
          <Link
            href={details.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-dashed border-border hover:border-hborder text-xs text-secondary font-sans transition-colors"
          >
            Live
            <IconArrowUpRight className="size-3" />
          </Link>
        ) : (
          <p className="flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-dashed border-border text-xs text-secondary font-sans">
            <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
            {details.live ? "Live" : "Building"}
          </p>
        )}
      </div>
      <p className="font-display text-xs md:text-sm text-secondary pl-5 md:pl-6">
        {details.desc}
      </p>

      <AnimatePresence>
        {hovered && details.previewImage && (
          <motion.div
            key="preview"
            style={{ y: springY }}
            initial={{ opacity: 0, x: -8, scale: 0.96, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -8, scale: 0.96, filter: "blur(4px)" }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="pointer-events-none absolute top-0 left-full ml-4 z-20 hidden lg:block w-72"
          >
            <div className="rounded-lg border border-dashed border-hborder bg-background p-1 shadow-xl shadow-black/5 dark:shadow-black/40">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-md border border-border">
                <Image
                  src={details.previewImage}
                  alt={`${details.title} preview`}
                  fill
                  sizes="288px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center justify-between px-1 pt-1.5 pb-0.5">
                <p className="font-display text-xs text-primary">
                  {details.title}
                </p>
                {details.href && (
                  <p className="font-sans text-[10px] text-secondary truncate max-w-32">
                    {details.href
                      .replace(/^https?:\/\//, "")
                      .replace(/\/$/, "")}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
