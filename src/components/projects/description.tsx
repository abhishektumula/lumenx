import { Block } from "@/components/block";

export const ProjDescription = () => {
  return (
    <Block className="flex flex-col gap-2 md:gap-4 font-display">
      <p className="text-primary">
        A collection of projects I've built over the years — some while
        learning, some for academics, and some just because I was curious enough
        to build them.
      </p>
      <p className="text-primary">
        Some of them are polished. Some aren't. Some probably won't make much
        sense to you.
      </p>
      <p className="text-primary">
        But every project taught me something I didn't know before. A new tool,
        a new way of thinking, a painful bug, or a lesson I probably wouldn't
        have learned any other way.
      </p>
      <p className="text-primary">
        Basically, a collection of things I built while figuring things out.
      </p>
    </Block>
  );
};
