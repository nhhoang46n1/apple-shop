import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const itemCart = useSelector((state: any) => state?.Cart?.cart);
  console.log(itemCart);

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full">
        <p>Review your bag</p>
        <p>Free delivery and free returns.</p>
      </div>
      <div className="w-[1000px] my-0 mx-auto h-[700px]">
        {itemCart.map((item: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between mt-4 border-3 border-stone-500 p-5 rounded-[50px]"
          >
            <div>{index + 1}</div>
            <img
              src={item.currentImg}
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
            <div className="pr-[80px]">
              <p className="text-[24px] font-[500]">{item.item.name}</p>
              <p>{item.color}</p>
              <p>Capacity: {item.storage}</p>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
