import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct'
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts'

const Products = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const itemFound = all_products.find((e) => e.id === Number(productId));

  return (
    <div className='lg:px-30 px-3  py-4'>
      <Breadcrum itemFound={itemFound} />
      <DisplayProduct itemFound={itemFound} />
      <RelatedProducts />
    </div>
  )
}

export default Products
