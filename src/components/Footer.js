import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillWechat,
} from "react-icons/ai";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Contact</h3>
          <h3>Tel : 123-4567-8919</h3>
          <h3>Tel : 123-4567-8919</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Location</h3>
          <h3>1222 harrison st, San Jose</h3>
          <h3>CA, 94103</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Location</h3>
          <h3>1222 harrison st, San Jose</h3>
          <h3>CA, 94103</h3>
        </Col>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="http://google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="http://google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="http://google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillWechat />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;