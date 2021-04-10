import React, { useContext } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Cart2, Search, Person, Circle } from "react-bootstrap-icons";
import "./Navbar.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
function Navbar() {
  const [cart, setCart] = useContext(CartContext);

  const currency = "kr.";
  const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);

  return (
    <div>
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Form className="d-flex d-none">
                <ReactBootStrap.FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <ReactBootStrap.Button variant="outline-success">
                  <Search></Search>
                </ReactBootStrap.Button>
              </ReactBootStrap.Form>
              <ReactBootStrap.NavDropdown
                title="All products"
                id="basic-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Hardware
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Pc & tablets
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Mobil
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
          <Link
            to="/"
            className="position-absolute top-25 start-50 logo text-decoration-none"
          >
            <ReactBootStrap.Navbar.Brand className="text-decoration-none">
              Logo
            </ReactBootStrap.Navbar.Brand>
          </Link>

          <div className="navbar-menu ">
            <Link className="icon-button" to="/login">
              <div className="icon-container text-dark">
                <h3>
                  <Person />
                </h3>
              </div>
              <span className="icon-text">Login</span>
            </Link>
            <Link className="icon-button" to="/cart">
              <div className="icon-container text-dark">
                <h3>
                  <Cart2 />
                </h3>
              </div>

              {cart != 0 && (
                <>
                  <span className="icon-text">{totalPrice},-</span>
                  <span className="icon-cart-amount">{cart.length}</span>
                </>
              )}
            </Link>
          </div>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
