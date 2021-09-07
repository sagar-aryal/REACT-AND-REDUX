import { getAll } from "../services/productsList";

export const initialProducts = () => {
  return async (dispatch) => {
    const products = await getAll();
    dispatch({
      type: INIT_PRODUCTS,
      payload: products,
    });
  };
};

export const removeProducts = () => {
  return async (dispatch) => {
    const updateProducts = await getAll();
    dispatch({
      type: REMOVE_PRODUCTS,
      payload: updateProducts,
    });
  };
};
