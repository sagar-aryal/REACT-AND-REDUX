import React from "react";

import { Link } from "react-router-dom";
import Carts from "../../pages/Carts";

const Nav = () => {
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
          <Link to="/carts">Carts(0)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
