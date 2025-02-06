import React from 'react'

const Underline = ({title}) => {
  return (
    <div className='text-2xl font-medium underline !underline-offset-[.5em] '>
      {title}
    </div>
  )
}

export default Underline