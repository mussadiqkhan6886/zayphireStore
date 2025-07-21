import React from 'react'
import logo from "../Assets/logo.JPG"
import instagram from "../Assets/instagram_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-neutral-100 flex flex-col justify-center items-center  md:p-7'>
      <div className='flex gap-3 items-center mb-4'>
        <img className='w-[65px]' src={logo} alt="logo" />
        <h4 className='font-semibold text-2xl'>Zayphire</h4>
      </div>
      <div className='md:flex grid grid-cols-2 mb-10 justify-between gap-10 w-full px-20 my-4'>
        <div>
          <h2 className='md:text-2xl text-xl mb-3 font-semibold'>Need Help?</h2>
          <p className='text-[14px] md:text-[16px] mb-3'><i className="fa-solid fa-phone mr-2"></i>+923265753305</p>
          <p className='text-[14px] md:text-[16px] whitespace-nowrap'><i className="fa-solid fa-envelope mr-2"></i>zayphire@gmail.com</p>
        </div>
        <div>
          <h2 className='md:text-2xl text-xl mb-3 font-semibold'>Customer Service</h2>
          <ul className='flex flex-col gap-4'>
            <li onClick={() => window.scrollTo(0,0)} className='hover:underline text-[14px] whitespace-nowrap md:text-[16px]'><Link to={"/contact"}>Contact Us</Link></li>
            <li onClick={() => window.scrollTo(0,0)} className='hover:underline text-[14px] whitespace-nowrap md:text-[16px]'><Link to={"/delivery"}>Delivery & Orders</Link></li>
            <li onClick={() => window.scrollTo(0,0)} className='hover:underline text-[14px] whitespace-nowrap md:text-[16px]'><Link to={"/return"}>Returns & Exchanges</Link></li>
            <li onClick={() => window.scrollTo(0,0)} className='hover:underline text-[14px] whitespace-nowrap md:text-[16px]'><Link to={"/terms"}>Terms & Conditions</Link></li>
            <li onClick={() => window.scrollTo(0,0)} className='hover:underline text-[14px] whitespace-nowrap md:text-[16px]'><Link to={"/privacy"}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='md:text-2xl text-xl mb-3 font-semibold'>Company</h2>
          <ul>
            <li onClick={() => window.scrollTo(0,0)} className='hover:underline text-[14px] whitespace-nowrap md:text-[16px]'><Link to={"/about"}>About Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='md:text-2xl text-xl mb-3 font-semibold'>Follow Us</h2>
          <div className='flex gap-3'>
            <a href="https://www.instagram.com/zayphire_/" target='_blank'><i className="fa-brands text-3xl fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=923265753305&text&type=phone_number&app_absent=0" target='_blank'><i className="fa-brands text-3xl fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61576012477951" target='_blank'><i className='fa-brands text-3xl fa-facebook'></i></a>
          </div>
        </div>
      </div>
      <div>
        <p>Copyright &copy; 2025 - All rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
