import React from "react";

import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector((state) => state);
  // const texts = useSelector((state) => state.texts);

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
      {/* <ul>
        {texts.map((text) => (
          <li key={text.id}>{text.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Notes;
