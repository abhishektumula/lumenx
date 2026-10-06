import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandX,
} from "@tabler/icons-react";
import { PillDesign, pillReq } from "../pill";

export const Socials = () => {
  const details: pillReq[] = [
    {
      title: "X/ Twitter",
      icon: <IconBrandX className="size-4 text-secondary" />,
      href: "https://x.com/lumenxAO",
      className: "",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="size-4 text-secondary" />,
      href: "https://github.com/abhishektumula",
      className: "",
    },
    {
      title: "Medium",
      icon: <IconBrandMedium className="size-4 text-secondary" />,
      href: "https://medium.com/@dammmhmmm9",
      className: "",
    },
    {
      title: "GitHub Org",
      icon: <IconBrandGithub className="size-4 text-secondary" />,
      href: "https://github.com/tokens2bytes",
      className: "",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="size-4 text-secondary" />,
      href: "https://in.linkedin.com/in/tumulaabhishek?trk=people-guest_people_search-card",
      className: "",
    },
  ];
  return (
    <div className="w-full flex items-center justify-start flex-wrap gap-2 p-1 md:p-2">
      {details.map((each, index) => (
        <div key={each.title}>
          <PillDesign data={each} />
        </div>
      ))}
    </div>
  );
};
