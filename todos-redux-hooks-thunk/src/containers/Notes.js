import React from "react";

import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleTodo = (id) => ({ type: actionTypes.TOGGLE_TODO, id: id });
  const editTodo = (id) => ({ type: actionTypes.EDIT_TODO, id: id });
  const deleteTodo = (id) => ({ type: actionTypes.DELETE_TODO, id: id });

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike todo" : "todo"}
          >
            {note.text}
            <button onClick={() => dispatch(editTodo(note.id))}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(note.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
