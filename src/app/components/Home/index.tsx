import { Container } from "../container";
import { DottedBlocks } from "../design-blocks";
import { DottedLine } from "../dotted-line";
import { PillDesign } from "../pill";
import { ThemeToggle } from "../theme-toggle";
import { Description } from "./description";
import { Header } from "./header";
import { Socials } from "./socials";

export const Home = () => {
  return (
    <Container className="h-screen" border={true}>
      <DottedBlocks className="w-full h-60" />
      <DottedLine />
      <Header />
      <Description />
      <Socials />
      <DottedLine />
      {/* <DottedBlocks className="w-full h-60" /> */}
    </Container>
  );
};
