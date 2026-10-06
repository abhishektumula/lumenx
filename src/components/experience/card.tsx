"use client";
import { IconCode, IconLayoutNavbarExpandFilled } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { PillDesign } from "../pill";
import { experience_type } from ".";

export const ExperienceCard = ({ details }: { details: experience_type }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className="w-full p-2 flex flex-col hover:bg-neutral-300/20 dark:hover:bg-neutral-700/20 rounded-md"
      onClick={() => setShow(!show)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <div className="md:h-2 md:w-2 h-1 w-1 rounded-full bg-border" />
          <p className="font-display font-medium text-md md:text-lg text-primary">
            {details.name}
          </p>
        </div>
        <IconLayoutNavbarExpandFilled
          className={`size-4 text-secondary ${show ? "rotate-180" : ""} transition duration-600`}
        />
      </div>
      <div className="mt-2 w-full flex items-center justify-between cursor-pointer ">
        <div className="flex items-center justify-start gap-4">
          <div className="rounded-md border border-border border-dashed">
            <IconCode className="size-5 text-secondary" />
          </div>
          <p className="font-display font-medium text-sm md:text-base text-primary">
            {details.title}
          </p>
        </div>
        <p className="font-display font-medium text-xs md:text-sm text-primary">
          {details.date}
        </p>
      </div>
      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            key="description"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className=""
          >
            <motion.p
              initial={{ y: -6, filter: "blur(4px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              exit={{ y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pt-2 font-display text-xs md:text-sm text-secondary pl-10"
            >
              {details.description}
            </motion.p>
            <div className="w-full flex items-center justify-start flex-wrap gap-2 pl-10 pt-2">
              {details.skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 0, y: -10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + 0.02 * index }}
                >
                  <PillDesign data={item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
