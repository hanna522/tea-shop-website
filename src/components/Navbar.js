import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
  
function NavBar() {
  const [expand, updateExpanded] = useState(false);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="vertical-nav">
          <Nav className="ms-auto language vertical-link" defaultActiveKey="#home">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}>
                English
            </Nav.Link>
            <Nav.Link
              as={Link}å
              to="/"
              onClick={() => updateExpanded(false)}>
                Chinese
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/menu"
                onClick={() => updateExpanded(false)}
              >Menu
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/location"
                onClick={() => updateExpanded(false)}
              >Location
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto language collapse-link" id="co" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}>
                  English
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}å
                to="/"
                onClick={() => updateExpanded(false)}>
                  Chinese
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;