import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between border py-3 px-5 border-gray-300 shadow-md bg-gray-400">
        <div className="flex justify-center md:ml-10">
          <span className="font-bold text-2xl">ID-Generator</span>
        </div>

        <div className="flex flex-col ml-2 md:flex-row gap-20 mr-10">
          <div className="cursor-pointer hover:text-red-500 ">
            <span>Home</span>
          </div>
          <div className="cursor-pointer hover:text-red-500">
            <span>Templates</span>
          </div>
          <div className="cursor-pointer hover:text-red-500">
            <span>Contact us</span>
          </div>
          <div className="cursor-pointer hover:text-red-500">
            <span>About us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
