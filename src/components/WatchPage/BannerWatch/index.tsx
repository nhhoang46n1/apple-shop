import React from "react";

const BannerWatch = () => {
  return (
    <div className="text-center mb-[16px]">
      <div className="flex flex-col items-center bg-[#f5f5f7] pt-[52px]">
        <img
          src="https://www.apple.com/v/watch/aw/images/overview/series-7/logo_watch_s7__dnxp9zoaom82_large.png"
          alt=""
        />
        <p className="text-[40px] font-[600] pt-2">Full Screen ahead.</p>
        <div className="flex flex-col items-center justify-center my-4">
          <p className="text-[24px] pb-3 font-[500]">From $399</p>
          <button className="bg-primary text-white rounded-2xl h-[35px] hover:opacity-[0.9] px-3">
            Buy
          </button>
          <a href="" className="text-primary hover:underline mt-2">
            Learn more{" "}
            <span className="text-[12px]">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </a>
        </div>
        <div className="">
          <img
            src="https://www.apple.com/v/watch/aw/images/overview/series-7/hero_s7__ep2maoos292e_large.jpg"
            alt="banner"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerWatch;
