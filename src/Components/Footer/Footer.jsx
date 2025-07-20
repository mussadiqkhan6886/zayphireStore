import React from 'react'
import logo from "../Assets/logo.JPG"
import instagram from "../Assets/instagram_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-neutral-100 flex flex-col justify-center items-center p-7'>
      <div className='flex gap-3 items-center mb-4'>
        <img className='w-[65px]' src={logo} alt="logo" />
        <h4 className='font-semibold text-2xl'>Zayphire</h4>
      </div>
      <div className='flex justify-between w-full px-20 my-4'>
        <div>
          <h2 className='text-2xl mb-3 font-semibold'>Need Help?</h2>
          <p>+923265753305</p>
          <p></p>
        </div>
        <div>
          <h2 className='text-2xl mb-3 font-semibold'>Customer Service</h2>
          <ul className='flex flex-col gap-4'>
            <li className='hover:underline'><Link to={"/contact"}>Contact Us</Link></li>
            <li className='hover:underline'><Link to={"/delivery"}>Delivery & Orders</Link></li>
            <li className='hover:underline'><Link to={"/return"}>Returns & Exchanges</Link></li>
            <li className='hover:underline'><Link to={"/terms"}>Terms & Conditions</Link></li>
            <li className='hover:underline'><Link to={"/privacy"}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl mb-3 font-semibold'>Company</h2>
          <ul>
            <li className='hover:underline'><Link to={"/about"}>About Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl mb-3 font-semibold'>Follow Us</h2>
          <div className='flex gap-3'>
            <img src={instagram} alt="insta" />
            <img src={whatsapp} alt="insta" />
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
