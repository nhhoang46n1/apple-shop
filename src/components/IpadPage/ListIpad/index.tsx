import { FC } from "react";

interface IListIpad {
  ipadProduct: any;
}
const ListIpad: FC<IListIpad> = ({ ipadProduct }) => {
  return (
    <div className="flex justify-between items-start flex-wrap mb-5 mx-auto w-[980px] mt-[52px]">
      {ipadProduct &&
        ipadProduct.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center w-[25%]">
            <div className="min-h-[220px] flex items-end">
              <img src={item.img} alt="ipad" className="h-full" />
            </div>
            <img
              src="https://www.apple.com/v/ipad/home/by/images/overview/compare_ipad_pro_swatches__bxn5nqwduk9y_large.png"
              alt="color"
              className="pt-3 "
            />
            <p className="flex flex-col-reverse text-[20px] font-bold pt-3">
              {item.name}
              <span className="text-[14px] text-red-600 h-[18px] font-[400]">
                {item.type}
              </span>
            </p>
            <p className="text-[16px] pt-1 min-h-[66px] px-4">{item.desc}</p>
            <div className="flex flex-col items-center">
              <p className="text-[16px] font-[400] pb-2">${item.price.value}</p>
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

export default ListIpad;
