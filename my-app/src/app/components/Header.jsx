'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from 'react-icons/rx'
import CartSideBar from './CartSideBar';
import { UseCartContext } from '../Context/CartContext';

const Header = () => {
    const [sideBarDisplay, setSideBarDisplay] = useState(false)
    let {cartItems , cartBarOpen , setCartBarOpen} = UseCartContext()
    const navElements = ['Home', 'Shop', 'Blog', 'Contact', 'Cart']
    return (
        <header className='px-6 w-dvw relative  flex items-center py-4 gap-4 justify-between lg:py-6 md:px-8 lg:px-16 bg-white'>
            <div className='font-bold text-[1.3em] sm:text-[1.5em] cursor-pointer md:text-[1.6em] lg:text-[1.9em] tracking-wider'>
                <Link href={'/'}>ECommify</Link>
            </div>
            <nav className='flex items-end md:gap-[2.7em]'>
                {
                    navElements.map((navItem, index) => {
                        return <Link key={index} className='hidden md:block md:text-[1em] lg:text-lg tracking-wider font-light' href={index === 0 ? '/' : `/${navItem}`}>{navItem} </Link>
                    })
                }
            </nav>
            <div className='flex items-center gap-4 sm:gap-6 md:gap-8'>
                <Link className='' href={'/Account'}>
                    <FaRegUser className='size-4 sm:size-5 md:size-6' />
                </Link>
                <Link className='' href={'/'}>
                    <IoSearch className='size-4 sm:size-5 md:size-6' />
                </Link>
                <Link className='' href={'/'}>
                    <FaRegHeart className='size-4 sm:size-5 md:size-6' />
                </Link>
                <div className='flex items-center justify-center gap-1' onClick={() => setCartBarOpen((prev) => !prev)}  >
                    <FaCartShopping className='size-4 sm:size-5 md:size-6' /><sup className='size-3 bg-yellow-400 text-white text-xl flex-center p-4 rounded-full'>{cartItems.length}</sup>
                </div>
                <GiHamburgerMenu onClick={() => setSideBarDisplay((prev) => !prev)} className='md:hidden block size-4 sm:size-5 md:size-7' />
            </div>
            {sideBarDisplay && <div className={`flex absolute bg-white text-white right-1 top-4  rounded-2xl   flex-col items-center   px-[1.5rem] gap-8 py-[2rem] z-[999] min-h-[100vh] w-screen sm:w-[14em]`}>

                <div className='w-full relative '>
                    <RxCross1 onClick={() => setSideBarDisplay(!sideBarDisplay)} className='top-1/2 right-0 size-6 cusor-pointer rounded-full text-black border-box' />
                </div>
                {
                    navElements.map((navItem, index) => {
                        return <Link href={index === 0 ? '/' : `/${navItem}`} onClick={() => setSideBarDisplay(!sideBarDisplay)} key={index} className={`font-[500]  hover:text-[#5c5ccf] text-black leading-0 tracking-wider text-[1.1rem] `}>{navItem}</Link>
                    })
                }
            </div>}

            {
                cartBarOpen && <CartSideBar />
            }
        </header>
    )
}

export default Header