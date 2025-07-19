import React from 'react'
import arrow from "../Assets/breadcrum_arrow.png"

const Breadcrum = ({itemFound}) => {
  return (
    <div>
        <div className='flex items-center gap-1 text-[14px]'>
            HOME <img className='h-[15px]' src={arrow} alt="arrow" /> SHOP <img className='h-[15px]' src={arrow} alt="arrow" /> {itemFound.category} <img className='h-[15px]' src={arrow} alt="arrow" /> {itemFound.name} 
        </div>
    </div>
  )
}

export default Breadcrum
