import React, { useState } from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const FormAddToping = (props) => {
  const { children } = props;
  return (
    <div>
      <form className="flex flex-col">
        <Input
          type="text"
          placeholder="Name Toping"
          className="bg-[#f7eeee] px-2 py-5 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        <Input
          type="number"
          placeholder="Price"
          className="bg-[#f7eeee] px-2 py-5 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
        />
        {children}

        <Button className="bg-[#BD0707] font-semibold mx-10 mt-7 h-[35px] text-white rounded-md">
          Add Toping
        </Button>
      </form>
    </div>
  );
};

export default FormAddToping;
