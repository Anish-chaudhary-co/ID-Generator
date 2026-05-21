import { createContext, useState } from "react"

export const FormContext = createContext();

const FormProvider = ({children}) => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <FormContext.Provider
  value={{
    submittedData,
    setSubmittedData
  }}
>
  {children}
</FormContext.Provider>
  )
}

export default FormProvider;