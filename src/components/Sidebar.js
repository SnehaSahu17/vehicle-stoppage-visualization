import React from "react";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi";
import { GrAnalytics } from "react-icons/gr";
import { FaCaretRight } from "react-icons/fa";



export const Sidebar=({nav,setNav})=> {

  return (
    <div className="bg-[#0c1b2d]  w-14 md:w-16 h-[70%] rounded-xl p-4 ">
      <div className="w-full h-full  flex flex-col justify-between items-center gap-24">
        {/* top */}
        <div className="flex flex-col justify-center items-center text-white">
          <button
            className="mb-4 hover:bg-blue-500 active:bg-blue-500"
            onClick={() => setNav(!nav)}
          >
            <MdOutlineDashboard size={30}></MdOutlineDashboard>
          </button>
          <button className="my-4 hover:bg-blue-500 active:bg-blue-500">
            <HiOutlineTruck size={30}></HiOutlineTruck>
          </button>
          <button className="my-4 hover:bg-blue-500 active:bg-blue-500">
            <GrAnalytics size={30}></GrAnalytics>
          </button>
          <button className="my-4 hover:bg-blue-500 active:bg-blue-500">
            <MdOutlineSettings size={30}></MdOutlineSettings>
          </button>
        </div>
        {/* bottom */}
        <din className="flex flex-col justify-center items-center text-white">
          <FaCaretRight size={20} className="cursor-pointer"></FaCaretRight>
        </din>
      </div>
    </div>
  );
}
export default Sidebar;

