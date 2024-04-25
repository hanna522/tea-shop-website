import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

function NavBar() {
  const { translate, setLanguage } = useLanguage();
  const [expand, updateExpanded] = useState(false);
  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="sticky">
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
          <Nav
            className="ms-auto language vertical-link"
            defaultActiveKey="#home"
          >
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                updateExpanded(false);
                handleSelectLanguage("en");
              }}
            >
              English
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                updateExpanded(false);
                handleSelectLanguage("zh");
              }}
            >
              中文
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                {translate("home.title")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/menu"
                onClick={() => updateExpanded(false)}
              >
                {translate("menu.title")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/location"
                onClick={() => updateExpanded(false)}
              >
                {translate("location.title")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/leaves"
                onClick={() => updateExpanded(false)}
              >
                {translate("leaves.title")}
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav
            className="ms-auto language collapse-link"
            defaultActiveKey="#home"
          >
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  handleSelectLanguage("en");
                }}
              >
                English
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  handleSelectLanguage("zh");
                }}
              >
                中文
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
