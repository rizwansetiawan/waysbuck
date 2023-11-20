import React from "react";

const toping = [
  {
    id: 1,
    name: "Bubble Tea Gelatin",
    price: 27000,
    image: "./src/assets/Img/toping/1.png",
  },
  {
    id: 2,
    name: "Manggo",
    price: 31000,
    image: "./src/assets/Img/toping/2.png",
  },
  {
    id: 3,
    name: "Green Coconut",
    price: 29000,
    image: "./src/assets/Img/toping/3.png",
  },
  {
    id: 4,
    name: "Boba Manggo",
    price: 28000,
    image: "./src/assets/Img/toping/4.png",
  },
  {
    id: 5,
    name: "Bill Berry Boba",
    price: 27000,
    image: "./src/assets/Img/toping/5.png",
  },
  {
    id: 6,
    name: "Kiwi Popping Pearl",
    price: 27000,
    image: "./src/assets/Img/toping/6.png",
  },
  {
    id: 7,
    name: "Matcha Cantaloupe",
    price: 27000,
    image: "./src/assets/Img/toping/7.png",
  },
  {
    id: 8,
    name: "Strawberry Popping",
    price: 27000,
    image: "./src/assets/Img/toping/8.png",
  },
];

const AllToping = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mb-10">
      {toping.map((toping) => (
        <div
          key={toping.id}
          id={toping.id}
          className=" w-32 h-[125px] flex flex-col justify-between items-center"
        >
          <div className={`rounded-full  flex flex-col items-center`}>
            <img src={toping.image} className="rounded-full" alt="" />
          </div>
          <p className="text-sm mt-1 text-[#BD0707]">{toping.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AllToping;
