import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Cart from "./components/Cart";
import ItemPage from "./pages/ItemPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <ScrollToTop />
      <Header cart={props.cart} setCart={props.setCart} 
              isCartOpen={props.isCartOpen} setIsCartOpen={props.setIsCartOpen}>      
      </Header>
      {props.isCartOpen &&
        <Cart cart={props.cart} setCart={props.setCart} isCartOpen={props.isCartOpen} setIsCartOpen={props.setIsCartOpen}></Cart>
      }
      <Routes>
        <Route path="/" element={<HomePage isCartOpen={props.isCartOpen} setIsCartOpen={props.setIsCartOpen}/>} />
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/shop/:id" element={<ItemPage cart={props.cart} setCart={props.setCart} />}/>
        <Route path="/checkout" element={<CheckoutPage cart={props.cart} setCart={props.setCart} />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default RouteSwitch; 