import React from "react";
import { categories } from "../utils/constant";
import { useMainContext } from '../contexts/context';

const Sidebar = () => {
  const {selectedCategory,setSelectedCategory} = useMainContext();

  console.log(selectedCategory)
  return (
    <div className="fixed h-full overflow-hidden hover:overflow-auto w-56 border-r-1 border-slate-400">
      {categories.map((category, index) => (
        <div key={index} onClick={() => setSelectedCategory(category.name)}>
          {selectedCategory === category.name ? 
            <div className="flex gap-x-2 ms-2 px-3 py-2 my-4 cursor-pointer bg-red-600 rounded-full w-5/6  text-white ">
            <span className="text-white categoryIcon">{category.icon}</span>
            <span>{category.name}</span>
          </div>
          :
          <div className="flex gap-x-2 ms-2 px-3 py-2 my-4 cursor-pointer hover:bg-red-600 rounded-full w-5/6  hover:text-white sideBar">
            <span className="text-red-600 categoryIcon">{category.icon}</span>
            <span>{category.name}</span>
          </div>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
