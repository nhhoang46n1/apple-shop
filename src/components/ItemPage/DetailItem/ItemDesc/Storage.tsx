import React, { FC, useState } from "react";

interface IStorage {
  iphones: any;
  indexItem: number;
  storages: any;
  handleOnClickPriceStorage: (value: string) => void;
}
const Storage: FC<IStorage> = ({
  iphones,
  indexItem,
  storages,
  handleOnClickPriceStorage,
}) => {
  const [activeStorage, setActiveStorage] = useState(99);
  const handleStorage = (index: number, value: string) => {
    setActiveStorage(index);
    handleOnClickPriceStorage(value);
  };
  return (
    <div className="border-b border-gray-300 pt-3">
      <p className="text-[17px] font-[500]">Choose your capacity.</p>
      <p className="text-[14px] text-sky-600 font-[300] pt-2 pb-[20px]">
        How much capacity is right for you?
      </p>
      <div className="mb-3 pb-2">
        <div className="grid grid-cols-2 gap-3">
          {iphones[indexItem]?.storagePrice
            ? iphones[indexItem]?.storagePrice.map(
                (storage: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleStorage(index, storage.monthlyFrom)}
                    className={`flex items-center justify-center border-1 rounded-[10px] border-gray-300 h-[100px] p-[26px] cursor-pointer hover:outline hover:outline-gray-500 active:outline active:outline-black ${
                      activeStorage === index ? "outline outline-gray-500" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center p-[14px]">
                      <p className="text-[28px] tracking-tight font-[550]">
                        {storage.capacity}
                      </p>
                      <p className="pt-[1px] text-[12px] text-center text-gray-700">
                        {storage.monthlyFrom}
                      </p>
                    </div>
                  </div>
                )
                // ))
              )
            : storages.map((storage: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-center border-1 h-[140px] border-gray-300  rounded-[20px] cursor-pointer hover:border-gray-700 active:outline"
                >
                  <div className="flex flex-col items-center p-[14px]">
                    <p className="text-[28px] tracking-tight font-[550]">
                      {storage}
                    </p>
                    <p className="pt-[1px] text-[12px] text-center text-gray-700"></p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Storage;
