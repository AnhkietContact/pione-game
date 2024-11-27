"use client";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Import đúng kiểu Swiper từ thư viện swiper

function ButtonNextSwiper() {
  const swiper = useSwiper();
  // Định nghĩa rõ kiểu của swiperInstance là SwiperType từ swiper
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiper) {
      setSwiperInstance(swiper);
    }
  }, [swiper]);

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext(); // Bây giờ TypeScript biết swiperInstance có phương thức slideNext
    }
  };

  return (
    <div
      className="absolute top-[45%] right-0 z-[1] translate-x-[-3px] shadow-gray w-7 h-7 rounded-full 
                 justify-center items-center font-bold cursor-pointer transition duration-300 select-none hidden sm:flex"
      onClick={handleNext} // Sử dụng handleNext thay vì trực tiếp gọi swiper.slideNext()
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

export default ButtonNextSwiper;
