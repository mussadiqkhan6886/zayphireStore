import React from 'react'
import exclusiveImage from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <section data-aos="fade-up" className='lg:m-30 md:m-20 bg-gradient-to-b from-pink-200 to-white flex flex-col items-center md:flex-row p-7 justify-between'>
        <div className='md:w-[60%] p-8'>
            <h3 className='font-semibold text-4xl md:text-5xl lg:text-7xl leading-tight'>Exclusive <br /> Offers For You</h3>
            <p className='font-semibold mt-1'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='bg-red-500 p-3 px-8 rounded-full mt-3 text-white'>Check Now</button>
        </div>
        <div>
            <img className='lg:w-[70%]' src={exclusiveImage} alt="offer image" />
        </div>
    </section>
  )
}

export default Offers
