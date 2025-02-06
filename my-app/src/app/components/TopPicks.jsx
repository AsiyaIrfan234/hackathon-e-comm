import React from 'react'
import Underline from './Underline'
import { UseCartContext } from '../Context/CartContext'
import ProductItem from './ProductItem'

const TopPicks = () => {
    const {data} = UseCartContext()
   return (
        <div className='min-h-[70vh] py-12 md:py-[5rem] bg-white w-screen flex flex-col gap-4 px-6 md:px-8 lg:px-16'>
            <h1 className='capatilize text-3xl font-[600] tracking-wider text-center'>Top Picks for You</h1>
            <p className='text-center tracking-wider font-medium text-lg text-[#9F9F9F]'>Find a bright Ideal to suit your taste with our great selection , floor and table lights.</p>
            <div className='flex gap-4 flex-wrap mt-3 md:mt-[2.8rem] items-center justify-center'>
      {data.slice(0,4).map((value, index) => {
        return <ProductItem key={index} index={index} item={value} /> 
      })}
    </div>

            <div className='w-full mt-[1rem] flex items-center justify-center'>
                <Underline title={'View More'} />
            </div>
        </div>
    )
}

export default TopPicks


// 'use client'
// import { useEffect, useState } from 'react'
// import TopPicks from '../components/TopPicks'
// import { client } from '../../sanity/lib/client' // Assuming this is where your Sanity client is set up

// const HomePage = () => {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = '*[_type == "product"]' // You can adjust this query as needed
//       const result = await client.fetch(query)
//       setProducts(result)
//     }
//     fetchProducts()
//   }, [])

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="hero-section">
//         {/* Your hero content goes here */}
//       </div>

//       {/* Top Picks Section */}
//       <TopPicks data={products} />
//     </div>
//   )
// }

// export default HomePage
