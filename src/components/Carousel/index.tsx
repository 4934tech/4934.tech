// components/index.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const slides = [
    { id: 1, content: "Slide 1", color: "bg-blue-500" },
    { id: 2, content: "Slide 2", color: "bg-green-500" },
    { id: 3, content: "Slide 3", color: "bg-purple-500" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto lg:px-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.color} h-64 flex items-center justify-center text-white font-bold text-2xl sm:rounded-3xl shadow-md`}
            >
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;