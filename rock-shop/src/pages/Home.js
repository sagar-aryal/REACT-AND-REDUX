import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="text-box">
        <h1 className="primary-heading">
          <span className="main-primary-heading">Welcome</span>
          <span className="sub-primary-heading">
            to my react-redux-sass shop
          </span>
        </h1>
        <Link to="/products" className="btn btn-mainpage">
          Let's Shop Together
        </Link>
      </div>
    </div>
  );
};

export default Home;
