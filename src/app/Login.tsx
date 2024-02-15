import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Courses from './Courses';

const Login = () => {
  return (
    <div className='flex h-full w-full max-h-screen'>
      <div className='bg-white text-black w-1/2 px-10 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold flex justify-center'>Welcome back</h1>
        <p className='text-base font-normal flex justify-center'>Welcome back! Please enter your details.</p>
        <div className="container mx-auto px-4 mt-20 w-3/4">
          <form action="/" method="post">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 font-bold mb-2 text-sm">Email</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-400 font-bold mb-2 text-sm">Password</label>
              <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"/>
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember for 30 days</label>
              </div>
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700">Forgot Password?</a>
            </div>
            <div className='mt-5'>
              <Link href="/Courses.tsx"> <button type="submit" className="bg-[#27779B] hover:bg-[#54c5f9] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline">Login</button></Link>
            </div>
          </form>
          <div className='flex justify-center mt-14'>
            <p className='text-black'>Don't have an account? <span className='text-[#27779B]'> Sign up</span> </p>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
          <img src="/section.png" alt="" className='w-full max-h-screen'/>
      </div>
    </div>
  )
}

export default Login