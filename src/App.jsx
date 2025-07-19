import React, {useEffect} from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import Footer from "./Components/Footer/Footer"
import Women from "./Pages/Women";
import Perfume from "./Pages/Perfume";
import AOS from "aos"
import "aos/dist/aos.css"
import About from "./Pages/About";

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
        <Route path="/men" element={<ShopCategory  />}></Route>
        <Route path="/women" element={<Women  />}></Route>
        <Route path="/perfume" element={<Perfume  />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;



