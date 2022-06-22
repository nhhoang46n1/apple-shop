import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const navNames = [
    "iPhone",
    "iPad",
    "Mac",
    "Watch",
    "Airpods",
    "Accessories",
    "Support",
  ];
  const pathnames = [
    "iphone",
    "ipad",
    "mac",
    "watch",
    "airpods",
    "accessories",
    "support",
  ];
  return (
    <div className="w-full h-[64px] bg-[#3a3a3a] text-center">
      <div className="flex h-full items-center justify-between w-[980px] my-0 mx-auto">
        <div className="text-[32px] text-[#f5f5f5] cursor-pointer">
          <Link to="/homepage" className="hover:text-white">
            <i className="fa-brands fa-apple"></i>
          </Link>
        </div>
        {navNames.map((name, index) => (
          <Link
            key={index}
            to={pathnames[index]}
            className="px-[10px] text-[#f5f5f5] text-[14px] hover:text-white"
          >
            {name}
          </Link>
        ))}
        <div className="search-box">
          <button className="btn-search text-[16px]">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>

        <div className="text-[#f5f5f5] hover:text-white">
          <button
            className="text-center text-[24px]"
            onClick={() => navigate("/bag")}
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
