import { Container } from "../container";
import { DottedBlock } from "../dotted-block";
import { Header } from "../Home/header";
import { JourneyCards } from "./cards";
import { JourneyDesc } from "./description";

export const JourneySection = () => {
  const details: { heading: string; children: string[] }[] = [
    {
      heading: "2026 - Still figuring out",
      children: [
        "Still building, still experimenting, still going down random rabbit holes. The stack keeps changing, but the interesting part hasn't: build something, break it, understand why, and build it better.",
      ],
    },
    {
      heading: "2025 - The Grind",
      children: [
        "Started working with cloud and DevOps. Learned how software actually gets from code to users — deployment, infrastructure, automation, CI/CD, monitoring, and everything happening between a user request and a running application.",
        "Started working with cloud and DevOps. Learned how software actually gets from code to users — deployment, infrastructure, automation, CI/CD, monitoring, and everything happening between a user request and a running application.",
      ],
    },
    {
      heading: "2024 - Build more seriously",
      children: [
        "Started exploring full-stack development, AI applications, developer tools, and increasingly larger projects. This was also when I started spending a lot more time understanding the systems behind the interfaces.",
      ],
    },
    {
      heading: "2023 - Data science and AI",
      children: [
        "Moved deeper into data science, machine learning, NLP, and computer vision. Built projects around recommendations, summarization, image understanding, and AI companions.Worked as a Data Science Intern, getting my first experience working with practical datasets, analysis, and machine learning.",
      ],
    },
    {
      heading: "2022 - Exploring everything",
      children: [
        "Started experimenting with web development, frontend, databases, and different kinds of projects. A lot of learning happened by simply building things and breaking them.",
      ],
    },
    {
      heading: "2021 - started my coding journey",
      children: [
        "Got into programming and started figuring out how software actually works. Python and Java became the languages I kept coming back to.",
      ],
    },
  ];
  return (
    <Container>
      <DottedBlock className="w-full h-60" />
      <Header>
        <h1>Journey</h1>
      </Header>
      <JourneyDesc />
      <div className="py-2">
        {details.map((each, index) => (
          <JourneyCards
            key={index}
            heading={each.heading}
            children={each.children}
          />
        ))}
      </div>
    </Container>
  );
};
