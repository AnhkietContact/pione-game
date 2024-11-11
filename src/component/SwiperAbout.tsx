"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/swiperCustom.module.css"; // Import CSS Module

const SwiperAbout = () => {
  const slides = [
    { id: 1, image: "/image/about-1.png" },
    { id: 2, image: "/image/about-2.png" },
    { id: 3, image: "/image/about-3.png" },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.swiperPagination}`,
        }}
        modules={[Autoplay, Pagination]}
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

      {/* Pagination mặc định được Swiper tự động tạo ra */}
      <div className={`${styles.swiperPagination} swiper-pagination`}></div>
      {/* Biểu tượng Pause ở góc dưới bên trái, nằm trên swiper */}
      <div className="absolute -bottom-[25px] -left-[40px]  shadow-[0_0px_15px_5px_rgba(255,255,255,0.8)] rounded-xl z-10">
        <Image
          src="/image/Pause.png"
          alt="Small Icon"
          width={120}
          height={120}
          className=""
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default SwiperAbout;
