import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ItemPage = lazy(() => import("./pages/ItemPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

const RouteSwitch = (props) => {

  return (
    <BrowserRouter basename="/shopping-cart">
      <Suspense fallback={<LoadingScreen></LoadingScreen>}>
        <ScrollToTop />
        <Header cart={props.cart} setCart={props.setCart} 
                isCartOpen={props.isCartOpen} setIsCartOpen={props.setIsCartOpen}>      
        </Header>
        {props.isCartOpen &&
          <Cart cart={props.cart} setCart={props.setCart} isCartOpen={props.isCartOpen} setIsCartOpen={props.setIsCartOpen}></Cart>
        }
        <Routes>
          <Route path="/" element={<HomePage isCartOpen={props.isCartOpen} 
                                            setIsCartOpen={props.setIsCartOpen}
                                            />} 
          />
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/shop/:id" element={<ItemPage cart={props.cart}
                                                    setCart={props.setCart} 
                                                    />}/>
          <Route path="/checkout" element={<CheckoutPage cart={props.cart} 
                                                        setCart={props.setCart} 
                                                        />} />
        </Routes>
        <Footer></Footer>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteSwitch; 