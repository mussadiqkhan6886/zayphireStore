import hand_icon from "../Assets/hand_icon.png"

const Hero = () => {
  return (
    <section className='md:flex-row flex flex-col items-center justify-between bg-pink-100 overflow-x-hidden'> 
      <div data-aos="fade-right" className=' h-dvh flex flex-col items-start justify-center m-auto md:pl-18'>
        <h2 className='font-bold text-xl'>NEW ARRIVALS ONLY</h2>
        <div className='flex gap-3 mt-4'>
          <h2 className='font-semibold md:text-6xl lg:text-7xl text-7xl'>new </h2>
          <img className='w-[70px]' src={hand_icon} alt="hand icon" /> 
        </div>
        <h2 className='font-semibold md:text-6xl lg:text-7xl text-7xl' > collections <br /> for everyone </h2>
        <div className='bg-red-500 flex p-3 px-7 items-center rounded-3xl mt-5 gap-3'>
          <button className='text-white' >Latest Collection </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
