import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const CartItems = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <div className="flex w-screen h-full gradient-bg-welcome">
                <div className="w-screen h-full flex">
                    <h1 className="font-bold w-full text-gradient pt-8 text-4xl items-center text-center">Your bag is Currently Empty</h1>
                </div>
            </div>
        )
    }
  return (
      <div className="flex w-screen h-full gradient-bg-welcome">
          <div className="w-screen h-full flex">
              <h1 className="font-bold w-full text-gradient pt-8 text-4xl items-center text-center">Your Bag</h1>
          </div>
          <div className="w-screen flex">
              {cartItems.map((item) => {
                  return (
                      <CartItem key={item.id} {...item} />
                  );
              })}
          </div>
          <div className="text-[#ffffff] w-full items-center justify-between">
              <hr />
              <h4 className="font-bold text-gradient px-4">
                  total<span>${total}</span>
              </h4>
          </div>
          <button className="rounded-md m-2 p-2 bg-[#ffccffcc] text-[#ffffff]">Clear Cart</button>
    </div>
  )
}

export default CartItems;