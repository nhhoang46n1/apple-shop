import { FC } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getIphone } from "../../../store/products/action";

interface IListIphone {
  iphoneProduct: any;
}
const ListIphone: FC<IListIphone> = ({ iphoneProduct }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const pathname = location.pathname;

  const handleOnClickItem = (index: number) => {
    const idItem = iphoneProduct[index]?.id;
    const nameItem = iphoneProduct[index]?.name;
    dispatch(getIphone(pathname, idItem));
    const pathnameItem = nameItem.replaceAll(" ", "-");
    navigate(`./${pathnameItem}`);
  };

  return (
    <div className="flex justify-between flex-wrap mb-5 mx-auto w-[980px] mt-[52px]">
      {iphoneProduct.length > 0
        ? iphoneProduct?.map((item: any, index: number) => (
            <div key={index} className="flex flex-col items-center w-[25%]">
              <img src={item.img} alt="iphone" />
              <img
                src="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13_pro__dwe0m1kjylsi_large.png"
                alt="color"
                className="pt-3"
              />
              <p className="flex flex-col-reverse text-[24px] font-bold pt-3">
                {item.name}
                <span className="text-[14px] text-red-600 h-[18px] font-[400]">
                  {item.type}
                </span>
              </p>
              <p className="text-[16px] pt-1">{item.desc}</p>

              <div className="flex flex-col items-center mt-auto">
                <p className="text-[16px] pt-[24px] font-[400] pb-2">
                  ${item.price.value}
                </p>
                <button
                  className="bg-primary text-white rounded-2xl w-[52px] h-[28px] hover:opacity-[0.9] text-[14px]"
                  onClick={() => handleOnClickItem(index)}
                >
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
          ))
        : "Loading"}
    </div>
  );
};

export default ListIphone;
