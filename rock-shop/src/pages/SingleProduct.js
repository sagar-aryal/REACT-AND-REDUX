import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  getProductDetails,
  removeProductDetails,
} from "../actions/action";
import { useParams, useHistory } from "react-router";

const SingleProduct = () => {
  const { productId } = useParams();
  const history = useHistory();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(getProductDetails(productId));
    return () => {
      dispatch(removeProductDetails());
    };
  }, [dispatch]);

  return (
    <div className="details" key={product.id}>
      <button onClick={() => history.goBack()}>Go Back </button>
      <img src={`${product.image}`} alt={product.title} />
      <div className="box">
        <h2>{product.title}</h2>
        <span>€{product.price}</span>
      </div>
      <p>{product.description}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
