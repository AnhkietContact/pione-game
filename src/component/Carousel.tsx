import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const imageData = [
  "/image/ElementFulu.png",
  "/image/ElementJourney.png",
  "/image/ElementKingdom.png",
  "/image/ElementMermaid.png",
  "/image/ElementOcean.png",
];

const CustomSwiper = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const updateSlideScale = () => {
        const slides = swiperInstance.slides;
        const activeIndex = swiperInstance.activeIndex;

        slides.forEach((slide: HTMLElement, index: number) => {
          slide.style.transition = "transform 0.3s ease";
          if (index === activeIndex) {
            slide.style.transform = "scale(1.2)"; // Phóng to slide giữa
          } else {
            slide.style.transform = "scale(1)"; // Thu nhỏ các slide khác
          }
        });
      };

      // Gắn sự kiện khi slide thay đổi
      swiperInstance.on("slideChangeTransitionStart", updateSlideScale);

      // Gắn hiệu ứng ban đầu
      updateSlideScale();
    }
  }, []);

  return (
    <div className="w-full max-w-xs lg:max-w-5xl overflow-hidden relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {imageData.map((src, index) => (
          <SwiperSlide
            key={index}
            className="transition-all duration-300 ease-in-out mt-20 md:mt-0"
          >
            <div>
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={550}
                height={620}
                className="w-[300px] h-[300px] md:w-[550px] md:h-[620px] object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image Menu Bar - Chắc chắn dài như swiper */}
      <div className="absolute -bottom-[220px] left-0 w-full z-0">
        <Image
          src={"/image/menu-bar.png"}
          alt="Menu Bar"
          width={1920} // Đảm bảo chiều rộng hình ảnh phù hợp với màn hình
          height={620}
          className="w-full h-[620px] hidden lg:block object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default CustomSwiper;
