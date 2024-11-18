import React from "react";
import Image from "next/image";

const FlyAnimate = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative ">
        <Image
          src={"/image/animation/Fly.svg"}
          alt="Fly Image"
          width={100}
          height={100}
          className="absolute animate-fade-in-haftLeftBottomReimagined z-10"
        />
        {/* <Image
          src={"/image/animation/Mammon.png"}
          alt="Fly Image"
          width={500}
          height={500}
          className="relative"
        /> */}
      </div>
    </div>
  );
};

export default FlyAnimate;
