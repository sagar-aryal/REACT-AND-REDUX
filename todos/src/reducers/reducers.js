import * as actionTypes from "../actions/actions";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        notes: [...state.notes, { id: new Date(), value: state.notes }],
      };
  }
  return state;
};

const initialState = {
  notes: [
    { id: 1, value: "Doctor Appoinment" },
    { id: 2, value: "School Meeting" },
    { id: 3, value: "Flight to Paris" },
  ],
};

export default reducers;
