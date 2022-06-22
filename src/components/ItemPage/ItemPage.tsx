import { FC, useState } from "react";
import { useSelector } from "react-redux";
import ReactStickyBox from "react-sticky-box";
import DetailItem from "./DetailItem";
import HeaderItem from "./HeaderItem";

const ItemPage: FC = () => {
  const iphones = useSelector((state: any) => state?.Items?.iphones);

  const [price, setPrice] = useState("");
  const [priceStorage, setPriceStorage] = useState("");

  function handleOnClickPrice(price: string) {
    setPrice(price);
  }

  function handleOnClickPriceStorage(price: string) {
    setPriceStorage(price);
  }
  return (
    <div className="w-full my-0 mx-auto">
      <ReactStickyBox style={{ zIndex: "999999" }}>
        <HeaderItem
          iphones={iphones}
          price={price}
          priceStorage={priceStorage}
        />
      </ReactStickyBox>

      <div className="bg-[#ffffff]">
        <DetailItem
          iphones={iphones}
          handleOnClickPrice={(value: string) => handleOnClickPrice(value)}
          handleOnClickPriceStorage={(value: string) =>
            handleOnClickPriceStorage(value)
          }
        />
      </div>
    </div>
  );
};

export default ItemPage;
