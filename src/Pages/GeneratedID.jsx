import React, { useContext } from 'react'
import { FormContext } from "../Context/Context/FormContext"; 

const GeneratedID = () => {
  const { submittedData } = useContext(FormContext);

  if (!submittedData) {
    return <p>No form data yet. Fill the form and click Generate.</p>;
  }

  return (
    <>
    <div>{submittedData.FirstName}</div>
    <div>{submittedData.SecondName}</div>
    <div>{submittedData.profession}</div>
    <div>{submittedData.organization}</div>
    <div>{submittedData.address}</div>
    <div>{submittedData.DOB}</div>
    <div>{submittedData.level}</div>
    <div>{submittedData.Email}</div>
    <div>{submittedData.contact}</div>
    </>
  )
}

export default GeneratedID