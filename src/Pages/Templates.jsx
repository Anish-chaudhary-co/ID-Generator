import React, { useState } from "react";
import { Link } from "react-router-dom";

import Templates1 from "../assets/templates1.png";
import Templates2 from "../assets/templates2.png";
import Templates3 from "../assets/templates3.png";
import Templates4 from "../assets/templates4.png";
import Templates5 from "../assets/templates5.png";

const Templates = ({ handleTemplateSelect }) => {
  const handleTemplateClick = (template) => {
    handleTemplateSelect(template);
  };

  return (
    <>
      <div className="m-4">
        <h1 className="text-4xl font-bold from-blue-950 to-blue-100 bg-clip-text text-transparent">
          Templates
        </h1>
        <span className="text-gray-400">
          Design stunning organization ID cards with clean, professional, and
          eye-catching templates.
        </span>
      </div>
      <hr className="m-4 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:m-9">
        <Link
          to="/personalDetailed"
          className="bg-gray-400 m-2 border border-gray-50 shadow-2xl rounded-lg overflow-hidden md:overflow-hidden h-[35rem] md:h-[35rem] md:w-90"
        >
          <img
            className="h-full w-full object-cover"
            onClick={() => handleTemplateClick(Templates1)}
            src={Templates1}
            alt="Template"
          />
        </Link>
        <Link
          to="/personalDetailed"
          className="bg-gray-400 m-2 border border-gray-50 shadow-2xl rounded-lg overflow-hidden md:overflow-hidden h-[20rem] md:h-[25rem]"
        >
          <img className="h-full w-full" 
          onClick={() => handleTemplateClick(Templates4)}
          src={Templates4} alt="Templates" />
        </Link>
        <Link
          to="/personalDetailed"
          className="bg-gray-400 m-2 border border-gray-50 shadow-2xl rounded-lg overflow-hidden md:overflow-hidden md:h-[40rem] md:w-90"
        >
          <img
            className="h-full w-full object-cover"
            onClick={() => handleTemplateClick(Templates3)}
            src={Templates3}
            alt="Templates"
          />
        </Link>
        <Link
          to="/personalDetailed"
          className="bg-gray-400 m-2 border border-gray-50 shadow-2xl rounded-lg overflow-hidden md:overflow-hidden h-[15rem] md:h-[20rem]"
        >
          <img
            className="h-full w-full object-cover"
            onClick={() => handleTemplateClick(Templates2)}
            src={Templates2}
            alt="Templates"
          />
        </Link>
        <Link
          to="/personalDetailed"
          className="bg-gray-400 m-2 border border-gray-50 shadow-2xl rounded-lg overflow-hidden md:overflow-hidden h-[15rem] md:h-[20rem]"
        >
          <img
            className="h-full w-full object-cover"
            onClick={() => handleTemplateClick(Templates5)}
            src={Templates5}
            alt="Templates"
          />
        </Link>
      </div>
    </>
  );
};

export default Templates;
