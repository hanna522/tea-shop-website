import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram, AiFillWechat } from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-content">
          <h2>Contact</h2>
          <h3>(408) 217-9486</h3>
        </Col>
        <Col md={4} className="footer-content">
          <h2>Location</h2>
          <h3>40 S 1st St</h3>
          <h3>San Jose, CA 95113</h3>
          <h3>Downtown</h3>
        </Col>
        <Col md={4} className="footer-content">
          <h2>Open Hours</h2>
          <h3>Tue-Sat : 8:00 PM - 2:00 AM</h3>
          <h3>Mon, Sun : 8:30 PM - 2:00 AM</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.instagram.com/teaalley/?hl=en"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/TeaAlleySJ/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="http://u.wechat.com/kC8XV2uMMwBDxtmdxgl-sn4"
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
