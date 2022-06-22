import React from "react";

const BannerMac = () => {
  return (
    <div className="text-center mb-[16px]">
      <div className="flex flex-col items-center bg-white pt-[52px]">
        <p className="text-[17px] font-[600] text-[#f56300]">New</p>
        <p className="text-[40px] font-[500] pt-2">MacBook Air</p>
        <p className="text-[24px] font-[500]">Don't take it lightly.</p>
        <div className="my-4">
          <p className="text-[18px] pb-3">From $1199</p>
          <button className="bg-primary text-white rounded-2xl h-[35px] hover:opacity-[0.9] px-3">
            View pricing
          </button>
          <a href="" className="text-primary hover:underline pl-[20px]">
            Learn more{" "}
            <span className="text-[12px]">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </a>
        </div>
        <div className="">
          <img
            src="https://www.apple.com/v/mac/home/bp/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large.jpg"
            alt="banner"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerMac;
