import React, { useContext } from 'react'
import { FormContext } from "../Context/Context/FormContext"; 

const GeneratedID = () => {
  const { submittedData } = useContext(FormContext);
console.log(submittedData);

  const mapObject = (obj) => {
    return Object.entries(obj);
  };
  if (!submittedData) {
    return <p>No form data yet. Fill the form and click Generate.</p>;
  }


  return (
    <>
    <div>Generated ID Card</div>
    <div className="border p-4 rounded-md shadow-md w-[400px] ml-10"> 

      {submittedData.img && <img src={submittedData.img} alt="ID Card" className="flex justify-end mr-3 w-full h-auto mb-4 rounded-md" />}

      {submittedData.FirstName && submittedData.SecondName && (
        <h2>Name :  {submittedData.FirstName} {submittedData.SecondName}</h2>
      )}

      {submittedData.profession && <p>Profession : {submittedData.profession}</p>} 
      {submittedData.organization && <p>Organization : {submittedData.organization}</p>} 
      {submittedData.address && <p>Address : {submittedData.address}</p>} 
      {submittedData.DOB && <p>Date of Birth : {submittedData.DOB}</p>} 
      {submittedData.level && <p>Level : {submittedData.level}</p>}
      {submittedData.Email && <p>Email : {submittedData.Email}</p>} 
      {submittedData.contact && <p>Contact : {submittedData.contact}</p>} 
      {submittedData.gender && <p>Gender : {submittedData.gender}</p>} 
      {submittedData.validity && <p>Validity : {submittedData.validity}</p>} 
      {submittedData.cardNo && <p>Card No : {submittedData.cardNo}</p>} 

    </div>
    <div className="flex justify-center items-center mt-4">
    <button className="bg-blue-500 text-white p-2 rounded-sm" onClick={() => window.print()}>
      Print ID
    </button>
    </div>
    </>
  )
}

export default GeneratedID;