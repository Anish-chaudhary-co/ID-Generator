import{useState} from "react";
import AppRoutes from "./Routes/AppRoutes";
import FormProvider from "./Context/Context/FormContext";
function App() {
  return (
    <>
    <FormProvider>
      <AppRoutes />
      </FormProvider>
    </>

  )
}

export default App;
