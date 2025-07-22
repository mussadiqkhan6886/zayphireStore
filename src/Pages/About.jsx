import wall from "../Components/Assets/wall.jpg"
import AboutUs from '../Components/AboutUs/AboutUs'

const About = () => {
  return (
    <main style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${wall})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  className='pt-30 text-white pb-10 text-center px-5'>
      <h1 className='text-center font-semibold text-4xl'>About Us</h1>
      <AboutUs />
    </main>
  )
}

export default About
