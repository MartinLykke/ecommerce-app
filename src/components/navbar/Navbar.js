import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Cart2, Search, Person, Circle } from "react-bootstrap-icons";
import "./Navbar.css";
function Navbar() {
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
          <ReactBootStrap.Navbar.Brand
            className="position-absolute top-25 start-50 logo"
            href="/"
          >
            Logo
          </ReactBootStrap.Navbar.Brand>

          <div className="navbar-menu ">
            <a className="icon-button" href="/login">
              <div className="icon-container text-dark">
                <h3>
                  <Person />
                </h3>
              </div>
            </a>
            <a className="icon-button" href="/cart">
              <div className="icon-container text-dark">
                <h3>
                  <Cart2 />
                </h3>
                <span className="icon-price">799</span>
                <span className="icon-number">1</span>
              </div>
            </a>
          </div>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
