import React from "react";
import Navbar from "./Navbar";
import logo from "../../assets/Svg/logo.svg";
import qrcode from "../../assets/Svg/qrcode.svg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFFBFB] rounded-lg h-[500px] mx-[150px] flex flex-row justify-between items-center">
        <div className="grid grid-cols-5 w-screen h-full ">
          <MyProfile />
          <MyTransaction />
        </div>
      </div>
    </>
  );
};

const MyProfile = () => {
  return (
    <div className="col-span-2 ">
      {" "}
      <h1 className=" text-2xl font-bold text-[#BD0707] mb-5">My Profile</h1>
      <div className="flex flex-row gap-5">
        <img src="./src/assets/Img/profile.png" alt="" className="rounded-lg" />
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-bold mb-1 text-[#613D2B]">Fullname</h3>
            <p className="font-smeibold">Zohan</p>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-[#613D2B]">Email</h3>
            <p className="font-smeibold">Zohan@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyTransaction = () => {
  return (
    <div className="col-span-3 pl-8 ">
      <div>
        <h1 className=" text-2xl font-bold text-[#613D2B] mb-5">
          My Transaction
        </h1>
        <div className="bg-[#F6DADA] rounded-lg flex flex-row h-auto">
          <div className="h-full w-[75%]">
            <div className=" flex rounded-lg flex-row px-4 py-5">
              <img src="./src/assets/Img/cart1.png" alt="" />
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col justify-between gap-4 pl-3 text-xs">
                  <div>
                    <h3 className="text-[#BD0707] font-bold text-lg">
                      Ice Coffe Palm Sugar
                    </h3>
                    <p className="text-[#BD0707]">
                      {" "}
                      <span className="text-[#BD0707] font-bold">Sunday</span> ,
                      13 Oct 2023
                    </p>
                  </div>
                  <div>
                    <p className="text-[#BD0707] font-semibold mb-1">
                      {" "}
                      <span className="text-[#974A4A] ">Toping</span> : Bill
                      Berry Boba, Bubble Tea Gelatin
                    </p>
                    <p className="text-[#BD0707]">Price : Rp.27.000 </p>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-between items-end py-3 pl-3 text-sm">
                      <h3 className="text-[#BD0707]">Rp.27.000</h3>
                      <img src={trash} alt="" />
                    </div> */}
              </div>
            </div>
            <div className=" flex rounded-lg flex-row px-4 py-5">
              <img src="./src/assets/Img/cart1.png" alt="" />
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col justify-between gap-4 pl-3 text-xs">
                  <div>
                    <h3 className="text-[#BD0707] font-bold text-lg">
                      Ice Coffe Palm Sugar
                    </h3>
                    <p className="text-[#BD0707]">
                      {" "}
                      <span className="text-[#BD0707] font-bold">Sunday</span> ,
                      13 Oct 2023
                    </p>
                  </div>
                  <div>
                    <p className="text-[#BD0707] font-semibold mb-1">
                      {" "}
                      <span className="text-[#974A4A] ">Toping</span> : Bill
                      Berry Boba, Bubble Tea Gelatin
                    </p>
                    <p className="text-[#BD0707]">Price : Rp.27.000 </p>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-between items-end py-3 pl-3 text-sm">
                      <h3 className="text-[#BD0707]">Rp.27.000</h3>
                      <img src={trash} alt="" />
                    </div> */}
              </div>
            </div>
          </div>
          <div className="gap-5 pt-5 pb-5 w-[25%] h-full flex flex-col items-center">
            <img src={logo} alt="" width={"55px"} />
            <img src={qrcode} alt="" width={"55px"} />

            <div className="bg-[#00D1FF] bg-opacity-10 w-[85%] py-1">
              <p className="text-[#00D1FF] text-sm text-center font-semibold">
                On The Wayt
              </p>
            </div>
            <h3 className="text-center text-sm font-bold text-[#974A4A]">
              Sub Total : 54.000
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
