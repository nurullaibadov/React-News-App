import React from "react";
import { IoMdSearch } from "react-icons/io";
const Header = ({ onFilterChange }) => {
  return (
    <div>
      <nav className="flex justify-between mt-[-30px] p-20">
        <div className="nav-heading flex ">
          <p className="text-red-500  text-2xl mt-[-8px]">MEGA.news</p>
          <ul className="flex ml-16 mt-[-2.3px] text-[#3E3232]">
            <li>
              <a href="#" className=" capitalize text-xl">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="ml-10 mr-10  capitalize text-xl">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="mr-10  capitalize text-xl">
                contact us
              </a>
            </li>
            <li>
              <a href="#" className=" capitalize text-xl">
                about us
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-footing">
          <input
            type="text"
            placeholder="search anything "
            className="w-80 p-2  rounded-lg bg-gray-200 mt-[-5px]"
            onChange={onFilterChange}
          />
          <IoMdSearch className=" relative top-[-34px]   left-[86%] text-3xl " />
        </div>
      </nav>
    </div>
  );
};

export default Header;
