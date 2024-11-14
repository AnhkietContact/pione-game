import React from "react";
import Image from "next/image";
import useInView from "../../hooks/useInView";

const Balloon = () => {
  const fadeUpInView = useInView(".fade-up", { threshold: 0.5 });

  return (
    <div>
      <div
        className={`${
          fadeUpInView ? "animate-fade-up" : ""
        } fade-up flex justify-center items-center relative`}
      >
        <Image
          src={"/image/animation/Balloon-2.svg"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="absolute animate-floating"
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
