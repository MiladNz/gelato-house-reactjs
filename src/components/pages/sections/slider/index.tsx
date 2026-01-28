import type React from "react";
import type { JSX } from "react";
import ImageSlider from "src/components/base/imageSlider";

export const Slider: React.FC = (): JSX.Element => {
  return (
    <ImageSlider
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
  );
};
