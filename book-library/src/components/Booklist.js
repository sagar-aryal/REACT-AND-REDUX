import React from "react";

import useBook from "../context/BookContext";

const Booklist = () => {
  const { book } = useBook();
  return (
    <div className="book-list">
      <ul>
        {book.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
