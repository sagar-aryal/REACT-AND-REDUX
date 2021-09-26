import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router";
import Home from "../../pages/Home";
import ProductLists from "../../pages/ProductLists";
import Carts from "../../pages/Carts";
import SingleProduct from "../../pages/SingleProduct";

const Header = () => {
  return (
    <div>
      <h1>React Redux Shopping Cart</h1>
      <Nav />

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
