import React, { useContext } from 'react'
import { FormContext } from "../Context/Context/FormContext"; 

const GeneratedID = () => {
  const { submittedData } = useContext(FormContext);
console.log(submittedData);

  if (!submittedData) {
    return <p>No form data yet. Fill the form and click Generate.</p>;
  }
  return (
    <>
    <div>Generated ID Card</div>
    <div>
      <p>{submittedData.FirstName} {submittedData.SecondName}</p>
      <p>{submittedData.profession}</p>
      <p>{submittedData.organization}</p>
      <p>{submittedData.address}</p>
      <p>{submittedData.DOB}</p>
      <p>{submittedData.level}</p>
      <p>{submittedData.Email}</p>
      <p>{submittedData.contact}</p>
      <p>{submittedData.gender}</p>
    </div>
   
    </>
  )
}

export default GeneratedID