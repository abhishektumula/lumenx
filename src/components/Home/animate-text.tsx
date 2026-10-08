"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export const AnimateText = () => {
  const [item, setItem] = useState<number>(0);
  const name: string[] = [
    "Abhishek",
    "abhishektumual",
    "software engineer",
    "design engineer",
  ];
  const totalCount = name.length;

  useEffect(() => {
    const time = setInterval(() => {
      setItem((prev) => (prev + 1) % totalCount);
    }, 5000);
    return () => clearInterval(time);
  }, [totalCount]);

  return (
    <div className="flex">
      <AnimatePresence mode="wait">
        {name[item].split("").map((each, index) => (
          <motion.p
            key={each + index}
            initial={{ opacity: 0, filter: "blur(4px)", x: -10 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            exit={{
              opacity: 0,
              x: 10,
              filter: "blur(2px)",
              transition: {
                duration: 0.3,
                delay: 0.02 * index,
              },
            }}
            transition={{
              duration: 0.3,
              delay: 0.02 * index,
            }}
            className="font-display text-xl md:text-2xl text-primary"
          >
            {each}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};
