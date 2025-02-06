import React from 'react'

const Input = ({
  title,
  placeholder,
  inputClass = 'py-[1.2rem] w-[90%] sm:w-[95%] md:w-[20em] lg:w-[25rem]'
}) => {
  return (
    <div className='flex flex-col gap-4'>
      {title && (
        <p className='tracking-wider font-medium text-[.9em] md:text-[1.1em]'>
          {title}
        </p>
      )}
      <input
        name={title}
        spellCheck='false'
        placeholder={placeholder}
        type='text'
        className={`${inputClass} placeholder:text-[#9F9F9F] text-[1em] md:text-[1em]  px-[2rem] outline-none rounded-[1.2em] border-[#9F9F9F] border`}
        autoComplete='off'
      />
    </div>
  )
}

export default Input
