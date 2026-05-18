import React from 'react'

import MainLayout from '../Layout/MainLayout';
import {Routes, Route} from "react-router-dom";

import TemplatesUI from '../myComponent/TempletesUI';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='templates' element={<TemplatesUI/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default AppRoutes