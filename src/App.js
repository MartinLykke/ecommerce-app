import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer";

import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}>
              <Home products={products}></Home>
            </Route>
            <Route path="/signup" exact component={Signup} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
};

export default connect((state) => ({}), {})(App);
