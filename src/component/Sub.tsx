import React from "react";

const SubscribeForm = () => {
  const noBanner = false;

  return (
    <div className="container px-0 mx-auto -top-[100px] left-0 right-0 w-full ">
      {!noBanner && (
        <div className="px-3 md:px-7 xl:px-[70px]">
          <div
            className="bg-white bg-opacity-10 border-2 border-gray-500 rounded-[20px] h-[200px] bg-no-repeat bg-cover bg-center
                 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-3 md:px-7 xl:px-14 shadow-md"
          >
            {/* content */}
            <div className="mb-3 lg:mb-0">
              <p className="font-medium font-orbitron leading-[22px] text-[18px] sm:text-xl md:leading-[32px] text-center md:text-start">
                Subscribe to our newsletter
              </p>

              <p className=" md:leading-10 leading-[15px] font-inter text-[13px] sm:text-xl md:text-[13px] text-center md:text-start">
                Get the Week in Review newsletter and all the latest trends
                directly to your inbox.
              </p>
            </div>

            <div className="flex flex-col">
                {/* form */}
    
                <div className="w-full max-w-[480px] md:max-w-[458px] h-[42px] mt-3 sm:mt-0 border shadow flex items-center">
                  <input
                    type="text"
                    className="text-sm sm:text-[18px] font-inter font-normal sm:flex-grow max-w-full bg-transparent focus:outline-none pl-2 sm:pl-7
                   text-white placeholder:text-white min-w-[120px] w-full"
                    placeholder={"Your mail"}
                  />
                  <button
                    className="min-w-[120px] sm:flex-grow-0 max-w-[142px] h-[44px] rounded-xl font-semibold text-[14px] sm:text-xl text-white
                   bg-gradient-bg"
                  >
                    Subscribe
                  </button>
                </div>
    
                {/* Checkbox và Privacy Policy */}
                <div className="mt-4 flex items-center text-white text-sm">
                  <input type="checkbox" id="privacy" className="mr-2" />
                  <label htmlFor="privacy" className="text-sm">
                    I have read the
                    <span className="text-[#FFD600]"> Privacy Policy</span> and I
                    understand that I can unsubscribe anytime.
                  </label>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SubscribeForm;