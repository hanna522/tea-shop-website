import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../LanguageContext";
import leafPic1 from "../../Assets/leaf.jpeg";
import leafPic2 from "../../Assets/tea2.png";
import leafPic3 from "../../Assets/tea1.png";

export default function Leaves() {
  const { translate, setLanguage } = useLanguage();
  return (
    <>
      <Container fluid className="leaves-info-section">
        <Container className="leaves-info-content">
          <Row className="home-header">
            <h1>{translate("leaves.title")}</h1>
            <Col md={6}>
              <section>
                <h2>{translate("leaves.our_leaves.subtitle")}</h2>
                <p>{translate("leaves.our_leaves.intro1")}</p>
              </section>
              <section>
                <p>{translate("leaves.our_leaves.intro2")}</p>
              </section>
            </Col>
            <Col md={6}>
              <img
                src={leafPic1}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          <Row className="home-header">
            <Col md={6}>
              <img
                src={leafPic2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={6}>
              <section>
                <h2>{translate("leaves.tea1.subtitle")}</h2>
                <p>{translate("leaves.tea1.intro1")}</p>
              </section>
              <section>
                <p>{translate("leaves.tea1.intro2")}</p>
              </section>
            </Col>
          </Row>

          <Row className="home-header">
            <Col md={6}>
              <section>
                <h2>{translate("leaves.tea2.subtitle")}</h2>
                <p>{translate("leaves.tea2.intro1")}</p>
              </section>
            </Col>
            <Col md={6}>
              <img
                src={leafPic3}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
