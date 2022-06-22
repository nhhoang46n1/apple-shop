import React, { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import axiosClient from "../api/axiosClient";
import BannerIpad from "../components/IpadPage/BannerIpad";
import ListIpad from "../components/IpadPage/ListIpad";

const IPadPage: FC = () => {
  const ipadProduct = useSelector((state: any) => state?.Items?.items?.ipad);
  return (
    <div className="">
      <div className="w-full bg-[#464545]">
        <Container className="text-center w-[980px] py-2 text-white">
          <p className="text-[14px]">
            Get 3% Daily Cash back with Apple Card. And pay for your new Ipad
            over 12 months, interest‑free when you choose to check out with
            Apple Card Monthly Installments.*
          </p>
          <a href="" className="text-[14px] text-primary hover:underline">
            Learn more{" "}
            <span className="text-[12px]">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </a>
        </Container>
      </div>
      <div className="">
        <BannerIpad />
      </div>
      <div className="text-center pt-[112px] bg-white">
        <p className="text-[40px] font-[500]">Which iPad is right for you ?</p>
        <ListIpad ipadProduct={ipadProduct} />
      </div>
    </div>
  );
};

export default IPadPage;
