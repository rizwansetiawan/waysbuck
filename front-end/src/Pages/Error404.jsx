import React from "react";

const error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img
        width={"500px"}
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1060&t=st=1699515445~exp=1699516045~hmac=21c74de0abfcd12d1a1eb7b6226adbbed460338f68b5806d125000a5a9461428"
        alt=""
      />
      <h1 className="text-3xl">PAGE NOT FOUND.</h1>
    </div>
  );
};

export default error;
