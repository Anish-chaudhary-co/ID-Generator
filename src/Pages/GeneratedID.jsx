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
    <div className='text-3xl md:text-4xl font-bold'>Generated ID Card</div>
    <p>{submittedData.templateName}</p>
    <div className="border rounded-md shadow-md w-full md:w-85 m-2 md:ml-20 mt-30"> 
      <div className="border bg-green-500 text-white">
      {submittedData.organization && <p className="flex justify-center items-center font-bold text-3xl">{submittedData.organization}</p>} 
      {submittedData.address && <p className="flex justify-center items-center text-gray-500">{submittedData.address}</p>} 
      </div>

    <div className="flex gap-2 p-2">
      <div className="flex flex-col gap-4">
      {submittedData.FirstName && submittedData.SecondName && ( 
        <h2>Name :  {submittedData.FirstName} {submittedData.SecondName}</h2>
      )}

      {submittedData.profession && <p>Profession : {submittedData.profession}</p>} 
      {submittedData.DOB && <p>Date of Birth : {submittedData.DOB}</p>} 
      {submittedData.level && <p>Level : {submittedData.level}</p>}
      {submittedData.Email && <p>Email : {submittedData.Email}</p>} 
      {submittedData.contact && <p>Contact : {submittedData.contact}</p>} 
      {submittedData.gender && <p>Gender : {submittedData.gender}</p>} 
      {submittedData.validity && <p>Validity : {submittedData.validity}</p>} 
      {submittedData.cardNo && <p>Card No : {submittedData.cardNo}</p>} 
      </div>

      

      <div className="border mt-5 h-20 w-20 rounded-md shadow-md">
      {submittedData.img && <img src={submittedData.img} alt="Photo" className="border flex justify-end mr-3 w-full h-auto mb-4 rounded-md object-cover" />}
    
    </div>
    </div>

    <p className="text-center text-gray-500 bg-blue-500 text-white">If found return to organization.</p>

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