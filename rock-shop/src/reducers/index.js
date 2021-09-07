import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

export const allReducers = combineReducers(productsReducer);
