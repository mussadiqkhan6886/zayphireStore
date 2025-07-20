import main from "../Assets/main.jpg"
const Hero = () => {
  return (
    <section className='md:flex-row flex flex-col items-center justify-between bg-amber-50 text-amber-800 overflow-x-hidden'> 
      <div data-aos="fade-right" className=' h-dvh flex flex-col items-start justify-center m-auto md:pl-18'>
        <h2 className='font-bold text-xl'>NEW ARRIVALS ONLY</h2>
        <div className='flex gap-3 mt-'>
          <h2 className='font-semibold md:text-6xl lg:text-7xl text-7xl'>new </h2>
          
        </div>
        <h2 className='font-semibold md:text-6xl lg:text-7xl text-7xl' > collections <br /> for everyone </h2>
        <div className='bg-amber-500 flex p-3 px-7 items-center rounded-3xl mt-5 gap-3'>
          <a href="#newCollection"><button className='text-white cursor-pointer' >Latest Collection </button></a>
        </div>
      </div>
      <div data-aos="fade-left"  className='w-[100%] md:w-[44%]'>
        <img className='w-[100%] md:w-[77%]' src={main} alt="hero Image" />
      </div>
    </section>
  )
}

export default Hero
