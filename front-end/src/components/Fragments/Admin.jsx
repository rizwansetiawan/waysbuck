import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className=" rounded-lg h-[500px] mx-[150px] flex flex-col">
        <h1 className="relative overflow-x-auto text-2xl font-bold text-[#BD0707] mb-5 mt-5">
          Income Transaction
        </h1>
        <div className="w-full px-[30px] pt-5">
          <table className="w-full border-collapse border border-[#828282] bg-white ">
            <thead>
              <tr>
                <th className="text-start pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  No
                </th>
                <th className="text-start pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  Name
                </th>
                <th className="text-start pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  Address
                </th>
                <th className="text-start pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  Post Code
                </th>
                <th className="text-start pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  Income
                </th>
                <th className="text-start pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  Status
                </th>
                <th className="text-center pl-2 py-2 font-bold bg-[#E5E5E5] border border-slate-600 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-2 py-2 border border-slate-700 ">1</td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Sugeng No Pants
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Cileungsi
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">16820</td>
                <td className="pl-2 py-2 border border-slate-700 text-[#061E99]">
                  69.000
                </td>
                <td className="pl-2 py-2 border border-slate-700 font-semibold text-[#F90]">
                  Waiting Approve
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  <div className="flex flex-row justify-evenly items-center">
                    <Link
                      to="/login"
                      className="text-xs px-5 font-semibold py-1 rounded-lg text-white bg-[#FF0742]"
                    >
                      Cancel
                    </Link>
                    <Link
                      to="/register"
                      className="text-xs px-5 font-semibold py-1 rounded-lg text-white bg-[#0ACF83]"
                    >
                      Approve
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 border border-slate-700 ">3</td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Sugeng No Pants
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Cileungsi
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">16820</td>
                <td className="pl-2 py-2 border border-slate-700 text-[#061E99]">
                  69.000
                </td>
                <td className="pl-2 py-2 border border-slate-700 font-semibold text-[#78A85A]">
                  Success
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  <div className="w-full flex flex-row justify-center">
                    <img
                      width={"30px"}
                      src="./src/assets/Img/approve.png"
                      alt=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 border border-slate-700 ">2</td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Sugeng No Pants
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Cileungsi
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">16820</td>
                <td className="pl-2 py-2 border border-slate-700 text-[#061E99]">
                  69.000
                </td>
                <td className="pl-2 py-2 border border-slate-700 font-semibold text-[#E83939]">
                  Cancel
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  <div className="w-full flex flex-row justify-center">
                    <img
                      width={"30px"}
                      src="./src/assets/Img/cancel.png"
                      alt=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 border border-slate-700 ">3</td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Sugeng No Pants
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  Cileungsi
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">16820</td>
                <td className="pl-2 py-2 border border-slate-700 text-[#061E99]">
                  69.000
                </td>
                <td className="pl-2 py-2 border border-slate-700 font-semibold text-[#00D1FF]">
                  On The Way
                </td>
                <td className="pl-2 py-2 border border-slate-700 ">
                  <div className="w-full flex flex-row justify-center">
                    <img
                      width={"30px"}
                      src="./src/assets/Img/approve.png"
                      alt=""
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
