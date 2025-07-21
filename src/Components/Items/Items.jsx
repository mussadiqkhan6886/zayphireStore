import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Items = ({id, name, img, price}) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <>
    <div data-aos="fade-up" data-aos-delay="100" className='p-3 flex flex-col items-center relative h-[420px] mb-2'>
      <div className='h-[274px] overflow-hidden p-2 shadow-gray-400 mb-3 shadow'>
        <Link to={`/product/${id}`}> 
          <img onClick={() => window.scrollTo(0,0)} src={img} className='mb-2 hover:scale-105 cursor-pointer transition-all w-[100%]' alt="image item" />
        </Link>
      </div>
      <p className='text-center px-7 text-[15px] whitespace-nowrap'>{name}</p>
      <div className='flex gap-5 mt-1'>
         <p className='font-semibold'>PKR {price}</p>
      </div>
     <button onClick={() => addToCart(id)} className='hover:bg-gray-300 mt-2 cursor-pointer text-black border-black border px-7 py-3 text-[14px] absolute bottom-0'>ADD TO CART</button>
    </div>
     </>
  )
}

export default Items
