import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../actions/action";

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
          <Link to={`/product/${product.id}`}>
            <li key={product.id}>
              <img src={`${product.image}`} alt={product.title} />
              <h3>{product.title}</h3>
              <h5>€{product.price}</h5>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductLists;
