import { Container } from "../container";
import { DottedBlock } from "../dotted-block";
import { Header } from "../Home/header";
import { ProjectCard } from "./card";
import { ProjDescription } from "./description";

export type proj_type = {
  title: string;
  desc: string;
  live: boolean;
  soon: boolean;
  href?: string;
  previewImage: string;
};

export const ProjectSection = () => {
  const proj_details: proj_type[] = [
    {
      title: "Saas Template",
      desc: "A premium, config-driven SaaS template built with Next.js 16, React 19, Tailwind CSS 4 and Motion, designed to sell on a marketplace. It includes a landing page, pricing with a comparison table, blog, changelog, auth screens, and a demo dashboard. The standout piece is an interactive hero canvas where you can drag workflow nodes and run the workflow. Other highlights are a ⌘K command palette, a black dark theme plus a light theme with a circular-reveal switch, and an integrations hub diagram. It also has smooth entry, exit and layout animations throughout, and respects reduced-motion settings.",
      live: true,
      soon: true,
      href: "https://abhishektumulasaas-template.vercel.app/",
      previewImage: "/saas-template.png",
    },
    {
      title: "Npm safe/nps",
      desc: "A safety-first package installer that shows package intel, dependencies, and security health before installation. Works across npm, pnpm, yarn, bun, and brew.",
      live: true,
      soon: true,
      previewImage: "/npm-safe.png",
      href: "https://npm-safe.chnetaji.com",
    },
    {
      title: "New Tech stack",
      desc: "A pre-configured full-stack starter with database, ORM, server actions, and essential tooling already wired up. Clone it, install, and start building.",
      live: false,
      soon: true,
      previewImage: "/no-preview.png",
    },

    {
      title: "Skills.AO",
      desc: "A collection of front-end and back-end skills focused on improving design taste, development workflows, productivity, and efficiency..",
      live: false,
      soon: true,
      previewImage: "/skill-ao.png",
    },
    {
      title: "Comet",
      desc: "An AI-powered voice agent that can make and handle phone calls, understand conversations in real time, and respond naturally. Built to explore what happens when AI moves beyond chat and into real conversations",
      live: false,
      soon: true,
      href: "https://github.com/abhishektumula/comet.git",
      previewImage: "/no-preview.png",
    },
    {
      title: "portfolio",
      desc: "A clean and customizable portfolio template for developers and engineers, built with thoughtful layouts, smooth interactions, and an emphasis on showing the work rather than the template.",
      soon: false,
      live: true,
      previewImage: "/no-preview.png",
    },
  ];

  return (
    <div
      id="project"
      className="w-full scroll-mt-8 dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white overflow-hidden"
    >
      <Container className="h-auto" border={false}>
        <DottedBlock className="w-full h-60" />
        <Header>
          <h1>Projects</h1>
        </Header>
        <ProjDescription />
        {proj_details.map((item, index) => (
          <ProjectCard key={index} details={item} />
        ))}
      </Container>
    </div>
  );
};
