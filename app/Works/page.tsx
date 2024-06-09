import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaMapMarked } from "react-icons/fa";
import { FaFirstAid } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
export default function Works() {
  return (
    <div>
      <div>
        <h1 className='text-center text-sky-600 text-sm font-bold'>HOW IT WORKS</h1>
        <h1 className='text-5xl font-extrabold text-blue-900 text-center mt-2'>Easy Steps To Get Your Solution</h1>
        <div className=' md:flex md:flex-wrap  md:justify-center md:items-center mx-16 mt-[8%] space-y-10 md:space-y-0'>
          <div className='md:w-1/4 space-y-6 '>
          <FaUserDoctor className='ring-2 rounded-full text-4xl p-2 bg-cyan-500 ring-cyan-500 fill-white'/>
            <div >
            <h1 className='text-blue-900 font-bold'>Search Doctor</h1>
            <p className='text-sm w-3/4 mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
         
            </div>
           </div>
          <div className='md:w-1/4 space-y-6'>
          <FaMapMarked  className='ring-2 rounded-full text-4xl p-2 bg-purple-500 ring-purple-500 fill-white stroke-white' />
          <div>
          <h1 className='text-blue-900 font-bold'>Choose your location</h1>
          <p className='text-sm w-3/4 mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
         
          </div>
          </div>
          <div className='md:w-1/4 space-y-6'>
          <FaFirstAid className='ring-2 rounded-full text-4xl p-2 bg-red-500 ring-red-500 fill-white'/>
          <div>
          <h1 className='text-blue-900 font-bold'>Schedule Appointment</h1>
          <p className='text-sm w-3/4 mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
          
          </div>
          </div>
          <div className='md:w-1/4 space-y-6'>
          <FaRegLightbulb className='ring-2 rounded-full text-4xl p-2 bg-yellow-500 ring-yellow-500 fill-white'/>
          <div>
          <h1 className='text-blue-900 font-bold'>Get your solution</h1>
          <p className='text-sm w-3/4 mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
          
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
