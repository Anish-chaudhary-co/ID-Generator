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
    <div><label htmlFor="">Name : </label>{submittedData.FirstName}</div>
    <div><label htmlFor="">Second Name : </label>{submittedData.SecondName}</div>
    <div><label htmlFor="">Profession : </label>{submittedData.profession}</div>
    <div><label htmlFor="">Organization : </label>{submittedData.organization}</div>
    <div><label htmlFor="">Address : </label>{submittedData.address}</div>
    <div><label htmlFor="">Date of Birth : </label>{submittedData.DOB}</div>
    <div><label htmlFor="">Level : </label>{submittedData.level}</div>
    <div><label htmlFor="">Email : </label>{submittedData.Email}</div>
    <div><label htmlFor="">Contact : </label>{submittedData.contact}</div>
    </div>
    </>
  )
}

export default GeneratedID