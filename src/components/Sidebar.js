import React, { useState } from "react";
import { categories } from "../utils/constant";

const Sidebar = () => {
  const [clickedCategory,setClickedCategory] = useState(0)

  const changeClicked = (key) => {
    setClickedCategory(key)
    console.log(clickedCategory)
  }
  return (
    <div className="fixed h-full overflow-hidden hover:overflow-auto w-56 border-r-1 border-slate-400">
      {categories.map((category, index) => (
        <div key={index} onClick={() => changeClicked(index)}>
          <div className="flex gap-x-2 ms-2 px-3 py-2 my-4 cursor-pointer hover:bg-red-600 rounded-full w-5/6  hover:text-white sideBar">
            <span className="text-red-600 categoryIcon">{category.icon}</span>
            <span>{category.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
