import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/action";

const Carts = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>
                  {item.inCart} × {item.price}€ = {item.inCart * item.price}€
                </p>
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Remove From Cart
                </button>
              </li>
            ))}
            <p>
              Total products:
              {cartItems
                .map((item) => item.inCart)
                .reduce((item, inCart) => item + inCart, 0)}
            </p>
            <p>
              Total amount:
              {cartItems
                .map((item) => item.price * item.inCart)
                .reduce((item, price) => item + price, 0)}
            </p>
            <button>Checkout</button>
          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </div>
  );
};

export default Carts;
