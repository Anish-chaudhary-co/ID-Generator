import React from "react";
import { Link } from "react-router-dom";

const PersonalDetailed = () => {
  alert("You can fill only required info : ")
  return (
    <div>
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
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>

          <div>
            <label>LAST NAME :</label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label>PROFESSIONAL TITLE : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>

          <div>
            <label>ORGANIZATION NAME : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>

          <div>
            <label>ADDRESS : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>

          <div>
            <label> DATE OF BIRTH : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="date" />
          </div>

          <div>
            <label> LEVEL : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>

          <div>
            <label>EMAIL ADDRESS : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="email" />
          </div>
          <div>
            <label>CONTACT NO : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="email" />
          </div>
        </div>

        <div>
          <label>GENDER</label>
          <div className="flex gap-5">
            <div>
            <input type="radio"  name="gender"/><label>Male</label>
            </div>

            <div>
            <input type="radio" name="gender"/><label>Female</label>
            </div>

            <div>
            <input type="radio" name="gender"/><label>Others</label>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col mt-3">
        <label>UPLOAD PHOTO</label>
        <input type="file" className="border p-2 rounded-sm"/>
      </div>

      <div className="mt-5">
            <label> VALIDITY : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>

          <div>
            <label> CARD NO : </label>
            <input className="w-full p-2 rounded-sm bg-gray-300" type="text" />
          </div>
<div>
          <Link to="/generatedID" className="flex justify-center items-center mt-4">
            <button to="/generatedID" className="px-5 py-2 bg-blue-500 text-white text-2xl font-bold rounded-lg">Generate</button>
          </Link>
</div>          

    </div>

    {/* now this is for id card show reference  */}
    <div>
      <div>

      </div>



    </div>





    </div>
  );
};

export default PersonalDetailed;