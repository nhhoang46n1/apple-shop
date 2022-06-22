import React from "react";
import AirpodVideo from "../../../assets/airpod_video/airpodClip.mp4";

const BannerAirpod = () => {
  return (
    <div className="text-center flex justify-center items-end mb-[16px]">
      <div className="relative px-4 rounded-xl">
        <video
          autoPlay
          loop
          className="w-full h-full object-cover rounded-[52px]"
        >
          <source src={AirpodVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute flex items-center justify-center pb-4">
        <div className="flex flex-col text-white items-center justify-center">
          <p className="flex justify-center items-center text-[80px] font-bold">
            AirPods
          </p>
          <p className="text-[24px] font-[500]">3rd generation</p>

          <div className="">
            <p className="pb-2">From $179</p>
            <button className="bg-white text-black rounded-2xl w-[65px] h-[35px] hover:opacity-[0.9]">
              Buy
            </button>
            <a href="" className="text-white pt-2 hover:underline pl-4">
              Learn more{" "}
              <span className="text-[12px]">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAirpod;
