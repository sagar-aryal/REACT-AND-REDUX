import * as actionTypes from "../actions/actionType";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
