import React, { useContext, useEffect, useState } from 'react'
import cart_icon from "../Assets/cart_icon.png"
import logo from "../Assets/logo.JPG"
import {Link, useLocation} from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext'

const NavBar = () => {
    const [catogery, setCatogery] = useState("shop")
    const location = useLocation()
    
    const {cartTotalCount} = useContext(ShopContext)

    useEffect(() => {
        const currentPath = location.pathname.split("/")[1]
        if(currentPath == "men" || currentPath == "women" || currentPath == "perfume"  || currentPath == "cart" || currentPath == "about"){
            setCatogery(currentPath)
        }else{
            setCatogery("shop")
        }
    }, [location.pathname])
  return (
    <>
    <header className='flex shadow justify-between px-5 md:px-10 py-2 items-center fixed w-full z-100 bg-amber-100 opacity-80 '>
        <div className='flex items-center'>
            <img className='w-[44px] mr-5 h-[44px]' src={logo} alt="logo" />
            <h1 className='font-bold text-2xl'>Zayphire</h1>
        </div>
        <div className='w-[40%] md:block hidden'>
            <ul className='flex w-full justify-between text-gray-900 items-center'>
                <li onClick={() => window.scrollTo(0,0)}  className={catogery == "shop" ? "border-b-2 py-1 border-amber-600 text-[17px] font-semibold" : ""}> <Link to="/">Shop</Link> </li>
                <li onClick={() => window.scrollTo(0,0)} className={catogery == "men" ? "border-b-2 py-1 border-amber-600 text-[17px] font-semibold" : ""}> <Link to="/men">Men</Link> </li>
                <li onClick={() => window.scrollTo(0,0)} className={catogery == "women" ? "border-b-2 py-1 border-amber-600 text-[17px] font-semibold" : ""}> <Link to="/women">Women</Link></li>
                <li onClick={() => window.scrollTo(0,0)} className={catogery == "perfume" ? "border-b-2 py-1 border-amber-600 text-[17px] font-semibold" : ""}> <Link to='perfume'>Perfume</Link></li>
            </ul>
        </div>
        <div className='flex relative gap-6'>
            <Link to={"/cart"}>
                <i  onClick={() => window.scrollTo(0,0)}  className="fa-solid fa-cart-shopping text-[26px]"></i>
            </Link> 
            <p className='bg-red-600 text-white absolute rounded-full w-[18px] text-[12px] text-center -right-2 -top-1'>{cartTotalCount()}</p>
        </div>
    </header>
    <nav className='md:hidden fixed w-full z-100 top-14 bg-amber-100 shadow px-5'>
        <div className='p-2 px-5'>
            <ul className='flex w-full justify-between text-gray-700 items-center '>
                <li onClick={() => window.scrollTo(0,0)}  className={catogery == "shop" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/">Shop</Link> </li>
                <li onClick={() => window.scrollTo(0,0)} className={catogery == "men" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/men">Men</Link> </li>
                <li onClick={() => window.scrollTo(0,0)} className={catogery == "women" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to="/women">Women</Link></li>
                <li onClick={() => window.scrollTo(0,0)} className={catogery == "perfume" ? "border-b-2 py-1 border-red-500 text-[17px]" : ""}> <Link to='perfume'>Perfume</Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar
