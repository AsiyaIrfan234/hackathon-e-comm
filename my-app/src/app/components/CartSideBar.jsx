'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';
import Button from './Button';
import { UseCartContext } from '../Context/CartContext';
import Image from 'next/image';

const CartSideBar = () => {
  const { cartItems, deleteCartItem, Subtotal, cartBarOpen, setCartBarOpen } = UseCartContext();
  const cartBarRef = useRef(null);

  useEffect(() => {
    const handleOutSideClicking = (e) => {
      if (cartBarRef.current && !cartBarRef.current.contains(e.target)) {
        setCartBarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClicking);
    return () => {
      document.removeEventListener('mousedown', handleOutSideClicking);
    };
  }, [setCartBarOpen]);

  if (!cartBarOpen) return null;

  return (
    <div
      ref={cartBarRef}
      className="absolute top-[4rem] right-5 z-[999] w-[21em] md:w-[27em] px-[2rem] shadow-[2px_2px_30px] shadow-slate-500 py-[2rem] bg-white"
    >
      <div className="flex-between">
        <h1 className="md:text-[1.3em] text-[1em] tracking-wider font-[600] sm:text-[1.1em]">
          Shopping Cart
        </h1>
        <img src="/images/Lock.png" className="fill-[#9F9F9F] object-cover" alt="" />
      </div>
      <br />
      <hr className="w-full bg-[#9f9f9f] h-[1.6px]" />
      <br />
      <div className="flex flex-col gap-4">
        {cartItems.length === 0
          ? 'Your Cart is Empty'
          : cartItems.map((item, index) => (
              <div key={index} className="flex items-center w-full justify-between gap-6">
                <div className="rounded-lg md:w-[30%] h-[5em] overflow-hidden">
                <img src={item.image || '/default-image.png'} alt={item.name} className="h-full w-full object-cover" />
                
                </div>
                <div>
                  <p className="text-[.9em] font-medium lg:text-[1.4em] md:text-[1.1em]">
                    {item.name}
                  </p>
                  <div className="tracking-[.5em]">
                    <span className="text-[.9em] text-gray-500 font-medium">
                      {item.quantity}
                    </span>
                    X
                    <span className="text-sm md:text-[1.1em] text-yellow-400 tracking-normal font-light">
                      {item.discountPercentage > 0
                        ? item.price - (item.price * item.discountPercentage) / 100
                        : item.price}
                    </span>
                  </div>
                </div>
                <div
                  className="p-[.5em] rounded-full bg-slate-300 cursor-pointer"
                  onClick={() => deleteCartItem(item)}
                >
                  <RxCross1 className="size-4" />
                </div>
              </div>
            ))}
        <div className="flex-between w-full mt-5">
          <span className="text-lg">Subtotal</span>
          <span className="text-yellow-400 text-lg">Rs.{Subtotal}</span>
        </div>
        <hr className="w-full bg-[#9f9f9f] h-[1.6px]" />
        <div className="flex gap-4 justify-center items-center">
          <Link href="/Cart">
            <Button
              btnClass="px-3 py-2 border-black border rounded-lg"
              title="View Cart"
            />
          </Link>
          <Link href="/Checkout">
            <Button
              btnClass="px-3 py-2 border-black border rounded-lg"
              title="Checkout"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar ;


