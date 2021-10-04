import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart);
  let totalItems = cartItems
    .map((item) => item.inCart)
    .reduce((item, inCart) => item + inCart, 0);

  return (
    <div className="navigation-bar">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/products" className="navigation-link">
            Products
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/carts" className="navigation-link">
            Carts ({totalItems})
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
