import type { JSX } from "react";
import type React from "react";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";
// @ts-ignore: Ignore missing types of swiper
import "swiper/css/effect-fade";
// @ts-ignore: Ignore missing types for swiper styles
import "swiper/css/navigation";
// @ts-ignore: Ignore missing types for swiper styles
import "swiper/css/pagination";

import { ArrowLeft } from "src/components/icons/ArrowLeft";
import { ArrowRight } from "src/components/icons/ArrowRight";

type Slides = {
  id: number;
  src: string;
  alt?: string;
};

type ImageSliderProps = SwiperProps & {
  slides: Slides[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  ...props
}): JSX.Element => {
  return (
    <div className="relative">
      <button
        id="swiper-button-prev-custom"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-primary-500 p-2 text-white">
        <ArrowLeft />
      </button>
      <button
        id="swiper-button-next-custom"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-primary-500 p-2 text-white">
        <ArrowRight />
      </button>
      <Swiper
        {...props}
        modules={[EffectFade, Navigation, Pagination]}
        pagination={{ clickable: true }}
        effect="fade"
        navigation={{
          prevEl: "#swiper-button-prev-custom",
          nextEl: "#swiper-button-next-custom",
        }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <img src={slide.src} alt={slide.alt} width="100%" height={300} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
