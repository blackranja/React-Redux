import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { removeItem,increase,decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    
  return (
      <div className="w-full flex justify-between">
       
              <img className="object-cover w-48 h-48" src={img} alt={title} />
           
              <div className="text-[#ffffff] w-full items-center justify-between">
                  <h4 className="font-bold text-gradient px-4">{title}</h4>
                  <h4 className="font-bold text-gradient px-4">${price}</h4>
              <button
                  onClick={() => {
                      dispatch(removeItem(id));
                  }}
                  className="rounded-md m-2 p-2 bg-[#ffccffcc] text-[#ffffff]">
                  remove
              </button>
              </div>
              <div className="text-[#ffffff] w-full items-center justify-between">
              <button onClick={() => {
                  dispatch(increase({ id }));
                  }}
                  className="rounded-md m-2 p-2 bg-[#ffccffcc] text-[#ffffff]">
                      <FaChevronUp/>
                  </button>
                  <p className="">{amount}</p>
              <button
                  onClick={() => {
                      if (amount ===1) {
                          dispatch(removeItem(id));
                      }
                      dispatch(decrease({ id }));
                  }}
                  className="rounded-md m-2 p-2 bg-[#ffccffcc] text-[#ffffff]">
                      <FaChevronDown/>
                  </button>
              </div>
          
    </div>
  )
}

export default CartItem