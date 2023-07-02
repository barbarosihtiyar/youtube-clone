import React, { useState } from "react";
import { AiFillYoutube, HiOutlineSearch, SearchBar } from "../components/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5 py-3 mt-3">
      <div className="flex justify-between align-center">
        <Link to="/"><AiFillYoutube className="text-3xl text-red-600" /></Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
