import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2em" }}>
              <span className="purple"> Featured Menu </span>
            </h1>
            <ul className="home-about-social-links">
              <li classname="social-icons">
              <a href="/menu" className="icon-colour  home-social-icons">
                  <img src="../../Assets/home-main.png" alt="menu1" />
                </a>
              </li>
              <li classname="social-icons">
              <a href="/menu" className="icon-colour  home-social-icons">
                  <img src="../../Assets/home-main.png" alt="menu1" />
                </a>
              </li>
              <li classname="social-icons">
                <a href="/menu" className="icon-colour  home-social-icons">
                  <img src="../../Assets/home-main.png" alt="menu1" />
                </a>
              </li>
              <li classname="social-icons">
              <a href="/menu" className="icon-colour  home-social-icons">
                  <img src="../../Assets/home-main.png" alt="menu1" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;