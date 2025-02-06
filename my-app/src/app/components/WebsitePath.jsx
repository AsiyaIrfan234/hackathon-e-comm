import React from 'react'

const WebsitePath = ({path}) => {
  return (
    <div className='text-black py-8 tracking-[.3em] md:tracking-[.5em] font-medium text-xl'>
        <span className='text-[#9F9F9F] tracking-wider'>Home</span> &gt; <span className='text-[#9F9F9F] tracking-wider '>Shop</span> &gt; | <span className='text-black tracking-wider'>{path ? path : 'Asgaard Sofa'}</span>
    </div>
  )
}

export default WebsitePath