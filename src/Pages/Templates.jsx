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
const [templatePreview, setTemplatePreview] = useState(null);

  const handleClick = (item) => {
    handleTemplateClick(item);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:ml-14">
        {selectedTemplate.map((template, index) => (
          <div key={index} className="relative gap-4 border m-4 p-2 py-60 rounded-lg shadow-lg"
          onClick={() => setTemplatePreview(template)}
          >
            <h1 className="absolute top-2 text-2xl font-bold">{template.templateName}</h1>
            
          </div>
        ))}
      </div>
      {
        templatePreview && (
          <div 
          onClick={()=>setTemplatePreview(null)}
          className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
            <div 
            onClick={(e)=>e.stopPropagation()}
            className="relative bg-white p-4 rounded-lg shadow-lg py-13 ">
              <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl">{templatePreview.templateName}</h2>
              <button
              className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-sm"
              onClick={()=>setTemplatePreview(null)}>X</button>
              </div>
              <div className="border m-2 p-2 w-70 md:w-97 h-99 md:h-90 rounded-lg shadow-lg">
                here we will show the preview of template
              </div>

              <div>
                <Link to="/personalDetailed">
                <button onClick={() => handleClick(templatePreview)} className="absolute bottom-2 right-4 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold px-4 py-2 rounded-sm">
                  Use Template
                </button>
                </Link>
              </div>

            </div>
          </div>
        )
      }
    </>
  );
};

export default Templates;
