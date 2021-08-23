import * as actionTypes from "../actions/actions";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUTNOTES:
      return {
        ...state,
        inputNote: action.payload,
      };
    case actionTypes.ADD:
      return {
        ...state,
        inputNote: "",
        notes: [...state.notes, { id: new Date(), task: state.inputNote }],
      };

    case actionTypes.DELETE:
      console.log("clicked", action.payload);
      return {
        ...state,
        notes: state.notes.filter((list) => list.id !== action.payload),
      };
    case actionTypes.EDIT:
      return {
        ...state,
        notes: state.notes.map((list) =>
          list.id === action.payload ? action.payload : list
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  inputNote: "",
  notes: [
    { id: 1, task: "Doctor Appoinment" },
    { id: 2, task: "School Meeting" },
    { id: 3, task: "Flight to Paris" },
  ],
};

export default reducers;
