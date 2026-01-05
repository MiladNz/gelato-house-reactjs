import type { JSX } from "react";
import type React from "react";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/swiper.css";
//@ts-ignore: Ignore missing types of swiper
import "swiper/css/effect-fade";
// @ts-ignore: Ignore missing types for swiper styles
import "swiper/css/navigation";

type Slides = {
  id: number;
  src: string;
  alt?: string;
};

type SliderProps = SwiperProps & {
  slides: Slides[];
};

const Slider: React.FC<SliderProps> = ({ slides, ...props }): JSX.Element => {
  return (
    <div className="relative">
      <button
        id="swiper-button-prev-custom"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-primary-500 p-2 text-white">
        Prev
      </button>
      <button
        id="swiper-button-next-custom"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-primary-500 p-2 text-white">
        Next
      </button>
      <Swiper
        {...props}
        modules={[EffectFade, Navigation]}
        effect="fade"
        navigation={{
          prevEl: "#swiper-button-prev-custom",
          nextEl: "#swiper-button-next-custom",
        }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <img src={slide.src} alt={slide.alt} width="80%" height={300} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
