import React from 'react'
import{Link} from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Register = () => {
  return (
    <div className='flex items-center justify-center mt-30 h-full w-full'>
        <form action="" className='border p-4 rounded-lg md:w-97 flex flex-col gap-8 bg-purple-600'>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-white'>Full Name</label>
                <input type="text"className='border border-white backdrop-blur-sm bg-black/20 rounded-lg p-2' placeholder='Enter your full name' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-white'>Email Address</label>
                <input type="text"className='border border-white backdrop-blur-sm bg-black/20 rounded-lg p-2' placeholder='Enter your email' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-white'>Password</label>
                <input type="text"className='border border-white backdrop-blur-sm bg-black/20 rounded-lg p-2' placeholder='Enter your password' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-white'>Confirm Password</label>
                <input type="text"className='border border-white backdrop-blur-sm bg-black/20 rounded-lg p-2' placeholder='Confirm your password' />
            </div>

            <div className='text-center p-2 rounded-lg bg-purple-400 hover:bg-purple-500'>
                <button className='font-bold text-white'>Create Account</button>
            </div>

            <div className='text-center'>
                <span>Already have an account? <Link to="/login" className='font-bold text-white'>Sign In</Link></span>
            </div>

            <div className='flex items-center gap-2'>
            <hr className='flex-1 border-white'/>
            <span className='text-white'>Or continue with</span>
            <hr className='flex-1 border-white'/>
            </div>

            <div className='flex justify-center gap-18'>
                <div className='flex gap-2'><FaGoogle className='text-2xl text-white'/><span className='font-bold text-white'>Google</span></div>
                <div className='flex gap-2'><FaFacebook className='text-2xl text-white'/><span className='font-bold text-white'>Facebook</span></div>
            </div>
        </form>
    </div>
  )
}

export default Register;