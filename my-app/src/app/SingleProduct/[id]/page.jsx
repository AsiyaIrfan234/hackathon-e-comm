'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { client } from '../../../sanity/lib/client'
import { FaStar, RxLinkedinLogo, AiFillTwitterCircle, IoIosHeartEmpty  } from 'react-icons/fa'
import { MdFacebook } from "react-icons/md";
import Button from '../../components/Button'
import Products from '../../components/Products'
import Underline from '../../components/Underline'
import { UseCartContext } from '../../Context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart, setItemsCount, itemsCount } = UseCartContext()
  const [product, setProduct] = useState(null)
  const [index, setIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState('L')
  const [selectedColor, setSelectedColor] = useState('bg-black')

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == "${id}"][0]`
      const result = await client.fetch(query)
      setProduct(result)
    }
    fetchProduct()
  }, [id])

  if (!product) return <p>Loading...</p>

  const Images = [
    '/images/sp1.png',
    '/images/sp2.png',
    '/images/sp3.png',
    product.imagePath || '/default-image.png'
  ]

  const mainImageSrc = Images[index] || product.imagePath || '/default-image.png'

  const addToCartHandler = () => {
    const productData = {
      ...product,
      quantity: itemsCount,
      size: selectedSize,
      color: selectedColor,
    }
    addToCart(productData)
  }

  return (
    <div className='cp relative py-[3rem]'>
      <main className='md:flex py-[3rem] items-start justify-between'>
        <section className='flex md:flex-row flex-col items-center min-h-[90vh] gap-4 md:w-[48%]'>
          <div className='flex flex-row md:flex-col items-center gap-4'>
            {Images.map((item, idx) => item && (
              <div
                key={idx}
                onClick={() => setIndex(idx)}
                className='size-[4em] md:size-[4.5em] hover:border-green-400 hover:border cursor-pointer transition-all ease-in-out duration-1000 delay-200 lg:size-[6em] p-2 bg-[#FFF9E5]'
              >
                <img src={item} className='size-full object-cover rounded-2xl' alt='' />
              </div>
            ))}
          </div>
          <div className='w-[30em] overflow-hidden flex-center rounded-2xl p-4 h-[70vh]'>
            <img src={mainImageSrc} className='size-full object-cover rounded-xl' alt='' />
          </div>
        </section>
        <section className='flex flex-col px-4 gap-4 min-h-screen md:w-[48%]'>
          <h1 className='tracking-wider font-semibold lg:text-[3em] md:text-3xl sm:text-2xl text-[1.4rem]'>
            {product?.name || 'Asgaard Sofa'}
          </h1>
          <p className='text-xl md:text-2xl font-medium text-[#4F4F4F] tracking-wider'>
            Rs: {product.discountPercentage > 0 
              ? product.price - (product.price * product.discountPercentage) / 100 
              : product?.price}
          </p>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-3'>
              {[...Array(4)].map((_, idx) => (
                <FaStar key={idx} className='size-6 text-yellow-500' />
              ))}
            </div>
            <span className='text-3xl font-medium'> | </span>
            <span className='text-[.9em] md:text-[1em] text-[#4F4F4F]'>5 Customer Reviews</span>
          </div>
          <p className='text-sm md:text-[1em] tracking-wide font-medium'>
            {product?.description || `A well-balanced audio device with clear midrange and extended highs for premium sound.`}
          </p>
          <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Size</h4>
          <div className='flex items-center gap-3'>
            {['L', 'XL', 'XS'].map((size, idx) => (
              <div 
                key={idx} 
                className={`text-lg h-[2.7em] cursor-pointer flex-center w-[3em] ${selectedSize === size ? 'bg-yellow-100' : 'bg-gray-300'} rounded-md shadow-sm`} 
                onClick={() => setSelectedSize(size)}>
                {size}
              </div>
            ))}
          </div>
          <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Color</h4>
          <div className='flex items-center gap-3'>
            {['bg-black', 'bg-purple-800', 'bg-yellow-500'].map((color, idx) => (
              <div 
                key={idx} 
                className={`h-10 w-10 rounded-full cursor-pointer ${color} ${selectedColor === color ? 'border-2 border-black' : ''}`} 
                onClick={() => setSelectedColor(color)}>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-4'>
            <div className='px-5 rounded-lg py-4 border border-gray-400 flex items-center justify-between w-[8em] text-lg font-medium'>
              <span className={itemsCount === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} onClick={() => setItemsCount(Math.max(1, itemsCount - 1))}>-</span>
              <span>{itemsCount}</span>
              <span className='cursor-pointer' onClick={() => setItemsCount(itemsCount + 1)}>+</span>
            </div>
            <div onClick={addToCartHandler}>
              <Button title='Add To Cart' btnClass='text-lg md:text-xl hover:bg-blue-300 hover:text-white transition-all ease-in-out duration-1000 delay-30 hover:border-none font-medium tracking-wide px-2 py-4 rounded-lg md:px-[3rem] border border-black' />
            </div>
          </div>
        </section>
      </main>
      <div className='py-4 md:py-8'>
        <h1 className='text-center tracking-wider text-[1.8em] md:text-[2.4em]'>Related Products</h1>
        <Products relation={product} />
        </div>
         </div>
)
}
     
export default ProductDetail













  











//  'use client'

//  import { useEffect, useState } from 'react'
//  import { useParams } from 'next/navigation'
// import { client } from '../../../sanity/lib/client'
//  import { FaStar, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
//  import Button from '../../components/Button'
//  import Products from '../../components/Products'
// import Underline from '../../components/Underline'
// import { UseCartContext } from '../../Context/CartContext'

//  const ProductDetail = () => {
//   const { id } = useParams()
//   const { addToCart, setItemsCount, itemsCount } = UseCartContext()
//   const [product, setProduct] = useState(null)
//   const [index, setIndex] = useState(0)
//   const [selectedSize, setSelectedSize] = useState('L')
//   const [selectedColor, setSelectedColor] = useState('bg-black')

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && _id == "${id}"][0]`
//       const result = await client.fetch(query)
//       setProduct(result)
//     }
//     fetchProduct()
//   }, [id])

//   if (!product) return <p>Loading...</p>

//   const Images = [
//     '/images/sp1.png',
//     '/images/sp2.png',
//     '/images/sp3.png',
//     product.imagePath || '/default-image.png'
//   ]

//   const addToCartHandler = () => {
//     const productData = {
//       ...product,
//       quantity: itemsCount,
//       size: selectedSize,
//       color: selectedColor,
//     }
//     addToCart(productData)
//   }

//   return (
//     <div className='min-h-screen flex flex-col items-center p-6'>
//       <main className='md:flex py-[3rem] items-start justify-between w-full'>
//         <section className='flex md:flex-row flex-col items-center md:mt-[-3.3rem] min-h-[90vh] gap-4 md:w-[48%]'>
//           <div className='flex flex-row md:flex-col items-center gap-4'>
//             {Images.map((item, idx) => item && (
//               <div
//                 key={idx}
//                 onClick={() => setIndex(idx)}
//                 className='size-[4em] md:size-[4.5em] hover:border-green-400 hover:border cursor-pointer transition-all ease-in-out duration-1000 delay-200 lg:size-[6em] p-2 bg-[#FFF9E5]'
//               >
//                 <img src={item} className='size-full object-cover rounded-2xl' alt='' />
//               </div>
//             ))}
//           </div>
//           <div className='w-[30em] overflow-hidden flex-center rounded-2xl p-4 h-[70vh]'>
//             <img src={Images[index]} className='size-full object-cover rounded-xl' alt='' />
//           </div>
//         </section>

//         <section className='flex flex-col px-4 gap-4 min-h-screen md:w-[48%]'>
//           <h1 className='tracking-wider font-semibold lg:text-[3em] md:text-3xl sm:text-2xl text-[1.4rem]'>
//             {product.name}
//           </h1>
//           <p className='text-xl md:text-2xl font-medium text-[#4F4F4F] tracking-wider'>
//             Rs: {product.discountPercentage > 0 
//               ? product.price - (product.price * product.discountPercentage) / 100 
//               : product.price}
//           </p>

//           <div className='flex items-center gap-4'>
//             <div className='flex items-center gap-3'>
//               {[...Array(4)].map((_, idx) => (
//                 <FaStar key={idx} className='text-yellow-500' />
//               ))}
//             </div>
//             <span className='text-3xl font-medium'> | </span>
//             <span className='text-[.9em] md:text-[1em] text-[#4F4F4F]'>5 Customer Reviews</span>
//           </div>

//           <p className='text-sm md:text-[1em] tracking-wide font-medium'>
//             {product.description || 'Description not available'}
//           </p>

//           <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Size</h4>
//           <div className='flex items-center gap-3'>
//             {['L', 'XL', 'XS'].map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`p-2 border rounded-md ${selectedSize === size ? 'bg-yellow-100' : 'bg-gray-300'}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>

//           <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Color</h4>
//           <div className='flex items-center gap-3'>
//             {['bg-black', 'bg-purple-800', 'bg-yellow-500'].map((color, idx) => (
//               <div
//                 key={idx}
//                 className={`h-10 w-10 rounded-full ${color} ${selectedColor === color ? 'border-4 border-yellow-500' : ''}`}
//                 onClick={() => setSelectedColor(color)}
//               />
//             ))}
//           </div>

//           <div className='flex items-center gap-4'>
//             <div className='px-5 rounded-lg py-4 border border-gray-400 flex items-center justify-between w-[8em] text-lg font-medium'>
//               <span className={itemsCount === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} onClick={() => setItemsCount(Math.max(1, itemsCount - 1))}>-</span>
//               <span>{itemsCount}</span>
//               <span className='cursor-pointer' onClick={() => setItemsCount(itemsCount + 1)}>+</span>
//             </div>

//             {/* <Button title='Add To Cart' onClick={addToCartHandler} />
//           </div> */}
//     <div onClick={() => addCartItem(findItemNavigated)}>
//               <Button
//                 title={'Add To Cart'}
//                 btnClass={
//                   'text-lg md:text-xl hover:bg-blue-300 hover:text-white transition-all ease-in-out duration-1000 delay-30 hover:border-none font-medium tracking-wide px-2 py-4 rounded-lg md:px-[3rem] border border-black '
//                 }
//               />
// </div>
// </div>
//           <hr className='w-full mt-8 bg-gray-400 h-[1.5px]' />

//           <div className='flex items-center mt-9 gap-3'>
//             <div className='flex flex-col gap-2 text-[1em] md:text-[1.2em] text-[#9F9F9F] tracking-wider font-medium'>
//               <span>Stock Level: {product.stockLevel}</span>
//               <span>Category: {product.category}</span>
//               <span>Tags: Home, Furniture, Appliances</span>
//               <span>Share: <FaFacebook className='size-6' /><FaInstagram className='size-6' /><FaTwitter className='size-6' /></span>
//             </div>
//           </div>
//         </section>
//       </main>

//       <hr className='h-[1.6px] bg-gray-400 mt-[3em] w-[100vw]' />

//       <div className='py-4 md:py-8'>
//         <h1 className='text-center tracking-wider text-[1.8em] md:text-[2.4em]'>Related Products</h1>
//         <Products relation={product} />
//         <Underline title='View More' />
//       </div>
//     </div>
//   )
// }

// export default ProductDetail










// 'use client'

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { client } from '../../../sanity/lib/client'
// import { FaStar, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
// import Button from '../../components/Button'
// import Products from '../../components/Products'
// import Underline from '../../components/Underline'
// import { UseCartContext } from '../../Context/CartContext'

// const ProductDetail = () => {
//   const { id } = useParams()
//   const { addToCart, setItemsCount, itemsCount } = UseCartContext()
//   const [product, setProduct] = useState(null)
//   const [index, setIndex] = useState(0)
//   const [selectedSize, setSelectedSize] = useState('L')
//   const [selectedColor, setSelectedColor] = useState('bg-black')

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && _id == "${id}"][0]`
//       const result = await client.fetch(query)
//       setProduct(result)
//     }
//     fetchProduct()
//   }, [id])

//   if (!product) return <p>Loading...</p>

//   const Images = [
//     '/images/sp1.png',
//     '/images/sp2.png',
//     '/images/sp3.png',
//     product.imagePath || '/default-image.png'
//   ]

//   return (
//     <div className='min-h-screen flex flex-col items-center p-6'>
//       <main className='md:flex py-[3rem] items-start justify-between w-full'>
//         <section className='flex md:flex-row flex-col items-center md:mt-[-3.3rem] min-h-[90vh] gap-4 md:w-[48%]'>
//           <div className='flex flex-row md:flex-col items-center gap-4'>
//             {Images.map((item, idx) => item && (
//               <div
//                 key={idx}
//                 onClick={() => setIndex(idx)}
//                 className='size-[4em] md:size-[4.5em] hover:border-green-400 hover:border cursor-pointer transition-all ease-in-out duration-1000 delay-200 lg:size-[6em] p-2 bg-[#FFF9E5]'
//               >
//                 <img src={item} className='size-full object-cover rounded-2xl' alt='' />
//               </div>
//             ))}
//           </div>
//           <div className='w-[30em] overflow-hidden flex-center rounded-2xl p-4 h-[70vh]'>
//             <img src={Images[index]} className='size-full object-cover rounded-xl' alt='' />
//           </div>
//         </section>

//         <section className='flex flex-col px-4 gap-4 min-h-screen md:w-[48%]'>
//           <h1 className='tracking-wider font-semibold lg:text-[3em] md:text-3xl sm:text-2xl text-[1.4rem]'>
//             {product.name}
//           </h1>
//           <p className='text-xl md:text-2xl font-medium text-[#4F4F4F] tracking-wider'>
//             Rs: {product.discountPercentage > 0 
//               ? product.price - (product.price * product.discountPercentage) / 100 
//               : product.price}
//           </p>

//           <div className='flex items-center gap-4'>
//             <div className='flex items-center gap-3'>
//               {[...Array(4)].map((_, idx) => (
//                 <FaStar key={idx} className='text-yellow-500' />
//               ))}
//             </div>
//             <span className='text-3xl font-medium'> | </span>
//             <span className='text-[.9em] md:text-[1em] text-[#4F4F4F]'>5 Customer Reviews</span>
//           </div>

//           <p className='text-sm md:text-[1em] tracking-wide font-medium'>
//             {product.description || 'Description not available'}
//           </p>

//           <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Size</h4>
//           <div className='flex items-center gap-3'>
//             {['L', 'XL', 'XS'].map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`p-2 border rounded-md ${selectedSize === size ? 'bg-yellow-100' : 'bg-gray-300'}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>

//           <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Color</h4>
//           <div className='flex items-center gap-3'>
//             {['bg-black', 'bg-purple-800', 'bg-yellow-500'].map((color, idx) => (
//               <div
//                 key={idx}
//                 className={`h-10 w-10 rounded-full ${color} ${selectedColor === color ? 'border-4 border-yellow-500' : ''}`}
//                 onClick={() => setSelectedColor(color)}
//               />
//             ))}
//           </div>

//           <div className='flex items-center gap-4'>
//             <div className='px-5 rounded-lg py-4 border border-gray-400 flex items-center justify-between w-[8em] text-lg font-medium'>
//               <span className={itemsCount === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} onClick={() => setItemsCount(Math.max(1, itemsCount - 1))}>-</span>
//               <span>{itemsCount}</span>
//               <span className='cursor-pointer' onClick={() => setItemsCount(itemsCount + 1)}>+</span>
//             </div>

//             <Button title='Add To Cart' onClick={() => addToCart(product)} />
//           </div>

//           <hr className='w-full mt-8 bg-gray-400 h-[1.5px]' />

//           <div className='flex items-center mt-9 gap-3'>
//             <div className='flex flex-col gap-2 text-[1em] md:text-[1.2em] text-[#9F9F9F] tracking-wider font-medium'>
//               <span>Stock Level: {product.stockLevel}</span>
//               <span>Category: {product.category}</span>
//               <span>Tags: Home, Furniture, Appliances</span>
//               <span>Share: <FaFacebook className='size-6' /><FaInstagram className='size-6' /><FaTwitter className='size-6' /></span>
//             </div>
//           </div>
//         </section>
//       </main>

//       <hr className='h-[1.6px] bg-gray-400 mt-[3em] w-[100vw]' />

//       <div className='py-4 md:py-8'>
//         <h1 className='text-center tracking-wider text-[1.8em] md:text-[2.4em]'>Related Products</h1>
//         <Products relation={product} />
//         <Underline title='View More' />
//       </div>
//     </div>
//   )
// }

// export default ProductDetail














// 'use client'

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { client } from '../../../sanity/lib/client' // Path adjust karein agar needed ho

// const ProductDetail = () => {
//   const { id } = useParams() // 🛑 params yahan se milega
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && _id == "${id}"][0]`
//       const result = await client.fetch(query)
//       setProduct(result)
//     }
//     fetchProduct()
//   }, [id])

//   if (!product) return <p>Loading...</p>

//   return (
//     <div className="min-h-screen flex flex-col items-center p-6">
//       <img src={product.imagePath} alt={product.name} className="w-80 h-80 object-cover mb-4" />
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <p className="text-lg text-gray-700">{product.description}</p>
//       <p className="text-xl font-semibold text-red-600">${product.price}</p>
//     </div>
//   )
// }

// export default ProductDetail







// 'use client';
// import React, { useEffect, useState } from 'react';
// import { FaFacebook, FaInstagram, FaStar, FaTwitter } from 'react-icons/fa';
// import WebsitePath from '../../components/WebsitePath';
// import Button from '../../components/Button';
// import Products from '../../components/Products';
// import Underline from '../../components/Underline';
// import Link from 'next/link';
// import { UseCartContext } from '../../Context/CartContext';
// import { useParams } from 'next/navigation';
// import { client } from '@sanity/client'; // Correct import path for Sanity

// const SingleProduct = () => {
//   const params = useParams();
//   const Id = params.id;
//   const { addToCart, cartItems, itemsCount, setItemsCount } = UseCartContext();
  
//   const [findItemNavigated, setFindItemNavigated] = useState(null);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     localStorage.setItem('cartItem', JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const query = `*[_type == "product" && _id == "${Id}"][0]`;
//         const result = await client.fetch(query);
//         setFindItemNavigated(result);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };
    
//     if (Id) {
//       fetchProductDetails();
//     }
//   }, [Id]);

//   if (!findItemNavigated) {
//     return <div>Loading...</div>;
//   }

//   const Images = [
//     '/images/sp1.png',
//     '/images/sp2.png',
//     '/images/sp3.png',
//     findItemNavigated.image
//   ];
  
//   const mainImageSrc = index >= 1 && index <= 3 ? `/images/sp${index}.png` : findItemNavigated.image;

//   return (
//     <div className='cp relative py-[3rem]'>
//       <WebsitePath path={findItemNavigated.name} />
//       <main className='md:flex py-[3rem] items-start justify-between'>
//         <section className='flex md:flex-row flex-col items-center min-h-[90vh] gap-4 md:w-[48%]'>
//           <div className='flex flex-row md:flex-col items-center gap-4'>
//             {Images.map((item, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setIndex(idx + 1)}
//                 className='size-[4em] md:size-[4.5em] hover:border-green-400 cursor-pointer transition-all p-2 bg-[#FFF9E5]'
//               >
//                 <img src={item} className='size-full object-cover rounded-2xl' alt='' />
//               </div>
//             ))}
//           </div>
//           <div className='w-[30em] overflow-hidden flex-center rounded-2xl p-4 h-[70vh]'>
//             <img src={mainImageSrc} className='size-full object-cover rounded-xl' alt='' />
//           </div>
//         </section>
//         <section className='flex flex-col px-4 gap-4 min-h-screen md:w-[48%]'>
//           <h1 className='tracking-wider font-semibold lg:text-[3em] md:text-3xl'>{findItemNavigated.name}</h1>
//           <p className='text-xl md:text-2xl font-medium text-[#4F4F4F] tracking-wider'>
//             Rs: {findItemNavigated.discountPercentage > 0 ? findItemNavigated.price - (findItemNavigated.price * findItemNavigated.discountPercentage) / 100 : findItemNavigated.price}
//           </p>
//           <div className='flex items-center gap-4'>
//             <div className='flex items-center gap-3'>
//               {[1, 2, 3, 4].map((_, idx) => (
//                 <FaStar key={idx} className='size-6 text-yellow-500' />
//               ))}
//             </div>
//             <span className='text-3xl font-medium'> | </span>
//             <span className='text-[.9em] md:text-[1em] text-[#4F4F4F]'>5 Customer Reviews</span>
//           </div>
//           <p className='text-sm md:text-[1em] tracking-wide font-medium'>{findItemNavigated.description}</p>
//           <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Size</h4>
//           <div className='flex items-center gap-3'>
//             {['L', 'XL', 'XS'].map((item, idx) => (
//               <div key={idx} className='text-lg h-[2.7em] flex-center w-[3em] bg-gray-300 rounded-md'>{item}</div>
//             ))}
//           </div>
//           <h4 className='text-[#4F4F4F] text-xl font-medium tracking-wider'>Color</h4>
//           <div className='flex items-center gap-3'>
//             {['black', 'purple-800', 'yellow-500'].map((color, idx) => (
//               <div key={idx} className={`h-10 w-10 rounded-full bg-${color}`} />
//             ))}
//           </div>
//           <div className='flex items-center gap-4'>
//             <div className='px-5 rounded-lg py-4 border border-gray-400 flex items-center w-[8em] text-lg font-medium'>
//               <span className='cursor-pointer' onClick={() => setItemsCount(itemsCount > 1 ? itemsCount - 1 : 1)}>-</span>
//               <span>{itemsCount}</span>
//               <span className='cursor-pointer' onClick={() => setItemsCount(itemsCount + 1)}>+</span>
//             </div>
//             <div onClick={() => addToCart(findItemNavigated)}>
//               <Button title={'Add To Cart'} btnClass='text-lg font-medium px-2 py-4 rounded-lg border border-black' />
//             </div>
//           </div>
//           <hr className='w-full mt-8 bg-gray-400 h-[1.5px]' />
//           <div className='flex items-center mt-9 gap-3'>
//             <div className='text-[1em] capitalize md:text-[1.2em] text-[#9F9F9F] font-medium'>
//               <span>Stock Level: {findItemNavigated.stockLevel}</span>
//               <span>Category: {findItemNavigated.category}</span>
//               <span>Tags: Home, Furniture, Appliances</span>
//               <span>Share: <FaFacebook className='size-6' /> <FaInstagram className='size-6' /> <FaTwitter className='size-6' /></span>
//             </div>
//           </div>
//         </section>
//       </main>
//       <div className='py-4 md:py-8'>
//         <h1 className='text-center tracking-wider text-[1.8em] md:text-[2.4em]'>Related Products</h1>
//         <Products relation={findItemNavigated} />
//         <Link href={'/Shop'}><Underline title={'View More'} /></Link>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
