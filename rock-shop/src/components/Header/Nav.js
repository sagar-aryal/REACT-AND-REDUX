import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart);
  let totalItems = cartItems
    .map((item) => item.inCart)
    .reduce((item, inCart) => item + inCart, 0);

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
          <Link to="/carts">Carts ({totalItems})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
