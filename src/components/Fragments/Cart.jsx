import React from "react";
import Navbar from "./Navbar";
import FormCart from "./FormCart";
import trash from "../../assets/Svg/trash.svg";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFFBFB] rounded-lg h-[500px] mx-[150px] flex flex-row justify-between items-center">
        <div className="grid grid-cols-3 w-screen h-full ">
          <div className=" col-span-2 pr-16">
            <h1 className=" text-3xl font-bold text-[#BD0707] mb-7">My Cart</h1>
            <p className=" text-xl font-normal text-[#BD0707] mb-4">
              Review Your Order
            </p>
            <hr className="border-[#BD0707] border-[1px]" />
            <div className=" w-full mt-5 flex flex-row">
              <img src="./src/assets/Img/cart1.png" alt="" />
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col justify-between py-3 pl-3 text-sm">
                  <h3 className="text-[#BD0707] font-bold">
                    Ice Coffe Palm Sugar
                  </h3>
                  <p className="text-[#BD0707]">
                    {" "}
                    <span className="text-[#974A4A] font-semibold">
                      Toping
                    </span>{" "}
                    : Bill Berry Boba, Bubble Tea Gelatin
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end py-3 pl-3 text-sm">
                  <h3 className="text-[#BD0707]">Rp.27.000</h3>
                  <img src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 pb-20">
            <FormCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
