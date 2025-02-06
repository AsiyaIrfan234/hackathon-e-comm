import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
const ProductItem = ({ item, index }) => {
  if (!item) return null;
  return (
    <Link
      key={index}
      //  href={`/SingleProduct/${item.Id}`}
      href={item?.Id ? `/SingleProduct/${item.Id}` : "#"}
     
      className='md:w-[23%] p-3 flex flex-col items-center md:min-h-[23em] rounded-lg overflow-hidden gap-3 sm:w-[47%] w-[90%]'
    >
      <div className='relative h-[15rem] w-full'>
        <img
          src={item.image}
          alt=''
          className='h-[15em] absolute inset-0 z-20 rounded-xl w-full'
        />

        {item.discountPercentage && (
          <div
            className='w-max absolute top-4 left-2 z-50 px-3 py-2 text-lg font-semibold bg-gray-300 text-black
              rounded-xl'
          >
            {item.discountPercentage} % OFF
          </div>
        )}
      </div>
      <p className='tracking-wider text-left capatilize w-[95%] font-[500] text-[1.1em] md:text-xl  '>
        {item.name}
      </p>
      <div className='flex items-center justify-between w-full '>
        <p
          className={`font-medium
             w-[90%] text-xl ${item.discountPercentage && 'line-through '}`}
        >
          Rs: {item.price}
        </p>

        {item.discountPercentage > 0 && (
          <p className='text-2xl  font-semibold '>
            {item.price - (item.price * item.discountPercentage) / 100}
          </p>
        )}
      </div>
    </Link>
  )
}

export default ProductItem




