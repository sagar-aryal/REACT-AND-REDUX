import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getProducts } from "../actions/action";

const ProductLists = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="productList">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={`${product.image}`} alt={product.title} />
          </Link>
          <div className="content">
            <h3>{product.title.substring(0, 20) + `...`} </h3>
            <span>€{product.price}</span>
            <button>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </button>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductLists;
