import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Navbar from "./components/Navbar";
import Cart from "./components/pages/Cart";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default connect((state) => ({}), {})(App);
