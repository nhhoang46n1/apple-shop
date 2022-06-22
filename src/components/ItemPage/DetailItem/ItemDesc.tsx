import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/cart/action";
import Color from "./ItemDesc/Color";
import Model from "./ItemDesc/Model";
import Storage from "./ItemDesc/Storage";

interface IItemDesc {
  indexItem: number;
  indexColor: number;
  iphones: any;
  currentImg: string;
  color: string;
  handleOnClickPrice: (value: string) => void;
  handleOnClickPriceStorage: (value: string) => void;
  handleOnClickImg: (link: string, index: number) => void;
  handleColor: (value: string, index: number) => void;
}
const ItemDesc: FC<IItemDesc> = ({
  indexItem,
  indexColor,
  iphones,
  currentImg,
  color,
  handleOnClickPrice,
  handleOnClickPriceStorage,
  handleOnClickImg,
  handleColor,
}) => {
  const dispatch = useDispatch();
  const nameIphone = iphones[0]?.name;

  function handleAddItem(item: any, color: string, currentImg: string) {
    dispatch(addItem({ item, color, currentImg }));
  }

  return (
    <div className="w-full mt-[48px]">
      <p className="text-[#bf4800]">New</p>
      <p className="text-[36px] tracking-tight font-[500]">Buy {nameIphone}</p>
      <p className="mt-3">
        Get $100–$650 off when you trade in an iPhone 8 or newer
      </p>

      <div className="mt-2 text-sky-600 hover:underline">
        <a href="#">See how trade-in works</a>
      </div>

      {iphones.length > 0
        ? iphones?.map((iphone: any, index: number) => (
            <div key={index}>
              {" "}
              <div className="mt-2">
                <Model
                  iphone={iphone?.relatedProduct}
                  handleOnClickPrice={(value: string) =>
                    handleOnClickPrice(value)
                  }
                  handleOnClickImg={(link: string, index: number) =>
                    handleOnClickImg(link, index)
                  }
                />
              </div>
              <div
                className={`${
                  indexItem > 10 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <Color
                  iphoneColor={iphone?.color}
                  handleColor={(value: string, index: number) =>
                    handleColor(value, index)
                  }
                />
              </div>
              <div
                className={`${
                  indexItem > 10 || indexColor > 10
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                <Storage
                  iphones={iphone?.relatedProduct}
                  indexItem={indexItem}
                  storages={iphone?.storage}
                  handleOnClickPriceStorage={(value: string) =>
                    handleOnClickPriceStorage(value)
                  }
                />
              </div>
            </div>
          ))
        : "Loading"}
      <div className="w-full text-center mt-4 mb-8">
        <button
          className="w-[90%] bg-blue-600 text-white p-2 rounded-[15px] hover:opacity-[0.9]"
          onClick={() =>
            handleAddItem(
              iphones[0].relatedProduct[indexItem],
              color,
              currentImg
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemDesc;
