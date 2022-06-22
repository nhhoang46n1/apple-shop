import React, { FC } from "react";

interface IListAirpod {
  airpodProduct: any;
}
const ListAirpod: FC<IListAirpod> = ({ airpodProduct }) => {
  return (
    <div className="flex justify-between flex-wrap mb-5 mx-auto w-[980px] mt-[52px]">
      {airpodProduct?.map((item: any, index: number) => (
        <div key={index} className="flex flex-col items-center w-[25%]">
          <div className="flex items-end min-h-[250px]">
            <img src={item.img} alt="iphone" />
          </div>
          <p className="flex flex-col-reverse text-[24px] font-[500] pt-3">
            {item.name}
          </p>
          <p className="text-[14px] pt-1">{item.desc}</p>
          <div className="flex flex-col items-center mt-auto">
            <p className="text-[16px] pt-[12px] pb-2">
              From ${item.price.value}
            </p>
            <button className="bg-primary text-white rounded-2xl w-[52px] h-[28px] hover:opacity-[0.9] text-[14px] ">
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

export default ListAirpod;
