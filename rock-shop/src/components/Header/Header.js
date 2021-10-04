import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router";
import Home from "../../pages/Home";
import ProductLists from "../../pages/ProductLists";
import Carts from "../../pages/Carts";
import SingleProduct from "../../pages/SingleProduct";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-box">
          <Link to="/">
            <div className="logo">
              <span>s</span>
              <span>h</span>
              <span>o</span>
              <span>p</span>
              <span>€</span>
            </div>
          </Link>
        </div>
        <Nav />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductLists} />
        <Route path="/carts" component={Carts} />
        <Route path="/product/:productId" component={SingleProduct} />
      </Switch>
    </div>
  );
};

export default Header;
