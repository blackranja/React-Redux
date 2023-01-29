import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItem = ({ id, img, title, price, amount }) => {
    
  return (
      <div className="w-screen flex justity-between">
       
              <img className="object-cover w-48 h-48" src={img} alt={title} />
           
              <div className="text-[#ffffff] flex w-full h-full">
                  <h4 className="font-bold text-gradient">{title}</h4>
                  <h4 className="font-bold text-gradient">${price}</h4>
                  <button className="rounded-md p-3 m-3 bg-[#ffccffcc] text-[#ffffff]">remove</button>
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
  )
}

export default CartItem