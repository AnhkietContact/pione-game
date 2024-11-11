import React from "react";
import SwiperAbout from "../src/component/SwiperAbout";
import Balloon from "../src/component/animation/Balloon";
import MainLayout from "../src/layout/MainLayout";
import Image from "next/image";

const HomePione = () => {
  return (
    <MainLayout>
      <section className="bg-bgImage-Game bg-no-repeat bg-cover min-h-screen mt-20">
        <div className="container flex flex-col xl:flex-row items-center justify-between h-screen">
          <div className="flex flex-col ">
            <div className="flex items-center justify-center space-x-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FF56F6]"></div>
                <p className="text-center text-[48px] font-ibm font-bold px-16 py-5 text-transparent bg-clip-text bg-gradient-to-r from-customYellow to-customRed">
                  PIONE GAME
                </p>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FF56F6]"></div>
              </div>
            </div>
            <span className="font-inter text-center max-w-[500px] mt-2">
              Pione Game is an engaging online fish shooting game where players
              use a gun to hunt various fish species under the ocean, each with
              unique characteristics and reward values.
            </span>
            <div className="flex flex-col xl:gap-20 xl:flex-row mt-10">
              <Image
                src="/image/icon/GooglePlay.svg"
                width="150"
                height="150"
                alt=""
              />
              <Image
                src="/image/icon/AppStore.svg"
                width="150"
                height="150"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <SwiperAbout />
          </div>
        </div>
      </section>
      <section className="bg-About">
        <div className="flex justify-center items-center space-x-2">
          <Image
            src={"/image/animation/Ball1.svg"}
            alt="BallLeft Image"
            width={120}
            height={120}
            className=""
          />
          <div className="rounded-sm bg-[#FF5C00] px-4 py-2">
            <span className="text-[24px] font-ibm font-bold drop-shadow-red">
              About the game
            </span>
          </div>
          <Image
            src={"/image/animation/Ball2.svg"}
            alt="Balloon Image"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center space-y-6 p-6">
            {/* Phần tử "About" nằm trên thanh */}
            <div className="relative flex items-center text-[32px] font-ibm font-bold text-black space-x-2">
              <span>About</span>
              <Image
                src="/path/to/your/image.svg"
                alt="icon"
                className="w-6 h-6"
                width={50}
                height={50}
              />
            </div>

            {/* Mô tả về game */}

            {/* Chồng 2 phần tử với gradient và rounded-xl */}
            <div className="relative">
              {/* Phần tử dưới với gradient */}
              <div className="rounded-xl w-[800px] h-[500px] bg-gradient-left-to-right absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-16 z-10" />

              {/* Phần tử trên lớn hơn, có gradient và chứa chữ */}
              <div className="rounded-xl w-[800px] h-[500px] bg-gradient-right-to-left z-20 relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-center text-[16px] px-4 ">
                    <p>
                      PIONE GAME is a blockchain game with a &quot;play-to-earn&quot;
                      model, where players can participate in in-game activities
                      and receive tokens as rewards. By completing missions and
                      joining events, players not only enjoy the game but also
                      have the opportunity to earn tokens that can be traded or
                      used within the game’s ecosystem. With blockchain
                      technology, PIONE GAME ensures transparency and digital
                      asset ownership for users, providing a trustworthy
                      experience in the decentralized gaming world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Balloon />
        </div>
      </section>
    </MainLayout>
  );
};
export default HomePione;
