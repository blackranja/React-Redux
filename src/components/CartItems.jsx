import React from 'react';
import CartItem from './CartItem';
import { useDispatch,useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

const CartItems = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <div className="flex w-full h-full gradient-bg-welcome">
                <div className="w-full h-full flex">
                    <h1 className="font-bold w-full text-gradient pt-8 text-4xl items-center text-center">Your bag is Currently Empty</h1>
                </div>
            </div>
        )
    }
  return (
      <div className="flex w-full h-full gradient-bg-welcome justify-between">
          
              <h1 className="font-bold flex text-gradient pt-8 text-4xl items-center text-center">Your Bag</h1>
         
          <div className="w-full">
              {cartItems.map((item) => {
                  return (
                      <CartItem key={item.id} {...item} />
                  );
              })}
          </div>
          <div className="text-[#ffffff]">
              <hr />
              <h4 className="font-bold text-gradient px-4">
                  total<span className="pl-2">${total.toFixed(2)}</span>
              </h4>
              <button
                  onClick={()=>dispatch(clearCart())}
                  className="rounded-md m-2 p-2 bg-[#ffccffcc] text-[#ffffff]">Clear Cart</button>
          </div>
          
    </div>
  )
}

export default CartItems;