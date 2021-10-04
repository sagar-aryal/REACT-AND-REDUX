import React, { useState, createContext, useContext } from "react";

const BookContext = createContext();
export const useBook = () => useContext(BookContext);

const BookContextProvider = (props) => {
  const [book, setBook] = useState([
    { id: 1, title: "book1" },
    { id: 2, title: "book2" },
    { id: 3, title: "book3" },
  ]);

  const value = { book };

  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
