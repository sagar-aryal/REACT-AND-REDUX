import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Rock Shop.</h1>
      <Link to="/products">Let's Shop Together</Link>
    </div>
  );
};

export default Home;
