import { createContext, useState } from "react"
import all_products from "../Components/Assets/all_product"

export const ShopContext = createContext(null)

const setCartDefault = () => {
        let cart = {}
        for(let i = 0; i < all_products.length + 1; i++){
            cart[i] = 0
        }
        return cart;
    }

const ShopContextProvider = ({children}) => {

    const [cartValue, setCartValue] = useState(setCartDefault())

    const addToCart = (id) => {
        setCartValue((prev) => ({...prev, [id]:prev[id]+1}))
    }   
    const removeFromCart = (id) => {
        setCartValue(prev => ({...prev, [id]:prev[id]-1}))
    }

    const totalAmount = () => {
        let total = 0;
        for(const item in cartValue){
            if(cartValue[item]>0){
                let itemInfo = all_products.find((product) => product.id === Number(item))
                total += itemInfo.price * cartValue[item]
            }
        }
        return total;
    }

    const cartTotalCount = () => {
        let total = 0;
        for(const item in cartValue){
            if(cartValue[item]>0){
                total += cartValue[item]
            }
        }
        return total;
    }

    const shopValue = {cartTotalCount, totalAmount, all_products, cartValue, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value={shopValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider