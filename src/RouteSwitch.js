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
    <BrowserRouter>
      <ScrollToTop />
      <Header isCartOpen={props.isCartOpen} setIsCartOpen={props.setIsCartOpen}></Header>
      {props.isCartOpen &&
        <Cart></Cart>
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/shop/:id" element={<ItemPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default RouteSwitch; 