import React from 'react'
import { cardinfo } from '../Cardinfo/page'
import Button from '../Button/page'
export default function Cards() {
  return (
    <div>

      <div className="  flex flex-wrap md:justify-around justify-center space-y-4 md:space-y-0">

      
      {cardinfo.map((e) => (
        
<div className="md:w-1/4 w-3/4 font-sans rounded-lg    gap-x-2 shadow-lg " key={e.id}>
    <img className="w-full " src={e.imag} />
    <div className="px-6 py-4 p-4">
      <div className="font-bold text-xl mb-2">{e.title}</div>
      <p className="text-gray-700  text-sm">
        {e.subtitle}
      </p>
      <div className='text-center p-3'>
    <Button />
 
    </div>
    </div>
   
  </div>
      
  
))}


</div>


      
    </div>
  )
}
