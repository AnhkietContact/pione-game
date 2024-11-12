import React from "react";
import Image from "next/image";

const Balloon2 = () => {
  return (
    <div>
      <div className="absolute flex justify-center items-center">
        <Image
          src={"/image/animation/Balloon-1.svg"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="animate-move-left"
        />
        <Image
          src={"/image/animation/Balloon-3.svg"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="animate-move-right"
        />
      </div>
    </div>
  );
};
export default Balloon2;
