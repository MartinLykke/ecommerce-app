import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import { CartProvider } from "./context/CartContext";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <CartProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </CartProvider>
        </Router>
      </>
    );
  }
}

export default connect((state) => ({}), {})(App);
