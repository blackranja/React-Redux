import React from "react";
const NavbarItems = ({ title, classProps }) => (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
);
export default NavbarItems;