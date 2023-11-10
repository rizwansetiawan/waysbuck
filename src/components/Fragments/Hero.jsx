import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#BD0707] rounded-lg h-72 mx-[150px] mr-[250px] flex flex-row justify-between items-center">
      <div className="w-9/12 px-10 text-[#FFFBFB]">
        <h1 className=" text-5xl font-black mb-7">WAYSBUCKS</h1>
        <p className="mt-2">
          Things are changing, but we’re still here for you
        </p>
        <p className="mt-2">
          We have temporarily closed our in-store cafes, but select grocery and
          drive-thru locations remaining open. Waysbucks Drivers is also
          available
        </p>
        <p className="mt-2">Let’s Order...</p>
      </div>
      <img
        width={"300px"}
        src="./src/assets/Img/hero.png"
        alt=""
        className="absolute right-[150px]"
      />
    </div>
  );
};

export default Hero;
