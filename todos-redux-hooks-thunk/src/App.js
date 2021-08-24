import React from "react";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

function App() {
  return (
    <div className="App">
      <h1>Todos-List with React, Redux, Hook and Trunk</h1>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
