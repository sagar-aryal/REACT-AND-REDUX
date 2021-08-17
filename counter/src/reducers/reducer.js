import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.DECREMENT:
      if (state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    case actionTypes.ADDFIVE:
      return {
        ...state,
        counter: state.counter + 5,
      };
    case actionTypes.DECREASEFIVE:
      if (state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 5,
        };
      }
    case actionTypes.STORE:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter,
        }),
      };
    case actionTypes.DELETE:
      const updatedArray = state.results.filter(
        (items) => items.id !== action.items
      );
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};

const initialState = {
  counter: 0,
  results: [
    {
      id: 1,
      value: 10,
    },
    {
      id: 2,
      value: 130,
    },
    {
      id: 3,
      value: 148,
    },
  ],
};

export default reducer;
