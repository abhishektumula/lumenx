import React from "react";

export const JourneyCards = ({
  heading,
  children,
}: {
  heading: string;
  children: string[];
}) => {
  return (
    <div className="w-full flex flex-col gap-2 p-1 md:p-2">
      <div className="w-full flex items-center justify-start gap-4">
        <div className="h-2 w-2 rounded-full bg-border " />
        <p className="text-md font-display text-primary font-medium">
          {heading}
        </p>
      </div>
      <div className="flex items-start justify-start gap-4 pl-6">
        <div className="flex flex-col justify-start items-start ">
          {children.map((each, index) => (
            <p
              className="text-md font-display max-w-2xl py-1 text-secondary"
              key={index}
            >
              {each}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
