import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import BannerMac from "../components/MacPage/BannerMac";
import ListMac from "../components/MacPage/ListMac";

const MacPage: FC = () => {
  const [active, setActive] = useState(0);
  const typeOfMac = ["Notebook", "Desktop"];
  const handleActive = (index: number) => setActive(index);
  return (
    <div>
      <Container className="w-[980px] text-center py-2">
        <p className="text-[14px]">
          Get 3% Daily Cash back with Apple Card. And pay for your new Mac over
          12 months, interest‑free when you choose to check out with Apple Card
          Monthly Installments.*
        </p>
        <a href="" className="text-[14px] text-primary hover:underline">
          Learn more{" "}
          <span className="text-[12px]">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </a>
      </Container>
      <div className="">
        <BannerMac />
      </div>
      <div className="text-center pt-[112px] bg-white">
        <p className="text-[40px] font-[500]">Which Mac is right for you ?</p>
        <div className="py-[40px]">
          <ul className="flex justify-center items-center">
            {typeOfMac.map((name, index) => (
              <li
                key={index}
                className={`border-b text-[#6e6e73] cursor-pointer px-4 py-4 hover:text-[#a4a4aa] ${
                  active === index ? "text-black border-black" : ""
                }`}
                onClick={() => handleActive(index)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <ListMac activeIndex={active} />
      </div>
    </div>
  );
};

export default MacPage;
