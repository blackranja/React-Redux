import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItem = ({ id, img, title, price, amount }) => {
    
  return (
      <div>
          <div>
              <img src={img} alt={title} />
              <div>
                  <h4>{title}</h4>
                  <h4 className="">${price}</h4>
                  <button className="">remove</button>
              </div>
              <div>
                  <button className="">
                      <FaChevronUp/>
                  </button>
                  <p className="amount">{amount}</p>
                  <button className="">
                      <FaChevronDown/>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default CartItem