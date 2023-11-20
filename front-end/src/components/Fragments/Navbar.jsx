import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/Svg/logo.svg";
import product from "../../assets/Svg/product.svg";
import toping from "../../assets/Svg/toping.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-20 py-5  flex flex-row justify-between items-center">
      <Link to={"/"}>
        <img src={logo} alt="" width={"55px"} />
      </Link>
      <Avatar status={"admin"} />
    </div>
  );
};

const Avatar = ({ status }) => {
  if (status === "notlogin") {
    return (
      <div className=" flex flex-row gap-5 justify-center items-center">
        <Link
          to="/login"
          className="text-sm  px-5 py-[2px] rounded-[5px] text-[#BD0707] bg-[#FFFBFB] border-2 border-[#BD0707]"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-sm px-5 py-[2px] rounded-[5px] text-[#FFFBFB] bg-[#BD0707] border-2 border-[#BD0707]"
        >
          Register
        </Link>
      </div>
    );
  } else if (status === "login") {
    return <AvatarUser />;
  } else if (status === "admin") {
    return <AvatarAdmin />;
  }
};

const AvatarUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener ke elemen dokumen ketika komponen did-mount
    document.addEventListener("click", closeDropdown);

    // Hapus event listener ketika komponen unmount
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div
      className="relative flex flex-row items-center text-left"
      ref={dropdownRef}
    >
      <button className="mr-5">
        <img src="./src/assets/Svg/cart.svg" width={"30px"} alt="" />
      </button>
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center  hover:text-gray-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-150 ease-in-out p-0 rounded-full overflow-hidden"
      >
        <img src="./src/assets/Svg/avatar.svg" width={"45px"} alt="" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 top-12 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="flex flex-row items-center gap-3 border-b-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
              role="menuitem"
            >
              <img width={"30px"} src="./src/assets/Svg/profile.svg" alt="" />
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center gap-3  px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
              role="menuitem"
            >
              <img width={"30px"} src="./src/assets/Svg/logout.svg" alt="" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const AvatarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener ke elemen dokumen ketika komponen did-mount
    document.addEventListener("click", closeDropdown);

    // Hapus event listener ketika komponen unmount
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div
      className="relative flex flex-row items-center text-left"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center  hover:text-gray-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-150 ease-in-out p-0 rounded-full overflow-hidden"
      >
        <img src="./src/assets/Svg/avatar.svg" width={"45px"} alt="" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 top-12 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="flex flex-row items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
              role="menuitem"
            >
              <img width={"30px"} src="./src/assets/Svg/profile.svg" alt="" />
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center gap-3  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
              role="menuitem"
            >
              <img width={"30px"} src={product} alt="" />
              <span>Add Product</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center gap-3 border-b-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
              role="menuitem"
            >
              <img width={"30px"} src={toping} alt="" />
              <span>Add Toping</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center gap-3  px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
              role="menuitem"
            >
              <img width={"30px"} src="./src/assets/Svg/logout.svg" alt="" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
