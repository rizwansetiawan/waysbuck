import React from "react";

const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-2 mt-5 h-[35px] rounded-md border-2 border-[#BD0707] text-sm"
    />
  );
};

export default Input;
