import Image from "next/image";
import Counter from "./Counter";

const OrgariumCounter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:flex xl:flex-row xl:justify-center gap-20 mt-10 relative z-20">
      <div
        data-aos="zoom-in-up"
        className="rounded-xl bg-white-opacity-10 px-10 min-h-[200px] flex items-center justify-center"
      >
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-bold font-orbitron text-[48px] ">
              <Counter end={16739} />
            </h2>
            <p className="font-bold font-orbitron text-[16px]">Customers</p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        className="rounded-xl bg-white-opacity-10 px-10 min-h-[200px] flex items-center justify-center"
      >
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-bold font-orbitron text-[48px] ">
              <Counter end={49973} />
            </h2>
            <p className="font-bold font-orbitron text-[16px]">Transaction</p>
          </div>
        </div>
      </div>

      {/* Phần tử thứ ba */}
      <div data-aos="zoom-in-up" className="relative">
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

        {/* Đặt hình ảnh dưới và bên phải của phần tử thứ ba */}
        <div className="absolute z-10 -right-40 bottom-40">
          <Image
            src={"/image/animation/Balloon-3.svg"}
            alt="BallLeft Image"
            width={280}
            height={247}
            className="animate-floating"
          />
        </div>
      </div>
    </div>
  );
};

export default OrgariumCounter;
