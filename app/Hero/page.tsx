import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div>
        <div className='flex flex-wrap justify-around mt-5 md:mt-0'>
            <div className='md:w-3/4 lg:w-2/5  flex flex-col justify-center gap-y-5  order-2 lg:order-none'>
                <p className='text-sm text-sky-800 font-medium'>A most popular doctor's appointment site</p>
                <h1 className='text-5xl font-extrabold text-blue-900'>
                We're open and<br/> 
                welcoming patients.
                </h1>
                <p className='text-sm text-sky-800  font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium totam delectus dolorum error provident aliquid tempore voluptas, ex rem, deleniti qui eius. Unde molestias in libero, quisquam atque quas.
                </p>
                <div className='space-x-4 font-bold'>
                <a href="" className=' px-8 py-3 bg-sky-600 text-white rounded-md'>Book Online</a>
                <a href="" className='btn btn-ghost text-sky-800 font-bold px-8 py-3'>Contact Us</a>
                </div>
                <div className='mt-11'>
                <p ><strong className='text-sky-800'>No insurance?</strong> Get your preventive care for a low monthly fee.</p>
            </div>
            
            </div>
            <div >
                <Image src="/img/home-img.svg"
                width={550}
                height={750}
                alt='Hero' 
                className='mt-2'
                />
            </div>
           
        </div>
    </div>
  )
}
