import React from 'react'
import { Link } from 'react-router-dom';
import templates from '../assets/templates.png';

const Template = () => {
  return (
    <div className='border border-gray-300 m-5 rounded-lg bg-gray-300'>
      <div className='flex justify-end text-red-500 mr-9'>
        <Link to="/template" className=''>View All</Link>
      </div>
     <img className='' src={templates} alt="Templates"/>
    </div>
  )
}

export default Template;