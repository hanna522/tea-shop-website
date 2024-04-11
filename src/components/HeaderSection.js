import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeaderSection = ({ title, subtitle, children }) => {
  return (
    <Container fluid className="home-welcome-section" id="home">
      <Container className="left-content" style={{ color: 'var(--bg-color)' }}>
        <Row>
          <Col md={7} className="home-header">
            <h1 calssName="heading">
              { title }
            </h1>
            <h2 className="heading-name">
              { subtitle }
            </h2>
            { children }
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeaderSection;