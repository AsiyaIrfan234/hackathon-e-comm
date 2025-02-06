import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full flex-center'>
    <div className='flex items-center mt-[3rem] gap-5'>
       {
         [1,2,3,'Next'].map((value,index) => (
           <div key={index} className={`md:px-6 px-3 py-2 md:py-4 rounded-md ${index == 0 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'} tracking-wider text-lg md:text-xl `}> {value}</div>
         ))
       }
      </div>
    </div>
  )
}

export default Pagination