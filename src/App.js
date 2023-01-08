import './App.css';
import RouteSwitch from './RouteSwitch';
import { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  if(!isLoaded){
    return(
      <div className='loading-screen'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>)
  }
  else{
    return (
      <div className="App">
        <RouteSwitch cart={cart} setCart={setCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      </div>
    );
  }
}

export default App;
