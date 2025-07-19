import { Link } from 'react-router-dom'

const Items = ({id, name, img, price}) => {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className='p-3 flex flex-col items-center hover:scale-105 cursor-pointer transition-all'>
      <Link to={`/product/${id}`}> <img onClick={window.scrollTo(0,0)} src={img} className='w-[250px] mb-2' alt="image item" /></Link>
      <p className='text-center px-7'>{name}</p>
      <div className='flex gap-5 mt-1'>
         <p className='font-semibold'>${price}</p>
      </div>
    </div>
  )
}

export default Items
