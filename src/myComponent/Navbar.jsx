import React from "react";

const Navbar = () => {
  return (
    <div>
  <div
    className="
      flex flex-col
      md:flex-row
      justify-start md:justify-between
      items-center
      w-30 md:w-full
      h-screen md:h-auto
      border border-gray-300
      shadow-md
      bg-gray-400
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
      
      <div className="cursor-pointer hover:text-red-500">
        <span>Home</span>
      </div>

      <div className="cursor-pointer hover:text-red-500">
        <span>Templates</span>
      </div>

      <div className="cursor-pointer hover:text-red-500">
        <span>Contact us</span>
      </div>

      <div className="cursor-pointer hover:text-red-500 md:hover:text-red-500">
        <span>About us</span>
      </div>

    </div>
  </div>
</div>
  );
};

export default Navbar;






// import React, { useState } from "react";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex justify-between items-center bg-gray-400 px-10 py-5">

//         <h1 className="text-2xl font-bold">
//           ID-Generator
//         </h1>

//         <div className="flex gap-10">
//           <span className="cursor-pointer hover:text-red-500">
//             Home
//           </span>

//           <span className="cursor-pointer hover:text-red-500">
//             Templates
//           </span>

//           <span className="cursor-pointer hover:text-red-500">
//             Contact
//           </span>

//           <span className="cursor-pointer hover:text-red-500">
//             About
//           </span>
//         </div>
//       </div>

//       {/* Mobile Top Bar */}
//       <div className="flex md:hidden justify-between items-center bg-gray-400 px-5 py-4">

//         <h1 className="text-2xl font-bold">
//           ID-Generator
//         </h1>

//         <button
//           onClick={() => setOpen(!open)}
//           className="text-3xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`
//           fixed
//           top-0
//           left-0
//           h-screen
//           w-52
//           bg-gray-500
//           transform
//           transition-transform
//           duration-300
//           md:hidden
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >

//         <div className="flex flex-col gap-10 mt-20 ml-5 text-white">

//           <span className="cursor-pointer hover:text-red-400">
//             Home
//           </span>

//           <span className="cursor-pointer hover:text-red-400">
//             Templates
//           </span>

//           <span className="cursor-pointer hover:text-red-400">
//             Contact
//           </span>

//           <span className="cursor-pointer hover:text-red-400">
//             About
//           </span>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
