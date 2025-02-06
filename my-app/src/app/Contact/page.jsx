'use client'
import React, { useState } from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Input from '../components/Input'
import Gurantees from '../components/Gurantees'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm, ValidationError } from '@formspree/react'

function Guide ({ src, title, desc }) {
  return (
    <div className='flex gap-4 px-4 items-start w-full'>
      <img src={src} className='mt-[1rem] size-[1.5em] object-cover' alt='' />

      <div>
        <h1 className='md:text-[2rem] font-medium tracking-wider text-[1.7em]'>
          {title}
        </h1>
        <p
          className='font-light text-sm w-[14em] '
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  )
}

const page = () => {
  const [state, handleSubmit] = useForm('mjkveovj')
  const [toastShown, setToastShown] = useState(false)
  if (state.succeeded && !toastShown) {
    toast.success('Message sent successfully!')
    setToastShown((prev) => !prev)
    document.getElementById('contact').reset()
  }
  return (
    <div>
      <WebsiteBanner title={'Contact'} />
      <div className='cp py-[2rem] flex-between flex-col  md:py-[3rem]'>
        <h1 className='capatilize text-[1.8em] tracking-wide font-semibold md:text-[2.4em]'>
          Get in Touch With US
        </h1>
        <p className='text-[.9em] text-[#9F9F9F] text-center font-medium md:text-[1em]'>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br className='hidden md:block' /> An Email. Our Staff Always
          Be There To Help You Out. Do Not Hesitate!
        </p>
        <main className='cp w-full justify-between md:flex gap-5 mt-[3em]'>
          <section className='md:w-[40%] gap-6 md:cp flex flex-col items-center justify-center'>
            <Guide
              src={'/images/Location.png'}
              title='Address'
              desc='236 5th SE Avenue, New York NY10000, United States'
            />
            <Guide
              src={'/images/Phone.png'}
              title='Phone'
              desc=' Mobile: +(84) 546-6789 <br/>
Hotline: +(84) 456-6789'
            />
            <Guide
              src={'/images/Clonk.png'}
              title='Working Time'
              desc='Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00'
            />
          </section>
          <br className='block md:hidden' />
          <br className='block md:hidden' />
          <form
          onSubmit={handleSubmit}
            id='contact'
            className='md:w-[60%] flex flex-col md:items-center gap-y-6 w-full'
          >
            <Input title='Your Name' placeholder='ABC' />
            <ValidationError
              prefix='Your Name'
              field='your name'
              errors={state.errors}
            />
            <Input title='Email Address' placeholder='Abc@defgmail.com' />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <Input required title='Subject' placeholder='This is an optional' />
            <ValidationError
              prefix='Subject'
              field='subject'
              errors={state.errors}
            />
            <Input title='Message' placeholder="Hey! I'd Like to ask About." />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button type='submit' className='rounded-2xl text-2xl px-3 py-2 bg-blue-400 text-white font-medium uppercase'>
              SEND MESSAGE
            </button>
            <ToastContainer
              position='top-right'
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
        </main>
      </div>
      <Gurantees />
    </div>
  )
}

export default page


