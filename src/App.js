import './App.css';
import RouteSwitch from './RouteSwitch';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className="App">
        <RouteSwitch cart={cart} setCart={setCart} 
                     isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}
                     />
      </div>
    );
  }

export default App;
