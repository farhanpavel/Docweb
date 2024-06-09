import React from 'react'
import Image from 'next/image'
import Button from '../_components/Button/page'
export default function About() {
  return (
    <div>
      <div>
        <h1 className='text-center text-sky-600 text-sm font-bold'>ABOUT US</h1>
        <h1 className='text-5xl font-extrabold text-blue-900 text-center mt-2'>We Provide The Best Services</h1>
        <div className='lg:flex lg:flex-wrap lg:justify-around'>
            <div className='lg:w-[50%]'>
                <Image src="/img/about-img.svg"
                width={650}
                height={450}
                alt="About"
                className='mx-auto lg:mx-0'
                />
            </div>
            <div className='lg:w-[45%] lg:flex lg:flex-col  justify-center lg:gap-y-14 space-y-3 lg:space-y-0 '>
                <h1 className='text-blue-800 text-xl font-extrabold'>We Take Care Of Your Healthy Life</h1>
               <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
           <Button/>
            </div>
        </div>
      </div>
    </div>
  )
}
