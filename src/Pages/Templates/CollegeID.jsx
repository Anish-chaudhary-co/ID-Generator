import React from "react";

const IdCard = ({ template, data }) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg border overflow-hidden">

      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-3">
        <h2 className="text-lg font-bold">{data.organization}</h2>
        <p className="text-xs">{template.templateName}</p>
      </div>

      {/* Body */}
      <div className="p-4 flex gap-4 items-center">

        {/* Image */}
        <img
          src={data.img}
          alt="student"
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />

        {/* Dynamic Fields */}
        <div className="text-sm space-y-1">
          {template.fields.map((field, index) => {
            if (field === "img") return null;

            return (
              <p key={index} className="text-gray-700">
                <span className="font-semibold capitalize">
                  {field}:
                </span>{" "}
                {data[field]}
              </p>
            );
          })}
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gray-100 text-right px-4 py-2 text-xs text-gray-500">
        Valid Until: {data.validity}
      </div>
    </div>
  );
};

export default IdCard;