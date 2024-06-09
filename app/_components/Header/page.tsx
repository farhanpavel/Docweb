import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LoginPage from '@/app/Login/page';
export default function Header() {
  
  return (
    <div>
      <div className='lg:flex lg:flex-wrap lg:justify-between  font-sans font-semibold  p-4 space-x-5 text-lg'>
      <div className='mb-4 lg:mb-0'>
    <Image
      src="/img/logo.png"
      width={170}
      height={170}
      alt="Logo"
        />
    </div>
      <div>
        <ul className='lg:flex lg:flex-wrap space-y-3 lg:space-y-0 lg:gap-x-10 lg:mt-4 justify-center '>
          <li><a href="" className='hover:text-blue-600 hover:shadow-md hover:shadow-blue-400 hover:delay-75 hover:duration-200 hover:py-1'>Home</a></li>
          <li><a href="" className='hover:text-blue-600 hover:shadow-md hover:shadow-blue-400 hover:delay-75 hover:duration-200 hover:py-1'>Find Doctor</a></li>
          <li><a href="" className='hover:text-blue-600 hover:shadow-md hover:shadow-blue-400 hover:delay-75 hover:duration-200 hover:py-1 '>Dashboard</a></li>
        </ul>
      </div>
      <div >
        <ul className='lg:flex lg:flex-wrap space-y-3 lg:space-y-0 mt-3 lg:mt-[17px] lg:gap-x-10 '>
          <li className=''><a href="" className='hover:text-blue-600 hover:shadow-md hover:shadow-blue-400 hover:delay-75 hover:duration-200 hover:py-1'>About</a></li>
          <li><a href="" className='hover:text-blue-600 hover:shadow-md hover:shadow-blue-400 hover:delay-75 hover:duration-200 hover:py-1'>How It Works</a></li>
          <li><a href="" className='hover:text-blue-600 hover:shadow-md hover:shadow-blue-400 hover:delay-75 hover:duration-200 hover:py-1'>More</a></li>
          <li>
             
            </li>
        </ul>
      </div>
      </div>
       </div>
  )
}
