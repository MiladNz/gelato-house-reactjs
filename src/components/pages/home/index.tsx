import type { JSX } from "react";
import type React from "react";
import AcceptanceBanner from "src/components/base/acceptanceBanner";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <AcceptanceBanner />
    </div>
  );
};

export default HomePage;
