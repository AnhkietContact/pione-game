import React from "react";
import Image from "next/image";

const Balloon2 = () => {
  return (
    <>
      <div className="absolute flex justify-center items-center">
        {/* Balloon 1 - Ẩn trên mobile và chạy qua trái khi màn hình lớn */}
        <Image
          src={"/image/animation/Balloon-1.svg"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="hidden xl:block xl:animate-move-left"
        />

        {/* Balloon 2 - Chạy lên xuống khi ở màn hình mobile và chạy qua phải khi màn hình lớn */}
        <Image
          src={"/image/animation/Balloon-3.svg"}
          alt="Balloon Image"
          width={500}
          height={500}
          className="animate-floating xl:animate-move-right"
        />
      </div>
    </>
  );
};
export default Balloon2;
