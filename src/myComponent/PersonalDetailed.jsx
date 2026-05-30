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
    if (
      !formData.FirstName ||
      !formData.SecondName ||
      !formData.organization ||
      !formData.address ||
      !formData.DOB ||
      !formData.Email ||
      !formData.contact ||
      !formData.gender ||
      !formData.validity ||
      !formData.cardNo
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
      {filteredFields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2 mb-4">
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
              className="w-full p-2 rounded-sm bg-gray-300"
            />
          )}
        </div>
      ))}
      ;
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-sm"
          onClick={GenerateHandle}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default PersonalDetailed;
