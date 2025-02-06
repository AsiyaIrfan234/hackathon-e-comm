import React from 'react'
import Underline from './Underline';
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import Link from 'next/link';


const Blog = () => {
  const blogData = [
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022,',
      src: '/images/ourblogs1.png'
    },
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/ourblogs2.png',
    },
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
     src: '/images/ourblogs3.png'
    },
  ]  

  return (
    <div className='min-h-[70vh] py-12 md:py-[5rem] bg-white w-screen flex flex-col gap-4 px-6 md:px-8 lg:px-16'>
      <h1 className='capatilize text-3xl font-[600] tracking-wider text-center'>Our Blogs</h1>
      <p className='text-center tracking-wider font-medium text-lg text-[#9F9F9F]'>Find a bright ideal to suit your taste with our greate medicine.</p>
      <div className='flex gap-4 flex-wrap mt-3 md:mt-[2.8rem] items-center justify-center'>
        {
          blogData.map((value, index) => (
            <Link href={'/Blog'} key={index} className='md:w-[32%] p-3 flex flex-col items-center  justify-center gap-2  sm:w-[47%] w-[90%]'>
              <img src={value.src} alt="" className='object-cover' />
              <p className='tracking-wider text-left capatilize w-[95%] font-[500] text-[.9em] md:text-[1em]  '>{value.title}</p>
              <Underline title={'Read More'} />
              <div className='flex items-center mt-2 gap-4'>
                {/* For Time */}
                <div className='flex items-center gap-2'>
       <GoClock className='size-4'  />
         <p className='font-medium text-[.8em] md:text-[.9em] tracking-wider'>
        {value.time}
         </p>
                </div>
                {/* For Date */}
                <div className=' flex items-center gap-2'>
      <SlCalender className='size-4' />
      <p dangerouslySetInnerHTML={{__html:value.date}} className='font-medium text-[.8em] md:text-[.9em] tracking-wider'/>
                </div>
              </div>

            </Link>
          ))
        }

      </div>
      
  <Link href={'/Blog'} className='w-full mt-2 md:mt-4 grid place-content-center'>
  <Underline   title={'View All Posts'}/>
  </Link>
    </div>
  )
}

export default Blog










// const blogData = [
//   {
//     title: 'Going all-in with millennial design',
//     time: '5 min',
//     date: '12<sup>th</sup> Oct 2022,',
//     src: '/images/ourblogs1.png'
//   },
//   {
//     title: 'Going all-in with millennial design',
//     time: '5 min',
//     date: '12<sup>th</sup> Oct 2022',
//     src: '/images/ourblogs2.png'
//   },
//   {
//     title: 'Going all-in with millennial design',
//     time: '5 min',
//     date: '12<sup>th</sup> Oct 2022',
//     src: '/images/ourblogs3.png'
//   },