'use client'
import React from 'react'
import Input from '../components/Input'
import WebsiteBanner from '../components/WebsiteBanner'
import Button from '../components/Button'
import Gurantees from '../components/Gurantees'
import { UseCartContext } from '../Context/CartContext'

const Circle = ({ bg }) => (
  <div
    className={`size-6 ${bg} hover:bg-black cursor-pointer transition-colors ease-in-out duration-700 delay-30 border border-[#9F9F9F] rounded-full`}
  ></div>
)

const page = () => {
  const { cartItems, Subtotal } = UseCartContext()
  return (
    <div className='w-screen'>
      <WebsiteBanner title={'Checkout'} />
      <div className='cp py-[1.8em] md:py-[3rem] md:flex justify-between gap-8'>
        <section className='md:w-[45%] flex flex-col gap-6'>
          <h1 className='text-[2.3em] tracking-wider font-semibold md:text-[3em]'>
       
            Billing Details
          </h1>
          <div className='w-full flex items-center gap-4'>
            <Input
              title='First Name'
              inputClass='w-full lg:w-[15rem] py-[1rem] '
            />
            <Input
              title='Last name'
              inputClass='w-full lg:w-[15rem] py-[1rem] '
            />
          </div>
          <Input placeholder={'Sri Lanka'} title={'Company Name / Optional'} />
          <Input title={'Street Address'} />
          <Input title={'Town / City'} />
          <Input placeholder={'Province'} title={'Province'} />
          <Input title={'ZIP code'} />
          <Input title={'IPhone'} />
          <Input title={'Email Address'} />
          <Input title={'Additional Information'} />
        </section>
        <br className='block md:hidden' />
        <br className='block md:hidden' />
        <section className='md:w-[45%]'>
          <div className='flex flex-col items-center gap-6'>
            <div className='flex-between w-full gap-3'>
              <span className='text-2xl md:text-3xl font-medium'>Product</span>
              <span className='text-xl md:text-3xl font-medium'>Subtotal</span>
            </div>

            {cartItems.length == 0 ? (
              <p className='text-xl tracking-wider font-medium'>
                Your Cart is Empty
              </p>
            ) : (
              cartItems.map((item, index) => {
                return (
                  <div key={index} className='flex-between w-full gap-4'>
                    <span className='font-semibold text-[1em] md:text-xl'>
                      {item.name}{' '}
                      <span className='text-[#9F9F9F] text-lg'>
                        {' '}
                        X {item.quantity}
                      </span>{' '}
                    </span>
                    <span className='font-semibold text-[1em] md:text-xl'>
                      Rs.{
                  item.discountPercentage > 0 ?  item.price - (item.price * item.discountPercentage) / 100 : item.price  }
                    </span>
                  </div>
                )
              })
            )}
            <div className='flex-between w-full gap-6'>
              <span className='text-[.9em] md:text-[1.1em] font-medium text-[#9F9F9F]'>
                {' '}
                Total
              </span>
              <span className='text-[1.2em] md:text-[1.4em] font-bold text-[#B88E2F]'>
                Rs.{Subtotal}
              </span>
            </div>
            {/* <div className='flex flex-col gap-6'>
                                <span className='text-[.9em] md:text-[1.1em] font-medium'></span>
                            </div>
                            <div className='flex flex-col gap-6'>
                             */}
            {/* <span className='text-[.9em] md:text-[1.1em] font-medium'>Rs. 250,000.000</span>
                        </div> */}
          </div>
          <hr className='bg-[#9F9F9F] h-[1.4px] w-full mt-[1.8em]' />
          <br />
          <div className='flex items-center gap-4'>
            <Circle bg={'bg-black'} />
            <p className='text-[1em] font-medium capitalize md:text-[1.2em]'>
              Direct Bank Transfer
            </p>
          </div>
          <br />
          <p className='text-[1em] text-[#9F9F9F] font-medium capitalize md:text-[1.2em]'>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <br />
          <div className='flex items-center gap-4'>
            <Circle bg={''} />
            <p className='text-[1em] font-medium text-[#9F9F9F] capitalize md:text-[1.2em]'>
              Direct Bank Transfer
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Circle bg={''} />
            <p className='text-[1em] font-medium text-[#9F9F9F] capitalize md:text-[1.2em]'>
              Cash On Delievery
            </p>
          </div>
          <br />
          <p className='text-[1em] font-light capitalize md:text-[1.1em]'>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b>privacy Policy</b>.
          </p>
          <br />
          <div className='w-full flex-center'>
            <Button
              title={'Place Order'}
              btnClass={
                'md:px-[3rem] px-[2rem] py-3 md:py-4 border border-black rounded-lg text-lg md:text-xl tracking-wider'
              }
            />
          </div>
        </section>
      </div>
      <Gurantees />
    </div>
  )
}

export default page
