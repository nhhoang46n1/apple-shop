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
      <div className="w-[980px] my-0 mx-auto">
        {itemCart.map((item: any, index: number) => (
          <div key={index} className="flex items-center justify-left mt-4">
            <img
              src={item.currentImg}
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
            <div>
              <p>{item.item.name}</p>
              <p>{item.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
