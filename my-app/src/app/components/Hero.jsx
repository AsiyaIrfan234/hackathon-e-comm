// import React from 'react'
// import Underline from './Underline'

// const Hero = () => {
//   return (
//     <div className='  md:flex  items-center justify-center min-h-screen w-dvw px-6 lg:px-16 md:px-8 bg-[#FBEBB5]'>
//     <section className=' md:w-[40%] flex justify-center md:justify-end '> 
//     <div className='flex mt-[5rem] md:mt-0 flex-col gap-2 md:gap-4 '>    
//      {
//         ['Rocket single', 'Sheater'].map((item,index) => {
//           return <h1 key={index} className='lg:text-[4em] sm:text-[2.7em] text-[2em] !font-[500] tracking-wider'>{item}</h1>
//         })
//      }
//      <Underline title={'Shop Now'} />
//     </div>
//     </section>
//     <section className='md:w-[60%]   flex items-center justify-center '>
//   <img src="/images/home-chair.png" className='scale-x-[-1] object-center' alt="" />
//     </section>
//     </div>
//   )
// }

// export default Hero


import React from 'react'
import Underline from './Underline'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='md:flex items-center justify-center min-h-screen w-dvw px-6 lg:px-16 md:px-8 bg-[#FBEBB5]'>
      <section className='md:w-[40%] flex justify-center md:justify-end'> 
        <div className='flex mt-[5rem] md:mt-0 flex-col gap-1 md:gap-3 '>    
          {
            ['Rocket single', 'Sheater'].map((item, index) => {
              return <h1 key={index} className='lg:text-[4em] sm:text-[2.7em] text-[2em] !font-[500] tracking-wider'>{item}</h1>
            })
          }
          <Link
            href="/Shop"
          className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-black bg-yellow-500 px-7 py-2 rounded-md transition-transform hover:scale-105 inline-block w-40"
          >
            Shop Now
            </Link>
          
        </div>
      </section>
      <section className='md:w-[60%] flex items-center justify-center'>
        <img src="/images/home-chair.png" className='scale-x-[-1] object-center' alt="" />
      </section>
    </div>
  )
}

export default Hero
