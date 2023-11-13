import React, { useState } from "react";
import Navbar from "./Navbar";
import FormCart from "./FormCart";
import trash from "../../assets/Svg/trash.svg";
import transaction from "../../assets/Svg/transaction.svg";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFFBFB] rounded-lg h-[500px] mx-[150px] flex flex-row justify-between items-center">
        <div className="grid grid-cols-3 w-screen h-full ">
          <div className="col-span-2 pr-16">
            <div>
              <h1 className=" text-3xl font-bold text-[#BD0707] mb-7">
                My Cart
              </h1>
              <p className=" text-xl font-normal text-[#BD0707] mb-4">
                Review Your Order
              </p>
              <hr className="border-[#BD0707] border-[1px]" />
              <div className=" w-full mt-5 flex flex-row">
                <img src="./src/assets/Img/cart1.png" alt="" />
                <div className="w-full flex flex-row justify-between">
                  <div className="flex flex-col justify-between py-3 pl-3 text-sm">
                    <h3 className="text-[#BD0707] font-bold">
                      Ice Coffe Palm Sugar
                    </h3>
                    <p className="text-[#BD0707]">
                      {" "}
                      <span className="text-[#974A4A] font-semibold">
                        Toping
                      </span>{" "}
                      : Bill Berry Boba, Bubble Tea Gelatin
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end py-3 pl-3 text-sm">
                    <h3 className="text-[#BD0707]">Rp.27.000</h3>
                    <img src={trash} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <Total />
          </div>

          <div className="col-span-1 pt-20 pb-20">
            <FormCart />
          </div>
        </div>
      </div>
    </>
  );
};

const Total = () => {
  return (
    <div>
      <hr className="border-[#BD0707] border-[1px] mt-4 mb-9" />
      <div className="grid grid-cols-3">
        <div className="col-span-2 pr-14">
          <hr className="border-[#BD0707] border-[1px] mt-1" />
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col justify-between py-3 text-sm">
              <h3 className="text-[#BD0707] mb-2">Subtotal</h3>
              <p className="text-[#BD0707]">Qty</p>
            </div>
            <div className="flex flex-col justify-between items-end py-3 pl-3 text-sm">
              <h3 className="text-[#BD0707]">27.000</h3>
              <p className="text-[#BD0707]">2</p>
            </div>
          </div>
          <hr className="border-[#BD0707] border-[1px]" />
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col justify-between py-3 text-sm">
              <h3 className="text-[#BD0707] font-bold">Total</h3>
            </div>
            <div className="flex flex-col justify-between items-end py-3 pl-3 text-sm">
              <h3 className="text-[#BD0707] font-bold">27.000</h3>
            </div>
          </div>
        </div>
        <ImageReview />
      </div>
    </div>
  );
};

const ImageReview = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      readAndPreview(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      readAndPreview(file);
    }
  };

  const readAndPreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="col-span-1">
      <div
        className="flex items-center justify-center w-full"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border-2 border-[#BD0707] border-solid rounded-lg cursor-pointer bg-[#f7eeee] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {selectedFile ? (
              <img src={selectedFile} alt="Preview" className="max-h-24 mb-2" />
            ) : (
              <img src={transaction} alt="" />
            )}
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {selectedFile ? "Selected File" : "Attach a Transaction"}
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Cart;
