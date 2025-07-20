import React from 'react'
import Hero from "../Components/Hero/Hero"
import Popular from '../Components/popular/popular'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewLetter from '../Components/newLetter/NewLetter'
import Offers from "../Components/Offers/Offers"

const Shop = () => {
  return (
    <main className='pt-7'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetter />
    </main>
  )
}

export default Shop
