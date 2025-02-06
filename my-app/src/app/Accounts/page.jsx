import React from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Input from '../components/Input'
import Button from '../components/Button'
import Gurantees from '../components/Gurantees'

const Account = () => {
    return (
        <div>
            <WebsiteBanner title={'My Account'} />
            <div className='md:flex cp py-[3rem] w-full  gap-6 justify-center'>
                <section className='md:w-[45%] w-full flex  flex-col gap-[1.6rem]'>
                      <h1 className='text-[2.3em] tracking-wider font-semibold md:text-[3em]'>Log In</h1>
                      <Input title={'Username or email address'}  />
                      <Input title={'Password'}  />
                      <div className='flex items-center text-[.9em] md:text-[1.1em] tracking-wider font-medium gap-4'>
                        <input className='size-6 md:size-8' type="checkbox" /> Remember me
                      </div>
                      <div className='flex items-center gap-6'>
                        <Button title={'Login'} btnClass={'border border-black text-lg font-medium px-[1rem] rounded-lg md:px-[3rem] tracking-wider py-2 md:py-3'}/>
                        <span className='tracking-wide text-[#9F9F9F] text-[.94em] md:text-[1.1em] '>Lost your Password ?</span>
                      </div>
                </section>
                <br className='block md:hidden'/>
                <br className='block md:hidden'/>
                <section className='md:w-[45%] w-full flex flex-col gap-[1.6rem]'>
                <h1 className='text-[2.3em] tracking-wider font-semibold md:text-[3em]'>Register</h1>
                <Input title={'Email address'} />
                <p className='text-[.95em] tracking-wide  md:text-[1.1em]'> 
                A link to set a new password will be sent to your email address.
                <br />
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy Policy</b>.
                </p>
                <Button title={'Register'} btnClass={'px-[2.3em] w-max text-[1em] border-black border md:text-[1.2em]  md:px-[3em] py-2 rounded-lg md:py-[.6em]'} />
                </section>
            </div>
            <Gurantees />
        </div>
    )
}

export default Account