import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className='flex bg-white w-full'>
      <div className='w-1/5 max-h-screen'>
        <form className="w-56 mx-auto bg-white">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-black-500 focus:border-black-500" placeholder="Search ..." required />
          </div>
        </form>
      </div>
      <div className='w-4/5'>
        <h1 className='text-black my-4'>Welcome Olivia</h1>
        <hr className='w-full' />
        <h4 className='text-black mt-10 mb-3'>Course overview</h4>
        <hr />
        <div className='mt-4 flex'>
          <div>
            <img src="/course_image.png" alt="" />
          </div>
          <div className='flex flex-col items-center'>
            <div className='card border-gray-400 text-black w-80 border'>
              <p>N35,000</p>
              <hr />
              <div className='flex items-center justify-between'>
                <div className='flex'>
                  <i></i>
                  <p>Course Duration</p>
                </div>
                <p>4 weeks</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex'>
                  <i></i>
                  <p>Course Level</p>
                </div>
                <p>Beginner</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex'>
                  <i></i>
                  <p>Students Enrolled</p>
                </div>
                <p>75</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex'>
                  <i></i>
                  <p>Subtutle Language</p>
                </div>
                <p>English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses