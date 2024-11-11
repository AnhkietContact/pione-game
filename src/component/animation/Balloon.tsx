import React from "react";
import Image from "next/image";

const Balloon = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src={"/image/animation/Balloon-2.svg"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="absolute animate-bounce"
        />  
        <Image
          src={"/image/animation/Mammon.png"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="relative"
        />
      </div>
    </div>
  );
};
export default Balloon;
