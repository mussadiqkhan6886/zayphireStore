import React from 'react'
import exclusiveImage from "../Assets/exclusive_image.jpeg"
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <section data-aos="fade-up" className='lg:m-20 md:m-20 bg-gradient-to-b from-amber-100 to-white flex flex-col items-center md:flex-row p-7 justify-between'>
        <div className='md:w-[60%] p-8 text-amber-900'>
            <h3 className='font-semibold text-2xl md:text-5xl lg:text-4xl leading-tight'>Elevate <br /> Your Styles With</h3>
            <p className='font-bold lg:text-8xl md:text-5xl text-7xl my-4'>Zayphire</p>
            <Link to={"/men"}><button onClick={() => window.scrollTo(0,0)} className='bg-amber-500 p-3 cursor-pointer px-8 rounded-full mt-3 text-white'>Check Now</button></Link>
        </div>
        <div className='lg:ml-20'>
            <img className='lg:w-[400px] md:w-[300px] w-[400px]' src={exclusiveImage} alt="offer image" />
        </div>
    </section>
  )
}

export default Offers
