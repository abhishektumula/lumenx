import { Container } from "../container";
import { HomeDescription } from "./description";
import { HeaderTitle } from "./header";
import { Socials } from "./socials";
import { DottedBlock } from "../dotted-block";
import { Experience } from "../experience";
import { Labs } from "../lab";

export const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white overflow-hidden"
    >
      <Container className="min-h-[200vh]" border={false}>
        <DottedBlock className="w-full h-60" />
        {/* <DottedLine /> */}
        <HeaderTitle />
        <HomeDescription />
        <Socials />
        <Experience />
        <Labs />
        {/* <DottedLine /> */}
        {/* <DottedBlocks className="w-full h-60" /> */}
      </Container>
    </div>
  );
};
