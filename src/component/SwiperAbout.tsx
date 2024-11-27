"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const SwiperAbout = () => {
  const slides = [
    { id: 1, image: "/image/about-1.png" },
    { id: 2, image: "/image/about-2.png" },
    { id: 3, image: "/image/about-3.png" },
  ];

  return (
    <div className="px-10 relative w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl ">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                layout="responsive"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Biểu tượng Pause ở góc dưới bên trái, thay đổi kích thước theo responsive */}
      <div className="ml-10 xl:ml-0 absolute -bottom-5 -left-8 shadow-[0_0px_15px_5px_rgba(255,255,255,0.8)] rounded-xl z-10">
        <Image
          src="/image/Pause.png"
          alt="Small Icon"
          width={80} // Kích thước icon thay đổi theo màn hình
          height={80}
          className="md:w-16 md:h-[50px] lg:w-20 lg:h-14 xl:w-24 xl:h-14"
        />
      </div>
    </div>
  );
};

export default SwiperAbout;
