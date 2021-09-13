import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductsReducer,
});

export default rootReducer;
