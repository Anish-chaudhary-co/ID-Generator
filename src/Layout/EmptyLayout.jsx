import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../myComponent/Navbar'

const EmptyLayout = () => {
  return (
    <div>
      <Navbar/>
      <main>   
      <Outlet />
      </main>
    </div>
    
  )
}

export default EmptyLayout