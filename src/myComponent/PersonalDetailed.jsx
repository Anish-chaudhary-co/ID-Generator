import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../Context/Context/FormContext";
import inputField from "../Templates/inputField";
const PersonalDetailed = ({ selectedTemplate }) => {
  const navigate = useNavigate();
  const { setSubmittedData } = useContext(FormContext);
  const { submittedData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    templateName: selectedTemplate?.name || "",
    FirstName: "",
    SecondName: "",
    profession: "",
    organization: "",
    address: "",
    DOB: "",
    level: "",
    Email: "",
    contact: "",
    gender: "",
    img: "",
    validity: "",
    cardNo: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  

  const GenerateHandle = () => {
    const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  value.toString().trim() === "";
     if (
      isEmpty(formData.FirstName) ||
      isEmpty(formData.SecondName) ||
      isEmpty(formData.organization) ||
      isEmpty(formData.address) ||
      isEmpty(formData.DOB) ||
      isEmpty(formData.Email) ||
      isEmpty(formData.contact) ||
      isEmpty(formData.gender) ||
      isEmpty(formData.validity) ||
      isEmpty(formData.cardNo)
    ) {
      alert(
        "Please fill in the required fields: " +
          selectedTemplate.fields.join(", "),
      );
      return;
}
    navigate("/generatedID");
    setSubmittedData(formData);
  };

  const filteredFields = inputField.filter((field) =>
    selectedTemplate?.fields?.includes(field.name),
  );

  return (
    <>   
    <div className="flex flex-col md:flex-row gap-10 md:gap-19">
{/* this div is for the form */}
      <div className="rounded-md bg-gray-300 shadow-lg w-full md:w-[700px] m-2 md:ml-20 mt-30 p-4">
          <h2 className="text-2xl font-bold">Personal info : </h2>
        <hr className="mt-4 mb-4 border-gray-500"/>

        {filteredFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2 mb-4 ">
            <label className="font-bold"> {field.label} </label>

            {field.type === "radio" ? (
              <div className="flex gap-5">
                {field.options.map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      className="form-radio"
                      type="radio"
                      name={field.name}
                      value={option}
                      onChange={handleChange}
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
                onChange={handleChange}
                className="border border-gray-600 w-full p-2 rounded-sm bg-gray-300"
              />
            )}
          </div>
        ))}
        <div className="flex justify-center items-center mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded-sm"
            onClick={GenerateHandle}
          >
            Generate
          </button>
        </div>
      </div>

{/* this div for the showcase for selected id card template demo */}
<div className="m-2 md:mt-30 md:h-[700px] md:w-[600px] rounded-lg bg-gray-300 shadow-2xl overflow-hidden">
        <img src="#" alt="Id card Template" className="w-full h-full object-cover"/>
</div>




      </div>
    </>
  );
};

export default PersonalDetailed;
