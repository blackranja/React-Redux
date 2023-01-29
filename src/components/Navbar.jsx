import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../logo.svg";
import NavbarItems from './NavbarItems';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justigy-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initail">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItems key={item + index} title={title} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-ponter hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <GiHamburgerMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
        )}
        {toggleMenu && (
          <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vm] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
              
            </li>
            {
              ["Market", "Economy", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavbarItems key={item + index} title={item} classProps="my-2 text-lg"/>
              ))
            }

          </ul>
        )}
      </div>
    </nav>
   
  )
}

export default Navbar