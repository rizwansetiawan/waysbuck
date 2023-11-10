import React from "react";
import logo from "../../assets/Svg/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-20 py-5  flex flex-row justify-between items-center">
      <img src={logo} alt="" width={"55px"} />
      <div className=" flex flex-row gap-5 justify-center items-center">
        <Link
          to="/login"
          className="text-sm  px-5 py-[2px] rounded-[5px] text-[#BD0707] bg-[#FFFBFB] border-2 border-[#BD0707]"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-sm px-5 py-[2px] rounded-[5px] text-[#FFFBFB] bg-[#BD0707] border-2 border-[#BD0707]"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
