import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/carts">Carts({cartItems.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
