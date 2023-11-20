import React from "react";
import logo from "../../assets/Svg/logo.svg";
import { Link } from "react-router-dom";

const dataCoffee = [
  {
    id: 1,
    name: "Ice Coffee Palm Sugar",
    price: 27000,
    image: "./src/assets/Img/coffee.png",
    fullimage: "./src/assets/Img/coffee1-detail.png",
    link: "/detail-coffee1",
  },
  {
    id: 2,
    name: "Ice Coffee Green Tea",
    price: 31000,
    image: "./src/assets/Img/coffee2.png",
    fullimage: "./src/assets/Img/coffee2-detail.png",
    link: "/detail-coffee2",
  },
  {
    id: 3,
    name: "Hanami Latte",
    price: 29000,
    image: "./src/assets/Img/coffee3.png",
    fullimage: "./src/assets/Img/coffee3-detail.png",
    link: "/detail-coffee3",
  },
  {
    id: 4,
    name: "Clepon Coffee",
    price: 28000,
    image: "./src/assets/Img/coffee4.png",
    fullimage: "./src/assets/Img/coffee4-detail.png",
    link: "/detail-coffee4",
  },
];
const HomeItem = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="px-[155px] py-[25px] flex w-full flex-row justify-start items-start ">
        <h1 className="text-3xl text-[#BD0707] font-black">Let’s Order</h1>
      </div>
      <div className="pb-96  flex flex-row flex-wrap gap-5 justify-between w-9/12 h-[180px]">
        {dataCoffee.map((coffee) => (
          <CoffeeBox key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

const CoffeeBox = (props) => {
  const { coffee } = props;
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      onClick={scrollToTop}
      key={coffee.id}
      id={coffee.id}
      to={coffee.link}
      className="h-80 w-52 bg-red-200 rounded-md hover:scale-110 duration-300"
    >
      <p className="hidden">{coffee.fullimage}</p>
      <div className={`h-4/5 flex flex-col justify-center items-center`}>
        <img src={coffee.image} alt="" />
        <img src={logo} alt="" width={"80px"} className="absolute" />
      </div>
      <div className="text-sm text-[#bd0707] font-bold ps-3 pt-3 ">
        <p>{coffee.name}</p>
        <p className="font-normal">Rp.{coffee.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default HomeItem;
