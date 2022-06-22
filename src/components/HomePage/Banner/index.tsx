import React, { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bannerContent from "../../../common/Banner";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";
import banner6 from "../../../assets/banner/banner6.jpg";
import banner7 from "../../../assets/banner/banner7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "./banner.css";
const Banner: FC = () => {
  const bannerImg = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper text-center "
    >
      {bannerContent.map((banner: any, index: number) => (
        <SwiperSlide
          key={index}
          className="text-center flex flex-col-reverse p-5 hover:scale-[1.01] cursor-pointer transition-all duration-200"
        >
          <div className="relative  ">
            <img src={bannerImg[index]} alt="banner" />
          </div>
          <div className="absolute top-7 left-7 right-7 text-left">
            <p className="uppercase text-[12px] font-semibold text-[#6e6e73]">
              {banner.product}
            </p>
            <p className="text-[24px] mt-2 font-[500]">{banner.title}</p>
            <p className="text-[18px] mt-2">{banner.description}</p>
          </div>
          <div className=""></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
