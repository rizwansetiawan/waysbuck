import React from "react";
import AllToping from "../Fragments/AllToping";
import Navbar from "../Fragments/Navbar";

const DetailLayouts = (props) => {
  const { children, name } = props;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 mx-[150px]">
        {children}
        <div className=" h-[430px] col-span-2 px-12 ">
          <NameCoffee name={name} />
          <AllToping />
          <div className="flex justify-between font-semibold text-[#974A4A] text-2xl">
            <p>Total</p>
            <p>Rp.00.000</p>
          </div>
          <div className="pb-56 mt-10">
            <button className="bg-[#BD0707] font-semibold text-white w-full py-2">
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NameCoffee = ({ name }) => {
  if (name === "coffee1") {
    return (
      <div>
        <h1 className="text-5xl text-[#BD0707] font-bold mb-4">
          Ice Coffee Palm Sugar
        </h1>
        <p className="font-normal text-[#974A4A] text-2xl mb-10">Rp.27.000</p>
        <p className="font-semibold text-[#974A4A] text-2xl mb-5">Toping</p>
      </div>
    );
  } else if (name === "coffee2") {
    return (
      <div>
        <h1 className="text-5xl text-[#BD0707] font-bold mb-4">
          Ice Coffee Green Tea
        </h1>
        <p className="font-normal text-[#974A4A] text-2xl mb-10">Rp.31.000</p>
        <p className="font-semibold text-[#974A4A] text-2xl mb-5">Toping</p>
      </div>
    );
  } else if (name === "coffee3") {
    return (
      <div>
        <h1 className="text-5xl text-[#BD0707] font-bold mb-4">Hanami Latte</h1>
        <p className="font-normal text-[#974A4A] text-2xl mb-10">Rp.29.000</p>
        <p className="font-semibold text-[#974A4A] text-2xl mb-5">Toping</p>
      </div>
    );
  } else if (name === "coffee4") {
    return (
      <div>
        <h1 className="text-5xl text-[#BD0707] font-bold mb-4">
          Clepon Coffee
        </h1>
        <p className="font-normal text-[#974A4A] text-2xl mb-10">Rp.28.000</p>
        <p className="font-semibold text-[#974A4A] text-2xl mb-5">Toping</p>
      </div>
    );
  }
};

export default DetailLayouts;
