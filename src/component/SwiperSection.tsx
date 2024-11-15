import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ButtonNextSwiper from "./CustomSwiper/ButtonNextSwiper";
import ButtonPrevSwiper from "./CustomSwiper/ButtonPrevSwiper";

const SwiperPage = () => {
  return (
    <>
      <div data-aos="zoom-in-down" className="container flex justify-center items-center relative">
        {/* Hình ảnh trái */}
        <Image
          src={"/image/animation/Ball3.svg"}
          alt="BallLeft Image"
          width={80}
          height={80}
          className="relative -mr-4 left-1 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
        />

        {/* Nền gradient dài */}
        <div className="flex justify-center items-center w-full max-w-[500px] mt-20 relative z-10">
          <div className="relative rounded w-full h-16 bg-gradient-red-transparent z-10">
            {/* Màu 2 trên */}
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded bg-gradient-orange-transparent z-20">
              <div className="flex justify-center items-center h-full">
                <span className="text-[24px] font-ibm font-bold text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                  Latest news
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hình ảnh phải */}
        <Image
          src={"/image/animation/Ball2.svg"}
          alt="Balloon Image"
          width={80}
          height={80}
          className="relative -ml-4 -right-2 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px]"
        />
      </div>

      <div data-aos="fade-right" className="container w-full mx-auto p-10 relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            650: {
              slidesPerView: 3,
            },
            960: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="swiper-container"
        >
          {slidesData.map(({ id, title, image }) => (
            <SwiperSlide
              key={id}
              className="flex flex-col items-center container py-5 bg-gradient-gray rounded-xl border-2 border-gray-300 min-h-[320px]"
            >
              <Image
                src={image}
                alt={title}
                width={250}
                height={122}
                className="object-cover rounded-xl"
              />
              <h2 className="mt-4 text-[15px] font-orbitron font-bold">
                {title}
              </h2>

              <div className="flex flex-col md:flex-row gap-5 md:gap-5 justify-between items-center w-full mt-4">
                <span className="font-orbitron">Yesterday</span>
                <button className="flex items-center px-4 py-2 rounded-xl bg-gradient-bg border-2 border-gradient-button">
                  Read Now <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều khiển tùy chỉnh */}
        <ButtonPrevSwiper />
        <ButtonNextSwiper />
      </div>
    </>
  );
};

export default SwiperPage;

const slidesData = [
  {
    id: 1,
    title: "Flare Network Welcomes Cutting-Edge DeFi Hub SparkDEX",
    image: "/image/image-1.png",
  },
  {
    id: 2,
    title: "WUFFI All-In-One Coin Taps into Social Mining Adventure on TON",
    image: "/image/image-2.png",
  },
  {
    id: 3,
    title:
      "Rebel Cars Now Boasts a True CGI NFT Asset Marketplace and RC Token",
    image: "/image/image-3.png",
  },
  {
    id: 4,
    title: "DappRadar Now Tracks Dapps on Bahamut",
    image: "/image/image-4.png",
  },
  {
    id: 5,
    title: "WUFFI All-In-One Coin Taps into Social Mining Adventure on TON",
    image: "/image/image-2.png",
  },
];
