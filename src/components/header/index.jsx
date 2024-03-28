import React, { useEffect, useState } from "react";
import { MdSearch, MdShoppingBag } from "react-icons/md";
import logo from "../../assets/images/logo-Jm4BVSCI.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Header = () => {
  const [open, setOpen] = useState(false);

  const cardData = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div className="bg-gray-100 shadow-md ">
      <div className="container mx-auto py-2 ">
        <div className="grid  grid-cols-12">
          <div className="md:flex md:justify-end  hidden  col-span-7">
            <Link href="#" className="font-bold text-2xl flex gap-5 ">
              <span className="hidden md:block text-red-600"> E-COMMERCE</span>
            </Link>
          </div>
          <div className=" flex  justify-end gap-10 items-center  col-span-12 md:col-span-5">
            <Link to={"/login"}>
              <FaUser className="text-gray-500 group-hover:text-primary text-2xl" />
            </Link>

            <div className="relative">
              <MdShoppingBag
                onClick={() => setOpen(!open)}
                className="text-gray-500 group-hover:text-primary text-2xl"
              />
              <span className="absolute top-[-10px] right-[-30px] bg-black text-center text-white rounded-full px-2 p-1  ">
                {cardData.length}
              </span>
            </div>

            <div
              className="text-3xl mx-5 z-[1] text-black md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <MdClose className="text-gray-600" />
              ) : (
                <GiHamburgerMenu className="text-gray-600" />
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div className="  justify-center md:flex   ">
            <nav className="">
              <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between"></div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                  <li>
                    <Link to="/" className="py-7 px-3 inline-block">
                      Home
                    </Link>
                  </li>
                  <Navlinks />
                </ul>

                {/* Mobile nav */}
                <ul
                  className={`
                      md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"} `}>
                  <li>
                    <Link to="/" className="py-7 px-3 inline-block">
                      Home
                    </Link>
                  </li>
                  <Navlinks />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-20 right-0 h-full w-64 bg-slate-200 shadow-lg z-10 overflow-y-auto transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full hidden"
        }`}
        // className={` ${open ? "right-0" : " right-[-300px]"} bg-slate-300 w-48 h-screen  absolute top-20 z-10  transition-all duration-500  `}
      >
        <div>
          {cardData.map((items) => (
            <div className="p-4 my-4">
              <div>
                {" "}
                <img src={items.image} width={50} height={50} alt="" />
              </div>
              <div>
                <p>{items.title.slice(0, 30)}...</p>
                <p>$ {items.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
