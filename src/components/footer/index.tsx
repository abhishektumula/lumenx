import { Container } from "../container";
import { DottedBlock } from "../dotted-block";

export const Footer = () => {
  return (
    <div className="w-full">
      <Container>
        <DottedBlock className="w-full h-60" />
        <div className="w-full flex items-center justify-center h-auto py-12">
          <h1 className="text-5xl md:text-8xl font-signature text-foreground">
            Tumula Abhishek Aacharya.
          </h1>
        </div>
        <DottedBlock className="w-full h-40" />
      </Container>
    </div>
  );
};
