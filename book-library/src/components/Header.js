import React from "react";
import { useBook } from "../context/BookContext";

const Header = () => {
  /* const { setBook } = useBook(); */
  return (
    <div>
      <h1>My Book Library</h1>
      {/* <button onClick={() => setBook("Magic book here")}>Click Me</button> */}
    </div>
  );
};

export default Header;
