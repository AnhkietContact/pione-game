import React from "react";
import SwiperAbout from "../src/component/SwiperAbout";
import SwiperPage from "../src/component/SwiperSection";
import Balloon from "../src/component/animation/Balloon";
import FlyAnimate from "../src/component/animation/FlyRight";
import AnimateStart from "../src/component/animation/Start";
import MainLayout from "../src/layout/MainLayout";
import Image from "next/image";
import OrgariumCounter from "../src/component/OrgariumCounter";
import AccordionUsage from "../src/component/Accordion";
import SubscribeForm from "../src/component/Sub";
import Carousel from "../src/component/Carousel";
import Link from "next/link";

const HomePione = () => {
  return (
    <MainLayout>
      <section className="bg-bgImage-Game bg-no-repeat bg-cover min-h-screen ">
        <div className="container flex flex-col xl:flex-row items-center gap-10 xl:gap-0 xl:justify-between h-screen">
          <div data-aos="fade-right" className=" flex flex-col ">
            <div className="flex items-center justify-center space-x-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FF56F6]"></div>
                <p
                  className="text-center text-[48px] font-ibm font-bold px-16 py-5 drop-shadow-[0_4px_4px_rgba(255,255,255,5)]
                   text-transparent bg-clip-text bg-gradient-to-r from-customYellow to-customRed"
                >
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
            <div className="flex gap-2 md:gap-20 flex-row justify-center mt-10">
              <Link href="/">
                <Image
                  src="/image/icon/GooglePlay.svg"
                  width="150"
                  height="150"
                  alt=""
                />
              </Link>
              <Link href="/">
                <Image
                  src="/image/icon/AppStore.svg"
                  width="150"
                  height="150"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div data-aos="fade-left">
            <SwiperAbout />
          </div>
        </div>
      </section>
      <section id="about" className="bg-About bg-no-repeat bg-cover">
        <div className="container">
          <div
            data-aos="zoom-in-up"
            className="flex justify-center items-center"
          >
            <Image
              src={"/image/animation/Ball1.svg"}
              alt="BallLeft Image"
              width={80}
              height={80}
              className="relative -mr-4 left-1 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
            />
            <div className="flex justify-center items-center">
              {/* Màu 1 dưới */}
              <div className="relative rounded w-36 h-12 sm:w-40 sm:h-14 md:w-44 md:h-16 lg:w-52 lg:h-16 bg-gradient-red-transparent z-10">
                {/* Màu 2 trên */}
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded bg-gradient-orange-transparent z-20">
                  <div className="flex justify-center items-center h-full">
                    <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-ibm font-bold text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                      About the game
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={"/image/animation/Ball2.svg"}
              alt="Balloon Image"
              width={80}
              height={80}
              className="relative -ml-4 -right-2 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center md:justify-between mt-10">
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center space-y-6"
            >
              <div className="relative">
                <div
                  className={`absolute -left-10 -top-16 z-30 flex flex-col items-center text-[32px] font-ibm font-bold gap-y-0`}
                >
                  <span className=" font-ibm font-bold text-[64px] drop-shadow-[0_4px_4px_rgba(255,0,0,20)]">
                    About
                  </span>
                  <Image
                    src="/image/svg/thunder.svg"
                    alt="icon"
                    className="-mt-[60px]"
                    width={362}
                    height={98}
                  />
                </div>
                {/* Phần tử dưới với gradient */}
                <div className=" rounded-xl min-w-[320px] md:w-[800px] min-h-[350px] md:h-[250px] bg-gradient-left-to-right absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-16 z-10" />
                {/* Phần tử trên lớn hơn, có gradient và chứa chữ */}
                <div className="rounded-xl min-w-[320px] md:w-[800px] min-h-[350px] md:h-[250px] bg-gradient-right-to-left z-20 relative">
                  <div className="absolute inset-0 mt-14">
                    <div className="font-inter text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] px-4 ">
                      <p>
                        PIONE GAME is a blockchain game with a
                        &quot;play-to-earn&quot; model, where players can
                        participate in in-game activities and receive tokens as
                        rewards. By completing missions and joining events,
                        players not only enjoy the game but also have the
                        opportunity to earn tokens that can be traded or used
                        within the game’s ecosystem. With blockchain technology,
                        PIONE GAME ensures transparency and digital asset
                        ownership for users, providing a trustworthy experience
                        in the decentralized gaming world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in">
              <Balloon />
            </div>{" "}
          </div>
        </div>
      </section>
      <section id="modes" className="bg-bgImage-Sea bg-no-repeat bg-cover">
        <div className="container">
          <div
            data-aos="zoom-in-down"
            className=" flex justify-center items-center"
          >
            <Image
              src={"/image/animation/Ball1.svg"}
              alt="BallLeft Image"
              width={80}
              height={80}
              className="relative -mr-4 left-1 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
            />
            <div className="rounded w-52 h-16 bg-gradient-right ">
              <div className="flex justify-center items-center h-full">
                <span className="text-[24px] font-ibm font-bold text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                  Game modes
                </span>
              </div>
            </div>
            <Image
              src={"/image/animation/Ball2.svg"}
              alt="Balloon Image"
              width={80}
              height={80}
              className="relative -ml-4 -right-2 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className=" relative flex justify-center items-center">
            <Image
              src={"/image/animation/Balloon-1.svg"}
              alt="Balloon Image"
              width={200}
              height={200}
              className=" absolute animate-fade-in-haftLeftReimagined w-[150px] h-[150px] md:w-[200px] md:h-[200px] z-10"
            />

            <div data-aos="zoom-in-up" className="z-20">
              <Carousel />
            </div>
            <Image
              src={"/image/animation/Balloon-3.svg"}
              alt="Balloon Image"
              width={200}
              height={200}
              className="absolute animate-fade-in-haftRightReimagined w-[150px] h-[150px] md:w-[200px] md:h-[200px] z-10"
            />
          </div>
        </div>
      </section>
      <section id="token" className="bg-MenuStart bg-no-repeat bg-cover">
        <div className="container">
          <div className="flex justify-center items-center">
            <Image
              src={"/image/animation/Ball1.svg"}
              alt="BallLeft Image"
              width={80}
              height={80}
              className="relative -mr-4 left-1 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
            />
            <div className="flex justify-center items-center">
              <div className="relative rounded w-52 h-16 bg-gradient-red-transparent z-10">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded bg-gradient-orange-transparent z-20">
                  <div className="flex justify-center items-center h-full">
                    <span className="text-[24px] font-ibm font-bold text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                      TOKEN
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={"/image/animation/Ball2.svg"}
              alt="Balloon Image"
              width={80}
              height={80}
              className="relative -ml-4 -right-2 z-30 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="flex flex-col items-center space-y-6 p-6">
            <div className="relative mt-20">
              <div className="absolute -left-5 -top-16 z-30 flex flex-col items-center text-[32px] font-ibm font-bold gap-y-0">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/image/animation/Balloon-4.svg"
                    alt="icon"
                    width={150}
                    height={180}
                    className="animate-floating"
                  />
                  <span className="absolute font-ibm font-bold text-[24px] text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                    TOKEN
                  </span>
                </div>
              </div>
              <div className="rounded-xl w-full h-[680px] md:h-[800px] xl:h-[500px] bg-gradient-border z-20 relative flex justify-center items-center">
                <div className="px-4 py-6 md:px-10 md:py-10 flex flex-col lg:flex-row items-center  justify-center gap-10 md:gap-20">
                  {/* Coin và Arrow */}
                  <div className="flex justify-center items-center mt-10 space-x-2 md:space-x-4">
                    <div
                      data-aos="flip-left"
                      className="flex flex-col items-center"
                    >
                      <Image
                        src="/image/coin/CoinPIO.svg"
                        alt="icon"
                        width={136}
                        height={132}
                        className="w-[70px] animate-rotate-y sm:w-[100px] md:w-[120px] lg:w-[155px]"
                      />
                    </div>
                    <Image
                      src="/image/coin/Arrow.svg"
                      alt="icon"
                      width={120}
                      height={50}
                      className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[216px]"
                    />
                    <div data-aos="flip-left">
                      <Image
                        src="/image/coin/Coin.svg"
                        alt="icon"
                        width={100}
                        height={100}
                        className="w-[70px] sm:w-[100px] md:w-[120px] lg:w-[155px]"
                      />
                    </div>
                  </div>

                  {/* Gold Coin Description */}
                  <div
                    data-aos="zoom-in-right"
                    className="relative py-6 px-4 mt-5 md:py-10 md:px-5 rounded-xl w-full sm:w-[300px] md:w-[400px] lg:w-[569px] bg-black bg-opacity-20 flex flex-col items-center"
                  >
                    <div className="absolute -top-12 left-0 flex flex-col items-center z-30">
                      <span className="font-ibm font-bold text-[32px] sm:text-[48px] md:text-[64px] drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                        Gold coin
                      </span>
                      <Image
                        src="/image/svg/thunder.svg"
                        alt="icon"
                        className="-mt-[20px] sm:-mt-[30px] md:-mt-[40px]"
                        width={240}
                        height={60}
                      />
                    </div>
                    <span className="md:text-justify font-inter text-[14px] sm:text-[16px] mt-10">
                      In PIONE GAME, players can easily exchange PIO Coins for
                      Gold Coins to participate in exciting activities and
                      improve their fishing efficiency. PIO Coin is the main
                      currency in the game, earned through missions and special
                      events. Converting it to Gold Coins allows players to
                      purchase weapons, upgrade equipment, and unlock unique
                      skills to conquer underwater challenges. This feature not
                      only enriches the fishing experience but also adds value
                      to PIO Coin within the PIONE GAME ecosystem.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="latest" className="bg-About2 bg-no-repeat bg-cover">
        <AnimateStart />
        <SwiperPage />
        <FlyAnimate />
      </section>
      <section className="mt-10">
        <div id="discover" className="container">
          <div
            data-aos="fade-right"
            className="max-w-[400px] py-3 px-6 bg-Red-Opacity rounded-xl shadow-lg"
          >
            <span className=" font-orbitron text-xl font-semibold">
              Far more to explore
            </span>
          </div>
          <div data-aos="fade-right" className="mt-5 max-w-[500px]">
            <span className="font-inter text-[20px]">
              Peerless, actionable, multichain data and coverage on the widest
              selection of dapps, NFT collections, DeFi projects and more. View
              top collections, trending dapps, trader volume and maybe, just
              maybe, uncover the next blockchain unicorn.
            </span>
          </div>
          <div className="relative z-20">
            <OrgariumCounter />
            {/* <Image
              src={"/image/animation/Balloon-3.svg"}
              alt="BallLeft Image"
              width={200}
              height={247}
              className="animate-fade-in-haftRightReimagined absolute bottom-0 right-0 transform translate-y-1/3 translate-x-1/3 z-10"
            /> */}
          </div>
        </div>
        <div id="portfolio" className="container mt-20">
          <div
            data-aos="fade-left"
            className="flex justify-end ml-auto max-w-[400px] py-3 px-6 bg-Red-Opacity-Right rounded-xl shadow-lg"
          >
            <span className="flex justify-end font-orbitron text-xl font-semibold">
              You&apos;re in control
            </span>
          </div>
          <div data-aos="fade-right" className="max-w-[650px]">
            <span className="font-inter text-[20px] ">
              Effectively manage your digital assets, swap, buy, sell, (even
              take a little inspiration from the famous) all from within your
              PIONE GAME Portfolio.
            </span>
          </div>
          <button
            data-aos="zoom-in-up"
            className="rounded-xl bg-gradient-bg flex justify-center items-center p-4 mt-10"
          >
            <span className="text-center font-orbitron font-bold text-[13px]">
              Go to portfolio app
            </span>
          </button>
        </div>
        <div className="bg-MenuStart bg-cover">
          <div className="container  flex items-center flex-col md:flex-row justify-between">
            {/* Phần Accordion */}
            <div className="md:w-1/2 mt-10 h-full flex items-center justify-center">
              <AccordionUsage />
            </div>

            {/* Phần hình ảnh */}
            <div className="w-1/2 relative h-full flex items-center justify-center">
              <Image
                src={"/image/animation/Balloon-5.svg"}
                alt="BallLeft Image"
                width={698}
                height={614}
                className="animate-floating "
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-20">
          <SubscribeForm />
        </div>
      </section>
    </MainLayout>
  );
};
export default HomePione;
