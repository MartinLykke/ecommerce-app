import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Cart2, Search } from "react-bootstrap-icons";
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
              <ReactBootStrap.NavDropdown title="Men" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Tøj
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Sko
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="Women" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Tøj
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Sko
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
          <ReactBootStrap.Navbar.Brand
            className="position-absolute top-25 start-50"
            href="/"
          >
            Logo
          </ReactBootStrap.Navbar.Brand>
          <h2 className="absolute sticky-top">
            <ReactBootStrap.Nav.Link href="/cart">
              {" "}
              <Cart2 />
            </ReactBootStrap.Nav.Link>{" "}
          </h2>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
