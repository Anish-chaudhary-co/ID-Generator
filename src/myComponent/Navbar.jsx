import React,{useState} from "react";

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
      border border-gray-300
      shadow-md
      bg-green-400
      py-5
      px-5
    "
  >
    
    {/* Logo */}
    <div className="mb-10 md:mb-0">
      <span className="font-bold text-xl">
        ID-Generator
      </span>
    </div>

    {/* Menu */}
    <div className="flex flex-col md:flex-row gap-10 md:gap-20">
      
      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <span>Home</span>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <span>Templates</span>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <span>Contact us</span>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-red-500 h-9 w-20 flex items-center justify-center rounded-md">
        <span>About us</span>
      </div>

    </div>
  </div>
</div>

<div className="flex justify-between md:hidden items-center bg-green-300 px-5 py-4">
  <h1 >ID-Generator</h1>
      <button className="text-2xl" onClick={()=>setOpen(!open)}>☰</button>


<div className=  {`fixed
          top-0
          left-0
          h-screen
          w-52
          bg-green-400
          transform
          transition-transform
          duration-300
          md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}>
     <div className="flex flex-col fixed top-16 left-0 right-0 md:flex-row md:gap-20">
      
      <div className="cursor-pointer hover:text-white bg-green-200 hover:bg-green-300 flex items-center justify-center rounded-md py-5 px-full">
        <span>Home</span>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-green-300 flex items-center justify-center rounded-md py-5 px-full">
        <span>Templates</span>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-green-300 flex items-center justify-center rounded-md py-5 px-full">
        <span>Contact us</span>
      </div>

      <div className="cursor-pointer hover:text-white hover:bg-green-300  flex items-center justify-center rounded-md py-5 px-full">
        <span>About us</span>
      </div>

    </div>

</div>
</div>
</>
  );
};

export default Navbar;


