import React from 'react'
import Image from 'next/image'
import { FaBrain } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FaTeethOpen } from "react-icons/fa6";
export default function Service() {
  return (
    <div>
      <h1 className='text-center text-sky-600 text-sm font-bold'>SERVICES</h1>
      <h1 className='text-5xl font-extrabold text-blue-900 text-center mt-2'>The Best Quality Services You Can Get</h1>
      <div className='md:flex md:flex-wrap mt-16 md:items-center'>
      
      <div className='md:w-[39%] order-2 '> 
      <Image src="/img/book-img.svg"
                width={650}
                height={750}
                alt='Hero' 
                className='mt-2'
                />
      </div>
      {/*  */}
      <div className='md:flex md:flex-wrap md:w-1/2 gap-y-2 gap-x-4  mx-10 '>
        <div className='md:w-[47%] space-y-14  '>
      <div className='text-center space-y-2 shadow-2xl p-10'>
      <GiMedicines  className='ring-2  mx-auto rounded-full text-4xl p-2 bg-red-500 ring-red-500 fill-white' />
      <h1 className='text-blue-900 font-bold'>Medicine</h1>
      <p className='text-sm mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
      </div>
      <div className=' text-center  space-y-2 shadow-2xl p-10'>
      <FaBrain  className='ring-2 rounded-full mx-auto text-4xl p-2 bg-yellow-500 ring-yellow-500 fill-white'/>
      <h1 className='text-blue-900 font-bold'>Neuorology</h1>
      <p className='text-sm mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
      </div>
        </div>
        <div className='md:w-[47%] space-y-14'>
        <div className='text-center  space-y-2 shadow-2xl p-10' >
        <FaEye  className='ring-2 rounded-full text-4xl p-2 mx-auto bg-green-500 ring-green-500 fill-white' />
        <h1 className='text-blue-900 font-bold'>Eye Surgery</h1>
        <p className='text-sm  mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
        </div>
        <div className='text-center  space-y-2 shadow-md p-10'>
        <FaTeethOpen  className='ring-2 rounded-full mx-auto text-4xl p-2 bg-blue-500 ring-blue-500 fill-white' />
        <h1 className='text-blue-900 font-bold'>Dentistry</h1>
        <p className='text-sm  mt-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!</p>
        </div>
        </div>
      </div>
      </div>
      
   
     
    </div>
  )
}
