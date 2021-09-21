import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/action";

const Carts = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Total number of added products ({cartItems.length})</h2>
      {cartItems.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item))}>
            Remove From Cart
          </button>
        </li>
      ))}
    </div>
  );
};

export default Carts;
