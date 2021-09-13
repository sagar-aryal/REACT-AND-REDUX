import * as actionTypes from "./actionType";
import { getAll } from "../services/products";

export const getProducts = () => {
  return async (dispatch) => {
    const products = await getAll();

    dispatch({
      type: actionTypes.GET_PRODUCTS,
      payload: products,
    });
  };
};

export const addProducts = (selectedProduct) => {
  return {
    type: actionTypes.ADD_PRODUCTS,
    payload: selectedProduct,
  };
};

export const removeProducts = () => {
  return {
    type: actionTypes.REMOVE_PRODUCTS,
  };
};
