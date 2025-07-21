
import wall from "../Assets/wall.jpg"

const Content = ({heading, content}) => {
  return (
    <main style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${wall})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  className='pt-20 text-white pb-10 text-center px-5'>
      <section>
        <h1 className='font-semibold text-4xl mb-3 text-white'>{heading}</h1>
        <div className="text-white">
          {content}
        </div>
      </section>
    </main>  
  
  )
}

export default Content
