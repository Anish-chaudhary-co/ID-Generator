import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 gap-10">
      <div className="flex flex-col gap-4 bg-green-500 py-20 w-[50%] rounded-lg">
        <h1 className="text-3xl font-bold">Welcome to ID Card Generator</h1>
        <div className="border rounded-lg px-6 py-20">lol</div>

        <div>
          <button className="border py-2 px-9 text-2xl rounded-lg">Templates</button>
        </div>
      </div>

      <div className="p-5 bg-orange-500 border-white border-2 rounded-lg py-20 w-[50%]">
        <h1 className="text-2xl font-bold">Introduction</h1>
        <span className="text-sm text-gray-800">
        This is a simple id card generator project built using react js. It
        allows users to input their details and generates a unique ID card based
        on the provided information. The generated ID card includes the user's
        name, date of birth, address, phone number, and a randomly generated ID
        number. The project is designed to be user-friendly and visually
        appealing, making it easy for users to create their own ID cards with
        just a few clicks.
        </span>
      </div>
    </div>
  );
};

export default Introduction;
