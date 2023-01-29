import React from 'react';
import CartItems from './components/CartItems';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="min-w-screen h-screen">
      <Navbar />
      <CartItems />
    </div>
  )
}

export default App