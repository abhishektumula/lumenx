import { Container } from "../container";
import { HomeDescription } from "./description";
import { HeaderTitle } from "./header";
import { Socials } from "./socials";
import { DottedBlock } from "../dotted-block";
import { Experience } from "../experience";
import { Labs } from "../lab";
import { QuoteSection } from "../quote";

export const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full dark:selection:bg-orange-400 dark:selection:text-black selection:bg-orange-600 selection:text-black overflow-hidden"
    >
      <Container className="h-auto" border={false}>
        <DottedBlock className="w-full h-60" />
        <HeaderTitle />
        <HomeDescription />
        <Socials />
        <Experience />
        <Labs />
        <QuoteSection />
      </Container>
    </div>
  );
};
