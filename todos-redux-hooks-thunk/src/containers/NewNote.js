import React from "react";
import * as actionTypes from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

const NewNote = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  let i = notes.length;

  const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    id: i++,
    text: text,
    completed: false,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.noteInput.value));
        e.target.noteInput.value = "";
      }}
    >
      <input type="text" placeholder="Enter your notes...." name="noteInput" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default NewNote;
