import { Block } from "../block";

export const Description = () => {
  return (
    <Block className="flex flex-col gap-2 md:gap-4">
      <p className="text-primary font-sans">
        I'm a software engineer by profession, curious by obsession.
      </p>
      <p className="text-primary font-sans">
        I spend most of my time writing code, tinkering with AI, exploring new
        tools, and learning why things break. I enjoy going down rabbit holes,
        whether it's a new framework, a weird bug, a cloud service, or an idea
        that I probably should have left alone
      </p>{" "}
      <p className="text-primary font-sans">
        I'm particularly interested in building things around AI, front-end,
        developer tools, and cloud infrastructure. Most of what I learn comes
        from actually building, breaking, fixing, and starting over.
      </p>{" "}
      <p className="text-primary font-sans">
        I share the things I build, learn, discover, and occasionally overthink
        on X / Twitter. Most of my work, experiments, and unfinished ideas live
        on GitHub.
      </p>
    </Block>
  );
};
