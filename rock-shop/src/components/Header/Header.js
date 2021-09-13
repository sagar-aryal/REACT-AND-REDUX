import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router";
import Home from "../../pages/Home";
import ProductLists from "../../pages/ProductLists";
import Carts from "../../pages/Carts";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <h1>Rock-Shop</h1>
      <Nav />
      <Search />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductLists} />
        <Route path="/carts" component={Carts} />
      </Switch>
    </div>
  );
};

export default Header;
