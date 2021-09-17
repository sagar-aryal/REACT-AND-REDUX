import * as actionTypes from "../actions/actionType";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_SELECTED_PRODUCT:
      return action.payload;
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const addProductReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
