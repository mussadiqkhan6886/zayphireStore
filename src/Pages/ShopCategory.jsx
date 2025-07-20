import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import banner from "../Components/Assets/banner_men.png"
import Items from '../Components/Items/Items'

const ShopCategory = () => {

  const {all_products} = useContext(ShopContext)

  return (
    <main className='lg:px-20 md:py-9 text-center '> 
      <div data-aos="fade-right" className='pt-10 h-[570px] flex items-center justify-center'>
        <img src={banner} alt="banner" className='h-full w-[90%]' />
      </div>
      <div className='flex justify-between my-5 px-4'>
        <p>
          <span className='font-semibold'>Showing all products </span>
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {all_products.map((item, i) => {
            return <Items key={i} id={item.id} name={item.name} img={item.image}  price={item.price}  />
        })}
      </div>
    </main>
  )
}

export default ShopCategory
