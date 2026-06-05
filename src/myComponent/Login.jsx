import React from 'react'
import { Link } from 'react-router-dom';


const Login = ({handleLogin}) => {
  return (
    <div className='fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center h-full w-full bg-black/50 '>
        <div className='relative'>
            <div className='absolute top-2 right-2'>
                <button onClick={handleLogin} className='font-bold text-2xl'>X</button>
            </div>
            <form action="" className='border rounded-lg p-5 flex flex-col gap-5 bg-gray-300 w-96'>
                <h2 className='font-bold text-2xl text-center mt-10'>
                    LOGIN
                </h2>

                <input type="left-0 text" className='bg-gray-200 p-2 rounded-lg' placeholder='Username' />
                <input type="text" className='bg-gray-200 p-2 rounded-lg' placeholder='Password' />
                <input type="submit" className='p-2 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded-lg font-bold' />

                <div className='text-center mb-5'>
                    <span>Don't have an account?<Link to="/register" onClick={handleLogin} className='text-purple-600'> Register.</Link></span>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Login