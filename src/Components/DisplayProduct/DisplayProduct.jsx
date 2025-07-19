import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const DisplayProduct = ({itemFound}) => {

  const {addToCart} = useContext(ShopContext)

  return (
    <section className='flex items-center md:flex-row flex-col mt-7 gap-3'>
      <div className='w-[200px] hidden  lg:flex flex-col items-center'>
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
        <img className='w-[100px] mb-2' src={itemFound.image} alt="image" />
      </div>
      <div className='md:w-[810px]'>
        <img className='w-[430px]' src={itemFound.image} alt="main image" />
      </div>
      <div className='px-4 ml-4 flex flex-col gap-5 justify-between'>
        <div>
          <h1 className='text-3xl font-semibold'>{itemFound.name}</h1>
        </div>
        <div className='flex gap-4 text-xl'>
            <h3 className='line-through text-gray-500'>${itemFound.old_price}</h3>
            <h3 className='text-red-600 font-semibold'>${itemFound.new_price}</h3>
        </div>
        <p>A lightweight, usually knitted, pullover shirt, close fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment</p>
        <div>
          <button onClick={() => addToCart(itemFound.id)} className='cursor-pointer bg-red-600 text-white px-7 py-3 text-[14px]'>ADD TO CART</button>
        </div>

      </div>
    </section>
  )
}

export default DisplayProduct
