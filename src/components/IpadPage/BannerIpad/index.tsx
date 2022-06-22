import React from "react";

const BannerIpad = () => {
  return (
    <>
      <div className="text-center mb-[16px]">
        <div className="flex items-center justify-center bg-black">
          <div className="flex flex-col text-white ">
            <p className="text-[#f56300]">New</p>
            <p className="flex justify-center items-center text-[56px] font-[500]">
              iPad{" "}
              <span>
                <img
                  src="https://www.apple.com/v/ipad/home/by/images/overview/hero/air_script__coyet2g7gkia_large.png"
                  alt=""
                />
              </span>
            </p>
            <p className="text-[24px] font-[500]">Light. Bright.</p>
            <p className="text-[24px] font-[500]">Full of might. </p>

            <div className="flex flex-col items-center justify-center my-4">
              <p className="pt-[20px] pb-2">From $599</p>
              <button className="bg-primary text-white rounded-2xl w-[65px] h-[35px] hover:opacity-[0.9]">
                Buy
              </button>
              <a href="" className="text-primary pt-2 hover:underline">
                Learn more{" "}
                <span className="text-[12px]">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="">
            <img
              src="https://www.apple.com/v/ipad/home/by/images/overview/hero/ipad_air__d794tkovmk02_large.jpg"
              alt="banner"
              className="pl-[16px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerIpad;
