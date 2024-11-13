import Image from "next/image";
import Counter from "./Counter";
const OrgariumCounter = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 xl:flex xl:flex-row xl:justify-center gap-20 mt-10">
      <div className="rounded-xl bg-white-opacity-10 px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-bold font-orbitron text-[48px] ">
              <Counter end={16739} />
            </h2>
            <p className="font-bold font-orbitron text-[16px]">Customers</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white-opacity-10  px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-bold font-orbitron text-[48px] ">
              <Counter end={49973} />
            </h2>
            <p className="font-bold font-orbitron text-[16px]">Transaction</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-xl bg-white-opacity-10 px-10 min-h-[200px] flex items-center justify-center relative z-20">
          <div className="counter-inner text-center">
            <div className="text">
              <h2 className="font-bold font-orbitron text-[48px]">
                <Counter end={5586} />
              </h2>
              <p className="font-bold font-orbitron text-[16px]">
                Mosquito second token
              </p>
            </div>
          </div>
        </div>

        {/* Hình ảnh nằm dưới khung */}
        <Image
          src={"/image/animation/Balloon-3.svg"}
          alt="BallLeft Image"
          width={280}
          height={247}
          className="absolute hidden xl:block animate-floating -right-40 bottom-20 z-10" 
        />
      </div>
    </div>
  );
};

export default OrgariumCounter;
