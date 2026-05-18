import React from 'react'
import {Link} from "react-router-dom";

const PersonalDetailed = () => {
  return (
    <>
    <form
        action=""
        className="flex items-center justify-center h-screen"
      >
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center border w-200">
            <span>Id Generator</span>
            <span>
              To generate first of all you have to provide your some personal
              information to generate proper Id Card.
            </span>
            <div className="flex flex-col items-start justify-start gap-2 mt-4 mb-4">
              <label>Name : </label>
              <input
                type="text"
                className="border"
                name="name"
              />
              <label>Father's name : </label>
              <input
                type="text"
                className="border"
                name="fathersName"
              />
              <label>Mother's name : </label>
              <input
                type="text"
                className="border"
                name="mothersName"
              />
              <label>Date of birth : </label>
              <input
                type="date"
                className="border"
                name="dateOfBirth"
              />
              <label>Address : </label>
              <input
                type="text"
                className="border"
                name="address"
              />
              <label>Phone number : </label>
              <input
                type="number"
                className="border"
                name="phoneNumber"
              />
              <label htmlFor="photo">Photo : </label>
              <input
                type="file"
                id="photo"
                className="border"
                name="photo"
              />
              <Link to="/generatedID"
                type="submit"
                className="border p-2 bg-green-400 rounded"
              >
                Generate ID
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PersonalDetailed;