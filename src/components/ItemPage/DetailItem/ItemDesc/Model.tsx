import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

interface IModel {
  iphone: any;
  handleOnClickPrice: (value: string) => void;
  handleOnClickImg: (link: string, index: number) => void;
}
const Model: FC<IModel> = ({
  iphone,
  handleOnClickPrice,
  handleOnClickImg,
}) => {
  const [active, setActive] = useState(10);

  const handleActive = (index: number, price: string, link: string) => {
    setActive(index);
    handleOnClickPrice(price);
    handleOnClickImg(link, index);
  };
  // console.log(active);
  return (
    <div className="border-b border-gray-300">
      <p className="text-[17px] font-[500]">Choose your model.</p>
      <p className="text-[14px] text-sky-600 font-[300] pt-2 pb-[20px]">
        Which model is right to you?
      </p>
      {iphone?.map((item: any, index: number) => (
        <div
          key={index}
          className="mb-3"
          onClick={() =>
            handleActive(index, item.price.monthlyFrom, item.imgMain)
          }
        >
          <div className="pb-[12px]">
            <div
              className={`flex items-center border-1 rounded-[10px] border-gray-300 h-[100px] p-[26px] cursor-pointer hover:outline hover:outline-gray-500 active:outline active:outline-black ${
                active === index ? "outline outline-gray-500" : ""
              }`}
            >
              <div className="w-[50%] text-left">
                <p className="text-[17px] font-[500]">{item.name}</p>
                <p className="text-[12px] font-[300]">{item.screenSize}</p>
              </div>
              <div className="w-[50%] text-right">
                <p className="text-[16px]">
                  {item.price.monthlyFrom} before trade-in
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Model;
