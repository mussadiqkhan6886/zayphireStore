import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items'

const ShopCategory = ({banner, category}) => {

  const {all_products} = useContext(ShopContext)

  return (
    <div className='lg:px-20 md:py-9 text-center'> 
      <img src={banner} alt="banner" />
      <div className='flex justify-between my-5 px-4'>
        <p>
          <span className='font-semibold'>Showing all products </span>
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {all_products.map((item, i) => {
          if(item.category == category){
            return <Items key={i} id={item.id} name={item.name} img={item.image}  price={item.price}  />
          }else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
