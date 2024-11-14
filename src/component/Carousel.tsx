import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const imageData = [
  "/image/ElementFulu.png",
  "/image/ElementJourney.png",
  "/image/ElementKingdom.png",
  "/image/ElementMermaid.png",
  "/image/ElementOcean.png",
];

const CustomSwiper = () => {
  return (
    <div className="w-full max-w-5xl overflow-hidden">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}                         
      >
        {imageData.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Div bao quanh ảnh với hiệu ứng khi hover */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                index === 2 ? "scale-110" : "scale-100"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={800} // Chắc chắn là kích thước cố định cho tất cả ảnh
                height={600} // Đảm bảo chiều cao của ảnh là 500px
                // layout="intrinsic"
                className="w-[800px] h-[600px] object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
