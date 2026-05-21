import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../myComponent/Navbar'
import CopyRight from '../myComponent/CopyRight';

const EmptyLayout = () => {
  return (
    <div>
      <Navbar/>
      <main>   
      <Outlet />
      </main>
      <CopyRight/>
    </div>
    
  )
}

export default EmptyLayout