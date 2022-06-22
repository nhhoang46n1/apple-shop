import React, { FC, useState } from "react";

interface IColor {
  iphoneColor: any;
  handleColor: (value: string, index: number) => void;
}
const Color: FC<IColor> = ({ iphoneColor, handleColor }) => {
  const [activeColor, setActiveColor] = useState(1000);
  function handleActiveColor(valueColor: string, index: number) {
    setActiveColor(index);
    handleColor(valueColor, index);
  }

  return (
    <div className="border-b border-gray-300 pt-3">
      <p className="text-[17px] font-[500]">Choose your color.</p>

      <div className="my-3 pb-2">
        <div className="grid grid-cols-2 gap-3">
          {iphoneColor.map((color: any, index: number) => (
            <div
              key={index}
              onClick={() => handleActiveColor(color.value, index)}
              className={`flex items-center justify-center border-1 rounded-[10px] border-gray-300 h-[100px] p-[26px] cursor-pointer hover:outline hover:outline-gray-500 active:outline active:outline-black ${
                activeColor === index ? "outline outline-gray-500" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  width="32"
                  height="32"
                  src={color.label}
                  alt={color.value}
                />
                <p className="pt-2">{color.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Color;
