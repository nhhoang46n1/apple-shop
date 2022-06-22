import React, { FC } from "react";
import Banner from "../components/HomePage/Banner";

const HomePage: FC = () => {
  return (
    <div className="mt-[48px]">
      <div className="w-[980px] my-0 mx-auto ">
        <p className="text-[48px] tracking-tight text-[#6e6e73] font-[550]">
          <span className="text-black">Apple Store.</span> The best way to buy
          the products you love.
        </p>
      </div>
      <div className="w-[980px] mb-0 mx-auto mt-[48px]">
        <p className="text-[40px] tracking-tight text-[#6e6e73] font-[550]">
          <span className="text-black">The Lastest</span> What's new ?
        </p>
      </div>
      <div className="flex justify-center mt-[32px]">
        <div className="w-full">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
