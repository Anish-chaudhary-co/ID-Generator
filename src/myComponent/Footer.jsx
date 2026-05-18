import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='grid grid-cols-2 md:grid-cols-4 p-5 gap-10 border-t border-gray-300 mt-20'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>IDGen</h1>
            <p>The modern standard for professional<br></br> identity card creation and management.</p>
            <div className='flex gap-8'>
                <FaFacebook className='cursor-pointer hover:text-red-400'/>
                <FaTwitter className='cursor-pointer hover:text-red-400'/>
                <FaLinkedin className='cursor-pointer hover:text-red-400'/>
            </div>
        </div>

        <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>Product</h1>
            <span className='cursor-pointer hover:text-red-400'>Templates</span>
            <span className='cursor-pointer hover:text-red-400'>Features</span>
            <span className='cursor-pointer hover:text-red-400'>Pricing</span>
            <span className='cursor-pointer hover:text-red-400'>Enterprise</span>
        </div>

        <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>Resources</h1>
            <span className='cursor-pointer hover:text-red-400'>Help Center</span>
            <span className='cursor-pointer hover:text-red-400'>Design Guide</span>
            <span className='cursor-pointer hover:text-red-400'>API Documentation</span>
            <span className='cursor-pointer hover:text-red-400'>Blog</span>
        </div>

        <div className='flex flex-col gap-5 border p-4 bg-gray-300 rounded-lg'>
            <h1 className='text-xl font-bold'>Need Support?</h1>
            <span>Our team is here to help you get started.</span>
            
            <input type="email" placeholder='Email address' className='border border-gray-400 py-2 rounded p-2'/>
            <textarea className='border border-gray-400 py-2 rounded p-2' placeholder='How can we help?'></textarea>
        </div>

        <div className='flex justify-between col-span-2 md:col-span-4 mt-10 border-t border-gray-300 pt-5'>
            <div>
            <p>&copy; 2023 IDGen. All rights reserved.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='cursor-pointer hover:text-red-500'>Privacy Policy</span>
                <span className='cursor-pointer hover:text-red-500'>Terms of Service</span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer