import React, { FC } from "react";

interface IHeaderItem {
  iphones: any;
  price: string;
  priceStorage: string;
}
const HeaderItem: FC<IHeaderItem> = ({ iphones, price, priceStorage }) => {
  return (
    <>
      <div className="w-full h-[50px] border-2 flex items-center bg-[#ffffffb8] backdrop-blur-xl">
        {iphones?.map((items: any, index: number) => (
          <div
            key={index}
            className="flex justify-between w-[980px] my-0 mx-auto items-center"
          >
            <p className="text-[21px] font-[500]">{items.name}</p>
            {priceStorage ? (
              <p key={index} className="text-[17px] tracking-tight">
                {priceStorage} before trade-in
              </p>
            ) : price ? (
              <p key={index} className="text-[17px] tracking-tight">
                {price} before trade-in
              </p>
            ) : (
              <p key={index} className="text-[17px] tracking-tight">
                {items.price.display.monthlyFrom} before trade-in
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderItem;
