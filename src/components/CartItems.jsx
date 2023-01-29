import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const CartItems = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <div>
                <div>
                    <h2>Your bag is Currently Empty</h2>
                </div>
            </div>
        )
    }
  return (
      <div>
          <div>
              <h2>Your Bag</h2>
          </div>
          <div>
              {cartItems.map((item,index)=>{
                  <CartItem key={index} item={item}/>
              })}
          </div>
    </div>
  )
}

export default CartItems