import React from 'react'
import Carousel from '../_components/Carousel/page'

export default function Testimonials() {
  return (
    <div>
      <div>
      <h1 className='text-center text-sky-600 text-sm font-bold'>TESTIMONIALS</h1>
      <h1 className='text-5xl font-extrabold text-blue-900 text-center mt-2'>Client's Kind Words</h1>
    {/*  */}
    <div className='flex flex-wrap justify-center mt-14'>
    <Carousel/>

    </div>

    {/*  */}
      </div>
    </div>
  )
}
