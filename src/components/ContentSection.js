import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContentSection = ({ title, subtitle, children }) => {
  return (
    <Container fluid className="home-info-section" id="home">
      <Container className="middle-content">
        <Row>
          <Col md={12} className="home-header">
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

export default ContentSection;