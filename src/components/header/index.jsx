import React from 'react'
import { MdSearch, MdShoppingBag } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="shadow-md   bg-gray-100 duration-200 relative z-40">
        {/* upper navbarD */}
        <div className="bg-primary/40 py-2 ">
          <div className="container flex justify-between items-center ">
            <div className="">
              <a href="#" className="font-bold text-2xl flex gap-2">
                <img src={""} alt="" className="w-10" />
              E-commerce
              </a>
            </div>
            <div className="flex justify-between gap-3 items-center ">
            <div>
              <div className="group relative hidden sm:block">
                <input
                  type="search"
                  placeholder="Search here"
                  className="w-[200px] px-2 py-1 sm:w-[200px] group-hover:w-[300px] border-gray-300 rounded-full border transition-all duration-300  focus:border-1 focus:outline-none focus:border-primary "
                />
                <MdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            <button
              onClick={() => alert("order")}
              className="bg-blue-400 transition-all duration-200 items-center text-white py-1 px-4 gap-3 group flex rounded-full"
            >
              <span className=" group-hover:block hidden transition-all duration-200">
                Cart
              </span>
              <MdShoppingBag className="text-2xl text-white drop-shadow-sm cursor-pointer" />
            </button>
             
            <button
              onClick={() => alert("order")}
              className="bg-blue-400 transition-all duration-200 items-center text-white py-1 px-4 gap-3 group flex rounded-full"
            >
              <span className=" group-hover:block hidden transition-all duration-200">
                Login
              </span>
              <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
  
            </div>
          </div>
        </div>
        {/* down navbarD */}
        <div>
        <div class="flex  items-center justify-center  sm:justify-center py-4">
         
          <div class="sm:ml-6 sm:block">
            <div class="flex space-x-24">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link to="#" class=" text-black hover:bg-gray-700  hover:text-white rounded-md px-3 py-2 text-sm font-medium " aria-current="page">Home</Link>
              <Link to="#" class="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">Team</Link>
              <Link to="#" class="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">Projects</Link>
              <Link to="#" class="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">Calendar</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default Header;