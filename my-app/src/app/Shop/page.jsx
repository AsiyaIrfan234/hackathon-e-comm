'use client'
import React, { useState, useEffect } from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Gurantees from '../components/Gurantees'
import Pagination from '../components/Pagination'
import ProductItem from '../components/ProductItem'
import { client } from '../../sanity/lib/client' 
import Link from 'next/link'


const page = () => {
  const [inputValue, setInputValue] = useState('')
  const [optionValue, setOptionValue] = useState('')
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type=="product"]'
      const result = await client.fetch(query)
      console.log(result);
      
      setProducts(result)
    }
    fetchProducts()
  }, [])


  // *[_type == "product"] {
  //   _id, name, description, price, tags, image
  // }

  const handleOptionChanges = (e) => {
    setOptionValue(e.target.value)
  }

  const refinedArray = optionValue === 'From Expensive to Cheap' 
    ? products.slice(0, inputValue === '' ? products.length : inputValue).sort((a, b) => b.price - a.price)
    : products.slice(0, inputValue === '' ? products.length : inputValue).sort((a, b) => a.price - b.price)

  return (
    <div className="min-h-screen w-screen">
      <WebsiteBanner title="Shop" />
      {/* Filter Bar Starts There */}
      <div className="hidden md:block">
        <div className="cp w-full bg-[#FAF4F4] flex-wrap flex-between py-5">
          <section className="flex items-center gap-6 md:gap-8 md:w-[50%]">
            <img src="/images/Filter1.png" alt="" />
            <span className="font-medium text-lg tracking-wider">Filter</span>
            <img src="/images/Filter2.png" alt="" />
            <img src="/images/Filter3.png" alt="" />
            <span className="text-3xl">|</span>
            <span className="text-[.8em] md:text-[1.1em] font-medium tracking-wider">
              Showing {inputValue === '' ? products.length : inputValue} Results
            </span>
          </section>
          <section className="flex items-center gap-4 md:w-[40%]">
            <span className="text-lg font-medium tracking-wide">Show</span>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder={'max ' + products.length}
              max={products.length}
              className="outline-none text-xl placeholder:text-xl w-[4em] rounded-lg border-none bg-white p-2 placeholder:text-[#4F4F4F]"
            />
            <span className="text-lg font-medium tracking-wide">Sort By</span>
            <select
              className="outline-none text-[1em] placeholder:text-xl w-max rounded-lg border-none bg-white p-3 placeholder:text-[#4F4F4F]"
              value={optionValue}
              onChange={handleOptionChanges}
            >
              <option value="From Expensive to Cheap">From Expensive to Cheap</option>
              <option value="From Cheap to Expensive">From Cheap to Expensive</option>
            </select>
          </section>
        </div>
      </div>

 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center mt-4">
  {refinedArray.map((product) => (
    <Link
      key={product._id} href={`/SingleProduct/${product._id}`} className="no-underline">
      <div className="product-item w-full max-w-[300px] flex flex-col items-center bg-white p-4 shadow-lg rounded-lg overflow-hidden"
    >
      <img
        src={product.imagePath}
        alt={product.name}
        className="w-full h-52 object-cover mb-4"
      />
      
      <h3 className="text-center font-semibold">{product.name}</h3>
      <p className="text-center text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="text-center font-bold">${product.price}</p>
      </div>
    </Link>
  ))}
</div> 

      <Pagination />
      <Gurantees />
      <ProductItem />
    </div>
  )
}

export default page
















