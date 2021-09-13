import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, addProducts } from "../actions/action";

const ProductLists = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <h5>{product.price}</h5>
            <button onClick={() => dispatch(addProducts(product.id))}>
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLists;
