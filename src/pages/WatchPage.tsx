import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import BannerWatch from "../components/WatchPage/BannerWatch";
import ListWatch from "../components/WatchPage/ListWatch";

const WatchPage: FC = () => {
  const watchProduct = useSelector((state: any) => state?.Items?.items?.watch);
  return (
    <div className="bg-white">
      <Container className="w-[980px] text-center py-2">
        <p className="text-[14px]">
          Get 3% Daily Cash back with Apple Card. And pay for your new Apple
          Watch over 24 months, interest‑free when you choose to check out with
          Apple Card Monthly Installments.*
        </p>
        <a href="" className="text-[14px] text-primary hover:underline">
          Learn more{" "}
          <span className="text-[12px]">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </a>
      </Container>
      <div className="">
        <BannerWatch />
      </div>
      <div className="text-center pt-[112px] bg-white">
        <p className="text-[40px] font-[500]">
          Which Apple Watch is right for you ?
        </p>
        <ListWatch watchProduct={watchProduct} />
      </div>
    </div>
  );
};

export default WatchPage;
