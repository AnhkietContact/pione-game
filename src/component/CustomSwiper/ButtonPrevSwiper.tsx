import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Import đúng kiểu Swiper từ thư viện swiper

function ButtonPrevSwiper() {
  const swiper = useSwiper();
  // Định nghĩa rõ kiểu của swiperInstance là SwiperType từ swiper
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiper) {
      setSwiperInstance(swiper);
    }
  }, [swiper]);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev(); // Gọi phương thức slidePrev khi swiperInstance có giá trị
    }
  };

  return (
    <div
      className="absolute top-[45%] left-0 z-[1] translate-x-[3px] shadow-gray w-7 h-7 rounded-full 
                 justify-center items-center font-bold cursor-pointer transition duration-300 select-none hidden sm:flex"
      onClick={handlePrev} // Sử dụng handlePrev thay vì trực tiếp gọi swiper.slidePrev()
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}

export default ButtonPrevSwiper;
