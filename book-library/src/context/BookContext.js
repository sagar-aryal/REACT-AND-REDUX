import React, { useState, createContext, useContext } from "react";
const initialState = {
  books: [
    { id: 1, title: "book1" },
    { id: 2, title: "book2" },
    { id: 3, title: "book3" },
  ],
};

const BookContext = createContext(initialState);

const BookContextProvider = (props) => {
  const useBook = useContext(BookContext);
  const value = { updateBooks: useBook.books };

  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
