import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {products.map((product) => {
          <li key={product.id}>
            {product.name} {product.price}
            <button>Remove from Cart</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Products;
