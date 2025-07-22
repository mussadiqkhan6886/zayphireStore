import React, { useContext } from 'react'
import {ShopContext} from "../../Context/ShopContext"
import cross from "../Assets/cart_cross_icon.png"
import { Link } from 'react-router-dom'

const CartItem = () => {
    
    const {totalAmount, all_products, cartValue, removeFromCart} = useContext(ShopContext)

    {if(totalAmount() <= 0){
        return (
            <section className='text-center p-5'>
                <h1 className='text-4xl font-semibold'>No Items In Cart</h1>
            </section>
        )
    }else{
        return(
            <section className='md:p-10 pt-15 lg:px-30'>
    <div className='flex'>
        <h2 className='w-[10%] font-semibold text-[13px] sm:text-[18px] mb-3'>Products</h2>
        <h2 className='w-[30%] font-semibold text-[13px] sm:text-[18px] mb-3 pl-10'>Title</h2>
        <h2 className='w-[15%] font-semibold text-[13px] sm:text-[18px] mb-3'>Price</h2>
        <h2 className='w-[15%] font-semibold text-[13px] sm:text-[18px] mb-3'>Qty</h2>
        <h2 className='w-[15%] font-semibold text-[13px] sm:text-[18px] mb-3'>Total</h2>
        <h2 className='w-[15%] font-semibold text-[13px] sm:text-[18px] mb-3'>Delete</h2>
    </div>
    <hr />
    <div>
        {all_products.map((item) => {
            if(cartValue[item.id]>0){
                return (
                    <div key={item.id} className='flex py-2 items-center border-b border-gray-300'>
                        <div className='w-[10%] mr-3'>
                            <img className='w-[100%] md:w-[55%]' src={item.image} alt="image" />
                        </div>
                        
                        <h3 className='w-[30%] text-[12px] sm:text-[14px] sm:pr-10'>{item.name}</h3>
                        <h3 className='w-[15%] text-[12px] sm:text-[14px] sm:pl-2'>PKR {item.price}</h3>
                        <h3 className='w-[15%] text-[12px] sm:text-[14px] sm:pl-5'>{cartValue[item.id]}</h3>
                        <h3 className='w-[15%] text-[12px] sm:text-[14px] sm:pl-2'>PKR {item.price * cartValue[item.id]}</h3>
                        <div className='w-[15%]'>
                            <i onClick={() => removeFromCart(item.id)} src={cross}  className="fa-solid fa-xmark text-xl ml-3 cursor-pointer"></i>
                        </div>
                    </div>
                )
            }else{
                return null
            }
        })}
    </div>
    <div className='flex flex-col mb-5 gap-10 items-center md:flex-row justify-between mt-10'>   
        <div className='md:w-[40%] w-full px-10 md:px-0'>
            <h3 className='text-2xl font-semibold mb-5'>Cart Totals</h3>
            <div className='w-full text-[14px]'>
                <div className='flex justify-between pb-2 border-b'>
                    <h4>SubTotal</h4>
                    <p>PKR {totalAmount()}</p>
                </div>
                <div className='flex justify-between pb-2 mt-3 border-b '>
                    <h4>Shipping Fee</h4>
                    <p>Free</p>
                </div>
                <div className='flex justify-between mb-2 mt-3'>
                    <h4 className='font-semibold text-[16px]'>Total</h4>
                    <p className='font-bold text-[16px]'>PKR {totalAmount()}</p>
                </div>
            </div>
            <Link to={"/checkout"}><button onClick={() => window.scroll(0,0)} disabled={totalAmount() <= 0 ? true : false} className='bg-red-500 px-6 py-2 disabled:bg-gray-300 text-white mt-5 not-disabled:cursor-pointer'>PROCEED TO CHECKOUT</button></Link>
        </div>
        <div>
            <h5 className='text-gray-400 mb-2'>If you have a promo code, Enter it here</h5>
            <div className='flex flex-col sm:flex-row'>
                <input type="text" className='outline-none py-3 bg-gray-300 text-gray-600 placeholder:text-gray-600 px-5 text-[14px] w-[270px]' autoComplete='off' placeholder='promo code' />
                <button className='bg-black text-white px-6 py-2'>Submit</button>
            </div>
        </div>
    </div>
   
    </section>
        )
    }}

}

export default CartItem
