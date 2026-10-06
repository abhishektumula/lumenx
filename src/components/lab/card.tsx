"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { lab_type } from ".";
import { IconArrowRight } from "@tabler/icons-react";

export const LabCard = ({ details }: { details: lab_type }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      <Link
        target="__blank"
        href="https://www.youtube.com/watch?v=hPr-Yc92qaY"
        className=" w-full p-2 flex flex-col gap-2 hover:bg-neutral-300/20 dark:hover:bg-neutral-700/20 rounded-lg group md:max-w-2xl"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <div className="md:h-2 md:w-2 h-1 w-1 rounded-full bg-border group-hover:bg-neutral-600 dark:group-hover:bg-neutral-500" />
            <p className="font-display font-medium text-md md:text-lg text-primary">
              {details.name}
            </p>
          </div>
          <Link
            href={details.href ? details.href : "/"}
            className="flex items-center justify-center font-display text-xs py-1 px-2 rounded-lg border border-dashed border-border gap-1 hover:border-hborder"
          >
            Live
            <IconArrowRight className="size-3 -rotate-45" />
          </Link>
        </div>
        <div className="pl-6 font-display text-sm">
          <p className="text-secondary">{details.description}</p>
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                height: 0,
                //   width: 0,
                opacity: 0,
                filter: "blur(4px)",
                y: -10,
              }}
              animate={{
                height: "auto",
                width: "auto",
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background hidden md:block p-1 rounded-lg border border-border border-dashed absolute right-0 top-0 z-10 translate-x-1/2"
            >
              <Image
                src={details.src}
                alt={`${details.name} preview`}
                width={720}
                height={720}
                className="h-auto rounded-sm w-55"
              />
              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="text-xs font-display text-secondary pt-1"
              >
                {`${details.name} Preview`}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};
