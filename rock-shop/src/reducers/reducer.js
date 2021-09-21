import * as actionTypes from "../actions/actionType";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export const selectedProductReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_SELECTED_PRODUCT:
      return action.payload;

    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return [];

    default:
      return state;
  }
};

export const cartReducer = (state = [], action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({
          ...action.payload,
          inCart: 1,
        });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.inCart++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return updatedCart;

    case actionTypes.REMOVE_FROM_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.inCart--;

      if (updatedItem.inCart <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return updatedCart;
    default:
      return state;
  }
};
