// components/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide #1 */}
        <SwiperSlide>
          <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl">
            Slide 1
          </div>
        </SwiperSlide>

        {/* Slide #2 */}
        <SwiperSlide>
          <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl">
            Slide 2
          </div>
        </SwiperSlide>

        {/* Slide #3 */}
        <SwiperSlide>
          <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;