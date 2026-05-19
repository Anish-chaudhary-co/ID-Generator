import React from 'react'

import MainLayout from '../Layout/MainLayout';
import EmptyLayout from '../Layout/EmptyLayout';
import {Routes, Route} from "react-router-dom";

import TemplateShow from '../myComponent/TemplateShow';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import PersonalDetailed from '../myComponent/PersonalDetailed';
import Template from '../Pages/Templates';
import GeneratedID from '../Pages/GeneratedID';

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
        {/* this is for main layout with navbar and footer */}
            <Route index element={<Home/>}/>
            <Route path='templateShow' element={<TemplateShow/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='generatedID' element={<GeneratedID/>}/>
        </Route>

        <Route path='/' element={<EmptyLayout/>}>
        {/* this is for empty layout without navbar and footer */}
            <Route path='personalDetailed' element={<PersonalDetailed/>}/>
            <Route path='template' element={<Template/>}/>  

            
        </Route>
    </Routes>
    </>
  )
}

export default AppRoutes