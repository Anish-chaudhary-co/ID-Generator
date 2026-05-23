import React, { useContext } from 'react'
import { FormContext } from "../Context/Context/FormContext"; 

const GeneratedID = () => {
  const { submittedData } = useContext(FormContext);

  if (!submittedData) {
    return <p>No form data yet. Fill the form and click Generate.</p>;
  }

  return (
    <>
    <div>Generated ID Card</div>
    <div  className="flex flex-col gap-2 px-9 mt-4 ml-10 p-4 border rounded shadow w-96 h-[400px]">
      <hr className ="border-t border-gray-300 my-2"/>
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <div>
          <h3 className="font-bold text-lg">{submittedData.FirstName} {submittedData.SecondName}</h3>
          <p className="text-gray-600">{submittedData.profession}</p>
        </div>
      </div>
    <div><label htmlFor="">Organization : </label>{submittedData.organization}</div>
    <div><label htmlFor="">Address : </label>{submittedData.address}</div>
    <div><label htmlFor="">Date of Birth : </label>{submittedData.DOB}</div>
    <div><label htmlFor="">Level : </label>{submittedData.level}</div>
    <div><label htmlFor="">Email : </label>{submittedData.Email}</div>
    <div><label htmlFor="">Contact : </label>{submittedData.contact}</div>
    <div><label htmlFor="">Gender : </label>{submittedData.gender}</div>
    <div><label htmlFor="">Validity : </label>{submittedData.validity}</div>
    <div><label htmlFor="">Card No : </label>{submittedData.cardNo}</div>
    <hr className ="border-t border-gray-300 my-2"/>
    <span className="text-center text-gray-400 text-sm">If you found return to Organization.</span>    
    </div>
    </>
  )
}

export default GeneratedID