import { FC, useEffect, useState } from "react";
import ReactStickyBox from "react-sticky-box";
import ItemDesc from "./DetailItem/ItemDesc";
import ItemImg from "./DetailItem/ItemImg";

interface IDetailItem {
  iphones: any;
  handleOnClickPrice: (value: string) => void;
  handleOnClickPriceStorage: (value: string) => void;
}

const DetailItem: FC<IDetailItem> = ({
  iphones,
  handleOnClickPrice,
  handleOnClickPriceStorage,
}) => {
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [index, setIndex] = useState(999);
  const [indexColor, setIndexColor] = useState(999);
  const [currentImg, setCurrentImg] = useState("");

  const handleOnClickImg = (link: string, index: number) => {
    setImage(link);
    setIndex(index);
  };
  const currentItem =
    iphones[0]?.relatedProduct[index]?.colorProduct[indexColor];
  const handleColor = (valueColor: string, index: number) => {
    setColor(valueColor);
    setIndexColor(index);
  };

  useEffect(() => {
    setCurrentColor(currentItem?.color);
    if (color === currentColor) {
      setCurrentImg(currentItem?.itemColor);
    }
  });
  return (
    <div className="w-[980px] my-0 mx-auto">
      <div className="flex">
        <div className="w-[50%]">
          <ReactStickyBox>
            <ItemImg
              image={image}
              currentImg={currentImg}
              mainImg={iphones[0]?.imgMain}
            />
          </ReactStickyBox>
        </div>

        <div className="w-[50%] flex pl-[80px]">
          <ItemDesc
            iphones={iphones}
            indexItem={index}
            indexColor={indexColor}
            handleOnClickPrice={(value: string) => handleOnClickPrice(value)}
            currentImg={currentImg}
            color={color}
            handleOnClickPriceStorage={(value: string) =>
              handleOnClickPriceStorage(value)
            }
            handleOnClickImg={(link: string, index: number) =>
              handleOnClickImg(link, index)
            }
            handleColor={(value: string, index: number) =>
              handleColor(value, index)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
