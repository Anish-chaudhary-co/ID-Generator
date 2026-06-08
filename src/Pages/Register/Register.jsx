import React,{useState} from 'react'
import{Link} from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Register = () => {
    const [register,setLogin] = useState(true);


    // const handleRegisterDB =(e)=>{
    //     e.preventDefault();

    //     const formData = new FormData();

    //     const response = await fetch("http://localhost/ID-Backend-To-Connect-To-Database/register.php",
    //         {
    //             method : "POST",
    //             body : formData
    //         }
    //     );

    // }
    
  return (
    <>
    { register ?    
    <>
    <h2 className='text-4xl font-bold ml-6 mt-10'>Sign Up</h2>
    <div className='flex flex-col items-center justify-center md:justify-start md:ml-40 min-h-screen'>
        <form action="http://localhost/ID-Backend-To-Connect-To-Database/register.php" method='POST' className='border p-4 rounded-lg w-90 md:w-97 flex flex-col gap-8 bg-gray-300'>
           <h2 className='text-2xl font-bold text-center mt-6'>Create an account</h2>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Full Name</label>
                <input type="text"className='border border-white bg-gray-200 rounded-lg p-2' placeholder='Enter your full name' name='username' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Email Address</label>
                <input type="text"className='border border-white bg-gray-200 rounded-lg p-2' placeholder='Enter your email' name='email'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Password</label>
                <input type="password"className='border border-white bg-gray-200 rounded-lg p-2' placeholder='Enter your password' name='password' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Confirm Password</label>
                <input type="password"className='border border-white bg-gray-200 rounded-lg p-2' placeholder='Confirm your password' name='confirmPassword'/>
            </div>

            <div className='text-center p-2 rounded-lg bg-blue-400 hover:bg-blue-500'>
                <button className='font-bold text-white' name='submit'>Create Account</button>
            </div>

            <div className='text-center'>
                <span>Already have an account? <Link className='font-bold' onClick={()=>{setLogin(!register)}}>Sign In</Link></span>
            </div>

            <div className='flex items-center gap-2'>
            <hr className='flex-1'/>
            <span>Or continue with</span>
            <hr className='flex-1'/>
            </div>

            <div className='flex justify-center gap-18'> 
                <div className='flex gap-2'><FaGoogle className='text-2xl'/><span className='font-bold'>Google</span></div>
                <div className='flex gap-2'><FaFacebook className='text-2xl'/><span className='font-bold'>Facebook</span></div>
            </div>
        </form>
    </div>
    </>
    :
            <div className='flex items-center justify-center md:justify-start relative md:block md:ml-40 mt-30'>
        
                <form className='border rounded-lg p-5 flex flex-col gap-5 bg-gray-300 w-96 h-98'>
                    <h2 className='font-bold text-2xl text-center mt-10'>
                        LOGIN
                    </h2>
    
                    <input type="email" className='bg-gray-200 p-2 rounded-lg' placeholder='Email'name='email' />
                    <input type="password" className='bg-gray-200 p-2 rounded-lg' placeholder='Password' name='password'/>
                    <input type="submit" value="Login" className='p-2 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded-lg font-bold' />
    
                    <div className='text-center mb-5'>
                        <span>Don't have an account?<Link to="/register" className='text-purple-600' onClick={()=>{setLogin(!register)}}> Sign Up</Link></span>
                    </div>
                </form>
                
            </div>

    
    }
    </>
  )
}

export default Register;