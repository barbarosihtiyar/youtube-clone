import React from "react";
import { AiFillYoutube, HiOutlineSearch } from "../components/index";

const Navbar = () => {
  return (
    <div className="px-5 py-3">
      <div className="flex justify-between align-center">
        <AiFillYoutube className="text-3xl text-red-600" />
        <div className="flex justify-between bg-white rounded-xl text-red-600 px-3 py-1 w-64">
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search.."
          />
          <button type="button">
            <HiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
