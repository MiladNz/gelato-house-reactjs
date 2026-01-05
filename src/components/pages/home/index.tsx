import type { JSX } from "react";
import type React from "react";
import AcceptanceBanner from "src/components/base/acceptanceBanner";
import Slider from "src/components/base/slider";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <AcceptanceBanner />
      <Slider
        slidesPerView={1}
        slides={[
          {
            id: 1,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/0zajnqxa.0mj.jpg",
            alt: "gelato",
          },
          {
            id: 2,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/nkkznvye.qgx.jpg",
            alt: "gelato",
          },
          {
            id: 3,
            src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/g3t3m311.vf5.jpg",
            alt: "gelato",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
