import React, { FC } from "react";

interface IItemImg {
  image: string;
  currentImg: string;
  mainImg: string;
}
const ItemImg: FC<IItemImg> = ({ image, currentImg, mainImg }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-bottom">
        {currentImg ? (
          <img src={currentImg} alt="" width="450" height="580" />
        ) : image ? (
          <img src={image} alt="" width="450" height="580" />
        ) : (
          <img src={mainImg} alt="" width="450" height="580" />
        )}
      </div>
      <div className="flex justify-center text-[12px] font-[500] text-stone-500 pt-[70px] pb-3 border-b border-gray-400">
        <div className="w-[50%] text-center">
          <i className="fa-solid fa-box-open text-[26px]"></i>
          <p className="pt-2">
            Get free delivery, or pick up available items at an Apple Store
          </p>
        </div>
        <div className="w-[50%] text-center">
          <i className="fa-solid fa-boxes-packing text-[26px]"></i>
          <p className="pt-2">Free and easy returns</p>
        </div>
      </div>
    </div>
  );
};

export default ItemImg;
