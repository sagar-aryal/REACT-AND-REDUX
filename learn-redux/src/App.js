import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./action/action";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
