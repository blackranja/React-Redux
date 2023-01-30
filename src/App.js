import React, { useEffect } from 'react';

import CartItems from './components/CartItems';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="min-w-screen h-screen">
      <Navbar />
      <CartItems />
    </div>
  )
}

export default App