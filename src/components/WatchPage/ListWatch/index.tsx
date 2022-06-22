import React, { FC } from "react";

interface IListWatch {
  watchProduct: any;
}
const ListWatch: FC<IListWatch> = ({ watchProduct }) => {
  console.log(watchProduct);
  return (
    <div className="flex justify-between flex-wrap mb-5 mx-auto w-[980px] mt-[52px]">
      {watchProduct?.map((item: any, index: number) => (
        <div key={index} className="flex flex-col items-center w-[33.3333%]">
          <img src={item.img} alt="iphone" />
          <img
            src="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13_pro__dwe0m1kjylsi_large.png"
            alt="color"
            className="pt-3"
          />
          <p className="flex flex-col-reverse text-[24px] font-[600] pt-3">
            {item.name}
            <span className="text-[14px] text-red-600 h-[18px] font-[400]"></span>
          </p>
          <div className="flex flex-col items-center pt-[24px]">
            <p className="text-[16px] font-[400] pb-2">
              From ${item.price.value}
            </p>
            <button className="bg-primary text-white rounded-2xl h-[28px] hover:opacity-[0.9] text-[14px] px-3">
              Buy
            </button>
            <a
              href=""
              className="text-primary hover:underline text-[14px] pt-2"
            >
              Learn more{" "}
              <span className="text-[12px]">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListWatch;
