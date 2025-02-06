import React from 'react'
import Underline from './Underline'


const Table = () => {
    return (
        <div className='w-full py-[3rem] min-h-[100vh]   md:flex gap-6 items-center justify-center  px-6 lg:px-16 md:px-8 bg-[#FAF4F4]'>
            <section className='md:w-1/2    flex justify-center flex-col items-center gap-6 '>
            <img src={'/images/table1.png'} className={`object-cover size-full    overflow-hidden`} alt="" />
            <h2 className='text-3xl tracking-wider -mt-[8rem] md:-mt-[10rem] font-bold '>Side Table</h2>
                <Underline title={'View More'} />
            </section>
            <section className='md:w-1/2  flex flex-col justify-center  items-center p-4 gap-6'>
            <img src={'/images/table2.png'} className={`object-cover overflow-hidden`} alt="" />
            <h2 className='text-3xl tracking-wider -mt-[3em] md:-mt-[5em] font-bold '>Side Table</h2>
                <Underline title={'View More'} />
            </section>
        </div>
    )
}

export default Table