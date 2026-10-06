import { Header } from "../Home/header";
import { LabCard } from "./card";

export type lab_type = {
  name: string;
  description: string;
  src: string;
  href?: string;
};

export const Labs = () => {
  const lab_details: lab_type[] = [
    {
      name: "Formula 1 Lab",
      description:
        "Drive a Formula 1 car around your screen in this canvas-based browser game. Features arcade physics for drifting and donuts, tyre marks and particles, crash damage with pit-stop repairs, Web Audio engine sound, and customizable driver/car — built with Next.js, React, TypeScript, Canvas, and Tailwind.",
      src: "/lab-f1.png",
      href: "/projects",
    },
    {
      name: "KeyBoard Lab",
      description:
        "A full-screen, playable Mac keyboard in the browser — press any key to see it light up and hear it. Includes synth notes vs. typing-click modes via Web Audio, light/dark themes, white/black boards, adjustable backlight, fullscreen, and persisted settings — built with Next.js, React, TypeScript, and Web Audio API.",
      src: "/no-preview.png",
      href: "/#experience",
    },
  ];
  return (
    <div>
      <Header>
        <h1>Play Ground</h1>
      </Header>
      {lab_details.map((item, index) => (
        <LabCard details={item} />
      ))}
    </div>
  );
};
