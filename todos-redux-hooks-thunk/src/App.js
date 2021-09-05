import React, { useEffect } from "react";
import "./App.css";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

import { initialNotes } from "./store/reducers/reducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todos-List 🤞 </h1>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
