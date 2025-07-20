import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import main from "../Assets/main.jpg"
import "swiper/css";
import "swiper/css/navigation";
import main2 from "../Assets/main2.jpeg"
import logo from "../Assets/logo.JPG"
import "./SliderNav.css"
const MySlider = () => {
    
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg"
      >
        <SwiperSlide>
            <div className="md:flex-row flex flex-col items-center justify-between bg-amber-50 text-amber-800 overflow-x-hidden">
            <div data-aos="fade-right" className=' md:h-dvh flex flex-col items-start justify-center m-auto md:pl-18'>
                    <h2 className='font-bold text-xl'>NEW ARRIVALS ONLY</h2>
                    <div className='flex gap-3 mt-1'>
                    <h2 className='font-semibold md:text-6xl lg:text-7xl text-5xl'>new </h2>
                    
                    </div>
                    <h2 className='font-semibold md:text-6xl lg:text-7xl text-5xl' > collections <br /> for everyone </h2>
                    <div className='bg-amber-500 flex p-3 px-7 items-center rounded-3xl mt-5 gap-3'>
                        <a href="#newCollection"><button className='text-white cursor-pointer' >Latest Collection </button></a>
                    </div>
              </div>
                <div data-aos="fade-left"  className='w-[50%] mt-5 md:mt-0 md:w-[44%]'>
                    <img className='w-[100%] md:w-[77%]' src={main} alt="hero Image" />
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:flex-row flex flex-col items-center justify-between bg-amber-50 text-amber-800 overflow-x-hidden">
            <div data-aos="fade-right" className='md:h-dvh flex flex-col items-start justify-center m-auto md:pl-18'>
                    <h2 className='font-bold lg:text-7xl text-5xl'>Zayphire</h2>
                    <div className='flex gap-3 mt-5'>
                    <h2 style={{fontFamily: "Great Vibes"}} className='lg:text-2xl text-xl tracking-wide'>Where Elegance Begins With Every Thread </h2>
                    
                    </div>
                    <h2 style={{fontFamily: "Great Vibes"}} className='lg:text-2xl text-xl tracking-wide' > Discover premium  <br /> unstitched  fabrics crafted for timeless beauty.</h2>
                    <div className='lg:w-[200px] md:w-[150px] hidden md:flex p-3 px-7 items-center rounded-3xl mt-5 gap-3'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div data-aos="fade-left"  className='w-[50%] mt-5 md:mt-0 md:w-[44%]'>
                    <img className='w-[100%] md:w-[77%]' src={main2} alt="hero Image" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySlider;
