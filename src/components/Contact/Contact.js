import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";

function Home() {
  return (
    <section>
      <Container className="left-content">
          <Row>
            <h1>Customer</h1>
          </Row>
          <Row>
            <h1>Business</h1>
          </Row>
        </Container>
    </section>
  );
}

export default Home;