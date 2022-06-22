import React from "react";

const BannerIphone = () => {
  return (
    <>
      <div className="text-center mb-[16px]">
        <div className="flex flex-col items-center bg-white pt-[52px]">
          <p className="text-[18px] font-[500]">iPhone 13 Pro</p>
          <p className="text-[36px] font-[500]">Oh. So. Pro</p>
          <p className="text-[20px]">
            From $41.62/mo. for 24 mo. or $999 before trade‑in
          </p>
          <div className="my-4">
            <button className="bg-primary text-white rounded-2xl w-[65px] h-[35px] hover:opacity-[0.9]">
              Buy
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
              src="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large.png"
              alt="banner"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-[16px]">
        <div className="flex flex-col items-center bg-white pt-[52px]">
          <p className="text-[18px] font-[500]">iPhone 13 Pro</p>
          <p className="text-[36px] font-[500]">Oh. So. Pro</p>
          <p className="text-[20px]">
            From $41.62/mo. for 24 mo. or $999 before trade‑in
          </p>
          <div className="my-4">
            <button className="bg-primary text-white rounded-2xl w-[65px] h-[35px] hover:opacity-[0.9]">
              Buy
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
              src="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_se_hero__gd586pazxqqa_large.jpg"
              alt="banner"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerIphone;
