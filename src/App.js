import logo from './logo.svg';
import './App.css';
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="App">
      <RouteSwitch isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    </div>
  );
}

export default App;
