import * as actionTypes from "../actions";
import noteServices from "../../services/notes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;

    case actionTypes.ADD_TODO:
      return [...state, action.data];

    case actionTypes.EDIT_TODO:
      return {};

    case actionTypes.DELETE_TODO:
      const updateNotes = state.filter((note) => note.id !== action.id);
      return updateNotes;

    case actionTypes.TOGGLE_TODO:
      // const noteToChange = state.find((n) => n.id === action.id);
      // const changeNote = {
      //   ...noteToChange,
      //   completed: !noteToChange.completed,
      // };
      // return state.map((note) => (note.id !== action.id ? note : changeNote));

      state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            completed: !note.completed,
          };
        }
        return note;
      });

    default:
      return state;
  }
};

export const initialNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll();
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes,
    });
  };
};

export const createNotes = (text) => {
  return async (dispatch) => {
    const newNote = await noteServices.createNew(text);
    dispatch({
      type: actionTypes.ADD_TODO,
      data: newNote,
    });
  };
};

export default reducer;
