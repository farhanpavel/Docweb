import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className='md:flex md:flex-wrap md:justify-around '>
        <div className='text-gray-600 text-sm '>
      <Image src="/img/logo.png"
      width={150}
      height={150}
      alt='logo'
      className='mx-auto'
      />
      <div className='flex flex-wrap gap-x-7 text-3xl mt-5 justify-center'>
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
     
      </div>
     <div className='mt-4 space-y-2'>
     <p>Copyright © 2022 by DocLab.</p>
      <p>All rights reserved.</p>
      
     </div>
        </div>
        <div className='space-y-6'>
<h1 className='mt-4 text-gray-600 font-bold '>Contact Us</h1>
    <ul className='text-sm text-grey-400 space-y-4'>
      <li>1-222-370-5370 x86417</li>
      <li>hello@doclab.com</li>
    </ul>
        </div>
        <div className='space-y-6'>
<h1 className='mt-4 text-gray-600 font-bold'>Account</h1>
<ul className='text-sm text-grey-400 space-y-4'>
  <li>Create account</li>
  <li>Sign in</li>
</ul>
        </div>
        <div className='space-y-6' >
<h1 className='mt-4 text-gray-600 font-bold'>Company</h1>
<ul className='text-sm text-grey-400 space-y-4'>
<li>About DocLab</li>
<li>Carrers</li>
<li>Sponsers</li>
</ul>
        </div>
        <div className='space-y-6'>
          <h1 className='mt-4 text-gray-600 font-bold' >Support</h1>
          <ul className='text-sm text-grey-400 space-y-4'>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}
