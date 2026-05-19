import React, { useState } from "react";
import { Link } from "react-router-dom";

import idCard from "../assets/Card.png";

const Introduction = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-9 mt-10 md:m-30 md:gap-30 md:flex-row">
        <div className="m-2 rounded-lg p-10 flex flex-col gap-5 shadow-2xl shadow-gray-300 md:h-107 md:w-[60%]">
          <h1 className="text-2xl font-bold">
            Create <br></br> Professional<br></br> Identity Cards
          </h1>
          <span className="text-gray-500 md:mt-10">
            Generate high-Quality, print-ready ID cards in seconds. Choose from
            our premium templates or build your own custom design with out
            drag-and-drop editor.
          </span>
          <div className="flex gap-4 ml-3 md:mt-17">
            <Link
              to="/template"
              className="py-3 px-6 rounded-lg bg-amber-500 text-white shadow-2xl"
            >
              Browse Templates
            </Link>
            <Link
              to="/custom"
              className="border py-3 px-6 rounded-lg border-gray-300"
            >
              Build Your Own
            </Link>
          </div>
        </div>

        <div className="m-2 flex justify-center">
  
  <div className="
    w-full 
    max-w-[650px] 
    h-[250px] 
    sm:h-[300px] 
    md:h-[430px]
    rounded-xl 
    overflow-hidden 
    shadow-xl 
    shadow-gray-300 
    border 
    border-gray-200
  ">
    
    <img
      src={idCard}
      alt="ID Card Templates"
      className="w-full h-full object-cover"
    />

  </div>

</div>
      </div>
    </>
  );
};

export default Introduction;
