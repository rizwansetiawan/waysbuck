import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, box, type } = props;

  return (
    <div className="bg-[#FFFBFB] font-avenir min-h-screen min-w-max flex flex-col justify-center items-center">
      <div
        className={`${box} w-[350px] rounded-[10px] shadow-lg flex flex-col px-7 py-10`}
      >
        <h1 className="text-[#BD0707] text-3xl font-black ">{title}</h1>
        {children}
        <InfoLInk type={type} />
      </div>
    </div>
  );
};

const InfoLInk = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-4 text-center text-sm">
        Don't have an account ?
        <Link to="/register" className="font-bold">
          {" "}
          Register
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="mt-4 text-center text-sm">
        Already have an account ?
        <Link to="/login" className="font-bold">
          {" "}
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
