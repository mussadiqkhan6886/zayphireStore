import React from 'react'
import logo from "../Assets/logo.JPG"
import instagram from "../Assets/instagram_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-amber-300 flex flex-col justify-center items-center p-7'>
      <div className='flex gap-3 items-center mb-4'>
        <img className='w-[65px]' src={logo} alt="logo" />
        <h4 className='font-semibold text-2xl'>Zayphire</h4>
      </div>
      <div>
        <ul className='flex gap-5 mb-7'>
            <li><Link to={"/about"}>About</Link></li>
            <li>Products</li>
            <li>Privacy</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='flex gap-5 mb-7'>
        <div className='shadow p-2'>
            <img className='bg-amber-200 rounded p-[3px]' src={instagram} alt="insta" />
        </div>
        <div className='shadow p-2'>
            <img className='bg-amber-200 rounded p-[3px]' src={whatsapp} alt="whatsapp" />
        </div>
      </div>
      <div>
        <p>Copyright &copy; 2025 - All rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
