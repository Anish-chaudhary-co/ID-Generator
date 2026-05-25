import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../Context/Context/FormContext";
import  inputField  from "../Templates/inputField";
const PersonalDetailed = ({ selectedTemplate }) => {
  // const { setSubmittedData } = useContext(FormContext);
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   FirstName: "",
  //   SecondName: "",
  //   profession: "",
  //   organization: "",
  //   address: "",
  //   DOB: "",
  //   level: "",
  //   Email: "",
  //   contact: "",
  //   gender: "",
  //   img: "",
  //   validity: "",
  //   cardNo: "",
  // });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   setSubmittedData(formData);
  //   // GO TO PREVIEW PAGE
  //   navigate("/generatedID");
  // };

  const filteredFields = inputField.filter((field) => selectedTemplate?.fields?.includes(field.name));

  return (
    <>
   {filteredFields.map((field) => (

  <div key={field.name} className="flex flex-col gap-2 mb-4">

    <label className="font-bold"> {field.label} </label>

    {
      field.type === "radio" ? (

        <div className="flex gap-5">

          {field.options.map((option) => (

            <label key={option} className="flex items-center gap-2">

              <input
              className="form-radio"
                type="radio"
                name={field.name}
                value={option}
              />

              {option}

            </label>

          ))}

        </div>

      ) : (

        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          className="w-full p-2 rounded-sm bg-gray-300"
        />

      )
    }

  </div>

))};
<div className="flex justify-center items-center mt-4">
    <button className="bg-blue-500 text-white p-2 rounded-sm">Generate</button>
</div>
    </>



    // <div className="flex flex-col md:flex-row gap-24 mt-4">
    //   <div className="m-4 md:ml-29 border border-gray-400 shadow-lg rounded-lg p-6 md:w-[500px]">
    //     <div className="mb-8">
    //       <h1 className="font-bold text-4xl mb-2">
    //         Create Your Digital Identity
    //       </h1>

    //       <span>
    //         Enter your detail below to generate a secure, verifiable digital ID
    //         card instantly.
    //       </span>
    //     </div>

    //     <div className="flex justify-end mb-4">
    //       <span>Personal Info:</span>
    //     </div>

    //     <div className="flex flex-col gap-6">
    //       <div className="flex flex-col gap-4">
    //         <div>
    //           <label>FIRST NAME :</label>
    //           <input
    //             name="FirstName"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="text"
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div>
    //           <label>LAST NAME :</label>
    //           <input
    //             name="SecondName"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="text"
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-4">
    //         <div>
    //           <label>PROFESSIONAL TITLE : </label>
    //           <input
    //             name="profession"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="text"
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div>
    //           <label>ORGANIZATION NAME : </label>
    //           <input
    //             name="organization"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="text"
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div>
    //           <label>ADDRESS : </label>
    //           <input
    //             name="address"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="text"
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div>
    //           <label> DATE OF BIRTH : </label>
    //           <input
    //             name="DOB"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="date"
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div>
    //           <label> LEVEL : </label>
    //           <input
    //             name="level"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="text"
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div>
    //           <label>EMAIL ADDRESS : </label>
    //           <input
    //             name="Email"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="email"
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div>
    //           <label>CONTACT NO : </label>
    //           <input
    //             name="contact"
    //             className="w-full p-2 rounded-sm bg-gray-300"
    //             type="email"
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label>GENDER</label>
    //         <div className="flex gap-5">
    //           <div>
    //             <input type="radio" name="gender" onChange={handleChange} />
    //             <label>Male</label>
    //           </div>

    //           <div>
    //             <input type="radio" name="gender" onChange={handleChange} />
    //             <label>Female</label>
    //           </div>

    //           <div>
    //             <input type="radio" name="gender" onChange={handleChange} />
    //             <label>Others</label>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex flex-col mt-3">
    //       <label>UPLOAD PHOTO</label>
    //       <input
    //         name="img"
    //         type="file"
    //         className="border p-2 rounded-sm"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mt-5">
    //       <label> VALIDITY : </label>
    //       <input
    //         name="validity"
    //         className="w-full p-2 rounded-sm bg-gray-300"
    //         type="text"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div>
    //       <label> CARD NO : </label>
    //       <input
    //         name="cardNo"
    //         className="w-full p-2 rounded-sm bg-gray-300"
    //         type="text"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <div className="flex justify-center items-center mt-4">
    //         <button
    //           type="button"
    //           className="px-5 py-2 bg-blue-500 text-white text-2xl font-bold rounded-lg"
    //           onClick={handleSubmit}
    //         >
    //           Generate
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* now this is for id card show reference  */}
    //   <div className="border border-gray-400 shadow-lg rounded-lg p-6 m-4 h-full md:w-[600px] sticky top-0">
    //     <h3 className="text-4xl font-bold mb-4">
    //       Your Id Card <br />
    //       Template
    //     </h3>
    //     <p className="text-gray-600 mb-4">
    //       Fill the personal info according to this template.
    //     </p>
    //     <div className="border rounded-4xl overflow-hidden">
    //       <img className="w-full h-full object-cover" src={selectedTemplate} alt="ID Card template" />
    //     </div>
    //   </div>
    //   <div>
    //     <div></div>
    //   </div>
    // </div>
  );
};

export default PersonalDetailed;
