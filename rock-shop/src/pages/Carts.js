import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, removeProducts } from "../actions/action";

const Carts = () => {
  const product = useSelector((state) => state.selectedProductsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>{product.name}</h3>
      <h5>{product.price}</h5>
      <button onClick={() => dispatch(removeProducts(product.id))}>
        Remove
      </button>
    </div>
  );
};

export default Carts;
