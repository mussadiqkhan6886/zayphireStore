import data from "../Assets/data"
import Items from '../Items/Items'
import Heading from '../heading/Heading'

const popular = () => {
  return (
    <section className=' pt-5 justify-center flex flex-col items-center'>
     <Heading title={"POPULAR IN MEN"} />
      <div className='md:grid-cols-3 lg:grid-cols-4 md:justify-center grid grid-cols-1 sm:grid-cols-2 p-5'>
        {data.map((item, i) => (
            <Items key={i} id={item.id} name={item.name} img={item.image} price={item.price}  />
        ))}
      </div>
    </section>
  )
}

export default popular
