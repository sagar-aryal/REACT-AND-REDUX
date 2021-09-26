import * as actionTypes from "./actionType";
import { getAll, getSelectedProduct } from "../services/products";

export const getProducts = () => {
  return async (dispatch) => {
    const products = await getAll();

    dispatch({
      type: actionTypes.GET_PRODUCTS,
      payload: products,
    });
  };
};

export const getProductDetails = (productId) => {
  return async (dispatch) => {
    const product = await getSelectedProduct(productId);

    dispatch({
      type: actionTypes.GET_SELECTED_PRODUCT,
      payload: product,
    });
  };
};

export const removeProductDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_SELECTED_PRODUCT,
    });
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeFromCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: product,
    });
  };
};
