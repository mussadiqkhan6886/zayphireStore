import React from 'react'
import Hero from "../Components/Hero/Hero"
import Popular from '../Components/popular/popular'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewLetter from '../Components/newLetter/NewLetter'

const Shop = () => {
  return (
    <main>
      <Hero />
      <Popular />

      <NewCollection />
      <NewLetter />
    </main>
  )
}

export default Shop
