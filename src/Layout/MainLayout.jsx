import React from 'react'

import { Outlet } from 'react-router-dom';
import Navbar from '../myComponent/Navbar';
import Footer from '../myComponent/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout