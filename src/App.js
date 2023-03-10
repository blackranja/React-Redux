import React, { useEffect } from 'react';

import CartItems from './components/CartItems';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';
const App = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <div className="min-w-screen h-screen">
      <Navbar />
      <CartItems />
      {isOpen && <Modal />}
    </div>
  )
}

export default App