import React from "react";

const PersonalDetailed = () => {
  return (
    <div className="m-4 border border-gray-400 shadow-lg rounded-lg p-6 md:w-[500px]">
      
      <div className="mb-8">
        <h1 className="font-bold text-4xl mb-2">
          Create Your Digital Identity
        </h1>

        <span>
          Enter your detail below to generate a secure,
          verifiable digital ID card instantly.
        </span>
      </div>

      <div className="flex justify-end mb-4">
        <span>Personal Info:</span>
      </div>

      <div className="flex flex-col gap-6">

        <div className="flex flex-col gap-4">
          <div>
            <label>FIRST NAME :</label>
            <input className="border w-full p-2" type="text" />
          </div>

          <div>
            <label>LAST NAME :</label>
            <input className="border w-full p-2" type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label>PROFESSIONAL TITLE</label>
            <input className="border w-full p-2" type="text" />
          </div>

          <div>
            <label>EMAIL ADDRESS</label>
            <input className="border w-full p-2" type="email" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalDetailed;