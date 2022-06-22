import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import BannerAirpod from "../components/AirpodPage/BannerAirpod";
import ListAirpod from "../components/AirpodPage/ListAirpod";

const AirpodsPage: FC = () => {
  const airpodProduct = useSelector(
    (state: any) => state?.Items?.items?.airpod
  );

  return (
    <div className="">
      <Container className="w-[980px] text-center py-2">
        <p className="text-[14px]">
          Get 6 months of Apple Music free with your Airpods.*
        </p>
        <a href="" className="text-[14px] text-primary hover:underline">
          Learn more{" "}
          <span className="text-[12px]">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </a>
      </Container>
      <div className="bg-white">
        <BannerAirpod />
      </div>
      <div className="text-center pt-[112px] bg-white">
        <p className="text-[40px] font-[500]">
          Which AirPods is right for you ?
        </p>
        <ListAirpod airpodProduct={airpodProduct} />
      </div>
    </div>
  );
};

export default AirpodsPage;
