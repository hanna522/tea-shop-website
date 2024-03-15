import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to <span className="purple">TEA Alley!</span>
              </h1>

              <h1 className="heading-name">
                If your repository history still contains references to the large files and you haven't shared your repository with others yet, you might consider rewriting your history to remove them completely.
              </h1>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;