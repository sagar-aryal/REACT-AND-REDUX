import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductReducer,
  cartReducer,
} from "./reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});

export default rootReducer;
