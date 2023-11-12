import React from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const FormCart = () => {
  return (
    <div>
      <form className="flex flex-col">
        <Input
          type="text"
          placeholder="Name"
          className="bg-[#f7eeee] px-2 py-5 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        <Input
          type="email"
          placeholder="Email"
          className="bg-[#f7eeee] px-2 py-5 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        <Input
          type="number"
          placeholder="Phone"
          className="bg-[#f7eeee] px-2 py-5 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        <Input
          type="number"
          placeholder="Pos Code"
          className="bg-[#f7eeee] px-2 py-5 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        <textarea
          rows={"4"}
          placeholder="Address"
          className="bg-[#f7eeee] px-2 py-2 mt-5 h-[150px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        <Button>Pay</Button>
      </form>
    </div>
  );
};

export default FormCart;
