import React, { FC } from "react";
import { useSelector } from "react-redux";

interface IListMac {
  activeIndex: number;
}
const ListMac: FC<IListMac> = ({ activeIndex }) => {
  const notebookMac = useSelector(
    (state: any) => state?.Items?.items?.mac?.notebook
  );

  const desktopMac = useSelector(
    (state: any) => state?.Items?.items?.mac?.desktop
  );

  return (
    <div className="flex justify-between flex-wrap mb-5 mx-auto w-[980px] mt-[52px]">
      {(activeIndex === 0 ? notebookMac : desktopMac)?.map(
        (item: any, index: number) => (
          <div key={index} className="flex flex-col items-center w-[25%]">
            <img src={item.img} alt="iphone" />
            <img
              src="https://www.apple.com/v/ipad/home/by/images/overview/compare_ipad_pro_swatches__bxn5nqwduk9y_large.png"
              alt="color"
              className="pt-3"
            />
            <p className="flex flex-col-reverse text-[24px] font-[550] pt-3">
              {item.name}
              <span className="text-[14px] text-red-600 h-[18px] font-[400]">
                {item.type}
              </span>
            </p>
            <p className="text-[16px] pt-1">{item.desc}</p>
            <div className="flex flex-col items-center pt-[24px] mt-auto">
              <p className="text-[16px] font-[400] pb-2">
                From ${item.price.value}
              </p>
              <button className="bg-primary text-white rounded-2xl h-[28px] hover:opacity-[0.9] text-[14px] px-3">
                {item.type === "new" ? "View pricing" : "Buy"}
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
        )
      )}
    </div>
  );
};

export default ListMac;
