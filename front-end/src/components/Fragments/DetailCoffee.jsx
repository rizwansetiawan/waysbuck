import React from "react";

const DetailCoffee = (props) => {
  const { type } = props;
  return <Fullimage type={type} />;
};

const Fullimage = ({ type }) => {
  if (type === "coffee1") {
    return (
      <div className="bg-orange-400 h-[430px] col-span-1 bg-[url('./src/assets/Img/coffee1-detail.png')] bg-cover rounded-lg"></div>
    );
  } else if (type === "coffee2") {
    return (
      <div className="bg-orange-400 h-[430px] col-span-1 bg-[url('./src/assets/Img/coffee2.png')] bg-cover rounded-lg"></div>
    );
  } else if (type === "coffee3") {
    return (
      <div className="bg-orange-400 h-[430px] col-span-1 bg-[url('./src/assets/Img/coffee3.png')] bg-cover rounded-lg"></div>
    );
  } else if (type === "coffee4") {
    return (
      <div className="bg-orange-400 h-[430px] col-span-1 bg-[url('./src/assets/Img/coffee4.png')] bg-cover rounded-lg"></div>
    );
  }
};

export default DetailCoffee;
