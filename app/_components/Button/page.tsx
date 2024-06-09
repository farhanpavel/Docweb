import React from 'react'

export default function Button() {
  return (
    <div>
       <div className='mt-5 lg:mt-0'>
      <a href="#_" className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all rounded shadow-lg shadow-sky-300 hover:bg-white group">
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-sky-800 font-semibold transition-colors duration-300 ease-in-out group-hover:text-white text-sm">Learn More</span>
      </a>
    </div>
    </div>
  )
}
