import React from "react";
import logo from "../../assets/Svg/logo.svg";

const HomeItem = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="px-[155px] py-[25px] flex w-full flex-row justify-start items-start ">
          <h1 className="text-3xl text-[#BD0707] font-black">Let’s Order</h1>
        </div>
        <div className="pb-96  flex flex-row justify-between w-9/12 h-[180px]">
          <div className="h-72 w-52 bg-red-200 rounded-md hover:scale-110 duration-300">
            <div className="bg-[url('./src/assets/Img/coffee1.png')] bg-cover h-4/5 flex flex-col justify-center items-center ">
              <img src={logo} alt="" width={"80px"} />
            </div>
            <div className="text-sm text-[#bd0707] font-bold ps-3 pt-2 ">
              <p>Ice Coffee Palm Sugar</p>
              <p className="font-normal">Rp.27.000</p>
            </div>
          </div>
          <div className="h-72 w-52 bg-red-200 rounded-md hover:scale-110 duration-300">
            <div className=" bg-[url('./src/assets/Img/coffee2.png')] bg-cover h-4/5 flex flex-col justify-center items-center">
              <img src={logo} alt="" width={"80px"} />
            </div>
            <div className="text-sm text-[#bd0707] font-bold ps-3 pt-2">
              <p>Ice Coffee Green Tea</p>
              <p className="font-normal">Rp.31.000</p>
            </div>
          </div>
          <div className="h-72 w-52 bg-red-200 rounded-md hover:scale-110 duration-300">
            <div className=" bg-[url('./src/assets/Img/coffee3.png')] bg-cover h-4/5 flex flex-col justify-center items-center">
              <img src={logo} alt="" width={"80px"} />
            </div>
            <div className="text-sm text-[#bd0707] font-bold ps-3 pt-2">
              <p>Hanami Latte</p>
              <p className="font-normal">Rp.29.000</p>
            </div>
          </div>
          <div className="h-72 w-52 bg-red-200 rounded-md hover:scale-110 duration-300">
            <div className=" bg-[url('./src/assets/Img/coffee4.png')] bg-cover h-4/5 flex flex-col justify-center items-center relative">
              <img
                className="absolute bottom-[30px]"
                src={logo}
                alt=""
                width={"80px"}
              />
            </div>
            <div className="text-sm text-[#bd0707] font-bold ps-3 pt-2">
              <p>Clepon Coffee</p>
              <p className="font-normal">Rp.28.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
