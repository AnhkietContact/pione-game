import React from "react";
import SwiperAbout from "../src/component/SwiperAbout";
import SwiperPage from "../src/component/SwiperSection";
import Balloon from "../src/component/animation/Balloon";
// import Balloon2 from "../src/component/animation/Balloon2";
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
      <section className="bg-About bg-no-repeat bg-cover">
        <div className="container">
          <div className=" flex justify-center items-center">
            <Image
              src={"/image/animation/Ball1.svg"}
              alt="BallLeft Image"
              width={120}
              height={120}
              className="relative -mr-6 -left-4"
            />
            <div className="flex justify-center items-center">
              {/* Màu 1 dưới */}
              <div className="relative rounded w-52 h-16 bg-gradient-red-transparent z-10">
                {/* Màu 2 trên */}
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded bg-gradient-orange-transparent z-20">
                  <div className="flex justify-center items-center h-full">
                    <span className="text-[24px] font-ibm font-bold text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                      About the game
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={"/image/animation/Ball2.svg"}
              alt="Balloon Image"
              width={100}
              height={100}
              className="relative -ml-6 -right-4"
            />
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col items-center space-y-6 p-6">
              <div className="relative">
                <div className="absolute -left-10 -top-16 z-30 flex flex-col items-center text-[32px] font-ibm font-bold gap-y-0">
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
                <div className="rounded-xl w-[800px] h-[250px] bg-gradient-left-to-right absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-16 z-10" />
                {/* Phần tử trên lớn hơn, có gradient và chứa chữ */}
                <div className="rounded-xl w-[800px] h-[250px] bg-gradient-right-to-left z-20 relative">
                  <div className="absolute inset-0 mt-14">
                    <div className=" text-[16px] px-4 ">
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
            <Balloon />
          </div>
        </div>
      </section>
      <section className="bg-bgImage-Sea bg-no-repeat bg-cover">
        <div className="container">
          <div className=" flex justify-center items-center">
            <Image
              src={"/image/animation/Ball1.svg"}
              alt="BallLeft Image"
              width={120}
              height={120}
              className=""
            />
            <div className=" rounded w-52 h-16 bg-gradient-right ">
              <div className="flex justify-center items-center h-full">
                <span className="text-[24px] font-ibm font-bold text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                  Game modes
                </span>
              </div>
            </div>
            <Image
              src={"/image/animation/Ball2.svg"}
              alt="Balloon Image"
              width={100}
              height={100}
              className="relative -ml-6 -right-4"
            />
          </div>
          <div className="relative flex items-center justify-between">
            <Image
              src={"/image/animation/Balloon-1.svg"}
              alt="Balloon Image"
              width={400}
              height={400}
              className="absolute animate-move-left left-0 z-10"
            />
            <div className="">
              <div className="flex items-center justify-center gap-20 relative z-20">
                <Image
                  src={"/image/animation/ElementKingdom.svg"}
                  alt="Balloon Image"
                  width={300}
                  height={300}
                  className=""
                />
                <Image
                  src={"/image/animation/ElementFulu.svg"}
                  alt="Balloon Image"
                  width={500}
                  height={500}
                  className=" mb-40"
                />
                <Image
                  src={"/image/animation/ElementJourney.svg"}
                  alt="Balloon Image"
                  width={300}
                  height={300}
                  className=""
                />
              </div>
            </div>
            <Image
              src={"/image/animation/Balloon-3.svg"}
              alt="Balloon Image"
              width={400}
              height={400}
              className="absolute animate-move-right right-0 z-10"
            />
          </div>
        </div>
      </section>
      <section className="bg-MenuStart bg-no-repeat bg-cover">
        <div className="container">
          <div className=" flex justify-center items-center">
            <Image
              src={"/image/animation/Ball1.svg"}
              alt="BallLeft Image"
              width={120}
              height={120}
              className="relative -mr-6 -left-4"
            />
            <div className="flex justify-center items-center">
              {/* Màu 1 dưới */}
              <div className="relative rounded w-52 h-16 bg-gradient-red-transparent z-10">
                {/* Màu 2 trên */}
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
              width={100}
              height={100}
              className="relative -ml-6 -right-4"
            />
          </div>
          <div className="flex flex-col items-center space-y-6 p-6">
            <div className="relative">
              <div className="absolute -left-5 -top-16 z-30 flex flex-col items-center text-[32px] font-ibm font-bold gap-y-0">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/image/animation/Balloon-4.svg"
                    alt="icon"
                    width={240}
                    height={180}
                  />
                  <span className="absolute font-ibm font-bold text-[24px] text-white drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                    TOKEN
                  </span>
                </div>
              </div>

              <div className="rounded-xl w-full h-[500px] bg-gradient-border z-20 relative flex justify-center items-center">
                <div className="px-5 py-10 flex justify-center gap-20">
                  {/* Coin và Arrow */}
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center ">
                      <Image
                        src="/image/coin/CoinPIO.svg"
                        alt="icon"
                        width={136}
                        height={132}
                      />
                      <span className="font-orbitron font-bold text-[24px] drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                        PIO
                      </span>
                    </div>
                    <Image
                      src="/image/coin/Arrow.svg"
                      alt="icon"
                      width={216}
                      height={70}
                    />
                    <Image
                      src="/image/coin/Coin.svg"
                      alt="icon"
                      width={155}
                      height={130}
                    />
                  </div>

                  {/* Gold Coin Description */}
                  <div className="relative py-10 px-5 rounded-xl w-[569px] bg-black bg-opacity-20 flex flex-col items-center">
                    <div className="absolute -top-16 left-0 flex flex-col items-center z-30">
                      <span className="font-ibm font-bold text-[64px] drop-shadow-[0_4px_4px_rgba(255,0,0,0.8)]">
                        Gold coin
                      </span>
                      <Image
                        src="/image/svg/thunder.svg"
                        alt="icon"
                        className="-mt-[40px]"
                        width={362}
                        height={98}
                      />
                    </div>
                    <span className="text-justify font-inter text-[16px] mt-10">
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
      <section className="bg-About2 bg-no-repeat bg-cover">
        <SwiperPage />
      </section>
      <section>
        <div>
          <div className="w-full max-w-[500px] h-16 bg-gradient-to-r from-[#FF0000] via-[#FF0000] to-[#4B052B] opacity-80 rounded-xl flex justify-center items-center">
            <span className="text-white text-xl font-semibold">
              Far more to explore
            </span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default HomePione;
