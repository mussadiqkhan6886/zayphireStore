import React, {useEffect} from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import Footer from "./Components/Footer/Footer"
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import perfume_banner from "./Components/Assets/banner_perfume.png"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 700,
          easing: "ease-in",
          delay: 100
        })
      })
  return(
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/men" element={<ShopCategory banner={men_banner}  category={"men"} />}></Route>
        <Route path="/women" element={<ShopCategory banner={women_banner} category={"women"} />}></Route>
        <Route path="/perfume" element={<ShopCategory banner={perfume_banner} category={"perfume"} />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;



