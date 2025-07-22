import Items from '../Items/Items'
import data from "../Assets/data"
import Heading from "../heading/Heading"

const RelatedProducts = () => {
  return (
    <section className='text-center mt-10'>
        <Heading title={"Related Products"} />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {data.map((item, i) => (
                <Items key={i} id={item.id} name={item.name} img={item.image} price={item.price} />
            ))}
        </div>
    </section>
  )
}

export default RelatedProducts
