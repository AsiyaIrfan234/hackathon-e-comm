'use client'

import React, { useEffect } from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Button from '../components/Button'
import Link from 'next/link'
import Gurantees from '../components/Gurantees'
import { UseCartContext } from '../Context/CartContext'

const page = () => {
  const { cartItems, deleteCartItem, Subtotal } = UseCartContext()
  const salesPrice =(item) => item.discountPercentage > 0 ?  item.price - (item.price * item.discountPercentage) / 100 : item.price      

  function deleteFromCart (productId) {
    deleteCartItem(productId)
  }

  return (
    <div className='overflow-x-hidden'>
      <WebsiteBanner title={'Cart'} />
      <div className='cp flex flex-col items-center new:flex-row justify-between gap-4 py-[3rem]'>
        <div className=' w-full max-md:mt-[3em] lg:w-[70%] flex  md:gap-[6em] flex-col  items-center justify-between '>
          <ul
            className=' py-5 new:ms-[5em] flex flex-row w-[90%]  lg:w-full  items-center px-4   md:gap-[4rem] max-md:justify-between md:justify-center 
         bg-[#FFF9E5]'
          >
            {['Product', 'Price', 'Quantity', 'Subtotal'].map(
              (value, index) => {
                return (
                  <li
                    className={`font-medium text-sm sm:text-[1.1em]  md:text-[1.3rem]`}
                    key={index}
                  >
                    {value}
                  </li>
                )
              }
            )}
          </ul>
          <div className='flex flex-col max-md:mt-[5em] gap-y-[4em]  w-[100%] items-center '>
            {cartItems.length == 0 ? (
              <p className='text-xl font-medium tracking-wider'>
                Your cart is Empty.
              </p>
            ) : (
              cartItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=' mt-[-3rem] w-full md:mt-0 flex flex-row    items-center px-2 gap-3  new:gap-5 justify-between    '
                  >
                    <div className=' overflow-hidden rounded-lg size-[3em] md:size-[5em]'>
                      <img
                        src={item.image} alt={item.name}
                        className=' size-full object-cover'
                        // alt=''
                      />
                    </div>
                    <p
                      className={`text-[#9F9F9F]'  lg:ms-[-1em]  text-sm sm:text-[1em] md:text-lg`}
                    >
                      {item.name}{' '}
                    </p>
                    <p className='text-[.7em] sm:text-[.9em] md:text-lg'>
                      <span className='max-sm:hidden'>Rs</span> {salesPrice(item)} 
                                </p>
                    <p className='border text-[.9em] md:text-lg border-black px-3 py-2 rounded-lg'>
                      {item.quantity}{' '}
                    </p>
                    <p className='text-[.7em] sm:text-[.9em] md:text-lg'>
                      <span className='max-sm:hidden'>Rs:</span>{' '}
                      {item.quantity * salesPrice(item)}{' '}
                    </p>
                    <img
                      onClick={() => deleteFromCart(item)}
                      src='/images/delete.png'
                      alt=''
                      className='block cursor-pointer size-8 object-cover'
                    />
                  </div>
                )
              })
            )}
          </div>
        </div>
        <br className='max-new:block' />
        <section className='w-[20em] new:w-[28%] bg-[#FBEBB5] h-[18em] rounded-lg py-[.6em] md:py-[1.5rem] flex flex-col items-center gap-[4px] px-[.8rem] md:px-[1.7rem]'>
          <h1 className='text-[1.4em] md:text-[1.7em] lg:text-[2em] font-medium tracking-wide'>
            Cart Totals
          </h1>
          <br />
          <div className='flex-between w-full '>
            <span className='text-[1.1em] md:text-[1em]'>SubTotal</span>
            <span className='text-[#9F9F9F] text-[1.2em] md:text-[1em]'>
              Rs: {cartItems.length == 0 ? 0 : Subtotal}
            </span>
          </div>
          <div className='flex-between w-full'>
            <span className='text-[1.1em] md:text-[.9em]'>Total</span>
            <span className='text-[#9F9F9F] text-[1.2em] md:text-[1em]'>
              Rs: {cartItems.length == 0 ? 0 : Subtotal}
            </span>
          </div>
          <br />
          <Link href='/Checkout'>
            <Button
              title={'Check it out'}
              btnClass={
                'text-[1em] px-3 py-2 md:p-4 border border-black rounded-lg text-[1em] lg:text-xl font-medium '
              }
            />
          </Link>
        </section>
      </div>
      <Gurantees />
    </div>
  )
}

export default page


// 'use client'

// import React from 'react'
// import WebsiteBanner from '../components/WebsiteBanner'
// import Button from '../components/Button'
// import Link from 'next/link'
// import Gurantees from '../components/Gurantees'
// import { UseCartContext } from '../Context/CartContext'

// const Page = () => {
//   const { cartItems, deleteCartItem, Subtotal } = UseCartContext()

//   const salesPrice = (item) => 
//     item.discountPercentage > 0 
//       ? item.price - (item.price * item.discountPercentage) / 100 
//       : item.price

//   function deleteFromCart(productId) {
//     deleteCartItem(productId)
//   }

//   return (
//     <div className='overflow-x-hidden'>
//       <WebsiteBanner title={'Cart'} />
//       <div className='cp flex flex-col items-center new:flex-row justify-between gap-4 py-[3rem]'>
//         <div className='w-full max-md:mt-[3em] lg:w-[70%] flex md:gap-[6em] flex-col items-center justify-between'>
//           <ul className='py-5 new:ms-[5em] flex flex-row w-[90%] lg:w-full items-center px-4 md:gap-[4rem] max-md:justify-between md:justify-center bg-[#FFF9E5]'>
//             {['Product', 'Price', 'Quantity', 'Subtotal'].map((value, index) => (
//               <li className='font-medium text-sm sm:text-[1.1em] md:text-[1.3rem]' key={index}>
//                 {value}
//               </li>
//             ))}
//           </ul>
//           <div className='flex flex-col max-md:mt-[5em] gap-y-[4em] w-[100%] items-center'>
//             {cartItems.length === 0 ? (
//               <p className='text-xl font-medium tracking-wider'>Your cart is Empty.</p>
//             ) : (
//               cartItems.map((item, index) => (
//                 <div key={index} className='mt-[-3rem] w-full md:mt-0 flex flex-row items-center px-2 gap-3 new:gap-5 justify-between'>
//                   <div className='overflow-hidden rounded-lg size-[3em] md:size-[5em]'>
//                     <img
//                       src={item.image || '/default-image.png'}
//                       className='size-full object-cover'
//                       alt={item.name || 'Product Image'}
//                     />
//                   </div>
//                   <p className='text-[#9F9F9F] lg:ms-[-1em] text-sm sm:text-[1em] md:text-lg'>
//                     {item.name}
//                   </p>
//                   <p className='text-[.7em] sm:text-[.9em] md:text-lg'>
//                     <span className='max-sm:hidden'>Rs</span> {salesPrice(item)}
//                   </p>
//                   <p className='border text-[.9em] md:text-lg border-black px-3 py-2 rounded-lg'>
//                     {item.quantity}
//                   </p>
//                   <p className='text-[.7em] sm:text-[.9em] md:text-lg'>
//                     <span className='max-sm:hidden'>Rs:</span> {item.quantity * salesPrice(item)}
//                   </p>
//                   <img
//                     onClick={() => deleteFromCart(item.id)}
//                     src='/images/delete.png'
//                     alt='Delete'
//                     className='block cursor-pointer size-8 object-cover'
//                   />
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//         <br className='max-new:block' />
//         <section className='w-[20em] new:w-[28%] bg-[#FBEBB5] h-[18em] rounded-lg py-[.6em] md:py-[1.5rem] flex flex-col items-center gap-[4px] px-[.8rem] md:px-[1.7rem]'>
//           <h1 className='text-[1.4em] md:text-[1.7em] lg:text-[2em] font-medium tracking-wide'>
//             Cart Totals
//           </h1>
//           <br />
//           <div className='flex-between w-full'>
//             <span className='text-[1.1em] md:text-[1em]'>SubTotal</span>
//             <span className='text-[#9F9F9F] text-[1.2em] md:text-[1em]'>
//               Rs: {cartItems.length === 0 ? 0 : Subtotal}
//             </span>
//           </div>
//           <div className='flex-between w-full'>
//             <span className='text-[1.1em] md:text-[.9em]'>Total</span>
//             <span className='text-[#9F9F9F] text-[1.2em] md:text-[1em]'>
//               Rs: {cartItems.length === 0 ? 0 : Subtotal}
//             </span>
//           </div>
//           <br />
//           <Link href='/Checkout'>
//             <Button
//               title={'Check it out'}
//               btnClass='text-[1em] px-3 py-2 md:p-4 border border-black rounded-lg text-[1em] lg:text-xl font-medium'
//             />
//           </Link>
//         </section>
//       </div>
//       <Gurantees />
//     </div>
//   )
// }

// export default Page
