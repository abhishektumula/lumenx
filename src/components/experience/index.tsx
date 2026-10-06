import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconFileAnalytics,
  IconFileAnalyticsFilled,
  IconRobotFace,
} from "@tabler/icons-react";
import { Header } from "../Home/header";
import { pillReq } from "../pill";
import { ExperienceCard } from "./card";
import { ExpDescription } from "./description";

export type experience_type = {
  name: string;
  title: string;
  date: string;
  description: string;
  skills: pillReq[];
};

export const Experience = () => {
  const experience_details: experience_type[] = [
    {
      name: "Cognizant",
      title: "AWS Devops Engineer",
      date: "Mar 20206 - Jul 2026",
      description:
        "Learned how software actually gets from code to users. how requests reach servers, how applications are deployed and kept running, and how automation removes repetitive work. Along the way, I explored CI/CD, cloud infrastructure, monitoring, and the many things that need to happen behind the scenes so a user can simply do their work without errors or unnecessary waiting.",
      skills: [
        {
          title: "AWS",
          icon: <IconBrandAws className="size-4 text-secondary" />,
          href: "https://aws.amazon.com/",
          className: "px-2 py-1",
        },
        {
          title: "Git",
          icon: <IconBrandGit className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
        {
          title: "Docker",
          icon: <IconBrandDocker className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
        {
          title: "Python",
          icon: <IconBrandPython className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
      ],
    },
    {
      name: "HCL Tech",
      title: "Full stack developer intern",
      date: "Jul 20204 - Oct 2024",
      description:
        "Worked on front-end development, turning designs and ideas into interfaces that people could actually use. Learned how to work with real codebase, build responsive experiences, connect interfaces with APIs, and think beyond making something look good, making it feel right to use.",
      skills: [
        {
          title: "HTML",
          icon: <IconBrandHtml5 className="size-4 text-secondary" />,
          href: "https://aws.amazon.com/",
          className: "",
        },
        {
          title: "Java script",
          icon: <IconBrandJavascript className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
        {
          title: "React",
          icon: <IconBrandReact className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
        {
          title: "Type script",
          icon: <IconBrandTypescript className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
      ],
    },
    {
      name: "Slash Mark",
      title: "Data Science Intern",
      date: "Jul 20204 - Oct 2024",
      description:
        "Worked on practical data science projects, turning datasets into useful insights through data cleaning, exploration, analysis, and machine learning. Learned how to approach problems with data, experiment with different models, and turn raw information into something that can actually be understood and used.",
      skills: [
        {
          title: "Python",
          icon: <IconBrandPython className="size-4 text-secondary" />,
          href: "https://aws.amazon.com/",
          className: "",
        },
        {
          title: "Excel",
          icon: <IconFileAnalytics className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
        {
          title: "Power BI",
          icon: <IconFileAnalyticsFilled className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
        {
          title: "Machine Learning",
          icon: <IconRobotFace className="size-4 text-secondary" />,
          href: "https://github.com/",
          className: "",
        },
      ],
    },
  ];
  return (
    <div id="experience" className="w-full py-2 scroll-mt-8">
      <Header>
        <h1>Experience</h1>
      </Header>
      <ExpDescription />
      {experience_details.map((item, index) => (
        <ExperienceCard key={item.title} details={item} />
      ))}
    </div>
  );
};
