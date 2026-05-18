import { useState } from "react";
import Navbar from "./myComponent/Navbar";
import Introduction from "./myComponent/Introduction";
import TemplatesUI from "./myComponent/TempletesUI";
import Footer from "./myComponent/Footer";
function App() {
  return (
    <>
    <Navbar/>
    <Introduction/>
    <TemplatesUI />
    <Footer/>
    </>

  )
}

export default App;
