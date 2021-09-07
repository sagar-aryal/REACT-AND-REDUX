import * as actionTypes from "../actions/index";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;
    case actionTypes.REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export default productsReducer;
