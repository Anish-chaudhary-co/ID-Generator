import React,{useState} from "react";
import {FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div>
  <div
    className="
      hidden
      md:flex flex-row
      justify-start md:justify-between
      items-center
      w-30 md:w-full
      h-screen md:h-auto
      py-5
      px-5
      shadow-gray-300
      shadow-lg
    "
  >
    
    {/* Logo */}
    <div className="mb-10 md:mb-0">
      <span className="font-bold text-xl">
        IDGen
      </span>
    </div>

    {/* Menu */}
    <div className="flex flex-col md:flex-row gap-10 md:gap-20">
      
      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <Link to="/">Home</Link>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <Link to="/templates">Templates</Link>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <Link to="/contact">Contact us</Link>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <Link to="/about">About us</Link>
      </div>

    </div>
  </div>
</div>

<div className="flex justify-between md:hidden items-center shadow-gray-200 shadow-lg px-5 py-4">
  <h1 >IDGen</h1>
      <button className="text-2xl" onClick={()=>setOpen(!open)}>☰</button>


<div className=  {`fixed
          top-0
          left-0
          h-screen
          w-52
          bg-gray-200
          shadow-lg
          shadow-gray-600
          rounded-2xl
          transform
          transition-transform
          duration-300
          md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}>
      <FaTimes className="text-2xl absolute top-5 right-5 cursor-pointer" onClick={()=>setOpen(false)}/>

     <div className="flex flex-col fixed top-16 left-0 right-0 md:flex-row md:gap-20">

      
      <div className="cursor-pointer hover:text-white hover:bg-green-200 flex items-center justify-center rounded-md py-5 px-full">
        <Link to="/">Home</Link>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-green-200 flex items-center justify-center rounded-md py-5 px-full">
        <Link to="/templates">Templates</Link >
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-green-200 flex items-center justify-center rounded-md py-5 px-full">
        <Link to="/contact">Contact us</Link>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-green-200  flex items-center justify-center rounded-md py-5 px-full">
        <Link to="/about">About us</Link>
      </div>

    </div>

</div>
</div>
</>
  );
};

export default Navbar;


