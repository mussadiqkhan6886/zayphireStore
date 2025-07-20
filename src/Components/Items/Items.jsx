import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Items = ({id, name, img, price}) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <>
    <div data-aos="fade-up" data-aos-delay="100" className='p-3 flex flex-col items-center'>
      <Link to={`/product/${id}`}> <img onClick={window.scrollTo(0,0)} src={img} className='w-[250px] mb-2 hover:scale-105 cursor-pointer transition-all' alt="image item" /></Link>
      <p className='text-center px-7'>{name}</p>
      <div className='flex gap-5 mt-1'>
         <p className='font-semibold'>PKR {price}</p>
      </div>
     <button onClick={() => addToCart(id)} className='cursor-pointer text-black border-black border px-7 py-3 text-[14px]'>ADD TO CART</button>
    </div>
     </>
  )
}

export default Items
