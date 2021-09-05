import React from "react";
import * as actionTypes from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

import { createNotes } from "../store/reducers/reducer";

const NewNote = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  let i = notes.length;

  const addTodo = async (e) => {
    e.preventDefault();
    const text = e.target.noteInput.value;
    dispatch(createNotes(text));
    e.target.noteInput.value = "";
  };

  return (
    <form onSubmit={addTodo}>
      <input type="text" placeholder=" ✍️ Add new tasks..." name="noteInput" />
      <input type="submit" value="+" />
    </form>
  );
};

export default NewNote;
