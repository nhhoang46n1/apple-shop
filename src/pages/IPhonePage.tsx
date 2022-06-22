import { FC } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import BannerIphone from "../components/IPhonePage/BannerIphone";
import ListIphone from "../components/IPhonePage/ListIphone";

const IPhonePage: FC = () => {
  const iphoneProduct = useSelector((state: any) => state?.Items?.items);
  return (
    <div>
      <Container className="w-[980px] text-center py-2">
        <p className="text-[14px]">
          Get 3% Daily Cash back with Apple Card. And pay for your new iPhone
          over 24 months, interest‑free when you choose to check out with Apple
          Card Monthly Installments.*
        </p>
        <a href="" className="text-[14px] text-primary hover:underline">
          Learn more{" "}
          <span className="text-[12px]">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </a>
      </Container>
      <div className="">
        <BannerIphone />
      </div>
      <div className="text-center pt-[112px] bg-white">
        <p className="text-[40px] font-[500]">
          Which iPhone is right for you ?
        </p>
        <ListIphone iphoneProduct={iphoneProduct} />
      </div>
    </div>
  );
};

export default IPhonePage;
