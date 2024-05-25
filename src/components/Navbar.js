import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  IoLocation,
  IoNotifications,
} from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-[#0c1b2d] w-full h-20 rounded-xl p-4 md:px-6 md:py-2">
      <div className=" w-full h-full hidden md:flex justify-between items-center ">
        {/* left */}
        <div className=" flex justify-center items-center text-white">
          <a href="\">
            <IoLocation size={32}></IoLocation>
          </a>
          <p className="text-2xl font-semibold tracking-wider mx-2">
            Fleet&nbsp;Management
          </p>
        </div>
        {/* right */}
        <div className="hidden md:flex justify-center items-center text-white">
          <IoNotifications
            size={30}
            className="cursor-pointer"
          ></IoNotifications>
          <div className=" rounded-full w-12 h-12 mr-2 ml-6 ">
            <img
              src="https://res.cloudinary.com/dkqxnquga/image/upload/v1678437077/image_pnfays.jpg"
              className="cursor-pointer w-full h-full rounded-full "
              alt="user"
            ></img>
          </div>
          <IoMdArrowDropdown
            size={25}
            className="cursor-pointer"
          ></IoMdArrowDropdown>
        </div>
      </div>

      {/* mobile */}
        <div className="w-full h-full items-center justify-between md:hidden inline-flex">
          {/* left */}
        <div className=" flex justify-center items-center text-white">
          <a href="\" >
            <IoLocation size={32}></IoLocation>
          </a>
          <p className="text-2xl font-semibold tracking-wider mx-2">
            Fleet&nbsp;Management
          </p>
        </div>
        {/* right */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-white z-10 "
          >
            {nav ? (
              <>
                <FaTimes size={30} />
              </>
            ) : (
              <FaBars size={30} />
            )}
          </div>
        </div>
    </div>
  );
}

export default Navbar;
