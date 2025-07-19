import React from 'react'

const Heading = ({title}) => {
  return (
    <>
      <h3 data-aos="fade-up" className='text-4xl font-semibold mb-9 relative after:absolute after:content-[""] after:block after:w-40 after:h-1.5 after:rounded-full  after:bg-black after:mt-2 after:left-1/2 after:-translate-x-1/2'>{title}</h3> 
    </>
  )
}

export default Heading
