import type { JSX } from "react";
import type React from "react";
import AcceptanceBanner from "src/components/base/acceptanceBanner";
import Container from "src/components/base/container";
import { Slider } from "../sections/slider";
import Information from "../sections/information";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <AcceptanceBanner />
      <Container>
        <Slider />
        <Information />
      </Container>
    </>
  );
};

export default HomePage;
