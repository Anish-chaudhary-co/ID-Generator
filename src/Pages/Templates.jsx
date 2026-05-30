import React, { useState } from "react";
import { Link } from "react-router-dom";
import selectedTemplate from "../Templates/Templates";

// import Templates1 from "../assets/templates1.png";
// import Templates2 from "../assets/templates2.png";
// import Templates3 from "../assets/templates3.png";
// import Templates4 from "../assets/templates4.png";
// import Templates5 from "../assets/templates5.png";
// { handleTemplateSelect }

const Templates = ({ handleTemplateClick }) => {
  // const handleTemplateClick = (template) => {
  //   handleTemplateSelect(template);
  // };

  const handleClick = (item) => {
    handleTemplateClick(item);
  };

  // const [takeDetail,setTakeDetail] = useState(null);
  // const handleTemplateClick =(template)=>{
  //     setTakeDetail(template);
  // }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:ml-14">
        {selectedTemplate.map((template, index) => (
          <div key={index} className="gap-4 border m-4 p-2 w-90 md:w-97 h-99 md:h-90 rounded-lg shadow-lg relative">
            <h1 className="text-2xl font-bold">{template.templateName}</h1>
            <button className="absolute bottom-3 left-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded-sm">Preview</button>
            <Link key={index} to="/personalDetailed">
              <button
                onClick={() => {
                  handleClick(template);
                }}
                className="absolute bottom-3 right-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded-sm"
              >
                Create Id
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Templates;
