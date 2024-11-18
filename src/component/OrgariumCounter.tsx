import Image from "next/image";
import Counter from "./Counter";

const OrgariumCounter = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="relative grid grid-cols-1 md:grid-cols-3 xl:flex xl:flex-row xl:justify-center gap-20 mt-10 z-20"
    >
      {/* Hình ảnh được đặt dưới container */}

      {/* Các card nội dung */}
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
      <div className="rounded-xl bg-white-opacity-10 px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-bold font-orbitron text-[48px] ">
              <Counter end={49973} />
            </h2>
            <p className="font-bold font-orbitron text-[16px]">Transaction</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white-opacity-10 px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-bold font-orbitron text-[48px] ">
              <Counter end={5586} />
            </h2>
            <p className="font-bold font-orbitron text-[16px]">
              Mosquito second token
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgariumCounter;
