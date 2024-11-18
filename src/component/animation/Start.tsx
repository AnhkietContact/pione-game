import Image from "next/image";
import React from "react";

const AnimateStart = () => {
  return (
    <div className="relative ">
      {/* Hình ảnh 1 */}
      <Image
        src="/image/start/Start-1.svg"
        className="absolute top-10 left-10 animate-ping-delay-1"
        alt="Start-1"
        width={30}
        height={30}
      />
      {/* Hình ảnh 2 */}
      <Image
        src="/image/start/Start-2.svg"
        className="absolute top-20 right-20 animate-ping-delay-2"
        alt="Start-2"
        width={30}
        height={30}
      />
      {/* Hình ảnh 3 */}
      <Image
        src="/image/start/Start-3.svg"
        className="absolute bottom-10 left-20 animate-ping-delay-3"
        alt="Start-3"
        width={30}
        height={30}
      />
      {/* Hình ảnh 4 */}
      <Image
        src="/image/start/Start-4.svg"
        className="absolute bottom-20 right-10 animate-ping-delay-4"
        alt="Start-4"
        width={30}
        height={30}
      />
      {/* Hình ảnh 5 */}
      <Image
        src="/image/start/Start-5.svg"
        className="absolute top-1/3 left-1/4 animate-ping-delay-5"
        alt="Start-5"
        width={30}
        height={30}
      />
      {/* Hình ảnh 6 */}
      <Image
        src="/image/start/Start-6.svg"
        className="absolute bottom-1/3 right-1/4 animate-ping-delay-6"
        alt="Start-6"
        width={30}
        height={30}
      />
      {/* Hình ảnh 7 */}
      <Image
        src="/image/start/Start-7.svg"
        className="absolute top-1/4 right-1/3 animate-ping-delay-7"
        alt="Start-7"
        width={30}
        height={30}
      />
      {/* Hình ảnh 8 */}
      <Image
        src="/image/start/Start.svg"
        className="absolute bottom-1/4 left-1/3 animate-ping-delay-8"
        alt="Start-8"
        width={30}
        height={30}
      />
    </div>
  );
};

export default AnimateStart;
